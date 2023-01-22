---
title: redis
date: 2022-02-17 17:21:06
permalink: /pages/4d5671/
categories:
  - java
  - 中间件
  - redis
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 核心设计原理

## 高性能原理

### 单线程?

- Redis 的网络 IO 和键值对读写是由一个线程来完成的，这也是 Redis 对外 提供键值存储服务的主要流程
- Redis 的其他功能，比如持久化、异步删除、集群数据同步等，其实是由额外的线程执行的

### Redis 单线程为什么还能这么快？

- 因为它所有的数据都在内存中，所有的运算都是内存级别的运算，而且单线程避免了多线程的切换性 能损耗问题。
- 正因为 Redis 是单线程，所以要小心使用 Redis 指令，对于那些耗时的指令(比如 keys)，一定要谨慎使用，一不小心就可能会导致 Redis 卡顿。

### NIO多路复用

- redis利用epoll来实现IO多路复用，将连接信息和事件放到队列中，依次放到 文件事件分派器，事件分派器将事件分发给事件处理器。
- 实现了单线程处理那么多的并发客户端连接

## key设计

-  二进制安全的数据结构
- 提供了内存预分配机制，避免了频繁的内容分配
- 兼容C语言函数库

## Value设计

### String

### List

quicklist（双端链表） 和 ziplist 

### hash

- 单个元素比较小时，底层用ziplist存储
- 个数超过 512 /单个元素大小超过 64 byte时，将改为hashtable编码

### Set

- 当数据可以用整形表示时，Set集合将被编码为intset数据结构
- intset整数集合是一个有序的，存储整型数据的结构。
- 元素个数大于 set-max-intset-entries/元素无法用整形表示 ，hashtable存储数据



### ZSet

- 字典(dict) + 跳表(skiplist) 
- 数据比较少时，用ziplist编码结构存储
- 元素个数超过128/单个元素大小超过 64 byte ，将用skiplist编码













# 内存淘汰策略（清除策略）

当Redis运行在主从模式时，只有主结点才会执行过期删除策略，然后把删除操作”del key”同 步到从结点删除数据。

## 被动删除

当读/写一个已经过期的key时，会触发惰性删除策略，直接删除（del）掉这个过期 key

## 主动删除

由于惰性删除策略无法保证冷数据被及时删掉，所以Redis会定期主动淘汰一 批已过期的key

## 超过maxmemory

- 当前已用内存超过maxmemory限定时，触发主动清理策略（8种）

### 不处理

noeviction：不会剔除任何数据，可读，拒绝所有写入并返回客户端错误信息

### 针对所有的key做处理

- allkeys-random：从所有键值对中随机选择并删除数据。
- allkeys-lru：使用 LRU 算法在所有数据中进行筛选删除。
- allkeys-lfu：使用 LFU 算法在所有数据中进行筛选删除。

### 针对设置了过期时间的key做处理

- volatile-ttl：在筛选时，会针对设置了过期时间的键值对，根据过期时间的先后进行删除，越早过期的越先被删除。
- volatile-random：就像它的名称一样，在设置了过期时间的键值对中，进行随机删除。
- volatile-lru：会使用 LRU 算法筛选设置了过期时间的键值对删除。
- volatile-lfu：会使用 LFU 算法筛选设置了过期时间的键值对删除。

## 算法

- LRU 算法（Least Recently Used，最近最少使用）
- LFU 算法（Least Frequently Used，最不经常使用）



# 管道（Pipeline）

- 管道执行多条命令的网络开销实际上只相当于一次命令执行的网络开销
- redis必须在处理完所有命令前先缓存起所有命令的处理结果
- 管道中前面命令失败，后面命令不会有影响，继续执行
- 管道不会阻塞redis。



# Lua脚本

redis是单进程、单线程执行脚本，所以不要在Lua脚本中出现死循环和耗时的运算，否则redis会阻塞，将不接受其他的命令

## 好处

- 减少网络开销
- 原子操作，替代redis的事务功能



#  6.0 新特性

- 多线程的读写IO, 但是最终执行用户命令的线程依然是单线程的
- 服务端追踪key的变化，主动同步客户端缓存数据的特性
- 对于命令的访问和执行权限的控制





# 参考资料

[数据结构之Redis-跳表](https://www.jianshu.com/p/c706d050d2f8)

