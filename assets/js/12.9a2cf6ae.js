(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{378:function(s,a,e){"use strict";e.r(a);var t=e(7),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker常用命令"}},[s._v("#")]),s._v(" Docker常用命令")]),s._v(" "),a("p",[s._v("官方文档：https://docs.docker.com/reference/")]),s._v(" "),a("h2",{attrs:{id:"_1-查看镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看镜像"}},[s._v("#")]),s._v(" 1. 查看镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-15-centos ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker images")]),s._v("\nREPOSITORY   TAG       IMAGE ID   CREATED   SIZE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("REPOSITORY")]),s._v("：镜像在仓库中的名称")]),s._v(" "),a("li",[a("code",[s._v("TAG")]),s._v("：镜像标签(一般是软件的版本号)")]),s._v(" "),a("li",[a("code",[s._v("IMAGE ID")]),s._v("：镜像 ID")]),s._v(" "),a("li",[a("code",[s._v("CREATED")]),s._v("：镜像的创建日期（不是获取该镜像的日期）")]),s._v(" "),a("li",[a("code",[s._v("SIZE")]),s._v("：镜像大小")])]),s._v(" "),a("h2",{attrs:{id:"_2-搜索镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-搜索镜像"}},[s._v("#")]),s._v(" 2. 搜索镜像")]),s._v(" "),a("p",[s._v("如果需要下载镜像，但是又不知道docker有没有，可以通过搜索镜像命令进行查看。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-15-centos ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker search 镜像名称")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("比如：")]),s._v(" "),a("p",[a("img",{attrs:{src:"img/image-20220311104742642.png",alt:"image-20220311104742642"}})]),s._v(" "),a("ul",[a("li",[a("code",[s._v("NAME")]),s._v("：镜像名称")]),s._v(" "),a("li",[a("code",[s._v("DESCRIPTION")]),s._v("：镜像描述")]),s._v(" "),a("li",[a("code",[s._v("STARS")]),s._v("：用户评价，反映一个镜像的受欢迎程度")]),s._v(" "),a("li",[a("code",[s._v("OFFICIAL")]),s._v("：是否为官方构建")]),s._v(" "),a("li",[a("code",[s._v("AUTOMATED")]),s._v("：自动构建，表示该镜像由 Docker Hub 自动构建流程创建的。")])]),s._v(" "),a("h2",{attrs:{id:"_3-拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-拉取镜像"}},[s._v("#")]),s._v(" 3. 拉取镜像")]),s._v(" "),a("p",[s._v("拉取镜像就是从中央仓库下载镜像到本地。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-15-centos ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker pull 镜像名称:tag")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果不声明tag，默认拉取latest版本。")]),s._v(" "),a("p",[s._v("可以通过https://hub.docker.com/ 搜索该镜像，查看支持的 tag 信息。")]),s._v(" "),a("p",[s._v("比如我们要下载centos7的镜像：")]),s._v(" "),a("p",[a("img",{attrs:{src:"img/image-20220311105136149.png",alt:"image-20220311105136149"}})]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-15-centos ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker pull centos:7")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-镜像仓库加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-镜像仓库加速"}},[s._v("#")]),s._v(" 4. 镜像仓库加速")]),s._v(" "),a("p",[s._v("因为docker的网站是国外的，有时候访问速度较慢，我们可以设置镜像仓库加速，提升获取Docker官方镜像的速度。")]),s._v(" "),a("p",[s._v("这里我们选用阿里云，阿里云搜索"),a("a",{attrs:{href:"https://cr.console.aliyun.com/cn-beijing/instances",target:"_blank",rel:"noopener noreferrer"}},[s._v("容器镜像服务"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"img/image-20220311105601356.png",alt:"image-20220311105601356"}})]),s._v(" "),a("p",[s._v("选择centos，因为我的操作系统是centos的。")]),s._v(" "),a("p",[a("img",{attrs:{src:"img/image-20220311105631955.png",alt:"image-20220311105631955"}})]),s._v(" "),a("p",[s._v("根据提示，配置镜像加速器")]),s._v(" "),a("h2",{attrs:{id:"_5-删除镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-删除镜像"}},[s._v("#")]),s._v(" 5. 删除镜像")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-15-centos ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker rmi 镜像id")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-15-centos ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker rmi 镜像名称")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-15-centos ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker rmi 镜像名称:tag")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("使用镜像id删除的时候，输入id的前几位即可")])]),s._v(" "),a("blockquote",[a("p",[s._v("删除镜像的时候，必须保证没有镜像被使用，也就是说没有通过镜像创建容器，如果有，则必须先删除容器")])]),s._v(" "),a("p",[a("code",[s._v("docker images -q")]),s._v(" 可以查询到所有镜像的 ID")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#以下命令可以删除 所有镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-q")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_6-查看正在运行的容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-查看正在运行的容器"}},[s._v("#")]),s._v(" 6. 查看正在运行的容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps")]),s._v("\nCONTAINER ID   IMAGE   COMMAND  CREATED    STATUS  PORTS   NAMES\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("CONTAINER ID")]),s._v("：容器 ID")]),s._v(" "),a("li",[a("code",[s._v("IMAGE")]),s._v("：所属镜像")]),s._v(" "),a("li",[a("code",[s._v("COMMAND")]),s._v("：命令")]),s._v(" "),a("li",[a("code",[s._v("CREATED")]),s._v("：创建时间")]),s._v(" "),a("li",[a("code",[s._v("STATUS")]),s._v("：容器状态 Up运行 Exited退出")]),s._v(" "),a("li",[a("code",[s._v("PORTS")]),s._v("：端口")]),s._v(" "),a("li",[a("code",[s._v("NAMES")]),s._v("：容器名称")])]),s._v(" "),a("h2",{attrs:{id:"_7-查看所有的容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-查看所有的容器"}},[s._v("#")]),s._v(" 7. 查看所有的容器")]),s._v(" "),a("p",[s._v("不管是运行的还是未运行的")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps -a")]),s._v("\nCONTAINER ID   IMAGE   COMMAND  CREATED    STATUS  PORTS   NAMES\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"img/image-20220311114125895.png",alt:"image-20220311114125895"}})]),s._v(" "),a("h2",{attrs:{id:"_8-其他容器查看命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-其他容器查看命令"}},[s._v("#")]),s._v(" 8. 其他容器查看命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看退出的容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exited\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看最后一次运行的容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_9-容器启动命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-容器启动命令"}},[s._v("#")]),s._v(" 9. 容器启动命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run [OPTIONS] IMAGE [COMMAND] [ARG...]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("-i")]),s._v("：表示运行容器；")]),s._v(" "),a("li",[a("code",[s._v("-t")]),s._v("：表示容器启动后会进入其命令行。加入这两个参数后，容器创建就能登录进去。即分配一个伪终端；")]),s._v(" "),a("li",[a("code",[s._v("--name")]),s._v("：为创建的容器命名；")]),s._v(" "),a("li",[a("code",[s._v("-v")]),s._v("：表示目录映射关系（前者是宿主机目录，后者是映射到宿主机上的目录），可以使用多个 -v 做多个目录或文件映射。注意：最好做目录映射，在宿主机上做修改，然后共享到容器上；")]),s._v(" "),a("li",[a("code",[s._v("-d")]),s._v("：在 run 后面加上 -d 参数，则会创建一个守护式容器在后台运行（这样创建容器后不会自动登录容器，如果只加 -i -t 两个参数，创建容器后就会自动进容器里）；")]),s._v(" "),a("li",[a("code",[s._v("-p")]),s._v("：表示端口映射，前者是宿主机端口，后者是容器内的映射端口。可以使用多个 -p 做多个端口映射。")]),s._v(" "),a("li",[a("code",[s._v("-P")]),s._v("：随机使用宿主机的可用端口与容器内暴露的端口映射。")])]),s._v(" "),a("h3",{attrs:{id:"_9-1-创建并进入容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-创建并进入容器"}},[s._v("#")]),s._v(" 9.1 创建并进入容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" 容器名称 镜像名称:标签 /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("注意：Docker 容器运行必须有一个前台进程， 如果没有前台进程执行，容器认为是空闲状态，就会自动退出。")])]),s._v(" "),a("p",[s._v("退出命令 exit，一旦退出容器停止运行")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mszlu_mysql mysql:5.7 /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_9-2-守护方式创建容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-守护方式创建容器"}},[s._v("#")]),s._v(" 9.2 守护方式创建容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-di")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" 容器名称 镜像名称:标签\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("此方式创建完成后，会启动容器，但不会进入容器，容器一直运行，除非使用docker stop命令关闭容器")])]),s._v(" "),a("h3",{attrs:{id:"_9-3-守护方式进入容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-守护方式进入容器"}},[s._v("#")]),s._v(" 9.3 守护方式进入容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 必须是容器正在运行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" 容器名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("容器ID /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_10-停止与启动容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-停止与启动容器"}},[s._v("#")]),s._v(" 10. 停止与启动容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop 容器名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("容器ID\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" start 容器名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("容器ID\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_11-文件拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-文件拷贝"}},[s._v("#")]),s._v(" 11. 文件拷贝")]),s._v(" "),a("p",[s._v("如果我们需要将文件拷贝到容器内可以使用 cp 命令。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 需要拷贝的文件或目录 容器名称:容器目录\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("也可以将文件从容器内拷贝出来。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 容器名称:容器目录 需要拷贝的文件或目录\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_12-容器数据卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-容器数据卷"}},[s._v("#")]),s._v(" 12. 容器数据卷")]),s._v(" "),a("blockquote",[a("p",[s._v("数据卷这个概念非常重要")])]),s._v(" "),a("p",[s._v("比如有以下场景：")]),s._v(" "),a("ol",[a("li",[s._v("配置文件需要频繁修改")]),s._v(" "),a("li",[s._v("容器内部的数据需要备份")]),s._v(" "),a("li",[s._v("删除容器不希望删除数据")])]),s._v(" "),a("p",[s._v("上述的需求，有了数据卷之后，变的非常容易。")]),s._v(" "),a("p",[s._v("我们可以在"),a("code",[s._v("创建容器")]),s._v("的时候，将宿主机的"),a("code",[s._v("目录与容器内的目录进行映射")]),s._v("，这样我们就可以通过修改宿主机某个目录的文件从而去影响容器，而且这个操作是"),a("code",[s._v("双向绑定")]),s._v("的，也就是说容器内的操作也会影响到宿主机，实现备份功能。")]),s._v(" "),a("p",[s._v("但是容器被删除的时候，"),a("code",[s._v("宿主机")]),s._v("的内容"),a("code",[s._v("并不会被删除")]),s._v("，因为底层是通过"),a("code",[s._v("拷贝")]),s._v("实现的。如果多个容器挂载同一个目录，其中一个容器被删除，其他容器的内容也不会受到影响，同理，底层是拷贝实现的。")]),s._v(" "),a("blockquote",[a("p",[s._v("容器与宿主机之间的数据卷属于引用的关系，数据卷是从外界挂载到容器内部中的，所以可以脱离容器的生命周期而独立存在，正是由于数据卷的生命周期并不等同于容器的生命周期，在容器退出或者删除以后，数据卷仍然不会受到影响，数据卷的生命周期会一直持续到没有容器使用它为止。")])]),s._v(" "),a("h3",{attrs:{id:"_12-1-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-命令"}},[s._v("#")]),s._v(" 12.1 命令")]),s._v(" "),a("p",[s._v("创建容器添加 "),a("code",[s._v("-v")]),s._v(" 参数，格式为"),a("code",[s._v("宿主机目录:容器目录")]),s._v("，例如：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-di")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /mszlu/docker/centos/data:/usr/local/data "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" centos7-01 centos:7\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多目录挂载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-di")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /宿主机目录:/容器目录 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /宿主机目录2:/容器目录2 镜像名\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("注意：目录挂载操作可能会出现权限不足的提示。这是因为 CentOS7 中的安全模块 SELinux 把权限禁掉了，在 docker run 时通过 "),a("code",[s._v("--privileged=true")]),s._v(" 给该容器加权限来解决挂载的目录没有权限的问题。")])]),s._v(" "),a("h3",{attrs:{id:"_12-2-匿名挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-匿名挂载"}},[s._v("#")]),s._v(" 12.2 匿名挂载")]),s._v(" "),a("p",[s._v("匿名挂载只需要写容器目录即可，宿主机对应的目录会在 "),a("code",[s._v("/var/lib/docker/volumes")]),s._v(" 中生成。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匿名挂载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-di")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /usr/local/data "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" centos7-02 centos:7\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 volume 数据卷信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:"img/image-20220311122444174.png",alt:"image-20220311122444174"}})]),s._v(" "),a("p",[s._v("如果需要知道当前容器的挂载情况：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker inspect centos7-02（容器名称）")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"img/image-20220311122624827.png",alt:"image-20220311122624827"}})]),s._v(" "),a("h3",{attrs:{id:"_12-3-具名挂载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-3-具名挂载"}},[s._v("#")]),s._v(" 12.3 具名挂载")]),s._v(" "),a("p",[s._v("具名挂载就是给数据卷起了个名字，容器外对应的目录会在 "),a("code",[s._v("/var/lib/docker/volume")]),s._v(" 中生成。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 具名挂载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-di")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" docker_centos_data:/usr/local/data "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" centos7-03 centos:7\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 volume 数据卷信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("通过 "),a("code",[s._v("docker volume inspect 数据卷名称")]),s._v(" 可以查看该数据卷对应宿主机的目录地址。")]),s._v(" "),a("p",[a("img",{attrs:{src:"img/image-20220311122909688.png",alt:"image-20220311122909688"}})]),s._v(" "),a("h3",{attrs:{id:"_12-4-只读-读写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-4-只读-读写"}},[s._v("#")]),s._v(" 12.4 只读/读写")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只读。只能通过修改宿主机内容实现对容器的数据管理。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /宿主机目录:/容器目录:ro 镜像名\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读写，默认。宿主机和容器可以双向操作数据。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /宿主机目录:/容器目录:rw 镜像名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_12-5-数据卷容器-数据卷继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-5-数据卷容器-数据卷继承"}},[s._v("#")]),s._v(" 12.5 数据卷容器（数据卷继承）")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器 centos7-01 指定目录挂载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-di")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /mydata/docker_centos/data:/usr/local/data "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" centos7-01 centos:7\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器 centos7-04 和 centos7-05 相当于继承 centos7-01 容器的挂载目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-di")]),s._v(" --volumes-from centos7-01 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" centos7-04 centos:7\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-di")]),s._v(" --volumes-from centos7-01 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" centos7-05 centos:7\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("上述 "),a("code",[s._v("centos7-01")]),s._v("称为数据卷容器")]),s._v(" "),a("p",[s._v("这样做的好处就是，如果需要创建大量的相同目录的映射关系，可以简化命令便于操作和记忆")]),s._v(" "),a("h2",{attrs:{id:"_13-查看容器ip地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-查看容器ip地址"}},[s._v("#")]),s._v(" 13. 查看容器ip地址")]),s._v(" "),a("p",[s._v("我们可以通过以下命令查看容器的元信息。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect 容器名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("容器ID\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("也可以直接执行下面的命令直接输出 IP 地址。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" inspect "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--format")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{{.NetworkSettings.IPAddress}}'")]),s._v(" 容器名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("容器ID\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_14-删除容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-删除容器"}},[s._v("#")]),s._v(" 14. 删除容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除指定容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 容器名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("容器ID\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除多个容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 容器名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("容器ID 容器名称"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("容器ID\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);