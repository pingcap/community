# High Performance TiDB Challenge

## 活动介绍

性能挑战赛与黑客马拉松的奇妙混搭——性能竞赛正式上线！**亲手优化 TiDB，提升性能拿大奖**。本次活动面向所有开源爱好者。只要你对 TiDB 性能优化感兴趣，了解 TiDB 设计与实现，都可以来组队参赛！对 TiDB 性能提升优秀的参赛队伍可以共同瓜分六位数大奖！欢迎大家 [报名](https://forms.pingcap.com/f/high-performance-challenge-cn) 参赛！

**活动时间线：**

- 活动预热、组队：2020.09.17 
- 比赛进行，提交成果：2020.09.17-2020.11.29
- 组委会检验成果：2020.11.30-2020.12.04
- 现场答辩：2020.12.05

**交流渠道：**
我们使用 Slack 进行沟通交流，欢迎大家加入 TiDB Community Slack Workspace 的 [#tidb-challenge-program](https://slack.tidb.io/invite?team=tidb-community&channel=tidb-challenge-program&ref=github-community) channel，在这里你可以：

- 寻找志同道合的小伙伴一起组队
- 反馈机器人（sre-bot）故障
- 交流参赛过程中遇到任何其他问题

## 活动规则

本次竞赛将围绕性能优化的主题，提供两种类型的参赛题目：**「围绕固定 workload 优化」**与**「性能优化高难度  issue」**，选手只能选择一个优化题目组队参赛。比赛最终以优化成果（性能提升百分比）、小组 PR 总分（成功提交对应竞赛 PR 即获积分）和现场答辩完成度进行排名。请各位选手仔细阅读活动规则。

### 关于报名组队：

1. 参赛选手必须以小组形式参赛，小组人数不超过 6 人 (包括顾问和队长)，每一名参赛队员只能选择一个题目参赛，即只能加入一个参赛小组。
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

比赛结果以小组为单位进行考核，形式为线上答辩。组委会将在 12.04 日下午 18:00 拉取各小组的最新分支（针对 workload 优化小组）和各小组的 PR 总分，并在 11.30 日至 12.04 日之间评估 workload 优化成果。答辩当天小组队长需在组委会指定地点进行现场答辩，每只参赛队伍有 7 分钟时间展示 PPT。

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

1. **报名选题组队（2020.09.17-11.29）**

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

3. **实现任务（2020.09.17-2020.11.29）**

**固定场景优化方向：**
在小组顾问的指导下，大家围绕本小组场景主题，进行性能瓶颈判断及针对性的优化。参赛选手需要自行找到优化点，提出 Issue 后 bot 会自动通知顾问小组对 issue 进行打分。之后对应 workload 小组成员可以 pick up 打分完毕的 issue 进行挑战。**关于 pick up 命令可以查看 [TiDB 专项学习包](tidb-learning-materials-cn.md)**

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
参赛选手需在小组顾问的指导下解决 issue 后获得相应的分数。选手可以直接 pick up 自己所在团队的 issue，并提交 PR。**关于 pick up 命令可以查看 [TiDB 专项学习包](tidb-learning-materials-cn.md)**

- PR 提交格式要求：
    - PR 提交格式要求：
    - PR 标题请参考 Commit Message and Pull Request Style 中定义的规范。
    - PR 第一行需标明参赛信息 hptc
    - PR 描述中必须带上 issue Number 例：Issue Number:  #xxx 

4. **获得积分**

所有参赛过程中符合要求并被合并到 Master 分支的 PR 都会自动获得相应分数，如果你的 PR 没有得分，请检查是否已按照格式要求提出 PR，或在 slack 群组联系主办方。

5. **提交成果**

所有参赛选手需要在 11.29 日下午 18:00 之前停止更新 Master 分支并提交成果。

6. **答辩**

每个参赛队伍需在 12.04 上午 10:00 前提交答辩 PPT，PPT 中需要包括以下内容：

- 有效 PR 合并至 Master，本小组工作成员一共得到的分数
- 中间有阶段性的成果，例如文章、直播等
- 最终的性能优化成绩

答辩时间为 12.05 日下午 13:00-17:00，组长需在 PingCAP 各地办公室同步进行现场答辩（海外队伍可线上进行答辩）。综合排名位列前茅的优秀团队将获得奖金，奖项会当场宣布。

## 奖项设置

- 第一名：每支参赛队伍 5 万元 RMB  + 团队顾问个人奖金 1 万元 RMB
- 第二名：每支参赛队伍 3 万元 RMB + 团队顾问个人奖金 1 万元 RMB
- 第三名：每支参赛队伍 1 万元 RMB

所有完成答辩的小组成员都可以获得神秘纪念周边一个哦～如获奖队伍没有顾问，则顾问奖金分发到参赛小组。如果本次没有足够的项目完成比赛，奖金将会累积到第二季比赛和 hackathon 共享奖金池。

**新增四重大礼包**

由于受到疫情及国庆假期的影响，组委会决定将比赛日期后延十个工作日，还增设了四重惊喜大礼包，奖金总额翻倍！

## 第一重礼包
**价值 5 万元的云端资源免费用**

我们给参赛队伍准备了云端主机，方便大家更好的进行调试和实验。每个参赛队伍均可使用一个集群去调试、验证自己的想法，每个集群包含六台服务器，单台具体的配置为：4C8G + 数据盘 200G +公网带宽。

**具体申请方式：**

报名之后，通过联系顾问或者官方服务人员申请服务器资源，邮件：zhangyurui@pingcap.com。

邮件标准：「队伍名称+申请服务器资源」。

发件邮箱，请确保邮箱可以收到邮件，服务器信息会通过邮箱的方式发放给小组。

## 第二重礼包
**10 万 TiDB Cloud 代金券，限时领取**

为了感谢和回馈参赛者，我们除了基本奖金之外，还为大家准备了价值 10 万的 TiDB Cloud 资源使用券。

TiDB 作为一款云原生数据库 (Cloud-Native Database)，具备与云计算技术天然结合的能力，TiDB Cloud 产品将 TiDB 分布式数据处理能力与 Kubernetes 及容器等主流 PaaS 云计算技术充分结合，帮助用户实现业务支撑及运维管理目标。包括分布式数据库服务云化，按需交付，敏捷交付；支撑用户的微服务应用架构对后台动态数据处理的技术要求；基于多租户模式的混合负载 OLTP/OLAP 分布式数据处理能力交付；多租户之间的性能与安全隔离；云数据库服务的横向弹性伸缩；数据库服务的自动化运维等。

更多内容可以访问：https://en.pingcap.com/products/tidbcloud

**分配规则：**
- 第一名：40000 元代金券
- 第二名：30000 元代金券
- 第三名：15000 元代金券
- 第四名：10000 元代金券
- 第五名：5000 元代金券

## 第三重礼包
**周边礼品轻松拿**

我们给参赛队伍准备了丰富的周边礼品。只要大家按照规则在社区进行 「打卡」 即可获得。 打卡规则：从即日起至比赛结束，参赛小伙伴们在 [性能竞赛](https://asktug.com/t/topic/62827/2) 帖子下提交自己队伍的「参赛周报」或「个人学习笔记」即有机会获得社区周边哦～

### 参赛周报：
内容可包括当前正在进行的设计方案及 PR、进展小结、遇到的问题、下一步规划等等。

#### 模板：
标题：队伍名+Team+日期+参赛周报，例：xyz Team 10.18-10.25 参赛周报

内容参考（也可自由发挥）：

当前正在进行的设计方案及 PR

- 方案链接（进度：%）
  - PR 链接 （状态：review,develop,merged）
  - 具体分工：
   - A：XXX
   - B：XXX
   - C：XXX
- 小结
- 遇到的问题
- 下一步规划
注：参赛周报提交时间为每周日 21:00 之前，内容周期为上周日至本周日的参赛进展。

### 个人参赛笔记：
#### 标题：GitHub ID+参赛笔记，例：awe 参赛笔记
内容可以是参赛的学习心得、对赛事的体验反馈等

社区礼品大放送：
**不间断打卡王：**

从即日起到比赛结束期间，每周提交参赛周报的队伍成员均可获得原版 Chaos Engineering 一本。（周报提交时间为每周日晚 21:00 前）

**优秀成员奖**

比赛结束前一周我们会选出三篇最佳「参赛笔记」，作者将会获得原版 Database Internals 一本。

**参与奖**

- 成功打卡参赛周报一次的 team 都可获得 TiDB 笔记本一册。
- 成功打卡参赛笔记一次的参赛成员都可获得 TiDB 魔方一个。

### 第四重礼包
**知名企业，高端职位内推**

参加比赛的朋友，如果你的技术打动了顾问、评委，如果你有意愿，我们将帮您直接内推给 TiDB 用户及生态中的合作伙伴。

简历投递通道：talents@tidb.io

邮件主题：[TiDB 人才推荐] 意向公司-意向职位-个人姓名

部分职位介绍：

**职位 1：知乎微服务平台开发工程师**

岗位职责：

1. 参与知乎的 Service Mesh 系统的架构设计与实现。

2. 支持 Service Mesh 在业务落地，支撑起微服务的发现、治理、安全、流控全流程，对万亿级流量施加出色的掌控力。

3. 解决服务网格迁移和运行过程中的疑难问题。

4. 持续优化服务网格性能，提升系统稳定性。

任职要求：

1. 掌握 Golang 语言开发。

2. 熟悉 TCP/IP 原理，熟悉 Socket 网络编程，熟悉 Linux 操作系统原理。

3. 对以 K8S 为核心的云原生技术栈应用及生态有深入的理解。

4. 有较强的团队沟通协作能力，较强的逻辑分析和问题排查能力以及对新技术的追求精神。

5. 要求有较强的项目协调推动能力，强烈的 Owner 意识，责任心及执行力。

具有以下条件者优先：

1. 对开源服务网格技术（如 Istio、Envoy）有深入研究者。

2. 有容器、K8S 或其他云平台运维经验者。

3. 熟悉微服务、Mesh、Serverless、DevOps 等云原生技术。

**职位 2：知乎大数据实时处理平台研发工程师**

背景介绍：知乎数据架构团队正在围绕 Apache Flink 为核心打造大数据实时计算平台，为知乎内部业务提供批流融合的大数据计算能力，加入知乎数据架构团队共同探索新一代的大数据技术。

岗位职责：

1. 参与 Apache Flink 的二次开发，建设 Flink 批流融合大数据计算引擎。

2. 深入理解业务并与业务部门密切合作，基于 Apache Flink + Kubernetes 建设知乎的实时计算平台。

任职要求：

1. 计算机、通信、数学等相关专业，具备良好的计算机技术基础。

2. 熟悉 Java，具备扎实的数据结构和算法基础。

3. 具备良好的沟通和团队协作能力，做事主动积极，有技术热情和激情面对挑战。

4. 深入理解 Flink 或 Spark Streaming 原理者优先。

5. 有 PB 级数据处理经验和实时计算平台开发经验者优先。

6. 熟悉 Hadoop Ecosystem 例如 – Flink/Spark/Hadoop/Hive/Kafka/Pulsar 以及 Kubernetes，向社区贡献过代码者优先。

**职位 3：某互联网公司数据库工程师**

公司介绍：产业互联网方向。目前在企业 App 市场排名前三，仅次于钉钉和企业微信，细分市场排名第一。5 月刚完成由纪源资本和晨兴资本领投的 2000 万美金 B 轮融资，团队规模不到 50 人，大部分来自头条、网易、阿里、京东、百度、奇虎 360 等知名互联网公司，产品和技术氛围浓厚。总用户量 1000 万，正冲击 2000 万。

岗位职责：

1. 负责数据库的性能优化及故障处理等；

2. 数据库分库分表方案的设计、实施及数据迁移；

3. 负责根据项目需求设计并制定数据库解决方案；

4. 制定并不断完善数据库的运维规范、开发规范及安全规范。

任职要求：

1. 计算机相关专业本科及以上学历，有三年以上 MySQL 管理经验；

2. 熟悉 MySQL 数据库体系结构和工作原理；

3. 熟悉常见存储引擎的原理、特点以及主从复制原理和实践；

4. 熟练使用 shell 等脚本语言，及 Go、C/C++、JAVA 等编程语言中的一种或多种；

5. 有使用 MongoDB、Redis 的经验优先考虑；

6. 有使用数据库集群或分布式数据库（如 TiDB）经验优先考虑；

7. 良好的沟通、协调能力，能在一定的压力下有效开展工作。

薪资待遇：20k-40k*14 起

工作地点：北京

**职位 4：理想汽车高级 DBA**

岗位职责：

1. 负责整体数据库平台的建设、维护和治理；

2. 对数据库进行容量规划，实现高可用、高性能、可扩展、安全的运行架构，提高业务的高可用性和容灾能力；

3. 建立数据库运维体系以及自动化运维平台，负责相关标准、规范、流程的制定和落实；

4. 负责数据业务建模、数据安全，为开发团队和安全团队提供技术支持；

5. 负责泛存储（RDS、NoSQL、分布式文件存储等）的整体规划和管理；

6. 负责 TiDB 以及周边工具的建设和维护。

任职资格：

1. 计算机、数学等相关专业本科及以上学位，5 年以上的互联网 MySQL DBA 经验，特别优秀者可放宽条件；

2. 熟悉 MySQL 数据库体系结构和工作原理，熟悉常用存储引擎的功能和特点；

3. 熟悉业务数据建模理论并具有较强数据库设计能力；

4. 熟悉 MySQL 数据库性能优化、SQL 调优技术，对高并发数据库的锁和事务隔离机制有深入的理解；

5. 有大型电商网站数据库规划、分库分表实践经验，熟悉商品、订单、物流、支付等业务的优先考虑；

6. 熟悉数据库安全技术，在数据库备份以及恢复实践上有较强的经验；

7. 熟练掌握 Linux 以及 Shell、并至少掌握 Python/Java/GO 等一种主流开发语言且有实际项目开发经验；

8. 对数据库技术有强烈兴趣，及时跟进各种最新技术和理论，熟悉云数据库以及分布式数据库；

9. 熟悉分布式计算理论以及 NoSQL 技术，至少熟悉 Redis/ElasticSearch/MongonDB 其中一种；

10. 有 TiDB 的维护经验优先;

11. 积极乐观、诚信，能自我驱动，爱学习，有较强的语言表达和沟通能力。

**职位 5：PingCAP Cloud 研发工程师**

岗位职责：

1. 开发基于 Kubernetes 的 TiDB Cloud 版自动化部署和运维工具；

2. 开发基于 Kubernetes 的企业版 TiDB 自动化部署工具；

3. 负责搭建基于 Kubernetes 和 TiDB 的企业级数据库云 DBaaS。

任职要求：

1. 优秀的发现和解决问题能力，良好的沟通能力和团队合作精神；

2. 三年以上相关领域开发经验，扎实的编程能力，熟悉 C/C++/Rust/Go/Python 中至少一种；

3. 了解各种常见网络协议原理和虚拟化技术；

4. 熟悉 Docker 容器原理；

5. 熟练使用 Linux 和 Docker 容器；

6. 了解 Ansible/SaltStack/Puppet/Terraform 等自动化运维工具；

7. 对分布式系统有一定了解。

加分项：

1. 为 Docker/Kubernetes 等容器相关知名开源项目贡献过代码；

2. 自己手动部署过 Kubernetes 集群；

3. 基于 Kubernetes 开发过 operator 管理有状态服务；

4. 熟悉 gRPC 协议；

5. 熟悉 AWS/GCP/Azure 命令行运维工具 awscli, gcloud, az, terraform 等。

**职位 6：PingCAP 数据库测试工程师**

岗位职责：

1. 负责 TiDB 及周边产品的测试，包括但不限于功能测试、性能测试和稳定性测试；

2. 深入理解数据库的用法，站在用户的视角测试数据库的功能，设计高覆盖率的测试用例；

3. 产品设计讨论，测试计划制定，用例设计，测试执行和结果分析，Bug 复现和追踪等；

4. 参与测试用例和测试脚本的开发。

任职要求：

1. 1 年以上基础软件、中间件测试经验；

2. 至少掌握一门脚本语言，或者精通 SQL；

3. 思维缜密，逻辑严谨；

4. 认真负责，有较强的问题定位和推动能力, 协调各个角色进行问题解决。

加分项：

1. 有数据库测试经验；

2. 熟练使用 Docker、K8s。



## 学习资料

- [High Performance TiDB 专项视频课程](https://space.bilibili.com/86485707/channel/detail?cid=145009)
    - 由 TiDB 核心研发工程师以及 TiDB 社区 Committer 和 Maintainer 联合打造的 High Performance TiDB 连载视频教学课程，将带领大家从源码层面了解 TiDB 的设计与实现，并帮助大家对分布式系统领域知识有更加深入的了解。
- [专项学习文档包](tidb-learning-materials-cn.md)
    - 参赛必读。提供了一些常用的调优工具和 workload 相关知识背景,帮助参赛选手更了解 TiDB 性能测试场景。
