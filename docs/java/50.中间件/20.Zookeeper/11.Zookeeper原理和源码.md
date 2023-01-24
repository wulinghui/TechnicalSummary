---
title: Zookeeper原理和源码
date: 2022-04-11 10:03:44
permalink: /pages/6ce977/
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
# 原理

## Leader选举流程

### 主体流程

1. 第一轮都是观望looking，给自己投票。
2. 第二轮都给接受到的票数中，给最大的myid，zxid投票。(优先选择zxid大的，代表数据最新。zxid一样就选myid大的为leader)
3. 超过半数票的节点，为leader。
4. 通知其他节点leader节点的情况，并停止选举，变成leader。
5. 新进来的节点发现leader有了，也直接变成follower。

### 多层队列架构

整个zookeeper选举底层可以分为选举应用层和消息传输层。

应用层有自己的队列统一接收和发送选票。

传输层也设计了自己的队列，但是按发送的机器分了队列，**避免给每台机器发送消息时相互影响**，比如某台机器如果出问题发送不成功则不会影响对正常机器的消息发送。

## ZAB协议

ZAB 协议全称：Zookeeper Atomic Broadcast（Zookeeper 原子广播协议）。

ZAB 协议是为分布式协调服务 专门设计的一种支持 **崩溃恢复** 和 **原子广播**（数据同步） 的协议。

ZAB 定义了 2 个原则 : 类似于2阶段.

1. ZAB 协议**确保丢弃**那些只在 Leader 提出/复制（第一阶段），但没有提交的事务（第二阶段）。
2. ZAB 协议**确保生效**那些已经在 Leader 提交的事务，且最终会被所有服务器提交。



### 其他功能

- 客户端的sessoinID会同步到所有的节点中去，保证sessoin共享用于高可用。长连接基于sessionID，可以设置超时时间。（服务端节点挂了，其他节点可以顶上去。）
- 所有客户端写入数据都是直接写入/其他节点转发到Leader节点，然后由 Leader 复制到Follower节 点中，从而保证数据一致性。
- 复制过程类似两阶段提交(2PC)，ZAB 只需要 Follower有一半以上返回 Ack 信息就可以执行提交，更新内存里面的数据。
- 对外提供的读写数据，实际上是内存中的DataTree的数据。所以可以看做也是一个内存数据库。但是对内存操作的时机没有这么简单。
- 当 Leader 服务可以 正常使用，就进入消息广播模式，当 Leader 不可用时，则进入崩溃恢复模式。整个 Zookeeper 就是在这两个模式之间切换
- 一般的流程 ：  正常工作做**消息广播**  ->  leader挂了，做**崩溃恢复**  -> 恢复过程中(不可对外提供服务)，做**数据同步** -> 正常工作.....
- 非实时强一致性，最终一致性(队列异步操作的)。 是顺序一致性，zxid的顺序，且执行指令是在队列中处理的。

### 消息(原子)广播、复制过程

流程:    先广播写文件,等待ack过半，再广播commit同步到内存(到内存才算生效)。


1.  Leader将请求封装成一个事务Proposal，将其发送给所有Follwer；写自身的数据文件；并给自己发ack；
2.  各个Follwer，写本地数据文件； 返回ack给Leader；
3. Leader收到一半以上的ack，给Follwer发送commit； 发送消息让observer存储消息；自身commit写自身的内存数据；
4. 回发节点数据变动通知给客户端，触发客户端的监听事件；返回客户端命令操作结果；
5. 各自的Follwer和observer，commit数据，写内存数据。

细节: 

- Leader 在收到客户端请求之后，会将这个请求封装成一个事务，并给这个事务分配一个全局递增的唯一ID，称为事务 ID（ZXID），ZAB 协议需要保证事务的顺序，因此必须将每一个事务按照 ZXID 进行先后排序然后处理，主要通过消息队列实现。
- 在 Leader 和 Follwer 之间还有一个消息队列，用来解耦他们之间的耦合，解除同步阻塞。
-  zookeeper集群中为保证任何所有进程能够有序的顺序执行，只能是 Leader 服务器接受写请求，即使是 Follower 服务器 接受到客户端的写请求，也会转发到 Leader 服务器进行处理，Follower只能处理读请求。
- ZAB协议规定了如果一个事务在一台机器上被处理(commit)成功，那么应该在所有的机器上都被处理成功，哪怕机器出现故障崩溃。



### 崩溃恢复

问题: 主要是Leader 崩溃了，还能保证数据一致吗？

目的:  ZAB设计了这样一个选举算法，**能够确保提交已经被 Leader 提交的事务，同时丢弃已经被跳过的事务**。

实现:   让 Leader 选举算法能够保证新选举出来的 Leader 服务器拥有集群中所有机器 ZXID 最大的事务，那么就能够 保证这个新选举出来的 Leader 一定具有所有已经提交的提案。

优点:  可以省去 Leader 服务器检查事务的提交和丢弃工作的这一步操作。



### 数据同步

为了保持数据一致，当崩溃恢复之后，需要在正式工作之前，Leader 服务器首先确认事务是否都已经被过半的 Follwer 提交了。

Leader 服务器处理或丢弃事务都是依赖着 ZXID，具体为当 Follower 连接上 Leader 之后，Leader 服务器会根据自己服务器上最后被提交的 ZXID 和 Follower 上的 ZXID 进行比对，比对结果要么回滚，要么和 Leader 同步。

当 Follwer 服务器成功同步之后，Leader 会将这些服务器加入到可用服务器列表中。数据同步完，就能正常工作了。

## ZXID结构

- 高 32 位代表了每代 Leader 的唯一性，低 32 代表了每代 Leader 中事务的唯一性
- 也能让 Follwer 通过高 32 位识别不同的 Leader。
- 高 32 位则代表了 Leader 服务器上取出本地日志中最大事务 Proposal 的 ZXID，并从该 ZXID 中解析出对应的 epoch 值(leader 选举周期)，当一轮新的选举结束后，会对这个值加一。简单的说就是选举周期和机器的myid生成。
- 低 32 位可以看作是一个简单的递增的计数器，针对客 户端的每一个事务请求，Leader 都会产生一个新的事务 Proposal 并对该计数器进行 + 1 操作。这个计数器会在新一轮选举之后重置。

## 如何避免脑裂问题

1. zab协议半数以上写完才继续写内存，才算有效，所以旧leader只是写了日志但是数据是不生效的。   新leader是会成功commit。(给旧leader的写是失败的，客户端报错。)
2. leader通过ping给所有的follower发命令，如果失败就认为和所有的follow失去连接了，不再是leader了，置为lookup状态，开始选举流程。如果有leader就变为follow节点了。 
3. 当有2个leader同时选举时，选举周期谁大将决定新旧leader，同时各个floower通过zxid来选新leader。 
4. 当分区恢复时，老leader丢弃数据和清空日志文件，再和新leader同步数据。

# 思考

- zk为什么适合写少读多的场景（ZAB强一致性、cp架构）。
- 设计精髓:  核心zab协议，集群崩溃恢复/leader选举规则，数据一致性的实现。 各个队列和nio，bio并发的实现。
- 为什么服务端的内部通信采用bio??    客户端nio，内部服务端之间的通讯使用bio因为节点少，连接少，通信少，且数量固定。



# 参考资料

[ZooKeeper Leader服务器选举流程](https://blog.csdn.net/abc123lzf/article/details/102897843)

> 大致源码讲的不错。4种状态：
>
> - `LOOKING`：正在寻找Leader服务器
> - `FOLLOWING`：当前服务器角色为Follower
> - `LEADING`：当前服务器角色为Leader服务器
> - `OBSERVING`：当前服务器角色为Observer

