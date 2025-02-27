(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{418:function(e,n,t){"use strict";t.r(n);var r=t(7),s=Object(r.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"术语"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#术语"}},[e._v("#")]),e._v(" 术语")]),e._v(" "),n("p",[e._v("敏捷开发 :  重在build代码通过。以用户的需求进化为核心，采用迭代、循序渐进的方法进行软件开发。\nCI-持续集成 : 重在单元test通过。源代码变更后自动检测、拉取、构建和（在大多数情况下）进行单元测试的过程。  CI 的流程执行和理论实践让我们可以确定新代码和原有代码能否正确地集成在一起。\nCD-持续交付 : 重在release版本发布。可自动将已验证的代码发布到存储库。  它目标是拥有一个可随时部署到生产环境的代码库。\nCD-持续部署 : 重在deploy版本部署。所有的变更都会被自动部署到生产环境中。\nDevOps : 是一种方法论，为了实现上面的目标。用于促进应用开发、应用运维和质量保障（QA）部门之间的沟通、协作与整合。以期打破传统开发和运维之间的壁垒和鸿沟。")]),e._v(" "),n("p",[e._v("持续交付和持续部署的异同:")]),e._v(" "),n("blockquote",[n("p",[e._v("持续交付并不是指软件每一个改动都要尽快部署到产品环境中，它指的是任何的代码修改都可以在任何时候实施部署。\n持续交付表示的是一种能力，而持续部署表示的则一种方式。持续部署是持续交付的最高阶段")])]),e._v(" "),n("h1",{attrs:{id:"jenkins的安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins的安装"}},[e._v("#")]),e._v(" Jenkins的安装")]),e._v(" "),n("ul",[n("li",[e._v("k8s搭建3pod")]),e._v(" "),n("li",[e._v("拉取的代码的工作空间放到pvc使用wrm模式，提高速度。")]),e._v(" "),n("li",[e._v("k8s创建一个ServiceAccount，用于将来配置API")]),e._v(" "),n("li",[e._v("部署yaml: Deployment、指定serviceAccountName、volumeMounts用上面的PVC")]),e._v(" "),n("li",[e._v("访问: Service为ClusterIP ， ingress代理")])]),e._v(" "),n("h1",{attrs:{id:"jenkins的配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins的配置"}},[e._v("#")]),e._v(" Jenkins的配置")]),e._v(" "),n("ul",[n("li",[e._v("查看 Jenkins 日志,记录初始化密码，填入初始化页面")]),e._v(" "),n("li",[e._v("初始化用户")]),e._v(" "),n("li",[e._v("安装插件")]),e._v(" "),n("li",[e._v("Cloud environment配置:")])]),e._v(" "),n("blockquote",[n("p",[e._v("用于配置Agent的集群jenkins，分发任务。Slave 会执行构建脚本进行构建。\n配置k8s的apiserver的连接。以启动pod来执行。   注意 Jenkins pod 的 SA 权限要配对，否则连不上k8s。\npod模板中的label，将会在pipline中使用。 在agent 定义label，来拉起pod。 如使用 master 则使用 Jenkins Master 进行构建\n2个路径需要配置 :\ndocker.sock(设置执行模式: dorcker in docker 再容器里再起容器执行。docker out of docker【DooD 方式】  再容器里调用宿主机的docker命令，避免再安装docker。)\nWorkspace 使用 PVC的wrm模式，这样不用每次都下载各种库，减少构建的时间")])]),e._v(" "),n("ul",[n("li",[e._v("Git 连接设置: 添加凭证；添加私有服务器配置")]),e._v(" "),n("li",[e._v("Image repository 设置 ： 添加凭证；添加私有服务器配置")]),e._v(" "),n("li",[e._v("图形化界面 BlueOcean：  专为 Jenkins Pipeline 重新设计的一套 UI 界面，为Pipeline提供更多的功能。如: Pipeline 编辑器、异常处理提示、复杂的可视化。")])]),e._v(" "),n("h1",{attrs:{id:"jenkins-pipeline"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-pipeline"}},[e._v("#")]),e._v(" Jenkins Pipeline")]),e._v(" "),n("p",[e._v("特点: 以代码的形式描述,并存储于源代码控制系统；持久性；可暂停；多功能；可扩展；")]),e._v(" "),n("p",[e._v("基本概念：")]),e._v(" "),n("ul",[n("li",[e._v("Node ： Jenkins运行的节点")]),e._v(" "),n("li",[e._v("Stage ： 每个 Stage 代表一组操作，是一个逻辑分组的概念 (Stage View 插件展示给用户查看)")]),e._v(" "),n("li",[e._v("Step : 最基本的操作单元")])]),e._v(" "),n("h1",{attrs:{id:"jenkinsfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkinsfile"}},[e._v("#")]),e._v(" Jenkinsfile")]),e._v(" "),n("p",[e._v("定义了流水线的各个阶段，在每个阶段可以执行相应的任务。\n同时再可以放到git仓库同代码一起做版本分支管理。\n它还提供了内置环境变量。")]),e._v(" "),n("p",[e._v("编写:\nagent : 指定\nparameters ： 参数化构建 （也可以使用jenkins的job的参数）\nenvironment ： 环境变量的使用，可以Stage里面独立使用。")]),e._v(" "),n("p",[e._v("插件:\nintput（）插件可以让用户输入交互。\ncheckout : 源码管理,在凭证中进行定义gitId\nwithCredentials : 可以从获得凭据的账号和密码。\nkubernetes CLI ： 配置kubernetes 的 kubeconfig")]),e._v(" "),n("p",[e._v("脚本:\n使用 sed 命令修改 k8s-YAML 文件中的变量值。\nenvsubst 将环境变量传递给文件。")]),e._v(" "),n("h1",{attrs:{id:"部署java-项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署java-项目"}},[e._v("#")]),e._v(" 部署Java 项目")]),e._v(" "),n("p",[e._v("流程图 ： push 代码 -》 gitee webhook -》jenkins工作 -> pull and build -》  生成镜像 -》 把镜像推送到 Harbor 仓库 -》 然后在部署的时候通过 k8s 拉取 Harbor 上面的代码进行创建容器和服务\n编写jenkinsfile，dockerfile，harbor仓库。")]),e._v(" "),n("h1",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1760150",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tekton 概念篇 - 好大一盘棋"),n("OutboundLink")],1)])]),e._v(" "),n("blockquote",[n("p",[e._v("他属于云原生的ops工具。用产商提供的task流水线模板")])]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1768444",target:"_blank",rel:"noopener noreferrer"}},[e._v("基于Jenkins+Argocd+Argo Rollouts的DevOps实现并用金丝雀发布"),n("OutboundLink")],1)])]),e._v(" "),n("blockquote",[n("p",[e._v("重点还是Argo支持k8s的滚动更新。 istio的流量管理。  Argo-Rollout主要集成了Ingress和ServiceMesh两种流量控制方法")])])])}),[],!1,null,null,null);n.default=s.exports}}]);