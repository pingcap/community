# Proposal: Cherry Bot

- Author(s):     [Mu Tong](https://github.com/you06)
- Last updated:  2020-02-24
- Discussion at: [Incubating Program: Cherry Bot](https://github.com/pingcap-incubator/cherry-bot/issues/)

## Abstract

Cherry Bot, the bot works with GitHub is widely used in PingCAP. This proposal aims to share the bot with the community.

## Background

We spend a lot of time on GitHub management, that's why we need a bot to assist us.

Current feature:

- Cherry Pick: bot can automatically cherry pick PRs to other branches when PR get merged.
- Auto Merge: for the PRs which have been reviewed and are waiting for CI is completed, bot can merge the PRs when you are away form keyboard.
- Label Contributor: bot can add specified label for contributors which may helps your project management.
- Notice: bot helps you find out unlabled issues, not reviewed and stale PRs.
- Slack: the bot is integrated with Slack, you can get the latest status from Slack.

We can do further works and make the bot better, also, we need the requirements and advices from community.

## Proposal

- Refine code
- More document
- Makes it easy to add custom feature

## Rationale

The bot talks with GitHub using [restful API](https://developer.github.com/v3/), the most events are triggered by webhook, for handling the webhook failures, some events can be triggered by polling. The bot should play the role of an individual user in GitHub.

## Compatibility and Mirgration Plan

There are not compatibility issues.

## Implementation

- Write articles about it and it's rationale, till Mar 1, 2020.
- Refine codes, till Mar 1, 2020.
- Make it easy to use, till Mar 20, 2020.
- Make more options, till Apr 15, 2020.
- Add more unit test, till Apr 30, 2020.

## Testing Plan

The test is really a problem for Cherry Bot, currently we test it by hand, however, we should add more unit tests.
