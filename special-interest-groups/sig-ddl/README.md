# DDL Special Interest Group(DDL SIG)

DDL SIG covers the TiDB DDL and parser. Our work includes
* Supporting new features or improving the syntax compatibility between TiDB and MySQL.
* Fixing all kinds of DDL-related and parser-related bugs.
* Improving the performance.

## Learning Materials

* Basic Theory Related Articles
    * DDL Related Articles: [Online, Asynchronous Schema Change in F1](https://static.googleusercontent.com/media/research.google.com/zh-CN//pubs/archive/41376.pdf), [Deep analysis of Google F1's schema change algorithm(CN)](https://github.com/ngaut/builddatabase/blob/master/f1/schema-change.md)
    * Parser Related Articles: [Bison manual](https://www.gnu.org/software/bison/manual/html_node/index.html), [Compilers: Principles, Techniques, and Tools](https://www.amazon.com/Compilers-Principles-Techniques-Tools-2nd/dp/0321486811v)
* Architecture Related Articles: [TiDB DDL architecture](https://github.com/pingcap/tidb/blob/master/docs/design/2018-10-08-online-DDL.md)
* Source Code Implementation Related Articles: based on the v1.1 [source-code](https://github.com/pingcap/tidb/tree/source-code) version of the [DDL source code reading(CN)](https://pingcap.com/blog-cn/tidb-source-code-reading-17/) and [Parser implementation(CN)](https://pingcap.com/blog-cn/tidb-source-code-reading-5/)

## Contributing

Please feel free to explore our [GitHub project](https://github.com/orgs/pingcap/projects/28).

## Roles and Organization Management

See [SIG DDL Roles and Organization Management](./roles-and-organization-management.md)

## Members

See [SIG DDL Member List](membership.md)

## Meetings

* Regular Working Group Meeting: 5:00, Wednesdays at PT (Pacific Time) (biweekly). [Convert to your timezone](http://www.thetimezoneconverter.com/?t=5:00&tz=PT%20%28Pacific%20Time%29).
* Meeting Zoom: [pingcap.zoom.us/j/266287897](https://pingcap.zoom.us/j/266287897)

## Contact

* Slack: channel #sig-ddl in the [tidbcommunity](https://pingcap.com/tidbslack) slack workspace, you can join this channel through [this invitation link](https://slack.tidb.io/invite?team=tidb-community&channel=sig-ddl&ref=pingcap-community).

## Repositories, Projects and Labels

* [tidb](https://github.com/pingcap/tidb)
    * [SIG DDL Kanban](https://github.com/pingcap/tidb/projects/40)
        * [component/DDL](https://github.com/pingcap/tidb/labels/component%2FDDL)
        * [component/parser](https://github.com/pingcap/tidb/labels/component%2Fparser)
        * [component/charset](https://github.com/pingcap/tidb/labels/component%2Fcharset)
        * [component/infoschema](https://github.com/pingcap/tidb/labels/component%2Finfoschema)
        * [component/binlog](https://github.com/pingcap/tidb/labels/component%2Fbinlog)
* [parser](https://github.com/pingcap/parser/issues)

## Code Locations

* The [parser repo](https://github.com/pingcap/parser).
* The [ddl package](https://github.com/pingcap/tidb/tree/master/ddl) in the tidb repo.
* The [domain package](https://github.com/pingcap/tidb/tree/master/domain) in the tidb repo.
* The [infoschema package](https://github.com/pingcap/tidb/tree/master/infoschema) in the tidb repo.
* The [meta package](https://github.com/pingcap/tidb/tree/master/meta) in the tidb repo.
* The [owner package](https://github.com/pingcap/tidb/tree/master/owner) in the tidb repo.
* Other codes that affect the correctness, performance of the TiDB DDL. 
