# PingCAP Incubator V1.0

PingCAP Incubator is where all new features and projects associated with TiDB Ecosystem can get started. Once going through the incubation process, they can either be merged to tidb/tikv repo or become full PingCAP Community Projects. 

The process is designed to ensure that new features and projects have correct licensing, up-to-date boilerplate documents, a healthy community process, and are developed using accepted PingCAP Community practices. 

Welcome to join [TiDB Community Slack Workspace](https://join.slack.com/t/tidbcommunity/shared_invite/enQtNzc0MzI4ODExMDc4LWYwYmIzMjZkYzJiNDUxMmZlN2FiMGJkZjAyMzQ5NGU0NGY0NzI3NTYwMjAyNGQ1N2I2ZjAxNzc1OGUwYWM0NzE) and feel free to contact us in the #incubator channel if any questions and suggestions arised.

# Incubation Process

## What you are going to incubate?

- If what you want to incubate is a feature that needs to be merged into an existing project, please follow [Features Incubation Process](#Features-Incubation-Process)
- If what you want to incubate is a project intended to become a sub-project of PingCAP Community and designed to extend one or more PingCAP projects with functionality, please follow [Projects Incubation Process](#Projects-Incubation-Process)

## Features Incubation Process

### Apply for Incubation

To create a new feature you must follow these steps:

#### Write a proposal

You can write a proposal via GitHub Issue (see [example](https://github.com/pingcap/community/issues/81)) and submit it to [pingcap/community](https://github.com/pingcap/community/) repository. Your proposal should include the following items:

- Problems to be solved
- Initial team members and the expected number of team members at least
- Estimated completion time. Generally, features are expected to complete within 3 months.
- Link to your Design Document. 
  - Design Document of TiKV features should be proposed via an RFC (Request for Comment) to tikv repository (see [How to submit an RFC to TiKV](https://github.com/tikv/rfcs#how-to-submit-an-rfc))
  - Design Document of TiDB features should be proposed via a PR (Pull Request) to tidb repository (see [TiDB Design Documents Proposal Process](https://github.com/pingcap/tidb/tree/master/docs/design#proprosal-process))

#### Find a Mentor

Once your proposal is submitted, you will get at least 2 Mentors from the community. Mentors will express their intention to support the program by replying to the proposal issue and help guide the team through the process. The majority of the mentorship, review, and advice will come from the Mentor(s). Being a Mentor is a significant amount of work and active participation in the sponsored project is encouraged.

#### Get approval of PMC (Project Management Committee)

Once 2 PMC Members approve, features will enter incubation. PMC will express their approval by replying “LGTM (look good to me)” to the proposal issue.

#### Complete team member recruitment

The recruitment of team members is expected to be completed within 1 week after the approval of PMC.

If the recruitment of members is not completed within the specified time, PMC will assist the team formation or delay the project approval.

### Start Incubation

The incubation process will be traced in a working group (see [Woking Group Governance](https://github.com/tikv/community/blob/master/committee/wg-governance/wg-governance-zh_CN.md)). Once your proposal is approved, The first order of business is to create a related working group (see [How to create a working group](https://github.com/tikv/community/blob/master/committee/wg-governance/wg-governance-zh_CN.md#创建)).

Regular updates in process are required as well. Features are expected to submit an interim report to [pmc@pingcap.com](mailto:pmc@pingcap.com).

### Graduation

Incubating features graduation process includes the following items:

1. Create a pull request for graduation
2. PMC members arrange a graduation presentation
3. PMC members express their agreement by replying “LGTM (look good to me)” to the pull request
4. Related working group disbands

## Projects Incubation Process

### Apply for Incubation

To create a new project you must follow these steps:

#### Write a proposal

You can write a proposal via GitHub Issue (see [example](https://github.com/pingcap/community/issues/81)) and submit it to [pingcap/community](https://github.com/pingcap/community/) repository. Your proposal should include the following items:

- Problems to be solved
- Initial team members and the expected number of team members at least
- Estimated completion time. Generally, Projects are expected to complete within 12 months.
- Link to your Design Document which should be proposed via a PR (Pull Request) to [pingcap/community](https://github.com/pingcap/community/) repository (see [Design Template](https://github.com/pingcap/tidb/blob/master/docs/design/TEMPLATE.md))preferred maturity level and evidence (see [Projects Approval Criteria](https://docs.google.com/document/d/1spt-2xk0uyCvD-HLCX5eHbIxEGOhal1oCMsJlDkNjC4/edit#heading=h.6lk8cv6sk4t8))

#### Find a Mentor

Once your proposal is submitted, you will get at least 2 Mentors from the community. Mentors will express their intention to support the program by replying to the proposal issue and help guide the team through the process. The majority of the mentorship, review, and advice will come from the Mentor(s). Being a Mentor is a significant amount of work and active participation in the sponsored project is encouraged.

#### Get approval of PMC (Project Management Committee)

[Projects approval criteria](https://docs.google.com/document/d/1spt-2xk0uyCvD-HLCX5eHbIxEGOhal1oCMsJlDkNjC4/edit#heading=h.6lk8cv6sk4t8) depends on the preferred maturity level and evidence provided. PMC will express their approval by replying “LGTM (look good to me)” to the proposal issue

#### Complete team member recruitment

The recruitment of team members is expected to be completed within 1 week after the approval of PMC.

If the recruitment of members is not completed within the specified time, PMC will assist the team formation or delay the project approval.

### Start Incubation

For both features and projects, the incubation process will be traced in a working group (see [Woking Group Governance](https://github.com/tikv/community/blob/master/committee/wg-governance/wg-governance-zh_CN.md)). Once your proposal is approved, The first order of business is to create a related working group (see [How to create a working group](https://github.com/tikv/community/blob/master/committee/wg-governance/wg-governance-zh_CN.md#创建)).

In addition, each approved project will get a new GitHub repo created in [pingcap-incubator](https://github.com/pingcap-incubator) organization. Project owners are expected to add the following files to the repo:

- A README from the accepted proposal
- An OWNERS from the accepted proposal
- A CONTRIBUTING file based on[ pingcap/community](https://github.com/pingcap/community/blob/master/CONTRIBUTING.md)
- A code-of-conduct.md based on [pingcap/community/code-of-conduct.md](https://github.com/pingcap/community/blob/master/CODE_OF_CONDUCT.md)
- A LICENSE file with the Apache 2.0 licensea RELEASE.md file that talks about the process for releases

To start your project with these files can be found here at [template project](https://github.com/pingcap-incubator/pingcap-template-project).

Incubating projects are required to send the monthly report to [pmc@pingcap.com](mailto:pmc@pingcap.com) before 10th of every month and cc the Mentor.

### Maturity Level Promotion

When the majority of the project members determine they have met the criteria to be promoted to a higher maturity stage, they should contact their Mentors to discuss. If the Mentors agree that [the maturity criteria](https://docs.google.com/document/d/1spt-2xk0uyCvD-HLCX5eHbIxEGOhal1oCMsJlDkNjC4/edit#heading=h.6lk8cv6sk4t8) have been met, the project organizer can create a pull request at their quarterly meeting. 

PMC will arrange a promotion presentation for the project. Maturity Level Review follows [Projects Approval criteria](https://docs.google.com/document/d/1spt-2xk0uyCvD-HLCX5eHbIxEGOhal1oCMsJlDkNjC4/edit#heading=h.6lk8cv6sk4t8).

### Graduation

Projects follow the same graduation process as features, which is:

1. Create a pull request for graduation
2. PMC members arrange a graduation presentation
3. PMC members express their agreement by replying “LGTM (look good to me)” to the pull request
4. Related working group disbands

Graduation criteria for projects:see [Projects Approval Criteria](https://docs.google.com/document/d/1spt-2xk0uyCvD-HLCX5eHbIxEGOhal1oCMsJlDkNjC4/edit#heading=h.6lk8cv6sk4t8)

### Retirement

A project will be retired if it meets either of the situations:

- Fails to graduate within 12 months. 
- Fails to make a release for 3 months.

A warning email will be sent 3 weeks before the retirement to the Project Members and the Mentor(s). A project can be re-incubated after retirement but must go through the Incubation Process from the beginning, the same as any new project.

# Benefits (WIP)

# Features and Projects (WIP)





