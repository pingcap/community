# TiDB Incubator Program

TiDB Incubator Program is inspired by the CNCF incubating process. The
process is designed to ensure that new projects have correct
licensing, up-to-date boilerplate documents, a healthy community process, and
are developed using accepted TiDB Community practices.

All programs should follow the incubating process to start a project. TiDB
would offer resources when a project is confirmed.

Once going through the incubation process, they can either be merged to
tidb/tikv repo or being moved from [TiDB Incubator](https://github.com/tidb-incubator) to
[TiDB Incubator Graduated](https://github.com/tidb-incubator-graduated) or [TiKV](https://github.com/tikv)
organization.

Welcome to join [TiDB Community Slack Workspace](https://slack.tidb.io)
and feel free to contact us in the **#incubator** channel if any question or suggestion.

## Content

<!-- vim-markdown-toc GFM -->

* [Projects Incubation Process](#projects-incubation-process)
    * [Apply for Incubation](#apply-for-incubation)
        * [Step 1: Write a proposal](#step-1-write-a-proposal)
        * [Step 2: Find a Mentor](#step-2-find-a-mentor)
        * [Step 3: Get approval from TOC (Technology Oversight Committee)](#step-3-get-approval-from-toc-technology-oversight-committee)
        * [Step 4: Recruit team members](#step-4-recruit-team-members)
    * [Start Incubation](#start-incubation)
    * [Maturity Level Promotion](#maturity-level-promotion)
    * [Graduation](#graduation)
    * [Retirement](#retirement)
* [Benefits](#benefits)
* [Projects](#projects)

<!-- vim-markdown-toc -->

If you want to incubate a new project on
[TiDB Incubator Graduated](https://github.com/tidb-incubator-graduated) or [TiKV](https://github.com/tikv)
organization and designed to extend one or more
[TiDB Incubator Graduated](https://github.com/tidb-incubator-graduated)/[TiKV](https://github.com/tikv)
projects with functionality, please follow [Projects Incubation Process](#projects-incubation-process)

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

#### Step 2: Find a Mentor (Optional)

Once your proposal is submitted, you can find 1-2 [Mentors](./mentor-charter.md) from the community.
Mentors will express their intentions to support the program by replying to 
the proposal and help guide the team through the process. The majority of 
the mentorship, review, and advice will come from the Mentor(s).

#### Step 3: Get approval from TOC (Technology Oversight Committee)

[Projects approval criteria](./projects-approval-criteria.md) depends on the
preferred maturity level and evidence provided.

TOC members will arrange an approval presentation. Based on the presentation, 
TOC will vote on whether to accept the proposal. If the vote reaches a simple 
majority, the proposal can enter the incubation procedure.

#### Step 4: Recruit team members

The recruitment of team members is expected to be completed within **1 week** 
after TOC's approval. If the recruitment of members is not completed within 
the specified time, TOC will assist the team formation or delay the project 
approval.

### Start Incubation

The incubation process will be traced via a working group (see [Woking Group
Governance](../governance/wg-governance.md). Once your proposal is
approved, The first order of business is to create a related working
group (see the [Creation](../governance/wg-governance.md#creation) section of
the Woking Group Governance).

Each approved project will get a new GitHub repo created in
[tidb-incubator](https://github.com/tidb-incubator) organization. Project
owners are expected to add the following files to the repo:

* `README.md` for the project
* `OWNERS.md` as defined in the accepted proposal
* `CONTRIBUTING.md` file based on TiDB Community's [Contribution Guide](../contributors)
* `CODE_OF_CONDUCT.md` based on TiDB Community's [CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md)
* `LICENSE` which must be Apache 2.0 for code projects and documentation repositories, without any custom content

To help you get started with these files, you can find the corresponding
templates at [TiDB Template Project](https://github.com/tidb-incubator/tidb-template-project).

For each incubating project, a monthly report is required before the 10th of every month. And the monthly report should be an open file on the internet. Google Docs is recommended. If the project has a mentor, the monthly report is reported to the mentor. If not, the progress of the project will be one of the topics of the monthly TOC meeting.

### Maturity Level Promotion

When the majority of the project members determine they have met the criteria
to be promoted to a higher maturity stage, they should contact their Mentors to
discuss. If the Mentors agree that [the maturity criteria](./projects-approval-criteria.md)
have been met, the project organizer can create a pull request at their
quarterly meeting.

TOC will arrange a promotion presentation for the project. Maturity Level
Review follows [Projects Approval criteria](./projects-approval-criteria.md).

### Graduation

Incubating projects graduation process includes the following items:

1. Create a pull request for graduation
2. TOC members arrange a graduation presentation (if necessary)
3. TOC members express their agreement by replying “LGTM (look good to me)” to the pull request
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

TiDB wants to build a healthy community ecosystem. All community programs
are welcomed to join the TiDB Incubator Program. The incubator program will
get full support by PingCAP and the community.

- Rich resources support:
  - Great Mentors:
    - At least 2 mentors with the ability to provide technical and practical guide to the project
    - Mentors with high community roles (Developer community Committer or TiDB UserGroup Ambassador)
  - PingCAP
    - Official learning resources
    - Necessary tutoring lessons
    - Marketing campaign and promotion for the project

- Open Source experience:
  - First-hand practical experience
  - The participant fully as an organizer or community member
  - The project will be maintained continuously after it is finished

The TiDB community will provide marketing supports for successfully incubated projects to help them quickly gain the attention of the community and the public. Marketing supports mainly include but not limited to: emails, blogs, online media, online and offline events.

- Marketing supports for graduated projects
  - Announce the graduation of a project to the community through newsletters, Slack, mailing lists, WeChat groups, etc.
  - Announce the graduation of the project through PingCAP's official WeChat account, blog, Weibo, Zhihu, Twitter, and other self-publishing channels.
  - Get exposure for the graduated project in CSDN, OSChina, SegmentFault, Developer Headlines, Go Community, and other technical media and communities.
  - Provide a presentation opportunity for the graduated project at the next TiDB Developer Conference after graduation.
  - Provide more than 3 TiDB TechDay presentations for the graduating project within one year after graduation.
  - Display the core developers and Maintainer information of the graduated project on the community developer page.
  - Provide community and media exposure for subsequent major releases of the project.

## Projects

Check the proposal of ongoing [projects](https://github.com/pingcap/community/labels/IncubatingProgram%2FProject) here.

If you would like to join an existing incubator program, please find the
corresponding slack channel and working group in the [active working
groups](../working-groups/README.md).
