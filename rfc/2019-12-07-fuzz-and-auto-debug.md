# Proposal: Fuzz and Auto Debug Tool

- Author(s):     [DQinYuan](https://github.com/DQinYuan)
- Last updated:  2019-12-07
- Discussion at:  [issue#124](https://github.com/pingcap/community/issues/124)

## Abstract

There is a lot of uncertainty in Chaos and Fuzz test of complicated software like TiDB. Developers often cost a few of weeks to locate the root cause. This proposal may help to improve this with fuzz mutation and auto debug.

## Background

There are many troublesome bugs, you don't know what's going wrong, even worse, you can not reproduce it.

[Statistical debug](https://stackoverflow.com/questions/505907/what-is-statistical-debugging) is a common auto debug idea, but it needs a lot of test cases to accurately locate the bug position.

Fuzz test is a good idea to apply unlimited case to application, it will provide a bulk of cases to Statistical Debug. Mutation-Based Fuzzing can introduce small changes to existing inputs that may still keep the input valid. Some paper guide mutations with some algorithms to converge input in a root bug. 

## Proposal

This tool achieves the following goals:

- SQLFuzz with mutation
- General fuzz with mutation
- Auto debug in Go and Rust code by highlighting suspicious code block

## Rationale

We already test TiDB with some simple fuzz test tool, like randgen or sqlsmith, which only do random fuzz， without direction to converge. Some fuzz tool with mutation can mutate input from some seeds gradually, like [libFuzzer](https://llvm.org/docs/LibFuzzer.html) or [Angora](https://github.com/AngoraFuzzer/Angora). We can guide fuzz mutation by some algorithms（for example, [Angora](https://github.com/AngoraFuzzer/Angora) is guided by branch coverage; [NEZHA](http://www.cs.columbia.edu/~suman/docs/nezha.pdf) is guided by delta-diversity）, so that it will converge to some bug. We will apply this technology in more general area, not only apply on SQLFuzz, but also in general fuzz.

Statistical debug is the idea of using statistical models of program success/failure to track down bug root cause. By monitoring success/failure code execution path in fuzz convergence， we will get more precise statistical model to locate suspicious code blocks. Then we will present them on UI.

## Implementation

Our implementation will be divided into several stages:

- Understand and Do some experiments on different fuzz mutation algorithms, including libFuzzer,  Angora and SQLFuzz in [APOLLO](http://www.vldb.org/pvldb/vol13/p57-jung.pdf). We will prepare some seeds and mutation times to converge in a bug for each algorithm, and chose the algorithm which consume minimal times for convergence.
- Design general fuzz, perhaps including input type, mutation function and check function.
- Develop a Go instrumentation  tool which can insert code in every basic block start point（including library code）.
- Develop a Rust instrumentation  tool which can insert code in every basic block start point.
- Do some experiments to  choose statistical model which can locate suspicious code blocks with more accuracy.

### Composition

This project includes instruction tools and a statistical server, user should use instruction tool to recompile his interesting application, then deploy it, so called "wrapped-app".

### Statistical Server

Statistical server is composed of Fuzz and Debug module. Fuzz module will fuzz an input to wrapped-app every loop. After execution, it will push the input to Debug module. Then, Debug module will access the trace of this input in wrapped-app. Web page can access statistical info from statistical server during or after tests, as follow:
```
                   +-----------------------------------------------------------------------------------+
                   |                             feedback to mutation algorithm                        |
                   |                                                                                   |
   +----------------------------+                                                                      |
   |Fuzz module    |            |                                                                      |
   |               v            |                                                                      |
   |           +---+----+       |                                                                      |
   |           |mutation|       |                                                                      |
   |           +---+----+       |                                                                      |
   | mutated input |            |                                                                      |
   |               v            |                                                                      |
   |           +---+-----+      |     +---------------+                                                |
   |           |execution+----------->+  wrapped app  |                                                |
   |           +---+-----+      |     +---+-----------+                                                |
   |  exec result  |            |         ^                                                            |
   |               v            |         |                                                            |
   |            +--+---+        |         | get trace info of this input                               |
   |            |check |        |         |                                                            |
   |            +--+---+        |         |                                                            |
   |               |            |         |                                                            |
   +----------------------------+         |                                                            |
                   |            +-----------------------------------------------+                      |
                   |            |         |                        Debug module |                      |
           input,  |            |         |                                     |                      |
check pass or not  |            |         |                                     |                      |
                   |            | +-------+-+       +-----------------+         |                      |
                   +------------> |collector+------>+statistical model+--------------------------------+
                                | +---------+       +-------+---------+         |
                                |                           ^                   |
                                |                           |                   |
                                +-----------------------------------------------+
                                                            |
                                                            |
                                                       +----+---+
                                                       |frontend|
                                                       +--------+

```

### Instruction tool

Like [go tool cover](https://blog.golang.org/cover), we will add code at the beginning of every code basic block in conpiler phase:
```go
trace_util_0.Count(_main_00000, 0)   // Instruction
flag.Parse()
if *version {
    trace_util_0.Count(_main_00000, 5)  // Instruction
    fmt.Println(printer.GetTiDBInfo())
    os.Exit(0)
}
trace_util_0.Count(_main_00000, 1)   // Instruction
registerStores()
//.....
```

`trace_util_0` in above code is an extra package generated by Instruction tool, this package will record start and end line number of every basic block:
```go
pathCounter := &CoverCounter{
    sql:sql,
    m: map[string]*Cover{

        "bindinfo/bind.go": {
            Pos: []int{
        19,      20, //[0]
        21,      22, //[1]
        23,      24, //[2]
        28,      29, //[3]
        32,      32, //[4]
        //...
```

## Open issues

- How to distinguish code execution (including asynchronization) **related to** different cases？
