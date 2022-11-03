# New Triage Process for Cherrypick

Authors: @ichn-hu @Mini256 @zhangyangyu

## Motivation

According to the [release model](https://pingcap.github.io/tidb-dev-guide/project-management/release-train-model.html), TiDB is going to have multiple releases. Each release matches one git branch. For `type/bug` issues with `severity/critical` and `severity/major`, it is anticipated to be fixed on any [currently maintained release versions](https://pingcap.github.io/tidb-dev-guide/project-management/release-train-model.html#what-is-tidb-version-mechanism-under-release-train-model) if affected. Contributors and reviewers are responsible to settle the affected versions once the bug is identified as `severity/critical` or `severity/major`. For versions that are identified affected, a corresponding `affects-x.y` label will be added to the issue. Then for the pull request solving the issue, contributors and reviewers should add corresponding `needs-cherry-pick-x.y` labels. ti-srebot will create cherry-pick pull requests to each branch according to these labels.

This model still have a drawback that it is not able to identify whether all the affected versions are diagnosed. For example, if an issue misses an `affects-5.1` label, we don't know if it's been diagnosed but identified as not affected or it's just not yet diagnosed. Therefore a critical or major bug might misses some versions due to such mistake, especially when there are more and more versions. To solve the problem and prevent overlooked versions, we'd like to propose a new triage workflow.

## Solution

We refer to the process of identifying if a bug is affecting one version as **triage**, and the person who is triaging the affection as **triager**.

The triage workflow still only applies to critical and major bugfix issues. For such issues, when they are created and identified, the ti-chi-bot will assign a list of `may-affect-x.y` labels to the issue. For example, currently we have version 5.0, 5.1, 5.2, 5.3, 4.0 and the in-sprint 5.4, when a `type/bug` issue is created and added label `severity/critical` or `severity/major`, the ti-chi-bot will add label `may-affect-4.0`, `may-affect-5.0`, `may-affect-5.1`, `may-affect-5.2`, and `may-affect-5.3`. These labels mean that whether the bug affects these release versions are not yet determined, and is awaiting being triaged.

When a version is triaged, the triager needs to remove the corresponding `may-affect-x.y` label. If the version is affected, the triager needs to add a corresponding `affects-x.y` label to the issue and in the meanwhile the `may-affect-x.y` label can be automatically removed by the ti-chi-bot, otherwise the triager can simply remove the `may-affect-x.y` label. So when a issue has a label `may-affect-x.y`, this means the issue has not been diagnosed on version x.y. When a issue has a label `affects-x.y`, this means the issue has been diagnosed on version x.y and identified affected. When both the two labels are missing, this means the issue has been diagnosed on version x.y but the version is not affected.

The status of the affection of a certain issue can be then determined by the combination of the existence of the corresponding `may-affect-x.y` and `affect-x.y` labels on the issue, see the table bellow for a clearer illustration.

| may-affect-x.y | affects-x.y |                         status                                |
|:--------------:|:-----------:|:-------------------------------------------------------------:|
|     YES        |    NO       | version x.y has not been diagnosed                            |
|     NO         |    NO       | version x.y has been diagnosed and identified as not affected |
|     NO         |    YES      | version x.y has been diagnosed and identified as affected     |
|     YES        |    YES      | invalid status                                                |

In such a workflow, we can assure all the effected versions could be correctly diagnosed. 

For pull requests, we will introduce a new checker named `check-issue-triage-complete`. The checker will first check whether the [corresponding issue](https://pingcap.github.io/tidb-dev-guide/contribute-to-tidb/contribute-code.html#referring-to-an-issue) has any `type/xx` label, if not, the checker fails. Then for issues with `type/bug` label, there must also exist a `severity/xx` label, otherwise, the checker fails. For `type/bug` issue with `severity/critical` or `severity/major` label, the checker checks if there is any `may-affect-x.y` label, which means the issue has not been diagnosed on all needed versions. If there is, the pull request is blocked and not able to be merged. So in order to merge a bugfix pull request into the target branch, every other effective version needs to first be diagnosed. 

The bot will automatically trigger the checker to run on the associated PR by listening to the labeled / unlabeled event of `may-affects-x.y` labels on bug issue, contributors also could comment `/run-check-issue-triage-complete` like other checkers to rerun the checker manually and update the status. In addition, if the checker fails, the robot will add the `do-not-merge/needs-triage-completed` label to the PR at the same time, which will be used by other plugins like [tars](https://book.prow.tidb.io/#/en/plugins/tars).

The ti-srebot still creates cherry-pick pull requests according to the `needs-cherry-pick-x.y` labels. But the labels no longer needs to be added manually. ti-chi-bot will add the labels according to the `affects-x.y` labels on the corresponding issues when the `check-issue-triage-complete` checker passes. 

The final workflow is:

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW25ldyBidWcgaXNzdWVdIC0tPiBCKGF1dG8gYWRkIHR5cGUvYnVnIGxhYmVsKVxuICAgIEIgLS0-IEModHJpYWdlcnMgYWRkIHNldmVyaXR5L3h4IGxhYmVsKVxuICAgIEMgLS0-IER7c2V2ZXJpdHkvY3JpdGljYWwgb3Igc2V2ZXJpdHkvbWFqb3J9XG4gICAgRCAtLT4gfFllc3wgRShib3QgYWRkcyBtYXktYWZmZWN0LXgueCBsYWJlbHMpXG4gICAgRCAtLT4gfE5vfCBHXG4gICAgRSAtLT4gRih0cmlhZ2VycyBkaWFnbm9zZSBlYWNoIHZlcnNpb24gYW5kIGNoYW5nZSBtYXktYWZmZWN0LXgueCBsYWJlbCB0byBhZmZlY3RzLXgueCBsYWJlbClcbiAgICBGIC0tPiBHW2VuZF0iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/edit#eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW25ldyBidWcgaXNzdWVdIC0tPiBCKGF1dG8gYWRkIHR5cGUvYnVnIGxhYmVsKVxuICAgIEIgLS0-IEModHJpYWdlcnMgYWRkIHNldmVyaXR5L3h4IGxhYmVsKVxuICAgIEMgLS0-IER7c2V2ZXJpdHkvY3JpdGljYWwgb3Igc2V2ZXJpdHkvbWFqb3J9XG4gICAgRCAtLT4gfFllc3wgRShib3QgYWRkcyBtYXktYWZmZWN0LXgueCBsYWJlbHMpXG4gICAgRCAtLT4gfE5vfCBHXG4gICAgRSAtLT4gRih0cmlhZ2VycyBkaWFnbm9zZSBlYWNoIHZlcnNpb24gYW5kIGNoYW5nZSBtYXktYWZmZWN0LXgueCBsYWJlbCB0byBhZmZlY3RzLXgueCBsYWJlbClcbiAgICBGIC0tPiBHW2VuZF0iLCJtZXJtYWlkIjoie1xuICBcInRoZW1lXCI6IFwiZGVmYXVsdFwiXG59IiwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW25ldyBwdWxsIHJlcXVlc3RdIC0tPiBCe2hhcyBjb3JyZXNwb25kaW5nIGlzc3VlfVxuICAgIEIgLS0-IHxZZXN8IEN7aXNzdWUgaGFzIHR5cGUveHggbGFiZWx9XG4gICAgQiAtLT4gfE5vfCBMW2lzc3VlIGNoZWNrIGZhaWxzXVxuICAgIEMgLS0-IHxZZXN8IEV7aXNzdWUgaGFzIHR5cGUvYnVnIGxhYmVsfVxuICAgIEMgLS0-IHxOb3wgRFtjaGVja2VyIGZhaWxzXVxuICAgIEUgLS0-IHxZZXN8IEd7aXNzdWUgaGFzIHNldmVyaXR5L3h4IGxhYmVsfVxuICAgIEUgLS0-IHxOb3wgRltjaGVja2VyIHBhc3Nlc11cbiAgICBHIC0tPiB8WWVzfCBIe2lzc3VlIGhhcyBzZXZlcml0eS9jcml0aWNhbCBvciBzZXZlcml0eS9tYWpvciBsYWJlbH1cbiAgICBHIC0tPiB8Tm98IERcbiAgICBIIC0tPiB8WWVzfCBJe2lzc3VlIGhhcyBhbnkgbWF5LWFmZmVjdC14LnggbGFiZWx9XG4gICAgSCAtLT4gfE5vfCBGXG4gICAgSSAtLT4gfFllc3wgRFxuICAgIEkgLS0-IHxOb3wgRlxuICAgIEYgLS0-IEpbYm90IGFkZHMgbmVlZHMtY2hlcnJ5LXBpY2steC54IGxhYmVscyBhY2NvcmRpbmcgdG8gaXNzdWUgYWZmZWN0cy14LnggbGFiZWxzXVxuICAgIEogLS0-IEtbYm90IGNyZWF0ZXMgY2hlcnJ5LXBpY2sgcHVsbCByZXF1ZXN0cyBhZnRlciBtZXJnZV1cbiAgICBMIC0tPiBNW2JvdCBhZGRzIGRvLW5vdC1tZXJnZS9uZWVkcy1saW5rZWQtaXNzdWUgbGFiZWxdXG4gICAgRCAtLT4gTltib3QgYWRkcyBkby1ub3QtbWVyZ2UvdHJpYWdlLWNvbXBsZXRlZCBsYWJlbF0iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6dHJ1ZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/edit/#eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW25ldyBwdWxsIHJlcXVlc3RdIC0tPiBCe2hhcyBjb3JyZXNwb25kaW5nIGlzc3VlfVxuICAgIEIgLS0-IHxZZXN8IEN7aXNzdWUgaGFzIHR5cGUveHggbGFiZWx9XG4gICAgQiAtLT4gfE5vfCBMW2lzc3VlIGNoZWNrIGZhaWxzXVxuICAgIEMgLS0-IHxZZXN8IEV7aXNzdWUgaGFzIHR5cGUvYnVnIGxhYmVsfVxuICAgIEMgLS0-IHxOb3wgRFtjaGVja2VyIGZhaWxzXVxuICAgIEUgLS0-IHxZZXN8IEd7aXNzdWUgaGFzIHNldmVyaXR5L3h4IGxhYmVsfVxuICAgIEUgLS0-IHxOb3wgRltjaGVja2VyIHBhc3Nlc11cbiAgICBHIC0tPiB8WWVzfCBIe2lzc3VlIGhhcyBzZXZlcml0eS9jcml0aWNhbCBvciBzZXZlcml0eS9tYWpvciBsYWJlbH1cbiAgICBHIC0tPiB8Tm98IERcbiAgICBIIC0tPiB8WWVzfCBJe2lzc3VlIGhhcyBhbnkgbWF5LWFmZmVjdC14LnggbGFiZWx9XG4gICAgSCAtLT4gfE5vfCBGXG4gICAgSSAtLT4gfFllc3wgRFxuICAgIEkgLS0-IHxOb3wgRlxuICAgIEYgLS0-IEpbYm90IGFkZHMgbmVlZHMtY2hlcnJ5LXBpY2steC54IGxhYmVscyBhY2NvcmRpbmcgdG8gaXNzdWUgYWZmZWN0cy14LnggbGFiZWxzXVxuICAgIEogLS0-IEtbYm90IGNyZWF0ZXMgY2hlcnJ5LXBpY2sgcHVsbCByZXF1ZXN0cyBhZnRlciBtZXJnZV1cbiAgICBMIC0tPiBNW2JvdCBhZGRzIGRvLW5vdC1tZXJnZS9uZWVkcy1saW5rZWQtaXNzdWUgbGFiZWxdXG4gICAgRCAtLT4gTltib3QgYWRkcyBkby1ub3QtbWVyZ2UvdHJpYWdlLWNvbXBsZXRlZCBsYWJlbF0iLCJtZXJtYWlkIjoie1xuICBcInRoZW1lXCI6IFwiZGVmYXVsdFwiXG59IiwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

By the way, there is also a `needs-more-info` label. Every time an issue is closed the bot will add it and leave a comment to remind the creators and reviewers to do cherrypick. But actually it doesn't do much help and becomes a little bit cumbersome. Currently there are more than 600 issue with the label not yet handled. And its name is confusing, some developers use it to ask for more information. After the new workflow, we don't need it and will delete it.

## Affected Repositories

* tidb
* tiflow
* tidb-tools
* tidb-binlog
* ng-monitoring

## Deadline

The vote will be open for at least 144 hours unless there is an objection or not enough votes.

We're looking for at least 2 votes from tidb-maintainers, and 2 votes from migration-maintainers.
