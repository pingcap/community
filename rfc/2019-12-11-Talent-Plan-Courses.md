# Proposal: Talent Plan Courses

- Author(s): [Ling Jin](https://github.com/JinLingChristoher)
- Last updated: 2020-01-13
- Discussion at: [Incubating Program: Talent Plan Courses](https://github.com/pingcap/community/issues/130)

## Background

Talent Plan is a study project developed by PingCAP, which aims to help people get in touch with TiDB and TiKV. At the moment, only two study roadmaps were provided, and the content is not well-designed. So we propose Talent Plan Courses, a new version of the study project that contains more topics and contents.

## Course Framework

![course map](../media/rfc-talent-plan-courses.png)

The picture above shows the latest framework of Talent Plan Courses. In addition to TiDB related learning materials, lots of other sections also will be provided. Following are the details:

- Open Source Cooperation

  Open source spirit is one of the cores of the TiDB Community. We hope more people embrace open source,so courses about it is a significantly important part of this course system. At current, multiple courses are on the list:

  - Introduction to OSS
    To let people know about open-source spirit, basic knowledge such as the mean of open-source spirit and its history will be covered.

  - How to use Git&Github
    Git is a version control software that is broadly used to accelerate open source development, and Github is a popular website for people around the world to participate in open source project development which based on Git. After taking this course, participants should know the usage of Git and Github.

  - Open Source Practice in TiDB
    TiDB ecosystem is made up of multiple projects and all open-sourced on Github. For people who want to contribute to TiDB, open-source practice in TiDB would be helpful for them.

- Programming Language

  For anyone who wants to participate in an open-source project, knows the project's development programming language is the most basic requirement. We will deliver some courses about programming language to help participant learns it quickly.

  - Golang
    The Go programming language is heavily used in industry, also the TiDB ecosystem. We advise everyone to learn a bit about it:

  - [A Tour Of Golang](https://tour.golang.org/) is recommanded since it's a great official tutorial for the newbie to learn the basic language features.
  - [The Go Programming Language](http://www.gopl.io/) is recommended as a reference book for people want to learn the language in detail.
  - [Talent Plan MapReduce](https://github.com/pingcap/talent-plan/tree/master/tidb/mapreduce) will be a great tool for participants to judge their learning outcomes.

  - Rust
    The Rust programming language is becoming more and more popular since it has many advanced features. For people interested in TiKV which is based on rust, we recommend the following materials:

  - [Learn Rust](https://www.rust-lang.org/learn) is official study materials, it contains a book, an interactive practice assignment, and some code examples. We believe anyone interested in the Rust programming language can benefit from it.
  - [Practical Networked Application in Rust](https://github.com/pingcap/talent-plan/tree/master/rust) is a programming assignment framework develop by [Brian Anderson](https://github.com/brson), who was a core team member of the rust community. We strongly suggest taking this assignment to consolidate rust programming skills.

  Other programming languages like C++, Java, Python also in the works, as the development of this course system, more concrete contents will be appended.

- Infrastructure System

  - Distributed Relational Database Internals is a course made up of many reading materials and programming assignments. A broad range of topics such as relational algebra, parser, runtime, optimizer, transaction, DDL and more are covered in readings. TinySQL is a simplified version of TiDB, used as the programming assignment framework, which let participants can verify their learning outcomes.
  - Distributed Key-Value Database Internals is a course have the same design structure as the one mentioned above, but about distributed key-value database system. The contents of readings will be like storage engine, data partitioning, replication, consistency, scalability, balance, distributed transactions and more. For programming assignment, TinyKV is a simplified version of TiKV, will be provided to participants to judge their learning outcomes.

  As the development of the course, more concrete content will be proposed in the future. Topics like cloud-native database system and Machine Learning also in the plan.

- Deep Dive Series Readings

  For anyone who wants to get to know more about TiDB related projects, they would benefit a lot by reading Deep Dive into TiDB or Deep Dive into TiKV, which covers related projects in detail. It's worth mentioning that Deep Dive into Cloud TiDB is also in the works. We highly recommend reading these materials to help you be familiar with the TiDB ecosystem.

For participants, they can create their learning path according to individuals conditions. As the development of courses, more topics, and the detailed course contents would be proposed in the future.

## Rationale

There are many open study resources online, we can gather those materials together to make the learning path easier. Furthermore, the courses will be practice-oriented, elaborately designed programming assignments as the core, which can help participants to check their learning outcomes.

## Compatibility

N/A

## Implementation

The implementation of the course requires the following 3 main steps:

- Discuss the overview course framework of the new version.
- Make agreements of the syllabus for each course
- Fill in learning materials and assignments.
- Optimize assignment submission and evaluation.

## Open issues (if applicable)
