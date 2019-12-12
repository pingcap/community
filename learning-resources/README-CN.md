# 学习资料

## 目录

<!-- vim-markdown-toc GFM -->

* [数据库](#数据库)
    * [TiDB 架构](#tidb-架构)
    * [源码阅读](#源码阅读)
        * [TiDB 源码阅读](#tidb-源码阅读)
        * [TiKV 源码阅读](#tikv-源码阅读)
    * [TiDB 关键组件原理](#tidb-关键组件原理)
        * [语法解析](#语法解析)
        * [优化器](#优化器)
        * [执行引擎](#执行引擎)
        * [事务](#事务)
        * [DDL](#ddl)
        * [TiKV Client](#tikv-client)
        * [存储引擎](#存储引擎)
        * [元数据和路由信息管理](#元数据和路由信息管理)
        * [事务时间戳分配](#事务时间戳分配)
        * [Region 调度](#region-调度)
    * [TiDB 核心技术解析（WIP）](#tidb-核心技术解析wip)
        * [向量化（WIP）](#向量化wip)
        * [RPC（WIP）](#rpcwip)
        * [Raft（WIP）](#raftwip)
    * [K8s 系列文章（WIP）](#k8s-系列文章wip)
    * [Paper Reading（WIP）](#paper-readingwip)
* [编程语言（WIP）](#编程语言wip)
    * [Golang（WIP）](#golangwip)
    * [Rust（WIP）](#rustwip)

<!-- vim-markdown-toc -->

## 数据库

### TiDB 架构

* [How we build TiDB](https://pingcap.com/blog-cn/how-do-we-build-tidb/)
* [三篇文章了解 TiDB 技术内幕 - 说存储](https://pingcap.com/blog-cn/tidb-internal-1/)
* [三篇文章了解 TiDB 技术内幕 - 说计算](https://pingcap.com/blog-cn/tidb-internal-2/)
* [三篇文章了解 TiDB 技术内幕 - 谈调度](https://pingcap.com/blog-cn/tidb-internal-3/)

### 源码阅读

#### TiDB 源码阅读

TiDB 24 篇源码阅读基于 release-2.0 分支，发表于 2017 年，虽然现在 TiDB 代码在不断演进，但是基本的原理仍然可参考这些文章中介绍的内容。

[24 篇源码阅读文章](https://pingcap.com/blog-cn/#TiDB-%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB)

#### TiKV 源码阅读

TiKV 源码解析还在不断补充中，欢迎感兴趣的同学阅读和反馈意见：[TiKV 源码解析](https://pingcap.com/blog-cn/#TiKV-%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90)

### TiDB 关键组件原理

这里我们将介绍 TiDB 关键组件基本原理，方便大家对 TiDB 有一个更加深刻的认识。

#### 语法解析

TiDB 的 SQL 语法解析由 TiDB 的 Parser 模块负责，其代码位于 [pingcap/parser](https://github.com/pingcap/parser)。Parser 整体上分为两部分，第一部分是 Lexer，是用 Golang 手动写的；第二部分是 Parser，用 goyacc 实现。TiDB 的 Parser 实现原理可通过阅读这篇文章了解：[TiDB 源码阅读系列文章（五）TiDB SQL Parser 的实现](https://pingcap.com/blog-cn/tidb-source-code-reading-5/)。如果想要深入理解 yacc 的语法，推荐阅读 [《flex & bison》](https://book.douban.com/subject/3568327/)。

#### 优化器

SQL 优化器大多数代码逻辑都在 [planner](https://github.com/pingcap/tidb/tree/master/planner) 这个包下，与 planner 相关的还有统计信息以及 Key Range 的计算模块。Range 计算在 [ranger](https://github.com/pingcap/tidb/tree/master/util/ranger) 包下。目前大家可初步参考源码阅读文章来了解 TiDB 优化器：

* [TiDB 源码阅读系列文章（七）基于规则的优化](https://pingcap.com/blog-cn/tidb-source-code-reading-7/)
* [TiDB 源码阅读系列文章（二十一）基于规则的优化 II](https://pingcap.com/blog-cn/tidb-source-code-reading-21/)
* [TiDB 源码阅读系列文章（八）基于代价的优化](https://pingcap.com/blog-cn/tidb-source-code-reading-8/)
* [TiDB 源码阅读系列文章（十二）统计信息(上)](https://pingcap.com/blog-cn/tidb-source-code-reading-12/)
* [TiDB 源码阅读系列文章（十三）索引范围计算简介](https://pingcap.com/blog-cn/tidb-source-code-reading-13/)
* [TiDB 源码阅读系列文章（十四）统计信息（下）](https://pingcap.com/blog-cn/tidb-source-code-reading-14/)

除此之外还可以通过一些设计文档了解 TiDB 优化器相关的内部原理：

* [Proposal: A SQL Planner based on the Volcano/Cascades model](https://github.com/pingcap/tidb/blob/master/docs/design/2018-08-29-new-planner.md)
* [Proposal: Maintain statistics in Plan](https://github.com/pingcap/tidb/blob/master/docs/design/2018-09-04-histograms-in-plan.md)
* [Proposal: Join Reorder Design v1](https://github.com/pingcap/tidb/blob/master/docs/design/2018-10-20-join-reorder-dp-v1.md)
* [Proposal: Support SQL Plan Management](https://github.com/pingcap/tidb/blob/master/docs/design/2018-12-11-sql-plan-management.md)
* [Proposal: Support Skyline Pruning](https://github.com/pingcap/tidb/blob/master/docs/design/2019-01-25-skyline-pruning.md)
* [Proposal: Access a table using multiple indexes](https://github.com/pingcap/tidb/blob/master/docs/design/2019-04-11-indexmerge.md)
* [Proposal: Support automatic index recommendation](https://github.com/pingcap/tidb/blob/master/docs/design/2019-11-05-index-advisor.md)

#### 执行引擎

TiDB 执行引擎的代码散落在各个地方，目前主要由两部分组成：

* 一部分在 TiDB 端，代码位于 TiDB 的 [executor](https://github.com/pingcap/tidb/tree/master/executor) 包中。
* 另一部分在 TiKV 端，代码位于 TiKV 的 [coprocessor](https://github.com/pingcap/tikv/tree/master/src/coprocessor) 中。

另外在 TiDB 的 [mocktikv](https://github.com/pingcap/tidb/tree/master/store/mockstore/mocktikv) 中也有一部分代码，里面实现了 TiKV Coprocessor 的逻辑，主要用来做单元测试。

执行引擎的作用是严格按照物理算子的要求处理数据，产生结果。[MPP and SMP in TiDB](https://pingcap.com/blog-cn/mpp-smp-tidb/) 这篇文章介绍了一点执行器的架构。目前可通过如下几篇源码解析来了解 TiDB 执行引擎：

* [TiDB 源码阅读系列文章（六）Select 语句概览](https://pingcap.com/blog-cn/tidb-source-code-reading-6/)
* [TiDB 源码阅读系列文章（十）Chunk 和执行框架简介](https://pingcap.com/blog-cn/tidb-source-code-reading-10/)
* [TiDB 源码阅读系列文章（九）Hash Join](https://pingcap.com/blog-cn/tidb-source-code-reading-9/)
* [TiDB 源码阅读系列文章（十一）Index Lookup Join](https://pingcap.com/blog-cn/tidb-source-code-reading-11/)
* [TiDB 源码阅读系列文章（十五）Sort Merge Join](https://pingcap.com/blog-cn/tidb-source-code-reading-15/)
* [TiDB 源码阅读系列文章（二十二）Hash Aggregation](https://pingcap.com/blog-cn/tidb-source-code-reading-22/)
* [TiDB 源码阅读系列文章（四）Insert 语句概览](https://pingcap.com/blog-cn/tidb-source-code-reading-4/)
* [TiDB 源码阅读系列文章（十六）INSERT 语句详解](https://pingcap.com/blog-cn/tidb-source-code-reading-16/)

#### 事务

TiDB 支持分布式事务，实现原理参考自 Google Percolator：[Large-scale Incremental Processing Using Distributed Transactions and Notifications](http://research.google.com/pubs/pub36726.html)。这是一个优化过的两阶段提交算法。TiDB 的实现参考 [Transaction in TiDB](https://andremouche.github.io/tidb/transaction_in_tidb.html)。原始的 Percolator 是一个[乐观的事务算法](https://pingcap.com/blog-cn/percolator-and-txn/)，在 3.0 里面 TiDB 引入悲观事务（实验性）特性，具体实现原理可以参考：[TiDB 新特性漫谈：悲观事务](https://pingcap.com/blog-cn/percolator-and-txn/)。

此外 TiDB 侧的事务逻辑可以参考 [TiDB 源码阅读系列文章（十九）tikv-client（下）](https://pingcap.com/blog-cn/tidb-source-code-reading-19/)。

#### DDL

TiDB DDL 的实现参考了 Google F1 的 [在线 Schema 变更算法](http://static.googleusercontent.com/media/research.google.com/zh-CN//pubs/archive/41376.pdf)，我们在文章 [异步 schema 变更](https://github.com/zimulala/builddatabase/blob/master/f1/schema-change.md) 中进行了解读和剖析，帮助读者理解该算法。

该算法在 TiDB 中的具体实现可以参考 [TiDB 的异步 schema 变更实现](http://zimulala.github.io/2016/02/02/schema-change-implement/)，对应的源码解析文章为：[TiDB 源码阅读系列文章（十七）DDL 源码解析](https://pingcap.com/blog-cn/tidb-source-code-reading-17/)

#### TiKV Client

TiKV Client 是 TiDB 中负责跟 TiKV 交互的模块，这里会有两阶段提交，Coprocessor 交互等等。

* Golang Client：代码位置在 [store/tikv](https://github.com/pingcap/tidb/tree/master/store/tikv)，主要是
  TiDB 使用。这里有两个简单的例子讲述如何调用 KV 接口：
    * [benchkv](https://github.com/pingcap/tidb/tree/master/cmd/benchkv)
    * [benchrawkv](https://github.com/pingcap/tidb/tree/master/cmd/benchraw)
* Java Client：代码在 [tikv-client-lib-java](https://github.com/pingcap/tikv-client-lib-java) 中，主要是给 TiSpark 项目用。
* Rust Client：代码在 [client-rust](https://github.com/tikv/client-rust)，目前功能还不是很丰富。

另外这两篇 TiDB 源码解析能够帮助大家进一步了解 TiClient 的代码逻辑：

* [TiDB 源码阅读系列文章（十八）tikv-client（上）](https://pingcap.com/blog-cn/tidb-source-code-reading-18/)
* [TiDB 源码阅读系列文章（十九）tikv-client（下）](https://pingcap.com/blog-cn/tidb-source-code-reading-19/)

#### 存储引擎

TiDB 使用 TiKV 作为存储引擎，TiKV 代码位于 [tikv/tikv](https://github.com/tikv/tikv) 中。TiKV 内部可分为多层，每层有各自的功能，自底向上依次为：

* RocksDB：在 TiKV 内部，RocksDB 是一个单机存储引擎，用于存放 TiKV 所有数据，提供单机存储的 KV API。
* Raft：Raft 是分布式系统中一种一致性算法，在 TiKV 集群中代表了一致性层，使各个 TiKV 节点之间的状态能达成一致。负责 TiKV 数据副本之间的拷贝，是 TiDB 高可用的基石。
* Raft KV：RaftKV 在 RocksDB 和 Raft 之上，结合两者，提供了分布式强一致性的基础 KV API。
* MVCC： MVCC 顾名思义，提供了多版本并发控制和分布式事务 API。MVCC 层通过对 Key 进行特殊编码（将时间戳写入 Key 中）实现了多版本和事务功能。
* TXN KV：TXN KV 在 RaftKV 和 MVCC 之上，结合两者，提供了分布式事务和多版本并发控制的功能。
* Coprocessor：Coprocessor 负责处理 TiDB 下推的 SQL 算子，在数据的存储节点上直接计算数据。Coprocessor 在 RaftKV 和 MVCC 层之上。TiDB 会将查询转化成一个 DAG，DAG 包含了下推的 SQL 算子和表达式，Coprocessor 根据下推的执行计划计算 TiKV 中的数据，将计算结果返回给 TiDB。

#### 元数据和路由信息管理

PD 负责管理的集群的元数据和路由信息，代码位于 [pingcap/pd](https://github.com/pingcap/pd) 中。TiDB 集群中的元数据包括全局配置（例如 clusterID，副本数），TiKV Region 信息，TiKV 节点的状态等。

#### 事务时间戳分配

TiDB 的分布式事务模型依赖全局有序的时间戳，这个时间戳由 PD 集群中的 Leader 节点负责分配和提供。PD 集群通过 [etcd](https://github.com/etcd-io/etcd) 来保证即使 PD 集群的 Leader 切换后时间戳也保持单调递增。

#### Region 调度

Region 调度主要分为两方面。其一是副本管理，为 Region 维护配置的副本数（比如某个 TiKV 节点因异常情况宕机导致某些 Region 丢失了一些副本，PD 就需要为这些 Region 补充新的副本），副本管理还需要使 Region 的副本们满足一些约束条件，比如确保同一个 Region 的副本们尽可能不处于同一个 TiKV 节点上。

Region 调度的另一方面是均衡负载。需要通过调整 Region Leader 或其他副本的位置来均衡负载，这部分我们做了多种不同的策略来适应不同的业务场景。

### TiDB 核心技术解析（WIP）

#### 向量化（WIP）

#### RPC（WIP）

#### Raft（WIP）

### K8s 系列文章（WIP）

### Paper Reading（WIP）

## 编程语言（WIP）

### Golang（WIP）

### Rust（WIP）
