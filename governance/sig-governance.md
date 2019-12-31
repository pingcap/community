# SIG Governance

This charter details on the governance guidelines of TiDB SIGs. It will be updated as needed to meet the current needs of the TiDB Cimmunity.

## Organizational Governance

In order to standardize Special Interest Group efforts, create maximum transparency, and route contributors to the appropriate SIG, SIGs should follow these guidelines:

- Create a charter and have it approved according to the SIG charter  process. Please refer [Create the SIG charter](#create-the-sig-charter) for more details.
- Meet regularly, at least for 30 minutes every 2 weeks, except for long holidays or occasions where all Tech Leads decide that there is nothing to discuss.
- Keep up-to-date meeting notes, linked from the SIG's page in the community repo
- Report activity in the weekly community meeting at least once every quarter
- Participate in release planning meetings and retrospectives, and burndown meetings, as needed
- Ensure related work happens in a project-owned github org and repository, with code and tests explicitly owned and supported by the SIG, including issue triage, PR reviews, test-failure response, bug  fixes, etc.
- The assignable tasks will be graded by difficulty levels and claimed by SIG members.
- Use the GitHub PR & issues, slack channels as the primary means of working, communicating, and collaborating.

## SIG Roles

The SIG follows the role definitions in the [TiDB Developer Group](/architecture/README.md#tidb-developer-group) and [GOVERNANCE](/GOVERNANCE.md).

### SIG Members

- Inludes all Contributors, Active Contributors, Reviewers, and Committers under the SIG
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
      - Done through PR to update the `member-list.md` file in the SIG
- **Responsibilities**
    - Creating new projects under the SIG
    - Triaging issues/tasks in the SIG
    - Mentoring members of the SIG
    - Organizing discussions and drawing conclusions for decision making within the SIG
    - Ensuring health and sustained development of the SIG and grwoth of SIG members
    - Making roadmap for the SIG
    - Organizing and participating in regular meetings

## Member Promotion Mechanism

Members of the SIG can be promoted to a higher role based on the rules defined in [TiDB Developer Group](/architecture/README.md#tidb-developer-group). 

## Member Exit Mechanism

There are two exit situations:

- Members MAY decide to step down at anytime for personal reasons by opening the PR to modify the `member-list.md`in the Specific SIG. The PR can be merged once it gets two approvals from the higher role.

- Members of a role SHOULD be removed from the SIG if they have not communicated a leave of absence and either cannot be reached for more than 1 month or are not fulfilling their documented responsibilities for more than 1 month. Tech Leads will assess the communication and contribution status monthly to update the membership list. Each change (removal), depending on the role, requires the following:

    - For Committer or Tech Leads, a supermajority votes from Maintainers are required
    - For Reviewers or lower roles, two approvals from the immediate higher role is required

Once the change is approved, the corresponding profile will be moved to the emeritus role list.

## SIG Lifecycle

### Creation

1. Copy the [SIG Charter Template](SIG-CHARTER-TEMPLATE.md).
2. Modify the content in the template that needs to be defined for the specific SIG
3. Initiate a PR in [special-interest-groups](https://github.com/pingcap/community/tree/master/special-interest-groups) with the SIG Charter, and propose the SIG Charter. This must be approved by the supermajority of the PMC members.
4. Create a public and private Slack Channel in tikv-wg.slack.com to discuss the SIG operation related matters.
5. Create a Zoom room for regular meetings, as well as other online discussions.
6. Announce the establishment of a new SIG in the TiKV community.

### Dissolution

Sometimes a SIG may need to be dismissed or merged. The SIG's dissolution rules should be defined by the specific SIG.
