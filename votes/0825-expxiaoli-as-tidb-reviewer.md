# A Vote for expxiaoli as TiDB Reviewer

## Proposal

[@expxiaoli](https://github.com/expxiaoli) has contributed to `pingcap/tidb` in several important areas, especially DDL stability, add-index resource safety, privilege model correctness, and upgrade-path robustness.

The following lists the details of [@expxiaoli](https://github.com/expxiaoli)'s TiDB contributions as of August 7, 2026:

- [40+ authored pull requests](https://github.com/pingcap/tidb/pulls?q=is%3Apr+author%3Aexpxiaoli)
- [35+ reviewed pull requests](https://github.com/pingcap/tidb/pulls?q=is%3Apr+reviewed-by%3Aexpxiaoli)
- [Authored issues](https://github.com/pingcap/tidb/issues?q=is%3Aissue+author%3Aexpxiaoli)

Representative work includes:

- Add-index resource safety: auto pause add-index on TiKV disk full [#69350](https://github.com/pingcap/tidb/pull/69350), [#69181](https://github.com/pingcap/tidb/pull/69181), and TiKV space precheck for DXF add-index [#68490](https://github.com/pingcap/tidb/pull/68490)
- Privilege model correctness: canonicalize db/table names for table-scope GRANT and REVOKE [#67487](https://github.com/pingcap/tidb/pull/67487) with release backports [#68456](https://github.com/pingcap/tidb/pull/68456), [#68547](https://github.com/pingcap/tidb/pull/68547), and hardening parseBinaryParams against malformed input [#68917](https://github.com/pingcap/tidb/pull/68917)
- DDL correctness and safety: partition-column type change whitelist [#67635](https://github.com/pingcap/tidb/pull/67635), prohibiting indexed generated column type changes [#67814](https://github.com/pingcap/tidb/pull/67814), using real start ts for recover table snapshot [#68229](https://github.com/pingcap/tidb/pull/68229), and fixing ALTER TABLE NOCACHE metadata cleanup [#67109](https://github.com/pingcap/tidb/pull/67109)
- Upgrade-path robustness: initializing / tolerating the masking policy table during upgrade [#69763](https://github.com/pingcap/tidb/pull/69763), [#69531](https://github.com/pingcap/tidb/pull/69531)

He has also reviewed TiDB changes in closely related areas, including DDL / add-index improvements, masking policy privileges, and server protocol limits, such as [#69706](https://github.com/pingcap/tidb/pull/69706), [#69425](https://github.com/pingcap/tidb/pull/69425), [#69107](https://github.com/pingcap/tidb/pull/69107), and [#70231](https://github.com/pingcap/tidb/pull/70231).

I ([@bb7133](https://github.com/bb7133)) hereby nominate [@expxiaoli](https://github.com/expxiaoli) as TiDB Reviewer and call for a vote.

## Deadline

The vote will be open for at least 3 days unless there is an objection or not enough votes.

## Scope

team TiDB

## Result

Approved by 4 binding votes:

* disksing(binding)
* D3Hunter(binding)
* Yangkeao(binding)
* AilinKid(binding)
