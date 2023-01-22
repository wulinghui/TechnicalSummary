---
title: java线程
date: 2022-02-13 12:05:12
permalink: /pages/d54a64/
categories:
  - java
  - java-se
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
线程模型分为KLT模型(内核级线程)与ULT模型，JVM使用的KLT模型，Java线程与OS线程保持1:1的映射关系，也就是说有一个java线程也会在操作系统里有一个对应的线程。

go语言的协程是用户级线程。

# Java线程的实现方式

本质上只有一种Thread.start

## 使用 Thread类或继承Thread类

## 实现 Runnable 接口配合Thread

## 使用有返回值的 Callable 

## 使用 lambda



# 调度机制

线程调度是指系统为线程分配处理器使用权的过程，主要调度方式分两种，分别是协同式线程调度和抢占式线程调度

## 协同式线程调度

**线程执行时间由线程本身来控制**，线程把自己的工作执行完之后，要主动通知系统切换到另外一个线程上。最大好处是实现简单，且切换操作对线程自己是可知的，没啥线程同步问题。坏处是线程执行时间不可控制，如果一个线程有问题，可能一直阻塞在那里。

## 抢占式线程调度

每个线程将由系统来分配执行时间，线程的切换不由线程本身来决定（Java中，Thread.yield()可以让出执行时间，但无法获取执行时间）。线程执行时间系统可控，也不会有一个线程导致整个进程阻塞。

## Java是抢占式调度

个人觉得: 为了减低开发者对多线程的操作，而不需管如何去控制时间，和系统切换。所以才用抢占式。

希望系统能给某些线程多分配一些时间，给一些线程少分配一些时间，可以通过设置线程优先级来完成。Java语言一共10个级别的线程优先级（Thread.MIN_PRIORITY至Thread.MAX_PRIORITY），在两线程同时处于ready状态时，优先级越高的线程越容易被系统选择执行。但优先级并不是很靠谱，因为Java线程是通过映射到系统的原生线程上来实现的，所以线程调度最终还是取决于操作系统。 

# Java线程的生命周期

Java 语言中线程共有六种状态，可以看Thread$$State内部类，分别是：

1. NEW（初始化状态）

2. RUNNABLE（可运行状态+运行状态）

3. BLOCKED（阻塞状态） // Object.wait.

4. WAITING（无时限等待）

   > LockSupport.park 
   >
   >  Thread.join  
   >
   >  Object.wait 

5. TIMED_WAITING（有时限等待）

   > Thread.sleep
   > Object.wait with timeout
   > Thread.join with timeout
   > LockSupport.parkNanos
   > LockSupport.parkUntil

6. TERMINATED（终止状态）

在操作系统层面，Java 线程中的 BLOCKED、WAITING、TIMED_WAITING 是一种状态，即前面我们提到的休眠状态。也就是说只要 Java 线程处于这三种状态之一，那么这个线程就永远没有 CPU 的使用权。

RUNNABLE  是 Java则把操作系统的可运行状态和运行状态合并了，这两个状态在操作系统调度层面有用，而 JVM 层面不关心这两个状态，因为 JVM 把线程调度交给操作系统处理了。



# [Java线程状态切换流程图](https://blog.csdn.net/matrixZCL/article/details/107437717)

# Thread常用方法

- **stop方法**

  > stop()方法已经被jdk废弃，原因就是stop()方法太过于暴力，强行把执行到一半的线程终止。
  >
  > 一般用中断机制代替，交给程序员来控制。

- **sleep方法**

- **yield方法**

- **join方法**	

# 中断机制

Java没有提供一种安全、直接的方法来停止某个线程，而是提供了中断机制。中断机制是一种协作机制，也就是说通过中断并不能直接终止另一个线程，而需要被中断的线程自己处理。被中断的线程拥有完全的自主权，它既可以选择立即停止，也可以选择一段时间后停止，也可以选择压根不停止。具体是交给程序员来控制。

## API

- interrupt()： 将线程的中断标志位设置为true，不会停止线程
- isInterrupted(): 判断当前线程的中断标志位是否为true，不会清除中断标志位
- Thread.interrupted()：判断当前线程的中断标志位是否为true，并清除中断标志位，重置为fasle

## 利用中断机制优雅的停止线程

```java
@Override
    public void run() {
        int count = 0;
        while (!Thread.currentThread().isInterrupted() && count < 1000) {
            System.out.println("count = " + count++);
        }
        System.out.println("线程停止： stop thread");
    }
```

**注意：使用中断机制时一定要注意是否存在中断标志位被清除的情况**



## sleep 期间能否感受到中断

处于休眠中的线程被中断，线程是可以感受到中断信号的，并且会抛出一个 InterruptedException 异常，同时清除中断信号，将中断标记位设置成 false。如果不在catch中重新手动添加中断信号，不做任何处理，就会屏蔽中断请求，有可能导致线程无法正确停止。所以需要注意一下。

- sleep可以被中断 抛出中断异常：sleep interrupted， 清除中断标志位
- wait可以被中断 抛出中断异常：InterruptedException， 清除中断标志位

# 休眠线程方法

## Thread.sleep

- 必须指定休眠时间
- 休眠时线程状态为TIMED_WAITING
- 必须捕捉InterruptedException异常
- 不会释放持有的锁

## Object.wait

- 可以通过notify()唤醒，必须在wait()之后执行，否则会丢失唤醒信号量
- 休眠时线程状态为WAITING
- 必须捕捉InterruptedException异常
- 会释放持有的锁

## LockSupport.park

使用wait，notify来实现等待唤醒功能至少有两个缺点：

- wait和notify都是Object中的方法,在调用这两个方法前必须先获得锁对象，这限制了其使用场合:只能在同步代码块中。
- 当对象的等待队列中有多个线程时，notify只能随机选择一个线程唤醒，无法唤醒指定的线程

特点:

- 通过信号量实现的阻塞
- 休眠时线程状态为WAITING
- 无需捕捉InterruptedException异常，但是也会响应中断
- 不会释放持有的锁
- 可以通过unpark唤醒，unpark方法可以比park先执行，不会丢失唤醒信号
- 注意连续多次唤醒的效果和一次唤醒是一样的。

# 线程间通信

## volatile

volatile有两大特性，一是可见性，二是有序性，禁止指令重排序，其中可见性就是可以让线程之间进行通信。具体看volatile单独总结...

## 等待通知(等待唤醒)机制

- 等待唤醒机制可以基于wait和notify方法来实现，在一个线程内调用该线程锁对象的wait方法，线程将进入等待队列进行等待直到被唤醒。
- LockSupport是JDK中用来实现线程阻塞和唤醒的工具，线程调用park则等待“许可”，调用unpark则为指定线程提供“许可”。使用它可以在任何场合使线程阻塞，可以指定任何线程进行唤醒，并且不用担心阻塞和唤醒操作的顺序，但要注意连续多次唤醒的效果和一次唤醒是一样的。

## [管道输入输出流](https://www.yisu.com/zixun/526004.html)

比如可以实现异步上传文件啥的，异步序列化对象。

管道输入/输出流和普通的文件输入/输出流或者网络输入/输出流不同之处在于，它主要用于线程之间的数据传输，而传输的媒介为内存。管道输入/输出流主要包括了如下4种具体实现：PipedOutputStream、PipedInputStream、PipedReader和PipedWriter，前两种面向字节，而后两种面向字符。

## Thread.join

join可以理解成是线程合并，当在一个线程调用另一个线程的join方法时，当前线程阻塞等待被调用join方法的线程执行完毕才能继续执行，所以join的好处能够保证线程的执行顺序，但是如果调用线程的join方法其实已经失去了并行的意义，虽然存在多个线程，但是本质上还是串行的，最后join的实现其实是基于等待通知机制的。



## juc的工具类

- 一些Lock
- Blobckqueue  阻塞队列
- Semaphore   信号量
- CountDownLatch  倒计时锁
- CyclicBarrier 篱栅
- Exchanger 交换器

# 参考资料

[java多线程Thread.Sleep函数与CPU之间的关系详解](https://blog.csdn.net/weixin_45119658/article/details/90700786)

> sleep()方法导致了程序暂停执行指定的时间，让出cpu该其他线程，但是他的监控状态依然保持者，当指定的时间到了又会自动恢复运行状态。 但是不释放锁。
>
> Thread.Sleep(1000)  在未来的1000毫秒内我不想再参与到CPU竞争，但是不一定到1s后就能执行，具体还是得看cpu的调度。
>
> Thread.Sleep(0)  作用为 触发操作系统立刻重新进行一次CPU竞争。

