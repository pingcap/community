# Teams

This folder holds all teams in the TiDB projects. This document defines governance policies of the teams.

Teams are persistent open groups that focus on a part of the TiDB projects. A team has its reviewer, committer and maintainer, and owns one or more repositories. Team level decision making comes from its maintainers.

The [Technical Oversight Committee (TOC)](/toc/README.md) is in charge of team creation and retirement, and arbitrates divergence between team. But TOC members don't participant team level decision making directly.

## Roles and Responsibilities

### Reviewers

Reviewers are individuals who actively make contribution and are willing to participate in the code review of new contributions. We identify reviewers from active contributors. The committers should explicitly solicit reviews from reviewers. High-quality code reviews prevent technical debt for long-term and are crucial to the success of the project. A pull request to the project has to be reviewed by at least one reviewer in order to be merged.

Review access is by invitation only and must be approved by consensus of the maintainers. A reviewer is considered emeritus by their own declaration. An emeritus reviewer may request reinstatement of review access from the maintainers, which will be sufficient to restore him or her to active reviewer status.

Review access can be revoked by consensus by the maintainers.

### Committers

Committers are individuals who are granted the write access to the repositories belong to the team. A committer is usually responsible for a certain area or several areas of the code where they oversee the code review process. The area of contribution can take all forms, including code contributions and code reviews, documents, education, and outreach. Committers are essential for a high quality and healthy project.

Commit access is by invitation only and must be approved by consensus of the maintainers. A committer is considered emeritus by their own declaration. An emeritus committer may request reinstatement of commit access from the maintainers, which will be sufficient to restore him or her to active committer status.

Commit access can be revoked by consensus by the maintainers.

### Maintainers

The maintainers consist group of active committers that moderate the discussion, manage the project release, and proposes new committers or maintainers. Potential candidates are usually proposed via an internal discussion among maintainers, followed by a consensus approval, i.e. a concrete number of approvals, and no vetoes. Any veto must be accompanied by reasoning. Maintainers should serve the community by upholding the community practices and guidelines TiDB a better community for everyone. Maintainers should nominate new reviewer, committers and maintainers, and should also strive to only nominate new candidates outside of their own organization.

Membership of the maintainers is by invitation only and must be approved by a consensus of the maintainers. A maintainer is considered emeritus by their own declaration. An emeritus member may request reinstatement to the maintainers, which will be sufficient to restore him or her to active maintainers.

Membership of the maintainers can be revoked by a consensus vote of all the maintainers other than the member in question.

## Decision Making

Within the teams, different types of decisions require different forms of approval. For example, the previous section describes several decisions which require 'consensus' approval. This section defines how voting is performed, the types of approvals, and which types of decision require which type of approval.

### Voting

Decisions regarding the project are made by votes on [the community repository](https://github.com/pingcap/community). Votes are clearly indicated by a pull request adding an entry under [votes](/votes/README.md) folder. Votes may contain multiple items for approval and these should be clearly separated. Voting is carried out by replying to the vote pull request. Voting may take three flavors

* **+1**: 'Yes,' 'Agree,' or 'the action should be performed.'
* **0**: Neutral about the proposed action (or mildly negative but not enough so to want to block it).
* **-1**: This is a negative vote. On issues where consensus is required, this vote counts as a veto. All vetoes must contain an explanation of why the veto is appropriate. Vetoes with no explanation are void. It may also be appropriate for a -1 vote to include an alternative course of action.

All participants in the TiDB community are encouraged to show their agreement with or against a particular action by voting. For team decisions, only the votes of active team maintainers are binding (no matter whether he/she is also the vote proposer or not). Non-binding votes are still useful for those with binding votes to understand the perception of an action in the wider community.

Only active (i.e. non-emeritus) maintainers have binding votes.

### Approvals

These are three types of approvals that can be sought. Different actions require different types of approvals.

* **Consensus**: Consensus requires 2 binding +1 votes and no binding vetoes.
* **Lazy Majority**: A lazy majority vote requires 2 binding +1 votes and more binding +1 votes than -1 votes.
* **2/3 Majority**: Some actions require a 2/3 majority to pass. Such actions typically affect the foundation of the project (e.g. adopting a new codebase). The higher threshold is designed to ensure such changes are strongly supported. To pass this vote requires at least 2/3 of binding vote holders to vote +1.

> In order to address the case of insufficient active binding voters to reach 2/3 majority, one can follow the process below to exclude a binding vote from the counting of this particular voting thread. 
> 
> 1. Wait until the minimum length of the voting passes.
> 2. Publicly reach out via mentioned to the remaining binding voters in the voting pull request for at least 2 attempts with at least 7 days between two attempts.
> 3. If the binding voter being contacted still failed to respond after all the attempts, the binding voter will be considered as inactive for the purpose of this particular voting.

### Vetoes

A valid, binding veto cannot be overruled. If a veto is cast, it must be accompanied by a valid reason explaining the reasons for the veto. The validity of a veto, if challenged, can be confirmed by anyone who has a binding vote. This does not necessarily signify agreement with the veto - merely that the veto is valid.

If you disagree with a valid veto, you must lobby the person casting the veto to withdraw their veto. If a veto is not withdrawn, the action that has been vetoed must be reversed in a timely manner.

### Actions

| Actions            | Description                                                                               | Approval      | Binding Voters     | Minimum Length (days) |
| :----------------- | :---------------------------------------------------------------------------------------- | :------------ | :----------------- | :-------------------- |
| New Reviewer       | When a new reviewer is proposed for the team, should be only nominated by a committer.    | Lazy Majority | Active maintainers | 3                     |
| New Committer      | When a new committer is proposed for the team, should be only nominated by a maintainer.  | Consensus     | Active maintainers | 6                     |
| New Maintainer     | When a new maintainer is proposed for the team, should be only nominated by a maintainer. | Consensus     | Active maintainers | 6                     |
| Reviewer Removal   | When removal of review privileges is sought.                                              | Consensus     | Active maintainers | 6                     |
| Committer Removal  | When removal of commit privileges is sought.                                              | Consensus     | Active maintainers | 6                     |
| Maintainer Removal | When removal of maintain privileges is sought.                                            | Consensus     | Active maintainers | 6                     |

Roles are not exchangeable between teams since each team might has its own management rules. But it is allowed for a team member to self-nominate him/herself for another team to reduce some roundtrip communication. 
