# PingCAP Incubator V1.0

PingCAP Incubator is where all new features and projects associated with TiDB
Ecosystem can get started. Once going through the incubation process, they can
either be merged to tidb/tikv repo or become full PingCAP Community Projects.

The process is designed to ensure that new features and projects have correct
licensing, up-to-date boilerplate documents, a healthy community process, and
are developed using accepted PingCAP Community practices.

Welcome to join [TiDB Community Slack
Workspace](https://pingcap.com/tidbslack/) and feel free to contact us in the
**#incubator** channel if any question or suggestion arised.

## Content

* [What you are going to incubate?](#what-you-are-going-to-incubate)
* [Features Incubation Process](#features-incubation-process)
    * [Apply for Incubation](#apply-for-incubation)
        * [Write a proposal](#write-a-proposal)
        * [Find a Mentor](#find-a-mentor)
        * [Get approval from PMC (Project Management Committee)](#get-approval-from-pmc-project-management-committee)
        * [Complete team member recruitment](#complete-team-member-recruitment)
    * [Start Incubation](#start-incubation)
    * [Graduation](#graduation)
* [Projects Incubation Process](#projects-incubation-process)
    * [Apply for Incubation](#apply-for-incubation-1)
        * [Write a proposal](#write-a-proposal-1)
        * [Find a Mentor](#find-a-mentor-1)
        * [Get approval of PMC (Project Management Committee)](#get-approval-of-pmc-project-management-committee-1)
        * [Recruit team members](#Recruit-team-members)
    * [Start Incubation](#start-incubation-1)
    * [Maturity Level Promotion](#maturity-level-promotion)
    * [Graduation](#graduation-1)
    * [Retirement](#retirement)
* [Benefits (WIP)](#benefits-wip)
* [Features and Projects (WIP)](#features-and-projects-wip)

<!-- vim-markdown-toc -->

## What you are going to incubate?

- If what you want to incubate is a feature that needs to be merged into an
  existing project, please follow [Features Incubation Process](#features-incubation-process)
- If what you want to incubate is a project intended to become a sub-project of
  PingCAP Community and designed to extend one or more PingCAP projects with
  functionality, please follow [Projects Incubation Process](#projects-incubation-process)

## Features Incubation Process

### Apply for Incubation

To create a new feature you must follow these steps:

#### Write a proposal

You can write a proposal via GitHub Issue (see [example](https://github.com/pingcap/community/issues/81)) and submit
it to [pingcap/community](https://github.com/pingcap/community/) repository.
Your proposal should include the following items:

- Problems to be solved
- Initial team members and the expected number of team members at least
- Estimated completion time. Generally, features are expected to complete within 3 months.
- Link to your Design Document.
  - Design Document of TiKV features should be proposed via an RFC (Request for Comment) to tikv repository (see [How to submit an RFC to TiKV](https://github.com/tikv/rfcs#how-to-submit-an-rfc))
  - Design Document of TiDB features should be proposed via a PR (Pull Request) to tidb repository (see [TiDB Design Documents Proposal Process](https://github.com/pingcap/tidb/tree/master/docs/design#proprosal-process))

#### Find a Mentor

Once your proposal is submitted, you will get at 1-2 Mentors from the
community. Mentors will express their intention to support the program by
replying to the proposal issue and help guide the team through the process. The
majority of the mentorship, review, and advice will come from the Mentor(s).

#### Get approval from PMC (Project Management Committee)

Once 2 PMC Members approve, features will enter incubation. PMC will express their approval by replying "LGTM (look good to me)" to the proposal issue.

#### Recruit team members

The recruitment of team members is expected to be completed within 1 week after PMC's approval

If the recruitment of members is not completed within the specified time, PMC will assist the team formation or delay the project approval.

### Start Incubation

The incubation process will be traced in a working group (see [Woking Group Governance](/working-groups/wg-governance.md). Once your proposal is approved, The first order of business is to create a related working group (see [How to create a working group](/working-groups/wg-template.md).

Regular updates in process are required as well. Features are expected to submit an interim report to [pmc@pingcap.com](mailto:pmc@pingcap.com).

### Graduation

Incubating features graduation process includes the following items:

1. Create a pull request for graduation
2. PMC members arrange a graduation presentation (if necessary)
3. PMC members express their agreement by replying "LGTM (look good to me)" to the pull request
4. Related working group disbands

## Projects Incubation Process

### Apply for Incubation

To create a new project you must follow these steps:

#### Write a proposal

You can write a proposal via GitHub Issue (see [example](https://github.com/pingcap/community/issues/81)) and submit it to [pingcap/community](https://github.com/pingcap/community/) repository. Your proposal should include the following items:

- Problems to be solved
- Initial team members and the expected number of team members at least
- Estimated completion time. Generally, Projects are expected to complete within 12 months.
- Link to your Design Document which should be proposed via a PR (Pull Request) to [pingcap/community](https://github.com/pingcap/community/) repository (see [Design Template](https://github.com/pingcap/tidb/blob/master/docs/design/TEMPLATE.md))preferred maturity level and evidence (see [Projects Approval Criteria](./projects-approval-criteria)

#### Find a Mentor

Once your proposal is submitted, you will get at least 2 Mentors from the community. Mentors will express their intention to support the program by replying to the proposal issue and help guide the team through the process. The majority of the mentorship, review, and advice will come from the Mentor(s).

#### Get approval from PMC (Project Management Committee)

[Projects approval criteria](./projects-approval-criteria) depends on the preferred maturity level and evidence provided. PMC (Project Management Committee) will express their approval by replying “LGTM (look good to me)” to the proposal issue. 

#### Recruit team members

The recruitment of team members is expected to be completed within 1 week after PMC's approval

If the recruitment of members is not completed within the specified time, PMC will assist the team formation or delay the project approval.

### Start Incubation

For both features and projects, the incubation process will be traced in a working group (see [Woking Group Governance](https://github.com/tikv/community/blob/master/committee/wg-governance/wg-governance.md)). Once your proposal is approved, The first order of business is to create a related working group (see [How to create a working group](https://github.com/tikv/community/blob/master/committee/wg-governance/wg-governance-zh_CN.md#创建)).

In addition, each approved project will get a new GitHub repo created in [pingcap-incubator](https://github.com/pingcap-incubator) organization. Project owners are expected to add the following files to the repo:

- A README.md for the project
- An OWNERS.md as defined in the accepted proposal
- A CONTRIBUTING.md file based on[ pingcap/community](https://github.com/pingcap/community/blob/master/CONTRIBUTING.md)
- A code-of-conduct.md based on [pingcap/community/code-of-conduct.md](https://github.com/pingcap/community/blob/master/CODE_OF_CONDUCT.md)
- A LICENSE which must be Apache 2.0 for code projects and documentation repositories, without any custom content

To help you get started with these files, you can find the corresponding templates at [template project](https://github.com/pingcap-incubator/pingcap-template-project).

For each incubating project, a monthly report is required to send to [pmc@pingcap.com](mailto:pmc@pingcap.com) before 10th of every month with the mentor copied.

### Maturity Level Promotion

When the majority of the project members determine they have met the criteria to be promoted to a higher maturity stage, they should contact their Mentors to discuss. If the Mentors agree that [the maturity criteria](./projects-approval-criteria) have been met, the project organizer can create a pull request at their quarterly meeting.

PMC will arrange a promotion presentation for the project. Maturity Level Review follows [Projects Approval criteria](./projects-approval-criteria).

### Graduation

Projects follow the same graduation process as features, as described below:

1. Create a pull request for graduation
2. PMC members arrange a graduation presentation (if necessary)
3. PMC members express their agreement by replying “LGTM (look good to me)” to the pull request
4. Related working group disbands

Graduation criteria for projects: see [Projects Approval Criteria](./projects-approval-criteria)

### Retirement

An incubation project will be considered retired if it meets either of the following situations:

- Fails to graduate within 12 months.
- Fails to make a release for 3 months.

A warning email will be sent 3 weeks before the retirement to the Project Members and the Mentor(s). A project can be re-incubated after retirement but must go through the Incubation Process from the beginning, the same as any new project.

## Benefits

PingCAP want to build a healthy commmunity ecosystem. All community programs are welcomed to join the PingCAP incubator program. The incubator program will get fully support by PingCAP and community. 

- Rich resources support:
  - Great Mentors:
    - At least 2 mentors with the ability to provide technical and practical guidance to the project
    - Mentors with high community roles (Developer community Committer or TiDB UserGroup Ambassodor) 
  - PingCAP
    - Official learning resources
    - Necessary tutoring lessons
    - Marketing campaign and promotion  for the project and

- Open Source experience:
  - First-hand practical experience
  - Participant fully as an organizer or community member
  - Project will be maintained contiuously after it is finished

## Features and Projects

Check the proposal of ongoing [features](https://github.com/pingcap/community/labels/IncubatingProgram%2FFeature) here.

Check the proposal of ongoing [projects](https://github.com/pingcap/community/labels/IncubatingProgram%2FProject) here.

If you would like to join the incubator program, please find the corresponding slack channel in [working groups](https://github.com/pingcap/community/tree/master/working-groups).
