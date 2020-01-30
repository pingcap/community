# PingCAP Incubator Program

PingCAP Incubator Program is inspired by the CNCF incubating process. The
process is designed to ensure that new features and projects have correct
licensing, up-to-date boilerplate documents, a healthy community process, and
are developed using accepted PingCAP Community practices.

All programs should follow the incubating process to start a project. PingCAP
would offer resources when a project is confirmed.

Once going through the incubation process, they can either be merged to
tidb/tikv repo or being moved from [PingCAP Incubator](https://github.com/pingcap-incubator) to
[PingCAP](https://github.com/pingcap) or [TiKV](https://github.com/tikv)
organization.

Welcome to join [TiDB Community Slack Workspace](https://pingcap.com/tidbslack/)
and feel free to contact us in the **#incubator** channel if any question or suggestion.

## Content

<!-- vim-markdown-toc GFM -->

* [What you are going to incubate?](#what-you-are-going-to-incubate)
* [Features Incubation Process](#features-incubation-process)
    * [Apply for Incubation](#apply-for-incubation)
        * [Step 1: Write a proposal](#step-1-write-a-proposal)
        * [Step 2: Find a Mentor](#step-2-find-a-mentor)
        * [Step 3: Get approval from PMC (Project Management Committee)](#step-3-get-approval-from-pmc-project-management-committee)
        * [Step 4: Recruit team members](#step-4-recruit-team-members)
    * [Start Incubation](#start-incubation)
    * [Graduation](#graduation)
* [Projects Incubation Process](#projects-incubation-process)
    * [Apply for Incubation](#apply-for-incubation-1)
        * [Step 1: Write a proposal](#step-1-write-a-proposal-1)
        * [Step 2: Find a Mentor](#step-2-find-a-mentor-1)
        * [Step 3: Get approval from PMC (Project Management Committee)](#step-3-get-approval-from-pmc-project-management-committee-1)
        * [Step 4: Recruit team members](#step-4-recruit-team-members-1)
    * [Start Incubation](#start-incubation-1)
    * [Maturity Level Promotion](#maturity-level-promotion)
    * [Graduation](#graduation-1)
    * [Retirement](#retirement)
* [Benefits](#benefits)
* [Features and Projects](#features-and-projects)

<!-- vim-markdown-toc -->

## What you are going to incubate?

* If what you want to incubate is a feature that needs to be merged into an
  existing project on [PingCAP](https://github.com/pingcap) or [TiKV](https://github.com/tikv) organization,
  please follow [Features Incubation Process](#features-incubation-process)

* If what you want to incubate is a project intended to become a new project on
  [PingCAP](https://github.com/pingcap) or [TiKV](https://github.com/tikv)
  organization and designed to extend one or more
  [PingCAP](https://github.com/pingcap)/[TiKV](https://github.com/tikv)
  projects with functionality, please follow [Projects Incubation Process](#projects-incubation-process)

## Features Incubation Process

### Apply for Incubation

To create a new feature, follow these steps:

#### Step 1: Write a proposal

You can write a proposal via GitHub Issue (see [example](https://github.com/pingcap/community/issues/81))
and submit it to the [pingcap/community](https://github.com/pingcap/community/)
repository. Your proposal should include the following items:

* Problems to be solved
* Initial team members and the expected number of team members at least
* Estimated completion time. Generally, features are expected to complete within 3 months.
* Link to your Design Document.
  * Design Document of TiKV features should be proposed via an RFC (Request for Comment) to [tikv](https://github.com/tikv/tikv) repository (see [How to submit an RFC to TiKV](https://github.com/tikv/rfcs#how-to-submit-an-rfc))
  * Design Document of TiDB features should be proposed via a PR (Pull Request) to [tidb](https://github.com/pingcap/tidb) repository (see [TiDB Design Documents Proposal Process](https://github.com/pingcap/tidb/tree/master/docs/design#proprosal-process))
  * Design Document of other features should be proposed via a PR (Pull Request) to [community](https://github.com/pingcap/community) repository (see [PingCAP RFCs](../rfc/README.md))

#### Step 2: Find a Mentor

Once your proposal is submitted, you will get **1-2 Mentors** from the
community. Mentors will express their intentions to support the program by
replying to the proposal and help guide the team through the process. The
majority of the mentorship, review, and advice will come from the Mentor(s).

#### Step 3: Get approval from PMC (Project Management Committee)

Once a proposed feature receives 2 approvals from PMC(2 LGTM from the PMC
members on the Proposal Issue), it can enter the incubation procedure. The PMC
expresses their approvals by replying "LGTM" (look good to me) to the proposal.

#### Step 4: Recruit team members

The recruitment of team members is expected to be completed within **1 week**
after PMC's approval. If the recruitment of members is not completed within the
specified time, PMC will assist the team formation or delay the project
approval.

### Start Incubation

The incubation process will be traced via a working group (see [Woking Group
Governance](../working-groups/wg-governance.md). Once your proposal is
approved, The first order of business is to create a related working
group (see the [Create](../working-groups/wg-governance.md#create) section of
the Woking Group Governance.

Regular updates in the process are required as well. Features are expected to
submit an [intermi report](./intermi-report-template.md) to the mentor diretly.

### Graduation

Incubating features graduation process includes the following items:

1. Create a pull request for graduation
2. PMC members arrange a graduation presentation (if necessary)
3. PMC members express their agreement by replying "LGTM (look good to me)" to the pull request
4. The related working group disbands

## Projects Incubation Process

### Apply for Incubation

To create a new incubating project,  follow these steps:

#### Step 1: Write a proposal

You can write a proposal via GitHub Issue (see [example](https://github.com/pingcap/community/issues/81))
and submit it to [community](https://github.com/pingcap/community/) repository.
Your proposal should include the following items:

* Problems to be solved.
* Initial team members and the expected number of team members at least.
* Estimated completion time. Generally, Projects are expected to complete **within 12 months**.
* Link to your Design Document which should be proposed via a PR (Pull Request)
  to [pingcap/community](https://github.com/pingcap/community/) repository
  (see [Design Template](https://github.com/pingcap/tidb/blob/master/docs/design/TEMPLATE.md))
  preferred maturity level and evidence (see [Projects Approval Criteria](./projects-approval-criteria.md).

#### Step 2: Find a Mentor

Once your proposal is submitted, you will get at least 2 Mentors from the
community. Mentors will express their intentions to support the program by
replying to the proposal and help guide the team through the process. The
majority of the mentorship, review, and advice will come from the Mentor(s).

#### Step 3: Get approval from PMC (Project Management Committee)

[Projects approval criteria](./projects-approval-criteria.md) depends on the
preferred maturity level and evidence provided.

Once a proposed project receives 2 approvals from PMC(2 LGTM from the PMC
members on the Proposal Issue), it can enter the incubation procedure. The PMC
expresses their approvals by replying "LGTM" (look good to me) to the proposal.

#### Step 4: Recruit team members

The recruitment of team members is expected to be completed within **1 week**
after PMC's approval. If the recruitment of members is not completed within the
specified time, PMC will assist the team formation or delay the project
approval.

### Start Incubation

The incubation process will be traced via a working group (see [Woking Group
Governance](../working-groups/wg-governance.md). Once your proposal is
approved, The first order of business is to create a related working
group (see the [Create](../working-groups/wg-governance.md#create) section of
the Woking Group Governance).

Each approved project will get a new GitHub repo created in
[pingcap-incubator](https://github.com/pingcap-incubator) organization. Project
owners are expected to add the following files to the repo:

* `README.md` for the project
* `OWNERS.md` as defined in the accepted proposal
* `CONTRIBUTING.md` file based on PingCAP Community's [CONTRIBUTING.md](../CONTRIBUTING.md)
* `CODE_OF_CONDUCT.md` based on PingCAP Community's [CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md)
* `LICENSE` which must be Apache 2.0 for code projects and documentation repositories, without any custom content

To help you get started with these files, you can find the corresponding
templates at [PingCAP Template Project](https://github.com/pingcap-incubator/pingcap-template-project).

For each incubating project, a monthly report is required to send to the mentor
before the 10th of every month. And the monthly report should be an open file
on the internet. Google Doc is recommended.

### Maturity Level Promotion

When the majority of the project members determine they have met the criteria
to be promoted to a higher maturity stage, they should contact their Mentors to
discuss. If the Mentors agree that [the maturity criteria](./projects-approval-criteria.md)
have been met, the project organizer can create a pull request at their
quarterly meeting.

PMC will arrange a promotion presentation for the project. Maturity Level
Review follows [Projects Approval criteria](./projects-approval-criteria.md).

### Graduation

Projects follow the same graduation process as features, as described below:

1. Create a pull request for graduation
2. PMC members arrange a graduation presentation (if necessary)
3. PMC members express their agreement by replying “LGTM (look good to me)” to the pull request
4. The related working group disbands

Graduation criteria for projects: see [Projects Approval Criteria](./projects-approval-criteria.md)

### Retirement

An incubation project will be considered retired if it meets either of the
following situations:

* Fails to graduate within 12 months.
* Fails to make a release for 3 months.

A reminder email will be sent 3 weeks before retirement. A project can be
re-incubated after retirement but must go through the incubation process from
the beginning, the same as any new project. Retirement of the project indicates
the retirement of the members and mentors in the project.

## Benefits

PingCAP wants to build a healthy community ecosystem. All community programs
are welcomed to join the PingCAP Incubator Program. The incubator program will
get full support by PingCAP and the community.

- Rich resources support:
  - Great Mentors:
    - At least 2 mentors with the ability to provide technical and practical guide to the project
    - Mentors with high community roles (Developer community Committer or TiDB UserGroup Ambassador)
  - PingCAP
    - Official learning resources
    - Necessary tutoring lessons
    - Marketing campaign and promotion  for the project and

- Open Source experience:
  - First-hand practical experience
  - The participant fully as an organizer or community member
  - The project will be maintained continuously after it is finished

## Features and Projects

Check the proposal of ongoing [features](https://github.com/pingcap/community/labels/IncubatingProgram%2FFeature) here.

Check the proposal of ongoing [projects](https://github.com/pingcap/community/labels/IncubatingProgram%2FProject) here.

If you would like to join an existing incubator program, please find the
corresponding slack channel and working group in the [active working
groups](../working-groups/README.md).
