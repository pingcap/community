# Proposal: Migrate Discourse's db from PostgreSQL to TiDB

- Author(s): EE-Team
- Last updated:  Nov 19, 2019
- Discussion at: https://github.com/pingcap-incubator/discourse/issues/

## Abstract

The proposal aims at:

1. **Eating our own dog food**;
2. Connecting TiDB Community with Discourse Community and Ruby On Rails Community;

## Background

The TiDB User Group Website: [AskTUG](https://asktug.com) is running on Discourse, and Discourse is running on PostgreSQL. We want to migrate it to TiDB. Then we can frequently test TiDB before each release.

## Proposal

We will make these changes:

1. Make most SQL statements of Discourse run on MySQL;
2. Add new elastic search  componentinstead of PostgreSQL's full-text search;
3. Migrate from MySQL to TiDB, and fix potential compatibility problems;

## Rationale

Translate SQL statements from PostgreSQL to MySQL within Rails's ORM

## Compatibility

There is no compatibility issues to TiDB.

## Implementation

1. Migrate Discourse from PostgreSQL to MySQL. @[hooopo](https://github.com/hooopo) till Dec 5, 2019
2. Migrate Discourse from MySQL to TiDB, @[wd0517](https://github.com/wd0517) till Dec 15, 2019

## Open issues (if applicable)

No issues.
