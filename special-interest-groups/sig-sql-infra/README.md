# SQL-Infra Special Interest Group(SQL-Infra SIG)

SQL-Infra SIG is generally an interest group that focuses on:

* SQL statement parsing(the ‘pingcap/parser’ repo)
* Management of metadata in SQL layer(component/DDL, component/owner, component/infoschema)
* Sessions(component/session, component/mysql-protocol)
* Server(component/server)
* Privileges(component/privilege)
* Plugins(component/plugin)
* Config & variables(component/config)
* Charset & collation (component/charset)

## Roles and Organization Management

See [SIG SQL-Infra Roles and Organization Management](./roles-and-organization-management.md)

## Members

See [SIG SQL-Infra Member List](https://pingcap.com/developer/sig/sql-infra)

## Meetings

* Regular Working Group Meeting: 11:00 AM, CST(03:00 UTC) Friday every week. [Convert to your timezone](http://www.thetimezoneconverter.com).
* The meeting zoom link will be shared in the slack channel.

## Contact

* Slack: channel #sig-sql-infra in the [tidbcommunity](https://pingcap.com/tidbslack) slack workspace, you can join this channel through [this invitation link](https://slack.tidb.io/invite?team=tidb-community&channel=sig-sql-infra&ref=pingcap-community).

## Repositories and Projects

* [tidb](https://github.com/pingcap/tidb)
    * [SIG SQL-Infra Kanban](https://github.com/pingcap/tidb/projects/40)
* [parser](https://github.com/pingcap/parser/issues)

## Learning Materials

* Basic Theory Related Articles
    * DDL Related Articles: [Online, Asynchronous Schema Change in F1](https://static.googleusercontent.com/media/research.google.com/zh-CN//pubs/archive/41376.pdf), [Deep analysis of Google F1's schema change algorithm(CN)](https://github.com/ngaut/builddatabase/blob/master/f1/schema-change.md)
    * Parser Related Articles: [Bison manual](https://www.gnu.org/software/bison/manual/html_node/index.html), [Compilers: Principles, Techniques, and Tools](https://www.amazon.com/Compilers-Principles-Techniques-Tools-2nd/dp/0321486811v)
* Architecture Related Articles: [TiDB DDL architecture](https://github.com/pingcap/tidb/blob/master/docs/design/2018-10-08-online-DDL.md)
* Source Code Implementation Related Articles: based on the v1.1 [source-code](https://github.com/pingcap/tidb/tree/source-code) version of the [DDL source code reading(CN)](https://pingcap.com/blog-cn/tidb-source-code-reading-17/) and [Parser implementation(CN)](https://pingcap.com/blog-cn/tidb-source-code-reading-5/)

## Code Locations

* The [parser repo](https://github.com/pingcap/parser).
* The [ddl package](https://github.com/pingcap/tidb/tree/master/ddl) in the tidb repo.
* The [domain package](https://github.com/pingcap/tidb/tree/master/domain) in the tidb repo.
* The [infoschema package](https://github.com/pingcap/tidb/tree/master/infoschema) in the tidb repo.
* The [session package](https://github.com/pingcap/tidb/tree/master/session) in the tidb repo.
* The [server package](https://github.com/pingcap/tidb/tree/master/server) in the tidb repo.
* The [privilege package](https://github.com/pingcap/tidb/tree/master/privilege) in the tidb repo.
* The [plugin package](https://github.com/pingcap/tidb/tree/master/plugin) in the tidb repo.
* The [config package](https://github.com/pingcap/tidb/tree/master/config) in the tidb repo.
* The [meta package](https://github.com/pingcap/tidb/tree/master/meta) in the tidb repo.
* The [owner package](https://github.com/pingcap/tidb/tree/master/owner) in the tidb repo.
* Other codes that affect the correctness, performance of the TiDB. 

## Pickable issues

* [issues](https://github.com/pingcap/tidb/issues?q=is%3Aissue+is%3Aopen+label%3Asig%2FDDL)

### Issues for newbie

* [issues](https://github.com/pingcap/tidb/issues?q=is%3Aissue+is%3Aopen+label%3Asig%2FDDL+label%3Adifficulty%2Feasy)
