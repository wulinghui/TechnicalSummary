---
title: SpringBoot源码分析之条件注解
date: 2021-12-09 09:44:53
permalink: /pages/2e8911/
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

[SpringBoot源码系列](https://blog.csdn.net/lz710117239/category_9277290.html)



# 条件注解(Conditional Annotation)

- [SpringBoot源码分析之条件注解的底层实现](https://www.jianshu.com/p/c4df7be75d6e)

- [springboot源码解析(六)@ConditionalOnClass](https://blog.csdn.net/weixin_30515513/article/details/98018583)

  > 问: 1. Springboot的ConditionalOnClass注解，原因是我们的jar包里面可能没有对应的class，而使用ConditionalOnClass标注的Configuration类又import了这个类，那么如果想加载Configuration类，就会报ClassNotFoundException,那么又如何取到这个类上的注解呢。 2. 同时他又如何实现条件注解呢??  
  >
  > 答:    可以看OnClassCondition源码知道，他实现了2个重要接口: AutoConfigurationImportFilter 和Condition。
  >
  >  通过ASM技术可以获得AutoConfigurationMetadata，他就知道依赖的配置类的一些信息。如果没有的话，就会跳过这个配置类，不导入成配置类，往applicationContext里面放了，也就不会进行后面的扫描包的工作了。 
  > 如果上面条件满足:  在判断成为beanDefion的时候还会调用Condition判断，是否最终的实例化bean。
  > 他们这2步底层最终都调用了 classLoader.loadClass 用于确保。 





