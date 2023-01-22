---
title: gateway使用
date: 2022-03-03 15:16:47
permalink: /pages/57aa08/
categories:
  - java
  - 微服务
  - spring
  - gateway
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---






# 参考资料

[SpringCloudGateway内存泄漏问题](https://blog.csdn.net/Day_Day_No_Bug/article/details/107382255)

> 两个redis的依赖，不一样。 移除了就好了。

[spring-cloud-gateway2.0 内存泄露问题排查](https://www.cnblogs.com/atliwen/p/14922388.html)

> - getaway 2.0 使用的是 netty 做为容器， 在引入 spring-boot-starter-web 组件的时候会引入 tomcat 容器。
> - tomcat 内对象也被创建了，在响应的时候，照成了netty 与 tomcat 类相关使用的问题。
> - 从内存快照中其实也可以看到的，当时并未特别注意。
> - 排除 spring-boot-starter-web 的 tomcat 相关依赖引用就ok了

