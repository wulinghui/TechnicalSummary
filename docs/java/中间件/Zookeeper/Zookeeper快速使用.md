---
title: Zookeeper快速使用
date: 2022-04-02 09:49:49
permalink: /pages/f5fe5c/
categories:
  - java
  - 中间件
  - Zookeeper
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 简介

它是一个分布式协调框架，主要是用来解决分布式应用中经常遇到的一些数据管理问题。如：统一命名服务、状态同步服务、集群管理、分布式应用配置项的管理等。也可以看做是一个用于存储少量数据的基于内存 的数据库

#  核心概念

## 文件系统数据结构

### 持久化目录节点 PERSISTENT

客户端与zookeeper断开连接后，该节点依旧存在，只要不手动删除该节点，他将永远存在

### 持久化顺序编号目录节点 PERSISTENT_SEQUENTIAL

客户端与zookeeper断开连接后，该节点依旧存在，只是Zookeeper给该节点名称进行顺序编号

### 临时目录节点EPHEMERAL­

客户端与zookeeper断开连接后，或者session超时，该节点被删除。

临时节点不能创建子节点。

### 临时顺序编号目录节点EPHEMERAL_SEQUENTIAL­

客户端与zookeeper断开连接后，或者session超时，该节点被删除，只是Zookeeper给该节点名称进行顺序编号

### Container

如果Container节点下面没有子节点，则Container节点 在未来会被Zookeeper自动清除,定时任务默认60s 检查一次

### TTL 节点

过了TTL指定的时间，被服务器删除。默认禁用，只能通过系统配置 zookeeper.extendedTypesEnabled=true 开启，有bug不稳定





## 监听通知机制

客户端注册监听以下三种节点：

1. 如果注册的是对某个**节点**的监听，则当这个节点被删除，或者被修改时，对应的客户端将被通知 
2. 如果注册的是对某个目录的监听，则当这个目录有子节点被创建，或者有子节点被删除，对应的客户端将被通知
3. 如果注册的是对某个**目录的递归子节点**进行监听，则当这个目录下面的任意子节点有目录结构 的变化（有子节点被创建，或被删除）或者根节点有数据变化时，对应的客户端将被通知。

**注意** : 所有的通知都是一次性的

### 事件类型 

- None: 连接建立事件 
- NodeCreated： 节点创建 
- NodeDeleted： 节点删除 
- NodeDataChanged：节点数据变化 
- NodeChildrenChanged：子节点列表变化 
- DataWatchRemoved：节点监听被移除 
- ChildWatchRemoved：子节点监听被移除





# 命令行

## 安装

- 配置JAVA环境
- 下载解压 zookeeper
- 重命名配置文件 zoo_sample.cfg
- 启动zookeeper

## 命令行操作

### 创建zookeeper 节点命令 

create [‐s] [‐e] [‐c] [‐t ttl] path [data] [acl] 

-s: 顺序节点 -e: 临时节点 -c: 容器节点 -t: 可以给节点添加过期时间，默认禁用，需要通过系统参数启用 。没有则默认创建持久化节点

注意: 没有相对路径这么一说，所以，所 有的节点一定是以 / 开头

### 查看节点

get [‐s] [‐w] path

-s 详细信息  -w 监听

### 修改节点数据

set [‐s] [‐v version] path data

-v 版本 ： 乐观锁控制并发，-1代表最新版本。

### 查看节点状态信息

stat [‐w] path



- cZxid：创建znode的事务ID（Zxid的值）。
- mZxid：最后修改znode的事务ID。 
- pZxid：最后添加或删除子节点的事务ID（子节点列表发生变化才会发生改变）。 
- ctime：znode创建时间。 
- mtime：znode最近修改时间。
- dataVersion：znode的当前数据版本。 
- cversion：znode的子节点结果集版本（一个节点的子节点增加、删除都会影响这个 版本）。 
- aclVersion：表示对此znode的acl版本。 
- ephemeralOwner：znode是临时znode时，表示znode所有者的 session ID。 如果 znode不是临时znode，则该字段设置为零。
- dataLength：znode数据字段的长度。 
- numChildren：znode的子znode的数量。

### 查看子节点信息

ls [‐s] [‐w] [‐R] path

-R 递归查看子节点列表

###  事件监听机制

get ‐w /path // 注册监听的同时获取数据

stat ‐w /path // 对节点进行监听，且获取元数据信息

ls ‐R ‐w /path // 针对递归子目录的监听



## ACL 权限控制

权限模式（Scheme）、授权对象（ID）、权限信息 （Permission）

getAcl 获取某个节点的acl权限信息

setAcl  设置某个节点的acl权限信息

addauth 输入认证授权信息



# 内存数据和持久化

DataTree、DataNode

## 事务日志

针对每一次客户端的事务操作，也就是说对数据/权限的操作。

为了提升磁盘IO的效率， Zookeeper在创建事务日志文件的时候就进行文件空间的预分配- 即在创建文件的时候，就向操 作系统申请一块大一点的磁盘块。

事务日志文件名为： log.<当时最大事务ID>

内容有 ： 

同时做了压缩(可以用org.apache.zookeeper.server.LogFormatter 格式化日志)

客户端会话ID，CXID,ZXID,操作类型，节点路径，节点数据，节点版本。

## 数据快照

数据快照用于记录Zookeeper服务器上某一时刻的全量数据，并将其写入到指定的磁盘文件中。

快照事务日志文件名为： snapshot.<当时最大事务ID>

快照数据是反应当时内存数据的状态。事务日志是 更全面的数据，所以恢复数据的时候，可以先恢复快照数据，再通过增量恢复事务日志中的数据 即可。 好多中间件都是这样实现的，如redis混合化持久性。





#  Java 客户端

zookeeper 官方的客户端没有和服务端代码分离，他们为同一个jar 文件。所以客户端的版本请保持与服务端版本一致。

new ZooKeeper（）的过程是异步的。需要用到CountDownLatch+回调做同步。

监听机制，可以再代码中用this传入做无限监听。

# Curator 工具包

Curator 把我们平时常用的很多 ZooKeeper 服务开发功能做了封装，例如 客户端Leader 选举、 分布式计数器、分布式锁、会话重新连接、Watch 反复注册、多种异常处理、Cache 事件监听、分布式Barrier(栅栏)

- pom包:   curator-framework简单的封装，curator-recipes高级功能特性

## API

- CuratorFramework#start() 方法代表启动。
- CuratorFramework#getData() 获取数据
- CuratorFramework#setData() 更新数据
- CuratorFramework#delete() 删除节点
- 异步接口 : 默认使用EventThread线程池，可以自定义线程池。
- 监听器 ： CuratorListener类

## protection模式

防止僵尸(幽灵)节点（由于异常原因导致出现下面的问题。）

Curator 的幂等性保证（再写成功以后返回时出错，同时再sessoin超时前恢复，那么会触发重试...就出现了重复数据）， `withProtection()` 生成uuid，重试时再去查询这个客户端的uuid是否存在，来保证幂等性。

## Caches

Curator 引入了 Cache 来实现对 Zookeeper 服务端事件监听，来实现反复注册的功能。

分为两类注册类型：节点监听和子节点监听。

Cache 事件监听可以理解为一 个本地缓存视图与远程 Zookeeper 视图的对比过程

- node cache 对当前节点数据变化的处理
- path cache  会对子节点进行监听，但是不会对二级子节点进行监听
- tree cache  对当前节点的子节点，及递归子节点数据变化的处理





# 集群模式

## 介绍

**Leader**:   处理所有的事务请求（写请求），可以处理读请求，集群中只能有一个Leader

**Follower**：只能处理读请求，同时作为 Leader的候选节点，即如果Leader宕机，Follower节点要参与到新的Leader选举中，有可能成为新的Leader节点。

**Observer**：只能处理读请求。不能参与选举 

Follower/Observer :  接到写请求则转发到 Leader节点上。

## 安装

- 前3步同单机安装。

- 修改配置文件zoo.cfg

```shell
dataDir=/usr/local/data/zookeeper-1
clientPort=2181
# server.A=B：C：D：E  
# 每个节点2个端口，其中一个为选举端口，一个为提供服务端口。
# A 是一个数字，表示这个是第几号服务器；
# B 是这个服务器的 ip 地址；
# C 表示的是这个服务器与集群中的 Leader 服务器交换信息的端# 口；
# D 表示的是万一集群中的 Leader 服务器挂了，需要一个端口来重新进行选举，选出一个新的 Leader，而这个端口就是用来执行选举时服务器相互通信的端口。如果是伪集群的配置方式，由于 B 都是一样，所以不同的 Zookeeper 实例通信端口号不能一样，所以要给它们分配不同的端口号。
# 如果需要通过添加不参与集群选举以及事务请求的过半机制的 Observer节点，可以在E的位置，添加observer标识。
server.1=127.0.0.1:2001:3001:participant// participant 可以不用写，默认就是participant
server.2=127.0.0.1:2002:3002:participant
server.3=127.0.0.1:2003:3003:participant
server.4=127.0.0.1:2004:3004:observer 
```

- 标识myid文件的Server ID

`echo "1">>myid`

- 启动实例
- 检测集群状态
  `zkServer.sh   status conf/zoo1.cfg`

## 集群动态配置

 3.5.0 的新特性 ： 

- 需要开启超级管理员身份验证模式 **ACLs**
- 配置动态文件 :  dynamicConfigFile -> 指定动态配置文件的路径 ，reconfigEnabled  :  设置为true 开启动态配置
- 创建文件 zoo_replicated.cfg.dynamic
- 指令扩缩容

```shell
reconfig -remove 3  // 移除serverId为 3 的机器
reconfig -add server.3=**** // 把对应的机器加进来
```

- 客户端可以通过监听 /zookeeper/confg 节点，来感知集群的变化。从而实现集群的动态变更
- Curator 也自带了动态配置的监听，不需要额外的配置和代码实现监听更新；



# 应用场景

所有的应用场景可以[看curator的官网](https://curator.apache.org/curator-recipes/index.html) 

## 分布式配置中心

Spring Cloud Zookeeper Config

原理 : 获得持久化节点数据、并且监听数据变更。

## 分布式锁 

### 非公平锁

通过 create -e /lock  ， get -w /lock ， delete /lock 简单实现。

羊群效应 ：所有的连接都在对同一个节点进行监听，当服务器检测到删除事件时，要通知所有的连接，所有的连接同时收到事件，再次并发竞争。

### 公平锁

源码: 

- 防止幽灵节点 ： protection模式
- 利用父容器节点的特性，减少父节点的数量。
- 避免羊群效应:  **临时顺序节点，且只针对上个节点做监听**。 
- 再客户端获得所有节点且排序，防止 ： 某个节点挂了导致顺序中断需要重建监听；网络IO获得的是无序的。
- **可重入锁**，再jvm本地有个atomicInt 来做的，防止了网络IO。
- 内部是使用的syncs / wait / notiyall 实现的等待唤醒机制。
- 一进来就先创建临时节点，之后再排序判断是不是最小的节点，再做监听等待唤醒机制。

思考: 

- 获得最小节点？？？ 获得所有节点，获得10位数字，并且排序（从网络中获得的列表返回值也是无序的，必须要的）就行了。
- 如果中间一个节点挂了，哪有怎么处理???   他后面那个节点监听到了之后，再去判断能不能获得锁，不能就继续排队组成新的监听链表。
- 防止幽灵节点 ： protection模式
- 为何用父容器节点 ？？？   减少父节点的数量。
- 临时顺序节点的目的 ???    直接创建并保证他的排序。



非公平锁的羊群效应问题。 可以改进成AQS的第一次非公平，之后就排队的实现，也用公平锁的实现。

### 共享锁  

读写锁的实现:  名称前缀为读写标识，用来判断获得锁成功与否。  

细节：  读的监听上个写的，写的监听上个读或写的。 读读锁没有关联。

## 分布式注册中心

spring cloud zookpeer

Rabbion动态更新ip注册表。

zookpeer 没有实现分片。

实现原理 :    临时节点 + 监听机制。

## [集群选举](https://curator.apache.org/getting-started.html) 

客户端领导选举，功能源码实现：

他会执行完回调代码后，再进行选举。 

实现同一个周期时间只有一个人做事，同时每个人都有可能做事。

也是基于分布式的公平锁去实现的。

## 发布/订阅

## 分布式队列

## 分布式屏障

## 计数器

## 缓存

## 节点/手表









# 参考资料

[集群安装配置](https://cloud.tencent.com/developer/article/1458839)

> 那2个端口可以随便配置。

[Apache ZooKeeper - 使用ZK实现分布式锁(非公平锁/公平锁/共享锁 )](https://cloud.tencent.com/developer/article/1863302)

> 非公平锁方案、羊群效应、公平锁方案、共享锁方案的原理。建议看看。

[Zookeeper + Curator实现分布式锁](https://juejin.cn/post/7038596797446651940)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bb28cfdf418d42328ed43032a27d6490~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

[curator笔记-分布式锁的实现与原理](https://www.jianshu.com/p/6618471f6e75)

> 详细的源码解析。

[用Zookeeper作为Spring cloud的配置中心](https://blog.csdn.net/CSDN_Stephen/article/details/78856323)

> 客户端使用 spring-cloud-starter-zookeeper-config
>
> 让客户端自动更新zookeeper变更的配置 ： 使用spring-boot-starter-actuator 模块，并开启watcher

