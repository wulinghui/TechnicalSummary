---
title: Lock
date: 2022-02-13 22:53:54
permalink: /pages/107c2e/
categories:
  - java
  - java-se
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# Lock顶层API

锁相关操作API

- void lock();

  > - 接口不返回任何值
  > - 如果没有其他线程占用该锁，则立即获取该锁，并设置锁的持有数为1
  > - 如果当前线程已经获取了该锁，可以重新再获取一次（可重入），但是锁的持有数加1
  > - 如果锁被其他线程持有，则该线程进入休眠等待，直到获取到锁为止，获取后设置锁的持有数为1
  > - 锁的公平策略：决定于构造器传入的参数，默认不公平，public ReentrantLock(boolean fair)
  > - 不会被中断，不会抛出InterruptedException
  >   

- [void lockInterruptibly() throws InterruptedException;](https://www.cnblogs.com/deltadeblog/p/9566781.html)   // 可以被中断的方式来获取锁的方法

  > 获取锁，除非当前线程被中断。
  >
  > 获取锁（如果可用）并立即返回。
  >
  > 如果锁不可用，则出于线程调度目的，当前线程将被禁用，并处于休眠状态，直到发生以下两种情况之一：
  >
  > ​		1. 锁被当前线程获取；
  >
  > ​		2. 其他线程会中断当前线程，并且支持中断锁获取。
  >
  > 
  >
  >
  > 如果当前线程：
  >
  > ​		1. 在进入该方法时设置其中断状态；或
  >
  > ​		2. 在获取锁时被中断，并且支持中断获取锁，
  >
  > 然后抛出InterruptedException，并清除当前线程的中断状态。
  >
  > 实施使用时考虑：
  >
  > 在某些实现中，中断锁获取的能力可能是不可能的，如果可能的话，这可能是一个昂贵的操作。程序员应该意识到可能是这样的。在这种情况下，实现应该记录下来。
  >
  > 与正常的方法(@see #lock)返回相比，实现更倾向于响应中断。
  >
  > 锁实现可能能够检测锁的错误使用，例如可能导致死锁的调用，并且在这种情况下可能引发（未经检查的）异常。环境和异常类型必须由该锁实现记录。

- boolean tryLock();              

  > - 立即获取锁（当前被调用时刻），他跟 lock() 的最大区别是不等，当前能获取就获取，不能就拉倒
  > - 如果当前线程已经持有该锁，则返回true，并且对锁持有数加1
  > - 如果锁正在被占用，返回false
  > - 忽略公平原则：比如目前有几个线程在等待这个锁，当持有的线程释放了，tryLock()的线程一定获得锁，即使设置了公平策略，也会忽略。
  > - 这个"非公平获取锁"的行为在某些情况是有用的，即使它打破了公平原则。如果你想公平，使用 tryLock(0,TimeUnit.SECONDS)
  > - **不会被中断**，不会抛出`InterruptedException`

- boolean tryLock(long time, TimeUnit unit) throws InterruptedException;

  > - 跟tryLock() 不同的地方是它在锁被占用时会等一段时间
  > - 如果timeout设置为<=0，则方法不等待
  > - 跟tryLock()最大的不同点是关于公平的问题，如果设置了公平锁，假如现在释放了锁，它和一群等待中的线程无差别，它也得遵循遵循原则。
  > - 如果当前线程已经获取了锁，返回true，并对锁的持有数加1
  >
  > - 会被中断，可能会抛出InterruptedException（lock()和tryLock()不会）

- void unlock();

  > - 无返回值
  > - 如果当前线程是锁的所有者，释放锁，锁的持有数减1（不一定减后就是0，因为可重入，当前这次unlock不一定减后为0）
  > - 如果当前线程是锁的所有者，如果当前锁的持有数已经是0，再unlock就抛IllegalMonitorStateException，因为如果是0，表示当前线程不持有这个锁，不是这个锁的持有者去unlock()就会抛出异常。

- Condition newCondition(); 

  > - 返回关联这个锁的Condition实例
  > - 可以多次调用得到多个Condition实例
  > - Condition的作用类似于线程间的通信`wait()`、`notify()`、`notifyAll()`

# ReadWriteLock顶层API

获得读写锁接口

- Lock readLock();
- Lock writeLock();



# Lock原理

自旋，LocksSuport, AQS (CAS，queue队列 ) 

# 锁的分类

- 公平锁/非公平锁

- 可重入锁

- 独享锁/共享锁

  > 共享锁一般都不实现重入功能

- 乐观锁/悲观锁

- 分段锁

- 偏向锁/轻量级锁/重量级锁

- 自旋锁

# ReentrantLock

它的功能类似于synchronized是一种非公平性互斥锁，可以保证线程安全

它支持手动加锁与解锁，还支持加锁的公平性

## [ReentrantLock和synchronized 异同](https://blog.csdn.net/suifeng629/article/details/106159163)


相同点:

- Lock能完成synchronized所实现的所有功能

- 非公平的互斥/独占锁

- [Java多线程之Lock锁的线程交互](https://blog.csdn.net/carson0408/article/details/79439462)

  > 使用synchronized方式进行线程交互，用到的是同步对象的wait,notify和notifyAll方法
  >
  > Lock也提供了类似的解决办法，首先通过lock对象得到一个Condition对象，然后分别调用这个Condition对象的：await, signal,signalAll 方法
  >
  > 注意： 不是Condition对象的wait,nofity,notifyAll方法,是await,signal,signalAll

- 都可重入

- 使得同步执行

- 都可中断正在执行的线程.

不同点: 

> - synchronized是JVM层次的锁实现，ReentrantLock是JDK层次的锁实现；(synchronized 是Java的一个内置关键字，而ReentrantLock是Java的一个类。)
> - synchronized的锁状态是无法在代码中直接判断的，但是ReentrantLock可以通过ReentrantLock#isLocked判断；
> - synchronized是非公平锁，ReentrantLock是可以是公平也可以是非公平的；
> - synchronized是不可以被中断的，而ReentrantLock#lockInterruptibly方法是可以被中断的；(synchronized不能中断一个等待锁的线程，而Lock可以中断一个试图获取锁的线程。)
> - 在发生异常时synchronized会自动释放锁，而ReentrantLock需要开发者在finally块中显示释放锁；
> - ReentrantLock获取锁的形式有多种：如立即返回是否成功的tryLock(),以及等待指定时长的获取，更加灵活；
> - synchronized不能设置超时，而Lock可以设置超时。
> - synchronized在特定的情况下对于已经在等待的线程是后来的线程先获得锁（回顾一下sychronized的唤醒策略），而ReentrantLock对于已经在等待的线程是先来的线程先获得锁；

## ReentrantLock源码分析

1. ReentrantLock加锁解锁的逻辑

2. 公平和非公平，可重入锁的实现

3. 线程竞争锁失败入队阻塞逻辑和获取锁的线程释放锁唤醒阻塞线程竞争锁的逻辑实现 （ 设计的精髓：并发场景下入队和出队操作）



## 如何实现公平

hasQueuedPredecessors() 判断阻塞队列不为空，则排到阻塞队列末尾等待



## 如何实现非公平

```java
static final class NonfairSync extends Sync { 
	final void lock() {
      //  1 和公平锁相比，这里会直接先进行一次CAS，如果当前正好没有线程持有锁，
      // 如果成功获取锁就直接返回了，就不用像公平锁那样一定要进行后续判断,所以效率更高。
      // 说白了，就是第一次插队，如果插不进去就乖乖的排队了。
        if (compareAndSetState(0, 1))
            setExclusiveOwnerThread(Thread.currentThread());
        else
            acquire(1); // 
    }
}    
```

这也是为啥默认无参构造，采用使用非公平的原因。



# ReentrantReadWriteLock

## 介绍

读写锁，现实中有这样一种场景：对共享资源有读和写的操作，且写操作没有读操作那么频繁（读多写少）。在没有写操作的时候，多个线程同时读一个资源没有任何问题，所以应该允许多个 线程同时读取共享资源（读读可以并发）；但是如果一个线程想去写这些共享资源，就不应该允许其他线程对该资源进行读和写操作了（读写，写读，写写互斥）。在读多于写的情况下， 读写锁能够提供比排它锁更好的并发性和吞吐量。
针对这种场景，JAVA的并发包提供了读写锁ReentrantReadWriteLock，它内部，维护了 一对相关的锁，一个用于只读操作，称为读锁；一个用于写入操作，称为写锁，描述如下：

- 线程进入读锁的前提条件：

  > 1. 没有其他线程的写锁
  > 2. 没有写请求或者有写请求，但调用线程和持有锁的线程是同一个。
  > 3. 线程进入写锁的前提条件
  > 4. 没有其他线程的读锁 没有其他线程的写锁

- 线程进入写锁的前提条件：

  > 1. 没有其他线程的读锁
  > 2. 没有其他线程的写锁

读写锁有以下三个重要的特性：

- 公平选择性：支持非公平（默认）和公平的锁获取方式，吞吐量还是非公平优于公平。 
- 可重入：读锁和写锁都支持线程重入。以读写线程为例：读线程获取读锁后，能够 再次获取读锁。写线程在获取写锁之后能够再次获取写锁，同时也可以获取读锁。
- 锁降级：遵循获取写锁、再获取读锁最后释放写锁的次序，写锁能够降级成为读锁。

## 类结构

ReadWriteLock接口的实现，ReentrantReadWriteLock是可重入的读写锁实现类。在它内部，维护了一对相关的锁， 一个用于只读操作，另一个用于写入操作。只要没有 Writer 线程，读锁可以由多个 Reader 线 程同时持有。也就是说，写锁是独占的，读锁是共享的。

## 如何使用

注意事项：

- 读锁不支持条件变量
- 重入时升级不支持：持有读锁的情况下去获取写锁，会导致获取永久等待
- 重入时支持降级： 持有写锁的情况下可以去获取读锁



## [锁降级](https://blog.csdn.net/weixin_30618985/article/details/101434291)



# 参考资料

- [ReentrantLock公平与非公平锁如何实现](https://blog.csdn.net/qq_37908402/article/details/89431344)
- [公平锁和非公平锁-ReentrantLock是如何实现公平、非公平的](https://blog.csdn.net/Kurry4ever_/article/details/109561095)

> 1、什么是公平锁与非公平锁
> 2、ReentrantLock如何实现公平与非公平
> 3、公平锁与非公平锁性能对比

- [线程的中断(Lock与synchronized)](https://www.cnblogs.com/happyflyingpig/p/9716055.html)

> **你能够中断对sleep的调用（或者任何要求抛出InterruptedException的调用）。但是你不能中断正在试图获取synchronized锁或者正在试图执行IO操作的线程**，这个Lock可以。

- [Lock的API说明](https://blog.csdn.net/w8y56f/article/details/89554309)

  > 如果你既想要不公平，又想要设置timeout，则这么使用
  >
  > ```java
  > if (lock.tryLock() ||
  >     lock.tryLock(timeout, unit)) {
  > ...
  > }
  > ```

[(转)lockInterruptibly 和lock的区别](http://blog.sina.com.cn/s/blog_8588208901015dwv.html)

> 展示了lockInterruptibly 、lock、tryLock、tryLock（time）被中断的情况。
> 这里有个细节: 再被中断时，如果再finally编写执行lock.unlock()   是会报错。

