# Drainer Relay Log Working Group

## Goals

The Drainer Relay Log Working Group aims to implement relay log in Drainer. Drainer persists the binlog locally before writing to the downstream, so even if the upstream cluster is down, Drainer can use local binlog to recover the downstream to a consistent state. You can refer to [tidb-binlog issue/842](https://github.com/pingcap/tidb-binlog/issues/842).

## Work and Meeting

* Regular Working Group Meeting: 12:00, Friday at PT (Pacific Time) (biweekly). [Convert to your timezone](http://www.thetimezoneconverter.com/?t=12:00&tz=PT%20%28Pacific%20Time%29).
* Meeting Zoom: [https://pingcap.zoom.com.cn/j/3326311183](https://pingcap.zoom.com.cn/j/3326311183)
* Progress: [https://github.com/orgs/pingcap/projects/6](https://github.com/orgs/pingcap/projects/6)
* [Meeting Notes](https://docs.google.com/document/d/12zOm2yQbgEIj94RKUMHS_Aa058LKxj8rt81S6OmhIBE)

## Mentors

* [july2993](https://github.com/july2993), [@PingCAP](https://github.com/pingcap)

## Members

* [djshow832](https://github.com/djshow832), [@PingCAP](https://github.com/pingcap)
* [wshwsh12](https://github.com/wshwsh12), [@PingCAP](https://github.com/pingcap)

## Contact

* Slack: channel **#wg-drainer-relay-log** in the
  [tidbcommunity](https://pingcap.com/tidbslack) slack workspace.
