# Timeline Tracing Working Group

## Goals

This working group aims to implement the Timeline Tracing feature in TiDB, TiKV, TiDB Dashboard and other related components.

Timeline Tracing adds a new tracing layer to both TiDB and TiKV. The existing low-performance tracing facility in TiDB will be dropped. TiKV traces the time of each specific event in the request and packs them along with the response. Timeline Tracing should be enabled by default and has <1% performance impact.

Although the implementation involves with multiple components, end-users will mostly interact with TiDB Dashboard to utilize this feature. A sample UI looks like the tracing UI provided by DataDog:

![DataDog Tracing UI](https://user-images.githubusercontent.com/1916485/83112013-17367580-a0f8-11ea-8875-27ee90a68ad0.png)

You can track work items and see more details in the [Timeline Tracing project](https://github.com/pingcap-incubator/tidb-dashboard/projects/23).

## Organizers

- [zhongzc](https://github.com/zhongzc), [PingCAP](https://github.com/pingcap)
- [qw4990](https://github.com/qw4990), [PingCAP](https://github.com/pingcap)
- [breeswish](https://github.com/breeswish), [PingCAP](https://github.com/pingcap)

## Members

You can join the Slack channel to see all members. See [Contact](#contact) section.

## Contact

- Slack: [#wg-tracing](https://slack.tidb.io/invite?team=tidb-community&channel=wg-tracing&ref=github_wg)
