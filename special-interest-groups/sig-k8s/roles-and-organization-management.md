# Template SIG Roles and Organization Management

<!--
Outline the organism specific to this SIG, as well as those that differ from [SIG Governance](sig-governance.md)
-->

## Join and Promotion

Here we mainly follow the instructions in [TiDB Developer Group](../../architecture/README.md#tidb-developer-group), including common requirements, responsibilities and privileges of each community role.

### Join

You are welcomed to be a [contributor](../../architecture/README.md#contributor) once one of your PR about `${module name}` is merged.
To have a discussion with us, just join our slack channel **#sig-k8s** in [tidbcommunity](https://pingcap.com/tidbslack) slack workspace.

### Promotion

#### Be promoted to [`Active Contributor`](../../architecture/README.md#active-contributor)

SIG Specific Requirements:

* Joined the sig-k8s slack channel.

#### Be promoted to [`Reviewer`](../../architecture/README.md#reviewer)

SIG Specific Requirements:

* Have at least 15 PRs merged in `#sig-k8s` projects
* Fix at least 1 issue whose difficulty is medium or above

#### Be promoted to [`Committer`](../../architecture/README.md#committer)

SIG Specific Requirements:

* Exhibited good technical judgment.
* Fix at least 2 issues whose difficulty is high.
* Have reviewed at least 20 PRs in `#sig-k8s` projects
* Nominated by the tech leaders (including co-leaders) and sponsored by at 2 committers

## Quit and Demotion

### Active Contributor

**Automatically retired**:

* No contribution to the `#k8s-sig` projects within one year.

**How to rejoin**:

* Should meet the requirements for Active Contributor again.

### Reviewer

**Automatically demoted**:

For a Reviewer to be demoted to an Active Contributor, he/she must satisfy at
least 1 of the following conditions:

* Haven't reviewed or merged any PR in the `#k8s-sig` projects within 3 months.
* Haven't appeared in the SIG meeting without any reason for 3 times continuously.
* At least 2 Committers or Maintainers agree that the Reviewer is not qualified.

**How to retain**:

* Have reviewed or merged 3 PRs within 1 month.

### Voluntarily Quit or Demote

Please create a PR to remove yourself from the `member-list.md` if you are
going to quit or demote voluntarily.
