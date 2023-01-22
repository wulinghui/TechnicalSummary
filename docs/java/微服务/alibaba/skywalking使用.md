---
title: skywalking使用
date: 2022-02-20 21:53:42
permalink: /pages/269c0e/
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

skywalking是一个国产开源框架，2015年由吴晟开源 ， 2017年加入Apache孵化器。skywalking是分布式系统的应用程序性能监视工具，专为微服务、云原生架构和基于容器（Docker、K8s、Mesos）架构而设计。SkyWalking 是观察性分析平台和应用性能管理系统，提供分布式追踪、服务网格遥测分析、度量聚合和可视化一体化解决方案。

调用链分析工具，解决的问题：

1. 如何串联整个调用链路，快速定位问题？
2. 如何理清各个微服务之间的依赖关系？
3. 如何进行各个微服务接口的性能分折？
4. 如何跟踪整个业务流程的调用处理顺序？



性能和侵入性较小，就选他了。



# 功能特性

1、多种监控手段，可以通过语言探针和service mesh获得监控的数据；
2、支持多种语言自动探针，包括 Java，.NET Core 和 Node.JS；
3、轻量高效，无需大数据平台和大量的服务器资源；
4、模块化，UI、存储、集群管理都有多种机制可选；
5、支持告警；
6、优秀的可视化解决方案；

# 整体架构

## Agent

负责从应用中，收集链路信息，发送给 SkyWalking OAP 服务器；

## SkyWalking OAP 

负责接收Agent发送的Tracing数据信息，然后进行分析(Analysis Core)，存储到外部存储器(Storage)，最终提供查询(Query)功能；

## Storage

Tracing数据存储，目前支持ES、MySQL、Sharding Sphere、TiDB、H2多种存储器，目前采用较多的是ES，主要考虑是SkyWalking开发团队自己的生产环境采用ES为主；

## SkyWalking UI

负责提供控制台，查看链路等等

## 后端（Backend）

接受探针发送过来的数据，进行度量分析，调用链分析和存储。后端主要分为两部分：

- OAP: 进行度量分析和调用链分析的后端平台，并支持将数据存储到各种数据库中，如：ElasticSearch，MySQL，InfluxDB等。
- OAL: 用来进行度量分析的DSL，类似于SQL，用于查询度量分析结果和警报。

## 界面(UI)

- RocketBot UI – SkyWalking 7.0.0 的默认web UI
- CLI – 命令行界面

# 三种探针

## Agent

基于ByteBuddy字节码增强技术实现，通过jvm的agent参数加载，并在程序启动时拦截指定的方法来收集数据。无侵入性

## SDK 

程序中显式调用SkyWalking提供的SDK来收集数据，对应用有侵入

## Service Mesh

通过Service mesh的网络代理来收集数据



# 环境搭建部署

- skywalking agent和业务系统绑定在一起，负责收集各种监控数据
- Skywalking oapservice是负责处理监控数据的
- skywalking webapp 前端界面，用于展示数据。

## SkyWalking OAP 服务



## SkyWalking Agent

### 通过jar包方式接入

`java -jar **.jar -javaagent`

### 在IDEA中使用Skywalking

### 跨多个微服务跟踪

只需要每个微服务启动时添加javaagent参数就行了



# 概念

## **服务(Service)** 

表示对请求提供相同行为的一系列或一组工作负载，在使用Agent时，可以定义服务的名字

## 服务实例(Service Instance)

上述的一组工作负载中的每一个工作负载称为一个实例， 一个服务实例实际就是操作系统上的一个真实进程；

## 端点(Endpoint) 

对于特定服务所接收的请求路径, 如HTTP的URI路径和gRPC服务的类名 + 方法签名；





# 告警通知

skywalking发行版中提供了默认的alarm-setting.yml文件，包括一些规则，每个规则有英文注释，可以根据注释得知每个规则的作用

## 告警规则

它们定义了应该如何触发度量警报，应该考虑什么条件

## 网络钩子(Webhook)

当警告触发时，哪些服务终端需要被通知；

## gRPC钩子

远程gRPC方法的主机和端口，告警触发后调用



# 持久化跟踪数据

## 基于mysql持久化:

- 修改config目录下的application.yml，使用mysql作为持久化存储的仓库
- 修改mysql连接配置
- 添加mysql数据驱动包到oap-libs目录下
- 启动Skywalking

## 基于elasticsearch持久化

- 修改config/application.yml配置文件
- 修改elasticsearch7的连接配置
- 启动Skywalking服务





# 自定义链路追踪API

```xml
<dependency>
    <groupId>org.apache.skywalking</groupId>
    <artifactId>apm-toolkit-trace</artifactId>
    <version>8.4.0</version>
</dependency>
```

```java
@RequestMapping("/list")
public List<User> list(){

    //TraceContext可以绑定key-value
    TraceContext.putCorrelation("name", "1111111");
    Optional<String> op = TraceContext.getCorrelation("name");
    log.info("name = {} ", op.get());
    //获取跟踪的traceId
    String traceId = TraceContext.traceId();
    log.info("traceId = {} ", traceId);

    return userService.list();
}
```

@Trace

@Tags或@Tag:  为追踪链路增加其他额外的信息，比如记录参数和返回信息

# [集成日志框架](https://www.cnblogs.com/yizhipanghu/p/14896899.html)

# [集群部署](https://www.itmuch.com/skywalking/cluster/)

# 参考资料

官网：http://skywalking.apache.org/

中文文档： https://skyapm.github.io/document-cn-translation-of-skywalking/

