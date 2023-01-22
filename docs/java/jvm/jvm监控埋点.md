---
title: jvm监控埋点
date: 2021-12-09 17:39:38
permalink: /pages/9ad292/
categories:
  - java
  - jvm
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---


# JVMTI

[JVMTI完全解读](https://blog.csdn.net/duqi_2009/article/details/94518203)

[如何使用jvmti](https://www.jianshu.com/p/e59c4eed44a2)

# jmx

[JMX详解详细介绍及使用](https://blog.csdn.net/update_java/article/details/79571237)

[java 监控之JMX规范1](https://blog.csdn.net/xiaoliuliu2050/article/details/102823623)

# JFR

[JDK14的新特性:JFR,JMC和JFR事件流](https://zhuanlan.zhihu.com/p/139831837)

利用jmc  打开指定的 jfr 文件。

[深度探索JFR - JFR详细介绍与生产问题定位落地 - 1. JFR说明与启动配置](https://zhuanlan.zhihu.com/p/122247741)

[Java性能优化（二）——JFR（Java Flight Recorder）使用教程](https://juejin.cn/post/6959405798556434440)

# JMC

[java应用性能优化——使用JMC（Java Mission Control）分析性能](https://blog.csdn.net/yunfeng482/article/details/89384912)





# [Spring Boot Actuator](https://www.jdon.com/springboot/actuator.html)

> 通过 JMX 和HTTP 公开暴露给外界访问，大多数时候我们使用基于HTTP的Actuator端点，因为它们很容易通过浏览器、CURL命令、shell脚本等方式访问。
>
> 还有控制方法。



# 参考资料



[jvm监控系统是通过jmx做的么？](https://www.zhihu.com/question/422632973)

> Arthas是用JVMTI接口；
>
> jmx使用jvisualvm，还会涉及rpc和网络消耗，以及JVM忙时，无法采集到信息从而有指标断点。
>
> 推荐使用JVM内部采集 JFR，这样即使在JVM很忙时

