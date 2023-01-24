---
title: 分布式Seata原理源码
date: 2022-07-04 09:31:51
permalink: /pages/fbf942/
categories:
  - java
  - 微服务
  - alibaba
  - 分布式事务
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 大致原理
GlobalTransactionScanner 扫描@GlobalTransaction并生成代理对象用于begin、commit、roback。

# 参考资料
- [Fescar源码阅读-全自动的分布式事务AT](https://www.jianshu.com/p/049ba9c3e229)
> 分布式事务的生命周期是交给TC来协调管理的。
> TC通过Xid管理全局事务以及全局事务下包含的所有branch分支事务。
> 每个分支事务，就直接提交本地事务，最后向TC报告。
- [Fescar源码阅读-神奇的UndoLog(一)](https://www.jianshu.com/p/74cc4619c674)
> 通过DataSourceProxy代理数据库连接，做插入undoLog表的业务操作。
> undolog就是Fescar可以打破二段提交的机制，允许本地事务在第一阶段就提交的基础，也是Fescar自信拥有高性能和高吞吐量的底气所在。
> 这也代表隔离性是不被保障的。

