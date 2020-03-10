# Dashboard SIG Roles and Organization Management

## Join and Promotion

We mainly follow the instructions in [TiDB Developer Group](../../architecture/README.md#tidb-developer-group).
It lists common requirements, responsibilities and privileges of each role in developer group.

### Join

There is no restrictions to join the discussion of Dashboard SIG. See [README](./README.md) for where we discuss.

However you will be only listed in our [member list] if you have **Active Contributor** role or above.

### Promotion

#### Concept: PR Point

Most of the promotion rules below use "PR Point" to calculate the contribution, which is calculated as:

- 1 easy level task = 1 point
- 1 medium level task = 5 point
- 1 hard level task = 15 point

#### Be Promoted to [`Contributor`](../../architecture/README.md#contributor)

Everyone that successfully contributes commits to the [TiDB Dashboard repository](https://github.com/pingcap-incubator/tidb-dashboard) is a contributor.

#### Be Promoted to [`Active Contributor`](../../architecture/README.md#active-contributor)

Please open a Pull Request to list yourself in our [member list] if you meet the following requirements and want to have an Active Contributor role:

- PR point >= 5 in recent 1 years.

#### Be promoted to [`Reviewer`](../../architecture/README.md#reviewer)

Tech Leaders can nominate promoting a member to Reviewer.

There is no explicit promotion rules, but the following basic requirements must be met:

- Nominated by a Tech Leader.
- Already an Active Contributor.
- Familiar with the code base.
- Contributions that prove the reviewing capability: PR point >= 10.

#### Be promoted to [`Committer`](../../architecture/README.md#committer)

Tech Leaders can nominate promoting a member to Committer.

There is no explicit promotion rules, but the following basic requirements must be met:

- Nominated by a Tech Leader.
- Approved by 2 maintainers from TiDB Dashboard, TiDB or TiKV.
- Already an Active Contributor (Reviewer is not a prerequisite).
- Exhibited good technical judgment.
- Notable contributions: PR point (**excluding** easy level) >= 20.

## Quit and Demotion

### Active Contributor

You will lose the Active Contributor role if you have no contribution within a year. After that, you will be moved to Inactive Contributors in the [member list].

Once you meet the requirements, you can become Active Contributor again.

### Voluntarily Quit or Demote

You can quit the Dashboard SIG voluntarily by simply leaving our discussion channel.

- For Reviewers and above: Your name will remain in the [member list] to acknowledge your contribution.

- For Active Contributor: Your name will be moved to Inactive Contributors.

Please open a Pull Request to update the [member list] if you want to completely remove your name from it.

[member list]: ./member-list.md
