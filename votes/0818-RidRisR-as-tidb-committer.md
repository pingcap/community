# A Vote for nomination of RidRisR as the TiDB committer

## Proposal

[@RidRisR](https://github.com/RidRisR) was nominated and promoted to the role of Reviewer in the TiDB community ([nomination record](https://github.com/pingcap/community/blob/master/votes/0801-Tristan1900-and-RidRisR-as-tidb-reviewers.md)). Since the promotion, @RidRisR has continued to make significant contributions to the TiDB Backup & Restore (BR) system.

@RidRisR has been deeply involved in the development of BR features and stability improvements, as well as the corresponding logic in the operator. His work demonstrates strong technical expertise in data safety and cluster operation management.

Some key contributions include:

*   **BR Stability & Reliability**: Enhanced pre-checks (duplicate table, disk space) and fixed critical stability issues (nil pointers, overflows).
    *   [br: enhance table existence check](https://github.com/pingcap/tidb/pull/61596)
    *   [br: pre-check TiKV disk space before restore task](https://github.com/pingcap/tidb/pull/54385)
    *   [br: USE int for vlen to prevent overflow](https://github.com/pingcap/tidb/pull/63662)
*   **Feature Enhancements**: Supported Log Backup to S3 with object lock and improved PITR capabilities.
    *   [pitr: support log backup to s3 when object lock is enabled](https://github.com/pingcap/tidb/pull/51210)
    *   [br: add tool to clean up registry and checkpoints](https://github.com/pingcap/tidb/pull/63882)
*   **TiDB Operator Integration**: Implemented compaction for backups and improved BR interaction in Kubernetes environments.
    *   [br: add a new CRD for compact backup](https://github.com/pingcap/tidb-operator/pull/5822)
    *   [br: make compactbackup resource configurable](https://github.com/pingcap/tidb-operator/pull/6359)

The following lists the details of [@RidRisR](https://github.com/RidRisR)'s contributions (across `tidb` and `tidb-operator`):

- [60+ authored pull requests](https://github.com/pulls?q=is%3Apr+author%3ARidRisR+repo%3Apingcap%2Ftidb+repo%3Apingcap%2Ftidb-operator+is%3Aclosed)
- [40+ reviewed pull requests](https://github.com/pulls?q=is%3Apr+reviewed-by%3ARidRisR+repo%3Apingcap%2Ftidb+repo%3Apingcap%2Ftidb-operator+is%3Amerged)
- [30+ authored issues](https://github.com/issues?q=is%3Aissue+author%3ARidRisR+repo%3Apingcap%2Ftidb+repo%3Apingcap%2Ftidb-operator)

I ([@YuJuncen](https://github.com/YuJuncen)) hereby nominate [@RidRisR](https://github.com/RidRisR) as TiDB committer and call for a vote.

## Deadline

The vote will be open for at least 7 days unless there is an objection or not enough votes.

## Scope

team TiDB

## Result

See also https://github.com/pingcap/community/pull/(TBD).
