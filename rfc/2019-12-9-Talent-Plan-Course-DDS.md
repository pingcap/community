# Proposal: Talent Plan Courses - Distributed Database System

- Author(s): [Ling Jin](https://github.com/JinLingChristoher)
- Last updated: 2019-12-11
- Discussion at: [Incubating Program: Talent Plan Courses - Distributed Database System](https://github.com/pingcap/community/issues/141)

## Abstract

The proposal aims at creating a distributed database system course to help more people to have a touch of TiDB. After finishing the course materials, participants should have knowledge preparation for building a complex distributed system software and gain practical experience with it.

## Proposal

The course consists of two parts - reading materials and programming assignments.

### Reading Materials

Reading materials can be collected from textbooks, slides, and notes from other related courses. The following is a list of reading materials, covering database system and distributed system.

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

Many important topics have already been covered in the above materials, based on which course developers design the course content. The final content should be concrete and easy to understand, and, preferably, related to TiDB.

### Programming Assignments

For programming assignments, we will be constructing a distributed database system framework. Even though there are many well-organized programming assignments about the database system and the distributed system,  they are not strongly connected. The languages they use, C++ or Java, are not friendly to young people. Therefore, we use Golang to build the framework, which is more user-friendly and also the primary language used in the TiDB ecosystem. The idea of the project will be borrowed from course materials listed below:

- [CMU Bustub](https://github.com/cmu-db/bustub)
- [UCB moocbase](https://github.com/berkeley-cs186/fa19-moocbase)
- [MIT SimpleDB](https://github.com/MIT-DB-Class/simple-db-hw)
- [MIT SimpleKV](https://github.com/MIT-DB-Class/simpleKV)

## Rationale

For TiDB Community, an educational distributed database system project in Golang for the novice is necessary. The friendly and organized course content will serve as an invitation for more potential community members to TiDB.

## Compatibility

N/A

## Implementation

To implement it, we need the following main steps:

- Discuss the topics to be covered in reading materials and programming assignments design.
- Build the architecture of the new TiDB for education. Experienced engineers from TiDB or TiKV are significant help.
- Call for community participants to join us, build the course together.
- Divide the course topics, and assign them to course developers.

## Open issues (if applicable)
