## 序


在 2019 年 12 月 31 日，我们在 GitHub 上正式开源了 [Chaos-mesh](https://github.com/pingcap/chaos-mesh)。作为一个云原生的混沌测试平台，Chaos Mesh 提供在 Kubernetes 平台上进行混沌测试的能力。在现实世界中，各类故障可能会随时随地的发生，其中有很多故障我们无法避免，例如磁盘突然写坏，或者机房突然断网断电等等。这些故障可能会给公司造成巨大损失，因此提升系统对于故障的容忍度成为很多工程师努力的目标。

为了更方便地验证系统对于各种故障的容忍能力，Netflix 创造了一只名为 Chaos 的猴子，并且将它放到 AWS 云上，用于向基础设施以及业务系统中注入各类故障类型。这只 “猴子” 就是混沌工程起源。在 PingCAP 我们也面临同样的问题，所以在很早的时候就开始探索混沌工程，并逐渐在公司内部实践落地。

在最初的实践中我们为 TiDB 定制了一套自动化测试平台，在平台中我们可以自己定义测试场景，并支持模拟各类错误情况。但是由于 TiDB 生态的不断成熟，各类周边工具 TiDB Binlog、TiDB Data Migration、TiDB Lightning 等的出现，测试需求也越来越多，逐渐出现了各个组件的的测试框架。但是混沌实验的需求是共有的，通用化的混沌工具就变的尤为重要。最终我们将混沌相关实现从自动化测试平台中抽离出来，成为了 Chaos Mesh 的最初原型，并经过重新设计和完善，最终于 Github 上开源，[项目地址](https://github.com/pingcap/chaos-mesh)

Chaos-mesh 目前仍旧处于一个非常初级的阶段，同时也正在处于对功能、稳定性、扩展性的进行开发的高速迭代期。我们非常欢迎所有对开源社区、云原生以及和混沌工程感兴趣的人来参与 Chaos-mesh 的社区合作。同时，我们也注意到了社区开发人员在参与 Chaos-mesh 以及 PingCAP 下面其他的开源项目进行开发所面临的困难，门槛以及对项目、结构不熟悉所带来的问题。我们推出了 Contributing Tutorials 系列来帮助开发成为我们的 Contributor。

为了让 Chaos-mesh 继续《Contirbuting Tutorials for Chaos-mesh》 这一本册子旨在指导所有开发者在为 Chaos-mesh 做出代码贡献所需要经历的整个流程。 通过这本册子，你将了解如何搭建 Chaos-mesh 的本地开发工具，Chaos-mesh 的项目结构与介绍和 Chaos-mesh 的常用工具链。同时，针对第一次参与开源项目的开发者们，我们也准备了索引与指导来帮助你们参与开源项目。

这本册子并不是单纯用来阅读，而是需要读者一边阅读，一边按照册子中所给出的指导来执行，一步步的成为 Chaos-mesh 项目的 Contributor，从而能更深刻的理解云原生与混沌工程。


## 评测

由于 Contirbuting Tutorials for Chaos-mesh》涵盖了代码贡献的整个流程，在这里我们针对不同水平段的开发者们有着不同的阅读顺序建议。在正式开始踏上 Chaos-mesh contributing 之旅之前，我们需要您回答以下几个问题：


1. 你了解 Golang / Docker / Git 么？

2. 你之前参与过 Github 开源项目吗？

3. 你是否了解 Kubernetes / helm ?

4. 你之前是否参与过 Kubernetes 平台上的 Operator 应用开发？



# 了解、使用基础工具

1. 基础开发环境搭建
2. Fork 与 Clone
3. 成为 Contributor 的第一步

# 进行 Chaos-mesh 本地开发

1. 搭建 Chaos-mesh 本地开发环境
2. 了解本地工具链
3. 从第一个开发试验开始

# 参考资料
1. Chaos-mesh 模块介绍
2. 常见 Git 使用场景。
3. CI 错误指南