# A Vote for nomination of wfxr as the TiDB reviewer

## Proposal

[@wfxr](https://github.com/wfxr) has been actively contributing to `pingcap/tidb`, especially in transaction and shared-lock handling, GC control, `client-go` integration, and release-branch maintenance.

As of November 26, 2026, his contributions to `pingcap/tidb` include:

- [27 merged pull requests](https://github.com/pingcap/tidb/pulls?q=is%3Apr+is%3Amerged+author%3Awfxr)
- [30 reviewed pull requests](https://github.com/pingcap/tidb/pulls?q=is%3Apr+reviewed-by%3Awfxr+-author%3Awfxr)

Representative contributions include:

- **Shared-lock and transaction support**: Implemented shared lock upgrade support ([#69559](https://github.com/pingcap/tidb/pull/69559)), multi-key shared-lock upgrade tests ([#70877](https://github.com/pingcap/tidb/pull/70877)), FK shared-lock sysvar gating on next-gen ([#70328](https://github.com/pingcap/tidb/pull/70328)), and RealTiKV shared-lock test enablement ([#69268](https://github.com/pingcap/tidb/pull/69268), [#70434](https://github.com/pingcap/tidb/pull/70434)).
- **GC and stability fixes**: Added operator-controlled GC freeze ([#73196](https://github.com/pingcap/tidb/pull/73196)) and fixed async `BatchGet` cancellation panic ([#72882](https://github.com/pingcap/tidb/pull/72882)).
- **Dependency and release maintenance**: Maintained `client-go` upgrades and pessimistic lock wait / shared-lock compatibility across `master`, `release-8.5`, `release-nextgen-202603`, and `release-nextgen-202609` ([#69266](https://github.com/pingcap/tidb/pull/69266), [#70301](https://github.com/pingcap/tidb/pull/70301), [#70303](https://github.com/pingcap/tidb/pull/70303), [#71367](https://github.com/pingcap/tidb/pull/71367), [#71600](https://github.com/pingcap/tidb/pull/71600), [#71608](https://github.com/pingcap/tidb/pull/71608)).

I ([@cfzjywxk](https://github.com/cfzjywxk)) hereby nominate [@wfxr](https://github.com/wfxr) as TiDB reviewer and call for a vote.

## Deadline

The vote will be open for at least 3 days unless there is an objection or not enough votes.

## Scope

team TiDB

## Result

See also https://github.com/pingcap/community/pull/835.
