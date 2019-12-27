# PITR Working Group

PITR (Point in Time Recovery) is an eco-system tool for TiDB Binlog. By preprocessing the incremental backup file of TiDB, PITR merges the changes of the same row of data to produce a new, lighter incremental backup file. This greatly reduces the time consumed for incremental backup recovery and achieves a fast point in time recovery.

## Meetings

* Meeting notes: https://docs.google.com/document/d/1xbRPCBtY33xoWsg8uT4MFwEbhu6bvZPL2827fLY2_xQ/edit

## Organizers

* WangXiangUSTC (**[@wangxiangustc](https://github.com/WangXiangUSTC)**), PingCAP
* HuaiyuXu (**[@huaiyuxu](https://github.com/XuHuaiyu)**), PingCAP
* AilinKid (**[@AilinKid](https://github.com/AilinKid)**), PingCAP
* tsthght(**[@tsthght](https://github.com/tsthght)**), MeiTuan

## Contact

- Slack: [#wg-pitr](https://tidbcommunity.slack.com/archives/CRH5594F8)
- [Open Community Issues/PRs](https://github.com/pingcap/community/issues/126)

## Published Documents

* Design Doc: [中文 (Chinese)](https://github.com/lvleiice/Better-PITR/blob/master/README.md)
