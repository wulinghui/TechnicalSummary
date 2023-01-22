---
title: Gateway使用
date: 2022-02-20 20:57:50
permalink: /pages/ab431e/
categories:
  - java
  - 微服务
  - alibaba
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 简介

网关作为流量的入口，常用的功能包括路由转发，权限校验，限流等。
Spring Cloud Gateway 是Spring Cloud官方推出的第二代网关框架，定位于取代 Netflix Zuul。相比 Zuul 来说，Spring Cloud Gateway 提供更优秀的性能，更强大的有功能。
Spring Cloud Gateway 是由 WebFlux + Netty + Reactor 实现的响应式的 API 网关。**它不能在传统的 servlet 容器中工作，也不能构建成 war 包。**
Spring Cloud Gateway 旨在为微服务架构提供一种简单且有效的 API 路由的管理方式，并基于 Filter 的方式提供网关的基本功能，例如说安全认证、监控、限流等等。



# 核心概念

## 路由（route) 

路由是网关中最基础的部分，路由信息包括一个ID、一个目的URI、一组断言工厂、一组Filter组成。如果断言为真，则说明请求的URL和配置的路由匹配。

## 断言(predicates) 

Java8中的断言函数，SpringCloud Gateway中的断言函数类型是Spring5.0框架中的ServerWebExchange。断言函数允许开发者去定义匹配Http request中的任何信息，比如请求头和参数等。

## 过滤器（Filter) 

分为Gateway FilIer和Global Filter。Filter可以对请求和响应进行处理。



# 工作原理

跟 Zuul 的差不多，最大的区别就是 Gateway 的 Filter 只有 pre 和 post 两种。

![](https://img-blog.csdnimg.cn/20190703211815129.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3RocXR6cQ==,size_16,color_FFFFFF,t_70)

客户端向 Spring Cloud Gateway 发出请求，如果请求与网关程序定义的路由匹配，则该请求就会被发送到网关 Web 处理程序，此时处理程序运行特定的请求过滤器链。
过滤器之间用虚线分开的原因是过滤器可能会在发送代理请求的前后执行逻辑。所有 pre 过滤器逻辑先执行，然后执行代理请求；代理请求完成后，执行 post 过滤器逻辑。



# 环境搭建

-  引入依赖
- 编写yml配置文件



# 路由断言工厂

是否允许往下调用，否则报404

Spring Cloud Gateway将路由匹配作为Spring WebFlux HandlerMapping基础设施的一部分。Spring Cloud Gateway包含许多内置的路由谓词工厂。所有这些谓词都匹配HTTP请求的不同属性。可以将多个路由谓词工厂与逻辑and语句结合起来。

## 时间匹配

用在限时抢购的一些场景中

## Cookie匹配

## Header匹配

## 路径匹配

## 自定义路由断言工厂

- 继承 AbstractRoutePredicateFactory 类，并交给spring管理
- **注意: 命名需要以 RoutePredicateFactory 结尾，比如CheckAuthRoutePredicateFactory，这是个坑哟..**
- 在yml使用就是类名前面的**CheckAuth**



# 过滤器工厂

内置了很多的过滤器工厂，我们通过一些过滤器工厂可以进行一些业务逻辑处理器，比如添加剔除响应头，添加去除参数等

## 添加请求头

## 添加请求参数

## 为匹配的路由统一添加前缀

## 重定向操作

## 自定义过滤器工厂

- 继承AbstractNameValueGatewayFilterFactory
- 名称必须要以GatewayFilterFactory结尾并交给spring管理,比如:CheckAuthGatewayFilterFactory
- 在yml使用就是类名前面的**CheckAuth**

# 全局过滤器

GlobalFilter 接口和 GatewayFilter 有一样的接口定义，只不过， GlobalFilter 会作用于所有路由。

**官方声明：**GlobalFilter的接口定义以及用法在未来的版本可能会发生变化。最好不用使用.

## LoadBalancerClientFilter

整合负载均衡器Ribbon

如果该值的scheme是 lb，比如：lb://myservice ，它将会使用Spring Cloud的LoadBalancerClient 来将 myservice 解析成实际的host和port，并替换掉 ServerWebExchangeUtils.GATEWAY_REQUEST_URL_ATTR 的内容。

## 自定义全局过滤器

- 实现GlobalFilter ，并交给spring管理.

# 跨域配置CORS Configuration

#255的bug.

```java
	@Bean
    public CorsWebFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedMethod("*");
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource(new PathPatternParser());
        source.registerCorsConfiguration("/**", config);

        return new CorsWebFilter(source);
    }
```





# gateway整合sentinel限流

- 引入sentinel-spring-cloud-gateway-adapter
- yml配置
- 构造SentinelGatewayFilter
- 配置加载网关规则



# 网关高可用

为了保证 Gateway 的高可用性，可以同时启动多个 Gateway 实例进行负载，在 Gateway 的上游使用 Nginx 或者 F5 进行负载转发以达到高可用。

# 参考资料

[Spring Cloud Gateway的工作原理](https://blog.csdn.net/thqtzq/article/details/94590287)

[官网文档](https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html)

