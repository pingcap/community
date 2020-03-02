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
        * [Privileges and responsibilities](#responsibilities-and-privileges)
    * [Committer](#committer)
        * [How to become a Committer](#how-to-become-a-committer)
        * [Privileges and responsibilities](#responsibilities-and-privileges-1)
    * [Maintainer](#maintainer)
        * [How to become a Maintainer](#how-to-become-a-maintainer)
        * [Privileges and responsibilities](#responsibilities-and-privileges-2)
* [TiDB User Group](#tidb-user-group)
* [Organizer Committee](#organizer-committee)

<!-- vim-markdown-toc -->

## PMC

PMC (Project Management Committee) functions as the core management team that oversees the TiDB community. See [Governance](../GOVERNANCE.md) for more details about PMC and [PMC List](./pmc-list.md) for a list of incumbent PMC members.

## TiDB Developer Group

As the cornerstone of community development, the TiDB Developer Group consists of these roles: Maintainer, Committer, Reviewer, Active Contributor, and Contributor. Each role takes corresponding responsibilities in the community. Collectively they play an important role in the robust development of TiDB.

### Contributor

Anyone who has one PR merged for any project in the [PingCAP Organization](https://github.com/pingcap) is a Contributor. New Contributors should be welcomed to the community by existing members, helped with PR workflow, and directed to relevant documentation and communication channels. A contributor becomes a member of the SIG of the contribution automatically.

#### How to become a Contributor

- merged at least 1 PR for any project in the [PingCAP Organization](https://github.com/pingcap)

You are also encouraged to participate in the projects in the following ways:

- Actively answer technical questions asked by community users in GitHub issues.
- Help test the projects
- Help review the pull requests (PRs) submitted by others
- Help improve technical documents
- Submit valuable issues
- Report or fix known and unknown bugs
- Write articles about source code analysis and usage cases for a project.

#### Contributor List

See [TiDB Contributors](./contributor-list.md)

### Active Contributor

Active Contributors are continuously active contributors in the community. They can have issues and PRs assigned to them, participate in SIGs through GitHub teams, and pre-submit tests are automatically run for their PRs. See `member-list.md` under the specific SIG for a list of Active Contributors.

#### How to become an Active Contributor

- Contributed 8 PRs and above to a specific SIG within one year
- Sponsored by two incumbent Reviewers in a SIG

#### Privileges and responsibilities

- Get the profile listed on the membership page of the corresponding SIG

### Reviewer

Reviewers are responsible for reviewing the code submitted by the community to ensure the quality and correctness; generated out of Active Contributors in a specific SIG.

Reviewer status is scoped to the part of the codebase under the SIG.
See `member-list.md` under the specific SIG for a list of Reviewers of the SIG.

#### How to become a Reviewer

- Familiar with the codebase
- Demonstrated a recognized level of community engagement in the SIG development, via contributions that have met one or more of the minimal criteria as defined below：
  - Merged 20 PRs or more (may vary among SIGs)
  - Fixed 1 or more issues of Medium difficulty
- Sponsored by at 2 Committers of the SIG

#### Privileges and responsibilities

- Ensure the correctness of the code submitted to the SIG
- Respond promptly to PRs
- Participate in SIG meetings regularly
- Approve code reviews with LGTM (Looks Good To Me)
- Get the profile listed on the membership page of the corresponding SIG

### Committer

Committers come from Reviewers, and are recognized by Maintainers and SIG Tech Leads for their outstanding contributions to the specific SIG.

Committer is scoped to the specific SIG where the promotion applies. See `member-list.md` under the specific SIG for a list of Committers of the SIG.

#### How to become a Committer

A Committer must have accomplished one or more of the following items:

- Demonstrated a good sense of responsibility in PR reviews within the SIG. The review contributions must meet the amount or the difficulty criteria as defined in the charter of the specific SIG.
- Demonstrated deep understanding of the TiDB components specific to the SIG by contributing significantly as:
    - Finished 2 or more tasks of Medium difficulty
    - Fixed 1 or more tasks of Hard difficulty
- Nominated by the Tech Leads of the SIG and gained supermajority (2/3) votes from Maintainers

#### Privileges and responsibilities

- Control overall code quality of projects under the SIG
- Guide Contributors and Reviewers to contribute to the SIG continuously
- Participate in Committer meetings regularly and have knowledge priority regarding project development
- Participate in design discussions
- Get the profile listed on the membership page of the corresponding SIG

### Maintainer

Maintainers are the planners and designers of the TiDB project, with the authority to merge branches into the master. Maintainers come from Committers. They must demonstrate both good judgment and responsibility towards the sustained development and overall health of the TiDB project. See [TiDB Maintainers](./maintainer-list.md) for a list of TiDB Maintainers.

#### How to become a Maintainer

- Demonstrated a deep and comprehensive understanding of TiDB's technical goals and directions
- Must be Committer for at least 2 SIGs
- Actively involved in organizing technical seminars and proposing or reviewing major technical designs
- Can handle complex problems in the code implementation process
- Nominated by and obtained supermajority votes from the PMC

#### Privileges and responsibilities

- Develop and approve technical design and decisions for TIDB projects
- Set the technical directions and priorities for SIG projects
- Participate in product releases and roadmap development of the project
- Continuously contribute to the project by mentoring Reviewers and Committers
- Ensure the overall quality of the TiDB project

## TiDB User Group

The TiDB User Group (TUG) is an independent user community initiated by TiDB users. Users in the TUG community can learn cutting-edge technical knowledge, publish technical insights, get to know friends in the circle, and build TiDB projects together.

### Leader

The Leader of the  TiDB User Group (TUG) who makes overall plans, tracks progress to strengthen the joint force and impact of the TUG.

### Co-Leader

Co-Leaders share TUG responsibilities such as development planning, event operation, content creation, and community Q&A.

### Ambassador

Community activists who recognize TiDB and are passionate about sharing and promoting TiDB and TUG on bloggers, community websites, and meetups.

## Organization Committee

The  Organization Committee consists of organizers in charge of event or activity operations; They are the executors of PMC’s strategies and decisions. Specifically, the members are the leaders of user groups or community event organizers across regions.
