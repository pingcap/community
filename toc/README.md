# TiDB Community Technical Oversight Committee (TOC)

The TiDB Community TOC serves as the main bridge and channel for coordinating and information sharing across companies and organizations. It is the coordination center for solving problems in terms of resource mobilization, technical research and development direction in the current community and cooperative projects.

## Responsibilities:

- Partner cooperation project progress monitoring and guidance.
- Supervision and guidance on the progress of the projects in TiDB ecosystem.
- Participate in technical route discussion and decision-making, such as roadmap formulation, etc.
- Open source collaboration process discussion and decision.
- Discussion and decision-making of community-related activities.

## Membership

TOC members consist of representatives from:

- PingCAP, who is the founder of TiDB.
- Community partners who have signed a cooperation agreement with PingCAP.
- Community projects.

Now the community projects include [TiDB](https://github.com/pingcap/tidb), [TiKV](https://github.com/tikv/tikv) and [Chaos Mesh®](https://github.com/chaos-mesh/chaos-mesh).

## TOC Meeting

The TOC monthly online meeting is held at 8 pm (UTC+08:00) on the last Friday of each month. Meeting invitations will be sent through the TOC mail group: https://lists.tidb.io/g/toc. 

If TOC members cannot attend the monthly meeting for special reasons, they must ask for leave in advance.

[TOC Meeting minutes](https://docs.google.com/document/d/1m9Uk-JkqO_KaSZaLjL47hW1L_2Bp-yW1StCuGQzOFTk/edit)

## Members

The current list of TOC members is as below.

| Name                                   | GitHub                                                  | Affiliation | Membership   |
| :------------------------------------- | ------------------------------------------------------- | ----------- | :----------- |
| Xiaoguang Sun sunxiaoguang@pingcap.com | [sunxiaoguang](https://github.com/sunxiaoguang)         | PingCAP     | TOC Chairman |
| Siddon Tang tl@pingcap.com             | [siddontang](https://github.com/siddontang)             | PingCAP     | TOC Member   |
| Chengxuan Xu bigpyer@gmail.com         | [niubell](https://github.com/niubell)                   | PingCAP     | TOC Member   |
| Yuqing Bai baiyuqing@zhihu.com         | [baiyuqing](https://github.com/baiyuqing)               | PingCAP     | TOC Member   |
| Jian Zhang zhangjian@pingcap.com       | [zz-jason](https://github.com/zz-jason)                 | TiDB        | TOC Member   |
| Jinpeng Zhang zhangjinpeng@pingcap.com | [zhangjinpeng1987](https://github.com/zhangjinpeng1987) | TiKV        | TOC Member   |
| Chengwen Yin cwen@pingcap.com          | [cwen0](https://github.com/cwen0)                       | Chaos Mesh® | TOC Member   |
| Yuxing Zhou z@pingcap.com              | [coocood](https://github.com/coocood)                   | PingCAP     | TOC Member   |
| Kangli Mao mkl@pingcap.com             | [tiancaiamao](https://github.com/tiancaiamao)           | PingCAP     | TOC Member   |
| Wei Yao wink@pingcap.com               | [winkyao](https://github.com/winkyao)                   | PingCAP     | TOC Member   |

### Emeritus Members

TOC members has no concept of tenure, but will retire under the following circumstances:

- Actively choose to retire due to personal reasons.
- When a TOC member can no longer participate in TOC affairs on behalf of this organization or project due to leaving or withdrawing from the organization or project they belong to.
- The organization the TOC member belongs to no longer exists.

Retirees will become emeritus members of TOC. The list of emeritus members is as below.

- Xianlin Chen，Head of Technology Hub at PalFish
- Qiang Zhou，Chaos Mesh® Maintainer

### Nomination

All members of TOC have the right to nominate representative as new TOC member. The nominee is required to meet the following standards:

- The nominee must have enough energy to invest in TOC affairs, such as participating in TOC discussions and decision making, and participating in TOC monthly meetings.
- The nominee must have a deep understanding of TiDB or other projects in TiDB ecosystem.
- The nominee must belong to a certain organization or project of TOC membership and be able to participate in TOC on behalf of his/her organization.
- The nominee must put the community first and be able to balance the relationship between the interests of the organization and the interests of the community.

### Vote for election

After nomination, the existing TOC members will vote for election and decide by lazy consensus.

## Decision Making

Within the community, different types of decisions require different forms of approval. For example, the previous section describes several decisions which require 'lazy consensus' approval. This section defines how voting is performed, the types of approvals, and which types of decision require which type of approval.

### Voting

Decisions regarding the community are made by votes on [the community repository](https://github.com/pingcap/community). Votes are clearly indicated by a pull request adding an entry under [votes](/votes/README.md) folder. Votes may contain multiple items for approval and these should be clearly separated. Voting is carried out by replying to the vote pull request.

Voting must be open for at least 2 days. The deadline should be clearly stated in the call to vote.

Voting may take three flavors:

* **+1**: 'Yes,' 'Agree,' or 'the action should be performed.'
* **0**: Neutral about the proposed action (or mildly negative but not enough so to want to block it).
* **-1**: This is a negative vote. On issues where consensus is required, this vote counts as a veto. All vetoes must contain an explanation of why the veto is appropriate. Vetoes with no explanation are void. It may also be appropriate for a -1 vote to include an alternative course of action.

All participants in the TiDB community are encouraged to show their agreement with or against a particular action by voting. But only the votes of TOC member are binding. Non-binding votes are still useful for those with binding votes to understand the perception of an action in the wider community.

Only active (i.e. non-emeritus) TOC members have binding votes.

### Approvals

* **Lazy Consensus**: A proposal is considered supported by the community as long as nobody objects. This is the default decision-making mechanism in TiDB Community, inspired by [Apache Lazy Consensus](https://www.apache.org/foundation/glossary.html#LazyConsensus). In case there is objection, and no consensus can be found, there will be a majority vote.
* **Majority Vote**: A majority vote must be called when there is no lazy consensus, in a separate pull request. It requires a 2/3 majority to pass. If not until the voting deadline, there will be a meeting to discuss the topic, and another majority vote will be called.

### Actions

| Actions               | Description                            | Approval       | Binding Voters | Minimum Length (days) |
| :-------------------- | :------------------------------------- | :------------- | :------------- | :-------------------- |
| New TOC Member        | When a new TOC member is nominated.    | Lazy Consensus | TOC Members    | 6                     |
| New Incubator Project | When a project applies for incubation. | Lazy Consensus | TOC Members    | 6                     |
