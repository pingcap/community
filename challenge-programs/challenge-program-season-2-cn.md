# Challenge Program Season 2

欢迎来到聚焦于 TiDB **易用性**的挑战赛第二季：TiDB Usability Challenge Program！

## 目录

<!-- vim-markdown-toc GFM -->

* [第二季介绍](#第二季介绍)
* [赛前准备](#赛前准备)
* [比赛报名](#比赛报名)
    * [个人参赛者](#个人参赛者)
    * [团队参赛者](#团队参赛者)
    * [更改报名信息](#更改报名信息)
* [参赛流程](#参赛流程)
    * [第一步：查看/新建任务](#第一步查看新建任务)
        * [查看已有任务](#查看已有任务)
        * [新建任务](#新建任务)
    * [第二步：领取任务](#第二步领取任务)
    * [第三步：实现代码](#第三步实现代码)
    * [第四步：提交代码](#第四步提交代码)
    * [第五步：代码评估及积分授予](#第五步代码评估及积分授予)
    * [第六步：积分兑换](#第六步积分兑换)
* [**学习资料**](#学习资料)
* [**FAQ（持续更新中）**](#faq持续更新中)
    * [**Q1：如何进行报名信息变更？报名信息变更后积分将如何变化？**](#q1如何进行报名信息变更报名信息变更后积分将如何变化)
    * [**Q2：如何放弃/变更已领取的任务？**](#q2如何放弃变更已领取的任务)
    * [**Q3：能否邀请 PingCAP 内部员工组队参赛？**](#q3能否邀请-pingcap-内部员工组队参赛)
    * [**Q4：我不记得哪个 repo 是否完成了 200 分怎么办？**](#q4我不记得哪个-repo-是否完成了-200-分怎么办)
    * [**Q5 参加过第一季的选手如何继承历史积分？**](#q5-参加过第一季的选手如何继承历史积分)

<!-- vim-markdown-toc -->

## 第二季介绍

本着「用户的需求就是我们的方向」，这一季的大部分需求都由用户投票产生，它们将以任务的形式呈现在第二季挑战赛中。和以前一样，参赛选手可通过认领并完成任务的方式获得积分，在赛季结束后进行奖品兑换。

- 比赛时间：2020-03-02 ~ 2020-05-30，持续 3 个月；
- 交流渠道：我们使用 Slack 进行沟通交流，欢迎大家加入 [TiDB Community Slack Workspace](https://join.slack.com/t/tidbcommunity/shared_invite/enQtNzc0MzI4ODExMDc4LWYwYmIzMjZkYzJiNDUxMmZlN2FiMGJkZjAyMzQ5NGU0NGY0NzI3NTYwMjAyNGQ1N2I2ZjAxNzc1OGUwYWM0NzE) 的 **#tidb-challenge-program** channel，在这里你可以：
    - 和 Mentor 或其他参赛选手讨论任务如何实现
    - 找 Mentor 或相关 SIG Reviewer 以上角色的同学 Review PR
    - 反馈机器人（sre-bot）故障
    - 找 PingCAP 内部同学组队（不过需要注意和 PingCAP 内部同学的组队规则哟，见 [团队参赛者](#团队参赛者)）
    - 参赛过程中遇到任何其他问题

## 赛前准备

- 参考 [Join GitHub](https://github.com/join) 创建 GitHub 账号。
- 参考 [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) 在本地环境中安装 Git。
- 通过 [Set up Git](https://help.github.com/en/github/getting-started-with-github/set-up-git) 配置 Git 访问 GitHub。

## 比赛报名

报名方式：在 [tidb-challenge-program/register](https://github.com/tidb-challenge-program/register) 仓库 [创建一个报名 Issue](https://github.com/tidb-challenge-program/register/issues/new?template=challenge-program-register.md&title=UCP%2FSignup)。

报名 Issue 的标题统一为：**"UCP/Sign Up"**，报名 Issue 的内容因个人参赛和团队参赛而异，下面分别介绍。

### 个人参赛者

和第一季不一样的是，第二季中个人参赛者也需要以团队的方式进行报名，团队名称可以是你的 GitHub ID，也可以是其他狂拽酷炫吊炸天的名字，Team Leader 填写你的 GitHub ID 和邮箱即可。一个参考例子：

```
## Team Sign-up

- Team Name: PingCAP
- Team Leader: @sre-bot(sre-bot@pingcap.com)
```

### 团队参赛者

团队参赛者需要有一个队长，也就是 Team Leader，接着分别描述团队中的其他成员。报名时需要填写队长和成员的 GitHub ID 和联系邮箱。一个参考例子：

```
## Team Sign-up

- Team Name: PingCAP
- Team Leader: @eva-00-leader(eva-00-leader@pingcap.com)
- Team Member: @eva-01-member(eva-01-member@pingcap.com)
- Team Member: @eva-02-member(eva-02-member@pingcap.com)
```

团队参赛的注意事项：

- 包括队长在内，每队成员最多三人；
- 有 PingCAP 内部员工参与的队伍，将作为打星队伍，不参与积分总排名，所获积分仍具有兑换权益。

### 更改报名信息

目前暂不支持在原始 Issue 上进行编辑，无论是个人参赛还是团队参赛，如需更改报名信息，需要 **队长** 先后进行如下两个操作：

1. 关闭错误的报名 Issue；
2. 重新开启一个新的 Issue 进行报名；

## 参赛流程

TiDB Usability Challenge Program 全流程包括：查看任务->领取任务->实现任务->提交任务->评估任务->获得积分->积分兑换，其中 “获得积分” 之前的步骤都将在 GitHub 上完成。

### 第一步：查看/新建任务

#### 查看已有任务

当前开放的任务列表可分别在以下仓库 "challenge-program" project 的 TODO Columns 查看：

- [TiDB](https://github.com/pingcap/tidb/projects/26)
- [TiKV](https://github.com/tikv/tikv/projects/20)
- [PD](https://github.com/pingcap/pd/projects/2)
- [chaos-mesh](https://github.com/pingcap/chaos-mesh/projects/14)
- [Data Migration](https://github.com/pingcap/dm/projects/1)
- [Backup & Restore](https://github.com/pingcap/br/projects/1)
- [client-rust](https://github.com/tikv/client-rust/projects/3)
- [TiDB Dashboard](https://github.com/pingcap-incubator/tidb-dashboard/projects/17)
- [cherry-bot](https://github.com/pingcap-incubator/cherry-bot/projects/1)

**注：client-rust 与 tikv 在算分时同属于一个 repo。**

其中 TODO Columns 按照题目难易程度划分了 3 列，分别是：TODO/Easy、TODO/Medium、TODO/Hard。每一个任务还设置了一些标签，为方便大家理解，现将 TiDB Usability Challenge 相关标签所代表含义做如下说明：

- "difficulty/easy"、"difficulty/medium"、"difficulty/hard"：任务难度级别。
- "Component/XX"：任务所涉及的模块。

#### 新建任务

除了当前开放的任务，如果你有其他关于 **Usability Improvement** 的想法想要实现，可通过在相应代码仓库创建 Issue 的方式提出。创建 Issue 之前请确保你已经阅读和了解了 [Contribution Guide](https://github.com/pingcap/community/blob/master/CONTRIBUTING.md) 和 [Contributor Covenant Code of Conduct](https://github.com/pingcap/community/blob/master/CODE_OF_CONDUCT.md)。

- TiDB 相关 Proposal 可通过 [TiDB Issue 发起通道](https://github.com/pingcap/tidb/issues/new?labels=type%2Fenhancement&template=feature-request.md) 提交至 TiDB Repo；
- TiKV 相关 Proposal 可通过 [TiKV Issue 发起通道](https://github.com/tikv/tikv/issues/new?template=feature-request.md) 提交至 TiKV Repo；
- PD 相关 Proposal 可通过 [PD Issue 发起通道](https://github.com/pingcap/pd/issues/new?labels=type%2Fenhancement&template=feature-request.md) 提交至 PD Repo；
- TiDB Dashboard 相关 Proposal 可通过 [TiDB Dashboard Issue 发起通道](https://github.com/pingcap-incubator/tidb-dashboard/issues/new?labels=type%2Fenhancement&template=feature-request.md) 递交至 TiDB Dashboard Repo。

格式要求：Issue 标题前需添加 "**REQ-challenge-program**" 标记，例如：

```
REQ-challenge-program: Further extract tidb_query into different workspaces
```

### 第二步：领取任务

如果你决定认领某一个任务，请先在这个任务的 GitHub Issue 中回复 "/pick-up-challenge"， 后台将自动判断你所拥有的积分是否具备挑战此任务的资格，积分满足要求即可开始挑战，积分不满足要求，需按照机器人的提示获得满足挑战要求的积分。

**需要特别提醒的是：**

- 每个参赛主体（含个人及团队）的本赛季初始积分为 0。
- “easy” 类型的题目推荐给第一次参加挑战赛的新人选手，在当前 repo 获得 200 分即可解锁当前 repo “medium” 和 “hard” 难度。
- 如果已有历史积分且想挑战某个 “medium” 以上难度的任务，则需把该 repo 的历史积分补足到 200 分才可以继续挑战。
- 达到某个 repo 的 “medium” 挑战资格后再认领该 repo 的 “easy” 任务不得分。但可通过认领其他 repo “easy” 任务的方式得分（如果之前在该 repo 的积分未达 “medium” 门槛积分的话）。
- 每个参赛主体一次只能领取一个任务。

### 第三步：实现代码

如果你觉得你的方案已经达到了题目的要求，可在相关 Repo（例如 tidb）的 master 分支上实现你的方案，在实现代码的过程中如果遇到问题，可以通过 [**#tidb-challenge-program**](https://join.slack.com/t/tidbcommunity/shared_invite/enQtNzc0MzI4ODExMDc4LWYwYmIzMjZkYzJiNDUxMmZlN2FiMGJkZjAyMzQ5NGU0NGY0NzI3NTYwMjAyNGQ1N2I2ZjAxNzc1OGUwYWM0NzE) channel 与 Mentor 或者其他参赛选手讨论，任务指定的 Mentor 会尽可能在 24 小时内予以回复。不过，在提问前确保已经仔细阅读过题目内容并且已经完成了参考资料的学习哦～

### 第四步：提交代码

完成代码编写并且所有单元测试都已通过后，选手可以将代码以 GitHub Pull Request（简称 PR）的形式提交到相应的 Repo 上。当 PR 提交后，可在 PR 的评论中 at 该题目的 Mentor 进行代码评审，Mentor 会尽可能在方案提交后的 48 小时内完成评估。

如何提交 PR 可参考 [GitHub Workflow](https://github.com/pingcap/community/blob/master/contributors/workflow.md)

如何在 PR 中操控机器人可参考 [机器人操作指南](https://github.com/pingcap/community/blob/master/contributors/command-help.md)

格式要求：
  - PR 标题请参考 [Commit Message and Pull Request Style](https://github.com/pingcap/community/blob/master/contributors/commit-message-pr-style.md) 中定义的规范。
  - PR 描述的第一行需要指定任务 GitHub Issue 的编号，再写每个 repo 要求的格式，示例：
  ```
  UCP #12345

  <!-- The following description -->
  ```

### 第五步：代码评估及积分授予

评估规则：PR Reviewer 会对 PR 进行代码功能和代码格式的 Review，获得 2 个以上 Reviewer 认可（即在 PR 中评论 “LGTM”）的 PR 将会被 merge 到对应 repo 的主干分支（master 分支）。

如果你的 PR 被 Merge 到主干分支，那么就意味着该题目被你挑战成功，你将获得该题目对应的积分；其他参赛选手将失去对该题目的挑战资格，已经提交的 PR 也会被 Close。

否则，你需要继续和 PR 的 Reviewer 探讨实现方案和细节，合理的接受或者拒绝 Reviewer 对 PR 的评审建议。

### 第六步：积分兑换

积分获得情况将会在 [TiDB 易用性挑战赛官方网站](https://pingcap.com/community-cn/tidb-usability-challenge/) 呈现。所获积分可兑换 PingCAP Open Source Contribution Bonus，包括但不限于：

- TiDB 限量版帽衫
- 红黑游戏机充电宝
- The North Face 定制电脑双肩包
- JetBrains Toolbox 1 年 licence
- PingCAP 年度大会荣誉席
- 其他精彩奖项

兑换时间：**每个赛季结束后至下一赛季结束前**可进行积分兑换，下一个赛季结束时，前一赛季的可兑换积分将直接清零，不可再进行社区礼品兑换。

兑换方式：本赛季结束后填写礼品兑换表（届时将开放填写权限）。

**注意事项：**

- 排名前三的需求，整体上各自分别加 10000， 8000， 6000 分。等需求完整的实现或者挑战赛结束，需求的加分将由需求的子任务完成者们一起分享。考虑到需求不一定能在挑战赛期间完整做完，这些需求额外积分的分享规则为：(该挑战者完成的该需求的子任务积分和/所有挑战者完成的该需求的子任务积分和)\*这个需求的总加分

## **学习资料**

这里有 [TiDB 精选技术讲解文章](https://github.com/pingcap/presentations/blob/master/hackathon-2019/reference-document-of-hackathon-2019.md)，帮助大家轻松掌握 TiDB 各核心组件的原理及功能；还有 [数据库小课堂](https://github.com/pingcap/awesome-database-learning)，帮助大家快速熟悉数据库知识，点击以上链接即可轻松获取。

这将是一次集体智慧的碰撞，我们期待着与社区小伙伴一起创造无限可能！

## **FAQ（持续更新中）**

### **Q1：如何进行报名信息变更？报名信息变更后积分将如何变化？**

变更报名信息需关闭错误报名 Issue，重新开启一个新的 Issue 进行报名，暂不支持在原始 Issue 上进行编辑。报名信息变更后积分方面的变化有以下三种情况：

- 团队成员增加或减少不会影响团队总积分；
- 加入团队的新成员个人积分将冻结至加入团队前的状态，加入团队后所获积分为团队所有；
- 从团队中脱离出来以个人身份参赛的选手不继承团队积分，初始积分为 0。

### **Q2：如何放弃/变更已领取的任务？**

- 放弃任务：在已领取的 GitHub Issue 下回复 “give-up-challenge”
- 变更任务：先对已领取的任务执行 “放弃任务” 操作，再选择新的任务

### **Q3：能否邀请 PingCAP 内部员工组队参赛？**

当然可以！我们非常欢迎社区小伙伴与 PingCAP 内部员工共同参赛。PingCAP 小伙伴可以在**非工作时间**与社区小伙伴一起攻克难题。为了尽可能保证赛事的公平，**当 PingCAP 内部员工数在团队总人数中所占比例大于等于 2/3 时，该团队只能选择 Hard 级别以上的任务 进行挑战，且团队将作为打星队伍，不参与积分最终排名，但仍保留积分兑换权限。**

### **Q4：我不记得哪个 repo 是否完成了 200 分怎么办？**

每个参赛主体在报名之后都会收到 sre-bot 发送的自动回复，回复中包含了当前每个 repo 的积分。

### **Q5 参加过第一季的选手如何继承历史积分？**

- 第一季个人报名选手，如果需要继承历史积分，请在报名 issue 中直接 @you06
- 第一季个人报名选手，第二季如果想转成团队并继承历史积分，请在报名 issue 中直接 @you06
- 第一季的团队选手，如果需要继承积分，请队长在第二季创建同名队伍。
