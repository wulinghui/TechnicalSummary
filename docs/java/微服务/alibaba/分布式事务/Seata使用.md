---
title: Seata使用
date: 2022-03-29 15:23:42
permalink: /pages/e5a627/
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
Seata 将为用户提供了 AT、TCC、SAGA 和 XA 事务模式，AT模式是阿里首推的模式,阿里云上有商用版本的GTS（Global Transaction Service 全局事务服务）

# 原理

## 三大角色

TC (Transaction Coordinator) - 事务协调者 维护全局和分支事务的状态，驱动全局事务提交或回滚。 

TM (Transaction Manager) - 事务管理器 定义全局事务的范围：开始全局事务、提交或回滚全局事务。 

RM (Resource Manager) - 资源管理器 管理分支事务处理的资源，与TC交谈以注册分支事务和报告分支事务的状态，并驱动分支事务提交或回滚。 

其中，TC 为单独部署的 Server 服务端，TM 和 RM 为嵌入到应用中的 Client 客户端。



## 分布式事务的生命周期

1. TM 请求 TC 开启一个全局事务。TC会生成一个 XID 作为该全局事务的编号。XID，会在微服务的调用链路中传播，保证将多个微服务的子事务关联在一起。 
2. RM 请求 TC 将本地事务注册为全局事务的分支事务(branch ID)，通过全局事务的 XID 进行关联。
3. TM 请求 TC 告诉 XID 对应的全局事务是进行提交还是回滚。
4. TC 驱动 RM 们将 XID 对应的自己的本地事务进行提交还是回滚。

整体流程: 

前置镜像 -> 业务sql -> 后置镜像 -> 插入undo log -> 前置提交注册分支事务 -> 本地提交 ->  本地提交之后 -> 分支提交或者回滚。

## 设计思路

AT模式的核心是对业务无侵入，是一种改进后的两阶段提交。

第一阶段: 

业务数据和回滚日志记录在同一个本地事务中提交，释放本地锁和连接资源。核心在于利用代理数据源对业务sql进行解析，还会生成前置镜像和后置镜像，转换成undolog并同时入库。

第二阶段:

分布式事务操作成功，则TC通知RM异步删除undolog。

分布式事务操作失败，TM向TC发送回滚请求，RM收到协调器TC发来的回滚请求，通过 XID 和 Branch ID 找到相应的回滚日志记录，通过回滚记录生成反向的更新 SQL 并执行，以完成分支的回滚。



## 设计亮点

1. 应用层基于SQL解析实现了**自动补偿**，从而最大程度的降低业务侵入性；
2. 将分布式事务中TC（事务协调者）独立部署，负责事务的注册、回滚；
3. 通过全局锁实现了写隔离与读隔离。

## 存在的问题

- 性能损耗
- 性价比
- 回滚锁释放时间长 ： 需要先删除各节点的undo log，然后才能释放TC内存中的锁
- 死锁问题 ： 引入全局锁会额外增加死锁的风险 



# 支持模式

## AT

前提，必须的要求: 

- 基于支持本地 ACID 事务的关系型数据库。
- Java 应用，通过 JDBC 访问数据库。

## TCC

是指支持把 **自定义** 的分支事务纳入到全局事务的管理中。 能够实现不依赖于底层数据资源的事务支持。

但是需要业务硬编码：

- 一阶段 prepare 行为：调用 **自定义** 的 prepare 逻辑。
- 二阶段 commit 行为：调用 **自定义** 的 commit 逻辑。
- 二阶段 rollback 行为：调用 **自定义** 的 rollback 逻辑。

还需要注意: 空回滚、防空悬挂控制、幂等控制

## Saga

提供的长事务解决方案，在Saga模式中，业务流程中每个参与者都提交本地事务，当出现某一个参与者失败则补偿前面已经成功的参与者，一阶段正向服务和二阶段补偿服务**都由业务开发**实现。

### 适用场景：

- 业务流程长、业务流程多。 高性能,不会出现所有的事务长时间挂起，这也是TCC没有的。

- 参与者包含其它公司或遗留系统服务，无法提供 TCC 模式要求的三个接口。

  > 只在发起方记录日志. 由于只在发起方记录日志同时对参与者服务没有接口参数的要求，使得Saga可以方便集成其它机构或遗留系统的服务。 
  >
  > 类比于TCC就是，老系统不能修改代码了，所以补偿的代码得再你发起方实现。你会说再TCC里面rollback写就行了呗。
  >
  > 那么还有一个应用场景，让业务最终成功（别人的业务逻辑一定成功[如下单成功后一定会发货]，只是因为压力、cpu、等等其他非业务导致的。） 你看下面引入的状态机模式实现。

### 优势：

- 一阶段提交本地事务，无锁，高性能
- 事件驱动架构，参与者可异步执行，高吞吐
- 补偿服务易于实现

### 缺点：

- 不保证隔离性（应对方案见后面文档）

  > 实践中一般的应对方法是：
  >
  > - 业务流程设计时遵循“宁可长款, 不可短款”的原则, 长款意思是客户少了钱机构多了钱, 以机构信誉可以给客户退款, 反之则是短款, 少的钱可能追不回来了。所以在业务流程设计上一定是先扣款。
  > - 有些业务场景可以允许让业务最终成功, 在回滚不了的情况下可以继续重试完成后面的流程, 所以状态机引擎除了提供“回滚”能力还需要提供“向前”恢复上下文继续执行的能力, 让业务最终执行成功, 达到最终一致性的目的。

还需要注意: 空回滚、防空悬挂控制、幂等控制



## XA

### 前提

- 支持XA 事务的数据库。
- Java 应用，通过 JDBC 访问数据库。

### 整体机制

在 Seata 定义的分布式事务框架内，利用事务资源（数据库、消息服务等）对 XA 协议的支持，以 XA 协议的机制来管理分支事务的一种 事务模式。

### 感悟

- 从编程模型上，XA 模式与 AT 模式保持完全一致。
- 但是XA他没有自动补偿机制，功能比AT弱，所以一般不用他。



## 各种模式使用总结

- AT 自己内部系统中使用、或者其他系统可以提供AT的改造整合，无侵入且自动补偿编码简单。 
- TCC 适合非关系型数据库的业务，如别人系统提供回滚rest接口、要操作nosql、甚至旧系统不维护需要自身来补偿他们的数据。
- Saga   业务无法提供 TCC 模式接口、需要状态机来做流程控制。 需要比TCC性能更高。
- XA   不建议使用，最好用AT。



# AT模式-快速开始

## TC环境搭建

存储模式 ： 支持file、db、redis

资源目录 ： client 、 config-center、server

以下采用，db存储模式+Nacos(注册&配置中心)部署；

- 下载安装包
- 建表(仅db模式) ： global_table全局事务、branch_table分支事务、lock_table全局锁
- 修改file.conf文件中的，store.mode 为 db 、数据库连接
- 修改config.txt配置信息，db模式、数据库连接、**配置事务分组与客户端配置的事务分组一致**。
- 修改registry.conf，配置Nacos注册中心、并配置nacos的地址，最好重新SEATA_GROUP分组(内部配置比较多)。
- 执行shell同步配置参数到Nacos，（手动上传太慢了，有几十个配置）
- 启动Seata Server

## 微服务Client

当然还有编程式使用、spring多数据源整合使用等等，这里只做项目中的微服务

- 添加pom依赖
- 微服务对应数据库中添加undo_log表
- 添加代理数据源配置，配置DataSourceProxy
- 启动类上剔除DataSourceAutoConfiguration，用于解决数据源的循环依赖问题
- 修改register.conf，配置nacos作为registry.type，还有其他tx-service-group、nacos.cluster、nacos.group，和服务端保持一致。
- 修改application.yml配置，配置seata服务事务分组和服务端的保持一致。
- 代码中使用**@GlobalTransactional**  代替  @Transactional

## 遇到的问题

- 版本选择问题：spring cloud alibaba 2.1.2 及其以上版本使用seata1.4.0会出现如下异常
- 循环依赖的问题： 启动类上需要排除DataSourceAutoConfiguration
- `no available server to connect` 异常，版本问题、客户端的配置和服务端的不一致。
- [seata分布式事务+openfeign的坑](https://blog.csdn.net/lmsnice/article/details/109983503) ：再熔断过程内容，要做throw抛出异常，后续的事务才会回滚。
- [Seata分布式事务失效，不生效（事务不回滚）的常见场景](https://blog.csdn.net/godkzz/article/details/122398887)
> 微服务没有正常获取XID；Fegin调用使用了Fallback降级或抛出的异常被全局处理；undo_log表有脏数据
- 多套微服务共用一套TC ： 通过配置TC不同的事务分组可以给不同的微服务系统提供隔离。
- TC高可用 : config.txt 中配置grouplist 用做集群。



# 思考

# 参考资料

[Seata AT 模式](https://seata.io/zh-cn/docs/dev/mode/at-mode.html)

[Seata分布式事物（四）解决RPC+feign跨服务调用提供者无XID无法回滚问题](https://blog.csdn.net/Extraordinarylife/article/details/115773899)

> GlobalTransactionContext.reload(RootContext.getXID()).rollback(); 
>
> 这种只能回滚当前服务的本地事务分支，不能回滚全局事务。
>
> 因为发起者没有感知到异常，所有后续的服务还是会正常提交。(可以看@GlobalTransaction的代理实现类找到答案)

