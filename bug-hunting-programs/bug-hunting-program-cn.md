# 4.0 捉“虫”竞赛

## 活动介绍

TiDB 4.0 版本计划于 2020 年 5 月 31 日 GA，众多新功能备受大家期待。为了让大家更早体验 TiDB 4.0，我们邀请您参与到 TiDB 4.0 捉“虫”竞赛，在尝鲜的同时发现影响您体验的 bug，PingCAP 将联合 TiDB 开发者社区一起“灭虫”。大家一起为 TiDB 全球社区建设添砖加瓦，

让 TiDB 新版本给大家带来更好的体验。

- 比赛时间：2020-04-08 ~ 2020-05-30，持续 2 个月；

- 交流渠道：我们使用微信群进行沟通交流，欢迎大家加入

  - 添加 TiDB Robot 的微信号：tidbai，回复“捉虫竞赛”入群

- 在交流群里你可以：

  - 询问 mentor 相关 feature 的信息
  - 反馈机器人（sre-bot）故障
  - 找 PingCAP 内部同学组队
  - 参赛过程中遇到任何其他问题

为了感谢大家的参与，我们将按大家发现的 bug 等级给予相应积分，积分可以兑换  TiDB  周边礼品，PingCAP University 培训机会等多项奖品。

## 赛前准备

- 参考 [创建 GitHub 账号](https://github.com/tidb-challenge-program/bug-hunting-register/blob/master/how-to-register-on-github.md) 和 [如何在 GitHub 提 issue](https://github.com/tidb-challenge-program/bug-hunting-issue)。

## 比赛报名

报名方式：在 [bug-hunting/register](https://github.com/tidb-challenge-program/bug-hunting-register) 仓库创建一个 [报名 Issue](https://github.com/tidb-challenge-program/bug-hunting-register/issues/new?assignees=&labels=&template=challenge-program-register.md&title=UCP%2FSignup)。

报名 Issue 的标题统一为："bug hunting/sign up"，报名内容需包括团队名、队长的邮箱和团队成员的邮箱。注意**个人参赛者也需要以团队的方式进行报名，个人参赛者只需要填写团队名和队长邮箱（即参赛者本人邮箱）即可。**[参考示例](https://github.com/tidb-challenge-program/bug-hunting-register/blob/master/.github/ISSUE_TEMPLATE/challenge-program-register.md)

团队参赛的注意事项：

- 包括队长在内，每队成员最多五人；
- 有 PingCAP 内部员工参与的队伍，将作为打星队伍，不参与积分总排名，所获积分仍具有兑换权益。

**更改报名信息**

目前暂不支持在原始 Issue 上进行编辑，无论是个人参赛还是团队参赛，如需更改报名信息，需要 队长 先后进行如下两个操作：

1. 关闭错误的报名 Issue；
2. 重新开启一个新的 Issue 进行报名；

## 参赛流程

4.0 捉虫大赛全流程包括：测试 feature->提交 bug/测试体验报告->评估 bug->获得积分->积分兑换，其中 “获得积分” 之前的步骤都将在 GitHub 上完成。

**第一步：测试 feature**

参赛队伍可以根据我们提供的操作手册自行测试。在遇到与手册结果不符合的情况可以上报 Bug。

**第二步：提交 Bug/测试体验报告**

在测试完成后，如果参赛者发现了 Bug，则可以在 [bug-hunting/issue](https://github.com/tidb-challenge-program/bug-hunting-issue) 按照模版 [提交 Issue](https://github.com/tidb-challenge-program/bug-hunting-issue/issues/new?labels=type%2Fbug&template=bug-report.md)，

**提交 issue 的标题格式**为：Pn-[4.0 bug hunting]-[feature names]-brief descriptions

**其中：**

1. Pn 为 bug 等级，请选手自行对照 Bug 等级表格，预估 Bug 等级并在标题前注明 P0、P1、P2 或 P3。注明 Bug 等级的 issue 会更快得到评估。
2. 上报 issue 的标题和正文都尽量使用英文描述。Google 翻译是一个很好的工具。

Bug 等级表

| Bug 等级 (降序） | 描述                                        | 举例说明                                                     |
| ---------------- | ------------------------------------------- | ------------------------------------------------------------ |
| P0               | 影响数据正确性或服务可用性                  | 1. 出现数据丢失、错误等严重问题，例如查询返回的结果是错误的，SQL 输出返回结果不一致等；2. 可用性问题，例如 30 秒以上无法对外提供服务；3. 进程崩溃等； |
| P1               | 功能、性能不符合预期                        | 1. 执行计划异常；2. 监控不符合预期；3. 性能较 3.0 版本 有回退（本地或公有云上部署均可）；4. 功能测试出现异常输出； |
| P2               | 和 MySQL 不兼容（除官方明确说明不兼容的外） | 1. 行为不兼容，例如权限、SQL 报错等；2. error code 不兼容；  |
| P3               | 文档 bug                                    | 1. dev 格式（https://pingcap.com/docs-cn/dev/） 下描述错误；<br />2. 功能使用文档出错，或无法得到预期结果 |

参赛者在测试/试用之后，也可以记录下您的测试过程和体验感受，在 AskTUG 上提交测试体验报告，该测试体验报告可作为 TUG [MVA](https://asktug.com/t/topic/633) (Most Valuable Advocate) 内容贡献的参考依据。参考 [如何发布测试体验报告](https://docs.google.com/document/d/1M3qXa4GwCQbvlUtQJAkBhUbs7hbz4NpBpl_N06YsDxc/edit) 同时，伴随此次捉“虫”竞赛将成立 **SIG-Testing 的专项兴趣小组**。小组成员可以持续为 TiDB 产品的质量保驾护航。根据贡献程度的不同，小组成员将会在组内获得 Active Contributor 甚至 Committer  等社区荣誉。

在 AskTUG 上提交的测试体验报告经官方评定为内容质量前三的，会获得额外加分：

- 第一名 1000 分
- 第二名 800 分
- 第三名 500 分

**注：通过官方认可的体验报告均可获得 50 分。**

**第三步：Bug 评估及积分授予**

1. 官方 QA 团队会根据 Bug 等级，为 Bug 打上 label（P0，P1，P2，P3）如果你是第一个发现 bug 的小伙伴，官方会根据 bug 的等级给你加上积分。同时 Sre-bot 会自动回复:Thank you for your contribution, you have been awarded xx points!
2. 如果经验证不是 bug，官方 QA 团队则会打上 label（non-bug）并关闭 issue，选手可以继续寻找其他 bug。 

**第四步：积分兑换**

上报的 Bug 被认定有效后参赛选手可对照以下表格确认你的积分是否正确。积分可以在活动网站底部赛季积分查看。

Bug 等级与积分兑换表：

| Bug 等级（降序） | 积分 |
| ---------------- | ---- |
| P0               | 1000 |
| P1               | 500  |
| P2               | 100  |
| P3               | 50   |

加分项

1. 经过官方判定 issue 有明确复现步骤，且能够复现的，额外增加 100 分；

积分获得情况将会在 4.0 捉虫大赛官网 呈现。所获积分可兑换 PingCAP 所设置奖项，包括但不限于：

- TUG T-shirt
- PCTA & PCTP 超厚教材蓝宝书
- PingCAP 充电宝
- TUG 帽衫
- PCTA 基础认证考试免费券（1人/次，价值 699 元，可转赠）
- PCTP 进阶认证考试免费券（1人/次，价值 1299 元，可转赠）
- PCTP 进阶原厂线上培训（1人/月，价值 13800 元，含1人/次认证考试，可转赠）
- 其他精彩奖项

兑换时间：每个赛季结束后一年内，例：第一赛季于 2020 年 4 月 30 日结束，兑换时间截止至 2021 年 4 月 30 日。

兑换方式：本赛季结束后填写礼品兑换表（届时将开放填写权限）。

## 文档资料

 在开始测试前可以阅读 TiDB[ 官方用户文档](https://pingcap.com/docs-cn/dev/) 帮助了解 TiDB。

除此之外 TiDB 第一本开源书 [ TiDB in Action](https://book.tidb.io/) 也是很好的学习材料。书中包括了 TiDB 基本架构原理； 最佳实践及案例：部署、运维（慢查询、热点问题调优）、备份恢复、数据同步和迁移等。

## 彩蛋：挑战赛挖矿

现在挑战赛的参赛选手现在也可以来 4.0 捉“虫”竞赛挖矿啦～

具体规则如下：

1. 挑战赛的参赛选手可以认领 4.0 捉“虫”竞赛 issue 中选择任何一个已经被标记为“challenge-program-2”的 issue，就像认领挑战赛任务一样，在该 issue 下评论 “/pick up challenge” 
2. 收到正确命令后 bot 会自动回复 “pick up success, PTAL@point-team” 表示任务认领成功，将由挑战赛打分小组确认此 issue 的具体分值。
3. 挑战赛打分小组会在评定完该题分数后（一般为三个工作日）在该 issue 下打分，例如评论 “/bug point 1000”，表示这个 issue 在挑战赛是 1000 分。同时这个分数也会自动更新在该 issue 的描述最后。

注：

- 挑战赛选手可以在任务认领成功之后开始提交 pr，不用等待挑战赛打分小组的分数评估，如果超过五天该 issue 还没有被评定分数则可以再次 @point-team。
- 挑战赛选手提 PR 的流程和之前一样，按照挑战赛的格式要求即可

## FAQ（持续更新中）

## Q1：如何进行报名信息变更？报名信息变更后积分将如何变化？

变更报名信息需关闭错误报名 Issue，重新开启一个新的 Issue 进行报名，暂不支持在原始 Issue 上进行编辑。报名信息变更后积分方面的变化有以下三种情况：

- 团队成员增加或减少不会影响团队总积分；
- 加入团队的新成员个人积分将冻结至加入团队前的状态，加入团队后所获积分为团队所有；
- 从团队中脱离出来以个人身份参赛的选手不继承团队积分，初始积分为 0。

**Q2：能否邀请 PingCAP 内部员工组队参赛？**

当然可以！我们非常欢迎社区小伙伴与 PingCAP 内部员工共同参赛。有 PingCAP 成员参与的团队将作为打星队伍，不参与积分最终排名，但仍保留积分兑换权限。

