# Performance Tuning Package

This package provides workload-related background knowledge and commonly used tuning tools for participants to better understand TiDB performance workloads.

## Workloads introductions

Workload-related background knowledge includes

*   [tpcc ](http://www.tpc.org/tpcc/)
*   [ycsb](https://github.com/brianfrankcooper/YCSB)
*   [sysbench](https://github.com/akopytov/sysbench)

## Performance tuning tools

If you need to find the performance bottleneck of TiKV, you could locate it through the Profile tools. Here are two commonly used Profile tools:

*   [TiKV flame graph tool](https://github.com/pingcap/tidb-inspect-tools/blob/master/tracing_tools/perf/cpu_tikv.sh)
*   [VTune Profiler User Guide](https://software.intel.com/en-us/vtune-amplifier-help-hotspots-analysis)