# High-Performance TiDB Challenge

High-Performance TiDB Challenge is a mentoring program which focuses on workload optimization to bring TiDB performance to a higher level. Several typical workloads in need of optimization are now open for participants to discuss and work on. Completion of each challenge task under the selected workload is recognized through challenge points, which could be redeemed into cash awards and swags.

## Program Timeline

* Sept 17 - Nov 29     Team-up and sign-up
* Sept 17 - Nov 29     Team bonding and coding
* Nov 30 - Dec 4       Challenge results evaluation
* Dec 5                Presentation and prize announcement

## Communication

TiDB Community Slack Workspace is the official communication platform for this challenge program! Join [#tidb-challenge-program](https://slack.tidb.io/invite?team=tidb-community&channel=tidb-challenge-program&ref=github-community) channel to

* Team up with other participants
* Report sre-bot bugs
* Ask any questions concerning this challenge

## Participation Notes

Glad you are interested! Before you start hacking, these are something you should know to get you started quickly.

### About team-up

* You need to team up before submitting the [application form](https://forms.pingcap.com/f/high-performance-challenge-en). One team could only select one workload for optimization.
* Up to six participants are allowed in a team (mentor included). Cross team-up is not allowed.
* If you have trouble in team-up, give a shout in the Slack channel for help. Or you can sign up as a one-person team.

### About challenge points

* Your team only earns points when you resolve the issues that you created for your target workload optimization. If the issues resolved are not relevant, there will be no points granted.
* The team points are the sum of the points of all the tasks completed by your team members.
* The leaderboard in real time does not indicate the final team rankings. See [Evaluation criteria](#evaluation-criteria) for all the factors at play.
* The organizing committee determines the challenge points for the created issues under each workload. The points are determined according to the team's estimated work.

### About mentors

* Only one mentor is allowed in a team and one mentor could only provide instructions to one team.
* Besides providing regular mentoring instructions, the mentor is allowed to claim the tasks to submit PRs. As such, in addition to the mentor prize, the mentor is eligible to share the team prize.
* The team that needs mentoring could contact the organizing committee in the Slack channel.

### Evaluation criteria

The results of the challenge will be evaluated in teams. The organizing committee will pull the latest working branches of each team at 18:00 on Dec 4th (China Standard Time) to evaluate workload optimization results and calculate the total PR points of each team. Besides, each team has 7 minutes to present their teamwork for the optimization on Dec 5th.

**The final ranking is determined by:**

* Performance improvement (65%): performance improvement (percentage) of the working branch compared with the base Master branch
* PR points of the team (30%): the validated PRs merged into Master
* Presentation (5%): presentation performance

## Before participation

1. See [Join GitHub](https://github.com/join) to create a GitHub account.
2. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) in your local environment.
3. Check [Set up Git](https://help.github.com/en/github/getting-started-with-github/set-up-git) to configure your Git to access GitHub.

## How to challenge

### Step 1: Sign up

Make sure you read [Participation Notes](#participation-notes) before you apply for the program. To apply, select a target workload for optimization, and fill in the [application form](https://forms.pingcap.com/f/high-performance-challenge-en). Note that once the form is submitted, it cannot be modified.

| Workload | Sub-workload                   | mentor         |
| -------- | ------------------------------ | :------------- |
| sysbench | sysbench-Oltp_Insert           | youjiali1995   |
| tpcc     | tpcc-High-Conflicts            | Little-Wallace |
| sysbench | sysbench-Oltp_Update_Non_Index | sticnarf       |
| sysbench | sysbench-Oltp_Update_Index     | tiancaiamao    |
| ycsb     | ycsb-Workloade                 | xhebox         |
| sysbench | sysbench-Oltp_Point_Select     | jackysp        |
| sysbench | sysbench-Oltp_Read_Only        | bobotu         |
| tpcc     | tpcc-Low-Conflicts             | pending        |
| ycsb     | ycsb-Workloada                 | pending        |
| ycsb     | ycsb-Workloadb                 | pending        |
| ycsb     | ycsb-Workloadc                 | pending        |
| ycsb     | ycsb-Workloadd                 | pending        |
| ycsb     | ycsb-Workloadf                 | pending        |
| sysbench | sysbench-Oltp_Write_Only       | pending        |
| sysbench | sysbench-Oltp_Delete           | pending        |
| sysbench | sysbench-Oltp_Read_Write       | pending        |

### Step 2: Submit your working branch

The team leader submits a working branch off the master branch before 16:00 on Sept 17th (China Standard Time). This must be done within 5 working days after signing up.

The hash value of the base master version is:

```
tidb:1bfeff96c7439ed672f8362cf67573666a43f781
tikv:dcd2f8f4076d847151fdf58e9c0ba333f242d374
pd:c05ef6f95773941db5c1060174f5a62e8f864e88
```

> **Note**: The working branch created here is only for submitting the code change from your workload optimization task. After it's created, DO NOT merge the master branch into it. At the end of the program, the working branch will be compared with the base master version to get the exact performance improvement and determine the final points of each team.

### Step 3: Start optimization

In this period, your team will be working together with the mentor to diagnose performance bottlenecks for the selected workload. Once the performance bottlenecks are identified, you need to:

1. Create the corresponding issues in the format of `hptc WorkloadName IssueName`, for example: `hptc sysbench-Oltp_Read_Only Update a config`

    Once you finish creating issues, a bot automatically notify the organizing committee to rate the issues and label them with the points that will be granted. Make sure you mention this issue number in the corresponding PR.

2. Start optimizing by solving the issues.

    Submit your change as a Pull Request (PR) to your working branch, in the format as specified below:

    * Complied to [Commit Message and Pull Request Style](https://github.com/pingcap/community/blob/master/contributors/commit-message-pr-style.md) for the PR title
    * `hptc` should be indicated in the first line of PR description
    * The target workload should be indicated in the PR description, such as `performance/tpcc`
    * The corresponding issue number should be indicated in the PR description, such as “Issue Number: #xxx”

### Step 4: Submit code change

Submit your code change to the master branch before 18:00 Nov 29th (China Standard Time). PRs merged after Nov 29th will not be counted for the points.

### Step 5: Points granted

PRs merged into the master branch during the competition will be automatically granted the points as labeled on the corresponding issue. If a merged PR does not receive any points, please check whether the PR has been submitted according to the PR format requirements, or contact the organizing committee in the slack channel.

### Step 6: Present your work

Submit your presentation slides before 10:00, Dec 4th (China Standard Time). The presentation should be no longer than 7 minutes, with the following topics covered:

* Introduction to the workload situation before and after your optimization
* Work allocation among team
* Performance improvement

The online presentation will be held at 13:00-17:00, Dec 5th (China Standard Time). The challenge results will be announced after the presentation.

## Awards

* 1st prize: 7,000 USD for the team; 1,350 USD for the mentor
* 2nd prize: 4,250 USD for the team; 1,350 USD for the mentor
* 3rd prize: 1,350 USD for the team

>**Note**: Teams that finish the final presentation will be evaluated by the judges, among which no more than five winning teams will be generated. The winning teams will be awarded as described above. Each member of the finisher team can get a special swag. If the winning team does not have a mentor, the mentor prize will be automatically added to the team.

### Follow-up updates

Considering the difficulty of the tasks and the limited time of the participants, the organizing committee has decided to extend the competition to Nov 29. What's more, the committee has decided to offer more resources for the teams, including benchmark facilities on cloud platforms and TiDB Cloud credit coupons!

**Benchmark facilities on the cloud platforms**

All teams are eligible to apply for the benchmark facilities on the cloud platforms to better experiment and verify ideas. Benchmark facilities for each team include 1 cluster with 6 servers. The specific configuration of a single server is listed as below.

4C8G + data disk 200G + public network bankwidth

***How to apply***

Send an email to zhangyurui@pingcap.com with the subject formatted below.
Subject: Your team name + application of server resource
Make sure your Email address is valid as the server information will be sent by email.

**TiDB Cloud credit coupons**

To thank the contribution of participating teams, the organizing committee has prepared 70,000 USD worth of TiDB Cloud credit coupons!

TiDB Cloud always stays up to date with TiDB releases and has access to the latest features. The TiDB Cloud beta launch coincides with TiDB 4.0 GA, which marks a big advancement towards PingCAP's vision of a real-time Hybrid Transactional/Analytical Processing (HTAP), elastic, and cloud-native database. TiDB 4.0's new features such as Backup and Restore, Change Data Capture (CDC), visual monitoring, diagnostics tools, and security features including Transparent Data Encryption will be directly benefiting TiDB Cloud, providing customers with a one-stop distributed SQL experience in the cloud. 

TiDB Cloud is managed and supported by the same team that has designed, tuned, and operated TiDB for about 1,000 companies across multiple mission-critical segments such as financial services, e-commerce platforms, SaaS solutions, and social network applications. Enterprise support is available 24/7 for TiDB Cloud users, so customers can rest assured that their data is safe and their services are always on. 
For more information, please visit the [TiDB Cloud Website](https://en.pingcap.com/products/tidbcloud)

***How the credit coupons will be distributed***

1st place: 6,000 USD worth of TiDB Cloud credits
2nd place: 4,500 USD worth of TiDB Cloud credits
3rd place: 2,250 USD worth of TiDB Cloud credits
4th place: 1,500 USD worth of TiDB Cloud credits
5th place: 750 USD worth of TiDB Cloud credits

## Learning materials

* **[Performance Tuning Package](performance-tuning-package.md)**

This package provides workload-related background knowledge and commonly used tuning tools for participants to better understand TiDB performance tuning.

* **[PingCAP Talent Plan](https://github.com/pingcap/talent-plan)**

This is a series of training courses about writing distributed systems in Go and Rust with no previous experience of TiDB or TiKV required.
