Summer of Code
=====================

Project Ideas
-------------

### **Support Invisible Indexes**

-	Description

MySQL supports invisible indexes; that is, indexes that are not used by the optimizer.
This is a useful feature when you want to drop an index in a safe way. Invisible indexes make it possible to test the effect of removing an index on query performance, without making a destructive change that must be undone should the index turn out to be required. Dropping and re-adding an index can be expensive for a large table, whereas making it invisible and visible are fast, in-place operations.

-	Recommended Skills: golang, sql optimizer, TiDB DDL
-	Issue: https://github.com/pingcap/tidb/issues/9246

--- 
### **Efficient Hash Table**

-	Description

The current MVMap used in TiDB is not efficient for hash join or hash aggregate.

Implemente an efficient hash table, which should:
1. have a better **probe** performance
2. have a not bad fill factor
3. supplies efficient hash functions for all data types that TiDB has.

For example: [Horton Tables: Fast Hash Tables for In-Memory
Data-Intensive Computing](https://www.usenix.org/system/files/conference/atc16/atc16_paper-breslow.pdf)


-	Recommended Skills: golang, sql execution engine
-	Issue: https://github.com/pingcap/tidb/issues/9247

--- 
### **Full Vectorized Expression Evaluation**

-	Description


In TiDB, The current expression evaluation interface are row-oriented. It is not efficient. To evaluate a batch of inputs, 1024 rows for example, 1024 function calls are invoked.

We could expand the expression evaluation interface to add a column-oriented method, evaluate the builtin functions column by column. This will improve the performance a lot.

-	Recommended Skills: golang, sql execution engine
-	Issue: https://github.com/pingcap/tidb/issues/9245

--- 
### **Support `GroupJoin` operator**

-	Description

Most aggregation queries contain both group-by and join operators, and spend a significant amount of time evaluating these two expensive operators. Merging them into one operator (the groupjoin) significantly speeds up query execution. Some TPC-H queries can also benefit from the `groupjoin` operator. For example Q13, Q3, Q21. See: [Accelerating Queries with Group-By and Join by Groupjoin.pdf, VLDB, 2011](https://github.com/pingcap/tidb/files/2313020/2011.VLDB.Accelerating.Queries.with.Group-By.and.Join.by.Groupjoin.pdf)


-	Recommended Skills: golang, sql optimizer, sql execution engine
-	Issue: https://github.com/pingcap/tidb/issues/7469

--- 
### **Enhance the rule of `Group Pruning`**

-	Description

[Group pruning](https://blogs.oracle.com/optimizer/group-by-and-aggregation-elimination) is a transformation rule, which is always beneficial. It removes the groups not needed in the outer query blocks. For example, consider the following query:

```sql
TiDB(localhost:4000) > desc select max(b), sum(sum_c) from (select a, b, sum(c) as sum_c from t group by a, b) tmp group by a;
+--------------------------+----------+------+------------------------------------------------------------------------------------------+
| id                       | count    | task | operator info                                                                            |
+--------------------------+----------+------+------------------------------------------------------------------------------------------+
| HashAgg_9                | 8000.00  | root | group by:test.t.a, funcs:max(test.t.b), sum(sum_c)                                       |
| └─HashAgg_14             | 8000.00  | root | group by:col_3, col_4, funcs:sum(col_0), firstrow(col_1), firstrow(col_2)                |
|   └─TableReader_15       | 8000.00  | root | data:HashAgg_10                                                                          |
|     └─HashAgg_10         | 8000.00  | cop  | group by:test.t.a, test.t.b, funcs:sum(test.t.c), firstrow(test.t.a), firstrow(test.t.b) |
|       └─TableScan_13     | 10000.00 | cop  | table:t, range:[-inf,+inf], keep order:false, stats:pseudo                               |
+--------------------------+----------+------+------------------------------------------------------------------------------------------+
5 rows in set (0.01 sec)
```

Can be transformed into something like this:
```sql
TiDB(localhost:4000) > desc select max(b), sum(c) from t group by a;
+-----------------------+----------+------+------------------------------------------------------------+
| id                    | count    | task | operator info                                              |
+-----------------------+----------+------+------------------------------------------------------------+
| HashAgg_9             | 8000.00  | root | group by:col_2, funcs:max(col_0), sum(col_1)               |
| └─TableReader_10      | 8000.00  | root | data:HashAgg_5                                             |
|   └─HashAgg_5         | 8000.00  | cop  | group by:test.t.a, funcs:max(test.t.b), sum(test.t.c)      |
|     └─TableScan_8     | 10000.00 | cop  | table:t, range:[-inf,+inf], keep order:false, stats:pseudo |
+-----------------------+----------+------+------------------------------------------------------------+
4 rows in set (0.00 sec)
```

-	Recommended Skills: golang, sql optimizer
-	Issue: https://github.com/pingcap/tidb/issues/7700

### **DM operator on Kubernetes**

-	Description

Now we deploy and operate DM using Ansible, we have to do a lot of things manually.
e.g.

- if adding a DM-worker for a new mysql instance, we have to [edit `Ansible iniventroy` and run a `ansible-playbook`](https://github.com/pingcap/docs/blob/master/tools/dm/cluster-operations.md#add-a-dm-worker-instance). If not too lucky, we may need to stop task,  eidt task config file, and then start some tasks to let the new DM-worker join

- DM-master and DM-worker don't store tasks,  it's sick！Thus we have to start whole task after some DM-workers restart

We can think of a vision - the user only operates the task configuration, maybe by web or command line tool , everything else is automated

project example: [TiDB-operator](https://github.com/pingcap/tidb-operator)

-	Recommended Skills: golang
-	Issue: https://github.com/pingcap/dm/issues/43

### **visual display of DM**

-	Description

Now what information does dm have to show to users?

* dmctl

  * `query-status`: query basic information of task, contain some complex and not clear error message
  * `show-ddl-lock` ....
  * `query-error` ...
* grafana - many no sense monitor graph

What are the disadvantages of the above methods? **Lack of contextual information leads to incomprehensible or inferential problems**

we need a way to show system or task running status details in natural way, like a straightforward way to show the speed of data flow, key events and where to happen

-	Recommended Skills: golang, opentracing
-	Issue: https://github.com/pingcap/dm/issues/44
