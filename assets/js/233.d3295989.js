(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{600:function(a,t,r){"use strict";r.r(t);var e=r(7),s=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"工作中常用的模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工作中常用的模式"}},[a._v("#")]),a._v(" 工作中常用的模式")]),a._v(" "),t("h2",{attrs:{id:"创建型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建型"}},[a._v("#")]),a._v(" 创建型")]),a._v(" "),t("ul",[t("li",[a._v("建造者 : 有builder，做入口解析、链式调用代替set方法。")]),a._v(" "),t("li",[a._v("工厂方法 ： 封装new细节。")])]),a._v(" "),t("h2",{attrs:{id:"结构型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结构型"}},[a._v("#")]),a._v(" 结构型")]),a._v(" "),t("ul",[t("li",[a._v("适配器 ： 用接口+引用+封装， 做第三方的整合进入现有系统。")]),a._v(" "),t("li",[a._v("装饰器 :  用向上循环委托 ， 做显式的功能增强")]),a._v(" "),t("li",[a._v("代理 ： 用静态委托、jdk/字节码动态代理，做隐式的功能增强")]),a._v(" "),t("li",[a._v("组合 ： 用循环所有，做树状结构的逻辑处理。")]),a._v(" "),t("li",[a._v("外观/门面 : 用多种委托，做所有的入口操作。")])]),a._v(" "),t("h2",{attrs:{id:"行为型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行为型"}},[a._v("#")]),a._v(" 行为型")]),a._v(" "),t("ul",[t("li",[a._v("策略， 用不同实现类 ，代替switch、if-else(说成switch更类似)")]),a._v(" "),t("li",[a._v("组合 ， 用循环+跳出条件 ，代替if-else")]),a._v(" "),t("li",[a._v("状态  ， 用对象和上下文入参  ， 代替if-else + 状态流转")]),a._v(" "),t("li",[a._v("模板 ， 用抽象类，定义主体流程。")]),a._v(" "),t("li",[a._v("责任链 ， 用循环或者递归，代替对上下文的流程化加工")]),a._v(" "),t("li",[a._v("观察者， 用循环+回调， 实现发布/订阅的业务解耦。")])]),a._v(" "),t("h1",{attrs:{id:"常见的23种设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见的23种设计模式"}},[a._v("#")]),a._v(" 常见的23种设计模式")]),a._v(" "),t("p",[a._v("创建型模式，共五种：工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式。")]),a._v(" "),t("p",[a._v("结构型模式，共七种：适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式。")]),a._v(" "),t("p",[a._v("行为型模式，共十一种：策略模式、模板方法模式、观察者模式、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式。")]),a._v(" "),t("p",[a._v("其实还有两类：并发型模式和线程池模式。")]),a._v(" "),t("h1",{attrs:{id:"简单工厂模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单工厂模式"}},[a._v("#")]),a._v(" 简单工厂模式")]),a._v(" "),t("p",[a._v("主要解决接口/实现类选择的问题")]),a._v(" "),t("p",[a._v("我们明确地计划不同条件下创建不同实例时使用，同时封装了new 对象的过程。")]),a._v(" "),t("p",[a._v("屏蔽了选择类和创建类的步骤，用户只管使用就行了。")]),a._v(" "),t("h2",{attrs:{id:"实现模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现模式"}},[a._v("#")]),a._v(" 实现模式")]),a._v(" "),t("ol",[t("li",[a._v("Factory.get(xxx);")]),a._v(" "),t("li",[a._v("Factory.get();")])]),a._v(" "),t("h2",{attrs:{id:"框架中的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架中的实现"}},[a._v("#")]),a._v(" 框架中的实现")]),a._v(" "),t("ul",[t("li",[a._v("日志记录器LogFactory.getLog")]),a._v(" "),t("li",[a._v("spring中的BeanFactory .   有些地方把他叫做抽象工厂，不太正确。")]),a._v(" "),t("li",[a._v("jdbc中的DriverManager.getConnection")]),a._v(" "),t("li",[a._v("jdk中的日历 Calendar.getInstance()")])]),a._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/v587-666/p/14461034.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("设计模式之简单工厂模式(Simple Factory Pattern)"),t("OutboundLink")],1)]),a._v(" "),t("h1",{attrs:{id:"工厂方法模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工厂方法模式"}},[a._v("#")]),a._v(" 工厂方法模式")]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("主要解决： 延迟实例化类；解耦使得工厂符合开闭原则。")]),a._v(" "),t("li",[a._v("工厂方法进一步解耦合，把工厂类抽象，不再负责所有实例的创建，而是把具体的创建工作交给了子类去完成，实例化延迟到子类加载，由子类来决定要实例化的类。")])]),a._v(" "),t("h2",{attrs:{id:"实现模式-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现模式-2"}},[a._v("#")]),a._v(" 实现模式")]),a._v(" "),t("h3",{attrs:{id:"依赖的实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖的实现方式"}},[a._v("#")]),a._v(" 依赖的实现方式")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("超级工厂、工厂、产品.")])]),a._v(" "),t("li",[t("p",[a._v("超级工厂获得工厂，工厂再获得产品")])])]),a._v(" "),t("h3",{attrs:{id:"继承实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#继承实现"}},[a._v("#")]),a._v(" 继承实现")]),a._v(" "),t("ul",[t("li",[a._v("抽象工厂类、具体的工厂类、产品")])]),a._v(" "),t("h2",{attrs:{id:"框架中的实现-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架中的实现-2"}},[a._v("#")]),a._v(" 框架中的实现")]),a._v(" "),t("ul",[t("li",[a._v("spring中的FactoryBean功能")])]),a._v(" "),t("h1",{attrs:{id:"抽象工厂"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽象工厂"}},[a._v("#")]),a._v(" 抽象工厂")]),a._v(" "),t("ol",[t("li",[a._v("是一种为访问类提供一个创建一组相关或相互依赖对象的接口，且访问类无须指定所要产品的具体类就能得到同族的不同等级的产品的模式结构。")]),a._v(" "),t("li",[a._v("主要解决： 针对的是界线划分； 主要针对的是多个产品族结构，一个产品族内有多个产品系列")])]),a._v(" "),t("h2",{attrs:{id:"实现模式-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现模式-3"}},[a._v("#")]),a._v(" 实现模式")]),a._v(" "),t("ul",[t("li",[a._v("抽象工厂、抽象产品，具体工厂，具体产品")]),a._v(" "),t("li",[a._v("各自工厂产出各自的产品。")]),a._v(" "),t("li",[a._v("一般还会和组合模式配合，提供确定具体工厂的方法，已达到简化客户端使用。 （如jdbc中的DriverManager.getConnection）")])]),a._v(" "),t("h2",{attrs:{id:"框架中的实现-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架中的实现-3"}},[a._v("#")]),a._v(" 框架中的实现")]),a._v(" "),t("ul",[t("li",[a._v("jdbc中的Connection")])]),a._v(" "),t("h2",{attrs:{id:"参考资料-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-2"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://c.biancheng.net/view/8392.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("抽象工厂在Java源码中的应用"),t("OutboundLink")],1)]),a._v(" "),t("h1",{attrs:{id:"单例模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单例模式"}},[a._v("#")]),a._v(" 单例模式")]),a._v(" "),t("p",[a._v("保证一个类仅有一个实例，并提供一个访问它的全局访 问点。")]),a._v(" "),t("h2",{attrs:{id:"实现模式-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现模式-4"}},[a._v("#")]),a._v(" 实现模式")]),a._v(" "),t("ul",[t("li",[a._v("恶汉模式")]),a._v(" "),t("li",[a._v("懒汉模式:  双重判断加锁 spring中的getSiglenBean")])]),a._v(" "),t("h1",{attrs:{id:"建造者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建造者模式"}},[a._v("#")]),a._v(" 建造者模式")]),a._v(" "),t("h1",{attrs:{id:"原型模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原型模式"}},[a._v("#")]),a._v(" 原型模式")]),a._v(" "),t("h1",{attrs:{id:"桥接模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#桥接模式"}},[a._v("#")]),a._v(" 桥接模式")]),a._v(" "),t("h1",{attrs:{id:"过滤器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过滤器模式"}},[a._v("#")]),a._v(" 过滤器模式")]),a._v(" "),t("h1",{attrs:{id:"外观模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外观模式"}},[a._v("#")]),a._v(" 外观模式")]),a._v(" "),t("h1",{attrs:{id:"享元模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#享元模式"}},[a._v("#")]),a._v(" 享元模式")]),a._v(" "),t("h1",{attrs:{id:"代理模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代理模式"}},[a._v("#")]),a._v(" 代理模式")]),a._v(" "),t("p",[a._v("隐式（对于用户无感知）的用于控制访问权限、和增加功能。")]),a._v(" "),t("h2",{attrs:{id:"实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现方式"}},[a._v("#")]),a._v(" 实现方式")]),a._v(" "),t("ul",[t("li",[a._v("静态代理模式 : 父类继承的方式。")]),a._v(" "),t("li",[a._v("jdk动态代理模式")]),a._v(" "),t("li",[a._v("cglib动态代理模式")])]),a._v(" "),t("h2",{attrs:{id:"框架中的实现-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架中的实现-4"}},[a._v("#")]),a._v(" 框架中的实现")]),a._v(" "),t("ul",[t("li",[a._v("spring中的AOP")]),a._v(" "),t("li",[a._v("mybatis中的mapper就是jdk代理")]),a._v(" "),t("li",[a._v("Fegin 的接口代理.")])]),a._v(" "),t("h1",{attrs:{id:"装饰器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#装饰器模式"}},[a._v("#")]),a._v(" 装饰器模式")]),a._v(" "),t("ul",[t("li",[a._v("显式（也就是说用户需要自己主动去选择）的用于控制访问权限、和增加功能。")]),a._v(" "),t("li",[a._v("和代理模式，继承不同的是，他侧重于交给用户去选择组合内容，增强顺序。")])]),a._v(" "),t("h2",{attrs:{id:"实现模式-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现模式-5"}},[a._v("#")]),a._v(" 实现模式")]),a._v(" "),t("p",[a._v("基础类、增强类都实现相同接口。在增强类的构造方法中传入接口,再不同的方法中调用传入的接口")]),a._v(" "),t("h2",{attrs:{id:"框架中的实现-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架中的实现-5"}},[a._v("#")]),a._v(" 框架中的实现")]),a._v(" "),t("ul",[t("li",[a._v("spring中类名带Wrapper、Decorator的。")]),a._v(" "),t("li",[a._v("jdk中的IO流")])]),a._v(" "),t("h1",{attrs:{id:"命令模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令模式"}},[a._v("#")]),a._v(" 命令模式")]),a._v(" "),t("h1",{attrs:{id:"解释器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解释器模式"}},[a._v("#")]),a._v(" 解释器模式")]),a._v(" "),t("h1",{attrs:{id:"迭代器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迭代器模式"}},[a._v("#")]),a._v(" 迭代器模式")]),a._v(" "),t("h1",{attrs:{id:"中介者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中介者模式"}},[a._v("#")]),a._v(" 中介者模式")]),a._v(" "),t("h1",{attrs:{id:"备忘录模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备忘录模式"}},[a._v("#")]),a._v(" 备忘录模式")]),a._v(" "),t("h1",{attrs:{id:"观察者-监听者-模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#观察者-监听者-模式"}},[a._v("#")]),a._v(" 观察者（监听者）模式")]),a._v(" "),t("h2",{attrs:{id:"实现模式-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现模式-6"}},[a._v("#")]),a._v(" 实现模式")]),a._v(" "),t("p",[a._v("事件广播器（EventMulticaster）,事件（Event）,事件监听器（Listener）.")]),a._v(" "),t("p",[a._v("一般是广播器中有个list，用于存放监听器。当调用广播器的方法时，就循环发送给监听器。")]),a._v(" "),t("h2",{attrs:{id:"框架中的实现-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架中的实现-6"}},[a._v("#")]),a._v(" 框架中的实现")]),a._v(" "),t("ul",[t("li",[a._v("spring-boot的 SpringApplicationRunListener  启动过程的接口回调，主要用于解耦.")]),a._v(" "),t("li",[a._v("spring中的 ApplicationListener 用于解耦不同服务，异步调用，通知")])]),a._v(" "),t("h1",{attrs:{id:"状态模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#状态模式"}},[a._v("#")]),a._v(" 状态模式")]),a._v(" "),t("h1",{attrs:{id:"空对象模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#空对象模式"}},[a._v("#")]),a._v(" 空对象模式")]),a._v(" "),t("h1",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),t("h1",{attrs:{id:"模板模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板模式"}},[a._v("#")]),a._v(" 模板模式")]),a._v(" "),t("p",[a._v("定义主流程,其他的流程交给子类去实现.")]),a._v(" "),t("p",[a._v("主要解决：一些方法通用，却在每一个子类都重新写了这一方法。")]),a._v(" "),t("p",[a._v("使用场景： 1、有多个子类共有的方法，且主体逻辑相同。 2、重要的、复杂的方法，可以考虑作为模板方法。")]),a._v(" "),t("p",[a._v("**注意事项：**为防止恶意操作，一般模板方法都加上 final 关键词。")]),a._v(" "),t("h2",{attrs:{id:"实现模式-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现模式-7"}},[a._v("#")]),a._v(" 实现模式")]),a._v(" "),t("ul",[t("li",[a._v("定义abstract 类，方法定义为final，预留一些扩展点（默认实现），抽象的操作交给子类去实现(abstract 方法).")]),a._v(" "),t("li",[a._v("尽可以抽象成多的方法，交给子类去做增强扩展。")])]),a._v(" "),t("h2",{attrs:{id:"框架中的实现-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架中的实现-7"}},[a._v("#")]),a._v(" 框架中的实现")]),a._v(" "),t("ul",[t("li",[a._v("所有框架中带有abstract 类中定义了主流程,多个子类的都是，数不胜数。")])]),a._v(" "),t("h1",{attrs:{id:"回调模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回调模式"}},[a._v("#")]),a._v(" 回调模式")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("模板模式的应用场景一致，属于升级版本，主要是利用接口回调去实现，这样可以不用管具体是那个子类了，主体类就是固定的了。实现了业务逻辑和主体代码的分离和解耦。")])]),a._v(" "),t("li",[t("p",[a._v("和模板模式的不同在于：  我的主体逻辑肯定不会变，不需要子类做一些自定义的扩展操作，同时我的业务逻辑类似能抽象出来。   也就是说大部分应用场景都是已知的只是做了代码提取。")])])]),a._v(" "),t("h2",{attrs:{id:"框架中的实现-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架中的实现-8"}},[a._v("#")]),a._v(" 框架中的实现")]),a._v(" "),t("ul",[t("li",[a._v("spring框架中的 XXXTemplate，就是回调模式去实现的。")])]),a._v(" "),t("h1",{attrs:{id:"访问者模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问者模式"}},[a._v("#")]),a._v(" 访问者模式")]),a._v(" "),t("h1",{attrs:{id:"mvc-模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mvc-模式"}},[a._v("#")]),a._v(" MVC 模式")]),a._v(" "),t("h1",{attrs:{id:"业务代表模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#业务代表模式"}},[a._v("#")]),a._v(" 业务代表模式")]),a._v(" "),t("h1",{attrs:{id:"组合实体模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组合实体模式"}},[a._v("#")]),a._v(" 组合实体模式")]),a._v(" "),t("h1",{attrs:{id:"数据访问对象模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据访问对象模式"}},[a._v("#")]),a._v(" 数据访问对象模式")]),a._v(" "),t("h1",{attrs:{id:"前端控制器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端控制器模式"}},[a._v("#")]),a._v(" 前端控制器模式")]),a._v(" "),t("h1",{attrs:{id:"拦截过滤器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拦截过滤器模式"}},[a._v("#")]),a._v(" 拦截过滤器模式")]),a._v(" "),t("h1",{attrs:{id:"服务定位器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务定位器模式"}},[a._v("#")]),a._v(" 服务定位器模式")]),a._v(" "),t("h1",{attrs:{id:"传输对象模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传输对象模式"}},[a._v("#")]),a._v(" 传输对象模式")]),a._v(" "),t("h1",{attrs:{id:"策略模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#策略模式"}},[a._v("#")]),a._v(" 策略模式")]),a._v(" "),t("h2",{attrs:{id:"实现模式-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现模式-8"}},[a._v("#")]),a._v(" 实现模式")]),a._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/qq_40378034/article/details/104121363",target:"_blank",rel:"noopener noreferrer"}},[a._v("策略模式+Spring Bean代替if/else"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"框架中的实现-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架中的实现-9"}},[a._v("#")]),a._v(" 框架中的实现")]),a._v(" "),t("ul",[t("li",[a._v("springmvc")])]),a._v(" "),t("blockquote",[t("p",[a._v("HandlerMethodMappingNamingStrategy ： MappingRegistry中通过name获得HandlerMethod")]),a._v(" "),t("p",[a._v("ContentNegotiationStrategy : 内容协商策略")])]),a._v(" "),t("ul",[t("li",[a._v("spring 中的  Resource实现了好多自定义的资源访问协议，如classpath:  ， fatJar")])]),a._v(" "),t("h1",{attrs:{id:"责任链模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#责任链模式"}},[a._v("#")]),a._v(" 责任链模式")]),a._v(" "),t("p",[a._v("工厂流水线中的工序加工 :  每道工序都对同一个物品做操作，做完自己的后传递给下一道工序。  从而实现了功能单一职责.")]),a._v(" "),t("h2",{attrs:{id:"实现模式-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现模式-9"}},[a._v("#")]),a._v(" 实现模式")]),a._v(" "),t("ol",[t("li",[a._v("super.xxx();   同一个方法，一直到头、每个类处理一件事。")]),a._v(" "),t("li",[a._v("for循环调用.")])]),a._v(" "),t("h2",{attrs:{id:"框架中的实现-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架中的实现-10"}},[a._v("#")]),a._v(" 框架中的实现")]),a._v(" "),t("ol",[t("li",[a._v("springmvc : RequestBodyAdvice、RequestBodyAdvice、HandlerInterceptor")]),a._v(" "),t("li",[a._v("Servlert : 请求转发、过滤器")]),a._v(" "),t("li",[a._v("spring :  aop中定义的 MethodInterceptor")])]),a._v(" "),t("h1",{attrs:{id:"适配器模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适配器模式"}},[a._v("#")]),a._v(" 适配器模式")]),a._v(" "),t("p",[a._v("将一个类的接口转换成客户希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。")]),a._v(" "),t("p",[a._v("主要是转化，也就是说自己真正核心的功能是其他类实现的。")]),a._v(" "),t("p",[a._v("应用场景 ：")]),a._v(" "),t("ul",[t("li",[a._v("让任何两个没有关联的类一起运行")]),a._v(" "),t("li",[a._v("接口转换： 转化一些第三功能，为自己系统定义的标准接口.")]),a._v(" "),t("li",[a._v("将一个类的接口转换成客户希望的另外一个接口。")])]),a._v(" "),t("h2",{attrs:{id:"实现模式-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现模式-10"}},[a._v("#")]),a._v(" 实现模式")]),a._v(" "),t("ul",[t("li",[a._v("简单转化单一类，继承 + 实现要转化的接口。")]),a._v(" "),t("li",[a._v("复杂的要转化多个类组合现实某一功能， 用属性依赖。")])]),a._v(" "),t("h2",{attrs:{id:"框架中的实现-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架中的实现-11"}},[a._v("#")]),a._v(" 框架中的实现")]),a._v(" "),t("ul",[t("li",[a._v("springmvc : HandlerAdapter")])]),a._v(" "),t("h1",{attrs:{id:"组合模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组合模式"}},[a._v("#")]),a._v(" 组合模式")]),a._v(" "),t("ol",[t("li",[a._v("策略模式的变种，通过判断方法确定该类,是否执行真正的方法.  来选定具体的策略.  适用于复杂的策略选定。")]),a._v(" "),t("li",[a._v("实现2叉树数值的计算的场景.  经典场景就是购物袋和商品的总价计算模型。")])]),a._v(" "),t("h2",{attrs:{id:"框架中的实现-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架中的实现-12"}},[a._v("#")]),a._v(" 框架中的实现")]),a._v(" "),t("ol",[t("li",[a._v("spring-mvc 中的 :  argumentResolvers，returnValueHandlers，modelAndViewResolvers，messageConverters，handlerMappings，HandlerAdapters，HandlerExceptionResolvers，ViewResolvers ，WebMvcConfigurerComposite 他们这些类都提供2个方法，一个判断方法，一个是真正运行方法。")]),a._v(" "),t("li")]),a._v(" "),t("h1",{attrs:{id:"委托模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#委托模式"}},[a._v("#")]),a._v(" 委托模式")]),a._v(" "),t("p",[a._v("核心类负责分配和调度，或者是判断类型的安全。")]),a._v(" "),t("h2",{attrs:{id:"框架中的实现-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#框架中的实现-13"}},[a._v("#")]),a._v(" 框架中的实现")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("springmvc : DelegatingWebMvcConfiguration委派配置类，用于收集所有的WebMvcConfigurer")])]),a._v(" "),t("li",[t("p",[a._v("spring中的SourceFilteringListener，做了source的监听分配,确保安全。")])])]),a._v(" "),t("h2",{attrs:{id:"参考资料-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-3"}},[a._v("#")]),a._v(" 参考资料:")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1603630",target:"_blank",rel:"noopener noreferrer"}},[a._v("常用的23种设计模式中其实面没有委派模式（delegate）的影子，但是在 Spring 中委派模式确实用的比较多"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.runoob.com/w3cnote/delegate-mode.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("委托模式"),t("OutboundLink")],1)]),a._v(" "),t("blockquote",[t("p",[a._v("在委托模式实现过程中，有两个对象参与处理同一个请求，接受请求的对象将请求委托给另一个对象来处理。")]),a._v(" "),t("p",[a._v("通过使用接口，委托可以做到类型安全并且更加灵活。")])]),a._v(" "),t("h1",{attrs:{id:"参考资料-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-4"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.runoob.com/design-pattern/design-pattern-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("设计模式"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/f641385712/article/details/80396002",target:"_blank",rel:"noopener noreferrer"}},[a._v("jdbc使用到了哪些设计模式"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/yougewe/p/12460685.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解JDBC设计模式: DriverManager 解析"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844903760674701320#heading-3",target:"_blank",rel:"noopener noreferrer"}},[a._v("设计模式在vue中的应用（一）"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000038915780",target:"_blank",rel:"noopener noreferrer"}},[a._v("设计模式大冒险第五关"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://gitee.com/leeyamaster/java-script-design-pattern",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaScript设计模式之美"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);