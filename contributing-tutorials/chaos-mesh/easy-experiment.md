## 从开发一个新 Chaos 开始

在这一章节，我们将尝试开发一个非常简单的新 Chaos 对象，从而熟悉 chaos-mesh 的开发框架。 chaos-mesh 的整个核心框架是 [kubebuilder](https://github.com/kubernetes-sigs/kubebuilder), 你可以通过这本教程来学习 [kubebulder开发指南](https://book.kubebuilder.io/)


现在，我们可以通过给 chaos-mesh controller 增加一个 event 事件，来作为我们第一次小改动。如果你并不了解 event，你可以通过[如何排查应用](https://kubernetes.io/docs/tasks/debug-application-cluster/debug-application-introspection/#using-kubectl-describe-pod-to-fetch-details-about-pods) 以及 [Kubernetes event 中文资料](https://www.kubernetes.org.cn/1031.html)  来了解。

我们可以在 `controllers/podchaos_controller.go` 的 `Reconcile` 方法返回前增加一条 event：

```golang
// Reconcile reconciles a PodChaos resource
func (r *PodChaosReconciler) Reconcile(req ctrl.Request) (result ctrl.Result, err error) {
	logger := r.Log.WithValues("reconciler", "podchaos")

    ......
    ......

    // 我们增加一条新的 event
	r.Event(chaos, v1.EventTypeNormal, "Hello World", "Hello World")
	return result, nil
}

```

当代码修改完以后，我们可以通过 [搭建本地测试环境](setup-local-dev-env.md) 来快速本地编译、搭建测试环境，并运行 chaos-mesh来验证这一改动。

当本地环境启动完毕以后，我们可以部署一个 PodChaos 到 Kubernetes 集群中查看效果:

```bash 
cat <<EOF | kubectl apply -f -
apiVersion: pingcap.com/v1alpha1
kind: PodChaos
metadata:
 name: pod-kill-example
spec:
 action: pod-kill
 mode: one
 selector:
    namespaces:
      - chaos-testing
 scheduler:
   cron: "@every 5s"
EOF
```

当我们部署完这个 podchaos 以后，通过 kubectl describe 命令，我们可以发现该 podchaos 的 events 属性下出现了我们刚刚编写的 event:

> `kubectl describe podchaos pod-kill-example`

```bash
......
Events:
 Type    Reason       Age                From                 Message
 ----    ------       ----               ----                 -------
 Normal  Hello World  3s (x18 over 28s)  podchaos-controller  Hello World
```

