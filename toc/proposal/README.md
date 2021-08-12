This folder holds proposals that require TOC members to make decisions. The decision-making process follows the [voting rules](#voting-rules-for-toc) in TiDB community.

# Voting Rules for TOC

This guideline is used for the decision-making process of TOC members in the TiDB community. Refer to Apache's voting rules, decisions are usually made by [lazy consensus](#lazy-consensus). If no consensus can be reached, the matter may be resolved by a majority vote. And potentially highly-controversial matters are recommended to be resolved by a majority vote, too.

## Voting

For all votes, voting must be open for at least 2 days. The deadline should be clearly stated in the call to vote. Votes are clearly indicated by a pull request adding an entry under the proposal folder.

All TOC members have the right to make proposals. Only official members have the right to vote, and each has 1 vote. For public discussions, non-binding votes from the community are also highly appreciated.

### Lazy Consensus

The default decision-making mechanism in TiDB Community is lazy consensus, inspired by [Apache LazyConsensus](https://www.apache.org/foundation/glossary.html#LazyConsensus). This means that any proposal is considered supported by the community as long as nobody objects.

If any eligible voter raises objections, members eligible to vote will work together towards a solution that all involved can accept. This solution is again subject to lazy consensus.

In case no consensus can be found, there will be a majority vote.

### Majority Vote

The majority votes must be called explicitly in a separate pull request. The title of the pr must be prefixed with VOTE. In the body, the call to vote must state the proposal being voted on and the scope of the vote. The proposal that received the most votes in favor will be the result.

The voting result is valid unless at least  2/3 of those eligible to vote participate in the vote. If not until the voting deadline, there will be a meeting to discuss the topic, and another majority vote will be called.
