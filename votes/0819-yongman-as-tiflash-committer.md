# A Vote for yongman as TiFlash Committer

## Proposal

[@yongman](https://github.com/yongman) has been working on the columnar data source in TiDB X for more than three years. This cloud-native architecture helps TiFlash provide a low-cost, high-performance columnar storage solution, while enabling rapid scaling to handle sudden spikes in analytics and write traffic. It also avoids the region fragmentation and scheduling pressure on PD (Placement Driver) that were caused by the previous placement-rule-based approach.

Most of [@yongman](https://github.com/yongman)'s work was contributed to the TiDB X storage engine, so his direct changes in `pingcap/tiflash` were relatively small. In this architecture, TiFlash acts as a compute engine that reads data from the S3-backed storage engine and performs MPP computation. Recently, the columnar data source has been verified in production environments and merged into `pingcap/tiflash`.

The following lists the details of his contributions:

* [Authored pull requests in TiFlash](https://github.com/pingcap/tiflash/pulls?q=is%3Apr+author%3Ayongman+)

I (@JaySon-Huang) hereby nominate @yongman as TiFlash committer and call for a vote. Thank you for your attention.

## Deadline

The vote will be open for at least 6 days unless there is an objection or not enough votes.

## Scope

* Team TiFlash

## Result

See also https://github.com/pingcap/community/pull/819.
