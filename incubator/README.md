# TiDB Incubator Program

TiDB Incubator Program is inspired by the CNCF incubating process. The process is designed to ensure that new projects have correct licensing, up-to-date boilerplate documents, a healthy community process.

All programs should follow the incubating process to start a project. Once going through the incubation process, they can be moved from [TiDB Incubator](https://github.com/tidb-incubator) to
* [TiDB Incubator Graduated](https://github.com/tidb-incubator-graduated) organization.
* their own organization.
* PingCAP organization. But this need to be approved by the ToC.

## Content

<!-- vim-markdown-toc GFM -->

* [Scope](#scope)
* [Projects Incubation Process](#projects-incubation-process)
    * [Apply for Incubation](#apply-for-incubation)
        * [Step 1: Write a proposal](#step-1-write-a-proposal)
        * [Step 2: Get approval from TOC (Technology Oversight Committee)](#step-2-get-approval-from-toc-technology-oversight-committee)
    * [Start Incubation](#start-incubation)
    * [Graduation](#graduation)
* [Benefits](#benefits)
* [Projects](#projects)
* [Projects Approval Criteria](#projects-approval-criteria)

<!-- vim-markdown-toc -->

## Scope

TiDB Incubator Program welcomes all projects fit into TiDB ecosystem(including TiDB, TiKV, ChaosMesh) and give a general solution to users. Projects not related to TiDB or only focus on limited target user groups are not going to be accepted.

## Projects Incubation Process

### Apply for Incubation

#### Step 1: Write a proposal

You can write a proposal via GitHub Issue(see [example](https://github.com/pingcap/community/issues/81)) and submit it to [community](https://github.com/pingcap/community/) repository. Your proposal should include the following items:

* Problems to be solved.
* Project goal and roadmap.
* Usage samples and architecture design.
* Initial team maintainers and their contact details.
* Estimated graduation time. Generally, Projects are expected to graduate **within 12 months**.

If you have more information to present, welcome to include them.

#### Step 2: Get approval from [TOC (Technology Oversight Committee)](https://github.com/pingcap/community/tree/master/toc)

TOC members will vote on whether to accept the proposal. Some projects might need to give a presentation on a ToC meeting if needed. If the vote reaches a [lazy consensus](https://github.com/pingcap/community/tree/master/toc#approvals), the proposal can enter the incubation procedure.

### Start Incubation

Each approved project will get a new GitHub repo created in [tidb-incubator](https://github.com/tidb-incubator) organization. Project owners are expected to add the following files to the repo:

* `README.md` for the project.
* `LICENSE` which must be Apache 2.0 for code projects and documentation repositories, without any custom content.
* `code-of-conduct.md` describes CoC of the community.

To help you get started with these files, you can find the corresponding templates at [TiDB Template Project](https://github.com/tidb-incubator/tidb-template-project).

For every incubating project, it's required their maintainers being responsive for project status update. Incubator staffs will regularly contact them to get the latest information of the project. The information include but not limited to:
* Project progress: features implemented and issues resolved, roadmap accomplished.
* Community progress: new contributors or contributions from community members.
* Release progress: any released releases or planned releases.

### Graduation

Incubating projects graduation process includes the following steps:

1. Create an issue for graduation in [community](https://github.com/pingcap/community/) repository. The issue should clearly describe the project status of [Projects Approval criteria](#projects-approval-criteria.md).
2. TOC members arrange a graduation presentation (if necessary)
3. TOC members express their agreement by replying “LGTM (look good to me)” to the pull request
4. Migrate your repository.

## Benefits

Projects attend TiDB incubator will totally operate as an open source project. So the maintainers benefit from:
* First-hand practical experience
* The participant fully as an organizer or community member
* The project will be maintained continuously after it is finished

The TiDB community will provide marketing supports for successfully incubating and graduated projects to help them quickly gain the attention of the community and the public. Marketing supports mainly include but not limited to: emails, blogs, online media, online and offline events:
* Announce the incubating and graduation of the project through the TiDB Community's self-publishing channels.
* Provide a presentation opportunity for the incubating or graduated project at the next TiDB Developer Conference after graduation.
* Provide community and media exposure for subsequent major releases of the project.

## Projects Approval Criteria

To graduate from incubating status, a project must meet two main criteria:

* Accomplished all the design goal and roadmap for the project.
* Build an open source community around the project.
  * Has detailed user documentation and basic reference manuals.
  * Has an automated continuous integration test infrastructure (CI).
  * Has a clear open source contribution workflow(can follow the workflow of TiDB).
  * Has a clear member promotion path, with basic community governance documentation(can follow the governance of TiDB Community).
  * Has a clear release method and release cycle, with release notes provided for every release.
  * Has at least two more contributors besides the initial maintainers. Contributions include but not limited to code, documentation, review.

The ToC will decide based on the criteria whether the project has met graduation maturity level.

Projects can remain in an incubating state indefinitely, but they are normally expected to graduate within 12 months. If the project fails to graduate within 12 months, TOC has the right to decide whether to stop incubating the project.
