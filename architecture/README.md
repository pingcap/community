# TiDB Community Architecture

Open source projects live and breathe the open-source community with different types of roles. The TiDB community is organized as shown below:

![TiDB Community Architecture](../media/architecture.svg)

## Content

<!-- vim-markdown-toc GFM -->

* [PMC](#pmc)
* [TiDB Developer Group](#tidb-developer-group)
    * [Contributor](#contributor)
        * [How to become a Contributor](#how-to-become-a-contributor)
        * [Contributor List](#contributor-list)
    * [Active Contributor](#active-contributor)
    * [Reviewer](#reviewer)
        * [How to become a Reviewer](#how-to-become-a-reviewer)
        * [Responsibilities and Privileges](#responsibilities-and-privileges)
    * [Committer](#committer)
        * [How to become a Committer](#how-to-become-a-committer)
        * [Responsibilities and Privileges](#responsibilities-and-privileges-1)
    * [Maintainer](#maintainer)
        * [How to become a Maintainer](#how-to-become-a-maintainer)
        * [Responsibilities and Privileges](#responsibilities-and-privileges-2)
* [TiDB User Group](#tidb-user-group)
* [Organizer Committee](#organizer-committee)

<!-- vim-markdown-toc -->

## PMC

PMC (Project Management Committee) functions as the core management team that oversees the TiKV community. The PMC has additional responsibilities over and above those of a committer. These responsibilities ensure the smooth running of the project. PMC members are expected to review code contributions, participate in strategic planning, approve changes to the governance model and manage the copyrights within the project outputs. See [Governance](./GOVERNANCE.md) for more details about PMC.

## TiDB Developer Group

As the cornerstone of community development, the TiDB Developer Group consists of these roles: Maintainer, Committer, Reviewer, Active Contributor, and Contributor. Each role takes corresponding responsibilities in the community. Collectively they play an important role in the robust development of TiDB.

### Contributor

New contributors should be welcomed to the community by existing members, helped with PR workflow, and directed to relevant documentation and communication channels.

#### How to become a Contributor

- Merged at least 1 PR for any SIG

You are also encouraged to participate in the projects in the following ways:

- Actively answer technical questions asked by community users in github issues.
- Help test the projects
- Help review the pull requests (PRs) submitted by others
- Help improve technical documents
- Submit valuable issues
- Report or fix known and unknown bugs
- Write articles about source code analysis and usage cases for the - projects.

#### Responsibilities and privileges

- Become a member in the SIG
- Get the profile listed on the membership page of the TiKV community

#### Contributor List

See [TiDB Contributors](./contributor-list.md)

### Active Contributor

Active Contributors are continuously active contributors in the community. They can have issues and PRs assigned to them, participate in SIGs through GitHub teams, and pre-submit tests are automatically run for their PRs. See `member-list.md` under the specific SIG for a list of Active Contributors.

#### How to become an Active Contributor

- Contributed 8 PRs and above to a specific SIG within one year
- Sponsored by two incumbent Reviewers in a SIG

#### Responsibilities and privileges

- Get the profile listed on the membership page of the corresponding SIG

### Reviewer

Reviewers are responsible for reviewing the code submitted by the community to ensure the quality and correctness; generated out of Active Contributors in a specific SIG.

Reviewer status is scoped to the part of the codebase under the SIG.
See `member-list.md` under the specific SIG for a list of Reviewers of the SIG.

#### How to become a Reviewer

- Familiar with the codebase
- Demonstrated a recoganized level of community engagement in the SIG development, via contributions that have met one or more of the minimal criteria as defined below：
  - Merged 20+ PRs (may vary among SIGs)
  - Handled 1+ more issue of Medium difficulty or higher
- Sponsored by at 2 Committers of the SIG

#### Responsibilities and Privileges

- Ensure the correctness of the code submitted to the SIG
- Respond promptly to PRs
- Participate in SIG meetings regularly
- Approve code reviews with LGTM (Looks Good To Me)
- Get the profile listed on the membership page of the corresponding SIG

### Committer

Committers come from Reviewers. Committer is scoped to the specific SIG where the promotion applies. Committers are recoganized by Maintainers or SIG Tech Leads for their outstanding contributions to the specific SIG.

Committer status is scoped to the part of the codebase under the SIG. See `member-list.md` under the specific SIG for a list of Committers of the SIG.

#### How to become a Committer

A new Committer must be nominated by any existing Maintainer or PMC member, and
is generated through the voting of PMC members.

A Committer must have accomplished one or more of the following items:

* Your commits have been approved and merged by Maintainers for over ten times.
* You have implemented a complete feature.
* You have fixed a vital bug.

#### Responsibilities and privileges

- Control overall code quality of projects under the SIG
- Guide Contributors and Reviewers to contribute to TiKV continuously
- Participate in Committer meetings regularly and have knowledge priority regarding project development
- Participate in design discussions
- Get the profile listed on the membership page of the corresponding SIG

### Maintainer

Maintainers are the planners and designers of the TiDB project, with the authority to merge branches into the master. Maintainers come from Committers. They must demonstrate both good judgment and responsibility towards the sustained development and overall health of the TiDB project. See [TiDB Maintainers](./maintainer-list.md) for a list of TiDB Maintainers

#### How to become a Maintainer

- Demonstrated a deep and comprehensive understanding of TiKV's technical goals and directions
- Must be Committer for at least 2 SIGs
- Actively involved in organizing technical seminars and proposing or reviewing major technical designs
- Can handle complex problems in the code implementation process
- Nominated by and obtained supermajority votes from the PMC

#### Responsibilities and Privileges

- Develop and approve technical design and decisions for TiKV projects
- Set the technical directions and priorities for SIG projects
- Participate in product releases and roadmap development of the project
- Continuously contribute to the project by mentoring Reviewers and Committers
- Ensure the overall quality of the TiDB project

## TiDB User Group

The TiDB User Groups (TUGs) are groups for facilitating communication and discovery of information related to topics that have long term relevance to large groups of TiDB users.