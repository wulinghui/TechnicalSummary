(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{518:function(e,t,r){"use strict";r.r(t);var a=r(7),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/user/4195392104701415/posts",target:"_blank",rel:"noopener noreferrer"}},[e._v("spring源码系列"),t("OutboundLink")],1)]),e._v(" "),t("h1",{attrs:{id:"mergedbeandefinition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mergedbeandefinition"}},[e._v("#")]),e._v(" MergedBeanDefinition")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/m0_37607945/article/details/107411096",target:"_blank",rel:"noopener noreferrer"}},[e._v("什么是MergedBeanDefinition?"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6844904167941603341",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring源码分析七、MergeBeanDefinition源码分析"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("有父beanName,且名字相同的话,可能是在父容器里面。")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/28134832",target:"_blank",rel:"noopener noreferrer"}},[e._v("关于Spring父子容器配置了相同id的Bean"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("结论：")]),e._v(" "),t("ul",[t("li",[e._v("同一个容器，相同的id的Bean会被覆盖（也可以修改默认配置，改为抛异常）。")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.zhihu.com/search?q=%E7%88%B6%E5%AD%90%E5%AE%B9%E5%99%A8&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22article%22%2C%22sourceId%22%3A28134832%7D",target:"_blank",rel:"noopener noreferrer"}},[e._v("父子容器"),t("OutboundLink")],1),e._v("，相同的id的Bean不会被覆盖，但是由于id相同，也可能会导致注入时的出错。")])])]),e._v(" "),t("h1",{attrs:{id:"beanfactorypostprocessor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beanfactorypostprocessor"}},[e._v("#")]),e._v(" BeanFactoryPostProcessor")]),e._v(" "),t("p",[e._v("ConfigurationClassPostProcessor")]),e._v(" "),t("blockquote",[t("p",[e._v("他还实现了BeanDefinitionRegistryPostProcessor，用于注册beanDefinition，也就是解析配置类和包扫描")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("postProcessBeanDefinitionRegistry 回调中的 processConfigBeanDefinitions 核心方法:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("获得所有的BeanDefinitionName，循环遍历那些是判断配置类，并且给他们排序，设置环境变量、生成name、parser、")])]),e._v(" "),t("li",[t("p",[e._v("如何判断配置类:")]),e._v(" "),t("blockquote",[t("p",[e._v("有full配置类： @Configuration")]),e._v(" "),t("p",[e._v("lite配置类:   只要存在@Component、@ComponentScan、@Import、@ImportResource、有@Bean方法。")])])]),e._v(" "),t("li",[t("p",[e._v("循环解析配置类 ： 判断@Conditional等，接下来解析各种配置类的操作，这里有些操作还没有真正执行。")])]),e._v(" "),t("li",[t("p",[e._v("有@Component 看里面有不内部类，没有就跳过，有就递归解析内部类")])]),e._v(" "),t("li",[t("p",[e._v("有@PropertySources，处理配置文件，添加到Environment中。")])]),e._v(" "),t("li",[t("p",[e._v("有@ComponentScans, 执行scanner.doScan()，并且把扫描的BeanDefiniton递归解析配置类")])]),e._v(" "),t("li",[t("p",[e._v("有@Import，递归获得Import里面的Import的配置类。")]),e._v(" "),t("blockquote",[t("ol",[t("li",[e._v("如果是ImportSelector，那么调用执行selectImports方法得到类名，然后在把这个类当做配置类进行解析**（也是递归）**")]),e._v(" "),t("li",[e._v("如果实现的事DeferredImportSelector，则是推迟到这一批执行完后再执行。")]),e._v(" "),t("li",[e._v("如果是ImportBeanDefinitionRegistrar，那么则生成一个ImportBeanDefinitionRegistrar实例对象，并添加到配置类对象中（ConfigurationClass）的"),t("strong",[e._v("importBeanDefinitionRegistrars")]),e._v("属性中。")]),e._v(" "),t("li",[e._v("就是普通的类，则把他当做配置类解析。")])])])]),e._v(" "),t("li",[t("p",[e._v("有@ImportResource，引入spring配置文件.xml，实现xml配置的bean装载")])]),e._v(" "),t("li",[t("p",[e._v("有@Bean的方法和接口里面的@Bean : 往BeanDefinition中addBeanMethod")])]),e._v(" "),t("li",[t("p",[e._v("再递归父类的内容")])]),e._v(" "),t("li",[t("p",[e._v("再加载上面已经解析的配置类，reader.loadBeanDefinitions ： @Bean、@Import、@ImportResource、ImportBeanDefinitionRegistrar 接口，他们真正注册BeanDefinition。")])]),e._v(" "),t("li",[t("p",[e._v("他们过程产生新的BeanDefinition，接着循环解析。")])])])]),e._v(" "),t("li",[t("p",[e._v("postProcessBeanFactory 中 ：  做的事情")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("没有执行过processConfigBeanDefinitions ，就执行。 一般都是执行过了的。")])]),e._v(" "),t("li",[t("p",[e._v("遍历所有BeanDefenition找到full类型的配置类，为他生成代理类，修改对应的BeanDefenition的BeanClass，代理逻辑为根据@Bean或者方法名  执行，beanFactory.getBean(beanName, beanMethodArgs)； 方法。")])]),e._v(" "),t("li",[t("p",[e._v("最后 beanFactory.addBeanPostProcessor( new ImportAwareBeanPostProcessor(beanFactory) ); // 用于注册ImportAware  (可以类上的AnnotationMetadata信息);")])])])])]),e._v(" "),t("h1",{attrs:{id:"beanpostprocessor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beanpostprocessor"}},[e._v("#")]),e._v(" BeanPostProcessor")]),e._v(" "),t("p",[e._v("0 = {ApplicationContextAwareProcessor@1231}\n1 = {ConfigurationClassPostProcessor$ImportAwareBeanPostProcessor@1687}\n2 = {PostProcessorRegistrationDelegate$BeanPostProcessorChecker@1725}\n3 = {CommonAnnotationBeanPostProcessor@1746}\n4 = {AutowiredAnnotationBeanPostProcessor@1717}\n5 = {ApplicationListenerDetector@1798}")]),e._v(" "),t("p",[e._v("ApplicationContextAwareProcessor 执行扩展的Aware操作.\nImportAwareBeanPostProcessor     执行扩展的Aware操作.\nBeanPostProcessorChecker   校验")]),e._v(" "),t("p",[e._v("CommonAnnotationBeanPostProcessor\npostProcessMergedBeanDefinition => 1. 寻找@Resource注入点并缓存. 2.@PostConstruct @PreDestroy 注解的init 和 destory方法。\npostProcessProperties     =》 填充属性")]),e._v(" "),t("p",[e._v("AutowiredAnnotationBeanPostProcessor")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("postProcessMergedBeanDefinition  => 寻找@Autowired,@Value,@Inject注入点并缓存.\npostProcessProperties     =》 填充属性\ndetermineCandidateConstructors =》 推断构造方法, 解析@LookUp\n")])])]),t("p",[e._v("ApplicationListenerDetector\npostProcessAfterInitialization => 添加监听器.")]),e._v(" "),t("h1",{attrs:{id:"springioc-启动过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springioc-启动过程"}},[e._v("#")]),e._v(" springIOC 启动过程:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("AnnotatedBeanDefinitionReader")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("new StandardEnvironment()")])]),e._v(" "),t("li",[t("p",[e._v("new ConditionEvaluator()  // 用来解析@Conditional")])]),e._v(" "),t("li",[t("p",[e._v("registerAnnotationConfigProcessors")]),e._v(" "),t("blockquote",[t("ol",[t("li",[t("p",[e._v("用于排序的 beanFactory.setDependencyComparator(new AnnotationAwareOrderComparator())")])]),e._v(" "),t("li",[t("p",[e._v("用于设置懒加载,@Value 判断@Qualifier    beanFactory.setAutowireCandidateResolver(new ContextAnnotationAutowireCandidateResolver());")])]),e._v(" "),t("li",[t("p",[e._v("注册默认的BeanDefinition: ConfigurationClassPostProcessor,AutowiredAnnotationBeanPostProcessor,CommonAnnotationBeanPostProcessor,PersistenceAnnotationBeanPostProcessor(jpa才会注册),EventListenerMethodProcessor,DefaultEventListenerFactory")])])])])])])]),e._v(" "),t("li",[t("p",[e._v("ClassPathBeanDefinitionScanner")]),e._v(" "),t("ul",[t("li",[e._v("设置 registry ，environment，resourceLoader")]),e._v(" "),t("li",[e._v("添加默认的includeFilters： @Component 的 @javax.annotation.ManagedBean @javax.inject.Named")])])]),e._v(" "),t("li",[t("p",[e._v("注册手工设置的BeanDefinition")])]),e._v(" "),t("li",[t("p",[e._v("调用refresh()，如下")])]),e._v(" "),t("li",[t("p",[e._v("prepareRefresh :")])])]),e._v(" "),t("ul",[t("li",[e._v("initPropertySources(); 设置初始化环境变量.")]),e._v(" "),t("li",[e._v("validateRequiredProperties(); 校验必须的环境变量.")]),e._v(" "),t("li",[e._v("初始化earlyApplicationEvents （用于发布早期事件.）")])]),e._v(" "),t("ol",{attrs:{start:"6"}},[t("li",[t("p",[e._v("obtainFreshBeanFactory:  获得新的BeanFactiory逻辑，里面会校验是否可以刷新，如果可以刷新的会销毁之前BeanFactory的beans")])]),e._v(" "),t("li",[t("p",[e._v("prepareBeanFactory(beanFactory) :")]),e._v(" "),t("ul",[t("li",[e._v("设置BeanFactory的类加载器、SpringEL表达式解析器 StandardBeanExpressionResolver、类型转化注册器ResourceEditorRegistrar")]),e._v(" "),t("li",[e._v("addBeanPostProcessor实例 ： ApplicationContextAwareProcessor（初始化先的各种Aware接口注入），ApplicationListenerDetector，LoadTimeWeaverAwareProcessor（如果支持Aspectj的代理）")]),e._v(" "),t("li",[e._v("设置ignoreDependencyInterface（是Spring中的自动注入，不是@Autowired）：EnvironmentAware，EmbeddedValueResolverAware，ResourceLoaderAware，ApplicationEventPublisherAware，MessageSourceAware，ApplicationContextAware，ApplicationStartupAware")]),e._v(" "),t("li",[e._v("registerResolvableDependency ： BeanFactory，ResourceLoader，ApplicationEventPublisher，ApplicationContext")]),e._v(" "),t("li",[e._v("registerSingleton： environment，systemProperties，systemEnvironment，applicationStartup（DefaultApplicationStartup）")])])]),e._v(" "),t("li",[t("p",[e._v("postProcessBeanFactory:  子类来设置一下BeanFactory")])]),e._v(" "),t("li",[t("p",[e._v("invokeBeanFactoryPostProcessors")]),e._v(" "),t("ul",[t("li",[e._v("执行通过ApplicationContext添加进来的BeanDefinitionRegistryPostProcessor的postProcessBeanDefinitionRegistry()方法")]),e._v(" "),t("li",[e._v("执行BeanFactory中实现了PriorityOrdered接口的BeanDefinitionRegistryPostProcessor的postProcessBeanDefinitionRegistry()方法")]),e._v(" "),t("li",[e._v("执行BeanFactory中实现了Ordered接口的BeanDefinitionRegistryPostProcessor的postProcessBeanDefinitionRegistry()方法")]),e._v(" "),t("li",[e._v("执行BeanFactory中其他的BeanDefinitionRegistryPostProcessor的postProcessBeanDefinitionRegistry()方法")]),e._v(" "),t("li",[e._v("执行上面所有的BeanDefinitionRegistryPostProcessor的postProcessBeanFactory()方法")]),e._v(" "),t("li",[e._v("执行通过ApplicationContext添加进来的BeanFactoryPostProcessor的postProcessBeanFactory()方法")]),e._v(" "),t("li",[e._v("执行BeanFactory中实现了PriorityOrdered接口的BeanFactoryPostProcessor的postProcessBeanFactory()方法")]),e._v(" "),t("li",[e._v("执行BeanFactory中实现了Ordered接口的BeanFactoryPostProcessor的postProcessBeanFactory()方法")]),e._v(" "),t("li",[e._v("执行BeanFactory中其他的BeanFactoryPostProcessor的postProcessBeanFactory()方法")])])]),e._v(" "),t("li",[t("p",[e._v("registerBeanPostProcessors")]),e._v(" "),t("blockquote",[t("p",[e._v("因为上面的步骤完成了扫描，这个过程中程序员可能自己定义了一些BeanPostProcessor，在这一步就会把BeanFactory中所有的BeanPostProcessor的BeanDefinition找出来并实例化得到一个对象(getBean)，并添加到BeanFactory中去（属性"),t("strong",[e._v("beanPostProcessors")]),e._v("），最后再重新new和添加一个ApplicationListenerDetector对象（之前其实就new和添加了过，这里是为了把ApplicationListenerDetector移动到最后）")]),e._v(" "),t("p",[e._v("上面的具体步骤:")]),e._v(" "),t("p",[e._v("获得所有的BeanPostProcessor的name -》 找出PriorityOrdered，getBean且排序后再add  -》 先找出Ordered，getBean且排序后再add  -》 再找出普通的BeanPostProcessor，getBean再add（没有排序）  -》 先找出MergedBeanDefinitionPostProcessor（代表spring内部的），排序后再add  -》  最后再重新添加一个new ApplicationListenerDetector对象。")]),e._v(" "),t("p",[e._v("细节:")]),e._v(" "),t("p",[e._v("再addBeanPostProcessor操作的时候，他会先remove，add.\nApplicationListenerDetector他的equals对象是判断它里面的application是否相同的。")])])]),e._v(" "),t("li",[t("p",[e._v("initMessageSource ： 初始化国际化，设置messageSource单例，要么是用户设置的，要么是DelegatingMessageSource")])]),e._v(" "),t("li",[t("p",[e._v("initApplicationEventMulticaster：事件广播者，设置applicationEventMulticaster单例，用户设置或SimpleApplicationEventMulticaster")])]),e._v(" "),t("li",[t("p",[e._v("onRefresh():  给子类的模板方法，执行刷新。")])]),e._v(" "),t("li",[t("p",[e._v("registerListeners ： 添加了事件监听器，并且广播earlyApplicationEvents的事件，并且把earlyApplicationEvents置null")])]),e._v(" "),t("li",[t("p",[e._v("finishBeanFactoryInitialization")]),e._v(" "),t("ul",[t("li",[e._v("如果单例池中有conversionService的类,就设置beanFactory.setConversionService，用于代替上面的setAutowireCandidateResolver")]),e._v(" "),t("li",[e._v("如果没有StringValueResolver，则设置默认的基于环境变量的占位符解析器。 ${xxx} => a")]),e._v(" "),t("li",[e._v("先所有初始化单例的LoadTimeWeaverAware")]),e._v(" "),t("li",[e._v("冻结BeanDefinitionNames的内容，也就是说BeanDefinitions已经不再添加和删除了。里面的内容可以更改。")]),e._v(" "),t("li",[e._v("实例化非懒加载的单例Bean")])])]),e._v(" "),t("li",[t("p",[e._v("finishRefresh")]),e._v(" "),t("ul",[t("li",[e._v("clearResourceCaches ;  清除已经没有用的ASM metadata")]),e._v(" "),t("li",[e._v("initLifecycleProcessor:   设置lifecycleProcessor单例，默认为DefaultLifecycleProcessor")]),e._v(" "),t("li",[e._v("getLifecycleProcessor().onRefresh();   调用所有的Lifecycle的Bean的start()")]),e._v(" "),t("li",[e._v("publishEvent(event) ;  广播完成事件.")])])]),e._v(" "),t("li",[t("p",[e._v("resetCommonCaches ： 反射、classLoader、type 等等缓存清理。")])])]),e._v(" "),t("h1",{attrs:{id:"aop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aop"}},[e._v("#")]),e._v(" AOP")]),e._v(" "),t("p",[e._v("spring中的aop都继承AbstractAutoProxyCreator implements SmartInstantiationAwareBeanPostProcessor, BeanFactoryAware")]),e._v(" "),t("p",[e._v("实现了getEarlyBeanReference、postProcessBeforeInstantiation、postProcessAfterInitialization.扩展点。")]),e._v(" "),t("p",[e._v("利用模板模式，实现了。1. 他把循环依赖和初始化后，利用保证同一代理对象。 2. 他定义了允许初始化前自定义的代理对象逻辑。")]),e._v(" "),t("p",[e._v("并且定义了getAdvicesAndAdvisorsForBean方法获得所有的Interceptors，供子类实现。")]),e._v(" "),t("p",[e._v("主要方法wrapIfNecessary :")]),e._v(" "),t("p",[e._v("从缓存中有的，已经判断过了的、正在创建的Bean的，和子类getAdvicesAndAdvisorsForBean方法为null的，都直接返回bean。")]),e._v(" "),t("p",[e._v("把bean包装成TargetSource，同时把返回的Interceptors适配成Advisor，在创建ProxyFactory并且getProxy();")]),e._v(" "),t("h2",{attrs:{id:"enableaspectjautoproxy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enableaspectjautoproxy"}},[e._v("#")]),e._v(" @EnableAspectJAutoProxy")]),e._v(" "),t("p",[e._v("注册一个AnnotationAwareAspectJAutoProxyCreator的BeanDefinition，并且设置对应的属性。")]),e._v(" "),t("p",[e._v("他继承了AnnotationAwareAspectJAutoProxyCreator   ->> AspectJAwareAdvisorAutoProxyCreator ->> AbstractAdvisorAutoProxyCreator ->> AbstractAutoProxyCreator")]),e._v(" "),t("p",[e._v("所以这里主要看他们实现的getAdvicesAndAdvisorsForBean方法中调用的findCandidateAdvisors:")]),e._v(" "),t("ol",[t("li",[e._v("他调用super.findAdvisorBeans(); 获得所有实现Advisor接口的bean.")]),e._v(" "),t("li",[e._v("再从所有切面中解析得到所有Advisor对象。\n"),t("ul",[t("li",[e._v("遍历所有的bean，判断类上有@Aspect 并且 名字开头不能为 ajc$")]),e._v(" "),t("li",[e._v("利用BeanFactoryAspectInstanceFactory来解析Aspect类")]),e._v(" "),t("li",[e._v("遍历一个类上没有@Pointcut的方法，再判断是否有@Pointcut, @Around@Before@ After@AfterReturning@AfterThrowing注解；并且生成AspectJExpressionPointcut；")]),e._v(" "),t("li",[e._v("aspectJAdvisorFactory.getAdvice 构建Advice，生成对应的@Around@Before@After")]),e._v(" "),t("li",[e._v("把上面的构建为Advisor，对应类为InstantiationModelAwarePointcutAdvisorImpl  implements  PointcutAdvisor。")])])]),e._v(" "),t("li",[e._v("筛选满足条件的Advisor集合")]),e._v(" "),t("li",[e._v("再进行排序.")]),e._v(" "),t("li",[e._v("适配，createProxy，")])]),e._v(" "),t("h2",{attrs:{id:"equals-hashcode-getclass方法会代理吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#equals-hashcode-getclass方法会代理吗"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/qq_36874177/article/details/78504849",target:"_blank",rel:"noopener noreferrer"}},[e._v("equals，hashCode，getClass方法会代理吗?"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("如果是jdk的代理的话他只能代理接口的内容，Object的final方法是不会代理的（notify、notifyAll、wait、getClass），接口不能定义这些方法，会报错的。")]),e._v(" "),t("p",[e._v("cglib是基于继承的，所以Object的final方法也不会代理。")]),e._v(" "),t("p",[e._v("但是再Proxy代码里面会判断equals，hashCode方法。")])]),e._v(" "),t("h2",{attrs:{id:"proxyfactory的运用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxyfactory的运用"}},[e._v("#")]),e._v(" ProxyFactory的运用")]),e._v(" "),t("p",[e._v("getProxy 运行过程:")]),e._v(" "),t("ol",[t("li",[e._v("构建 adviseds ，创建确定是jdk还是cglib的AopProxy代理")]),e._v(" "),t("li",[e._v("getProxy 执行 :  不管是jdk还是cglib都是对应的流程。")]),e._v(" "),t("li",[e._v("设置classLoad，设置接口或者父类，生成callback中的invoke内容。")]),e._v(" "),t("li",[e._v("在invoke或者callFiltert中判断，equals、hashCode不会被代理。")]),e._v(" "),t("li",[e._v("再执行TargetSource.getTarget() 获得原始对象。")]),e._v(" "),t("li",[e._v("通过DefaultAdvisorChainFactory，处理PointcutAdvisor、IntroductionAdvisor、Advisor 将他们适配成MethodInterceptor集合链路，并且缓存起来。")]),e._v(" "),t("li",[e._v("把上面获得的内容，构造MethodInvocation对象，执行proceed()方法。")]),e._v(" "),t("li",[e._v("proceed内部执行，链路形式执行MethodInterceptor.invoke(MethodInvocation);方法。")]),e._v(" "),t("li",[e._v("在我们编写的MethodInterceptor中执行MethodInvocation.proceed方法，将会链路递归执行，到最后一个。")]),e._v(" "),t("li",[e._v("MethodInvocation和MethodInterceptor互相调用就是责任链的经典实现。")])]),e._v(" "),t("h2",{attrs:{id:"targetsource的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#targetsource的使用"}},[e._v("#")]),e._v(" TargetSource的使用")]),e._v(" "),t("p",[e._v("@Lazy 就是用的ProxyFactory中生成代理对象，再TargetSource的getTarget中才去spring.getBean。")]),e._v(" "),t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("代码中事务失效的情况：")]),e._v(" "),t("blockquote",[t("p",[e._v("类没有被Spring管理、方法不是 public的 -- 该异常一般情况都会被编译器识别、方法是final的、自身this调用、异常被捕获、抛出异常类型不对、传播类型不支持事务、数据库本身不支持事务。")])])]),e._v(" "),t("li",[t("p",[e._v("为啥自身this调用事务方法，传播机制失效。")]),e._v(" "),t("blockquote",[t("p",[e._v("spring基于cglib的代理实现，cglib的代理是基于父子类，内部把被代理对象放到target属性中，执行业务方法时，其实是taget.xxx();  再方法中 this.***(); 其实还是target再执行，而不是代理对象在执行。所以失效。 解决办法是注入自己类，这里会触发循环依赖机制。")])])])]),e._v(" "),t("h1",{attrs:{id:"事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[e._v("#")]),e._v(" 事务")]),e._v(" "),t("p",[e._v("@EnableTransactionManagement ， 注册AutoProxyRegistrar，ProxyTransactionManagementConfiguration。")]),e._v(" "),t("p",[e._v('AutoProxyRegistrar ： 注册"org.springframework.aop.config.internalAutoProxyCreator"的bean，也就是上面AOP中AbstractAutoProxyCreator的子类，相当于开启了AOP.')]),e._v(" "),t("p",[e._v("AbstractTransactionManagementConfiguration : 注册几个bean： TransactionalEventListenerFactory、TransactionInterceptor、AnnotationTransactionAttributeSource、BeanFactoryTransactionAttributeSourceAdvisor。")]),e._v(" "),t("p",[e._v("BeanFactoryTransactionAttributeSourceAdvisor > 依赖TransactionAttributeSource.getTransactionAttribute（用来解析@Transactional注解）生成pointcut ，同时依赖 TransactionInterceptor 生成MethodInterceptor")]),e._v(" "),t("p",[e._v("TransactionalEventListenerFactory  :  和TransactionSynchronizationManager 事务回调注册接口类似。 实现Spring事务同步和监听。")]),e._v(" "),t("h2",{attrs:{id:"核心类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心类"}},[e._v("#")]),e._v(" 核心类")]),e._v(" "),t("p",[e._v("AnnotationTransactionAttributeSource ： 方法映射关系： pointcut.matches(class)   -> isCandidateClass(class);  pointcut.matches(method,class)   -> getTransactionAttribute(method, targetClass) ，该方法还将初始化TransactionAttribute的内容 。")]),e._v(" "),t("p",[e._v("他里面运用了组合模式，委托给Set"),t("TransactionAnnotationParser",[e._v(" 去处理。  SpringTransactionAnnotationParser（必有），javax.transaction.Transactional，javax.ejb.TransactionAttribute。 他们3个分别去查找。\n重点看： SpringTransactionAnnotationParser的处理，就能找到@Transactional注解的判断和处理了。")])],1),e._v(" "),t("p",[e._v("TransactionAttribute 对应的实现是 RuleBasedTransactionAttribute")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("TransactionAspectSupport.invokeWithinTransaction : 方法核心。")]),e._v(" "),t("p",[t("s",[e._v("下面还是看流程图吧。")])]),e._v(" "),t("ol",{attrs:{start:"0"}},[t("li",[t("p",[e._v("获得TransactionAttribute和获得对应的TransactionManager")])]),e._v(" "),t("li",[t("p",[e._v("createTransactionIfNecessary(ptm, txAttr, joinpointIdentification)  创建必要的事务")]),e._v(" "),t("ul",[t("li",[e._v("tm.getTransaction(txAttr) 获得status，他里面会创建事务，并且处理事务的传播机制.")])])]),e._v(" "),t("li",[t("p",[e._v("invocation.proceedWithInvocation()  执行业务方法")])]),e._v(" "),t("li",[t("p",[e._v("completeTransactionAfterThrowing(txInfo, ex) 回滚事务并且关闭连接")])]),e._v(" "),t("li",[t("p",[e._v("commitTransactionAfterReturning(txInfo) 提交事务并且关闭连接")])])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("TransactionAttribute")]),e._v(" "),t("blockquote",[t("p",[e._v("事务属性: 就是@Transactional中的一些配置。")])]),e._v(" "),t("p",[e._v("TransactionSynchronizationManager")]),e._v(" "),t("blockquote",[t("p",[e._v("事务相关的ThreadLocal统一管理的一些api，比如resources（map<obj,obj> 一般为key为DataSource对象，value为ConnectionHolder对象）、synchronizations、currentTransactionName、currentTransactionReadOnly、currentTransactionIsolationLevel、actualTransactionActive")]),e._v(" "),t("p",[e._v("第三方整合事务也经常用到这个，但是不是直接用它，而是用spring提供的DataSourceUtils.getConnection();\n可以见mybatis-spring的事务整合。")])]),e._v(" "),t("p",[e._v("TransactionAspectSupport")]),e._v(" "),t("blockquote",[t("p",[e._v("他管理 ThreaLocal"),t("TransactionInfo",[e._v(" ，并且控制代理对象的主流程。")])],1),e._v(" "),t("p",[e._v("TransactionInfo : TransactionInfo 主要是持有事务的状态，以及上一个TransactionInfo 的一个引用，并与当前线程进行绑定。内部拥有"),t("strong",[e._v("TransactionStatus")])]),e._v(" "),t("p",[e._v("TransactionStatus： 主要描述当前事务的状态，比如：是否有事务，是否是新事物，事务是否只读；回滚点相关操作等等。这些相关的属性在后面会影响事务的提交。")])]),e._v(" "),t("p",[e._v("AbstractPlatformTransactionManager")]),e._v(" "),t("blockquote",[t("p",[e._v("为TransactionManager接口的实现，主要用于控制开启事务，提交事务，回滚事务，执行扩展点的主流程。")])]),e._v(" "),t("h2",{attrs:{id:"事务的高级用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务的高级用法"}},[e._v("#")]),e._v(" 事务的高级用法:")]),e._v(" "),t("ol",[t("li",[e._v("事务传播机制 ： @Transactional(propagation = Propagation.REQUIRES_NEW)")]),e._v(" "),t("li",[e._v("强制回滚 ：TransactionAspectSupport.currentTransactionStatus().setRollbackOnly()")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/f641385712/article/details/91897175",target:"_blank",rel:"noopener noreferrer"}},[e._v("事务同步"),t("OutboundLink")],1),e._v("： TransactionSynchronizationManager.registerSynchronization、@TransactionEventListener")])]),e._v(" "),t("h1",{attrs:{id:"自己的疑惑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自己的疑惑"}},[e._v("#")]),e._v(" 自己的疑惑")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("@EnableAspectJAutoProxy @EnableTransactionManagement 都是导入org.springframework.aop.config.internalAutoProxyCreator的Bean对象，最终是谁呢??")]),e._v(" "),t("p",[e._v("最终是EnableAspectJAutoProxy 的是直接selectImports的，他会直接导入AutoProxyRegistrar并且递归解析。它实现了registerBeanDefinitions放到list的前面，所以他的AopConfigUtils.registerAutoProxyCreatorIfNecessary也是先执行。")]),e._v(" "),t("p",[e._v("再解析EnableAspectJAutoProxy，时候他已经放到后面了，这时候就是以他的AopConfigUtils.registerAutoProxyCreatorIfNecessary修改BeanDefinition的BeanClass了。")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://blog.csdn.net/qq_39002724/article/details/113609903",target:"_blank",rel:"noopener noreferrer"}},[e._v("spring中autowired注入自己的代理后，最后容器中的对象是原对象还是代理对象。"),t("OutboundLink")],1),e._v("  还是代理对象，执行的时候是cglib的tagert委托对象，所以会有aop失效的情况。")])]),e._v(" "),t("li",[t("p",[e._v("LifecycleProcessor 的用法和应用场景   >  再spring容器启动后执行一些代码。")])])]),e._v(" "),t("h1",{attrs:{id:"注解原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注解原理"}},[e._v("#")]),e._v(" 注解原理")]),e._v(" "),t("ol",[t("li",[e._v("@Lazy 注解原理  在哪生成代理.")])]),e._v(" "),t("blockquote",[t("ol",[t("li",[e._v("再属性填充(依赖注入中) 他是生成的代理对象的标识，具体的再BeanPostProcessor.postProcessProperties 里面生成对应的对应的InjectedElement的子类.")]),e._v(" "),t("li",[e._v("再BeanDefinition中，他是判断是否初始化BeanFaction中生成对应的bean")])])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[e._v("@Replace  注解  在哪生成代理.")])]),e._v(" "),t("li",[t("p",[e._v("@Configuration 注解在哪生成代理对象.")]),e._v(" "),t("blockquote",[t("p",[e._v("再invokeBeanFactoryPostProcessors里面会判断是不是fult类，去生成动态代理。")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://my.oschina.net/zudajun/blog/664659",target:"_blank",rel:"noopener noreferrer"}},[e._v("@LookUp 解决什么问题 (.) ，他是在哪实现的??"),t("OutboundLink")],1)])])]),e._v(" "),t("blockquote",[t("p",[e._v("解决单例依赖多例的情况:")]),e._v(" "),t("p",[e._v("determineCandidateConstructors => 往beanDefinition 添加 LookupOverride方法.\n再执行推断构造方法里面生成对应的cglib的代理对象。")])]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/it_lihongmin/article/details/102940643",target:"_blank",rel:"noopener noreferrer"}},[e._v("@EventListener实现方式"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("EventListenerMethodProcessor 里面 postProcessBeanFactory里面获得所有的EventListenerFactory，之后再到afterSingletonsInstantiated加载所有单例完后，再遍历所有的bean，判断类上的方法是否有@EventListener，再遍历所有的EventListenerFactory调用supportsMethod(method)过滤，通过后EventListenerFactory.createApplicationListener生成代理对象。")])]),e._v(" "),t("h1",{attrs:{id:"spring-设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-设计模式"}},[e._v("#")]),e._v(" Spring 设计模式")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("简单工厂")]),e._v(" "),t("th",[e._v("BeanFactory体现")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("工厂方法")]),e._v(" "),t("td",[e._v("FactoryBean接口")])]),e._v(" "),t("tr",[t("td",[e._v("单例模式")]),e._v(" "),t("td",[e._v("Spring依赖注入Bean实例默认是单例的，getSingleton()方法")])]),e._v(" "),t("tr",[t("td",[e._v("装饰器模式")]),e._v(" "),t("td",[e._v("一种是类名中含有Wrapper，另一种是类名中含有Decorator")])]),e._v(" "),t("tr",[t("td",[e._v("代理模式")]),e._v(" "),t("td",[e._v("AOP底层，@Configuration")])]),e._v(" "),t("tr",[t("td",[e._v("观察者模式")]),e._v(" "),t("td",[e._v("spring的事件驱动模型，listener的实现")])]),e._v(" "),t("tr",[t("td",[e._v("策略设计模式")]),e._v(" "),t("td",[e._v("资源访问Resource接口，不同的applicationContext的实现等等一些接口多实现类")])]),e._v(" "),t("tr",[t("td",[e._v("模版方法模式")]),e._v(" "),t("td",[e._v("Spring几乎所有的外接扩展都采用这种模式 ，抽象类，JdbcTempalte")])]),e._v(" "),t("tr",[t("td",[e._v("责任链模式")]),e._v(" "),t("td",[e._v("CglibAopProxy#chain，Interceptor#invoke")])])])]),e._v(" "),t("h2",{attrs:{id:"资源访问resource接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源访问resource接口"}},[e._v("#")]),e._v(" 资源访问Resource接口")]),e._v(" "),t("ul",[t("li",[t("ul",[t("li",[e._v("UrlResource：访问网络资源的实现类")]),e._v(" "),t("li",[e._v("ClassPathResource：访问类加载路径里资源的实现类")]),e._v(" "),t("li",[e._v("FileSystemResource：访问文件系统里资源的实现类")]),e._v(" "),t("li",[e._v("ServletContextResource：访问相对于 ServletContext 路径里的资源的实现类")]),e._v(" "),t("li",[e._v("InputStreamResource：访问输入流资源的实现类")]),e._v(" "),t("li",[e._v("ByteArrayResource：访问字节数组资源的实现类")])])])]),e._v(" "),t("h1",{attrs:{id:"spring核心api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring核心api"}},[e._v("#")]),e._v(" Spring核心API")]),e._v(" "),t("h2",{attrs:{id:"beanfactory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory"}},[e._v("#")]),e._v(" BeanFactory")]),e._v(" "),t("ul",[t("li",[e._v("getBean")]),e._v(" "),t("li",[e._v("containsBean")]),e._v(" "),t("li",[e._v("isSingleton/Prototype")]),e._v(" "),t("li",[e._v("isMatch")])]),e._v(" "),t("h2",{attrs:{id:"beandefinition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beandefinition"}},[e._v("#")]),e._v(" BeanDefinition")]),e._v(" "),t("p",[e._v("用来描述Bean,里面存放Bean元数据，比如Bean类名、scope、属性、构造函数参数列表、依赖的bean、是否是单例类、是否是懒加载等一些列信息。")]),e._v(" "),t("h3",{attrs:{id:"实现类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现类"}},[e._v("#")]),e._v(" 实现类")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("ChildBeanDefinition")])]),e._v(" "),t("li",[t("p",[e._v("RootBeanDefinition ， 代表一个xml,java Config来的BeanDefinition")])]),e._v(" "),t("li",[t("p",[e._v("GenericBeanDefinition")])]),e._v(" "),t("li",[t("p",[e._v("MergedBeanDefinition")])]),e._v(" "),t("li",[t("p",[e._v("AnnotatedBeanDefinition")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("表示注解类型bean定义")]),e._v(" "),t("li",[e._v("AnnotationMetadata，注解元信息")]),e._v(" "),t("li",[e._v("MethodMetadata，方法元信息")])])])])]),e._v(" "),t("h2",{attrs:{id:"beandefinitionregistry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beandefinitionregistry"}},[e._v("#")]),e._v(" BeanDefinitionRegistry")]),e._v(" "),t("ul",[t("li",[e._v("有增，查，删BeanDefinition的能力。一次只能注册一个BeanDefinition.")])]),e._v(" "),t("h3",{attrs:{id:"实现类-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现类-2"}},[e._v("#")]),e._v(" 实现类")]),e._v(" "),t("ul",[t("li",[e._v("SimpleBeanDefinitionRegistry")]),e._v(" "),t("li",[e._v("DefaultListableBeanFactory")]),e._v(" "),t("li",[e._v("GenericApplicationContext")])]),e._v(" "),t("h1",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[e._v("#")]),e._v(" 问题")]),e._v(" "),t("ul",[t("li",[e._v("描述下BeanFactory。")]),e._v(" "),t("li",[e._v("BeanFactory和ApplicationContext的区别？")]),e._v(" "),t("li",[e._v("简述SpringIoC的加载过程。")]),e._v(" "),t("li",[e._v("Spring中有哪些扩展接口及调用时机。")]),e._v(" "),t("li",[e._v("怎么解决循环依赖")])]),e._v(" "),t("h1",{attrs:{id:"扩展点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展点"}},[e._v("#")]),e._v(" 扩展点")]),e._v(" "),t("h2",{attrs:{id:"beanfactorypostprocessor-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beanfactorypostprocessor-2"}},[e._v("#")]),e._v(" BeanFactoryPostProcessor")]),e._v(" "),t("h3",{attrs:{id:"beandefinitionregistrypostprocessor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beandefinitionregistrypostprocessor"}},[e._v("#")]),e._v(" BeanDefinitionRegistryPostProcessor")]),e._v(" "),t("h2",{attrs:{id:"beanpostprocessor-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#beanpostprocessor-2"}},[e._v("#")]),e._v(" BeanPostProcessor")]),e._v(" "),t("h3",{attrs:{id:"instantiationawarebeanpostprocessor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instantiationawarebeanpostprocessor"}},[e._v("#")]),e._v(" InstantiationAwareBeanPostProcessor")]),e._v(" "),t("h3",{attrs:{id:"abstractautoproxycreator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstractautoproxycreator"}},[e._v("#")]),e._v(" AbstractAutoProxyCreator")]),e._v(" "),t("h2",{attrs:{id:"import"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[e._v("#")]),e._v(" @Import")]),e._v(" "),t("h3",{attrs:{id:"importbeandefinitionregistrar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#importbeandefinitionregistrar"}},[e._v("#")]),e._v(" ImportBeanDefinitionRegistrar")]),e._v(" "),t("ul",[t("li",[e._v("FeignClientsRegistrar")])]),e._v(" "),t("h2",{attrs:{id:"aware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aware"}},[e._v("#")]),e._v(" Aware")]),e._v(" "),t("h2",{attrs:{id:"initializingbean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#initializingbean"}},[e._v("#")]),e._v(" InitializingBean")]),e._v(" "),t("h2",{attrs:{id:"factorybean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#factorybean"}},[e._v("#")]),e._v(" FactoryBean")]),e._v(" "),t("ul",[t("li",[e._v("FeignClientFactorybean")]),e._v(" "),t("li",[e._v("MapperFactoryBean")]),e._v(" "),t("li",[e._v("NacosDataSourceFactoryBean")])]),e._v(" "),t("h2",{attrs:{id:"smartinitializingsingleton"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smartinitializingsingleton"}},[e._v("#")]),e._v(" SmartInitializingSingleton")]),e._v(" "),t("ul",[t("li",[e._v("LoadBalancerAutoConfiguration")])]),e._v(" "),t("h2",{attrs:{id:"applicationlistener"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#applicationlistener"}},[e._v("#")]),e._v(" ApplicationListener")]),e._v(" "),t("ul",[t("li",[e._v("NacosAutoServiceRegistration#onApplicationEvent")])]),e._v(" "),t("h2",{attrs:{id:"lifecycle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lifecycle"}},[e._v("#")]),e._v(" Lifecycle")]),e._v(" "),t("h3",{attrs:{id:"smartlifecycle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#smartlifecycle"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.jianshu.com/p/7b8f2a97c8f5",target:"_blank",rel:"noopener noreferrer"}},[e._v("SmartLifecycle"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("在Spring加载和初始化所有bean后，接着执行一些任务或者启动需要的异步服务，这样我们可以使用 SmartLifecycle 来做到")]),e._v(" "),t("ul",[t("li",[e._v("NacosWatch#start")]),e._v(" "),t("li",[e._v("EurekaServerInitializerConfiguration")])]),e._v(" "),t("h3",{attrs:{id:"lifecycleprocessor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lifecycleprocessor"}},[e._v("#")]),e._v(" LifecycleProcessor")]),e._v(" "),t("h2",{attrs:{id:"handlerinterceptor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handlerinterceptor"}},[e._v("#")]),e._v(" HandlerInterceptor")]),e._v(" "),t("ul",[t("li",[e._v("SentinelDataSourceHandler")])]),e._v(" "),t("h2",{attrs:{id:"methodinterceptor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methodinterceptor"}},[e._v("#")]),e._v(" MethodInterceptor")]),e._v(" "),t("ul",[t("li",[e._v("seata中的GlobalTransactionalInterceptor")]),e._v(" "),t("li",[e._v("AOP")]),e._v(" "),t("li",[e._v("TransactionInterceptor")])]),e._v(" "),t("h1",{attrs:{id:"参考资料-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料-2"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/gcdd1993/p/12292214.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring事件驱动模型"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);