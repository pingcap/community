# DM HA Working Group

## Goals
Currently,  DM cluster has only one DM-master process. When the DM-master process is abnormal, task management, cluster management, and shard DDL coordination can no longer be performed. Also, the current set of DM cluster has only one DM-worker process for each upstream MySQL/MariaDB instance, when the DM-worker process is abnormal, data migration related to the upstream MySQL/MariaDB instance is interrupted. In addition, for some metadata (task configuration, cluster version, etc.), there is only one copy of data locally on the DM-worker node. When the local data copy is damaged, the data migration task is difficult to recover. We need to improve the high-availability and usability of DM to solve the actual pain points of users.
* Make DM become HA, which includes making it tolerant to process crashes, machine failures, network partitioning and more.
* Combine DM-master into DM-worker as one binary file.

## Work and Meeting

* Regular Working Group Meeting: 4pm on every Tuesday at GMT+8 (biweekly).
* Meeting Zoom: [https://zoom.com.cn/j/5446052091](https://zoom.com.cn/j/5446052091)
* Progress: [https://github.com/pingcap/dm/issues/406](https://github.com/pingcap/dm/issues/406)
* [Meeting Notes](https://docs.google.com/document/d/1YgmCs9DOIbz8o3sX85S2TjA1-BW32xsxrm47_K52fYU/edit?usp=sharing)

## Mentors

* [nolouch](https://github.com/nolouch), [@PingCAP](https://github.com/pingcap)

## Members

* [Little-Wallace](https://github.com/Little-Wallace), [@SEU](https://github.com/Little-Wallace)

## Contact

* Slack: channel **#wg-dm-ha** in the
  [tidbcommunity](https://pingcap.com/tidbslack) slack workspace.