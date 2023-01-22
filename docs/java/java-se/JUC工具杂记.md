---
title: JUC工具杂记
date: 2022-02-14 16:16:32
permalink: /pages/3f92cf/
categories:
  - java
  - java-se
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# Semaphore

- 它的作用是控制访问特定资源的线程数目
- 需求场景:: 资源访问，服务限流(Hystrix里限流就有基于信号量方式)。
- public Semaphore(int permits, boolean fair)

## API

- acquire() 表示阻塞并获取许可
- tryAcquire（int args,long timeout, TimeUnit unit）表示在有限时间内阻塞并获取许可
- release() 表示释放许可



# CountDownLatch

- 能够使一个线程等待其他线程完成各自的工作后再执行
- 使用场景： Zookeeper分布式锁，Jmeter模拟高并发，开枪起跑
- CountDownLatch是通过一个计数器来实现的，计数器的初始值为线程的数量。当一个线程完成了自己的任务后，计数器的值就会减1。当计数器值到达0时，表示所有的线程都完成了任务，然后等待的线程就可以恢复执行任务。
- **注意只能用一次**

## API

- countDown() 减一
- await() 等待

# CyclicBarrier

- 栅栏屏障，让一组线程到达一个屏障（也可以叫同步点）时被阻塞，直到最后一个线程到达屏障时，屏障才会开门，所有被屏障拦截的线程才会继续运行。
- 应用场景： 可以用于多线程计算数据，最后合并计算结果的场景

## API

- 超时时间的await和不带超时时间的await方法 ，这个await就是屏障点

## 和CountDownLatch的区别

- CountDownLatch的计数器只能使用一次，而CyclicBarrier的计数器可以使用reset()方法重置，可以使用多次，所以CyclicBarrier能够处理更为复杂的场景；
- CyclicBarrier还提供了一些其他有用的方法，比如getNumberWaiting()方法可以获得CyclicBarrier阻塞的线程数量，isBroken()方法用来了解阻塞的线程是否被中断；
- CountDownLatch允许一个或多个线程等待一组事件的产生，而CyclicBarrier用于等待其他线程运行到栅栏位置。

# Exchanger

- 当一个线程运行到exchange()方法时会阻塞，另一个线程运行到exchange()时，二者交换数据，然后执行后面的程序。
- 应用场景:: 遗传算法 和 校对工作/对账

## API

- V exchange(V x)   // 在这里等待另一个线程交互数据。
- V exchange(V x, long timeout, TimeUnit unit)







# 参考资料

[Java并发编程之CyclicBarrier详解](https://blog.csdn.net/qq_38293564/article/details/80558157)

[java Exchanger原理](https://blog.csdn.net/coslay/article/details/45242581)

