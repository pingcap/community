# Proposal: Talent Plan Courses - Distributed Database System

- Author(s): [Ling Jin](https://github.com/JinLingChristoher)
- Last updated: 2019-12-11
- Discussion at: [Incubating Program: Talent Plan Courses - Distributed Database System](https://github.com/pingcap/community/issues/141)

## Abstract

The proposal aims at create a distributed database system course to help more people learn the mentioned topic and also have a touch of TiDB. Participants of the course should be able to pull requests to TiDB related projects after consumed the course materials.

## Background

For people without experience in distributed system or database system, it is quite hard to understand TiDB related projects. Since we hope more young blood can embrace the TiDb ecosystem, we think a distributed database system course is necessary. The courses will be consist of reading supplies and programming assignments. As there are already many accessible materials online, we can develop the content of the course by learning from them. We think the voice from the different populations is important for the success of the goal, especially college students, so we hope they can join us to make this happen.

## Proposal

The course is consists of two parts, reading materials and programming assignments. The reading materials can be collected from textbooks, slides, and notes from other related courses.

### Reading Materials

The list of reference for reading materials, both for database system and distributed system:

- [Designing Data-Intensive Application](https://dataintensive.net/)
- [Reading in Database system, 5th Edition](http://www.redbook.io/)
- [Architecture of a Database system](http://db.cs.berkeley.edu/papers/fntdb07-architecture.pdf)
- [Database System Concept](https://www.db-book.com/db6/index.html)
- [Database System Implementation](http://infolab.stanford.edu/~ullman/dbsi.html)
- [CMU cs15445 Database System](https://15445.courses.cs.cmu.edu/fall2019/schedule.html)
- [CMU cs15721 Advanced Database System](https://15721.courses.cs.cmu.edu/spring2019/schedule.html)
- [UCB cs186 course materials](https://cs186berkeley.net/)
- [MIT 6.830 course materials](http://db.csail.mit.edu/6.830/)
- [Stanford cs245 course materials](http://web.stanford.edu/class/cs245/)
- [MIT 6.824 Distributed Systems](https://pdos.csail.mit.edu/6.824/)
- [Princeton COS418 Distributed Systems](https://www.cs.princeton.edu/courses/archive/fall19/cos418/)
- [Princeton COS316 Principle of Computer System Design](https://www.cs.princeton.edu/courses/archive/fall19/cos316/)
- [UCB Operating Systems and System Programming](https://cs162.eecs.berkeley.edu/)
- [Distributed System 3rd Edition](https://www.distributed-systems.net/)

Many important topics have already been covered in the above. Course development participants are required to reorganize the content into slides or notes, we hope the final content should be concrete and easy to understand, related to TiDB is preferred.

### Programming Assignments

For programming assignments, a distributed database system framework will be constructed. Even though there are many programming scaffolds about the database system and the distributed system, but they are not strongly connected, also C++ and Java are not easy to be mastered for young students. The new framework will be built with Golang, which is simpler and also the horsepower of the TiDB ecosystem. The content of the project will be borrowed from course materials listed below:

- [CMU Bustub](https://github.com/cmu-db/bustub)
- [UCB moocbase](https://github.com/berkeley-cs186/fa19-moocbase)
- [MIT SimpleDB](https://github.com/MIT-DB-Class/simple-db-hw)
- [MIT SimpleKV](https://github.com/MIT-DB-Class/simpleKV)

## Rationale

For TiDB Community, an educational distributed database system project in Golang and readings for novice are necessary, they are invitation cards of welcome young people to TiDB. We can open the door of the campus, and push computer system course education in universities forward.

## Compatibility

TiDB will not be affected by this project.

## Implementation

To implement it, we need the following main steps:

- Discussion the topics must be covered in reading materials, and contents of programming assignments.
- Build the architecture of the new TiDB for education.Experienced engineers from TiDB or TiKV are significant help.
- Call for community participants to join us, build the course together.
- Divide the course contents into multiple topics, each one will be handled by course development participants.

## Open issues (if applicable)
