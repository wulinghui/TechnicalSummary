---
title: Nacos使用
date: 2022-02-20 18:16:06
permalink: /pages/c62f5a/
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

Nacos 致力于帮助您发现、配置和管理微服务。Nacos 提供了一组简单易用的特性集，帮助您快速实现动态服务发现、服务配置、服务元数据及流量管理。

- 服务发现和服务健康监测
- 动态配置服务
- 动态 DNS 服务
- 服务及其元数据管理



![img](Nacos.assets/15660)

# Nacos Server部署

## 单机模式

`bin/startup.sh -m standalone`

## 集群模式

## prometheus+grafana监控Nacos





# 注册中心

## 核心功能

### 服务注册

### 服务心跳

### 服务同步

### 服务发现

### 服务健康检查

## 服务注册表结构

namespace  -> group::serviceName -> clusterName -> instances

## [Nacos-discovery配置](https://github.com/alibaba/spring-cloud-alibaba/wiki/Nacos-discovery)





# 配置中心

Nacos 提供用于存储配置和其他元数据的 key/value 存储，为分布式系统中的外部化配置提供服务器端和客户端支持。使 用 Spring Cloud Alibaba Nacos Config，您可以在 Nacos Server 集中管理你 Spring Cloud 应用的外部属性配置。

## nacos-config服务

- 引入依赖
- 添加bootstrap.properties
- 启动服务

## Config相关配置

Nacos 数据模型 Key 由三元组唯一确定, Namespace默认是空串，公共命名空间（public），分组默认是
DEFAULT_GROUP

## 功能

### 支持配置的动态更新

### 支持profile粒度的配置

### 支持自定义 namespace 的配置

### 支持自定义 Group 的配置

### 支持自定义扩展的 Data Id 配置

### @RefreshScope

## 配置的优先级

1. 通过 spring.cloud.nacos.config.shared-configs 支持多个共享 Data Id 的配置  
2. 通过 spring.cloud.nacos.config.ext-config[n].data-id 的方式支持多个扩展 Data Id 的配置
3.  通过内部相关规则(应用名、应用名+ Profile )自动生成相关的 Data Id 配置

当三种方式共同使用时，他们的一个优先级关系是:C < B < A

优先级从高到低： 

1) nacos­config­product.yaml 精准配置 
2) nacos­config.yaml 同工程不同环境的通用配置 
3) ext­config: 不同工程 扩展配置
4) shared­dataids 不同工程通用配置: common2.yml > common1.yml

# 注意事项

- 和spring-boot 版本问题..

- 里面的一些配置好多是默认,要注意和原系统影响.

  > 比如他nacosLoadBlance 还是啥的..忘了...  

# 参考资料

[官网手册](https://nacos.io/zh-cn/docs/what-is-nacos.html)

[Nacos Open API](https://nacos.io/zh-cn/docs/open-api.html) 

