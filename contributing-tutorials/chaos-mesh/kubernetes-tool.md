## Kubernetes 及其相关工具

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


### 熟悉云原生概念、工具

如果你并不熟悉 Kubernetes 与 相关工具 ，我们建议你先进行相关概念与工具的学习。当然，开发 Chaos-mesh 并不需要你掌握所有的概念，我们也非常鼓励在开发工程中进行学习。

1. [Kubernetes 官方教程](https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/), 同时也推荐 [Kubernetes Handbook](https://jimmysong.io/kubernetes-handbook/)

2. [Kubectl Overview](https://kubernetes.io/zh/docs/reference/kubectl/overview/), 以及 [Kubectl 备忘单](https://kubernetes.io/zh/docs/reference/kubectl/cheatsheet/)

3. [Helm 官方Tutorials](https://helm.sh/docs/intro/) 与 [Helm 使用指南](https://cloud.tencent.com/developer/article/1450315)


### 了解 Operator 开发模式

如果你并不了解 Operator + CRD 的开发模式，那么我们建议你通过相关资料先熟悉与了解，了解上述概念将更好的帮助你了解 Chaos-mesh 是如何运行的:

[Operator Overview](https://coreos.com/operators/)

[揭秘 Operator](http://dockone.io/article/8769)

[Operator 快速入门教程](https://www.qikqiak.com/post/k8s-operator-101/)