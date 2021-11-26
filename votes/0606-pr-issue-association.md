# A Vote for PR Issue Association

## Proposal

### Motivation

To measure software evolution, we focus on features implemented, bugs fixed, and general enhancement. Issues document these items, while a pull request focuses on the change set and whether we implement it correctly.

Normally, an issue documents a work item, and a pull request resolves it (despite cherry-picks). However, the relation between pull requests and issues is complicated in TiDB projects.

- 1 issue with 0 PR: question, bug vanished without a reason, etc. 
- 1 issue with 1 PR: normal case. 
- 1 issue with n PRs: resolve a bug multiple times([example](https://github.com/pingcap/tidb/issues/24679)), or resolve a complex issue in steps([example](https://github.com/pingcap/tidb/issues/27652)). 
- n issues with 1 PR: trade off resolving things as a whole (due to code coupling, or we can resolve multiple bugs at the common parent level)([example](https://github.com/pingcap/tidb/pull/27697)), duplicated issues. 
- 0 issue with 1 PR: coding without a ticket([example](https://github.com/pingcap/tidb/pull/23022)). Even if the description is detailed or even if a design document is present, pull requests focus on the change set. It is about the implementation, not the question; if it is, we always mix discussion because the change set has a primary position. 

This proposal tries to resolve the last case (0 issue with 1 PR), that a pull request must associate with issue(s). In this way,

- Bring issues to a first-class development concept.
- Benefit works tracking and contributors to join force in collaboration.
- Ensure that all changes in release notes are associated with the corresponding issues.
- Help the release manager and users understand software evolution.

### Solution

Issue number in PR body will become a mandatory requirement. Currently, the PR template contains one line `Issue Number: close #xxx`, but this is not mandatory. Contributors are free to leave it empty or delete the whole content. 

After this proposal, the bot will check whether there is relevant issue number(s) in the PR body, by `Issue Number: ref #{issue-number}` or `Issue Number: close[sd]?|resolve[sd]?|fix(e[sd])? #{issue-number}`. `ref` means associated with an issue but does not close it. There should be no other content in the same line and the check is case-insensitive. Multiple issues should be separated by a comma, like `Issue Number: close #12341, close #12342`. For PRs trying to close issues in a different repository, contributors need to first create an issue in the same repository and use this issue to track. 

While merging the PR, the bot will extract the content after `Issue Number:` and add them as a new line to the final commit message body. So if a PR `#12345` has a title `pkg: what's changed in this one package` and its body contains `Issue Number: close #12341, close #12342`, after merging, its commit message is

```
pkg: what's changed in this one package (#12345)

close #12341, close #12342
```

Previous discussions happend on [TiDB forum](https://internals.tidb.io/t/topic/409), you could check for more technique background or alternative solutions.

### Affected repositories

* tidb
* ticdc
* tidb-tools
* tidb-binlog
* ng-monitoring

## Deadline

The vote will be open for at least 144 hours unless there is an objection or not enough votes.

We're looking for at least 2 votes from tidb-maintainers, and 2 votes from migration-maintainers.
