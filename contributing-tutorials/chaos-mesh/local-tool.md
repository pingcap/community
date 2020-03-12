## 本地工具链

在开发 chaos-mesh 的过程中，我们有需要多项目中已经设置好的本地工具来帮助我们进行更方便的开发。在这个章节中我们将介绍常用的本地工具指令，并且介绍他们的使用场景与使用用途。

### 安装依赖

在本地开发过程中，我们需要用到 `kubebuilder` 与 `kustomize` 这两个工具，我们可以通过以下命令来安装:

> `make install-kustomize`

> `make install-kubebuilder`


### 格式化与静态检查

我们可以通过以下指令来对我们的代码进行格式化和静态检查，代码规范检查，检查依赖等。

> `make fmt `

> `make lint`

> `make vet`

> `make tidy`

### 本地编译

通过以下命令，我们可以编译 chaos-mesh 所有组件，当然你也可以选择单独编译部分组件，详情可以参考项目根目录下的 `Makefile`

> `make binary`

编译所有 chaos-mesh 组件

> `make manager`

仅编译 controller 组件

> `make chaosdaemon`

仅编译 chaos-daemon 组件

### 生成 CRD 文件

当你修改了 API 文件时，我们需要更新与之对应的自动生成代码与 CRD 文件，我们可以通过以下命令完成:

> `make generate`

自动生成 generate 代码

> `make yaml`

自动生成 CRD 配置文件