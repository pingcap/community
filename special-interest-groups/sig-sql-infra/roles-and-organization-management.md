# SIG SQL-Infra Roles and Organization Management

## Join and Promotion

### Join

The minimal requirement for contributors to join the SQL-Infra SIG is to have
the **Active Contributor** community role in the TiDB or the parser repository.

### Promotion

#### From `Contributor` to `Active Contributor`

Requirements:

* Have at least 8 PRs merged within one year.
* Nominated by at least 2 SQL-Infra SIG Reviewers or roles above.

#### From `Active Contributor` to `Reviewer`

Requirements:

* Have at least 20 PRs (at least 10 PRs in tidb repo) merged.
* Have fixed at least 2 issues whose difficulty is medium or above.
* Nominated by at least 2 Committers or 2 Maintainers.

#### From `Reviewer` to `Committer`

Requirements:

* Have at least 20 PRs (at least 10 PRs in tidb repo) merged.
* Have fixed at least 2 issues whose difficulty is medium or above.
* Have fixed at least 1 issues whose difficulty is hard.
* Have reviewed at least 10 PRs.
* Nominated by at least 2 Committers or Maintainers.

## Quit and Demotion

### Active Contributor

**Automatically retired**:

* No contribution to the parser repository within one year.

**How to rejoin**:

* Should meet the requirements for Active Contributor again.

### Reviewer

**Automatically demoted**:

For a Reviewer to be demoted to an Active Contributor,  he/she must satisfy at
least 1 of the following conditions:

* Haven't reviewed or merged any PR in the parser repository within 3 months.
* Haven't appeared in the SIG meeting without any reason for 3 times continuously.
* At least 2 Committers or Maintainers agree that the Reviewer is not qualified.

**How to retain**:

* Have reviewed or merged 5 PRs within 1 month.

### Voluntarily Quit or Demote

Please email to [Yanqing Zhang](mailto:zhangyanqing@pingcap.com) if you are
going to quit or demote voluntarily.
