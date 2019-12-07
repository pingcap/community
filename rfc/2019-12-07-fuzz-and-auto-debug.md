# Proposal: Fuzz and Auto Debug Tool

- Author(s):     [DQinYuan](https://github.com/DQinYuan)
- Last updated:  2019-12-07
- Discussion at:  [issue#124](https://github.com/pingcap/community/issues/124)

## Abstract

There is a lot of uncertainty in Chaos and Fuzz test of complicated software like TiDB. Developers often costs a few of weeks to localize the root cause. This proposal may help on this with fuzz mutation and auto debug.



## Background

There are many troublesome bugs,  you don't know what's going wrong, even worse, you can not reproduce it .  

 

[Statistical debug](https://stackoverflow.com/questions/505907/what-is-statistical-debugging) is a common auto debug idea, but it need a lot of test cases to accurately localize bug position.



Fuzz test is a good idea to apply unlimited case to application, it will provide a bulk of cases to Statistical Debug.  Mutation-Based Fuzzing can introduce small changes  to existing inputs that may still keep the input valid. Some paper guide mutations with some  algorithms to converge input in a root bug. 



## Proposal

This tool will archieve following goals:



- SQLFuzz with mutation
- General fuzz with mutation
- Auto debug in Go and Rust code by highlighting suspicious code block



## Rationale

We already test TiDB with some simple fuzz test tool, like randgen or sqlsmith, which only do random fuzz，without direction to converge . Some fuzz tool with mutation can   mutate input  from some seeds gradually, like [libFuzzer](https://llvm.org/docs/LibFuzzer.html) or [Angora](https://github.com/AngoraFuzzer/Angora).  We can guide fuzz mutation by some algorithms（for example, [Angora](https://github.com/AngoraFuzzer/Angora) is guided by branch coverage; [NEZHA](http://www.cs.columbia.edu/~suman/docs/nezha.pdf) is guided by  delta-diversity ） ,  so that it will converge to some bug. We will apply this technology in more general area,  not only apply on SQLFuzz, but also in general fuzz.



Statistical debug is the idea of using statistical models of program success/failure to track down bug root cause.  By monitoring success/failure code execution path in fuzz convergence，we will get more precise statistical model to localize   suspicious code blocks. Then we will present them on UI.



## Implementation



Our implementation will be divided into several stages:



- Understand and Do some experiments on different fuzz mutation algorithms, including libFuzzer,  Angora and SQLFuzz in [APOLLO](http://www.vldb.org/pvldb/vol13/p57-jung.pdf). We will prepare some seeds and mutation times to converge in a bug for each algorithm, and chose the algorithm which consume minimal times for convergence.
- Design general fuzz, perhaps including input type, mutation function and check function.
- Develop a Go instrumentation  tool which can insert code in every basic block start point（including library code）.
- Develop a Rust instrumentation  tool which can insert code in every basic block start point.
- Do some experiments to  choose statistical model which can localize suspicious code block with more accuracy.



## Open issues



- How to  distinguish code execution (including asynchronization) **related to** different cases？