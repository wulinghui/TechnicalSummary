---
title: Ribbon
date: 2022-01-21 16:22:20
permalink: /pages/d3f27a/
categories:
  - java
  - 微服务
  - Netflix
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---




# spring-cloud规范接口

- LoadBalancerClient : 负载均衡客户端，RibbonLoadBalancerClient是对LoadBalancerClient的实现，exec方法包含了负载均衡的功能，Ribbon做负载均衡时用的就是它
- LoadBalancerRequestFactory : LoadBalancerRequest 负载均衡请求工厂，用来创建LoadBalancerRequest
- LoadBalancerRequest :  执行请求方法内容. 
- ClientHttpRequestInterceptor : RestTmplate拦截器的扩展点...

# 高级功能

[Ribbon配置静态服务](https://www.jianshu.com/p/86db30153347)

hystrix熔断器整合

[如何设置饥饿加载，启动就加载]()

> ribbon.eager-load.enabled=true

[自定义Ribbon客户端](https://blog.csdn.net/wrongyao/article/details/105476027)

> 针对某个服务定义局部的配置，不是全局配置。
>
> 支持ILoadBalancer、IRule、IPing、ServerList、ServerListFilter

[直接使用Ribbon API](https://blog.csdn.net/qq_40386113/article/details/120709181)

> 看扩展点的接口，bean就行了。

[超时重试配置，源码指点](https://juejin.cn/post/6934153260966084615#heading-6)

> 说明 Ribbon 默认情况下就不支持超时重试，需要配置启用 RestClient。
>
> 他是通过扩展RestTemplate的ClientHttpRequestFactory接口 -> RibbonClientHttpRequestFactory 去实现的。
>
> 这里面才走ribbon的RetryHandler接口去执行。

[ribbon 超时配置](https://www.cnblogs.com/draymond/p/12727778.html)

> #自定义ribbon的超时时间
> ribbon:
>   ReadTimeout:  5000      　　　　 #处理请求的超时时间，默认为5秒
>   ConnectTimeout: 5000    　　　　 #连接建立的超时时长，默认5秒
>   MaxAutoRetries: 1               #同一台实例的最大重试次数，但是不包括首次调用，默认为1次
>   MaxAutoRetriesNextServer: 0     #重试负载均衡其他实例的最大重试次数，不包括首次调用，默认为0次
>   OkToRetryOnAllOperations: false #/是否对所有操作都重试，默认false

# 扩展点接口



- IClientConfig ：Ribbon的客户端配置，默认采用DefaultClientConfigImpl实现。

- IRule：Ribbon的负载均衡策略，默认采用ZoneAvoidanceRule实现，该策略能够在多区域环境下选出
  最佳区域的实例进行访问。

- IPing：Ribbon的实例检查策略，默认采用DummyPing实现，该检查策略是一个特殊的实现，实际上
  它并不会检查实例是否可用，而是始终返回true，默认认为所有服务实例都是可用的。

- ServerList：服务实例清单的维护机制，默认采用ConfigurationBasedServerList实现。  NacosServerList的扩展整合

- ServerListUpdater : 动态更新服务提供方的节点信息，用默认就行了，里面会操作ServerList接口

- ServerListFilter：服务实例清单过滤机制，默认采ZonePreferenceServerListFilter，该策略能够优先
  过滤出与请求方处于同区域的服务实例。

- ILoadBalancer：真正的负载均衡器，默认采用ZoneAwareLoadBalancer实现，它具备了区域感知的能力。

- RetryHandler: 重试策略，默认的只有简单的异常处理，真正生产环境使用都需要根据业务场景自定义重试策略

  



# 源码解析

[[Ribbon 源码一：Ribbon概念理解及Demo调试](https://www.cnblogs.com/wang-meng/p/12151486.html)](https://www.cnblogs.com/wang-meng/p/12151486.html)

[Ribbon 源码二：通过Debug找出Ribbon初始化流程及ILoadBalancer原理分析](https://www.cnblogs.com/wang-meng/p/12154955.html)

> 他的源码里面运用了大量了CAS无锁修改状态，copyAndWrite的并发内容。

Ribbon重试策略RetryHandler的配置与源码分析

> https://cloud.tencent.com/developer/article/1658791 重试的使用代码
>
> https://juejin.cn/post/6934153260966084615#heading-6  配置类中生效的代码.

## Ribbon模块

| ribbonloadbalancer | 负载均衡模块，可独立使用，也可以和别的模块一起使用           |
| ------------------ | ------------------------------------------------------------ |
| Ribbon             | 内置的负载均衡算法都实现在其中                               |
| ribbon-eureka      | 基于 Eureka 封装的模块，能够快速、方便地集成 Eureka          |
| ribbon-transport   | 基于 Netty 实现多协议的支持，比如 HTTP、Tcp、Udp 等          |
| ribbon-httpclient  | 基于 Apache HttpClient 封装的 REST 客户端，集成了负载均衡模块，可以直接在项目中使 用来调用接口 |
| ribbon-example     | Ribbon 使用代码示例，通过这些示例能够让你的学习事半功倍。    |
| ribbon-core        | 一些比较核心且具有通用性的代码，客户端 API 的一些配置和其他 API 的定义。 |



# 运用到的设计模式

| 委托模式           | PredicateBasedRule：委托给Predicate接口处理                  |
| ------------------ | ------------------------------------------------------------ |
| 模板模式和回调模式 | BaseLoadBalancer、AbstractLoadBalancerRule 、AbstractServerPredicate |
| 门面模式           | ILoadBalancer#chooseServer                                   |
| 组合模式           | CompositePredicate                                           |
| 工厂模式           | SpringClientFactory                                          |
| 包装模式           | LoadBalancerRequest                                          |
| 职责链模式         | DynamicServerListLoadBalancer                                |







# 自己的疑惑

- SpringClientFactory 是不是 父子容器的概念???  不是的,

  > 官方解释是: 用来给Ribbon客户端创建上下文和配置，它为每个客户机名称创建一个Spring ApplicationContext，并创建好RibbonClient客户端相关的bean和配置。
  >
  > 他主要的作用在于 实现自定义多个Ribbon客户端，不同的规则。
  
- 重试是通过RibbonHttpRequest，而默认情况是ServiceRequestWrapper包装。 为啥他们不再一起处理呢??

  > ServiceRequestWrapper，只是包装了一下getURI方法，还会有其他的RestTemplate拦截器。
  > RibbonHttpRequest  ，他是重写了executeInternal 方法， 其他的RestTemplate拦截器，不会再生效了。

# 参考资料

[spring-cloud官网资料](https://docs.spring.io/spring-cloud-netflix/docs/2.2.10.RELEASE/reference/html/#spring-cloud-ribbon)

> spring-cloud-netflix 中的 2.2.10 版本资料第7章。

[十四.SpringCloud源码剖析-Ribbon的初始化配置](https://blog.csdn.net/u014494148/article/details/108915053)

[怎么能使用注册中心服务发现的同时自己加载本地静态ribbon啊？](http://errornoerror.com/question/10963005242934470055/)

> nacos 整合的情况下，他就没有做这个功能，这里需要自己定义了。
> 或者url>name规则，简单的用，来代替
> `@FeignClient(name = "nmg", url = "${store.ribbon.listOfServers:}", configuration = FeignCustomizedConfiguration.class)`

