# SRE-BOT Command Help

## Continuous Integration(CI) Commands

Supported Repositories:

* [tidb](https://github.com/pingcap/tidb)
* [tikv](https://github.com/tikv/tikv)
* [pd](https://github.com/pingcap/pd)
* [tispark](https://github.com/pingcap/tispark)
* [tidb-binlog](https://github.com/pingcap/tidb-binlog)
* [tidb-operator](https://github.com/pingcap/tidb-operator)

### `/rebuild`

#### Description

Build the binary based on the PR for testing.

### `/run-all-tests`

#### Description

Triggers all the CI test cases.

#### Parameters

```
# specify which tidb to use
tidb=<branch>|<pr/$num>
tikv=<branch>|<pr/$num>
pd=<branch>|<pr/$num>
tidb-test=<branch>|<pr/$num>
tidb-private-test=<branch>|<pr/$num>
```

#### Examples

```
/run-all-tests tidb-test=pr/666
/run-all-tests tidb-test=release-2.1
/run-all-tests tikv=pr/999
```

### /run-{{some}}-test

#### Description

Run a single CI test. All the supported tests are:

```
/run-common-test
/run-integration-common-test
/run-integration-compatibility-test
/run-integration-ddl-test
/run-mybatis-test
/run-sqllogic-test-1
/run-sqllogic-test-2
/run-unit-test
```

> **NOTE**: Some repo may not have some of the above tests. For example:
> `sqllogic-test-1`/`sqllogic-test-2` don't have any meaning on the
> `tidb-binlog` repo.

#### Parameters

The same as `/run-all-tests`

#### Examples

```
/run-unit-test
```

## Pull Request Commands

### `/run-auto-merge`/`/merge`

Add a PR to a internal job queue.

> **NOTE**: The PR must have `can merge` label.

### `/run-cherry-picker`

Triggers a cherry pick for a PR.

> **NOTE**: The PR must have the `needs-cherry-pick-{{release-num}}` labels to
> indicate which release branch this should be cherry picked to.
