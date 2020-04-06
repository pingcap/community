# Template SIG Roles and Organization Management

<!--
Outline the organism specific to this SIG, as well as those that differ from [SIG Governance](sig-governance.md)
-->

## Join and Promotion

We mainly follow the instructions in [TiDB Developer Group](../../architecture/README.md#tidb-developer-group).
It lists common requirements, responsibilities and privileges of each role in developer group.

### Join

You are welcomed to be a [contributor](../../architecture/README.md#contributor) once one of your PR about `${module name}` is merged.
To have a discussion with us, just join our slack channel **#sig-${name}** in [tidbcommunity](https://pingcap.com/tidbslack) slack workspace.

### Promotion

#### Be promoted to [`Active Contributor`](../../architecture/README.md#active-contributor)

SIG Specific Requirements:

* Joined the sig-${name} slack channel.

#### Be promoted to [`Reviewer`](../../architecture/README.md#reviewer)

SIG Specific Requirements:

* Have at least **${a certain number}** PRs merged in the `${module name}` package within one year.
* Fix at least **${a certain number}** issues whose difficulty is medium or above.
* Present design ideas and adopt them in more than **${a certain number}** executable task.


#### Be promoted to [`Committer`](../../architecture/README.md#committer)

SIG Specific Requirements:

* Exhibited good technical judgment.
* Fix at least **${a certain number}** issues whose difficulty is high.
* Have reviewed at least **${a certain number}** PRs in the `${module name}` package within one year.
* Play an important role in a big feature.

## Quit and Demotion

### Active Contributor

**Automatically retired**:

* No contribution to the `${module name}` package within one year.

**How to rejoin**:

* Should meet the requirements for Active Contributor again.

### Reviewer

**Automatically demoted**:

For a Reviewer to be demoted to an Active Contributor, he/she must satisfy at
least 1 of the following conditions:

* Haven't reviewed or merged any PR in the `${module name}` package within 3 months.
* Haven't appeared in the SIG meeting without any reason for 3 times continuously.
* At least 2 Committers or Maintainers agree that the Reviewer is not qualified.

**How to retain**:

* Have reviewed or merged  **${a certain number}** PRs within 1 month.

### Voluntarily Quit or Demote

Please email to [Yanqing](mailto:zhangyanqing@pingcap.com) if you are
going to quit or demote voluntarily.
