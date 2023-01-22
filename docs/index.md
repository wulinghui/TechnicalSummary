---
home: true
# heroImage: /img/web.png
heroText: 资料总结
tagline: 本人技术宅,该内容涉及我学习前端、运维、后端、云原生等等成长过程等各方面的记录。
# actionText: 立刻进入 →
# actionLink: /web/
# bannerBg: auto # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
# postList: detailed
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
# hideRightBar: true # 是否隐藏右侧边栏
---


# 前言

1. 一开始写博客的，但是博客现在要审核，我还出现过一篇博客被删找不到了的现象，无语。同时也出现过一次把公司ip放到网上的事故，导致不再使用博客。
2. 后来转到了笔记工具软件，可惜我被封号了。 重要的是数据还不然导出，有点无语200多篇的笔记迁移不了，之后看了其他的笔记工具，都不支持全量导出成md，总结就是**线上是方便，但还是本地靠谱**。
3. 现在就采用本地工具去做了，但是第一个问题杂乱无章的文件不好找，所以就是想要目录大纲可支持编排的， 笔记工具这点都做的不错。
4. 之后又想到用文件夹 加 文件名排序，如0- 1- 2- 但是这样排序编排起来可费劲了，网上的脚本也都不好使。
5. 所以才有了这个大纲用来定位文件名，typora支持相对连接，不知道码云和github是啥样。
6. 该仓库内容是 [typora](https://typora.io/) 、[draw](https://app.diagrams.net/)、[Freeplane](https://www.freeplane.org/wiki/index.php/Home) 软件做的。如果有兼容问题，请下载后用相关软件打开。（尽可能的不会使用思维导图，因为思维导图里面写一些详细描述就不好写了，同时它也就是一个大纲类似于md的目录，所以没有必要）
7. 这里目前总的目录结构，涉及我学习等各方面的记录，也算个人的日记吧。但是不会分享啥私生活的事，不喜欢的内容就跳过吧。
8. 有些日志可能会缺东西，主要是公司的踩坑记录都在另外一个文件里面不会放到网上，就算到网上的资料也是感悟和参考资料连接，不会再直接截图，复制了，基本都是再一遍手打，确保公司要求保密的职业素养和符合保密法要求。
9. 开源只是想有同行一起指点，更正我的错误认知。
10. 重点说明一下，目录不会及时更新，除非我觉得乱了、需要加强记忆、会重复使用的，才会整理一下。 大部分内容还是在目录下面，如果需要实时的还是用个文件夹工具查看吧。

# Java
- [JVM](编程语言/java/jvm/JVM.md)
## 并发
- [计算机基础](编程语言/java/java-se/计算机基础.md)
- [并发编程](编程语言/java/java-se/并发编程.md)
- [java线程](编程语言/java/java-se/java线程.md)
- [java协程](编程语言/java/java-se/java协程.md)
- [synchronized](编程语言/java/java-se/synchronized.md)
- [Unsafe&Atomic](编程语言/java/java-se/Unsafe&Atomic.md)
- [java并发集合](编程语言/java/java-se/java集合.md)
- [AQS](编程语言/java/java-se/AQS.md)
- [Lock](编程语言/java/java-se/Lock.md)
- [JUC工具杂记](编程语言/java/java-se/JUC工具杂记.md)
- [Queue](编程语言/java/java-se/Queue.md)
- [线程池原理](编程语言/java/java-se/线程池原理.md)
- [Future](编程语言/java/java-se/Future.md)
- [ForkJoin](编程语言/java/java-se/ForkJoin.md)

## 网络
- [BIO，NIO，AIO](编程语言/java/java-se/BIO，NIO，AIO.md)
- [BIO，NIO，AIO](编程语言/java/java-se/BIO，NIO，AIO.md)



## 框架
- [flowable](编程语言/java/flowable)
- [爬虫 webmagic](编程语言/java/爬虫 webmagic)
### [Mybatis](编程语言/java/mybatis)
- [mybatis](编程语言/java/mybatis/mybatis.md)
- [Mybatis-Spring](编程语言/java/mybatis/Mybatis-Spring.md)
- [mybatis源码流程图](编程语言/java/mybatis/mybatis源码.png)
### [spring](编程语言/java/spring)
- [spring源码分析](编程语言/java/spring/spring源码分析.md)
- [spring-mvc](编程语言/java/spring/spring-mvc.md)
- [SpringBoot源码分析之条件注解](编程语言/java/spring/SpringBoot源码分析之条件注解.md)
- [SpringBoot源码分析](编程语言/java/spring/SpringBoot源码分析.md)
- [SpringBoot项目部署之外挂配置文件Deploy方式](编程语言/java/spring/SpringBoot项目部署之外挂配置文件Deploy方式.md)

- [spring事务源码流程图](编程语言/java/spring/spring事务.png)
- [spring源码流程图](编程语言/java/spring/spring流程图.png)
- [spring-mvc源码流程图](编程语言/java/spring/spring-mvc.png)
- [spring-boo源码t流程图](编程语言/java/spring/spring-boot.png)


## [微服务](编程语言/java/微服务)
- [Nacos使用](编程语言/java/微服务/alibaba/Nacos使用.md)
- [Feign](编程语言/java/微服务/Netflix/Feign.md)
- [Ribbon](编程语言/java/微服务/Netflix/Ribbon.md)
- [Sentinel使用](编程语言/java/微服务/alibaba/Sentinel使用.md)
- [Gateway使用](编程语言/java/微服务/alibaba/Gateway使用.md)
- [skywalking使用](编程语言/java/微服务/alibaba/skywalking使用.md)


- [Ribbon源码t流程图](编程语言/java/微服务/Netflix/Ribbon源码.png)
- [Feign源码t流程图](编程语言/java/微服务/Netflix/Feign源码.png)

## 中间件
### [redis](编程语言/java/中间件/redis)
- [redis](编程语言/java/中间件/redis/redis.md)
- [数据类型的应用场景](编程语言/java/中间件/redis/数据类型的应用场景.md)
- [持久化](编程语言/java/中间件/redis/持久化.md)
- [高可用架构](编程语言/java/中间件/redis/高可用架构.md)
- [场景问题](编程语言/java/中间件/redis/场景问题.md)
- [设计和使用规范](编程语言/java/中间件/redis/设计和使用规范.md)

### MQ(消息队列)
- [MQ定义](编程语言/java/中间件/RabbitMQ/MQ定义.md)

#### [Kafka](编程语言/java/中间件/Kafka)
- [实战与基本原理](编程语言/java/中间件/Kafka/实战与基本原理.md)
- [设计原理](编程语言/java/中间件/Kafka/设计原理.md)
- [生产问题总结及性能优化](编程语言/java/中间件/Kafka/生产问题总结及性能优化.md)

####  [RabbitMQ](编程语言/java/中间件/RabbitMQ)
- [RabbitMQ入门](编程语言/java/中间件/RabbitMQ/RabbitMQ入门.md)

####  [RocketMQ](编程语言/java/中间件/RocketMQ)
- [RocketMQ快速实战](编程语言/java/中间件/RocketMQ/RocketMQ快速实战.md)
- [生产问题总结及性能优化](编程语言/java/中间件/RocketMQ/生产问题总结及性能优化.md)


## 工具
- [maven](编程语言/java/maven)



# 数据库
[InfluxDB](编程语言/数据库/InfluxDB.md)
## Mysql
- [mysql](编程语言/数据库/mysql/mysql.md)
- [事务](编程语言/数据库/mysql/事务.md)
- [锁机制](编程语言/数据库/mysql/锁机制.md)
- [索引](编程语言/数据库/mysql/索引.md)
- [Sql优化](编程语言/数据库/mysql/Sql优化.md)
- [MVCC](编程语言/数据库/mysql/MVCC.md)


# [设计模式](编程语言/设计模式详解)
- [设计模式总述](编程语言/设计模式详解/设计模式总述.md)
- [状态模式](编程语言/设计模式详解/状态模式.md)