(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{384:function(e,t,a){"use strict";a.r(t);var s=a(7),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"容器通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器通信"}},[e._v("#")]),e._v(" 容器通信")]),e._v(" "),t("p",[e._v("当项目大规模使用 Docker 时，容器通信的问题也就产生了。")]),e._v(" "),t("p",[e._v("要解决容器通信问题，必须先了解很多关于网络的知识。")]),e._v(" "),t("p",[e._v("我们需要了解Docker 的网络知识，以满足更高的网络需求。")]),e._v(" "),t("h2",{attrs:{id:"_1-默认网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-默认网络"}},[e._v("#")]),e._v(" 1. 默认网络")]),e._v(" "),t("p",[e._v("装 Docker 以后，会默认创建三种网络，可以通过 "),t("code",[e._v("docker network ls")]),e._v(" 查看")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# docker network ls")]),e._v("\nNETWORK ID          NAME                DRIVER              SCOPE\nf869d1c3534a        bridge              bridge              "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("local")]),e._v("\n1543d4d4b945        "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v("                "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v("                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("local")]),e._v("\nd06a4fca4238        none                null                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("local")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("网络模式")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("简介")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("bridge")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("为每一个容器分配、设置 IP 等，并将容器连接到一个 "),t("code",[e._v("docker0")]),e._v(" 虚拟网桥，默认为该模式。")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("host")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("容器将不会虚拟出自己的网卡，配置自己的 IP 等，而是使用宿主机的 IP 和端口。")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("none")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("容器有独立的 Network namespace，但并没有对其进行任何网络设置，如分配 veth pair 和网桥连接，IP 等。")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("container")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("新创建的容器不会创建自己的网卡和配置自己的 IP，而是和一个指定的容器共享 IP、端口范围等。")])])])]),e._v(" "),t("h3",{attrs:{id:"_1-1-bridge-网络模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-bridge-网络模式"}},[e._v("#")]),e._v(" 1.1 bridge 网络模式")]),e._v(" "),t("p",[e._v("在该模式中，Docker 守护进程创建了一个虚拟以太网桥 "),t("code",[e._v("docker0")]),e._v("，新建的容器会自动桥接到这个接口，附加在其上的任何网卡之间都能自动转发数据包。")]),e._v(" "),t("p",[e._v("默认情况下，守护进程会创建一对对等虚拟设备接口 "),t("code",[e._v("veth pair")]),e._v("，将其中一个接口设置为容器的 "),t("code",[e._v("eth0")]),e._v(" 接口（容器的网卡），另一个接口放置在宿主机的命名空间中，以类似 "),t("code",[e._v("vethxxx")]),e._v(" 这样的名字命名，从而将宿主机上的所有容器都连接到这个内部网络上。")]),e._v(" "),t("blockquote",[t("p",[e._v("veth是linux的一种虚拟网络设备，它有点类似于两张网卡中间用一条网线连着，veth设备总是成对出现，通常用来连接不同网络命名空间（下面开始简称NS），一端连着NS1的内核协议栈，另一端连着NS2的内核协议栈，一端发送的数据会立刻被另一端接收。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314210826060-16472633080363.png",alt:"image-20220314210826060"}})]),e._v(" "),t("p",[e._v("比如我运行一个基于 "),t("code",[e._v("busybox")]),e._v(" 镜像构建的容器 "),t("code",[e._v("bbox01")]),e._v("，查看 "),t("code",[e._v("ip addr")]),e._v("：")]),e._v(" "),t("blockquote",[t("p",[e._v("busybox 被称为嵌入式 Linux 的瑞士军刀，整合了很多小的 unix 下的通用功能到一个小的可执行文件中")])]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314210322371.png",alt:"image-20220314210322371"}})]),e._v(" "),t("p",[e._v("然后宿主机通过 "),t("code",[e._v("ip addr")]),e._v(" 查看信息如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314210352718.png",alt:"image-20220314210352718"}})]),e._v(" "),t("p",[e._v("通过以上的比较可以发现，证实了之前所说的：守护进程会创建一对对等虚拟设备接口 "),t("code",[e._v("veth pair")]),e._v("，将其中一个接口设置为容器的 "),t("code",[e._v("eth0")]),e._v(" 接口（容器的网卡），另一个接口放置在宿主机的命名空间中，以类似 "),t("code",[e._v("vethxxx")]),e._v(" 这样的名字命名。")]),e._v(" "),t("p",[e._v("同时，守护进程还会从网桥 "),t("code",[e._v("docker0")]),e._v(" 的私有地址空间中分配一个 IP 地址和子网给该容器，并设置 docker0 的 IP 地址为容器的默认网关。也可以安装 "),t("code",[e._v("yum install -y bridge-utils")]),e._v(" 以后，通过 "),t("code",[e._v("brctl show")]),e._v(" 命令查看网桥信息。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314210418516.png",alt:"image-20220314210418516"}})]),e._v(" "),t("p",[e._v("对于每个容器的 IP 地址和 Gateway 信息，我们可以通过 "),t("code",[e._v("docker inspect 容器名称|ID")]),e._v(" 进行查看，在 "),t("code",[e._v("NetworkSettings")]),e._v(" 节点中可以看到详细信息。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314210513825.png",alt:"image-20220314210513825"}})]),e._v(" "),t("p",[e._v("我们可以通过 "),t("code",[e._v("docker network inspect bridge")]),e._v(" 查看所有 "),t("code",[e._v("bridge")]),e._v(" 网络模式下的容器，在 "),t("code",[e._v("Containers")]),e._v(" 节点中可以看到容器名称。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314210537755.png",alt:"image-20220314210537755"}})]),e._v(" "),t("blockquote",[t("p",[e._v("关于 "),t("code",[e._v("bridge")]),e._v(" 网络模式的使用，只需要在创建容器时通过参数 "),t("code",[e._v("--net bridge")]),e._v(" 或者 "),t("code",[e._v("--network bridge")]),e._v(" 指定即可，当然这也是创建容器默认使用的网络模式，也就是说这个参数是可以省略的。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"img/4f5206a75a884cc2968ceb1f6c14acb6tplv-k3u1fbpfcp-zoom-1-16472631619632.image",alt:"img"}})]),e._v(" "),t("p",[e._v("Bridge 桥接模式的实现步骤主要如下：")]),e._v(" "),t("ul",[t("li",[e._v("Docker Daemon 利用 veth pair 技术，在宿主机上创建一对对等虚拟网络接口设备，假设为 veth0 和 veth1。而\nveth pair 技术的特性可以保证无论哪一个 veth 接收到网络报文，都会将报文传输给另一方。")]),e._v(" "),t("li",[e._v("Docker Daemon 将 veth0 附加到 Docker Daemon 创建的 docker0 网桥上。保证宿主机的网络报文可以发往 veth0；")]),e._v(" "),t("li",[e._v("Docker Daemon 将 veth1 添加到 Docker Container 所属的 namespace 下，并被改名为 eth0。如此一来，宿主机的网络报文若发往 veth0，则立即会被 Container 的 eth0 接收，实现宿主机到 Docker Container 网络的联通性；同时，也保证 Docker Container 单独使用 eth0，实现容器网络环境的隔离性。")])]),e._v(" "),t("h3",{attrs:{id:"_1-2-host网络模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-host网络模式"}},[e._v("#")]),e._v(" 1.2 host网络模式")]),e._v(" "),t("ul",[t("li",[e._v("host 网络模式需要在创建容器时通过参数 "),t("code",[e._v("--net host")]),e._v(" 或者 "),t("code",[e._v("--network host")]),e._v(" 指定；")]),e._v(" "),t("li",[e._v("采用 host 网络模式的 Docker Container，可以直接使用宿主机的 IP 地址与外界进行通信，若宿主机的 eth0 是一个公有 IP，那么容器也拥有这个公有 IP。同时容器内服务的端口也可以使用宿主机的端口，无需额外进行 NAT 转换；")]),e._v(" "),t("li",[e._v("host 网络模式可以让容器共享宿主机网络栈，这样的好处是外部主机与容器直接通信，但是容器的网络缺少隔离性。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"img/32ab62e6be9d4b4dbe9280ca3b9206f9tplv-k3u1fbpfcp-zoom-1-16472634114115.image",alt:"img"}})]),e._v(" "),t("p",[e._v("比如我基于 "),t("code",[e._v("host")]),e._v(" 网络模式创建了一个基于 "),t("code",[e._v("busybox")]),e._v(" 镜像构建的容器 "),t("code",[e._v("bbox02")]),e._v("，查看 "),t("code",[e._v("ip addr")]),e._v("：")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314211131825.png",alt:"image-20220314211131825"}})]),e._v(" "),t("p",[e._v("然后宿主机通过 "),t("code",[e._v("ip addr")]),e._v(" 查看信息如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314211205186.png",alt:"image-20220314211205186"}})]),e._v(" "),t("p",[e._v("返回信息一模一样，我们可以通过 "),t("code",[e._v("docker network inspect host")]),e._v(" 查看所有 "),t("code",[e._v("host")]),e._v(" 网络模式下的容器，在 "),t("code",[e._v("Containers")]),e._v(" 节点中可以看到容器名称。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314211305682.png",alt:"image-20220314211305682"}})]),e._v(" "),t("h3",{attrs:{id:"_1-3-none网络模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-none网络模式"}},[e._v("#")]),e._v(" 1.3 none网络模式")]),e._v(" "),t("ul",[t("li",[e._v("none 网络模式是指禁用网络功能，只有 lo 接口( local 的简写)，代表 127.0.0.1，即 localhost 本地环回接口。在创建容器时通过参数 "),t("code",[e._v("--net none")]),e._v(" 或者 "),t("code",[e._v("--network none")]),e._v(" 指定；")]),e._v(" "),t("li",[e._v("none 网络模式即不为 Docker Container 创建任何的网络环境，容器内部就只能使用 loopback 网络设备，不会再有其他的网络资源。可以说 none 模式为 Docke Container 做了极少的网络设定，但是俗话说得好“少即是多”，在没有网络配置的情况下，作为 Docker 开发者，才能在这基础做其他无限多可能的网络定制开发。这也恰巧体现了 Docker 设计理念的开放。")])]),e._v(" "),t("p"),e._v(" "),t("p",[e._v("比如我基于 "),t("code",[e._v("none")]),e._v(" 网络模式创建了一个基于 "),t("code",[e._v("busybox")]),e._v(" 镜像构建的容器 "),t("code",[e._v("bbox03")]),e._v("，查看 "),t("code",[e._v("ip addr")]),e._v("：")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314211405999.png",alt:"image-20220314211405999"}})]),e._v(" "),t("p",[e._v("我们可以通过 "),t("code",[e._v("docker network inspect none")]),e._v(" 查看所有 "),t("code",[e._v("none")]),e._v(" 网络模式下的容器，在 "),t("code",[e._v("Containers")]),e._v(" 节点中可以看到容器名称。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314211435707.png",alt:"image-20220314211435707"}})]),e._v(" "),t("h3",{attrs:{id:"_1-4-container网络模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-container网络模式"}},[e._v("#")]),e._v(" 1.4 container网络模式")]),e._v(" "),t("ul",[t("li",[e._v("Container 网络模式是 Docker 中一种较为特别的网络的模式。在创建容器时通过参数 "),t("code",[e._v("--net container:已运行的容器名称|ID")]),e._v(" 或者 "),t("code",[e._v("--network container:已运行的容器名称|ID")]),e._v(" 指定；")]),e._v(" "),t("li",[e._v("处于这个模式下的 Docker 容器会共享一个网络栈，这样两个容器之间可以使用 localhost 高效快速通信。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"img/905bc296603243ad8ee09e13b651e5batplv-k3u1fbpfcp-zoom-1-16472637133167.image",alt:"img"}})]),e._v(" "),t("p",[t("strong",[e._v("Container 网络模式即新创建的容器不会创建自己的网卡，配置自己的 IP，而是和一个指定的容器共享 IP、端口范围等")]),e._v("。同样两个容器除了网络方面相同之外，其他的如文件系统、进程列表等还是隔离的。")]),e._v(" "),t("p"),e._v(" "),t("p",[e._v("比如我基于容器 "),t("code",[e._v("bbox01")]),e._v(" 创建了 "),t("code",[e._v("container")]),e._v(" 网络模式的容器 "),t("code",[e._v("bbox04")]),e._v("，查看 "),t("code",[e._v("ip addr")]),e._v("：")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314211623961.png",alt:"image-20220314211623961"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314211722575.png",alt:"image-20220314211722575"}})]),e._v(" "),t("p",[e._v("宿主机的 "),t("code",[e._v("ip addr")]),e._v(" 信息如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314211815351.png",alt:"image-20220314211815351"}})]),e._v(" "),t("p",[e._v("通过以上测试可以发现，Docker 守护进程只创建了一对对等虚拟设备接口用于连接 bbox01 容器和宿主机，而 bbox04 容器则直接使用了 bbox01 容器的网卡信息。")]),e._v(" "),t("p",[e._v("这个时候如果将 bbox01 容器停止，会发现 bbox04 容器就只剩下 lo 接口了。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314211931085.png",alt:"image-20220314211931085"}})]),e._v(" "),t("p",[e._v("然后 bbox01 容器重启以后，bbox04 容器也重启一下，就又可以获取到网卡信息了。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314212039983.png",alt:"image-20220314212039983"}})]),e._v(" "),t("h2",{attrs:{id:"_2-link"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-link"}},[e._v("#")]),e._v(" 2. link")]),e._v(" "),t("p",[t("code",[e._v("docker run --link")]),e._v(" 可以用来链接两个容器，使得源容器（被链接的容器）和接收容器（主动去链接的容器）之间可以互相通信，并且接收容器可以获取源容器的一些数据，如源容器的环境变量。")]),e._v(" "),t("p",[e._v("这种方式"),t("strong",[e._v("官方已不推荐使用")]),e._v("，并且在未来版本可能会被移除，所以这里不作为重点讲解，感兴趣可自行了解。")]),e._v(" "),t("p",[e._v("官网警告信息：https://docs.docker.com/network/links/")]),e._v(" "),t("h2",{attrs:{id:"_3-自定义网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-自定义网络"}},[e._v("#")]),e._v(" 3. 自定义网络")]),e._v(" "),t("p",[e._v("虽然 Docker 提供的默认网络使用比较简单，但是为了保证各容器中应用的安全性，在实际开发中更推荐使用自定义的网络进行容器管理，以及启用容器名称到 IP 地址的自动 DNS 解析。")]),e._v(" "),t("blockquote",[t("p",[e._v("从 Docker 1.10 版本开始，docker daemon 实现了一个内嵌的 DNS server，使容器可以直接通过容器名称通信。方法很简单，只要在创建容器时使用 "),t("code",[e._v("--name")]),e._v(" 为容器命名即可。")]),e._v(" "),t("p",[e._v("但是使用 Docker DNS 有个限制："),t("strong",[e._v("只能在 user-defined 网络中使用")]),e._v("。也就是说，默认的 bridge 网络是无法使用 DNS 的，所以我们就需要自定义网络。")])]),e._v(" "),t("h3",{attrs:{id:"_3-1-创建网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-创建网络"}},[e._v("#")]),e._v(" 3.1 创建网络")]),e._v(" "),t("p",[e._v("通过 "),t("code",[e._v("docker network create")]),e._v(" 命令可以创建自定义网络模式，命令提示如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314212252217.png",alt:"image-20220314212252217"}})]),e._v(" "),t("p",[e._v("进一步查看 "),t("code",[e._v("docker network create")]),e._v(" 命令使用详情，发现可以通过 "),t("code",[e._v("--driver")]),e._v(" 指定网络模式且默认是 "),t("code",[e._v("bridge")]),e._v(" 网络模式，提示如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314212330400.png",alt:"image-20220314212330400"}})]),e._v(" "),t("p",[e._v("创建一个基于 "),t("code",[e._v("bridge")]),e._v(" 网络模式的自定义网络模式 "),t("code",[e._v("custom_network")]),e._v("，完整命令如下：")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" network create custom_network\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("通过 "),t("code",[e._v("docker network ls")]),e._v(" 查看网络模式：")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# docker network ls")]),e._v("\nNETWORK ID          NAME                DRIVER              SCOPE\nb3634bbd8943        bridge              bridge              "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("local")]),e._v("\n062082493d3a        custom_network      bridge              "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("local")]),e._v("\n885da101da7d        "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v("                "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v("                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("local")]),e._v("\nf4f1b3cf1b7f        none                null                "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("local")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("通过自定义网络模式 "),t("code",[e._v("custom_network")]),e._v(" 创建容器：")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-di")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),e._v(" bbox05 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--net")]),e._v(" custom_network busybox\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("通过 "),t("code",[e._v("docker inspect 容器名称|ID")]),e._v(" 查看容器的网络信息，在 "),t("code",[e._v("NetworkSettings")]),e._v(" 节点中可以看到详细信息。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314212658011-16472644188748.png",alt:"image-20220314212658011"}})]),e._v(" "),t("h3",{attrs:{id:"_3-2-连接网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-连接网络"}},[e._v("#")]),e._v(" 3.2 连接网络")]),e._v(" "),t("p",[e._v("通过 "),t("code",[e._v("docker network connect 网络名称 容器名称")]),e._v(" 为容器连接新的网络模式。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314212739281.png",alt:"image-20220314212739281"}})]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" network connect bridge bbox05\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("通过 "),t("code",[e._v("docker inspect 容器名称|ID")]),e._v(" 再次查看容器的网络信息，多增加了默认的 "),t("code",[e._v("bridge")]),e._v("。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314212823535.png",alt:"image-20220314212823535"}})]),e._v(" "),t("h3",{attrs:{id:"_3-3-断开网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-断开网络"}},[e._v("#")]),e._v(" 3.3 断开网络")]),e._v(" "),t("p",[e._v("通过 "),t("code",[e._v("docker network disconnect 网络名称 容器名称")]),e._v(" 命令断开网络。")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" network disconnect custom_network bbox05\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("通过 "),t("code",[e._v("docker inspect 容器名称|ID")]),e._v(" 再次查看容器的网络信息，发现只剩下默认的 "),t("code",[e._v("bridge")]),e._v("。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314212908989.png",alt:"image-20220314212908989"}})]),e._v(" "),t("h3",{attrs:{id:"_3-4-移除网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-移除网络"}},[e._v("#")]),e._v(" 3.4 移除网络")]),e._v(" "),t("p",[e._v("可以通过 "),t("code",[e._v("docker network rm 网络名称")]),e._v(" 命令移除自定义网络模式，网络模式移除成功会返回网络模式名称。")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" network "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" custom_network\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("注意：如果通过某个自定义网络模式创建了容器，则该网络模式无法删除。")])]),e._v(" "),t("h2",{attrs:{id:"_4-容器间网络通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-容器间网络通信"}},[e._v("#")]),e._v(" 4. 容器间网络通信")]),e._v(" "),t("p",[e._v("首先明确一点，容器之间要互相通信，必须要有属于同一个网络的网卡。")]),e._v(" "),t("p",[e._v("我们先创建两个基于默认的 "),t("code",[e._v("bridge")]),e._v(" 网络模式的容器。")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-di")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),e._v(" default_bbox01 busybox\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-di")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),e._v(" default_bbox02 busybox\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("通过 "),t("code",[e._v("docker network inspect bridge")]),e._v(" 查看两容器的具体 IP 信息。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314213118654.png",alt:"image-20220314213118654"}})]),e._v(" "),t("p",[e._v("然后测试两容器间是否可以进行网络通信。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314213204408.png",alt:"image-20220314213204408"}})]),e._v(" "),t("p",[e._v("经过测试，从结果得知两个属于同一个网络的容器是可以进行网络通信的，但是 IP 地址可能是不固定的，有被更改的情况发生，那容器内所有通信的 IP 地址也需要进行更改，能否使用容器名称进行网络通信？继续测试。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314213242757.png",alt:"image-20220314213242757"}})]),e._v(" "),t("p",[e._v("经过测试，从结果得知使用容器进行网络通信是不行的，那怎么实现这个功能呢？")]),e._v(" "),t("p",[e._v("从 Docker 1.10 版本开始，docker daemon 实现了一个内嵌的 DNS server，使容器可以直接通过容器名称通信。方法很简单，只要在创建容器时使用 "),t("code",[e._v("--name")]),e._v(" 为容器命名即可。")]),e._v(" "),t("p",[e._v("但是使用 Docker DNS 有个限制："),t("strong",[e._v("只能在 user-defined 网络中使用")]),e._v("。也就是说，默认的 bridge 网络是无法使用 DNS 的，所以我们就需要自定义网络。")]),e._v(" "),t("p",[e._v("我们先基于 "),t("code",[e._v("bridge")]),e._v(" 网络模式创建自定义网络 "),t("code",[e._v("custom_network")]),e._v("，然后创建两个基于自定义网络模式的容器。")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" network create custom_network\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-di")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),e._v(" custom_bbox01 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--net")]),e._v(" custom_network busybox\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-di")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--name")]),e._v(" custom_bbox02 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--net")]),e._v(" custom_network busybox\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("通过 "),t("code",[e._v("docker network inspect custom_network")]),e._v(" 查看两容器的具体 IP 信息")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314213406305.png",alt:"image-20220314213406305"}})]),e._v(" "),t("p",[e._v("然后测试两容器间是否可以进行网络通信，分别使用具体 IP 和容器名称进行网络通信。")]),e._v(" "),t("p",[t("img",{attrs:{src:"img/image-20220314213435800.png",alt:"image-20220314213435800"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);