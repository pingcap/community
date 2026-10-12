# A Vote for ChangRui-Ryan as TiDB Reviewer

## Proposal

[@ChangRui-Ryan](https://github.com/ChangRui-Ryan) has contributed to `pingcap/tidb` across execution, Starter mode, full-text search, and inference. Since August 2025, he has authored 37 TiDB pull requests, 27 of which have been merged, and has reviewed 44 pull requests. He has also filed 14 TiDB issues. The activity links are:

- [37 authored pull requests](https://github.com/pingcap/tidb/pulls?q=is%3Apr+author%3AChangRui-Ryan)
- [44 reviewed pull requests](https://github.com/pingcap/tidb/pulls?q=is%3Apr+reviewed-by%3AChangRui-Ryan)
- [14 authored issues](https://github.com/pingcap/tidb/issues?q=is%3Aissue+author%3AChangRui-Ryan)

Representative contributions include:

- Execution correctness and resource accounting: fixed a sort spill hang ([#65680](https://github.com/pingcap/tidb/pull/65680)), added incremental probing for IndexHashJoin ([#63723](https://github.com/pingcap/tidb/pull/63723)), guarded record sets after result-set completion ([#69383](https://github.com/pingcap/tidb/pull/69383)), and added memory tracking for window executors and IndexJoin ranges ([#70630](https://github.com/pingcap/tidb/pull/70630), [#70430](https://github.com/pingcap/tidb/pull/70430)).
- Starter mode and serverless support: contributed to Starter activation and shutdown coordination ([#68384](https://github.com/pingcap/tidb/pull/68384)), username-prefix support ([#68355](https://github.com/pingcap/tidb/pull/68355)), TLS and certificate reload ([#68294](https://github.com/pingcap/tidb/pull/68294)), and full-text search for Starter mode ([#69012](https://github.com/pingcap/tidb/pull/69012)).
- Full-text search and inference: added MySQL boolean search parsing and NGRAM boolean search pattern support ([#66002](https://github.com/pingcap/tidb/pull/66002), [#65841](https://github.com/pingcap/tidb/pull/65841)), and built the embedding provider foundation, adapters, runtime, and `EMBED_TEXT` support ([#69903](https://github.com/pingcap/tidb/pull/69903), [#69981](https://github.com/pingcap/tidb/pull/69981), [#70139](https://github.com/pingcap/tidb/pull/70139)).

He has also reviewed changes in executor memory tracking, vector index DDL, embedding support, and test coverage, including [#70630](https://github.com/pingcap/tidb/pull/70630), [#70968](https://github.com/pingcap/tidb/pull/70968), [#70344](https://github.com/pingcap/tidb/pull/70344), and [#71393](https://github.com/pingcap/tidb/pull/71393).

He has reported concrete TiDB bugs and proposed planner improvements, including an intermittent missing-column error in index scans ([#67552](https://github.com/pingcap/tidb/issues/67552)) and a proposal to improve cardinality estimation for composite-index `IndexRangeScan` ([#70329](https://github.com/pingcap/tidb/issues/70329)).

I ([@xufei](https://github.com/xufei)) hereby nominate [@ChangRui-Ryan](https://github.com/ChangRui-Ryan) as TiDB Reviewer and call for a vote.

## Deadline

The vote will be open for at least 3 days unless there is an objection or not enough votes.

## Scope

team TiDB
