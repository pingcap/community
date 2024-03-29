# Diagnosis SIG Roles and Organization Management

## Join and Promotion

We mainly follow the instructions in TiDB Developer Group. It lists common requirements, responsibilities and privileges of each role in developer group.

### Join

There is no restrictions to join the discussion of Diagnosis SIG. See [README](README.md) for where we discuss.

However you will be only listed in our [member list] if you have **Active Contributor** role or above.

### Promotion

#### Be Promoted to `Contributor`

Everyone that successfully contributes commits related to improving TiDB products' diagnosability or observability is a contributor. Related repositories may be (but not limited to):

- [pingcap/tidb](https://github.com/pingcap/tidb)
- [pingcap/pd](https://github.com/pingcap/pd)
- [tikv/tikv](https://github.com/tikv/tikv)
- [tikv/rust-prometheus](https://github.com/tikv/rust-prometheus)
- [pingcap-incubator/tidb-dashboard](https://github.com/pingcap-incubator/tidb-dashboard)
- [pingcap-incubator/minitrace-rust](https://github.com/pingcap-incubator/minitrace-rust)
- [pingcap-incubator/minitrace-go](https://github.com/pingcap-incubator/minitrace-go)

#### Be Promoted to `Active Contributor`

Please open a Pull Request to list yourself in our [member list] if you meet the following requirements and want to have an Active Contributor role:

- Merged 8+ PRs in recent 1 years.

#### Be promoted to `Reviewer`

Tech Leaders can nominate promoting a member to Reviewer.

There is no explicit promotion rules, but the following basic requirements must be met:

- Nominated by a Tech Leader.
- Already an Active Contributor.
- Familiar with the code base.
- Contributions that prove the reviewing capability. Meet **any** of the following:
  - Merged 2+ medium level PRs.
  - Merged 1+ hard level PRs.

#### Be promoted to `Committer`

Tech Leaders can nominate promoting a member to Committer.

There is no explicit promotion rules, but the following basic requirements must be met:

- Nominated by a Tech Leader.
- Approved by 2 maintainers from TiDB Dashboard, TiDB or TiKV.
- Already an Active Contributor (Reviewer is not a prerequisite).
- Exhibited good technical judgment.
- Notable contributions. Meet **any** of the following:
  - Merged 4+ medium level PRs.
  - Merged 1+ medium level PRs and 1+ hard level PRs.
  - Merged 2+ hard level PRs.

## Quit and Demotion

### Active Contributor

The Active Contributor role will be demoted if one has no contribution within a year. After demotion, he / she will be moved to Inactive Contributors in the [member list].

Once meeting the requirements of Active Contributor, one can become Active Contributor again.

### Reviewer

The Reviewer role will be demoted if one does not review any PR or contribute any new PR within 6 months. After demotion, he / she will be moved to Active Contributor.

Once meeting the requirements of Reviewer, one can become Reviewer again.

### Voluntarily Quit or Demote

You can quit the Diagnosis SIG voluntarily by simply leaving our discussion channel.

- For Reviewers and above: Your name will remain in the [member list] to acknowledge your contribution.

- For Active Contributor: Your name will be moved to Inactive Contributors.

Please open a Pull Request to update the [member list] if you want to completely remove your name from it.

[member list]: membership.json
