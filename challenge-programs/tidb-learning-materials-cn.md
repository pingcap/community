# TiDB 专项学习包

## TIDB 源码级别认识

熟悉 TiDB 的使用及各个模版相关实现内容，参考资料

- 熟悉 [TiDB in action](https://book.tidb.io/) 全书内容
- 源码阅读
    - [TiDB 源码阅读](https://pingcap.com/blog-cn/#TiDB-%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB)
    - [TiKV 源码阅读](https://pingcap.com/blog-cn/#TiKV-%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90)
## 常用性能测试场景

workload 相关知识背景, 根据自己选择的课题进行选择，参考资料：

- [tpcc](http://www.tpc.org/tpcc/) 
- [ycsb](https://github.com/brianfrankcooper/YCSB)
- [sysbench](https://github.com/akopytov/sysbench)
## 调优工具

如果我们需要发现 TiKV 的性能瓶颈，我们首先要通过 Profile 工具来定位，这个给大家提供两个我们常用的 Profile 工具供大家参考。

- TiKV [火焰图工具](https://github.com/pingcap/tidb-inspect-tools/blob/master/tracing_tools/perf/cpu_tikv.sh)
- VTune [分析 hotspots 指南](https://software.intel.com/en-us/vtune-amplifier-help-hotspots-analysis)
## 其他基础
- [如何从零开始参与大型开源项目](https://pingcap.com/blog-cn/how-to-contribute/)
- [Bot 指令介绍](https://tidb-community-bots.github.io/challenge-bot/commands.html)


