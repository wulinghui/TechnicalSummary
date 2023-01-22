---
title: spring-cloud-kubernetes
date: 2022-07-08 17:30:06
permalink: /pages/6d3863/
categories:
  - Kubernetes
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
[Kubernetes 开发 SpringCloud (一)、使用SpringCloud Kubernetes组件进行服务发现](https://blog.csdn.net/qq_32641153/article/details/97750791)
> 在 Kubernetes 中实现注册中心、服务发现、服务名称解析功能。
> 在 Kubernetes 中读取 ConfigMaps 和 Secrets 的配置，当 ConfigMap 或 Secret 更改时重新加载应用程序属性。
> 在 Kubernetes 可去掉 Kubernetes 自带的服务负载均衡，实现与 Ribbon 结合,通过 Ribbon 完成负载均衡。
> Feign的熔断，可以设置。  网关、限流、降级都是istio去操作的。   链路追踪，分布式事务都是java体系业务去实现的。
> 因为 SpringCloud Kubernetes 组件依赖于 Fabric8 Kubernetes Java 客户端，可以通过使用 http 协议与 Kubernetes API 进行通信，通过控制 API 来完成一些列操作; 

[《spring-cloud-kubernetes的服务发现和轮询实战(含熔断)》](https://xinchen.blog.csdn.net/article/details/91351411)

[spring cloud项目改造为spring-cloud-kubernetes项目](https://puhaiyang.blog.csdn.net/article/details/107181685)


微服务的组件使用总结
 注册中心、配置中心、服务发现  k8s自带了。
 负载均衡 ，该项目里面实现了，可以自定义负载均衡。
 RPC调用、服务熔断都是spring-cloud封装好了的。
 服务网关、限流、降级都是istio去操作的
 链路追踪、分布式事务都是开源框架去做的。
 SpringCloud Kubernetes 作用就是通过它获取 Kubernetes 下的服务列表进行服务发现。之后里面robbion做自定义的负载均衡。
