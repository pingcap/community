# TiDB Performance Challenge Program

We’re thankful to all contributors of the TiDB open-source community for every contribution to TiDB! We’re inspired to see more and more developers joining our community and demonstrating their passion and pursuit of open-source spirit. TiDB continues to evolve on and on, empowered by the open-source community!

We really appreciate and always believe in the power of the open-source community, so in order to raise TiDB to a new level in terms of stability, performance, usability, we decided to launch the series of TiDB Challenge Program! There some issues will be opened for the programmers to discuss and solve together. Completed a task that’s part of the Performance Challenge Program (PCP)? We’ll make a note of it.  At the end of each season, we’ll be offering some rewards to top contributors!

For the first season, **Performance Improvement** is our focus, so here comes TiDB Performance Challenge Program which will officially start from November 4, 2019, to February 4, 2020.

We can’t wait to see innovative ideas sparkled! Participants are welcomed to join [TiDB Community Slack Workspace](https://join.slack.com/t/tidbcommunity/shared_invite/enQtNzc0MzI4ODExMDc4LWYwYmIzMjZkYzJiNDUxMmZlN2FiMGJkZjAyMzQ5NGU0NGY0NzI3NTYwMjAyNGQ1N2I2ZjAxNzc1OGUwYWM0NzE) and [tikv-wg Slack Workspace](http://tikv.org/chat), and feel free to contact us in the **#performance-challenge-program** channel if any questions arise.

## Before participation

- See [Join GitHub](https://github.com/join) to create a GitHub account
- [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) in your local environment
- Check [Set up Git](https://help.github.com/en/github/getting-started-with-github/set-up-git) to configure your Git to access Github

## Sign up

- [Open an Issue](https://github.com/tidb-perf-challenge/pcp/issues/new?template=performance-challenge-program.md&title=PCP%3A+Sign+Up) in [tidb-perf-challege/pcp](https://github.com/tidb-perf-challenge/pcp) Repo
- Format:
   - Title: PCP/Sign Up
   - Text content:
      - For personal sign up, please introduce yourself briefly and leave your email address for future contact.
      - For team signup, please introduce your team briefly, provide your team name, list your team members, and leave an email address for future contact. (See an [example](https://github.com/tidb-perf-challenge/pcp/blob/master/.github/ISSUE_TEMPLATE/performance-challenge-program.md))
- Note:
   - Up to three members in a team.
   - The team that includes a PingCAPer will be marked with a star (*). Their Contribution Credits will not be counted into the final rank, but can still be used to redeem gifts.
   - If you want to change the signup information, you need to close the original signup issue and open a new one. Editing on the original Issue is not supported for the moment.

## How To Challenge
This step-by-step guide will walk you through the things you need to know to participate in TiDB Performance Challenge and is a great reference for any other time you need it. Feel free to follow the written instructions below.

### Step 1: Check Issues
You can check all the open Issues in TODO Columns in Performance Challenge Program in Project under the [TiDB](https://github.com/pingcap/tidb/projects/26), [TiKV](https://github.com/tikv/tikv/projects/20) and [PD](https://github.com/pingcap/pd/projects/2) Repo.

Issues in TODO Columns are divided into three categories according to their difficulty level: TODO/Easy, TODO/Medium, TODO/Hard. The meaning of the tags of Issues are as follows:

- “difficulty/easy”、“difficulty/medium”、“difficulty/hard”: difficulty level of Issues
- “Component/XX”: product component of Issues

Of course, if you want to contribute other ideas that are not included in the current Issues , you can **raise a proposal** by opening a new Issue to the corresponding Repo after you have read the [Contribution Guide](https://github.com/pingcap/community/blob/master/CONTRIBUTING.md) and [Contributor Covenant Code of Conduct](https://github.com/pingcap/community/blob/master/CODE_OF_CONDUCT.md).

- [Raise a proposal](https://github.com/pingcap/tidb/issues/new?labels=type%2Fenhancement&template=feature-request.md) to TiDB Repo
- [Raise a proposal](https://github.com/tikv/tikv/issues/new?template=feature-request.md) to TiKV Repo
- [Raise a proposal](https://github.com/pingcap/pd/issues/new?labels=type%2Fenhancement&template=feature-request.md) to PD Repo

**Format requirement:** Add the mark “REQ-PCP” at the beginning of the Issue title, e.g. REQ-PCP: Further extract tidb_query into different workspaces

### Step 2: Pick up an Issue

If you decide to pick up an Issue, please comment **“/pick-up-challenge”** on this Issue. You will be checked if you have enough points to tackle this issue. If yes, then you can challenge this Issue at once; if not, you have to win more points until you meet the requirement.

**Heads-up:**

- If you want to challenge vectorization function Issue（[TiDB #12105](http://github.com/pingcap/tidb/issues/12105), [TiKV #5751](http://github.com/tikv/tikv/issues/5751)), you can directly challenge the function tasks in the Issue without commenting on "/pick-up-challenge". Each time you successfully perform a function, you can submit a PR in the same format as the regular PCP PR (see Step 4 for more details). You have to note that the first line of the PR should be `PCP #12105` or `PCP #5751`. Each merged PR in the vectorization function Issue values 50 Contribution Credit. After all the vectorization function tasks are performed, the Issue will be closed.

- The initial Contribution Credit of each individual participant or team is “0”**. The participants need to gain 400 Contribution Credits with “Easy” issues to be qualified to work on **Medium** or **Hard** issues.  
- When the Contribution Credits owned by the participant is over "600" (including "600"),  "Easy" issues will be not valid for redeeming credits. 
- TiKV is a big codebase that may require some time to get familiar with. Easy issues are a great way to start if you plan larger contributions in the future. If you have significant upstream experience (e.g. you wrote a gRPC library), talk to us and we can bypass this requirement.

- Each individual participant or team can only pick up one issue at a time. Folks working on larger issues might stumble into fixes for smaller, Easy issues. That’s OK, submit these! And, don’t overburden yourself!

### Step 3: Fix the Issue
If you have any questions during the coding process, you can discuss with us through **#performance-challenge-program** channel, and the mentor assigned for the Issues will reply to you within 24h.

### Step 4: Commit your code
When your solution is ready, you can open a PR and commit the code to the corresponding GitHub Repo (i.e.,tidb) as a GitHub Pull Request (aka PR). Remember to @ the mentor responsible of this Issue to review your PR in the comment after the PR is submitted. The Mentor will check your PR as soon as possible.

How to submit: When you finish the coding, you can submit the GitHub Pull Request (PR) to the corresponding Repo. About how to submit PR, see [GitHub Workflow](https://github.com/pingcap/community/blob/master/contributors/workflow.md). There is also [SRE-BOT Command](https://github.com/pingcap/community/blob/master/contributors/command-help.md) Help for your reference.

Format requirement:
The first line of PR needs to specify the number of the Issue you pick, and then the format required by each repo.

```
PCP #12345

<!-- The following description -->
```

### Step 5: Evaluate the PR and award Contribution Credit

Evaluation rules: PR Reviewer will review the code format, functionality and performance of the PR. PR that is approved by more than 2 reviewers (i.e. commenting “LGTM” in PR) will be merged into the master branch of the corresponding Repo.

If your PR is merged into the master branch, you successfully fix that Issue and win the points. Then the Issue will be closed, so other participants can not tackle it anymore.

If your PR is not merged, you need to discuss the solution and details with the PR Reviewer. In this process, you can accept or reject the suggestions given by the PR Reviewer.

### Step 6: Redeem your Contribution Credit

The leaderboard of TiDB Performance Challenge Program is displayed on the [TiDB Performance Challenge](https://pingcap.com/community-cn/tidb-performance-challenge/) website. You can redeem your Contribution Credit for PingCAP Open Source Contribution Bonus including but not limited to TiDB hoodie, The North Face customized computer backpack, etc. (See the [website](https://pingcap.com/community-cn/tidb-performance-challenge/) to know more gift information)

Time to remember: You can redeem your Contribution Credit after the current season ends and before the end of the next season. At the end of the next season, all your redeemable Contribution Credit will be cleared, and you can no longer exchange the gifts, but the winning Contribution Credit can be accumulated over all seasons.

How to exchange: Fill out the Redeem Gifts form after the end of this season (The entry will be open then)

**Good luck and look forward to your brilliant idea!!**

## FAQ (Updating)

### Q1: How to change the registration information? How about the change of the Contribution Credit after the registration information changes?
If you want to change the signup information, you need to close the wrong signup Issue and open a new one for signing up. Editing on the original Issue is unavailable for the moment. There are three kinds of changes related to the Contribution Credit after the change of registration information:

- The total Contribution Credit owned by a team will not be affected by the change of team members;
- If you join a team, your individual Contribution Credit will remain at the state before joining the team, and all the Contribution Credit you gained after joining the team will be owned by the team;
- If you quit a team, your original Contribution Credit is "0" because you can't inherit the team Contribution Credit.

### Q2: How to give up/change the picked Issue?

- Give up a Issue: commenting "give-up-challenge" on the picked Issue
- Change an Issue: give up the Issue first, then pick up a new Issue

### Q3: How does the previous contributions in the community combine with the Performance Challenge Program?
Performance Challenge Program is a brand new community activity embracing TiDB & TiKV open source community. While the previous contributions in the community can't be converted into the Contribution Credit, the participants who are Active Contributors and the superior role in the commnity can directly pick up the "Medium" and "Hard" Issues. (See [here](https://pingcap.com/community-cn/organization/) for more details about the roles in the commnity )

### Q4: Can PingCAPers be invited to team up?
Of course! PingCAPers can work with their community partners to challenge the Issue in **Non-Working Time**. For the sake of fairness, **when PingCAPers in a team as a proportion of the total number of more than two-thirds, the team can only pick up the Issue above "Hard" level. Then the team will be marked with a star (*), and their Contribution Credit will not be included into the final rank, but still can be used to redeem the gifts.**
