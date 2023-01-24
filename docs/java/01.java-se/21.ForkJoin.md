---
title: ForkJoin
date: 2022-02-14 16:09:20
permalink: /pages/32e109/
categories:
  - java
  - java-se
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---


# 任务性质类型

## CPU密集型（CPU-bound）

- 指的是系统的硬盘、内存性能相对CPU要好很多
- 线程数一般设置为：线程数 = CPU核数+1 (现代CPU支持超线程)

## IO密集型（I/O bound）

- 指的是系统的CPU性能相对硬盘、内存要好很多
- 线程数一般设置为：线程数 = （（线程等待时间+线程CPU时间）/线程CPU时间 ）* CPU数目 

## CPU密集型 vs IO密集型

- 计算密集型任务由于主要消耗CPU资源，因此，代码运行效率至关重要
- 第二种任务的类型是IO密集型，涉及到网络、磁盘IO的任务都是IO密集型任务，这类任务的特点是CPU消耗很少，任务的大部分时间都在等待IO操作完成（因为IO的速度远远低于CPU和内存的速度）。

# Fork/Join

- Java7 提供了的一个用于并行执行任务的框架， 是一个把大任务分割成若干个小任务，最终汇总每个小任务结果后得到大任务结果的框架。
- Fork 就是把一个大任务切分为若干子任务并行的执行，Join 就是合并这些子任务的执行结果，最后得到这个大任务的结果。
- 最佳应用场景：多核、多内存、可以分割计算再合并的计算密集型任务

## 特性

- ForkJoinPool 不是为了替代 ExecutorService，而是它的补充，在某些应用场景下性能比 ExecutorService 更好。
- ForkJoinPool 主要用于实现“分而治之”的算法，特别是分治之后递归调用的函数
- ForkJoinPool 最适合的是计算密集型的任务，如果存在 I/O，线程间同步，sleep() 等会造成线程长时间阻塞的情况时，最好配合使用 ManagedBlocker

# 工作窃取算法

- 定义:::  是指某个线程从其他队列里窃取任务来执行
- 理论::: 有的线程会先把自己队列里的任务干完，而其他线程对应的队列里还有任务等待处理。干完活的线程与其等着，不如去帮其他线程干活，于是它就去其他线程的队列里窃取一个任务来执行。
- 实现:::: 通常会使用双端队列，被窃取任务线程永远从双端队列的头部拿任务执行，而窃取任务的线程永远从双端队列的尾部拿任务执行

## 工作流程

- ForkJoinPool 的每个工作线程都维护着一个工作队列（WorkQueue），这是一个双端队列（Deque），里面存放的对象是任务（ForkJoinTask）
- 每个工作线程在运行中产生新的任务（通常是因为调用了 fork()）时，会放入工作队列的队尾，并且工作线程在处理自己的工作队列时，使用的是 LIFO 方式，也就是说每次从队尾取出任务来执行
- 每个工作线程在处理自己的工作队列同时，会尝试窃取一个任务（或是来自于刚刚提交到 pool 的任务，或是来自于其他工作线程的工作队列），窃取的任务位于其他线程的工作队列的队首，也就是说工作线程在窃取其他工作线程的任务时，使用的是 FIFO 方式
- 在遇到 join() 时，如果需要 join 的任务尚未完成，则会先处理其他任务，并等待其完成
- 在既没有自己的任务，也没有可以窃取的任务时，进入休眠





# ForkJoinTask

内置的实现类有：

- RecursiveAction  用于没有返回结果的任务。
- RecursiveTask    用于有返回结果的任务。
- CountedCompleter  在任务完成执行后会触发执行一个自定义的钩子函数

# API

- fork()方法

  > 将任务放入队列并安排异步执行，一个任务应该只调用一次fork()函数，除非已经执行完毕并重新初始化。

- tryUnfork()方法

  > 尝试把任务从队列中拿出单独处理，但不一定成功。

- join()方法

  > 等待计算完成并返回计算结果。
  >
  > - 可以使得线程免于被阻塞的原因——不像同名的 Thread.join()
  > - 检查调用 join() 的线程是否是 ForkJoinThread 线程。如果不是（例如 main 线程），则阻塞当前线程，等待任务完成。如果是，则不阻塞。
  > - 查看任务的完成状态，如果已经完成，直接返回结果。
  > - 如果任务尚未完成，但处于自己的工作队列内，则完成它。
  > - 如果任务已经被其他的工作线程偷走，则窃取这个小偷的工作队列内的任务（以 FIFO 方式），执行，以期帮助它早日完成欲 join 的任务。
  > - 如果偷走任务的小偷也已经把自己的任务全部做完，正在等待需要 join 的任务时，则找到小偷的小偷，帮助它完成它的任务。
  > - 递归地执行第5步。

- isCompletedAbnormally()方法

  > 用于判断任务计算是否发生异常。

- [submit 方法](https://vimsky.com/examples/detail/java-method-java.util.concurrent.ForkJoinPool.submit.html)

## 异常处理

ForkJoinTask 在执行的时候可能会抛出异常，但是我们没办法在主线程里直接捕获异常，所以 ForkJoinTask 提供了 isCompletedAbnormally() 方法来检查任务是否已经抛出异常或已经被取消了，并且可以通过 ForkJoinTask 的 getException 方法获取异常。

## ForkJoinPool构造函数

- parallelism

  > 并行度（ the parallelism level），默认情况下跟我们机器的cpu个数保持一致

- ForkJoinWorkerThreadFactory

  > 创建新线程的工厂，默认情况下使用ForkJoinWorkerThreadFactory defaultForkJoinWorkerThreadFactory

- handler

  > 线程异常情况下的处理器（Thread.UncaughtExceptionHandler handler），该处理器在线程执行任务时由于某些无法预料到的错误而导致任务线程中断时进行一些处理，默认情况为null。

- asyncMode

  > 工作线程内的任务队列是采用何种方式进行调度，可以是先进先出FIFO，也可以是后进先出LIFO。如果为true，则线程池中的工作线程则使用先进先出方式进行任务调度，默认情况下是false。





# [fork/join框架原理](https://blog.csdn.net/tyrroo/article/details/81483608)

ForkJoinPool 的内部状态都是通过一个64位的 long 型 变量ctl来存储，它由四个16位的子域组成:

- - 

# 参考资料

[java进阶笔记线程与并发之CountedCompleter](https://blog.csdn.net/huitoukest/article/details/102673219)

[一文秒懂 Java Fork/Join](https://www.twle.cn/c/yufei/javatm/javatm-basic-forkjoin.html)

[ForkJoinPool invoke、execute和submit区别](https://blog.csdn.net/Thousa_Ho/article/details/89164259)

