---
title: Unsafe&Atomic
date: 2022-02-12 10:30:23
permalink: /pages/27f771/
categories:
  - java
  - java-se
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---




[TOC]



# Unsafe魔法类

主要提供一些用于执行低级别、不安全操作的方法，**且可能会被废弃，非要使用建议使用工具类封装一下**

## 功能介绍

### 内存操作

- 堆外内存的分配、拷贝、释放、给定地址值操作等方法
- 设置给定地址值中的值
- 使用堆外内存的原因

### CAS

[原理：见连接](https://zhuanlan.zhihu.com/p/104179990)

CAS依赖汇编指令：cmpxchg()

优点: 无锁的实现原子性操作

缺点: 

- 一般会用空循环，代表锁，循环时间长开销很大
- 只能保证一个变量的原子操作
- 什么是ABA问题？ABA问题怎么解决？

### Class相关

- 动态创建类(普通和匿名类)
- 获取Field的内存地址偏移量
- 检测、确保类的初始化

### 对象操作

- 获取对象成员属性在内存的偏移量
- 非常规对象实例化
- 存储、获取指定偏移地址的变量值

### 线程调度

- 线程挂起、恢复、锁机制

- 阻塞线程

  > void park(boolean isAbsolute, long time)
  >
  > 这里和Thread.yeld()不同，yeild是回到就绪状态，可以接着运行

- 取消阻塞线程

  > void unpark(Object thread)
  >
  > 方法park、unpark即可实现线程的挂起与恢复，将一个线程进行挂起是通过park方法实现的，调用park方法后，线程将一直阻塞直到超时或者中断等条件出现；unpark可以终止一个挂起的线程，使其恢复正常。

- 获得对象锁（可重入锁）

  > void monitorEnter(Object o)

- 尝试获取对象锁

  > boolean tryMonitorEnter(Object o)

- 释放对象锁

  > boolean tryMonitorEnter(Object o)

  应用场景：
  LockSupport.park()和LockSupport.unpark()实现线程的阻塞和唤醒的

### 系统信息获取

- 返回内存页大小
- 返回系统指针大小

### 内存屏障

- 同volite,他会禁止load、store的重排

- [StampedLock](https://www.liaoxuefeng.com/wiki/1252599548343744/1309138673991714)

  > jdk1.8提供的提供了一种乐观读锁的实现，这种乐观读锁类似于无锁的操作，完全不会阻塞写线程获取写锁，从而缓解读多写少时写线程“饥饿”现象。

### 数组操作

- 返回数组元素内存大小
- 返回数组首元素偏移地址

## 获取Unsafe实例

- Unsafe.getUnsafe 

  > java -Xbootclasspath/a:${path}   // 其中path为调用Unsafe相关方法的类所在jar包路径 

- 建议通过反射获取单例对象theUnsafe





# Atomic

Atomic包里的类基本都是使用Unsafe实现的cas算法的包装类

## 基本类

### AtomicInteger : 原子更新整型

API:

```java
int addAndGet(int delta)  // 以原子方式将输入的数值与实例中的值（AtomicInteger里的value）相加，并返回结果
boolean compareAndSet(int expect, int update)  //     如果输入的数值等于预期值，则以原子方式将该值设置为输入的值。
int getAndIncrement() //以原子方式将当前值加1，注意：这里返回的是自增前的值。
void lazySet(int newValue) //最终会设置成newValue，使用lazySet设置值后，可能导致其他线程在之后的一小段时间内还是可以读到旧的值。    
int getAndSet(int newValue)  //以原子方式设置为newValue的值，并返回旧值。  
```

### AtomicBoolean : 原子更新布尔类型

AtomicBoolean源码，发现其是先把Boolean转换成整型，再使用compareAndSwapInt进行CAS

### AtomicLong  : 原子更新长整型

### 其他基本类型 :   



## 数组类

### AtomicIntegerArray 

原子更新整型数组里的元素

API：

```java
int addAndGet(int i, int delta) //以原子方式将输入值与数组中索引i的元素相加。
boolean compareAndSet(int i, int expect, int update) // 如果当前值等于预期值，则以原子方式将数组位置i的元素设置成update值。
```

### AtomicLongArray  

原子更新长整型数组里的元素

### AtomicReferenceArray

 原子更新引用类型数组里的元素



## 更新字段类

原子更新字段类都是抽象类，每次使用都时候必须使用静态方法newUpdater创建一个更新器。原子更新类的字段的必须使用public volatile修饰符。

### AtomicIntegerFieldUpdater 

原子更新整型的字段的更新器。

### AtomicLongFieldUpdater

原子更新长整型字段的更新器。

### AtomicStampedReference

原子更新带有版本号的引用类型。该类将整数值与引用关联起来，可用于原子的更数据和数据的版本号，可以解决使用CAS进行原子更新时，可能出现的ABA问题。

### AtomicMarkableReference

AtomicMarkableReference可以理解为上面AtomicStampedReference的简化版，就是 不关心修改过几次，仅仅关心是否修改过。因此变量mark是boolean类型，仅记录值是否有过修 改



## 原子类型累加器

类似forkjoin，采用分治思想，减少cas的空循环，来提高效率。适用于数量大的操作..

### DoubleAccumulator

### DoubleAdder

### LongAccumulator

### LongAdder

LongAdder引入的初衷——解决高并发环境下AtomicInteger， AtomicLong的自旋瓶颈问题。

### Striped64

