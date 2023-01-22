---
title: ElasticSearch原理
date: 2022-03-13 19:41:25
permalink: /pages/3bfd3f/
categories:
  - java
  - 中间件
  - ElasticStatic
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 集群架构原理

## 节点类型

- Master主节点 ： 主资格节点的主要职责是和集群操作相关的内容
- DataNode数据节点 ： 数据节点主要是存储索引数据的节点，主要对文档进行增删改查操作，聚合操作等。数据节点对cpu，内存，io要求较高， 在优化的时候需要监控数据节点的状态，当资源不够的时候，需要在集群中添加新的节点。
- 客户端节点: 当主节点和数据节点配置都设置为false的时候，该节点只能处理路由请求，处理搜索，分发索引操作等，从本质上来说该客户节点表现为智能负载平衡器。

> 建议: 
>
> 在一个生产集群中我们可以对这些节点的职责进行划分，建议集群中设置**3台**以上的节点作为master节点，这些节点只负责成为主节点，维护整个集群的状态。再根据数据量设置一批data节点，这些节点只负责存储数据，后期提供建立索引和查询索引的服务，这样的话如果用户请求比较频繁，这些节点的压力也会比较大，所以在集群中建议再设置一批client节点(node.master: false node.data: false)，这些节点只负责处理用户请求，实现请求转发，负载均衡等功能

节点状态，默认是主节点和数据节点，同时为true。

## 健康状况

green：每个索引的primary shard和replica shard都是active状态的

yellow：每个索引的primary shard都是active状态的，但是部分replica shard不是active状态，处于不可用的状态

red：不是所有索引的primary shard都是active状态的，部分索引有数据丢失了



## Master节点

在Elasticsearch启动时，会选举出来一个Master节点。当某个节点启动后，然后 使用Zen Discovery机制找到集群中的其他节点，并建立连接。并从候选主节点中选举出一个主节点。

一个Elasticsearch集群中，只有一个Master节点。在生产环境中，内存可以相对 小一点，但机器要稳定。

主要负责： 

- 管理索引（创建索引、删除索引）
- 分配分片
- 维护元数据
- 管理集群节点状态
- 不负责数据写入和查询，比较轻量级

## DataNode节点

在Elasticsearch集群中，会有N个DataNode节点。

大部分Elasticsearch的压力都在DataNode节点上，在生产环境中，内存最好配置大一些。

主要负责： 

- 数据写入
- 数据检索

## 分片机制

 Elasticsearch是一个分布式的搜索引擎，索引的数据也是分成若干部分，分布在不同的服务器节点中，分布在不同服务器节点中的索引数据，就是分片。

一个索引（index）由多个shard（分片）组成，而分片是分布在不同的服务器上的。

Elasticsearch会自动管理分片，如果发现分片分布不均衡，就会自动迁移

## 副本机制

为了对Elasticsearch的分片进行容错，假设某个节点不可用，会导致整个索引库都将不可用。

对分片进行副本容错中，每一个分片，都会有对应的副本。

在Elasticsearch7.x以后，默认创建的索引为1个分片、每个分片有1个主分片和1个副本分片。

## 指定分片、副本数量

`                "settings":{ "number_of_shards":3, "number_of_replicas":2 }              `

## 集群脑裂

discovery.zen.minimum_master_nodes  设置为 master候选节点数量 / 2 + 1

为什么集群主节点要3台或以上，不能低于3台???  因为2台会出现脑列问题，导致数据丢失。1台单点故障。 2台一台挂了主节点就降级为node节点了。

# 重要工作流程

## 写入原理

1. 选择任意一个DataNode发送请求，该节点就成为一个协调节点
2. 计算得到文档要写入的分片
3. 协调节点会进行路由，将请求转发给对应的primary shard所在的DataNode
4. 节点上的Primary Shard处理请求，写入数据到索引库中，并将数据同步到Replica shard
5. Primary Shard和Replica Shard都保存好了文档，返回client。（分片和副本不在一个节点）

## 检索原理

1. client发起查询请求，某个DataNode接收到请求，该DataNode就会成为协调节点
2. 协调节点（Coordinating Node）将查询请求广播到每一个数据节点，这些数据节点的分片会处理该查询请求，每个分片进行数据查询，将符合条件的数据放在一个优先队列中，并将这些数据的文档ID、节点信息、分片信息返回给协调节点。
3. 协调节点将所有的结果进行汇总，并进行全局排序
4. 协调节点向包含这些文档ID的分片发送get请求，对应的分片将文档数据返回给协调节点，最后协调节点将数据返回给客户端

## 准实时索引实现

### 溢写到文件系统缓存

当数据写入到ES分片时，会首先写入到内存中，然后通过内存的buffer生成一个segment，并刷到**文件系统缓存**中，数据可以被检索（注意不是直接刷到磁盘）

ES中默认1秒，refresh一次

### 写translog保障容错

在写入到内存中的同时，也会记录translog日志，他属于硬盘级别，在refresh期间出现异常，会根据translog来进行数据恢复

等到文件系统缓存中的segment数据都刷到磁盘中，清空translog文件

### flush到磁盘

ES默认每隔30分钟会将文件系统缓存的数据刷入到磁盘

### segment合并

Segment太多时，ES定期会将多个segment合并成为大的segment，减少索引查询时IO开销，此阶段ES会真正的物理删除（之前执行过的delete的数据）









# 分值计算底层原理

## boolean model

先过滤出包含指定

## relevance score（TF/IDF算法）

再计算相关性分值，

- Term frequency （TF） : 搜索文本中的各个词条在field文本中出现了多少次，出现次数越多，就越相关 (不同词条，越多越好)

- Inverse document frequency : 搜索文本中的各个词条在整个索引的所有文档中出现了多少次，出现的次数越多，就越不相关(相同词条，越少越好)
- Field-length norm : field长度，field越长，相关度越弱；出现次数相同，文档长度越短越好

## 空间向量模型

画一个平面向量图，弧度越大，分数越底; 弧度越小，分数越高。

比较复杂..



