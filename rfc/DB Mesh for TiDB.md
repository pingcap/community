- Author(s): Tongcheng-Elong Database-Middleware Team
- Last updated:  Dec 25, 2019
- Discussion at: https://github.com/pingcap/community/issues/148
## **Background**
The high availability and load balancing access to TiDB recommended by PingCAP is solved by load balancing software or hardware such as LVS, HAProxy and F5. Although this solves the problem of load balancing, it brings a layer of network consumption. LVS, one of the more widely used software with Four-layer load balancing, has not been updated for a long time. HAProxy is a software that provides four - and seven-layer load balancing services. but with slightly lower performance than LVS。F5 is a commercial load balancing product with high cost. Therefore, we want to introduce a new Mysql access solution，called DB Mesh，to solve the access problem of TiDB. This project was our in-house developed solution for the MySQL access requirements，but considering TiDB also implements the standard MySQL protocol，we only need small modifications to connect to TiDB, so we decide to open source this project in the form of project incubation, so that more users can enjoy this product and at the same time better tempered products can be provided.
## **Proposal**
The DB Mesh is a access services for cloud-native database (TiDB, MySQL) , mainly for the current mainstream Kubernetes or other virtualized application deployment environment and provides data proxy services by the sidecar way. It provides a grid layer that interacts with the database and it is a zero-intrusion solution for application program, and the problems such as the coupling issue of component and application, complexity of operation and maintenance and network consumption after load balancing can be solved. The product will achieve read-write load balance, read-write separation, process heat update, data source management, SQL detailed acquisition, SQL firewall and other functions with the advantage of the entry point of data traffic.
## **Compatibility**
There is no compatibility issues to TiDB.
## **The team information**
- DEV: There are three developers. They have been engaged in the development of database kernel and middleware.
- PM：A DBA who has been engaged in database management for many years, responsible for product requirements collection and functional design.
## **Development language**
C++
## **Architecture & Deployment**
- Architecture 

![sidecar](https://user-images.githubusercontent.com/15963554/71436154-194e6f80-2727-11ea-842e-f567e5a57d49.png)

- Deployment
![Process](https://user-images.githubusercontent.com/15963554/71087110-55894980-21d6-11ea-9c22-40519df03561.png)
![k8s](https://user-images.githubusercontent.com/15963554/71087123-5c17c100-21d6-11ea-8048-1b89869beac1.png)
## **Advantages**
- Clear engage method to client
- Efficient deployment
- Detach connection with Client, easy to maintain the code
- Support TiDB and easy to control it. Better than LVS and HAProxy
- Perfect deployment for Kubernetes
- Create a network of Database, make it easy to manage
- Easy to scale, could support Sidecar(Redis, PG, ES, etc.)
## **Core function (Phase I)**

Features | Status | Progress 
-- | -- | --
Load balancing | To   be verified | Running
Read and write separation | Achieved | Running
Data source configuration   management | Need to develop | Running
Connection pool management | Need   to develop | Running
Configure hot swap | Achieved | Running
Failover | Achieved | Running
Reporting of monitoring   information | Need   to develop | Running
Multi-process, multi-version   operation on the same port | Achieved | Running
Slow SQL Statistics | Achieved | Running
Daemon and management API   interface | Need   to develop | Running
Memory OOM management | New   feature | Running

## **Open source code**
Expected,in the first quarter of 2020
