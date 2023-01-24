---
title: Queue
date: 2022-02-14 14:14:23
permalink: /pages/d910a4/
categories:
  - java
  - java-se
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 类图

![](https://images2017.cnblogs.com/blog/1182892/201711/1182892-20171122100317930-842768608.png)

# Queue顶层接口



# Deque接口

继承自Queue ，Deque定义为双端队列，即队首队尾都有出入口，可以实现双端出入。

## jdk的实现类

- ArrayDeque
- LinkedList
- ConcurrentLinkedDeque



# BlockingQueue接口

## 简介

- 继承自Queue 
- BlockingQueue用于解决并发生产者 - 消费者问题
- 特性:: 是在任意时刻只有一个线程可以进行take或者put操作，并且 BlockingQueue提供了超时return null的机制

## 队列类型

- 有限/无限队列
- 阻塞/非阻塞队列
- 优先级队列
- 单端/双端队列
- 传输队列

## 队列数据结构

- 通常用链表或者数组实现
- 一般而言队列具备FIFO先进先出的特性，当然也有双端队列（Deque）和优先级 队列
- 主要操作：入队（EnQueue）与出队（Dequeue）

## BlockingQueue API

### 添加元素

非阻塞：

> add()  // 如果插入成功则返回 true，否则抛出 IllegalStateException 异常
>
> offer() // 如果插入成功则返回 true，否则返回 false

阻塞

> put()  // 将指定的元素插入队列，如果队列满了，那么会阻塞直到有空间插入
>
> offer(E e, long timeout, TimeUnit unit) // 尝试将元素插入队列，如果队列已满，那么会阻塞直到有空间插入

### 检索元素

take()  // 获取队列的头部元素并将其删除，如果队列为空，则阻塞并等待元素变为可用

poll(long timeout, TimeUnit unit)  // 检索并删除队列的头部，如有必要，等待指定的等待时间以使元素可用，如果超时，则返回 null

## 常见的阻塞队列

### ArrayBlockingQueue

- 由数组支持的有界队列
- 在线程池中有比较多的应用，生产者消费者场景
- 基于ReentrantLock保证线程安全，根据Condition实现队列满时的阻塞

### LinkedBlockingQueue

- 由链接节点支持的可选有界(值非常大相当于无界)队列
- 会加锁保证线程安全
- 设计生产者 - 消费者模型时最重要的是 消费者应该能够像生产者向队列添加消息一样快地消费消息 。否则，内存可能会填满，然后就会得到一个 OutOfMemory 异常。
- Executors.newFixedThreadPool() 就是用这个队列

### LinkedBlockingDeque

由链表构成的双向阻塞队列，类似于LinkedBlockingQueue，多了Deque接口的实现.

### ConcurrentLinkedQueue

基于链表形式的队列，通过compare and swap(简称CAS)协议的方式，来保证多线程情况下数据的安全，不加锁，主要使用了Java中的sun.misc.Unsafe类来实现

### PriorityBlockingQueue

由优先级堆支持的无界优先级阻塞队列

### DelayQueue

- 由优先级堆支持的、基于时间的调度队列
- 由优先级堆支持的、基于时间的调度队列，内部基于无界队列PriorityQueue实现，而无界队列基于数组的扩容实现。
- 队列内部会根据时间优先级进行排序。延迟类线程池周期执行。

### SynchronousQueue

- 队列不存储数据，所以没有大小，也无法进行迭代；
- 插入操作的返回必须等待另一个线程完成对应数据的删除操作，反之亦然；
- 该队列由两种数据结构组成，即先入先出的队列和后入先出的栈；
- 在初始化的时候，是可以选择使用队列或者栈的，默认是栈；
- Executors.newCachedThreadPool() 就是用的这个队列

### LinkedTransferQueue

- 可以看做SynchronousQueue和LinkedBlockingQueue的结合体
- 可以自己控制存元素是否需要阻塞线程，transfer() 会阻塞线程.   一般的put()  offer() 则入队。
- 取元素和SynchronousQueue一样，都会等待有新的元素才进入匹配到.

# BlockingDeque接口

继承BlockingQueue，Deque

## jdk的实现类

- LinkedBlockingDeque













# [无锁并发队列框架 Disruptor](https://cxybb.com/article/weixin_46300935/120836731)





# 参考资料

[java队列——queue详细分析](https://www.cnblogs.com/lemon-flm/p/7877898.html)

[只是给面试官讲了18种Java队列，竟然当场拿到offer！网友：牛批](https://zhuanlan.zhihu.com/p/368548774)

[Java多线程进阶（三八）—— J.U.C之collections框架：LinkedTransferQueue](https://segmentfault.com/a/1190000016460411)

> 功能一 ： 可以控制生产者阻塞。 保证生产的消息一定有人消费。
> 比如: 当我们不想生产者过度生产消息时，TransferQueue可能非常有用，可避免发生OutOfMemory错误。在这样的设计中，消费者的消费能力将决定生产者产生消息的速度。
>
> 什么这个用put()  offer() 有界队列也可以实现??那么请看
>
> 功能二: 当有消费者线程阻塞等待时，调用transfer方法的生产者线程不会将元素存入队列，而是直接将元素传递给消费者；插队消费，你服不??

[java多线程之：SynchronousQueue队列](https://www.cnblogs.com/shangxiaofei/p/5707552.html)