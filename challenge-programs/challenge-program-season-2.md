# Challenge Program Season 2

Welcome to TiDB Challenge Program Season 2.

Season 2 of the TiDB Challenge Program series focuses on the usability of TiDB and its related projects.

<!-- TOC -->

- [Challenge Program Season 2](#challenge-program-season-2)
    - [Introduction to Season 2](#introduction-to-season-2)
    - [Before participation](#before-participation)
    - [Sign up](#sign-up)
    - [How To challenge](#how-to-challenge)
        - [Step 1: View/Create an issue](#step-1-viewcreate-an-issue)
        - [Step 2: Claim an issue](#step-2-claim-an-issue)
        - [Step 3: Fix the issue](#step-3-fix-the-issue)
        - [Step 4: Submit the code](#step-4-submit-the-code)
        - [Step 5: Evaluate the PR and grant points](#step-5-evaluate-the-pr-and-grant-points)
        - [Step 6: Redeem your points](#step-6-redeem-your-points)
    - [Learning materials](#learning-materials)
    - [FAQs（Updating in Progress)](#faqsupdating-in-progress)

<!-- /TOC -->
 

## Introduction to Season 2

Following the principle of “basing directions on users' requirements", we drew most of the requirements of this season from users' votes. These requirements will be presented in the form of tasks in this season. Participants can earn challenge points by claiming tasks. And redeem prizes at the end of the season.

- Time: March 02, 2020 - May 30, 2020
- Communication:  You are welcomed to join [TiDB Community Slack Workspace](https://join.slack.com/t/tidbcommunity/shared_invite/enQtNzc0MzI4ODExMDc4LWYwYmIzMjZkYzJiNDUxMmZlN2FiMGJkZjAyMzQ5NGU0NGY0NzI3NTYwMjAyNGQ1N2I2ZjAxNzc1OGUwYWM0NzE) on the slack. Feel free to contact us in the **#tidb-challenge-program** channel where you can:
  -  Discuss with task mentor or other participants on how to complete the task
  -  Ask for review of your PR
  -  Raise issues for the sre-bot (our robot assitant)
  -  Team up with PingCAP employees
  -  Ask any other questions during the challenge

## Before participation

1. Create a GitHub account. See [Join GitHub](https://github.com/join) for more information.
2. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) in your local environment.
3. [Set up Git](https://help.github.com/en/github/getting-started-with-github/set-up-git).

## Sign up

To sign up for the program, [Open an Issue](https://github.com/tidb-challenge-program/register/issues/new?template=challenge-program-register.md&title=UCP%2FSignup) in the [tidb-challenge-program/register](https://github.com/tidb-challenge-program/register) repository, titled by "UCP/Sign Up". The content depends on how would you like to join:

- **Individual**

    Individual participant must sign as a one-person team for this season. See the template below:

    ```markdown
    ## Team Sign-up

    - Team Name: team name
    - Team Leader: @github_id (mail)
    ```

- **Team**

    A team sign-up must includes the information as shown in the template below:

    ```markdown
    ## Team Sign-up

    - Team Name: team_name
    - Team Leader: @github_id(mail_01)
    - Team Member: @github_id_02 (mail_01)
    - Team Member: @github_id_03(mail_01)
    ```

> **Note:**
>
> - Up to three members are allowed in a team.
> - Teams that include PingCAP employees will be marked with a star (\*). Their challenge points will not be included in the final ranking, but are valid for gift redemption.
> - To change the signup information, the **team leader** needs to close the original signup issue and open a new one.

## How To challenge

The entire flow of the TiDB Usability Challenge Program consists of the following steps:

**View/Create an issue** -> **Claim an issue** -> **Complete the task** -> **Submit the code** -> **Evaluate the issue** -> **Grant challenge points** -> **Redeem your points**

where the steps before "Grant challenge points" are performed on GitHub.

### Step 1: View/Create an issue

View the list of available issues under the TODO Columns in the following projects:

- [TiDB](https://github.com/pingcap/tidb/projects/26)
- [TiKV](https://github.com/tikv/tikv/projects/20)
- [PD](https://github.com/pingcap/pd/projects/2)
- [chaos-mesh](https://github.com/pingcap/chaos-mesh/projects/14)
- [Data Migration](https://github.com/pingcap/dm/projects/1)
- [Backup & Restore](https://github.com/pingcap/br/projects/1)
- [client-rust](https://github.com/tikv/client-rust/projects/3)
- [TiDB Dashboard](https://github.com/pingcap-incubator/tidb-dashboard/projects/17)
- [cherry-bot](https://github.com/pingcap-incubator/cherry-bot/projects/1)

> **Note**: `client-rust` and `tikv` are counted as the same repository in points calculation.

Issues under the TODO columns are divided into three categories according to their difficulty level: TODO/Easy, TODO/Medium, TODO/Hard. Each task is tagged in meaning of the tags of Issues are as follows:

- `difficulty/easy`, `difficulty/medium`, `difficulty/hard`: difficulty level of the issue
- `Component/XX`: product component of the issue

Of course, if you have other ideas of contributions that are not presented under the TODO column, you can raise a proposal by opening a new Issue to the corresponding repository. Before you do that, make sure you have read the [Contribution Guide](https://github.com/pingcap/community/blob/master/CONTRIBUTING.md) and [Contributor Covenant Code of Conduct](https://github.com/pingcap/community/blob/master/CODE_OF_CONDUCT.md).

- [Raise a proposal](https://github.com/pingcap/tidb/issues/new?labels=type%2Fenhancement&template=feature-request.md) to TiDB repository
- [Raise a proposal](https://github.com/tikv/tikv/issues/new?template=feature-request.md) to TiKV repository
- [Raise a proposal](https://github.com/pingcap/pd/issues/new?labels=type%2Fenhancement&template=feature-request.md) to PD repository
- [Raise a proposal](https://github.com/pingcap-incubator/tidb-dashboard/issues/new?labels=type%2Fenhancement&template=feature-request.md) to TiDB Dashboard repository

**Format requirement**: Add the mark `REQ-UCP` at the beginning of the issue title, for example:

`REQ-UCP: Further extract tidb_query into different workspaces`

### Step 2: Claim an issue

If you decide to claim an issue, please comment “/pick-up-challenge” under this issue. A git bot will determine automatically whether you are qualified for claiming this issue based on your current challenge points. If yes, then you can claim this issue at once; if not, you will need to earn the required points as suggested by the bot, by challenging tasks that are currently available for you.

Some heads-up:

- The initial challenge point of each participant (individual or team) is 0.
- "Easy" issues are recommended for newcomers to the challenge program. Earn 200 points in the current repository to unlock issues of the "medium" and "hard" difficulty levels.
- If you already have some historical challenge points and want to challenge a task of “medium” or higher difficulty, you need to make up the historical points of this repository to 200 points before you can continue the challenge.
- Further claiming "easy" tasks of the repository after you meet the "medium" challenge qualification will not score. However, if you just want to do something easy, you can claim "easy" tasks from other repositories where your points haven't reached the medium level yet.
- Each team can only claim one issue at a time.

### Step 3: Fix the issue

If you have any questions during the coding process, feel free to contact us via the [#tidb-challenge-program](https://join.slack.com/t/tidbcommunity/shared_invite/enQtNzc0MzI4ODExMDc4LWYwYmIzMjZkYzJiNDUxMmZlN2FiMGJkZjAyMzQ5NGU0NGY0NzI3NTYwMjAyNGQ1N2I2ZjAxNzc1OGUwYWM0NzE) channel. Normally you can expect a reply from the assigned mentor for the issue within 24 hours. However, before you ask a question, make sure you have read the issue description carefully and studied the reference materials.

### Step 4: Submit the code

When your solution is ready as required in the issue description, you can commit the code to the corresponding GitHub repository (i.e.,tidb) via a Pull Request (PR). Remember to copy the mentor assigned for this Issue to review your code in the comment after the PR is submitted. The mentor will normally finish the evaluation within 48 hours after the PR is created.

The submitted PR must follow the [Commit Message and Pull Request Style](https://github.com/pingcap/community/blob/master/contributors/commit-message-pr-style.md).

For more information on how to submit your PR, see [GitHub Workflow](https://github.com/pingcap/community/blob/master/contributors/workflow.md). After you create the PR, you can also refer to [SRE-BOT Command Help](https://github.com/pingcap/community/blob/master/contributors/command-help.md) to facilitate the merge process.

**Format requirement:**

In addition to the format defined by the repository, you must provide the number of the claimed issue in the first line, as shown in the example below:

```
UCP #12345

<!-- The following description -->
```

### Step 5: Evaluate the PR and grant points

PR reviewers will review your code in terms of format and functionality. A PR that is approved by more than 2 reviewers (i.e. commenting “LGTM”) can be merged into the master branch of the corresponding repository. This is where your challenge is identified as successful and you will be granted the challenge points correspondingly. This also means other participants will automatically be disqualified for this task, and the submitted PRs will be closed.

If the PR is not quite there yet, you will need to update the PR based on the feedback from PR reviewers.

> **Note:**
>
> For the top three voted requirements, the challengers will be granted extra points of 10000, 8000, and 6000 respectively. When the requirements are completed or the program ends for the season, the extra points will be distributed evenly among the subtasks, and will be further divided evenly among the members in the corresponding team. Considering the possibility that the requirement may not be fully resolved during the season, the sharing rule of the extra point is:

```
(Current Partitipant's Points of Completed Subtasks under This Requirement/All Participants Total Points of Completed subtasks under This Requirement)* Extra Points Granted to This Requirement
```

### Step 6: Redeem your points

A leaderboard of the challenge points will be displayed on the [TiDB Usability Challenge website](https://pingcap.com/community-cn/tidb-usability-challenge/). When the program ends for the season, your can redeem your challenge points for PingCAP Contribution Prizes, including but not limited to TiDB hoodie, North Face customized computer backpack, etc.

**When to redeem**: Your challenge points are valid for redemption after the current season ends and before the end of the next season. Please be noted that your redemptable points of this season will be cleared when next season ends.

**How to redeem**: Fill out the prize redemption table (accessible when redemption is available).

## Learning materials

We have put together some learning materials here for you to get familiar with the projects in the scope of this season.

- [TiDB documentation](https://pingcap.com/docs/) - concepts, user guide, and reference documents for TiDB
- [TiKV documentation](https://tikv.org/docs/3.0/concepts/overview/) - concepts, user guide, and reference documents for TiKV
- [Chaos Mesh documentation](https://github.com/pingcap/chaos-mesh/wiki) - user guide, and development guide for Chaos Mesh
- [PingCAP Talent Plan](https://github.com/pingcap/talent-plan) - a series of training courses about writing distributed systems in Go and Rust with no previous experience of TiDB or TiKV required.
- [Awesome Database Learning](https://github.com/pingcap/awesome-database-learning) - a list of learning materials to help you understand databases internals, including but not limited to:papers, blogs, courses, and talks.

## FAQs（Updating in Progress)

**Q1**: How do I change the registration information? How will the points change after the registration information is changed?

**Answer**: To change the registration information, you need to close the original registration issue and open another issue for registration. Editing on the original issue is not supported for the time being. There are three cases of changes in points after the registration information is changed:

- Adding or reducing team members will not affect the total points of the team;
- The individual points of new members joining the team will be frozen to the state before joining the team, and the points earned after joining the team will be owned by the team;
- Participants who leave the team and rejoin as individuals do not inherit team points.

**Q2**: How do I discard/change the issue I have claimed?

**Answer**:

- To discard an task: Reply to "give-up-challenge" under the issue.
- To change your claimed task: Firstly discard the current task as described above, and then claim a new issue.

**Q3**: Can I invite PingCAP's internal employees to team up?

**Answer**: Of course you can! We welcome our community members to team up with PingCAP employees. If you don’t know any PingCAPers, shout out in the #tidb-challenge-program slack channel. To ensure the fairness of the event, when the number of PingCAP employees accounts for more than 2/3 in a team, the team can only claim issues that are above the hard level to challenge, and they will be marked a star team. A star team will not participate in the final points ranking, but still retain the right to redeem their challenge points.

**Q4:** What if I don’t remember in which repository have I earned 200 points?

**Answer**: Each participant will receive an automatic response from sre-bot after registration. The response contains the points status of the participant in each repository.
