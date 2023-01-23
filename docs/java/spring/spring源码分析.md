---
title: spring源码分析
date: 2021-12-10 18:17:00
permalink: /pages/springFramework/
categories:
  - java
  - spring
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 参考资料

[spring源码系列](https://juejin.cn/user/4195392104701415/posts)



# MergedBeanDefinition

[什么是MergedBeanDefinition?](https://blog.csdn.net/m0_37607945/article/details/107411096)

[Spring源码分析七、MergeBeanDefinition源码分析](https://juejin.cn/post/6844904167941603341)

> 有父beanName,且名字相同的话,可能是在父容器里面。

[关于Spring父子容器配置了相同id的Bean](https://zhuanlan.zhihu.com/p/28134832)

> 结论：
>
> - 同一个容器，相同的id的Bean会被覆盖（也可以修改默认配置，改为抛异常）。
> - [父子容器](https://www.zhihu.com/search?q=父子容器&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"article"%2C"sourceId"%3A28134832})，相同的id的Bean不会被覆盖，但是由于id相同，也可能会导致注入时的出错。



# BeanFactoryPostProcessor

ConfigurationClassPostProcessor  

> 他还实现了BeanDefinitionRegistryPostProcessor，用于注册beanDefinition，也就是解析配置类和包扫描



1. postProcessBeanDefinitionRegistry 回调中的 processConfigBeanDefinitions 核心方法:

   - 获得所有的BeanDefinitionName，循环遍历那些是判断配置类，并且给他们排序，设置环境变量、生成name、parser、

   - 如何判断配置类: 

     > 有full配置类： @Configuration
     >
     > lite配置类:   只要存在@Component、@ComponentScan、@Import、@ImportResource、有@Bean方法。

   - 循环解析配置类 ： 判断@Conditional等，接下来解析各种配置类的操作，这里有些操作还没有真正执行。

   - 有@Component 看里面有不内部类，没有就跳过，有就递归解析内部类

   - 有@PropertySources，处理配置文件，添加到Environment中。

   - 有@ComponentScans, 执行scanner.doScan()，并且把扫描的BeanDefiniton递归解析配置类

   - 有@Import，递归获得Import里面的Import的配置类。 

     > 1. 如果是ImportSelector，那么调用执行selectImports方法得到类名，然后在把这个类当做配置类进行解析**（也是递归）**
     > 2. 如果实现的事DeferredImportSelector，则是推迟到这一批执行完后再执行。
     > 3. 如果是ImportBeanDefinitionRegistrar，那么则生成一个ImportBeanDefinitionRegistrar实例对象，并添加到配置类对象中（ConfigurationClass）的**importBeanDefinitionRegistrars**属性中。
     > 4. 就是普通的类，则把他当做配置类解析。

   - 有@ImportResource，引入spring配置文件.xml，实现xml配置的bean装载

   - 有@Bean的方法和接口里面的@Bean : 往BeanDefinition中addBeanMethod

   - 再递归父类的内容

   - 再加载上面已经解析的配置类，reader.loadBeanDefinitions ： @Bean、@Import、@ImportResource、ImportBeanDefinitionRegistrar 接口，他们真正注册BeanDefinition。

   - 他们过程产生新的BeanDefinition，接着循环解析。

     

2. postProcessBeanFactory 中 ：  做的事情

   - 没有执行过processConfigBeanDefinitions ，就执行。 一般都是执行过了的。

   - 遍历所有BeanDefenition找到full类型的配置类，为他生成代理类，修改对应的BeanDefenition的BeanClass，代理逻辑为根据@Bean或者方法名  执行，beanFactory.getBean(beanName, beanMethodArgs)； 方法。
   - 最后 beanFactory.addBeanPostProcessor( new ImportAwareBeanPostProcessor(beanFactory) ); // 用于注册ImportAware  (可以类上的AnnotationMetadata信息);

# BeanPostProcessor

0 = {ApplicationContextAwareProcessor@1231} 
1 = {ConfigurationClassPostProcessor$ImportAwareBeanPostProcessor@1687} 
2 = {PostProcessorRegistrationDelegate$BeanPostProcessorChecker@1725} 
3 = {CommonAnnotationBeanPostProcessor@1746} 
4 = {AutowiredAnnotationBeanPostProcessor@1717} 
5 = {ApplicationListenerDetector@1798} 



ApplicationContextAwareProcessor 执行扩展的Aware操作.
ImportAwareBeanPostProcessor     执行扩展的Aware操作.
BeanPostProcessorChecker   校验

CommonAnnotationBeanPostProcessor 
	postProcessMergedBeanDefinition => 1. 寻找@Resource注入点并缓存. 2.@PostConstruct @PreDestroy 注解的init 和 destory方法。
	postProcessProperties     =》 填充属性
	

AutowiredAnnotationBeanPostProcessor 

	postProcessMergedBeanDefinition  => 寻找@Autowired,@Value,@Inject注入点并缓存.
	postProcessProperties     =》 填充属性
	determineCandidateConstructors =》 推断构造方法, 解析@LookUp



ApplicationListenerDetector 
	postProcessAfterInitialization => 添加监听器.
	
	
	

# springIOC 启动过程:

1. AnnotatedBeanDefinitionReader 

   - new StandardEnvironment()

   - new ConditionEvaluator()  // 用来解析@Conditional

   - registerAnnotationConfigProcessors

     > 1. 用于排序的 beanFactory.setDependencyComparator(new AnnotationAwareOrderComparator())
     >
     > 2. 用于设置懒加载,@Value 判断@Qualifier    beanFactory.setAutowireCandidateResolver(new ContextAnnotationAutowireCandidateResolver());
     > 3. 注册默认的BeanDefinition: ConfigurationClassPostProcessor,AutowiredAnnotationBeanPostProcessor,CommonAnnotationBeanPostProcessor,PersistenceAnnotationBeanPostProcessor(jpa才会注册),EventListenerMethodProcessor,DefaultEventListenerFactory

2. ClassPathBeanDefinitionScanner
   - 设置 registry ，environment，resourceLoader
   - 添加默认的includeFilters： @Component 的 @javax.annotation.ManagedBean @javax.inject.Named

3. 注册手工设置的BeanDefinition

4. 调用refresh()，如下

5.  prepareRefresh : 
   - initPropertySources(); 设置初始化环境变量.
   - validateRequiredProperties(); 校验必须的环境变量.
   - 初始化earlyApplicationEvents （用于发布早期事件.）

6. obtainFreshBeanFactory:  获得新的BeanFactiory逻辑，里面会校验是否可以刷新，如果可以刷新的会销毁之前BeanFactory的beans

7. prepareBeanFactory(beanFactory) : 
   - 设置BeanFactory的类加载器、SpringEL表达式解析器 StandardBeanExpressionResolver、类型转化注册器ResourceEditorRegistrar
   - addBeanPostProcessor实例 ： ApplicationContextAwareProcessor（初始化先的各种Aware接口注入），ApplicationListenerDetector，LoadTimeWeaverAwareProcessor（如果支持Aspectj的代理）
   - 设置ignoreDependencyInterface（是Spring中的自动注入，不是@Autowired）：EnvironmentAware，EmbeddedValueResolverAware，ResourceLoaderAware，ApplicationEventPublisherAware，MessageSourceAware，ApplicationContextAware，ApplicationStartupAware
   - registerResolvableDependency ： BeanFactory，ResourceLoader，ApplicationEventPublisher，ApplicationContext
   - registerSingleton： environment，systemProperties，systemEnvironment，applicationStartup（DefaultApplicationStartup）

8. postProcessBeanFactory:  子类来设置一下BeanFactory

9. invokeBeanFactoryPostProcessors

   - 执行通过ApplicationContext添加进来的BeanDefinitionRegistryPostProcessor的postProcessBeanDefinitionRegistry()方法
   - 执行BeanFactory中实现了PriorityOrdered接口的BeanDefinitionRegistryPostProcessor的postProcessBeanDefinitionRegistry()方法
   - 执行BeanFactory中实现了Ordered接口的BeanDefinitionRegistryPostProcessor的postProcessBeanDefinitionRegistry()方法
   - 执行BeanFactory中其他的BeanDefinitionRegistryPostProcessor的postProcessBeanDefinitionRegistry()方法
   - 执行上面所有的BeanDefinitionRegistryPostProcessor的postProcessBeanFactory()方法
   - 执行通过ApplicationContext添加进来的BeanFactoryPostProcessor的postProcessBeanFactory()方法
   - 执行BeanFactory中实现了PriorityOrdered接口的BeanFactoryPostProcessor的postProcessBeanFactory()方法
   - 执行BeanFactory中实现了Ordered接口的BeanFactoryPostProcessor的postProcessBeanFactory()方法
   - 执行BeanFactory中其他的BeanFactoryPostProcessor的postProcessBeanFactory()方法

10. registerBeanPostProcessors

    > 因为上面的步骤完成了扫描，这个过程中程序员可能自己定义了一些BeanPostProcessor，在这一步就会把BeanFactory中所有的BeanPostProcessor的BeanDefinition找出来并实例化得到一个对象(getBean)，并添加到BeanFactory中去（属性**beanPostProcessors**），最后再重新new和添加一个ApplicationListenerDetector对象（之前其实就new和添加了过，这里是为了把ApplicationListenerDetector移动到最后）
    >
    > 上面的具体步骤:  
    >
    > 获得所有的BeanPostProcessor的name -》 找出PriorityOrdered，getBean且排序后再add  -》 先找出Ordered，getBean且排序后再add  -》 再找出普通的BeanPostProcessor，getBean再add（没有排序）  -》 先找出MergedBeanDefinitionPostProcessor（代表spring内部的），排序后再add  -》  最后再重新添加一个new ApplicationListenerDetector对象。
    >
    > 细节:
    >
    > 再addBeanPostProcessor操作的时候，他会先remove，add. 
    > ApplicationListenerDetector他的equals对象是判断它里面的application是否相同的。

    

11. initMessageSource ： 初始化国际化，设置messageSource单例，要么是用户设置的，要么是DelegatingMessageSource

12. initApplicationEventMulticaster：事件广播者，设置applicationEventMulticaster单例，用户设置或SimpleApplicationEventMulticaster

13. onRefresh():  给子类的模板方法，执行刷新。  

14. registerListeners ： 添加了事件监听器，并且广播earlyApplicationEvents的事件，并且把earlyApplicationEvents置null

15. finishBeanFactoryInitialization
    - 如果单例池中有conversionService的类,就设置beanFactory.setConversionService，用于代替上面的setAutowireCandidateResolver
    - 如果没有StringValueResolver，则设置默认的基于环境变量的占位符解析器。 ${xxx} => a
    - 先所有初始化单例的LoadTimeWeaverAware
    - 冻结BeanDefinitionNames的内容，也就是说BeanDefinitions已经不再添加和删除了。里面的内容可以更改。
    - 实例化非懒加载的单例Bean
    
16. finishRefresh
    - clearResourceCaches ;  清除已经没有用的ASM metadata 
    - initLifecycleProcessor:   设置lifecycleProcessor单例，默认为DefaultLifecycleProcessor
    - getLifecycleProcessor().onRefresh();   调用所有的Lifecycle的Bean的start()
    - publishEvent(event) ;  广播完成事件.
    
17. resetCommonCaches ： 反射、classLoader、type 等等缓存清理。

 



# AOP

spring中的aop都继承AbstractAutoProxyCreator implements SmartInstantiationAwareBeanPostProcessor, BeanFactoryAware

实现了getEarlyBeanReference、postProcessBeforeInstantiation、postProcessAfterInitialization.扩展点。

利用模板模式，实现了。1. 他把循环依赖和初始化后，利用保证同一代理对象。 2. 他定义了允许初始化前自定义的代理对象逻辑。

并且定义了getAdvicesAndAdvisorsForBean方法获得所有的Interceptors，供子类实现。

主要方法wrapIfNecessary :

从缓存中有的，已经判断过了的、正在创建的Bean的，和子类getAdvicesAndAdvisorsForBean方法为null的，都直接返回bean。

把bean包装成TargetSource，同时把返回的Interceptors适配成Advisor，在创建ProxyFactory并且getProxy();

## @EnableAspectJAutoProxy

注册一个AnnotationAwareAspectJAutoProxyCreator的BeanDefinition，并且设置对应的属性。

他继承了AnnotationAwareAspectJAutoProxyCreator   ->> AspectJAwareAdvisorAutoProxyCreator ->> AbstractAdvisorAutoProxyCreator ->> AbstractAutoProxyCreator 

所以这里主要看他们实现的getAdvicesAndAdvisorsForBean方法中调用的findCandidateAdvisors:  

1. 他调用super.findAdvisorBeans(); 获得所有实现Advisor接口的bean.
2. 再从所有切面中解析得到所有Advisor对象。
   - 遍历所有的bean，判断类上有@Aspect 并且 名字开头不能为 ajc$
   - 利用BeanFactoryAspectInstanceFactory来解析Aspect类
   - 遍历一个类上没有@Pointcut的方法，再判断是否有@Pointcut, @Around@Before@ After@AfterReturning@AfterThrowing注解；并且生成AspectJExpressionPointcut；
   - aspectJAdvisorFactory.getAdvice 构建Advice，生成对应的@Around@Before@After
   - 把上面的构建为Advisor，对应类为InstantiationModelAwarePointcutAdvisorImpl  implements  PointcutAdvisor。
3. 筛选满足条件的Advisor集合
4. 再进行排序.
5. 适配，createProxy，

## [equals，hashCode，getClass方法会代理吗?](https://blog.csdn.net/qq_36874177/article/details/78504849)

> 如果是jdk的代理的话他只能代理接口的内容，Object的final方法是不会代理的（notify、notifyAll、wait、getClass），接口不能定义这些方法，会报错的。
>
> cglib是基于继承的，所以Object的final方法也不会代理。
>
> 但是再Proxy代码里面会判断equals，hashCode方法。

## ProxyFactory的运用

getProxy 运行过程:

1.  构建 adviseds ，创建确定是jdk还是cglib的AopProxy代理
2. getProxy 执行 :  不管是jdk还是cglib都是对应的流程。
3. 设置classLoad，设置接口或者父类，生成callback中的invoke内容。
4. 在invoke或者callFiltert中判断，equals、hashCode不会被代理。
5. 再执行TargetSource.getTarget() 获得原始对象。
6. 通过DefaultAdvisorChainFactory，处理PointcutAdvisor、IntroductionAdvisor、Advisor 将他们适配成MethodInterceptor集合链路，并且缓存起来。
7. 把上面获得的内容，构造MethodInvocation对象，执行proceed()方法。
8. proceed内部执行，链路形式执行MethodInterceptor.invoke(MethodInvocation);方法。
9. 在我们编写的MethodInterceptor中执行MethodInvocation.proceed方法，将会链路递归执行，到最后一个。
10. MethodInvocation和MethodInterceptor互相调用就是责任链的经典实现。

## TargetSource的使用

@Lazy 就是用的ProxyFactory中生成代理对象，再TargetSource的getTarget中才去spring.getBean。

## 常见问题:

1. 代码中事务失效的情况：

   > 类没有被Spring管理、方法不是 public的 -- 该异常一般情况都会被编译器识别、方法是final的、自身this调用、异常被捕获、抛出异常类型不对、传播类型不支持事务、数据库本身不支持事务。

2. 为啥自身this调用事务方法，传播机制失效。  

   > spring基于cglib的代理实现，cglib的代理是基于父子类，内部把被代理对象放到target属性中，执行业务方法时，其实是taget.xxx();  再方法中 this.***(); 其实还是target再执行，而不是代理对象在执行。所以失效。 解决办法是注入自己类，这里会触发循环依赖机制。



# 事务

@EnableTransactionManagement ， 注册AutoProxyRegistrar，ProxyTransactionManagementConfiguration。

AutoProxyRegistrar ： 注册"org.springframework.aop.config.internalAutoProxyCreator"的bean，也就是上面AOP中AbstractAutoProxyCreator的子类，相当于开启了AOP.

AbstractTransactionManagementConfiguration : 注册几个bean： TransactionalEventListenerFactory、TransactionInterceptor、AnnotationTransactionAttributeSource、BeanFactoryTransactionAttributeSourceAdvisor。

BeanFactoryTransactionAttributeSourceAdvisor > 依赖TransactionAttributeSource.getTransactionAttribute（用来解析@Transactional注解）生成pointcut ，同时依赖 TransactionInterceptor 生成MethodInterceptor

TransactionalEventListenerFactory  :  和TransactionSynchronizationManager 事务回调注册接口类似。 实现Spring事务同步和监听。

## 核心类

AnnotationTransactionAttributeSource ： 方法映射关系： pointcut.matches(class)   -> isCandidateClass(class);  pointcut.matches(method,class)   -> getTransactionAttribute(method, targetClass) ，该方法还将初始化TransactionAttribute的内容 。 

他里面运用了组合模式，委托给Set<TransactionAnnotationParser> 去处理。  SpringTransactionAnnotationParser（必有），javax.transaction.Transactional，javax.ejb.TransactionAttribute。 他们3个分别去查找。
重点看： SpringTransactionAnnotationParser的处理，就能找到@Transactional注解的判断和处理了。 

TransactionAttribute 对应的实现是 RuleBasedTransactionAttribute



------

TransactionAspectSupport.invokeWithinTransaction : 方法核心。 

~~下面还是看流程图吧。~~

0. 获得TransactionAttribute和获得对应的TransactionManager

1. createTransactionIfNecessary(ptm, txAttr, joinpointIdentification)  创建必要的事务
   - tm.getTransaction(txAttr) 获得status，他里面会创建事务，并且处理事务的传播机制.
2. invocation.proceedWithInvocation()  执行业务方法
3. completeTransactionAfterThrowing(txInfo, ex) 回滚事务并且关闭连接
4. commitTransactionAfterReturning(txInfo) 提交事务并且关闭连接

------

TransactionAttribute

> 事务属性: 就是@Transactional中的一些配置。

TransactionSynchronizationManager 

>  事务相关的ThreadLocal统一管理的一些api，比如resources（map<obj,obj> 一般为key为DataSource对象，value为ConnectionHolder对象）、synchronizations、currentTransactionName、currentTransactionReadOnly、currentTransactionIsolationLevel、actualTransactionActive
>
> 第三方整合事务也经常用到这个，但是不是直接用它，而是用spring提供的DataSourceUtils.getConnection();
> 可以见mybatis-spring的事务整合。

TransactionAspectSupport 

>  他管理 ThreaLocal<TransactionInfo> ，并且控制代理对象的主流程。
>
> TransactionInfo : TransactionInfo 主要是持有事务的状态，以及上一个TransactionInfo 的一个引用，并与当前线程进行绑定。内部拥有**TransactionStatus**
>
> TransactionStatus： 主要描述当前事务的状态，比如：是否有事务，是否是新事物，事务是否只读；回滚点相关操作等等。这些相关的属性在后面会影响事务的提交。

AbstractPlatformTransactionManager

>  为TransactionManager接口的实现，主要用于控制开启事务，提交事务，回滚事务，执行扩展点的主流程。



## 事务的高级用法: 

1. 事务传播机制 ： @Transactional(propagation = Propagation.REQUIRES_NEW)
2. 强制回滚 ：TransactionAspectSupport.currentTransactionStatus().setRollbackOnly() 
3. [事务同步](https://blog.csdn.net/f641385712/article/details/91897175)： TransactionSynchronizationManager.registerSynchronization、@TransactionEventListener



# 自己的疑惑

1. @EnableAspectJAutoProxy @EnableTransactionManagement 都是导入org.springframework.aop.config.internalAutoProxyCreator的Bean对象，最终是谁呢??

   最终是EnableAspectJAutoProxy 的是直接selectImports的，他会直接导入AutoProxyRegistrar并且递归解析。它实现了registerBeanDefinitions放到list的前面，所以他的AopConfigUtils.registerAutoProxyCreatorIfNecessary也是先执行。
   
   再解析EnableAspectJAutoProxy，时候他已经放到后面了，这时候就是以他的AopConfigUtils.registerAutoProxyCreatorIfNecessary修改BeanDefinition的BeanClass了。
   
2. [spring中autowired注入自己的代理后，最后容器中的对象是原对象还是代理对象。](https://blog.csdn.net/qq_39002724/article/details/113609903)  还是代理对象，执行的时候是cglib的tagert委托对象，所以会有aop失效的情况。

3. LifecycleProcessor 的用法和应用场景   >  再spring容器启动后执行一些代码。

   



# 注解原理

1. @Lazy 注解原理  在哪生成代理.  

> 1. 再属性填充(依赖注入中) 他是生成的代理对象的标识，具体的再BeanPostProcessor.postProcessProperties 里面生成对应的对应的InjectedElement的子类.
> 2. 再BeanDefinition中，他是判断是否初始化BeanFaction中生成对应的bean

2. @Replace  注解  在哪生成代理.  

3. @Configuration 注解在哪生成代理对象.

   > 再invokeBeanFactoryPostProcessors里面会判断是不是fult类，去生成动态代理。

4. [@LookUp 解决什么问题 (.) ，他是在哪实现的??](https://my.oschina.net/zudajun/blog/664659)

> 解决单例依赖多例的情况:
>
> determineCandidateConstructors => 往beanDefinition 添加 LookupOverride方法.
> 再执行推断构造方法里面生成对应的cglib的代理对象。 

5. [@EventListener实现方式](https://blog.csdn.net/it_lihongmin/article/details/102940643)

> EventListenerMethodProcessor 里面 postProcessBeanFactory里面获得所有的EventListenerFactory，之后再到afterSingletonsInstantiated加载所有单例完后，再遍历所有的bean，判断类上的方法是否有@EventListener，再遍历所有的EventListenerFactory调用supportsMethod(method)过滤，通过后EventListenerFactory.createApplicationListener生成代理对象。





# Spring 设计模式

| 简单工厂     | BeanFactory体现                                              |
| ------------ | ------------------------------------------------------------ |
| 工厂方法     | FactoryBean接口                                              |
| 单例模式     | Spring依赖注入Bean实例默认是单例的，getSingleton()方法       |
| 装饰器模式   | 一种是类名中含有Wrapper，另一种是类名中含有Decorator         |
| 代理模式     | AOP底层，@Configuration                                      |
| 观察者模式   | spring的事件驱动模型，listener的实现                         |
| 策略设计模式 | 资源访问Resource接口，不同的applicationContext的实现等等一些接口多实现类 |
| 模版方法模式 | Spring几乎所有的外接扩展都采用这种模式 ，抽象类，JdbcTempalte |
| 责任链模式   | CglibAopProxy#chain，Interceptor#invoke                      |



## 资源访问Resource接口

- - UrlResource：访问网络资源的实现类
  - ClassPathResource：访问类加载路径里资源的实现类
  - FileSystemResource：访问文件系统里资源的实现类
  - ServletContextResource：访问相对于 ServletContext 路径里的资源的实现类
  - InputStreamResource：访问输入流资源的实现类
  - ByteArrayResource：访问字节数组资源的实现类





# Spring核心API

## BeanFactory

- getBean
- containsBean
- isSingleton/Prototype
- isMatch

## BeanDefinition

用来描述Bean,里面存放Bean元数据，比如Bean类名、scope、属性、构造函数参数列表、依赖的bean、是否是单例类、是否是懒加载等一些列信息。

### 实现类

- ChildBeanDefinition

- RootBeanDefinition ， 代表一个xml,java Config来的BeanDefinition

- GenericBeanDefinition

- MergedBeanDefinition

- AnnotatedBeanDefinition

  > - 表示注解类型bean定义
  > - AnnotationMetadata，注解元信息
  > - MethodMetadata，方法元信息

## BeanDefinitionRegistry

- 有增，查，删BeanDefinition的能力。一次只能注册一个BeanDefinition.

### 实现类

- SimpleBeanDefinitionRegistry
- DefaultListableBeanFactory
- GenericApplicationContext





# 问题

- 描述下BeanFactory。
- BeanFactory和ApplicationContext的区别？
- 简述SpringIoC的加载过程。
- Spring中有哪些扩展接口及调用时机。
- 怎么解决循环依赖



# 扩展点

## BeanFactoryPostProcessor

### BeanDefinitionRegistryPostProcessor

## BeanPostProcessor

### InstantiationAwareBeanPostProcessor

### AbstractAutoProxyCreator

## @Import  

### ImportBeanDefinitionRegistrar

- FeignClientsRegistrar

## Aware

## InitializingBean

## FactoryBean

- FeignClientFactorybean
- MapperFactoryBean 
- NacosDataSourceFactoryBean

## SmartInitializingSingleton

- LoadBalancerAutoConfiguration

## ApplicationListener

- NacosAutoServiceRegistration#onApplicationEvent

## Lifecycle

### [SmartLifecycle](https://www.jianshu.com/p/7b8f2a97c8f5)

在Spring加载和初始化所有bean后，接着执行一些任务或者启动需要的异步服务，这样我们可以使用 SmartLifecycle 来做到

- NacosWatch#start
- EurekaServerInitializerConfiguration

### LifecycleProcessor

## HandlerInterceptor

- SentinelDataSourceHandler

## MethodInterceptor

- seata中的GlobalTransactionalInterceptor
- AOP
- TransactionInterceptor





# 参考资料

[Spring事件驱动模型](https://www.cnblogs.com/gcdd1993/p/12292214.html)

