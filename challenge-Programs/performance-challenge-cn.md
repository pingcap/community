# TiDB Performance Challenge Program

TiDB 产品的每一次微小进步都离不开社区小伙伴的支持和帮助，我们很欣喜地看到：越来越多的小伙伴参与到 TiDB 开源社区的建设当中，越来越多的小伙伴在 TiDB 开源社区用自己的方式表达着对于开源的热情和对于技术的追求，TiDB 也在社区小伙伴的推动下，不断地刷新着过去的成绩。

我们感谢并始终相信开源社区的力量，为了让 TiDB 产品在稳定性、性能、易用性等方面更上一层楼，我们决定推出一个中长期的挑战计划 —— TiDB Challenge Program，将一些 Issue 开放出来，供社区小伙伴共同探讨，共同解决，每一个 Issue 都将对应一定的积分，参赛选手可在每个赛季结束后用获得的积分兑换社区大礼。

TiDB Performance Challenge Program 作为 TiDB Challenge Program 系列的第一赛季，将聚焦 Performance Improvement，于 2019 年 11 月 4 日正式开启，2020 年 2 月 4 日结束，持续 3 个月。

欢迎大家加入 [TiDB Community Slack Workspace](https://join.slack.com/t/tidbcommunity/shared_invite/enQtNzc0MzI4ODExMDc4LWYwYmIzMjZkYzJiNDUxMmZlN2FiMGJkZjAyMzQ5NGU0NGY0NzI3NTYwMjAyNGQ1N2I2ZjAxNzc1OGUwYWM0NzE) 和 [tikv-wg Slack Workspace](http://tikv.org/chat)，参赛过程中遇到任何问题都可以直接通过 **#performance-challenge-program** channel 与我们取得联系。

## 赛前准备
- 参考 [Join GitHub](https://github.com/join) 完成 GitHub 账号的创建。
- 参考 [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) 在本地环境中安装 Git。
- 通过 [Set up Git](https://help.github.com/en/github/getting-started-with-github/set-up-git) 配置 Git 访问 GitHub。

## 报名

- 报名方式： [发起 Issue](https://github.com/tidb-perf-challenge/pcp/issues/new?template=performance-challenge-program.md&title=PCP%3A+Sign+Up) 至 [tidb-perf-challege/pcp](https://github.com/tidb-perf-challenge/pcp) repo
- 格式要求：
   - 标题：PCP/Sign Up
   - 内容：
      - 个人参赛：请对你自己进行简要介绍，并留下可以与你取得联系的邮箱地址。
      - 团队参赛：请对你的团队进行简要介绍，写明团队名称，每个团队成员的 GitHub ID，并留下可以与你们取得联系的邮箱地址。可参考 [示例](https://github.com/tidb-perf-challenge/pcp/blob/master/.github/ISSUE_TEMPLATE/performance-challenge-program.md)。

**注意事项：**
   
   - 以团队形式参赛，每队成员最多三人。
   - 有 PingCAP 内部员工参与的队伍，将作为打星队伍，不参与积分总排名，所获积分仍具有兑换权益。
   - **如需更改报名信息，需关闭错误报名 Issue，重新开启一个新的 Issue 进行报名，暂不支持在原始 Issue 上进行编辑**。

## 参赛流程

TiDB  Performance Challenge Program 全流程包括：查看任务->领取任务->实现任务->提交任务->评估任务->获得积分->积分兑换，其中“获得积分”之前的步骤都将在 GitHub 上实现。

### 第一步：查看 / 提出 Issue

当前开放的 Issue 列表可分别在 [TiDB-Performance Challenge Program Project](https://github.com/pingcap/tidb/projects/26)、[TiKV-Performance Challenge Program Project](https://github.com/tikv/tikv/projects/20)、[PD-Performance Challenge Program Project](https://github.com/pingcap/pd/projects/2) 中的 TODO Columns 查看。

其中 TODO Columns 按照题目难易程度划分了 3 列，分别是：TODO/Easy、TODO/Medium、TODO/Hard。每一个 Issue 还设置了一些标签，为方便大家理解，现将 TiDB Performance Challenge 相关标签所代表含义做如下说明：

- “difficulty/easy”、“difficulty/medium”、“difficulty/hard”：Issue 难度级别。
- “Component/XX”：Issue 所涉及的模块。

除了当前开放的 Issue，如果你有其他关于 **Performance Improvement** 的想法想要实现，可通过发起 Issue 的方式提出 Proposal。发起 Issue 之前请确保你已经了解了 [Contribution Guide](https://github.com/pingcap/community/blob/master/CONTRIBUTING.md) 和 [Contributor Covenant Code of Conduct](https://github.com/pingcap/community/blob/master/CODE_OF_CONDUCT.md)。

- TiDB 相关 Proposal 可通过 [TiDB Issue 发起通道](https://github.com/pingcap/tidb/issues/new?labels=type%2Fenhancement&template=feature-request.md) 提交至 TiDB Repo；
- TiKV 相关 Proposal 可通过 [TiKV Issue 发起通道](https://github.com/tikv/tikv/issues/new?template=feature-request.md) 提交至 TiKV Repo；
- PD 相关 Proposal 可通过 [PD Issue 发起通道](https://github.com/pingcap/pd/issues/new?labels=type%2Fenhancement&template=feature-request.md) 提交至 PD Repo。


格式要求：Issue 标题前需添加“**REQ-PCP**”标记，例如：REQ-PCP: Further extract tidb_query into different workspaces。


### 第二步：领取任务

如果你决定认领某一个 Issue，请先在这个 Issue 中回复 **“/pick-up-challenge”**， 后台将自动判断你所拥有的积分是否具备挑战此 Issue 的资格，积分满足要求即可开始挑战，积分不满足要求，需按照系统提示获得满足挑战要求的积分。

**需要特别提醒的是：**

- **向量化函数 Issue（[TiDB #12105](http://github.com/pingcap/tidb/issues/12105)、[TiKV #5751](http://github.com/tikv/tikv/issues/5751)）无需回复 **“/pick-up-challenge”**，可直接挑战 Issue 中的函数任务。每完成 Issue 中的一个函数任务，即可提交一个 PR，PR 格式与常规的 PCP PR 相同（详见[第四步：提交代码](#第四步提交代码)），首行需要为`PCP #12105`或`PCP #5751`，每一个成功被 Merge 的 PR 对应 50 积分，Issue 中所有函数任务被完成后，该 Issue 将会被 close。**
- 每个参赛主体（含个人及团队）参与 TiDB 性能挑战赛的**初始积分为 0**，需要先完成 “Easy” 的 Issue 将积分积累至 400 分以上（含 400 分），才有资格挑战难度为“Medium”和“Hard”的题目。
- 每个参赛主体一次只能领取一个任务。

### 第三步：实现代码

在实现代码的过程中如果遇到问题，可以通过 **#performance-challenge-program** channel 与我们进行探讨，Issue 指定的 Mentor 会尽可能在 24h 内予以回复。不过，在提出问题之前一定要确保你已经仔细阅读过题目内容并且已经完成了参考资料的学习哦～

### 第四步：提交代码

如果你觉得你的方案已经达到了题目的要求，可在相关 Repo（例如 tidb）的 master 分支上实现你的方案，并将代码以 GitHub Pull Request（简称 PR）的形式提交到相应的 GitHub Repo 上。当 PR 提交后，可在 PR 的评论中 at 该题目的 Mentor 进行代码评审，Mentor 会尽可能在方案提交后的 48h 内完成评估。

注：提交的 PR 需要满足 [Commit Message and Pull Request Style](https://github.com/pingcap/community/blob/master/commit-message-pr-style.md) 中定义的规范。

提交方式：代码完成后，参赛者需提交 GitHub Pull Request(PR) 到相应 Repo，如何提交 PR 可参考 [GitHub Workflow](https://github.com/pingcap/community/blob/master/contributors/workflow.md)，这里也有一些 [SRE-BOT Command Help](https://github.com/pingcap/community/blob/master/contributors/command-help.md) 供大家参考。

格式要求：PR 的第一行需要指定任务 Issue 的编号，再写每个 repo 要求的格式，示例：
 
```
PCP #12345
 
<!-- The following description -->
```

### 第五步：代码评估及积分授予

评估规则：PR Reviewer 会对 PR 进行代码格式、代码功能和性能的 Review，获得 2 个以上 Reviewer 认可（即在 PR 中评论 “LGTM”）的 PR 将会被 merge 到对应 repo 的主干。

如果你的 PR 被 Merge 到主干，那么就意味着该题目被你挑战成功，你将获得该题目对应的积分；其他参赛选手将失去对该题目的挑战资格，已经提交的 PR 也会被 Close。

否则，你需要继续和 PR 的 Reviewer 探讨实现方案和细节，合理的接受或者拒绝 Reviewer 对 PR 的评审建议。


### 第六步：积分兑换

积分获得情况将会在 [TiDB 性能挑战赛官方网站](https://pingcap.com/community-cn/tidb-performance-challenge/) 呈现。所获积分可兑换 PingCAP Open Source Contribution Bonus，包括但不限于：TiDB 限量版帽衫、The North Face 定制电脑双肩包等。

兑换时间：**每个赛季结束后至下一赛季结束前**可进行积分兑换，下一个赛季结束时，前一赛季的可兑换积分将直接清零，不可再进行社区礼品兑换。

兑换方式：本赛季结束后填写礼品兑换表（届时将开放填写权限）。

## 学习资料

这里有 [TiDB 精选技术讲解文章](https://github.com/pingcap/presentations/blob/master/hackathon-2019/reference-document-of-hackathon-2019.md)，帮助大家轻松掌握 TiDB 各核心组件的原理及功能；还有 [PingCAP University](https://university.pingcap.com/?diliater=6YvzZjyL97Z5c4G09GRzLQ==) 在线视频课程，帮助大家快速熟悉 TiDB 原理、架构及最佳实践，点击以上链接即可轻松获取。

这将是一次集体智慧的碰撞，我们期待着与社区小伙伴一起创造无限可能！

