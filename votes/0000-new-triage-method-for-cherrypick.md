# New Triage Process for Cherrypick

Authors: @ichn-hu @Mini256 @zhangyangyu

## Motivation

According to the [release model](https://pingcap.github.io/tidb-dev-guide/project-management/release-train-model.html), TiDB is going to have multiple releases. Each release matches one git branch. For `type/bug` issues with `severity/critical` and `severity/major`, it is anticipated to be fixed on any currently maintained release versions if affected. There will be people from PingCAP dedicated to diagnose the affected versions once the bug is identified as `severity/critical` or `severity/major`, and in rare cases if a bug is not sufficiently diagnosed, the contributor and the reviewer will be responsible to settle the affected versions. For versions that are identified affected, a corresponding `affects-x.x` label will be added to the issue. The ti-srebot will create cherry-pick pull requests according to the labels upon the merge of the pull request.

This model still have a drawback that it is not able to identify whether all the affected versions are diagnosed. For example, if an issue misses an `affects-5.1` label, we don't know if it's been diagnosed but identified as not affected or it's just not yet diagnosed. Therefore a critical or major bug might misses some versions due to such mistake, especially when there are more and more versions. To solve the problem and prevent overlooked versions, we'd like to propose a new triage workflow.

## Solution

We refer to the process of identifying if a bug is affecting one version as **triage**, and the person who is triaging the affection as **triager**.

The triage workflow still only applies to critical and major bugfix issues. For such issues, when they are created and identified, the ti-chi-bot will assign a list of `may-affect-x.x` labels to the issue. For example, currently we have version 5.0, 5.1, 5.2, 5.3, 4.0 and the in-sprint 5.4, when a `type/bug` issue is created and added label `severity/critical` or `severity/major`, the ti-chi-bot will add label `may-affect-4.0`, `may-affect-5.0`, `may-affect-5.1`, `may-affect-5.2`, and `may-affect-5.4`. These labels mean that whether the bug affects these release versions are not yet determined, and is awaiting been triaged.

When a version is triaged, the triager needs to remove the corresponding `may-affect-x.x` label. If the version is affected, the triager needs to add a corresponding `affects-x.x` label to the issue and in the meanwhile the `may-affect-x.x` label can be automatically removed by the ti-chi-bot, otherwise the triager can simply remove the `may-affect-x.x` label. So when a issue has a label `may-affect-x.x`, this means the issue has not been diagnosed on version x.x. When a issue has a label `affects-x.x`, this means the issue has been diagnosed on version x.x and identified affected. When both the two labels are missing, this means the issue has been diagnosed on version x.x but the version is not affected.

The status of the affection of a certain issue can be then determined by the combination of the existence of the coresponding `may-affect-x.x` and `affect-x.x` labels on the issue, see the table bellow for a clearer illustration.

| may-affect-x.x | affects-x.x |                         status                                |
|:--------------:|:-----------:|:-------------------------------------------------------------:|
|     YES        |    NO       | version x.x has not been diagnosed                            |
|     NO         |    NO       | version x.x has been diagnosed and identified as not affected |
|     NO         |    YES      | version x.x has been diagnosed and identified as affected     |
|     YES        |    YES      | invalid status                                                |

In such a workflow, we can assure all the effected versions could be correctly diagnosed. 

The ti-srebot still creates cherry-pick pull requests according to the `affects-x.x` labels. But when a pull request is going to merge, the bot will check whether the [corresponding issue](https://pingcap.github.io/tidb-dev-guide/contribute-to-tidb/contribute-code.html#referring-to-an-issue) has any `may-affect-x.x` label, which means the issue has not been diagnosed on all needed versions. If there is, the pull request is blocked and not able to be merged. So in order to merge a bugfix pull request into master branch, every other effective version needs to first be diagnosed.

The final workflow is:

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW25ldyBidWcgaXNzdWVdIC0tPiBCKGF1dG8gYWRkIHR5cGUvYnVnIGxhYmVsKVxuICAgIEIgLS0-IEModHJpYWdlciBhZGQgc2V2ZXJpdHkveHggbGFiZWwpXG4gICAgQyAtLT4gRHtpZiBpdCdzIHNldmVyaXR5L2NyaXRpY2FsIG9yIHNldmVyaXR5L21ham9yfVxuICAgIEQgLS0-IHxZZXN8IEUoYm90IGFkZHMgbWF5LWFmZmVjdC14LnggbGFiZWxzKVxuICAgIEQgLS0-IHxOb3wgSFxuICAgIEUgLS0-IEYodHJpYWdlcnMgZGlhZ25vc2UgZWFjaCB2ZXJzaW9uIGFuZCBjaGFuZ2UgbWF5LWFmZmVjdC14LnggbGFiZWwgdG8gYWZmZWN0cy14LnggbGFiZWwpXG4gICAgRiAtLT4gRyhib3QgY3JlYXRlcyBjaGVycnktcGljayBwdWxsIHJlcXVlc3RzIGFjY29yZGluZyB0byBhZmZlY3RzLXgueCBsYWJlbHMpXG4gICAgRyAtLT4gSFtlbmRdIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOmZhbHNlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)](https://mermaid-js.github.io/mermaid-live-editor/edit#eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW25ldyBidWcgaXNzdWVdIC0tPiBCKGF1dG8gYWRkIHR5cGUvYnVnIGxhYmVsKVxuICAgIEIgLS0-IEModHJpYWdlciBhZGQgc2V2ZXJpdHkveHggbGFiZWwpXG4gICAgQyAtLT4gRHtpZiBpdCdzIHNldmVyaXR5L2NyaXRpY2FsIG9yIHNldmVyaXR5L21ham9yfVxuICAgIEQgLS0-IHxZZXN8IEUoYm90IGFkZHMgbWF5LWFmZmVjdC14LnggbGFiZWxzKVxuICAgIEQgLS0-IHxOb3wgSFxuICAgIEUgLS0-IEYodHJpYWdlcnMgZGlhZ25vc2UgZWFjaCB2ZXJzaW9uIGFuZCBjaGFuZ2UgbWF5LWFmZmVjdC14LnggbGFiZWwgdG8gYWZmZWN0cy14LnggbGFiZWwpXG4gICAgRiAtLT4gRyhib3QgY3JlYXRlcyBjaGVycnktcGljayBwdWxsIHJlcXVlc3RzIGFjY29yZGluZyB0byBhZmZlY3RzLXgueCBsYWJlbHMpXG4gICAgRyAtLT4gSFtlbmRdIiwibWVybWFpZCI6IntcbiAgXCJ0aGVtZVwiOiBcImRlZmF1bHRcIlxufSIsInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjpmYWxzZSwidXBkYXRlRGlhZ3JhbSI6ZmFsc2V9)

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW21lcmdlIHB1bGwgcmVxdWVzdF0gLS0-IEJ7aGFzIGNvcnJlc3BvbmRpbmcgaXNzdWV9XG4gICAgQiAtLT4gfFllc3wgQ3tpc3N1ZSBpcyBvZiB0eXBlL2J1ZyBhbmQgc2V2ZXJpdHkvY3JpdGljYWwgb3Igc2V2ZXJpdHkvbWFqb3J9XG4gICAgQiAtLT4gfE5vfCBEW2ZvcmJpZCB0byBtZXJnZV1cbiAgICBDIC0tPiB8WWVzfCBFe2hhcyBhbnkgbWF5LWFmZmVjdC14LnggbGFiZWx9XG4gICAgQyAtLT4gfE5vfCBGXG4gICAgRSAtLT4gfFllc3wgRFxuICAgIEUgLS0-IHxOb3wgRlttZXJnZV0iLCJtZXJtYWlkIjp7InRoZW1lIjoiZGVmYXVsdCJ9LCJ1cGRhdGVFZGl0b3IiOmZhbHNlLCJhdXRvU3luYyI6ZmFsc2UsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit#eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW21lcmdlIHB1bGwgcmVxdWVzdF0gLS0-IEJ7aGFzIGNvcnJlc3BvbmRpbmcgaXNzdWV9XG4gICAgQiAtLT4gfFllc3wgQ3tpc3N1ZSBpcyBvZiB0eXBlL2J1ZyBhbmQgc2V2ZXJpdHkvY3JpdGljYWwgb3Igc2V2ZXJpdHkvbWFqb3J9XG4gICAgQiAtLT4gfE5vfCBEW2ZvcmJpZCB0byBtZXJnZV1cbiAgICBDIC0tPiB8WWVzfCBFe2hhcyBhbnkgbWF5LWFmZmVjdC14LnggbGFiZWx9XG4gICAgQyAtLT4gfE5vfCBGXG4gICAgRSAtLT4gfFllc3wgRFxuICAgIEUgLS0-IHxOb3wgRlttZXJnZV0iLCJtZXJtYWlkIjoie1xuICBcInRoZW1lXCI6IFwiZGVmYXVsdFwiXG59IiwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOmZhbHNlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)

By the way, there is also a `needs-more-info` label. Every time an issue is closed the bot will add it and leave a comment to remind the creators and reviewers to do cherrypick. But actually it doesn't do much help and becomes a little bit cumbersome. Currently there are more than 600 issue with the label not yet handled. And its name is confusing, some developers use it to ask for more information. After the new workflow, we don't need it and will delete it.

## Affected Repositories

* tidb
* ticdc
* tidb-tools
* tidb-binlog
* ng-monitoring

## Deadline

The vote will be open for at least 144 hours unless there is an objection or not enough votes.

We're looking for at least 2 votes from tidb-maintainers, and 2 votes from migration-maintainers.
