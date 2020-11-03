# SIG Governance

The TiDB project is organized primarily into Special Interest Groups, or SIGs. Each SIG is comprised of members from multiple companies and organizations, with **a common purpose of advancing the project with respect to a specific topic, such as Networking or Documentation**. Our goal is to enable a distributed decision structure and code ownership, as well as providing focused instructions for getting work done, making decisions, and onboarding new contributors. Every identifiable subpart of the project (e.g., github org, repository, subdirectory, API, test, issue, PR) is intended to be owned by some SIG.

Areas covered by SIGs may be vertically focused on particular components or functions, cross-cutting/horizontal, spanning many/all functional areas of the project, or in support of the project itself.

This document details on the governance guidelines of TiDB SIGs. It will be updated as needed to meet the current needs of the TiDB Community.

## Organizational Governance

In order to standardize Special Interest Group efforts, create maximum transparency, and route contributors to the appropriate SIG, SIGs should follow these guidelines:

- Create a `sig-${name}` folder in [special interest group directory](../special-interest-groups) and have it approved according to the SIG charter process. Please refer to [Creation](#Creation) for more details.
- Meet regularly, at least for 30 minutes every 2 weeks, except for long holidays or occasions where all Tech Leads decide that there is nothing to discuss.
- Keep up-to-date meeting notes, linked from the SIG's page in the community repo
- Report activity in the weekly community meeting at least once every quarter
- Participate in release planning meetings and retrospectives, and burndown meetings, as needed
- Ensure related work happens in a project-owned GitHub organization and repository, with code and tests explicitly owned and supported by the SIG, including issue triage, PR reviews, test-failure response, bug fixes, etc.
- The assignable tasks will be graded by difficulty levels and claimed by SIG members.

## SIG Roles

The SIG follows the role definitions in the [TiDB Developer Group](/architecture/README.md#tidb-developer-group) and [GOVERNANCE](/GOVERNANCE.md).

### SIG Members

- Include all Contributors, Active Contributors, Reviewers, and Committers under the SIG
- SHOULD maintain health of the SIG
- SHOULD show sustained contributions to the SIG
- SHOULD hold corresponding responsibilities in the SIG as documented in [TiDB Developer Group](/architecture/README.md#tidb-developer-group)
- MAY participate in decision making of the SIG
- Members are tracked in `membership.md` in the specific SIG (Contributors are listed in the aggregated contributor list for maintainence convenience)

### Tech Lead

  - **Number**: 2-3. Initially assigned by Maintainers
  - **Requirement**:
    - MUST be a committer from the specific SIG
    - MUST have demonstrated deep understanding of the SIG
  - **Term**: 1 year
  - **Election:**
      - Nominated by the Tech Leads or self-nominate
      - Gained supermajority votes of Maintainers
      - Done through PR to update the `membership.md` file in the SIG
- **Responsibilities**
    - Creating new projects under the SIG
    - Triaging issues/tasks in the SIG
    - Mentoring members of the SIG
    - Organizing discussions and drawing conclusions for decision making within the SIG
    - Ensuring health and sustained development of the SIG and growth of SIG members
    - Organizing and participating in regular meetings

## Member Promotion Mechanism

Members of the SIG can be promoted to a higher role based on the rules defined in [TiDB Developer Group](/architecture/README.md#tidb-developer-group). 

## Member Exit Mechanism

There are two exit situations:

- Members MAY decide to step down at anytime for personal reasons by opening the PR to modify the `membership.md`in the Specific SIG. The PR can be merged once it gets two approvals from the higher role.

- Members of a role SHOULD be removed from the SIG if they have not communicated a leave of absence and either cannot be reached for more than 1 month or are not fulfilling their documented responsibilities for more than 1 month. Tech Leads will assess the communication and contribution status monthly to update the membership list. Each change (removal), depending on the role, requires the following:

    - For Committer or Tech Leads, a supermajority votes from Maintainers are required
    - For Reviewers or lower roles, two approvals from the immediate higher role is required

Once the change is approved, the corresponding profile will be moved to the emeritus role list.

## SIG Lifecycle

### Creation

* Before creating a special interest group, make sure you get the following ready:
  * Ensure all SIG Tech Leads, and other SIG roles are community members
  * Have the answers to following questions:
    * What is the exact module this group focused on?
    * What is the artifact that this group will deliver, and to whom?
    * What are the meeting mechanics (frequency, duration, roles)?

* Once you have met the above criteria, you can create the SIG according to the following steps:

	1. Create a `sig-${name}` folder in [special interest group directory](../special-interest-groups) (modify `${name}` to your Special Interest Group short name) according to [SIG Template](../special-interest-groups/sig-template), and modify the **Active Special Interest Groups** list in the [Special Interest Groups](../special-interest-groups/README.md) page. 
	2. Create a public Slack Channel in [tidbcommunity](https://pingcap.com/tidbslack/) to discuss the SIG operation related matters. Channel name is recommended to be prefixed with `sig-${name}`
	3. Create a public [Zoom](https://zoom.com/) url for regular meetings, as well as other online discussions.
	4. Create a public Google Doc to summarize the regular SIG work report and record the regular meeting notes.
	5. Submit a Pull Request on [pingcap/community](https://github.com/pingcap/community), titled `SIG-Creation-Request: SIG-XXX`, with all the items and related documents (RFCs, PRs) attached. The PR will be reviewed by the PMC. 2 approvals are required for the PR to pass.
	6. Create a public Slack Channel in [tidbcommunity](https://pingcap.com/tidbslack/) to discuss the SIG operation related matters. Channel name is recommended to be prefixed with `sig-${name}`
	7. Announce the establishment of a new SIG in the TiDB community.

### Dissolution

Sometimes a SIG may need to be dismissed or merged. The SIG's dissolution rules should be defined by the specific SIG.
