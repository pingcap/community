## Chaos-mesh 架构总览

Chaos-mesh 在架构上边界非常清晰，通过 `控制层`，`Daemon 节点`，`注入层`，的三层设计来构建出整个架构。

1. 控制层，即整个 Chaos-mesh 的总控，负责感知并调整整个集群的 Chaos 情况
2. Daemon 节点，每个 Kubernetes Node 节点都会安装一个实例，负责调整所在 Node 节点 chaos 测试
3. 注入层，作为真正受影响的 Kubernetes Pod 的 sidecar，以 sidecar 模式向真实运行的 Pod 注入 chaos

![](./images/chaos-mesh-overview.png)


同时，Chaos-mesh 也同样有着其他组件模块，但核心模块其实就上面三个，这里给出每个模块的介绍以及所对应的负责人，当开发者们在所在模块遇到问题时，完全可以通过 Github Issue 或者是 slack #sig-chaos-mesh [Tidb Community](tidbcommunity.slack.com) 的方式向他们提问。

### 控制层  

控制层 模块为 Chaos Mesh 与 Kubernetes 交互模块，主要包括两部分，一部分为 CRD 结构定义，另一部分主要为接收 Kubernetes 事件以及对各类 Chaos 对象的调度与管理。

#### 代码目录：

- controllers 
- api/v1alpha1

负责人：@cwen0 @Yangkeao 

### Webhooks  

Webhook 模块为 Admission webhook Service 实现模块，主要负责 sidecar 注入以及 CRD 对象的合法性检查。 

#### 代码目录：

- api/webhook

负责人：@cwen0 @Yisaer

### Daemon 模块

ChasoDaemon 模块为具体物理节点 Chaos 注入实现模块，该模块通过 gRPC 协议接收来自 Controllers 请求进行具体的 Chaos 注入逻辑，目前提供的功能有： 容器信息获取，网络注入，时间注入等。 

#### 代码目录：

- pkg/chaosdaemon

负责人：@Yangkeao @cwen0 

### Chaosfs   

Chaosfs 模块为 IOChaos 中注入的 sidecar 实现模块，通过 gRPC 请求接收来自 Controllers的请求，通过 fuse 劫持应用的文件系统 I/O 操作，并根据 Controllers 的请求设置 I/O 延迟或者返回系统错误码。 

#### 代码目录：

- pkg/chaosfs

负责人：@ethercflow @cwen0 

### ChaosDashboard   

ChaosDashboard 模块主要 watch 具体的 Chaos 对象的更新变化，记录 Chaos 事件到 MySQL 中，并且通过 annotation 的方式将事件在 Grafana 中展示出来。 

#### 代码目录:

- cmd/chaos-dashboard
- images/chaos-dashboard

负责人：@Yangkeao @lucklove 

### bpfki 

bpfki 模块使用以 BPF 为基础的内核注入服务，为 KernelChaos 具体 Chaos 行为实现模块。 

#### 代码目录：

- https://github.com/chaos-mesh/bpfki

负责人：@ethercflow 

### Helm 

Helm 模块为 Chaos Mesh 安装模块，提供 Helm 安装 Chaos Mesh 的相关配置文件。 

#### 代码目录：

- helm

负责人：@yeya24 @cwen0