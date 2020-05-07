# DM-Syncer Working Group

We used `Syncer` to synchronize binlog from MySQL to TiDB Cluster. After **Data Migrants**(abbr. DM) which is a stronger and stabler fixture has been developed , we rarely maintain `Syncer`.
But some users are still using old version of `Syncer`. For smoothly upgrading, it's better to compile binlog repliaction unit in DM indenpendently and be compitable with old config format as possible as we can.

## Work And Meeting

- Regular Working Group Meeting: 4pm on every Tuesday at GMT+8 (biweekly).
- [#meeting notes](https://docs.google.com/document/d/1OZz71Shq9kuS5zoje-cCrLahtZV2eHcntxs0MOiFuGA/edit?usp=sharing)

## Organizaers

* Wang Xiang (**[@WangXiangUSTC](https://github.com/WangXiangUSTC)**), PingCAP
* Han Fei (**[@hanfei1991](https://github.com/hanfei1991)**), PingCAP
* Sun Ruoxi (**[@zanmato1984](https://github.com/zanmato1984)**), PingCAP

## Contact
- Slack: [#dm-wg](https://tidbcommunity.slack.com/archives/CRGEV62C9)

## Published Documents

- legacy syncer doc [#doc](https://pingcap.com/docs-cn/stable/reference/tools/syncer/)

### RFC/Proposal

- Github Issue [#issue](https://github.com/pingcap/dm/issues/409)
