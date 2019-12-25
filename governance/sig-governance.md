# SIG Governance

The full name of SIG is Special Interest Group. Please refer to [Community Organization](/architecture#tidb-community-architecture). SIGs mainly aggregate a group of Active Contributors, and conducts in-depth research & contributions to one or more TiDB modules, and is promoted to Reviewer, Committer within the SIG.

## SIG Role and Organizational Governance

The SIG is subject to the following rules:

- Before starting a SIG, the charter will be established in advance. Please refer [Create the SIG charter](#Create-the-SIG-charter) to create the charter 
- Except for holidays, the regular meeting is organized at least once every two weeks.
- The assignable tasks will be graded by difficulty levels and claimed by SIG members.

Please refer to [SIG Lifecycle](#sig-lifecycle) for other issue.

## SIG Roles

### Active Contributors

  - Active contributors will be invited to the SIG
  - Remain active in at least one module in the SIG
  - Continue to contribute in at least one module
  - Can participate in the proposal and discussion in the SIG

### Reviewer

  Please refer to the definition of [Reviewer](/architecture#reviewer)

### Committer

  Please refer to the definition of [Committer](/architecture#committer)

### Tech Lead

  - 2 or 3 Tech Leads in an SIG are required
  - Responsible for training members of the SIG
  - Organize discussions and make decisions of proposal generated within the SIG
  - Responsible for the SIG's activity and output
  - Lead the SIG to generate more Reviewer and Commiter
  - Follow up progress and assign task in SIG
  - Need to participate in regular meetings
  - Make roadmap for the SIG
  - Weekly progress meeting requires at least one Tech Lead to participate in the discussion online

## Member Promotion Mechanism

Members of the SIG can be promoted to a higher role, and the rules are set by the specific SIG. Each promotion is nominated by two members of a higher level role or above.

## Member Exit Mechanism

After a period of inactivity, the SIG member will temporarily exit the SIG. The exit mechanism is set by each SIG.

## Create the SIG Charter

1. Copy the [SIG Charter Template](sig-charter-template.md)
2. Modify the content in the template that needs to be defined for the specific SIG
3. Initiate a PR to [pingcap/community](https://github.com/pingcap/community) with the SIG Charter, and propose the SIG Charter to [SIGs log](/special-interest-groups)
4. The new SIG will be announced by the community committee after approval.

## SIG Lifecycle

### Create

1. All SIG Technical Leads, and other roles need to be at least [Active Contributor](/architecture#active-contributor) in the Community structure

2. Follow the steps above to [Create the SIG charter](#Create-the-SIG-charter) 

3. Create a public and private Slack Channel in tikv-wg.slack.com to discuss the SIG operation related matters

4. Create a Zoom room for regular meetings, as well as other online discussions

5. Announce the establishment of a new SIG in the TiKV community

### Dismiss

Sometimes an SIG may need to be dismissed or merged. The SIG's dissolution rules should be defined by the specific SIG.