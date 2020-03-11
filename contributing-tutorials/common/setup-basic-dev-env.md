## 基础开发环境搭建

PingCAP 下大部分仓库都有着共同的基础开发环境需求，这意味需要以下必要的基础环境工具。在这一章节，我们将引导你安装并学习以下必要的语言与工具。

1. Golang
2. Git
3. Docker

### 安装 Golang

PingCAP 下大部分仓库都使用 Golang 语言开发。Golang 语言环境的安装可以参考[官方文档](https://golang.org/doc/install)，[中文版](https://www.runoob.com/go/go-environment.html)可以参参考，安装完成后，使用如下命令查看 golang 版本：

```bash
> go version      
go version go1.13.4 darwin/amd64
```

### 安装 Git

为了管理 PingCAP 项目，你将使用 git 作为版本管理工具。可以参考 [安装 git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) , 或者参考[中文教程](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)

在完成安装后运行如下命令,可以正确打印出版本号则 git 安装成功。
```bash
$ git --version
git version 2.6.2
```

#### 注册 Github 账号

目前 PingCAP 下的项目都是通过 Github 进行管理，如果你还没有 Github 账号，那么你需要先注册一个 Github 账号。[注册 Github 账号](https://github.com/join?source=header-home)


### 安装 Docker 

部分 PingCAP 仓库下的项目在本地调试时需要安装 docker , 或者是依赖的环境可以通过 docker 模拟出依赖环境。这里将介绍如何安装 docker。

安装 docker 可以参考[官方文档](https://docs.docker.com/install/) 来安装与启动，中文版资料可以参考[安装 docker。](https://www.runoob.com/docker/centos-docker-install.html) 当安装与启动 docker 完成以后，可以通过在控制台输入以下命令来验证，若有如下输出则代表安装与启动成功。

```bash
$ docker version
Client: Docker Engine - Community
 Version:           19.03.1
 API version:       1.40
 Go version:        go1.12.5
 Git commit:        74b1e89
 Built:             Thu Jul 25 21:18:17 2019
 OS/Arch:           darwin/amd64
 Experimental:      false
```

### 熟悉你的工具

如果你还并不熟悉 Golang / Git / Docker 等基础开发工具，那么建议你可以先了解学习这些语言、工具，你可以通过以下教程快速学习、了解以上工具。

1. [Go by exmaple](https://gobyexample.com/)，通过多个例子来学习 golang。[中文版资料](https://books.studygolang.com/gobyexample/)
2. [Git tutorials](https://git-scm.com/docs/gittutorial)，学习使用 git 教程。[优质中文资料](https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/README.md)
3. [Docker for beginners](https://docker-curriculum.com/)，为初学者准备的 docker 教程。[优质中文资料](https://github.com/twtrubiks/docker-tutorial)

