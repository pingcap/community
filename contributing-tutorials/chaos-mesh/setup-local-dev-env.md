## 搭建 Chaos-mesh 本地开发环境

除了 Golang / docker 作为本地开发环境，开发 ChaosMesh 还需要 kubectl / helm / kind 等开发工具。 在这里将先介绍如何安装以及上几种工具。

1. kubectl
2. kind
3. helm

### 安装 kubectl

kubectl 是一个本地的 kubernetes 集群客户端工具，通过 kubectl 我们可以通过几条简单的指令，查询或者操作对应的 Kubernetes 集群。在这里，我们推荐使用官方教程进行 安装  kubectl。

[通过 curl 命令安装 kubectl 可执行文件](https://kubernetes.io/zh/docs/tasks/tools/install-kubectl/#%E9%80%9A%E8%BF%87-curl-%E5%91%BD%E4%BB%A4%E5%AE%89%E8%A3%85-kubectl-%E5%8F%AF%E6%89%A7%E8%A1%8C%E6%96%87%E4%BB%B6)

当安装完毕过后，可以通过在命令行执行 `kubectl version` 来确认是否安装成功。如果安装成功，操作台会出现如下打印:

```bash
$ kubectl version
Client Version: version.Info{Major:"1", Minor:"15", GitVersion:"v1.15.5", GitCommit:"20c265fef0741dd71a66480e35bd69f18351daea", GitTreeState:"clean", BuildDate:"2019-10-15T19:16:51Z", GoVersion:"go1.12.10", Compiler:"gc", Platform:"darwin/amd64"}
```

### 安装 kind

kind 是一个快速建立本地 Kubernetes 集群的工具，通过 kind 我们可以很方便的在本地起一个  Kubernetes 集群，这在开发 Kubernetes 平台应用时非常有帮助。在这里，我们推荐官方文档来安装 kind 工具。

[快速安装 kind 工具](https://kind.sigs.k8s.io/docs/user/quick-start/)

当 kind 安装完毕以后，可以通过 `kind --version` 来确认是否安装成功，如果安装成功，操作台会出现如下打印:

```bash
$ kind --version
kind version 0.7.0
```
当然，在安装完毕后，我们非常推荐根据 kind 官方的 [快速使用文档](https://kind.sigs.k8s.io/docs/user/quick-start/#interacting-with-your-cluster) 来熟悉一下以下几个 kind 命令。

1. `kind create cluster`
2. `kind delete cluster`
3. `kind get clusters`

### 安装 helm

helm 是一个 Kubernetes 平台的应用包管理工具，我们可以通过 helm 来管理 Kubernetes 平台上的应用。 在这里我们推荐使用官方教程来安装 helm。

[Install helm](https://github.com/helm/helm#install)

当 helm 安装完毕以后，我们可以通过 `helm version`来确认安装是否成功。安装成功时，操作台会打出如下指令:

```bash
$ helm version
Client: &version.Version{SemVer:"v2.12.3", GitCommit:"eecf22f77df5f65c823aacd2dbd30ae6c65f186e", GitTreeState:"clean"}
```


### 本地编译 Chaos-mesh

当必要的工具都准备完毕后，并且将 ChaosMesh 仓库 fork 并 clone 到本地后。我们可以开始尝试本地编译 ChaosMesh 并打成 docker 镜像,最后部署在 kind Kubernetes 集群后运行。

为了编译整个 chaos-mesh 项目，可以通过在根目录执行 
> `make build`。 

在这里我们只选择 chaos-mesh manager 组件进行编译并打镜像。通过在 chaos-mesh 项目根目录下执行如下命令，最终会在 `./bin` 下编译出 `chaos-controller-manager`

> `make manager`

```bash
$ make manager
GO15VENDOREXPERIMENT="1" CGO_ENABLED=0 GOOS="" GOARCH="" go get sigs.k8s.io/controller-tools/cmd/controller-gen
/Users/yisa/Downloads/Github/GoProject/bin/controller-gen 
............. 以下省略
```

### 本地构建 Chaos-mesh 镜像

Chaos-mesh 的镜像构建需要两步，第一步构建出构建目标组件所需要的目标镜像环境。通过在 chaosmesh 项目根目录下执行 

> `docker build -t pingcap/binary .`

注意: 由于在构建 binary 镜像过程中会拉取 k8s.io 等依赖，在网络环境较为困难的情况下可以通过修改 `./Dockerfile`, 增加如下语句即可有效缓解:

```Dockerfile
ENV GOPROXY "https://goproxy.cn"
```

当上述语句执行完毕以后，我们可以通过 docker images 命令来查看是否 build 成功。

```bash
$ docker images | grep pingcap/binary
pingcap/binary                                  latest                f8915ee8d257        42 seconds ago      2.06GB
```
当 pingcap/binary 构建成功以后，我们终于可以给 manager 组件开始构建镜像。在这里我们通过手动给 Chaos-mesh manager 构建镜像的方式:

> `docker build -t localhost:5000/pingcap/chaos-mesh images/chaos-mesh`

```bash
$ docker build -t localhost:5000/pingcap/chaos-mesh images/chaos-mesh 
Sending build context to Docker daemon  37.32MB
Step 1/5 : FROM alpine:3.10
 ---> af341ccd2df8
Step 2/5 : ARG HTTPS_PROXY
 ---> Using cache
 ---> 20d2cb2306ee
Step 3/5 : ARG HTTP_PROXY
 ---> Using cache
 ---> 919a7089085f
Step 4/5 : RUN apk add tzdata --no-cache
 ---> Using cache
 ---> ff324fe7103e
Step 5/5 : COPY --from=pingcap/binary /src/bin/chaos-controller-manager /usr/local/bin/chaos-controller-manager
 ---> 53e0aca7dc92
Successfully built 53e0aca7dc92
Successfully tagged localhost:5000/pingcap/chaos-mesh:latest
```

### 部署 Chaos-mesh 到本地集群

当我们成功在本地构建完成镜像以后，我们可以尝试自己部署刚刚构建完成的镜像到本地 Kubernetes 集群中。

通过 `hack` 文件夹下的脚本，我们可以快速启动一个本地 Kubernetes 集群:

> `hack/kind-cluster-build.sh -n chaos-mesh -c 3`

当脚本执行完成后，我们可以通过以下指令来验证:

```bash
# 通过 kind get clusters，验证本地已经有名为 chaos-mesh 的 kubernetes 运行
$ kind get clusters
chaos-mesh

# 通过 kubectl get nodes, 可以看到 chaos-mesh 由 1 个 master 节点组成，3个 worker 节点组成。
$ kubectl get nodes
NAME                       STATUS     ROLES    AGE   VERSION
chaos-mesh-control-plane   NotReady   master   37s   v1.12.8
chaos-mesh-worker          NotReady   <none>   15s   v1.12.8
chaos-mesh-worker2         NotReady   <none>   16s   v1.12.8
chaos-mesh-worker3         NotReady   <none>   15s   v1.12.8
```

当本地集群启动以后，我们需要将 chaos-mesh 的 CRD 文件创建到集群中去。如果你并不了解什么是 CRD，可以参考 [Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)

在 chaos-mesh 项目根目录执行:

> `kubectl apply -f manifests/crd.yaml `

```bash
$ kubectl apply -f manifests/crd.yaml 
customresourcedefinition.apiextensions.k8s.io/iochaos.pingcap.com created
customresourcedefinition.apiextensions.k8s.io/kernelchaos.pingcap.com created
customresourcedefinition.apiextensions.k8s.io/networkchaos.pingcap.com created
customresourcedefinition.apiextensions.k8s.io/podchaos.pingcap.com created
customresourcedefinition.apiextensions.k8s.io/timechaos.pingcap.com created
```

然后，我们需要将之前已经构建好的 chaos-mesh 镜像加载到我们的本地 Kubernetes 集群中:

> `kind load docker-image localhost:5000/pingcap/chaos-mesh:latest --name chaos-mesh`

> `kind load docker-image bitnami/kubectl:latest --name chaos-mesh`

当依赖的镜像全部预载完毕以后，我们可以通过 `helm` 来将 chaos-mesh 安装到本地 Kubernetes 集群:

> `helm install --name chaos --namespace chaos-testing --set  controllerManager.image="localhost:5000/pingcap/chaos-mesh:latest" --set controllerManager.imagePullPolicy="IfNotPresent" .`

你可以通过 `kubectl get pod` 来观察 chaos-mesh 组件的启动情况:

```bash
$ kubectl get pod -n chaos-testing
NAME                                       READY   STATUS              RESTARTS   AGE
chaos-controller-manager-f4c4ccd89-wdqjt   1/1     Running             0          17s
chaos-daemon-bq9nk                         0/1     ContainerCreating   0          3m39s
chaos-daemon-nskks                         0/1     ContainerCreating   0          3m38s
chaos-daemon-tgp62                         0/1     ContainerCreating   0          3m38s
```

这里我们暂时不需要去关心 `chaos-daemon` 的启动状况，仅需要 `chaos-controller-manager` pod 启动即可。接下来我们可以尝试阅读 [PodChaos 使用用例](https://github.com/pingcap/chaos-mesh/wiki/Pod-Chaos)，在 Kubernetes 集群上尝试 PodChaos.


### 销毁集群

当测试结束时，我们可以删除集群上的 chaos-mesh 组件，或者直接删除本地的测试集群。

删除 chaos-mesh 组件请参考:

> `helm del --purge chaos`

删除本地测试集群请参考:

> `kind delete cluster --name chaos-mesh`


### 更多资料

通过以上步骤，则已经可以掌握整个 Chaos-mesh 开发过程中，从本地编译、构建镜像，到在本地集群调试的整个流程。获取更多本地开发资料，请参考 [Chaos-mesh wiki](https://github.com/pingcap/chaos-mesh/wiki/Set-up-the-development-environment)
