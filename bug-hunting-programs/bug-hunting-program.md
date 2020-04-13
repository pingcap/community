# TiDB 4.0 Bug Hunting Program

 - [Program introduction](#program-introduction)
 - [Before participation](#before-participation)
 - [Sign up](#sign-up)
 - [How to participate](#how-to-participate)
     - [Step 1: Test the feature](#step-1-test-the-feature)
     - [Step 2: Report the bug](#step-2-report-the-bug)
     - [Step 3: Evaluate the bug and grant points](#step-3-evaluate-the-bug-and-grant-points)
     - [Step 4: Redeem points](#step-4-redeem-points)
 - [Documentation materials](#documentation-materials)
 - [FAQs（Updating in Progress)](#faqsupdating-in-progress)


## Program introduction

TiDB 4.0 GA version will be released on May 31, 2020 with many new features that are highly anticipated. To make TiDB 4.0 experience available earlier, we invite you to participate in TiDB 4.0 Bug Hunting Program, where you could report bugs that affect your experience while exploring TiDB 4.0. Sponsored by PingCAP and launched by the TiDB developer community,  this program aims to bring a better experience of TiDB 4.0 to the global community.

*   Time: April 8, 2020 - May 30, 2020 
*   Communication: You are welcomed to join [TiDB Community Slack Workspace](https://join.slack.com/t/tidbcommunity/shared_invite/enQtNzc0MzI4ODExMDc4LWYwYmIzMjZkYzJiNDUxMmZlN2FiMGJkZjAyMzQ5NGU0NGY0NzI3NTYwMjAyNGQ1N2I2ZjAxNzc1OGUwYWM0NzE) on the slack. Feel free to contact us in the **#everyone** channel where you could:
    *   Discuss with task mentors on information about the related features
    *   Raise issues for the sre-bot (our bot assistant on GitHub)
    *   Team up with PingCAP employees
    *   Ask any other questions during the program

In order to thank you for your participation, we will grant corresponding points according to the bug level you have hunted. Points can be redeemed for TiDB contribution prizes. 

## Before participation 

*   See [Join GitHub](https://github.com/) for how to create a GitHub account and open issues. 

## Sign up

To sign up for the program, [Open an Issue](https://github.com/tidb-challenge-program/bug-hunting-register/issues/new?template=challenge-program-register.md&title=Bug+Hunting+Program+Register) in the [bug-hunting/register](https://github.com/tidb-challenge-program/bug-hunting-register) repository, titled by “bug hunting/sign up”. The content should include team name, the team leader’s email address as well as all team members’ email addresses. The content example is available [here](https://github.com/tidb-challenge-program/bug-hunting-register/blob/master/.github/ISSUE_TEMPLATE/challenge-program-register.md).

> **Note:**
> 
> *   The individual participant should sign up as a team.
> *   Up to five members are allowed in a team.

## How to participate

The entire flow of the TiDB 4.0 Bug Hunting Program consists of the following steps: 

**Test the feature**-> **Report the bug**-> **Evaluate the bug**-> **Grant points**-> **Redeem points**

where the steps before "Grant points" are performed on GitHub.

### Step 1: Test the feature

Test features according to the corresponding documentation below. Bugs could be reported in case of inconsistency with the results of the documentation.

*   [Pessimistic Transaction](https://pingcap.com/docs/stable/reference/transactions/transaction-pessimistic/)
*   [Configuration File](https://pingcap.com/docs/stable/reference/configuration/tidb-server/configuration-file/)
*   [SQL Hint](https://pingcap.com/docs/stable/reference/performance/optimizer-hints/)
*   [SQL Plan Management](https://pingcap.com/docs/stable/reference/performance/understanding-the-query-execution-plan/)
*   [ADMIN DDL](https://pingcap.com/docs/stable/reference/sql/statements/admin/)
*   [AutoRandom Key](https://pingcap.com/docs/stable/reference/sql/attributes/auto-random/)
*   [Backup and Restore](https://pingcap.com/docs/stable/reference/tools/br/br/)
*   [TiFlash](https://pingcap.com/docs/stable/reference/tiflash/overview/)
*   [Character Set Support](https://pingcap.com/docs/stable/reference/sql/character-set/)
*   [Views](https://pingcap.com/docs/stable/reference/sql/views/)
*   [Role-Based Access Control](https://pingcap.com/docs/stable/reference/security/role-based-access-control/)
*   [Load Data](https://pingcap.com/docs/stable/reference/sql/statements/load-data/)
*   [TIUP](https://pingcap.com/docs/stable/how-to/deploy/orchestrated/tiup/)
*   Dashboard (updating in progress)

### Step 2: Report the bug

If you find any bug in step 1, report it as an issue in [bug-hunting/issue](https://github.com/tidb-challenge-program/bug-hunting-issue). The title of the issue should be in the format below:

```
Pn-[4.0-bug-hunting]-[feature-names]-brief-descriptions 
```

where:

*   Pn indicates the bug level. It is recommended you include an estimated bug level in the title according to the level table below. This makes the review process easier and more efficient.  
*   The issue title and content should be written in English. 

<table>
  <tr>
   <td>
Bug level
<p>
(in descending order)
   </td>
   <td>Description
   </td>
   <td>Examples
   </td>
  </tr>
  <tr>
   <td>P0
   </td>
   <td>Data accuracy or service usability is affected.
   </td>
   <td>
<ol>

<li>Serious issues such as data loss and errors, wrong results returned by the query, and inconsistent results returned by the SQL output, etc.

<li>Usability issues, such as service inaccessible for more than 30 seconds

<li>Process crash, etc.
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td>P1
   </td>
   <td>The function and performance do not meet expectations.
   </td>
   <td>
<ol>

<li>Abnormal execution plans

<li>Monitoring does not meet expectations.

<li>Performance degradation   compared to TiDB 3.0 (either for on-premise or public cloud deployment).

<li>Abnormal output during function tests
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td>P2
   </td>
   <td>Incompatible with MySQL (except officially stated as not compatible)
   </td>
   <td>
<ol>

<li>Incompatible behaviors, such as permissions, SQL errors, etc.

<li>Incompatible error code
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td>P3
   </td>
   <td>Documentation bugs
   </td>
   <td>
<ol>

<li>Wrong description of documentations in <a href="https://pingcap.com/docs/dev/">dev </a>version.

<li>The error occurs in function usage documentation, or the expected result cannot be obtained.
</li>
</ol>
   </td>
  </tr>
</table>

### Step 3: Evaluate the bug and grant points

1. The QA team from PingCAP will label the bug according to the bug level. If you are the first one to report the bug,  you will be granted the corresponding points for you based on the points table below. The sre-bot will automatically reply “Thank you for your contribution, you have been awarded xx points!”
2. If the reported issue is verified not to be a bug, the QA team will label it as “non-bug” and close the issue. In this case,  you could keep on your hunting. 

<table>
  <tr>
   <td>
Bug level
<p>
(in descending order)
   </td>
   <td>Points
   </td>
  </tr>
  <tr>
   <td>P0
   </td>
   <td>1000
   </td>
  </tr>
  <tr>
   <td>P1
   </td>
   <td>500
   </td>
  </tr>
  <tr>
   <td>P2
   </td>
   <td>100
   </td>
  </tr>
  <tr>
   <td>P3
   </td>
   <td>50
   </td>
  </tr>
</table>

### Step 4: Redeem points

If the reported bug is confirmed as valid, you could check the above table to confirm whether the received points are correct.

Points bonus

*   When the issue is verified to be reproducible with clear steps a, there will be an additional 100 points granted.

The leaderboard of the points will be displayed on TiDB 4.0 Bug Hunting website. The points could be redeemed for PingCAP contribution prizes, including but not limited to TUG T-shirt, PingCAP portable charger, and TUG hoodie, and more.

**When to redeem:**

The points are valid for redemption within a year after the current season. For example, if season 1 ends on April 30, the points are valid for redemption until April 30, 2021.

**How to redeem:**

Fill out the prize redemption table (accessible when redemption is available).

## Documentation materials

[TiDB documentation](https://pingcap.com/docs/stable/)

## FAQs（Updating in Progress)

**Q1: How do I change the registration information? How will the points change after the registration information is changed?**

**Answer**: To change the registration information, you need to close the original registration issue and open another issue for registration. Editing on the original issue is not supported for the time being. There are three cases of changes in points after the registration information is changed:

*   Adding or reducing team members will not affect the total points of the team;
*   The individual points of new members joining the team will be frozen to the state before joining the team, and the points earned after joining the team will be owned by the team;
*   Participants who leave the team and rejoin as individuals do not inherit team points.

**Q2: Can I invite PingCAP's internal employees to team up?**

**Answer**: Of course you can! We welcome our community members to team up with PingCAP employees. If you don’t know any PingCAPers, shout out in the **#everyone** slack channel. To ensure the fairness of the event, the team that include PingCAP employees will be marked with a star (*). Their bug hunting points will not be included in the final ranking, but are valid for the prizes redemption.

**Q3:  Are the bugs reported here available to be picked for the 4.0 [TiDB Usability Challenge Program](https://github.com/pingcap/community/blob/master/challenge-programs/challenge-program-season-2.md)?**

**Answer**: Of course YES! We would love to see  [TiDB Challenge Program](https://github.com/pingcap/community/blob/master/challenge-programs/challenge-program-season-2.md) participants  help us fix these issues!  Challenge points will be granted once you successfully pick one and fix it.

The rules are as follows:

1. You could pick up any issue labeled as “challenge-program-2” by commenting “/pick up challenge”.

2. The bot automatically replies “pick up success, PTAL@point-team” when detecting your pickup comment. Then the issue is picked up successfully.  

3. When the issue is picked, the rating team from the challenge program rates the issue by commenting the points, for example “/bug point 1000” (generally within 3 work days).  The rated points will be updated automatically in the description of this issue.

> **Note:**
> 
> *   After claiming the issue, you don’t have to wait for the rating to finish before you  submit the PR. If the issue is not rated after 5 days since it is claimed, you could request points rating again.
> 
> *   When the issue is claimed,  follow the steps in [TiDB Challenge Program Season 2](https://github.com/pingcap/community/blob/master/challenge-programs/challenge-program-season-2.md) to help fix issues.
