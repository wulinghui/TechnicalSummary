(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{496:function(a,t,e){"use strict";e.r(t);var s=e(7),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("[TOC]")]),a._v(" "),t("h1",{attrs:{id:"unsafe魔法类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unsafe魔法类"}},[a._v("#")]),a._v(" Unsafe魔法类")]),a._v(" "),t("p",[a._v("主要提供一些用于执行低级别、不安全操作的方法，"),t("strong",[a._v("且可能会被废弃，非要使用建议使用工具类封装一下")])]),a._v(" "),t("h2",{attrs:{id:"功能介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[a._v("#")]),a._v(" 功能介绍")]),a._v(" "),t("h3",{attrs:{id:"内存操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存操作"}},[a._v("#")]),a._v(" 内存操作")]),a._v(" "),t("ul",[t("li",[a._v("堆外内存的分配、拷贝、释放、给定地址值操作等方法")]),a._v(" "),t("li",[a._v("设置给定地址值中的值")]),a._v(" "),t("li",[a._v("使用堆外内存的原因")])]),a._v(" "),t("h3",{attrs:{id:"cas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cas"}},[a._v("#")]),a._v(" CAS")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/104179990",target:"_blank",rel:"noopener noreferrer"}},[a._v("原理：见连接"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("CAS依赖汇编指令：cmpxchg()")]),a._v(" "),t("p",[a._v("优点: 无锁的实现原子性操作")]),a._v(" "),t("p",[a._v("缺点:")]),a._v(" "),t("ul",[t("li",[a._v("一般会用空循环，代表锁，循环时间长开销很大")]),a._v(" "),t("li",[a._v("只能保证一个变量的原子操作")]),a._v(" "),t("li",[a._v("什么是ABA问题？ABA问题怎么解决？")])]),a._v(" "),t("h3",{attrs:{id:"class相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class相关"}},[a._v("#")]),a._v(" Class相关")]),a._v(" "),t("ul",[t("li",[a._v("动态创建类(普通和匿名类)")]),a._v(" "),t("li",[a._v("获取Field的内存地址偏移量")]),a._v(" "),t("li",[a._v("检测、确保类的初始化")])]),a._v(" "),t("h3",{attrs:{id:"对象操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象操作"}},[a._v("#")]),a._v(" 对象操作")]),a._v(" "),t("ul",[t("li",[a._v("获取对象成员属性在内存的偏移量")]),a._v(" "),t("li",[a._v("非常规对象实例化")]),a._v(" "),t("li",[a._v("存储、获取指定偏移地址的变量值")])]),a._v(" "),t("h3",{attrs:{id:"线程调度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程调度"}},[a._v("#")]),a._v(" 线程调度")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("线程挂起、恢复、锁机制")])]),a._v(" "),t("li",[t("p",[a._v("阻塞线程")]),a._v(" "),t("blockquote",[t("p",[a._v("void park(boolean isAbsolute, long time)")]),a._v(" "),t("p",[a._v("这里和Thread.yeld()不同，yeild是回到就绪状态，可以接着运行")])])]),a._v(" "),t("li",[t("p",[a._v("取消阻塞线程")]),a._v(" "),t("blockquote",[t("p",[a._v("void unpark(Object thread)")]),a._v(" "),t("p",[a._v("方法park、unpark即可实现线程的挂起与恢复，将一个线程进行挂起是通过park方法实现的，调用park方法后，线程将一直阻塞直到超时或者中断等条件出现；unpark可以终止一个挂起的线程，使其恢复正常。")])])]),a._v(" "),t("li",[t("p",[a._v("获得对象锁（可重入锁）")]),a._v(" "),t("blockquote",[t("p",[a._v("void monitorEnter(Object o)")])])]),a._v(" "),t("li",[t("p",[a._v("尝试获取对象锁")]),a._v(" "),t("blockquote",[t("p",[a._v("boolean tryMonitorEnter(Object o)")])])]),a._v(" "),t("li",[t("p",[a._v("释放对象锁")]),a._v(" "),t("blockquote",[t("p",[a._v("boolean tryMonitorEnter(Object o)")])]),a._v(" "),t("p",[a._v("应用场景：\nLockSupport.park()和LockSupport.unpark()实现线程的阻塞和唤醒的")])])]),a._v(" "),t("h3",{attrs:{id:"系统信息获取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统信息获取"}},[a._v("#")]),a._v(" 系统信息获取")]),a._v(" "),t("ul",[t("li",[a._v("返回内存页大小")]),a._v(" "),t("li",[a._v("返回系统指针大小")])]),a._v(" "),t("h3",{attrs:{id:"内存屏障"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存屏障"}},[a._v("#")]),a._v(" 内存屏障")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("同volite,他会禁止load、store的重排")])]),a._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/1252599548343744/1309138673991714",target:"_blank",rel:"noopener noreferrer"}},[a._v("StampedLock"),t("OutboundLink")],1)]),a._v(" "),t("blockquote",[t("p",[a._v("jdk1.8提供的提供了一种乐观读锁的实现，这种乐观读锁类似于无锁的操作，完全不会阻塞写线程获取写锁，从而缓解读多写少时写线程“饥饿”现象。")])])])]),a._v(" "),t("h3",{attrs:{id:"数组操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组操作"}},[a._v("#")]),a._v(" 数组操作")]),a._v(" "),t("ul",[t("li",[a._v("返回数组元素内存大小")]),a._v(" "),t("li",[a._v("返回数组首元素偏移地址")])]),a._v(" "),t("h2",{attrs:{id:"获取unsafe实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取unsafe实例"}},[a._v("#")]),a._v(" 获取Unsafe实例")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Unsafe.getUnsafe")]),a._v(" "),t("blockquote",[t("p",[a._v("java -Xbootclasspath/a:${path}   // 其中path为调用Unsafe相关方法的类所在jar包路径")])])]),a._v(" "),t("li",[t("p",[a._v("建议通过反射获取单例对象theUnsafe")])])]),a._v(" "),t("h1",{attrs:{id:"atomic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atomic"}},[a._v("#")]),a._v(" Atomic")]),a._v(" "),t("p",[a._v("Atomic包里的类基本都是使用Unsafe实现的cas算法的包装类")]),a._v(" "),t("h2",{attrs:{id:"基本类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本类"}},[a._v("#")]),a._v(" 基本类")]),a._v(" "),t("h3",{attrs:{id:"atomicinteger-原子更新整型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atomicinteger-原子更新整型"}},[a._v("#")]),a._v(" AtomicInteger : 原子更新整型")]),a._v(" "),t("p",[a._v("API:")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("addAndGet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" delta"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 以原子方式将输入的数值与实例中的值（AtomicInteger里的value）相加，并返回结果")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("compareAndSet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" expect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" update"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//     如果输入的数值等于预期值，则以原子方式将该值设置为输入的值。")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getAndIncrement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//以原子方式将当前值加1，注意：这里返回的是自增前的值。")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("lazySet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" newValue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//最终会设置成newValue，使用lazySet设置值后，可能导致其他线程在之后的一小段时间内还是可以读到旧的值。    ")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getAndSet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" newValue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//以原子方式设置为newValue的值，并返回旧值。  ")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"atomicboolean-原子更新布尔类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atomicboolean-原子更新布尔类型"}},[a._v("#")]),a._v(" AtomicBoolean : 原子更新布尔类型")]),a._v(" "),t("p",[a._v("AtomicBoolean源码，发现其是先把Boolean转换成整型，再使用compareAndSwapInt进行CAS")]),a._v(" "),t("h3",{attrs:{id:"atomiclong-原子更新长整型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atomiclong-原子更新长整型"}},[a._v("#")]),a._v(" AtomicLong  : 原子更新长整型")]),a._v(" "),t("h3",{attrs:{id:"其他基本类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他基本类型"}},[a._v("#")]),a._v(" 其他基本类型 :")]),a._v(" "),t("h2",{attrs:{id:"数组类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组类"}},[a._v("#")]),a._v(" 数组类")]),a._v(" "),t("h3",{attrs:{id:"atomicintegerarray"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atomicintegerarray"}},[a._v("#")]),a._v(" AtomicIntegerArray")]),a._v(" "),t("p",[a._v("原子更新整型数组里的元素")]),a._v(" "),t("p",[a._v("API：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("addAndGet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" delta"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//以原子方式将输入值与数组中索引i的元素相加。")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("compareAndSet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" expect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" update"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 如果当前值等于预期值，则以原子方式将数组位置i的元素设置成update值。")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"atomiclongarray"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atomiclongarray"}},[a._v("#")]),a._v(" AtomicLongArray")]),a._v(" "),t("p",[a._v("原子更新长整型数组里的元素")]),a._v(" "),t("h3",{attrs:{id:"atomicreferencearray"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atomicreferencearray"}},[a._v("#")]),a._v(" AtomicReferenceArray")]),a._v(" "),t("p",[a._v("原子更新引用类型数组里的元素")]),a._v(" "),t("h2",{attrs:{id:"更新字段类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新字段类"}},[a._v("#")]),a._v(" 更新字段类")]),a._v(" "),t("p",[a._v("原子更新字段类都是抽象类，每次使用都时候必须使用静态方法newUpdater创建一个更新器。原子更新类的字段的必须使用public volatile修饰符。")]),a._v(" "),t("h3",{attrs:{id:"atomicintegerfieldupdater"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atomicintegerfieldupdater"}},[a._v("#")]),a._v(" AtomicIntegerFieldUpdater")]),a._v(" "),t("p",[a._v("原子更新整型的字段的更新器。")]),a._v(" "),t("h3",{attrs:{id:"atomiclongfieldupdater"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atomiclongfieldupdater"}},[a._v("#")]),a._v(" AtomicLongFieldUpdater")]),a._v(" "),t("p",[a._v("原子更新长整型字段的更新器。")]),a._v(" "),t("h3",{attrs:{id:"atomicstampedreference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atomicstampedreference"}},[a._v("#")]),a._v(" AtomicStampedReference")]),a._v(" "),t("p",[a._v("原子更新带有版本号的引用类型。该类将整数值与引用关联起来，可用于原子的更数据和数据的版本号，可以解决使用CAS进行原子更新时，可能出现的ABA问题。")]),a._v(" "),t("h3",{attrs:{id:"atomicmarkablereference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atomicmarkablereference"}},[a._v("#")]),a._v(" AtomicMarkableReference")]),a._v(" "),t("p",[a._v("AtomicMarkableReference可以理解为上面AtomicStampedReference的简化版，就是 不关心修改过几次，仅仅关心是否修改过。因此变量mark是boolean类型，仅记录值是否有过修 改")]),a._v(" "),t("h2",{attrs:{id:"原子类型累加器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原子类型累加器"}},[a._v("#")]),a._v(" 原子类型累加器")]),a._v(" "),t("p",[a._v("类似forkjoin，采用分治思想，减少cas的空循环，来提高效率。适用于数量大的操作..")]),a._v(" "),t("h3",{attrs:{id:"doubleaccumulator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doubleaccumulator"}},[a._v("#")]),a._v(" DoubleAccumulator")]),a._v(" "),t("h3",{attrs:{id:"doubleadder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doubleadder"}},[a._v("#")]),a._v(" DoubleAdder")]),a._v(" "),t("h3",{attrs:{id:"longaccumulator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#longaccumulator"}},[a._v("#")]),a._v(" LongAccumulator")]),a._v(" "),t("h3",{attrs:{id:"longadder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#longadder"}},[a._v("#")]),a._v(" LongAdder")]),a._v(" "),t("p",[a._v("LongAdder引入的初衷——解决高并发环境下AtomicInteger， AtomicLong的自旋瓶颈问题。")]),a._v(" "),t("h3",{attrs:{id:"striped64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#striped64"}},[a._v("#")]),a._v(" Striped64")])])}),[],!1,null,null,null);t.default=r.exports}}]);