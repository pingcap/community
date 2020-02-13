# How to contribute

TiDB is a community driven open source project and we welcome any contributor.
The process of contributing to the TiDB project may be different than many
other projects you have been involved in. This document outlines some
conventions about development workflow, commit message formatting, contact
points and other resources to make it easier to get your contribution accepted.
This document is the canonical source of truth for things like supported
toolchain versions for building and testing TiDB.

This document is the single source of truth for how to contribute to the code
base. Feel free to browse the open issues and file new ones, all feedback
welcome!

## Contents

<!-- vim-markdown-toc GFM -->

* [Before you get started](#before-you-get-started)
    * [Sign the CLA](#sign-the-cla)
    * [Code of Conduct](#code-of-conduct)
    * [Setting up your development environment](#setting-up-your-development-environment)
        * [TiDB](#tidb)
        * [TiKV](#tikv)
* [Your First Contribution](#your-first-contribution)
    * [Find a good first topic](#find-a-good-first-topic)
    * [RFCs or Proposals](#rfcs-or-proposals)
* [Your first PR](#your-first-pr)
    * [Coding Style](#coding-style)
    * [Code Comment Style](#code-comment-style)
    * [Commit Message and Pull Request Style](#commit-message-and-pull-request-style)
* [Contributing](#contributing)
    * [Communication](#communication)
    * [GitHub workflow](#github-workflow)
    * [Bot Commmands](#bot-commmands)
    * [Open a Pull Request](#open-a-pull-request)
    * [Code Review](#code-review)
    * [Testing](#testing)
    * [Benchmark](#benchmark)
    * [Security](#security)
    * [Documentation](#documentation)
    * [Issues Management or Triage](#issues-management-or-triage)

<!-- vim-markdown-toc -->

## Before you get started

### Sign the CLA

TBD

### Code of Conduct

Please make sure to read and observe our [Code of Conduct](../CODE_OF_CONDUCT.md).

### Setting up your development environment

#### TiDB

Setting up a Go development environment: [How to Write Go Code](http://golang.org/doc/code.html).

**NOTE**: TiDB uses [`Go Modules`](https://github.com/golang/go/wiki/Modules)
to manage dependencies. The version of GO should be **1.13** or above.

You'll need `GOPATH` defined, and `PATH` modified to access your Go binaries. A
common setup is the following but you could always google a setup for your own
flavor.

```sh
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
```

Then you can use `make` command to build TiDB.

#### TiKV

See [Building and setting up a development
workspace](https://github.com/tikv/tikv/blob/master/CONTRIBUTING.md#building-and-setting-up-a-development-workspace).

## Your First Contribution

### Find a good first topic

You can start by finding an existing issue with the
[help-wanted](https://github.com/pingcap/tidb/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
label in the tidb repository. These issues are well suited for new contributors. BTW,
there's always a need for more test coverage. You can also start with an area
that has [low coverage](https://codecov.io/gh/pingcap/tidb).

You can also join one of the [active working groups](../working-groups) to
participate in a community activity. Start with attending working group meetings or
joining the slack channel.

### RFCs or Proposals

* [TiDB Proposals](https://github.com/pingcap/tidb/tree/master/docs/design)
* [TiKV RFCs](https://github.com/tikv/rfcs)

## Your first PR

### Coding Style

See [PingCAP coding style guide](https://github.com/pingcap/style-guide) for details.

### Code Comment Style

See [Code Comment Style](./code-comment-style.md) for details.

### Commit Message and Pull Request Style

See [Commit Message and Pull Request Style](./commit-message-pr-style.md) for details.

## Contributing

### Communication

See [Communication](../communicating.md) for details.

### GitHub workflow

See [Github Workflow](./workflow.md) for details.

### Bot Commmands

See [SRE-BOT Command Help](./command-help.md) for details.

### Open a Pull Request

Before you move on, please make sure what your issue and/or pull request is, a
simple bug fix or an architecture change.

In order to save reviewers' time, each issue should be filed with template and
should be sanity-checkable in under 5 minutes.

**1. Is this a simple bug fix?**

Bug fixes usually come with tests. With the help of continuous integration
test, patches can be easy to review. Please update the unit tests so that they
catch the bug! Please check example
[here](https://github.com/pingcap/tidb/pull/2808).

**2. Is this an architecture improvement?**

Some examples of "Architecture" improvements:

- Converting structs to interfaces.
- Improving test coverage.
- Decoupling logic or creation of new utilities.
- Making code more resilient (sleeps, backoffs, reducing flakiness, etc).

If you are improving the quality of code, then justify/state exactly what you
are 'cleaning up' in your Pull Request so as to save reviewers' time. An
example will be this [pull request](https://github.com/pingcap/tidb/pull/3113).

If you're making code more resilient, test it locally to demonstrate how
exactly your patch changes things.

**Nit**: in order to improve the efficiency of other contributors and avoid
duplicated working, it's better to leave a comment in the issue that you are
working on.

### Code Review

TBD

### Testing

TBD

### Benchmark


If the change affects TIDB's performance, the benchmark data is normally required in the description. You can use the [benchstat](https://godoc.org/golang.org/x/perf/cmd/benchstat) tool to format benchmark data for change descriptions.

The following script runs benchmark multiple times (10)

```bash
go test -run=^$ -bench=BenchmarkXXX -count=10
```

**Tip**: To make the result more readable, you can copy and paste the output to both the old.txt and new.txt, and then run: 

```
benchstat old.txt new.txt
```


Paste the result into your pull request description. Here is a good [example](https://github.com/pingcap/tidb/pull/12903#issue-331440170).

### Security

TBD

### Documentation

TBD

### Issues Management or Triage

TBD
