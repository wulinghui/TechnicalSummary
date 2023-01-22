---
title: AQS
date: 2022-02-13 18:51:14
permalink: /pages/93bc6a/
categories:
  - java
  - java-se
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 简介

AQS定义了一套多线程访问共享资源的同步器框架，是一个依赖状态(state)的同步器。也是MESA模型的定义

java.util.concurrent包中的大多数同步器实现都是围绕着共同的基础行为，比如等待队列、条件队列、独占获取、共享获取等，而这些行为的抽象就是基于AbstractQueuedSynchronizer（简称AQS）实现的，AQS是一个抽象同步框架，可以用来实现一个依赖状态的同步器。

JDK中提供的大多数的同步器如Lock, Latch, Barrier等，都是基于AQS框架来实现的

- 一般是通过一个内部类Sync继承 AQS
- 将同步器所有调用都映射到Sync对应的方法

# AQS具备特性

- 阻塞等待队列
- 共享/独占
- 公平/非公平
- 可重入
- 允许中断 

# 资源共享方式

- Exclusive-独占

  > 只有一个线程能执行，如ReentrantLock

- Share-共享

  > 多个线程可以同时执行，如ReadWriteLock/Semaphore/CountDownLatch



# 自定义同步器实现时主要实现方法

不同的自定义同步器竞争共享资源的方式也不同。自定义同步器在实现时只需要实现共享资源state的获取与释放方式即可，至于具体线程等待队列的维护（如获取资源失败入队/唤醒出队等），AQS已经在顶层实现好了。

- isHeldExclusively()  

  > 该线程是否正在独占资源。只有用到condition才需要去实现它。

- tryAcquire(int)

  > 独占方式。尝试获取资源，成功则返回true，失败则返回false。

- tryRelease(int) 独占方式。尝试释放资源

  >  独占方式。尝试释放资源，成功则返回true，失败则返回false。

- tryAcquireShared(int) 共享方式。尝试获取资源。

  > 共享方式。尝试获取资源。负数表示失败；0表示成功没有剩余可用资源；正数表示成功有剩余资源。

- tryReleaseShared(int) 共享方式。尝试释放资源

  > 共享方式。尝试释放资源。如果释放后允许唤醒后续等待结点返回true，否则返回false。

# Condition接口详解

java.util.concurrent类库中提供Condition类来实现线程之间的协调。调用Condition.await() 方法使线程等待，其他线程调用Condition.signal() 或 Condition.signalAll() 方法唤醒等待的线程。

**注意：调用Condition的await()和signal()方法，都必须在lock保护之内。**

1. 调用Condition#await方法会释放当前持有的锁，然后阻塞当前线程，同时向Condition队列尾部添加一个节点，所以调用Condition#await方法的时候必须持有锁。
2. 调用Condition#signal方法会将Condition队列的首节点移动到阻塞队列尾部，然后唤醒因调用Condition#await方法而阻塞的线程(唤醒之后这个线程就可以去竞争锁了)，所以调用Condition#signal方法的时候必须持有锁，持有锁的线程唤醒被因调用Condition#await方法而阻塞的线程。



# AQS框架实现源码

state、cas、队列

## volatile int state

- state表示资源的可用状态

  > 1. 值为0，初始化状态，表示当前节点在sync队列中，等待着获取锁。
  > 2. CANCELLED，值为1，表示当前的线程被取消；
  > 3. SIGNAL，值为-1，表示当前节点的后继节点包含的线程需要运行，也就是unpark；
  > 4. CONDITION，值为-2，表示当前节点在等待condition，也就是在condition队列中；
  > 5. PROPAGATE，值为-3，表示当前场景下后续的acquireShared能够得以执行；

- 访问方式:

  > - getState()
  > - setState()
  > - compareAndSetState()







## 同步等待队列(CLH队列)

AQS当中的同步等待队列也称CLH队列，CLH队列是Craig、Landin、Hagersten三人发明的一种基于双向链表数据结构的队列，是FIFO先进先出线程等待队列，Java中的CLH队列是原CLH队列的一个变种,线程由原自旋机制改为阻塞机制。

AQS 依赖CLH同步队列来完成同步状态的管理：

- 当前线程如果获取同步状态失败时，AQS则会将当前线程已经等待状态等信息构造成一个节点（Node）并将其加入到CLH同步队列，同时会阻塞当前线程
- 当同步状态释放时，会把首节点唤醒（公平锁），使其再次尝试获取同步状态。
- 通过signal或signalAll将条件队列中的节点转移到同步队列。（由条件队列转化为同步队列）

## 条件等待队列（Condition）

是一个多线程间协调通信的工具类，使得某些线程一起等待某个条件,只有当该条件具备时，这些等待线程才会被唤醒，放到同步等待队列中，从而重新争夺锁。

AQS中条件队列是使用单向列表保存的，用nextWaiter来连接:

- 调用await方法阻塞线程；
- 当前线程存在于同步队列的头结点，调用await方法进行阻塞（从同步队列转化到条件队列）

## exclusiveOwnerThread

父类AbstractOwnableSynchronizer的exclusiveOwnerThread属性，代表当前执行的线程.

## 主体流程

不同的自定义同步器争用共享资源的方式也不同。自定义同步器在实现时只需要实现共享资源state的获取与释放方式即可，至于具体线程等待队列的维护（如获取资源失败入队/唤醒出队等），AQS已经在顶层实现好了。







# 自己的疑惑

[独占/共享 有啥主要的区别](https://blog.csdn.net/Sky_QiaoBa_Sum/article/details/112386838)

> 共享式获取与独占式获取最大的区别就是同一时刻能否有多个线程同时获取到同步状态。
>
> - 共享式访问资源时，同一时刻其他共享式的访问会被允许。 
> - 独占式访问资源时，同一时刻其他访问均被阻塞。               
>
> me:  共享式就是提前设置好了waitState，允许后面的都访问。 如果资源判断成功就可以一直往下唤醒。
>
> 可以看Semaphore解锁多个次数，如果不用共享模式的话，不持续唤醒就会，等着其他线程去竞争就浪费资源了。

