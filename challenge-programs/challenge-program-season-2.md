# Challenge Program Season 2

Welcome to TiDB Challenge Program Season 2.

Season 2 of the TiDB Challenge Program series focuses on the usability of TiDB and its related projects.

Following the principle of “basing directions on users' requirements", we drew most of the requirements of this season from users' votes. These requirements will be presented in the form of tasks in this season. Participants can earn challenge points by claiming tasks. And redeem prizes at the end of the season.

Season 2 of TiDB Challenge Program officially started on March 02, 2020, and will end on May 30, 2020, lasting 3 months.

We can’t wait to see innovative ideas sparkled. You are welcomed to join [TiDB Community Slack Workspace](https://join.slack.com/t/tidbcommunity/shared_invite/enQtNzc0MzI4ODExMDc4LWYwYmIzMjZkYzJiNDUxMmZlN2FiMGJkZjAyMzQ5NGU0NGY0NzI3NTYwMjAyNGQ1N2I2ZjAxNzc1OGUwYWM0NzE) on the slack. Feel free to contact us in the **#tidb-challenge-program** channel if you have any questions.

## Before participation

1. Create a GitHub account. See [Join GitHub](https://github.com/join) for more information.
2. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) in your local environment.
3. Configure your Git to access Github. See [Set up Git](https://help.github.com/en/github/getting-started-with-github/set-up-git) for more information.

## Sign up

To sign up for the program, [Open an Issue](https://github.com/tidb-challenge-program/register) in the [tidb-challenge-program/register](https://github.com/tidb-challenge-program/register) Repo, in the format as defined by the issue template.

> **Note:**
>
> - You can participate as an individual or team up. In both two cases, you will sign up as a team.
> - Up to three members are allowed in a team.
> - Teams that include PingCAP employees will be marked with a star (\*). Their challenge points will not be included in the final ranking, but are legible for gift redemption.
> - To change the signup information, you need to close the original signup issue and open a new one to sign up again.

## How To challenge

The entire flow of the TiDB Usability Challenge Program consists of the following:

**Check the issue** -> **Claim the issue** -> **Fix the task** -> **Submit the code** -> **Evaluate the Issue** -> **Grant points** -> **Redeem your points**

where the steps before "Grant points" will be performed on GitHub.

### Step 1: Check the issue

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
- [TiDB Operator](https://github.com/pingcap/tidb-operator/projects/4)

> **Note**: `client-rust` and `tikv` are counted as the same Repo in points calculation.

Issues under the TODO columns are divided into three categories according to their difficulty level: TODO/Easy, TODO/Medium, TODO/Hard. The meaning of the tags of Issues are as follows:

- `difficulty/easy`, `difficulty/medium`, `difficulty/hard`: difficulty level of the issue
- `Component/XX`: product component of the issue

Of course, if you have other ideas of contributions that are not presented under the TODO column, you can raise a proposal by opening a new Issue to the corresponding Repo. Before you do that, make sure you have read the [Contribution Guide](https://github.com/pingcap/community/blob/master/CONTRIBUTING.md) and [Contributor Covenant Code of Conduct](https://github.com/pingcap/community/blob/master/CODE_OF_CONDUCT.md).

- [Raise a proposal](https://github.com/pingcap/tidb/issues/new?labels=type%2Fenhancement&template=feature-request.md) to TiDB Repo
- [Raise a proposal](https://github.com/tikv/tikv/issues/new?template=feature-request.md) to TiKV Repo
- [Raise a proposal](https://github.com/pingcap/pd/issues/new?labels=type%2Fenhancement&template=feature-request.md) to PD Repo
- [Raise a proposal](https://github.com/pingcap-incubator/tidb-dashboard/issues/new?labels=type%2Fenhancement&template=feature-request.md) to TiDB Dashboard Repo

**Format requirement**: Add the mark `REQ-UCP` at the beginning of the issue title, for example:

`REQ-UCP: Further extract tidb_query into different workspaces`

### Step 2: Claim an issue

If you decide to claim an Issue, please comment “/pick-up-challenge” under this issue. A robot will determine automatically whether you are qualified for claiming this issue based on your current challenge points. If yes, then you can claim this Issue at once; if not, you will need to earn the required points by claiming tasks that are currently available for you.

Some heads-up:

- The initial challenge point of each participant (individual or team) is 0.
- "Easy" issues are recommended for newcomers to the challenge program. Earn 200 points in the current Repo to unlock issues of the "medium" and "hard" difficulty levels.
- If you already have some historical challenge points and want to challenge a task of “medium” or higher difficulty, you need to make up the historical points of this Repo to 200 points before you can continue the challenge.
- Further claiming "easy" tasks of the Repo after you meet the "medium" challenge qualification will not score. If you just want to do something easy, you can claim "easy" tasks from other projects.
- Each participant (individual or team) can only only claim one issue at a time.

### Step 3: Fix the issue

If you have any questions during the coding process, feel free to contact us via the [#tidb-challenge-program](https://join.slack.com/t/tidbcommunity/shared_invite/enQtNzc0MzI4ODExMDc4LWYwYmIzMjZkYzJiNDUxMmZlN2FiMGJkZjAyMzQ5NGU0NGY0NzI3NTYwMjAyNGQ1N2I2ZjAxNzc1OGUwYWM0NzE) channel. Normally you can expect a reply from the assigned mentor for the issue within 24 hours. However, before you ask a question, make sure you have read the issue description carefully and studied the reference materials.

### Step 4: Submit the code

When your solution is ready as required in the issue description, you can commit the code to the corresponding GitHub Repo (i.e.,tidb) via a Pull Request (PR). Remember to copy the mentor assigned for this Issue to review your code in the comment after the PR is submitted. The mentor will normally finish the evaluation within 48 hours after the PR is created.

The submitted PR must follow the [Commit Message and Pull Request Style](https://github.com/pingcap/community/blob/master/contributors/commit-message-pr-style.md).

For more information on how to submit your PR, see [GitHub Workflow](https://github.com/pingcap/community/blob/master/contributors/workflow.md). After you create the PR, you can also refer to [SRE-BOT Command Help](https://github.com/pingcap/community/blob/master/contributors/command-help.md) to facilitate the merge process.

**Format requirement:**

In addition to the format defined by the Repo, you must provide the number of the claimed issue in the first line, as shown in the example below:

```
UCP #12345

<!-- The following description -->
```

### Step 5: Evaluate the PR and grant points

PR reviewers will review your code in terms of format, functionality, and usability. A PR that is approved by more than 2 reviewers (i.e. commenting “LGTM”) can be merged into the master branch of the corresponding Repo. This is where your challenge is identified as successful and you will be granted the challenge points correspondingly. This also means other participants will automatically be disqualified for this task, and the submitted PRs will be closed.

Otherwise, you will need to update the PR based on the feedback from PR reviewers.

### Step 6: Redeem your points

A leaderboard of the challenge points will be displayed on the [TiDB Usability Challenge website](https://pingcap.com/community-cn/tidb-usability-challenge/). When the program ends for the season, your can redeem your challenge points for PingCAP Contribution Prizes, including but not limited to TiDB hoodie, North Face customized computer backpack, etc.

**When to redeem**: Your challenge points are valid for redemption after the current season ends and before the end of the next season. Please be noted that your redemptable points of this season will be cleared when next season ends.

**How to redeem**: Fill out the prize redemption table (accessible when redemption is available).

> **Note:**
>
> For the top three voted requirements, the challengers will be granted extra points of 10000, 8000, and 6000 respectively. When the requirements are completed or the program ends for the season, the extra points will be distributed evenly among the subtasks, and will be further divided evenly among the members in the corresponding team. Considering the possibility that the requirement may not be fully resolved during the season, the sharing rule of the extra point is:

```
(Current Partitipant's Points of Completed Subtasks under This Requirement/All Participants Total Points of Completed subtasks under This Requirement)* Extra Points Granted to This Requirement
```

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

- To discard an issue: Reply to "give-up-challenge" under the issue.
- To change your claimed issue: Firstly discard the current issue as described above, and then claim a new issue.

**Q3**: Can I invite PingCAP's internal employees to team up?

**Answer**: Of course you can! We welcome our community members to team up with PingCAP employees. If you don’t know any PingCAPers, shout out in the #tidb-challenge-program slack channel. However, please note that PingCAP members in your team can only work on the challenge issues during non-working hours. In order to ensure the fairness of the event, when the number of PingCAP employees accounts for more than 2/3 in a team, the team can only claim issues that are above the Hard level to challenge, and they will be marked a star team. A star team will not participate in the final points ranking, but still retain the right to redeem their challenge points.

**Q4:** What if I don’t remember in which Repo have I earned 200 points?

**Answer**: Each participant will receive an automatic response from sre-bot after registration. The response cotains the points status of the participant in each Repo.
