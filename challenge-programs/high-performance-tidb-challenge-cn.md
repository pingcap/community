# High Performance TiDB Challenge

## 活动介绍

性能挑战赛与黑客马拉松的奇妙混搭——性能竞赛正式上线！**亲手优化 TiDB，提升性能拿大奖**。本次活动面向所有开源爱好者。只要你对 TiDB 性能优化感兴趣，了解 TiDB 设计与实现，都可以来组队参赛！对 TiDB 性能提升优秀的参赛队伍可以共同瓜分六位数大奖！欢迎大家 [报名](https://forms.pingcap.com/f/high-performance-challenge-cn) 参赛！

**活动时间线：**

- 活动预热、组队：2020.09.17 
- 比赛进行，提交成果：2020.09.17-2020.11.15
- 组委会检验成果：2020.11.15-2020.11.20
- 现场答辩：2020.11.21

**交流渠道：**
我们使用 Slack 进行沟通交流，欢迎大家加入 TiDB Community Slack Workspace 的 [#tidb-challenge-program](https://slack.tidb.io/invite?team=tidb-community&channel=tidb-challenge-program&ref=github-community) channel，在这里你可以：

- 寻找志同道合的小伙伴一起组队
- 反馈机器人（sre-bot）故障
- 交流参赛过程中遇到任何其他问题

## 活动规则

本次竞赛将围绕性能优化的主题，提供两种类型的参赛题目：**「围绕固定 workload 优化」**与**「性能优化高难度  issue」**，选手只能选择一个优化题目组队参赛。比赛最终以优化成果（性能提升百分比）、小组 PR 总分（成功提交对应竞赛 PR 即获积分）和现场答辩完成度进行排名。请各位选手仔细阅读活动规则。

### 关于报名组队：

1. 参赛选手必须以小组形式参赛，小组人数不超过五人，每一名参赛队员只能选择一个题目参赛，即只能加入一个参赛小组。
2. 所有参赛的选手需在填写 [报名表单](https://forms.pingcap.com/f/high-performance-challenge-cn) 前完成组队，一旦提交表单则默认完成组队，不接受后期小组的调整（增加组员或换组、换题等）
3. 没有找到组员的参赛选手可先加入 slack channel 与其他选手沟通，完成组队后再填写报名表单。也可以个人报名参与竞赛，单人成组。

### 关于积分：

1. 组员完成所在小组竞赛任务得分。
2. 小组积分为组内选手完成对应任务的分数之和。
3. 对于 workload 优化小组，提出对应 workload 相关性能优化的 issue 并解决会获得对应的积分；对于固定性能 issue 小组，解决小组对应 issue 会获得对应积分。
4. 排行榜积分并非最终小组排名，最终结果参考「[考核规则](#考核规则)」。
5. workload 场景下每个新建 issue 的积分由打分小组确定，评分标准以预估工作量进行合理换算。

### 关于顾问：

1. 每个小组最多一名顾问，一位顾问最多指导一个小组。
2. 固定 issue 的小组顾问由每个 issue 的 mentor 担任。
3. 没有顾问的小组可以与组委会进行协调，但不保证每个小组都有顾问。
4. 没有技术顾问的小组得奖后，原属于技术顾问的奖金归该小组全员所有。

### 考核规则：

比赛结果以小组为单位进行考核，形式为线上答辩。组委会将在 11.15 日下午 18:00 拉取各小组的最新分支（针对 workload 优化小组）和各小组的 PR 总分，并在 11.15 日至 11.20 日之间评估 workload 优化成果。答辩当天小组队长需在组委会指定地点进行现场答辩，每只参赛队伍有 7 分钟时间展示 PPT。

**比赛最终分数由以下几个维度组成：**

- 性能提升度 （65%）：
    - 基于比赛开始时 Master 版本的性能提升百分比
- 小组 PR 总分 （30%）：
    - 有效 PR 合并至 Master，本小组成员一共得到的分数
- 答辩完成度（5%）

## 赛前准备

- 参考 [Join GitHub](https://github.com/join) 创建 GitHub 账号。
- 参考 [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) 在本地环境中安装 Git。
- 通过 [Set up Git](https://help.github.com/en/github/getting-started-with-github/set-up-git) 配置 Git 访问 GitHub。
- 推荐学习 [High Perfromance TiDB 课程](https://space.bilibili.com/86485707/channel/detail?cid=145009)，对比赛更有帮助。

## 参赛流程

1. **报名选题组队（2020.09.17-）**

   **赛事题目分为两个方向**：
   
   a. 固定场景优化方向：请仔细阅读「[活动规则](#活动规则)」并填写报名表单，可从如下固定场景题目列表中选取一个。
   
   b. 性能相关高难度 issue 方向：请仔细阅读「[活动规则](#活动规则)」并填写报名表单选择对应 issue。

**固定场景题目列表：**

| 场景     | 子场景                         | 顾问           |
| -------- | ------------------------------ | -------------- |
| sysbench | sysbench-Oltp_Insert           | youjiali1995   |
| tpcc     | tpcc-High-Conflicts            | Little-Wallace |
| sysbench | sysbench-Oltp_Update_Non_Index | sticnarf       |
| sysbench | sysbench-Oltp_Update_Index     | tiancaiamao    |
| ycsb     | ycsb-Workloade                 | xhebox         |
| sysbench | sysbench-Oltp_Point_Select     | jackysp        |
| sysbench | sysbench-Oltp_Read_Only        | bobotu         |
| tpcc     | tpcc-Low-Conflicts             | 待定           |
| ycsb     | ycsb-Workloada                 | 待定           |
| ycsb     | ycsb-Workloadb                 | 待定           |
| ycsb     | ycsb-Workloadc                 | 待定           |
| ycsb     | ycsb-Workloadd                 | 待定           |
| ycsb     | ycsb-Workloadf                 | 待定           |
| sysbench | sysbench-Oltp_Write_Only       | 待定           |
| sysbench | sysbench-Oltp_Delete           | 待定           |
| sysbench | sysbench-Oltp_Read_Write       | 待定           |

**性能相关高难度 issue 列表：**

| issue 地址                                                   | 分数 | SIG        | 顾问       |
| ------------------------------------------------------------ | ---- | ---------- | ---------- |
| [tikv#8635](https://github.com/tikv/tikv/issues/8635)        | 6600 | engine     | yiwu-arbug |
| [dumpling#126](https://github.com/pingcap/dumpling/issues/126) | 6600 | migrate   | kennytm  |
| [tikv/pd#2950](http://github.com/tikv/pd/issues/2950)        | 6600 | scheduling | gaosong    |
| [tidb#19386](https://github.com/pingcap/tidb/issues/19386)        | 6600 | ddl | djshow832    |
| [tidb#14441](https://github.com/pingcap/tidb/issues/14441)        | 6600 | execution | qw4990 |
| [tidb/18693](https://github.com/pingcap/tidb/issues/18693)        | 6600 | planner | winoros  |

2. **WG 组长提交分支地址（针对固定场景优化小组）**

以 9.17 日 16:00 的 TiDB master 版本作为基准，WG 小组组长需在提交报名后 5 个工作日内提交一个基于此版本的分支。此版本 hash 值为：

```
tidb:1bfeff96c7439ed672f8362cf67573666a43f781
tikv:dcd2f8f4076d847151fdf58e9c0ba333f242d374
pd:c05ef6f95773941db5c1060174f5a62e8f864e88
```
**注：此分支只保存本小组的优化代码，后续不得将 master 合并到此分支。比赛最后性能提升比较数据需采用此分支和赛前指定 master 版本的对比。**

3. **实现任务（2020.09.17-2020.11.15）**

**固定场景优化方向：**
在小组顾问的指导下，大家围绕本小组场景主题，进行性能瓶颈判断及针对性的优化。对优化点提出 issue 并解决即可获得相应分数。

**固定性能优化相关大 issue 方向：**
在小组顾问的指导下解决 issue 后获得相应的分数。

4. **找出 issue 并提交代码（2020.09.17-2020.11.15）**

**固定场景优化方向：**
参赛选手需要找到优化点，提出 Issue 后 bot 会自动通知顾问小组对 issue进行打分。对应 workload 小组成员可以 pick up 打分完毕的 issue 进行挑战。**关于 pick up 命令可以查看 [TiDB 专项学习包](tidb-learning-materials-cn.md)**

- issue 提交格式要求：
    - issue 标题需标明参赛信息 **hptc** 和对应优化场景
    - 例：hptc sysbench-Oltp_Read_Only xxxxx

完成代码编写并且所有单元测试都已通过后，选手可以将代码以 GitHub Pull Request（简称 PR）的形式提交到自己的分支。如何提交 PR 可参考 [GitHub Workflow](https://github.com/pingcap/community/blob/master/contributors/workflow.md)

- PR 提交格式要求：
    - PR 标题请参考 [Commit Message and Pull Request Style](https://github.com/pingcap/community/blob/master/contributors/commit-message-pr-style.md) 中定义的规范。
    - PR 第一行需标明参赛信息 **hptc**
    - 所有参赛 PR 需要手动加上对应优化场景的标签，如：performance/tpcc
    - PR 描述中必须带上 issue Number 例：Issue Number:  #xxx 

**固定性能优化相关大 issue 方向：**
参赛选手需直接 pick up 自己所在团队的 issue，并提交 PR。**关于 pick up 命令可以查看 [TiDB 专项学习包](tidb-learning-materials-cn.md)**

- PR 提交格式要求：
    - PR 提交格式要求：
    - PR 标题请参考 Commit Message and Pull Request Style 中定义的规范。
    - PR 第一行需标明参赛信息 hptc
    - PR 描述中必须带上 issue Number 例：Issue Number:  #xxx 

5. **获得积分**

所有参赛过程中符合要求并被合并到 Master 分支的 PR 都会自动获得相应分数，如果你的 PR 没有得分，请检查是否已按照格式要求提出 PR，或在 slack 群组联系主办方。

6. **提交成果**

所有参赛选手需要在 11.15 日下午 18:00 之前停止更新 Master 分支并提交成果。

7. **答辩**

每个参赛队伍需在 11.20 上午 10:00 前提交答辩 PPT，PPT 中需要包括以下内容：

- 有效 PR 合并至 Master，本小组工作成员一共得到的分数
- 中间有阶段性的成果，例如文章、直播等
- 最终的性能优化成绩

答辩时间为 11.21 日下午 13:00-17:00，组长需在 PingCAP 各地办公室同步进行现场答辩（海外队伍可线上进行答辩）。综合排名位列前茅的优秀团队将获得奖金，奖项会当场宣布。

## 奖项设置

- 一等奖：每支参赛队伍 5 万元 RMB  + 团队顾问个人奖金 1 万元 RMB
- 二等奖：每支参赛队伍 3 万元 RMB + 团队顾问个人奖金 1 万元 RMB
- 三等奖：每支参赛队伍 1 万元 RMB

所有完成答辩的小组成员都可以获得神秘纪念周边一个哦～

## 学习资料

- [High Performance TiDB 专项视频课程](https://space.bilibili.com/86485707/channel/detail?cid=145009)
    - 由 TiDB 核心研发工程师以及 TiDB 社区 Committer 和 Maintainer 联合打造的 High Performance TiDB 连载视频教学课程，将带领大家从源码层面了解 TiDB 的设计与实现，并帮助大家对分布式系统领域知识有更加深入的了解。
- [专项学习文档包](tidb-learning-materials-cn.md)
    - 参赛必读。提供了一些常用的调优工具和 workload 相关知识背景,帮助参赛选手更了解 TiDB 性能测试场景。
