(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{499:function(a,t,r){"use strict";r.r(t);var s=r(7),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"类加载运行全过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载运行全过程"}},[a._v("#")]),a._v(" 类加载运行全过程")]),a._v(" "),t("h2",{attrs:{id:"通过java命令执行代码的大体流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过java命令执行代码的大体流程"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/m0_45406092/article/details/108984101",target:"_blank",rel:"noopener noreferrer"}},[a._v("通过Java命令执行代码的大体流程"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v('java.exe  => jvm.dll => sun.misc.Laucher.getLauncher() =>  laucher.getClassLoader(); => loader.loacClass("Test") => Test.Main();')]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 1. java Hello")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 2. java.exe调c++写的JVM")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 3. sun.misc.Launcher类是java的入口")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Launcher")]),a._v(" launcher "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Launcher")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getLauncher")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 4. 加载运行的Hello类")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ClassLoader")]),a._v(" classLoader "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" launcher"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getClassLoader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        classLoader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("loadClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 5. 调用main方法.")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Hello")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br")])]),t("h2",{attrs:{id:"loadclass类加载过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loadclass类加载过程"}},[a._v("#")]),a._v(" loadClass类加载过程")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("加载 >> 验证 >> 准备 >> 解析 >> 初始化 >> 使用 >> 卸载")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("使用到")]),a._v("该类的时候才进行加载，"),t("strong",[a._v("加载")]),a._v("时需要验证一下字节码文件的正确性，再"),t("strong",[a._v("准备")]),a._v("给类的静态变量分配内存并赋予默认值，再**解析 **")]),a._v(" "),t("p",[a._v("将符号引用替换为直接引用使得指向数据所存内存的指针或句柄，再"),t("strong",[a._v("初始化")]),a._v("给静态变量初始化为指定的值并且执行静态代码块")])]),a._v(" "),t("li",[t("p",[a._v("**注意 **: 主类在运行过程中如果使用到其它类，会逐步加载这些类。jar包或war包里的类不是一次性全部加载的，是使用到时才加载。")])])]),a._v(" "),t("h2",{attrs:{id:"类加载器和双亲委派机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类加载器和双亲委派机制"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/367609494",target:"_blank",rel:"noopener noreferrer"}},[a._v("类加载器和双亲委派机制"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"几种常见的类加载器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#几种常见的类加载器"}},[a._v("#")]),a._v(" 几种常见的类加载器")]),a._v(" "),t("p",[a._v("引导类加载器、扩展类加载器、应用程序类加载器、自定义加载器")]),a._v(" "),t("p",[t("img",{attrs:{src:"JVM.assets/image-20211125114123781.png",alt:"image-20211125114123781"}})]),a._v(" "),t("h2",{attrs:{id:"launcher类加载器初始化过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#launcher类加载器初始化过程"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/912a7b60f316",target:"_blank",rel:"noopener noreferrer"}},[a._v("Launcher类加载器初始化过程"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/feiyingHiei/article/details/86553614",target:"_blank",rel:"noopener noreferrer"}},[a._v("JAVA Launcher简析"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/u013851082/article/details/60962141",target:"_blank",rel:"noopener noreferrer"}},[a._v("Launche 初始化 SecurityManager"),t("OutboundLink")],1)]),a._v(" "),t("h1",{attrs:{id:"thread上下文classloader的思考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thread上下文classloader的思考"}},[a._v("#")]),a._v(" Thread上下文ClassLoader的思考")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/Truong/article/details/34436367",target:"_blank",rel:"noopener noreferrer"}},[a._v("Thread.currentThread().getContextClassLoader()与Test.class.getClassLoader()区别"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"什么是双亲委派机制-appclassloader的loadclass源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是双亲委派机制-appclassloader的loadclass源码"}},[a._v("#")]),a._v(" 什么是双亲委派机制，AppClassLoader的loadClass源码")]),a._v(" "),t("ol",[t("li",[a._v("首先，检查一下指定名称的类是否已经加载过，如果加载过了，就不需要再加载，直接返回。")]),a._v(" "),t("li",[a._v("如果此类没有加载过，那么，再判断一下是否有父加载器；如果有父加载器，则由父加载器加载（即调用parent.loadClass(name, false);）.或者是调用bootstrap类加载器来加载。")]),a._v(" "),t("li",[a._v("如果父加载器及bootstrap类加载器都没有找到指定的类，那么调用当前类加载器的findClass方法来完成类加载。")])]),a._v(" "),t("h2",{attrs:{id:"为什么要设计双亲委派机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要设计双亲委派机制"}},[a._v("#")]),a._v(" 为什么要设计双亲委派机制")]),a._v(" "),t("ul",[t("li",[a._v("沙箱安全机制")]),a._v(" "),t("li",[a._v("避免类的重复加载，保证被加载类的唯一性")])]),a._v(" "),t("h2",{attrs:{id:"全盘负责委托机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全盘负责委托机制"}},[a._v("#")]),a._v(" 全盘负责委托机制")]),a._v(" "),t("p",[a._v("“全盘负责”是指当一个ClassLoader装载一个类时，除非显示地使用另一个ClassLoader，则该类所依赖及引用的类也由这个CladdLoader载入。")]),a._v(" "),t("h2",{attrs:{id:"打破双亲委派机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打破双亲委派机制"}},[a._v("#")]),a._v(" 打破双亲委派机制")]),a._v(" "),t("h3",{attrs:{id:"如何实现-核心方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何实现-核心方法"}},[a._v("#")]),a._v(" 如何实现，核心方法")]),a._v(" "),t("ul",[t("li",[a._v("一个是loadClass(String, boolean)")]),a._v(" "),t("li",[a._v("findClass")])]),a._v(" "),t("h3",{attrs:{id:"string可以实现吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string可以实现吗"}},[a._v("#")]),a._v(" String可以实现吗?")]),a._v(" "),t("p",[t("code",[a._v("java.lang.SecurityException: Prohibited package name: java.lang")])]),a._v(" "),t("p",[a._v("沙箱安全机制，需要再解除这个限制")]),a._v(" "),t("h3",{attrs:{id:"tomcat打破双亲委派机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tomcat打破双亲委派机制"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/czmacd/article/details/54017027",target:"_blank",rel:"noopener noreferrer"}},[a._v("Tomcat打破双亲委派机制"),t("OutboundLink")],1)]),a._v(" "),t("ul",[t("li",[t("p",[a._v("它要解决什么问题:")]),a._v(" "),t("blockquote",[t("p",[a._v("不同的应用程序可能会依赖同一个第三方类库的不同版本")]),a._v(" "),t("p",[a._v("相同的类库相同的版本可以共享")]),a._v(" "),t("p",[a._v("web容器也有自己依赖的类库，不能与应用程序的类库混淆")]),a._v(" "),t("p",[a._v("web容器要支持jsp的修改")])])]),a._v(" "),t("li",[t("p",[a._v("Tomcat 如果使用默认的双亲委派类加载机制行不行,为什么.")])]),a._v(" "),t("li",[t("p",[a._v("Tomcat自定义加载器有哪些")]),a._v(" "),t("blockquote",[t("p",[a._v("URLClassLoader   加载catalina.properties中配置的 common、server、shared的jar.")]),a._v(" "),t("p",[a._v("WebappClassLoader  各个Webapp私有的类加载器，加载路径中的class只对当前Webapp可见")]),a._v(" "),t("p",[a._v("JasperLoader 加载范围仅仅是这个JSP文件所编译出来的那一个.Class文件")])])]),a._v(" "),t("li",[t("p",[a._v("模拟实现Tomcat的JasperLoader热加载")])])]),a._v(" "),t("blockquote",[t("p",[a._v("原理：后台启动线程监听jsp文件变化，如果变化了找到该jsp对应的servlet类的加载器引用(gcroot)，重新生成新的"),t("strong",[a._v("JasperLoader")]),a._v("加载器赋值给引用，然后加载新的jsp对应的servlet类，之前的那个加载器因为没有gcroot引用了，下一次gc的时候会被销毁。类也会被卸载")])]),a._v(" "),t("h2",{attrs:{id:"不同类的对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不同类的对象"}},[a._v("#")]),a._v(" 不同类的对象")]),a._v(" "),t("p",[a._v("同一个JVM内，两个相同包名和类名的类对象可以共存，因为他们的类加载器可以不一样，所以看两个类对象是否是同一个，除了看类的包名和类名是否都相同之外，还需要他们的类加载器也是同一个才能认为他们是同一个。")]),a._v(" "),t("h1",{attrs:{id:"jvm内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm内存模型"}},[a._v("#")]),a._v(" JVM内存模型")]),a._v(" "),t("h2",{attrs:{id:"概括内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概括内存模型"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/101495810",target:"_blank",rel:"noopener noreferrer"}},[a._v("概括内存模型"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2021/png/12902056/1616914973046-144cb588-2516-462c-9bd3-7679a2b5ff17.png?x-oss-process=image%2Fresize%2Cw_1143%2Climit_0",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"栈帧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栈帧"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://juejin.cn/post/6979589472883048456",target:"_blank",rel:"noopener noreferrer"}},[a._v("栈帧"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("更加详细: "),t("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1620319",target:"_blank",rel:"noopener noreferrer"}},[a._v("理解 JVM Stack 栈帧 Frame"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"堆结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆结构"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/killerofjava/article/details/104295537",target:"_blank",rel:"noopener noreferrer"}},[a._v("堆结构"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"方法区-元空间、永久代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法区-元空间、永久代"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://www.cnblogs.com/jklixin/p/13457936.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("方法区（元空间、永久代）"),t("OutboundLink")],1)]),a._v(" "),t("ul",[t("li",[t("p",[a._v("永久代和元空间的区别，元空间和方法区的区别:  "),t("a",{attrs:{href:"https://www.cnblogs.com/secbro/p/11718987.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("永久代到元空间"),t("OutboundLink")],1)]),a._v(" "),t("blockquote",[t("p",[a._v("方法区是规范，元空间/永久代是实现。  永久代和堆是连续的一块内存 。1.8以后元空间不再与堆连续，而且是存在于本地内存")])])])]),a._v(" "),t("h2",{attrs:{id:"jvm内存参数设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm内存参数设置"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://pic1.zhimg.com/v2-354d31865d1fb3362f5a1ca938f9a770_r.jpg",target:"_blank",rel:"noopener noreferrer"}},[a._v("JVM内存参数设置"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("code",[a._v("java -server -Xms2048M -Xmx2048M -Xmn1024M -Xss512K -XX:MetaspaceSize=256M -XX:MaxMetaspaceSize=256M -jar microservice-eureka-server.jar")])]),a._v(" "),t("p",[a._v("**结论：**"),t("strong",[a._v("通过上面这些内容介绍，大家应该对JVM优化有些概念了，就是尽可能让对象都在新生代里分配和回收，尽量别让太多对象频繁进入老年代，避免频繁对老年代进行垃圾回收，同时给系统充足的内存大小，避免新生代频繁的进行垃圾回收。")])]),a._v(" "),t("h1",{attrs:{id:"jvm对象创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm对象创建"}},[a._v("#")]),a._v(" JVM对象创建")]),a._v(" "),t("h2",{attrs:{id:"java对象的创建过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java对象的创建过程"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/143743569",target:"_blank",rel:"noopener noreferrer"}},[a._v("JAVA对象的创建过程"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("img",{attrs:{src:"https://pic2.zhimg.com/80/v2-24ce6828950c1890a10a63f797eb61d1_720w.jpg",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"分配内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分配内存"}},[a._v("#")]),a._v(" 分配内存")]),a._v(" "),t("p",[a._v("对象所需内存的大小在类加载完成后便可完全确定，为对象分配空间的任务等同于把 一块确定大小的内存从Java堆中划分出来。")]),a._v(" "),t("h3",{attrs:{id:"如何划分内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何划分内存"}},[a._v("#")]),a._v(" 如何划分内存")]),a._v(" "),t("ul",[t("li",[a._v("“指针碰撞”（Bump the Pointer）(默认)")]),a._v(" "),t("li",[a._v("“空闲列表”（Free List）")])]),a._v(" "),t("h3",{attrs:{id:"解决并发问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决并发问题"}},[a._v("#")]),a._v(" 解决并发问题")]),a._v(" "),t("ul",[t("li",[a._v("CAS（compare and swap）配上失败重试")]),a._v(" "),t("li",[a._v("本地线程分配缓冲（Thread Local Allocation Buffer,TLAB）  (JVM会默认开启-XX:+UseTLAB)")])]),a._v(" "),t("h2",{attrs:{id:"对象大小-存储的布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象大小-存储的布局"}},[a._v("#")]),a._v(" 对象大小(存储的布局)")]),a._v(" "),t("p",[a._v("对象在内存中存储的布局可以分为3块区域：对象头（Header）、 实例数据（Instance Data）和对齐填充（Padding）")]),a._v(" "),t("h3",{attrs:{id:"对象头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象头"}},[a._v("#")]),a._v(" 对象头")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("自身的运行时数据")]),a._v(" "),t("blockquote",[t("p",[a._v("哈希码（HashCode）、GC分代年龄、锁状态标志、线程持有的锁、偏向线程ID、偏向时 间戳等")])])]),a._v(" "),t("li",[t("p",[a._v("类型指针")]),a._v(" "),t("blockquote",[t("p",[a._v("指向它的类元数据的指针")])])])]),a._v(" "),t("h3",{attrs:{id:"指针压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指针压缩"}},[a._v("#")]),a._v(" 指针压缩")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("堆内存大于32G时，压缩指针会失效")])]),a._v(" "),t("li",[t("p",[a._v("堆内存小于4G时，不需要启用指针压缩")])]),a._v(" "),t("li",[t("p",[a._v("为什么要进行指针压缩？？")]),a._v(" "),t("blockquote",[t("p",[a._v("使用32位指针(实际存储用64位)，使用较大指针在主内存和缓存之间移动数据，占用较大IO，同时GC也会承受较大压力。")])])])]),a._v(" "),t("h1",{attrs:{id:"内存分配机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存分配机制"}},[a._v("#")]),a._v(" 内存分配机制")]),a._v(" "),t("h2",{attrs:{id:"对象内存分配流程图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象内存分配流程图"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://www.cnblogs.com/gaopengpy/p/12180381.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("对象内存分配流程图"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/757939/202001/757939-20200111181321360-581256762.jpg",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"对象栈上分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象栈上分配"}},[a._v("#")]),a._v(" 对象栈上分配")]),a._v(" "),t("p",[a._v("为了减少临时对象在堆内分配的数量，JVM"),t("strong",[a._v("默认开启")]),a._v("通过"),t("strong",[a._v("逃逸分析")]),a._v("(对象动态作用域:方法、线程)确定该对象不会被外部访问。如果不会逃逸可以将该对象在"),t("strong",[a._v("栈上分配")]),a._v("内存，这样该对象所占用的内存空间就可以随栈帧出栈而销毁，就减轻了垃圾回收的压力。")]),a._v(" "),t("ul",[t("li",[a._v("逃逸分析")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://luoyoubao.gitbooks.io/jvm/content/bian-yi-you-hua/biao-liang-ti-huan.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("标量替换"),t("OutboundLink")],1),a._v(" "),t("img",{attrs:{src:"JVM.assets/20180404145443001.png",alt:""}})]),a._v(" "),t("li",[a._v("标量与聚合量")])]),a._v(" "),t("h2",{attrs:{id:"对象在eden区分配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象在eden区分配"}},[a._v("#")]),a._v(" 对象在Eden区分配")]),a._v(" "),t("h2",{attrs:{id:"存入survior空间-提前转移到老年代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存入survior空间-提前转移到老年代"}},[a._v("#")]),a._v(" 存入Survior空间,提前转移到老年代")]),a._v(" "),t("p",[a._v("Eden区没有足够空间进行分配时，虚拟机将发起一次Minor GC，GC期间虚拟机又发现对象无法存入Survior空间，所以只好把新生代的对象"),t("strong",[a._v("提前转移到老年代")]),a._v("中去，老年代上的空间足够存放allocation1，所以不会出现Full GC。执行Minor GC后，后面分配的对象如果能够存在eden区的话，还是会在eden区分配内存")]),a._v(" "),t("h2",{attrs:{id:"大对象直接进入老年代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大对象直接进入老年代"}},[a._v("#")]),a._v(" 大对象直接进入老年代")]),a._v(" "),t("h2",{attrs:{id:"长期存活的对象将进入老年代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#长期存活的对象将进入老年代"}},[a._v("#")]),a._v(" 长期存活的对象将进入老年代")]),a._v(" "),t("h2",{attrs:{id:"对象动态年龄判断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象动态年龄判断"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/989d3b06a49d",target:"_blank",rel:"noopener noreferrer"}},[a._v("对象动态年龄判断"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("当前放对象的Survivor区域里(其中一块区域，放对象的那块s区)，一批对象的总大小大于这块Survivor区域内存大小的50%(-XX:TargetSurvivorRatio可以指定)，那么此时"),t("strong",[a._v("大于等于")]),a._v("这批对象年龄最大值的对象，就可以"),t("strong",[a._v("直接进入老年代")]),a._v("了。")]),a._v(" "),t("blockquote",[t("ol",[t("li",[a._v("MaxTenuringThreshold为15")]),a._v(" "),t("li",[a._v("年龄1的对象占用了33%")]),a._v(" "),t("li",[a._v("年龄2的对象占用33%")]),a._v(" "),t("li",[a._v("年龄3的对象占用34%。")])]),a._v(" "),t("p",[a._v("年龄1的占用了33%，年龄2的占用了33%，累加和超过默认的TargetSurvivorRatio（50%），年龄2和年龄3的对象都要晋升。")]),a._v(" "),t("p",[a._v("年龄从小到大进行累加，当加入某个年龄段后，累加和超过survivor区域*TargetSurvivorRatio的时候，就从这个年龄段网上的年龄的对象进行晋升。")])]),a._v(" "),t("h2",{attrs:{id:"老年代空间分配担保机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#老年代空间分配担保机制"}},[a._v("#")]),a._v(" 老年代空间分配担保机制")]),a._v(" "),t("p",[a._v("年轻代每次"),t("strong",[a._v("minor gc")]),a._v("之前JVM都会计算下老年代"),t("strong",[a._v("剩余可用空间")])]),a._v(" "),t("p",[a._v("如果这个可用空间小于年轻代里现有的所有对象大小之和("),t("strong",[a._v("包括垃圾对象")]),a._v(")")]),a._v(" "),t("p",[a._v("就会看一个“-XX:-HandlePromotionFailure”(jdk1.8默认就设置了)的参数是否设置了")]),a._v(" "),t("p",[a._v("如果有这个参数，就会看看老年代的可用内存大小，是否大于之前每一次minor gc后进入老年代的对象的"),t("strong",[a._v("平均大小")]),a._v("。")]),a._v(" "),t("p",[a._v('如果上一步结果是小于或者之前说的参数没有设置，那么就会触发一次Full gc，对老年代和年轻代一起回收一次垃圾，如果回收完还是没有足够空间存放新的对象就会发生"OOM"')]),a._v(" "),t("h1",{attrs:{id:"对象内存回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象内存回收"}},[a._v("#")]),a._v(" 对象内存回收")]),a._v(" "),t("h2",{attrs:{id:"垃圾回收算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收算法"}},[a._v("#")]),a._v(" 垃圾回收算法")]),a._v(" "),t("h3",{attrs:{id:"引用计数法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用计数法"}},[a._v("#")]),a._v(" 引用计数法")]),a._v(" "),t("h3",{attrs:{id:"可达性分析算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可达性分析算法"}},[a._v("#")]),a._v(" 可达性分析算法")]),a._v(" "),t("h2",{attrs:{id:"常见引用类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见引用类型"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/qq_39192827/article/details/85611873",target:"_blank",rel:"noopener noreferrer"}},[a._v("常见引用类型"),t("OutboundLink")],1)]),a._v(" "),t("ul",[t("li",[t("p",[a._v("强引用")])]),a._v(" "),t("li",[t("p",[a._v("软引用\n"),t("strong",[a._v("软引用可用来实现内存敏感的高速缓存。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("            public static SoftReference<User> user = new SoftReference<User>(new User());              \n")])])])]),a._v(" "),t("li",[t("p",[a._v("弱引用")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/levena/article/details/78027136",target:"_blank",rel:"noopener noreferrer"}},[a._v("ThreadLocal与WeakReference"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("​                public static WeakReference"),t("User",[a._v(" user = new WeakReference"),t("User",[a._v("(new User());")])],1)],1)]),a._v(" "),t("li",[t("p",[a._v("虚引用\n"),t("a",{attrs:{href:"https://www.cnblogs.com/mfrank/p/9837070.htm",target:"_blank",rel:"noopener noreferrer"}},[a._v("你不可不知的Java引用类型之——虚引用"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/007052ee3773",target:"_blank",rel:"noopener noreferrer"}},[a._v("堆外内存 之 DirectByteBuffer 详解"),t("OutboundLink")],1)])])]),a._v(" "),t("h2",{attrs:{id:"如何判断一个类是无用的类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何判断一个类是无用的类"}},[a._v("#")]),a._v(" 如何判断一个类是无用的类")]),a._v(" "),t("ul",[t("li",[a._v("该类所有的对象实例都已经被回收，也就是 Java 堆中不存在该类的任何实例。")]),a._v(" "),t("li",[a._v("加载该类的 ClassLoader 已经被回收。")]),a._v(" "),t("li",[a._v("该类对应的 java.lang.Class 对象没有在任何地方被引用，无法在任何地方通过反射访问该类的方法。")])]),a._v(" "),t("h1",{attrs:{id:"垃圾收集算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集算法"}},[a._v("#")]),a._v(" 垃圾收集算法")]),a._v(" "),t("h2",{attrs:{id:"分代收集理论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分代收集理论"}},[a._v("#")]),a._v(" 分代收集理论")]),a._v(" "),t("p",[a._v("新生代，老年代生命周期不一样，采用不同的收集算法。")]),a._v(" "),t("h2",{attrs:{id:"标记-复制算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-复制算法"}},[a._v("#")]),a._v(" 标记-复制算法")]),a._v(" "),t("p",[a._v("新生代中，每次收集都会有大量对象(近99%)死去，所以可以选择复制算法，只需要付出少量对象的复制成本就可以完成每次垃圾收集")]),a._v(" "),t("h2",{attrs:{id:"标记-清除算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-清除算法"}},[a._v("#")]),a._v(" 标记-清除算法")]),a._v(" "),t("p",[a._v("标记存活的对象， 统一回收所有未被标记的对象")]),a._v(" "),t("p",[a._v("两个明显的问题：")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("效率问题  (如果需要标记的对象太多，效率不高)")])]),a._v(" "),t("li",[t("strong",[a._v("空间问题（标记清除后会产生大量不连续的碎片）")])])]),a._v(" "),t("h2",{attrs:{id:"标记-整理算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标记-整理算法"}},[a._v("#")]),a._v(" 标记-整理算法")]),a._v(" "),t("p",[a._v("所有存活的对象向一端移动，然后直接清理掉端边界以外的内存。")]),a._v(" "),t("h2",{attrs:{id:"三色标记算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三色标记算法"}},[a._v("#")]),a._v(" 三色标记算法")]),a._v(" "),t("h1",{attrs:{id:"垃圾收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集器"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/CrankZ/article/details/86009279",target:"_blank",rel:"noopener noreferrer"}},[a._v("垃圾收集器"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("img",{attrs:{src:"JVM.assets/20190107162203445.png",alt:"img"}})]),a._v(" "),t("h2",{attrs:{id:"stop-the-world"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stop-the-world"}},[a._v("#")]),a._v(" Stop-The-World")]),a._v(" "),t("h2",{attrs:{id:"新生代收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新生代收集器"}},[a._v("#")]),a._v(" 新生代收集器")]),a._v(" "),t("h3",{attrs:{id:"serial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serial"}},[a._v("#")]),a._v(" Serial")]),a._v(" "),t("h3",{attrs:{id:"parnew"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parnew"}},[a._v("#")]),a._v(" ParNew")]),a._v(" "),t("h3",{attrs:{id:"parallel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parallel"}},[a._v("#")]),a._v(" Parallel")]),a._v(" "),t("blockquote",[t("p",[t("code",[a._v("Parallel Scavenge")]),a._v("收集器提供了两个参数来用于精确控制吞吐量，一是控制最大垃圾收集停顿时间的"),t("code",[a._v("-XX:MaxGCPauseMillis")]),a._v("参数，二是控制吞吐量大小的"),t("code",[a._v("-XX:GCTimeRatio")]),a._v("参数")])]),a._v(" "),t("h2",{attrs:{id:"老年代收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#老年代收集器"}},[a._v("#")]),a._v(" 老年代收集器")]),a._v(" "),t("h3",{attrs:{id:"serial-old"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#serial-old"}},[a._v("#")]),a._v(" Serial Old")]),a._v(" "),t("h3",{attrs:{id:"parallel-old"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parallel-old"}},[a._v("#")]),a._v(" Parallel Old")]),a._v(" "),t("h3",{attrs:{id:"cms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cms"}},[a._v("#")]),a._v(" CMS")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("主要优点："),t("strong",[a._v("并发收集、低停顿")]),a._v("，缺点: 对CPU资源敏感、无法处理"),t("strong",[a._v("浮动垃圾")]),a._v("、"),t("strong",[a._v("“标记-清除”算法")]),a._v("会导致收集结束时会有"),t("strong",[a._v("大量空间碎片")]),a._v("产生。")])]),a._v(" "),t("li",[t("p",[a._v("执行步骤:")])])]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("初始标记 （停顿用户线程）：")]),a._v(" 暂停所有的其他线程(STW)，并记录下gc roots"),t("strong",[a._v("直接能引用的对象")]),a._v("，"),t("strong",[a._v("速度很快")]),a._v("。")]),a._v(" "),t("li",[t("strong",[a._v("并发标记：")]),a._v(" 并发标记阶段就是从GC Roots的直接关联对象开始遍历整个对象图的过程， 这个过程耗时较长但是不需要停顿用户线程， 可以与垃圾收集线程一起并发运行。因为用户程序继续运行，可能会有导致已经标记过的对象状态发生改变。")]),a._v(" "),t("li",[t("strong",[a._v("重新标记（停顿用户线程）：")]),a._v(" 重新标记阶段就是为了修正并发标记期间因为用户程序继续运行而导致标记产生变动的那一部分对象的标记记录，"),t("strong",[a._v("这个阶段的停顿时间一般会比初始标记阶段的时间稍长，远远比并发标记阶段时间短。主要用到三色标记里的****增量更新算法(见下面详解)做重新标记。")])]),a._v(" "),t("li",[t("strong",[a._v("并发清理：")]),a._v(" 开启用户线程，同时GC线程开始对未标记的区域做清扫。这个阶段如果有新增对象会被标记为黑色不做任何处理(见下面三色标记算法详解)。")]),a._v(" "),t("li",[a._v("**并发重置：**重置本次GC过程中的标记数据。")]),a._v(" "),t("li",[a._v("执行过程中，也许没回收完就再次触发full gc，这次gc将用serial old来回收了，变成了单线程。")])]),a._v(" "),t("h2",{attrs:{id:"新型垃圾收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新型垃圾收集器"}},[a._v("#")]),a._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/gaohaicheng123/article/details/106437504",target:"_blank",rel:"noopener noreferrer"}},[a._v("新型垃圾收集器"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"g1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#g1"}},[a._v("#")]),a._v(" G1")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("特点: "),t("strong",[a._v("一款面向服务器的垃圾收集器,"),t("strong",[t("strong",[a._v("主要针对配备多颗处理器及大容量内存的机器")])]),a._v(". 以极高概率满足GC停顿时间要求的同时,还具备高吞吐量性能特征.")])])]),a._v(" "),t("li",[t("p",[a._v("Humongous定义: "),t("strong",[a._v("唯一不同的是对大对象的处理")]),a._v("，G1有专门分配大对象的Region叫"),t("strong",[a._v("Humongous区")]),a._v("。专门存放短期巨型对象，不用直接进老年代，可以节约老年代的空间。")])]),a._v(" "),t("li",[t("p",[a._v("结构: Java堆划分为多个大小相等的独立区域（"),t("strong",[a._v("Region")]),a._v("）,每个区域都可以是eden，survivor，old，"),t("strong",[a._v("Humongous")])])]),a._v(" "),t("li",[t("p",[a._v("G1垃圾收集分类: YoungGC、MixedGC、Full GC")])]),a._v(" "),t("li",[t("p",[a._v("GC运作过程： "),t("strong",[a._v("初始标记")]),a._v("、"),t("strong",[a._v("并发标记")]),a._v("、"),t("strong",[a._v("最终标记")]),a._v("、"),t("strong",[a._v("筛选回收")]),a._v("（对各个Region的回收价值和成本进行排序，根据用户所期望的GC停顿STW时间来制定回收计划）")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("回收算法主要用的是复制算法")]),a._v("，"),t("strong",[a._v("在后台维护了一个优先列表，每次根据允许的收集时间，优先选择回收价值最大的Region")])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("每秒几十万并发的kafka系统如何优化JVM")])]),a._v(" "),t("blockquote",[t("p",[a._v("64G的系统，里面61G的Kafka，也就是说可以给年轻代分配个三四十G的内存用来支撑高并发处理，三四十G内存回收可能最快也要几秒钟，按kafka这个并发量放满三四十G的eden区可能也就一两分钟，那么意味着整个系统每运行一两分钟就会因为young gc卡顿几秒钟没法处理新消息，显然是不行的。那么对于这种情况如何优化了，我们可以使用G1收集器，设置 -XX:MaxGCPauseMills 为50ms，假设50ms能够回收三到四个G内存，然后50ms的卡顿其实完全能够接受，用户几乎无感知，那么整个系统就可以在卡顿几乎无感知的情况下一边处理业务一边收集垃圾。")])])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("什么场景适合使用G1")])])])]),a._v(" "),t("ol",[t("li",[a._v("50%以上的堆被存活对象占用")]),a._v(" "),t("li",[a._v("对象分配和晋升的速度变化非常大")]),a._v(" "),t("li",[a._v("垃圾回收时间特别长，超过1秒")]),a._v(" "),t("li",[a._v("8GB以上的堆内存(建议值)")]),a._v(" "),t("li",[a._v("停顿时间是500ms以内")])]),a._v(" "),t("h3",{attrs:{id:"shenandoah"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shenandoah"}},[a._v("#")]),a._v(" Shenandoah")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("JDK12 以上")])]),a._v(" "),t("li",[t("p",[a._v("类似G1")])])]),a._v(" "),t("h3",{attrs:{id:"zgc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zgc"}},[a._v("#")]),a._v(" ZGC")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("JDK11 以上")])]),a._v(" "),t("li",[t("p",[a._v("目标:")]),a._v(" "),t("ol",[t("li",[t("strong",[a._v("最糟糕的情况下吞吐量会降低15%")])]),a._v(" "),t("li",[t("strong",[a._v("最大GC停顿时间不超10ms")])]),a._v(" "),t("li",[t("strong",[a._v("支持TB量级的堆")])]),a._v(" "),t("li",[t("strong",[a._v("奠定未来GC特性的基础")])])])]),a._v(" "),t("li",[t("p",[a._v("运作过程:")]),a._v(" "),t("ol",[t("li",[t("strong",[a._v("并发标记")])]),a._v(" "),t("li",[t("strong",[a._v("并发预备重分配")])]),a._v(" "),t("li",[t("strong",[a._v("并发重分配")])]),a._v(" "),t("li",[t("strong",[a._v("并发重映射")])])])])]),a._v(" "),t("h2",{attrs:{id:"如何选择垃圾收集器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何选择垃圾收集器"}},[a._v("#")]),a._v(" 如何选择垃圾收集器")]),a._v(" "),t("ol",[t("li",[a._v("优先调整堆的大小让服务器自己来选择")]),a._v(" "),t("li",[a._v("如果内存小于100M，使用串行收集器")]),a._v(" "),t("li",[a._v("如果是单核，并且没有停顿时间的要求，串行或JVM自己选择")]),a._v(" "),t("li",[a._v("如果允许停顿时间超过1秒，选择并行或者JVM自己选")]),a._v(" "),t("li",[a._v("如果响应时间最重要，并且不能超过1秒，使用并发收集器")]),a._v(" "),t("li",[t("strong",[a._v("4G以下可以用parallel，4-8G可以用ParNew+CMS，8G以上可以用G1，几百G以上用ZGC")])])]),a._v(" "),t("h2",{attrs:{id:"算法中遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#算法中遇到的问题"}},[a._v("#")]),a._v(" 算法中遇到的问题")]),a._v(" "),t("h3",{attrs:{id:"多标-浮动垃圾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多标-浮动垃圾"}},[a._v("#")]),a._v(" "),t("strong",[a._v("多标-浮动垃圾")])]),a._v(" "),t("h3",{attrs:{id:"漏标-读写屏障"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏标-读写屏障"}},[a._v("#")]),a._v(" "),t("strong",[a._v("漏标-读写屏障")])]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("CMS：写屏障 + 增量更新")])]),a._v(" "),t("li",[t("strong",[a._v("G1，Shenandoah：写屏障 + SATB")])]),a._v(" "),t("li",[t("strong",[a._v("ZGC：读屏障")])])]),a._v(" "),t("p",[t("strong",[a._v("为什么G1用SATB？CMS用增量更新？")])]),a._v(" "),t("h3",{attrs:{id:"记忆集与卡表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#记忆集与卡表"}},[a._v("#")]),a._v(" "),t("strong",[a._v("记忆集与卡表")])]),a._v(" "),t("h3",{attrs:{id:"安全点与安全区域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全点与安全区域"}},[a._v("#")]),a._v(" "),t("strong",[a._v("安全点与安全区域")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("安全点就是指代码中一些特定的位置,当线程运行到这些位置时它的状态是确定的")])]),a._v(" "),t("li",[t("p",[a._v("安全区域是对正在执行的线程设定的")])])]),a._v(" "),t("h1",{attrs:{id:"jvm调优工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm调优工具"}},[a._v("#")]),a._v(" JVM调优工具")]),a._v(" "),t("h2",{attrs:{id:"jdk自带命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jdk自带命令"}},[a._v("#")]),a._v(" jdk自带命令")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("用jps查看其进程id")])]),a._v(" "),t("li",[t("p",[a._v("Jinfo -flags jpid     # 查看正在运行的Java应用程序的扩展参数")])]),a._v(" "),t("li",[t("p",[a._v("jinfo -sysprops pid    # 查看java系统参数")])]),a._v(" "),t("li",[t("p",[a._v("jmap -histo 14660  #  查看内存信息，实例个数以及占用内存大小")])]),a._v(" "),t("li",[t("p",[a._v("jmap -heap pid #查看堆信息")])]),a._v(" "),t("li",[t("p",[a._v("jmap -dump  pid # 导出")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("jvisualvm")]),a._v(" 分析"),t("strong",[a._v("dump")]),a._v("文件")])]),a._v(" "),t("li",[t("p",[a._v("Jstack 查找死锁，可以找出占用cpu最高的线程堆栈信息")])]),a._v(" "),t("li",[t("p",[a._v("jstat -gc pid  # 垃圾回收统计，可以评估程序内存使用及GC压力整体情况")])])]),a._v(" "),t("h2",{attrs:{id:"jvisualvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvisualvm"}},[a._v("#")]),a._v(" jvisualvm")]),a._v(" "),t("p",[a._v("不常用,需要开发端口，才能分析服务器。")]),a._v(" "),t("h2",{attrs:{id:"arthas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arthas"}},[a._v("#")]),a._v(" "),t("strong",[t("a",{attrs:{href:"https://alibaba.github.io/arthas",target:"_blank",rel:"noopener noreferrer"}},[a._v("Arthas"),t("OutboundLink")],1)])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("功能:")]),a._v(" "),t("ol",[t("li",[a._v("这个类从哪个 jar 包加载的？为什么会报各种类相关的 Exception？")]),a._v(" "),t("li",[a._v("我改的代码为什么没有执行到？难道是我没 commit？分支搞错了？")]),a._v(" "),t("li",[a._v("遇到问题无法在线上 debug，难道只能通过加日志再重新发布吗？")]),a._v(" "),t("li",[a._v("线上遇到某个用户的数据处理有问题，但线上同样无法 debug，线下无法重现！")]),a._v(" "),t("li",[a._v("是否有一个全局视角来查看系统的运行状况？")]),a._v(" "),t("li",[a._v("有什么办法可以监控到JVM的实时运行状态？")]),a._v(" "),t("li",[a._v("怎么快速定位应用的热点，生成火焰图？")]),a._v(" "),t("li",[a._v("怎样直接从JVM内查找某个类的实例？")]),a._v(" "),t("li",[a._v("为什么 CPU 又升高了，到底是哪里占用了 CPU ？")]),a._v(" "),t("li",[a._v("运行的多线程有死锁吗？有阻塞吗？")]),a._v(" "),t("li",[a._v("程序运行耗时很长，是哪里耗时比较长呢？如何监测呢？")])])]),a._v(" "),t("li",[t("p",[a._v("常用指令:")]),a._v(" "),t("ol",[t("li",[t("strong",[a._v("dashboard")])]),a._v(" "),t("li",[t("a",{attrs:{href:"https://arthas.aliyun.com/doc/thread.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("thread"),t("OutboundLink")],1),a._v(" ： 查看当前线程信息，查看线程的堆栈")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://arthas.aliyun.com/doc/jad.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("jad"),t("OutboundLink")],1),a._v(" : "),t("strong",[a._v("反编译")])]),a._v(" "),t("li",[t("a",{attrs:{href:"https://arthas.aliyun.com/doc/ognl.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("ognl"),t("OutboundLink")],1),a._v(" ： "),t("strong",[a._v("查看线上系统变量的值，甚至可以修改变量的值")])])])])]),a._v(" "),t("h1",{attrs:{id:"常量池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常量池"}},[a._v("#")]),a._v(" 常量池")]),a._v(" "),t("h2",{attrs:{id:"class常量池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class常量池"}},[a._v("#")]),a._v(" Class常量池")]),a._v(" "),t("ul",[t("li",[a._v("常量池")]),a._v(" "),t("li",[a._v("存放编译期生成的各种字面量和符号引用")])]),a._v(" "),t("h2",{attrs:{id:"运行时常量池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行时常量池"}},[a._v("#")]),a._v(" 运行时常量池")]),a._v(" "),t("ul",[t("li",[a._v("动态链接，通过对象头里的类型指针去转换直接引用")])]),a._v(" "),t("h2",{attrs:{id:"字符串常量池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串常量池"}},[a._v("#")]),a._v(" 字符串常量池")]),a._v(" "),t("h3",{attrs:{id:"intern"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intern"}},[a._v("#")]),a._v(" intern")]),a._v(" "),t("ul",[t("li",[a._v("当调用 intern方法时，如果池已经包含一个等于此String对象的字符串 （用equals(oject)方法确定），则返回池中的字符串")]),a._v(" "),t("li",[a._v("否则，jdk1.6版本 (如果常量池没有) 需要将 s1 复制到字符串常量池里")])]),a._v(" "),t("h3",{attrs:{id:"版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[a._v("#")]),a._v(" 版本")]),a._v(" "),t("ul",[t("li",[a._v("Jdk1.6： 有永久代, 运行时常量池在永久代，运行时常量池包含字符串常量池")]),a._v(" "),t("li",[a._v("Jdk1.7： 逐步去永久代,字符串常量池从永久代里的运行时常量池分离到堆里")]),a._v(" "),t("li",[a._v("Jdk1.8： 无永久代，运行时常量池在元空间，字符串常量池里依然在堆里")])]),a._v(" "),t("h2",{attrs:{id:"八种基本类型的包装类和对象池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八种基本类型的包装类和对象池"}},[a._v("#")]),a._v(" 八种基本类型的包装类和对象池")]),a._v(" "),t("ul",[t("li",[a._v("Integer ：  -128 到 127 (缓存)")])]),a._v(" "),t("h1",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_44227389/article/details/107345358",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java final & 常量 & 常量池"),t("OutboundLink")],1)])]),a._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://blog.csdn.net/b1480521874/article/details/89506095",target:"_blank",rel:"noopener noreferrer"}},[a._v("final修饰的变量就是常量？final修饰局部变量在栈还是堆还是常量池中？"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=e.exports}}]);