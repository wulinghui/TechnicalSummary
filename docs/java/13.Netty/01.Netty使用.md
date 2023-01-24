---
title: Netty使用
date: 2022-02-21 15:12:18
permalink: /pages/5e68c1/
categories:
  - java
  - Netty
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 简介

- NIO 的类库和 API 繁杂， 使用麻烦： 需要熟练掌握Selector、 ServerSocketChannel、 SocketChannel、 ByteBuffer等。
- 开发工作量和难度都非常大： 例如客户端面临断线重连、 网络闪断、心跳处理、半包读写、 网络拥塞和异常流的处理等等。
- Netty 对 JDK 自带的 NIO 的 API 进行了良好的封装，解决了上述问题。
- 且Netty拥有高性能、 吞吐量更高，延迟更 低，减少资源消耗，最小化不必要的内存复制等优点。
- Netty 现在都在用的是4.x，5.x版本已经废弃，Netty 4.x 需要JDK 6以上版本支持
- 它本身提供了 TCP/UDP 和 HTTP 协议栈

## 使用场景

netty相关开源项目：https://netty.io/wiki/related-projects.html

- Rocketmq
- Dubbo
- 经典的 Hadoop 的高性能通信和序列化组件 Avro 的 RPC 框架



# Netty线程模型

基于nio基础上做的封装

- Netty 抽象出两组线程池BossGroup和WorkerGroup，BossGroup专门负责接收客户端的连接, WorkerGroup专门负责网络的读写

- BossGroup和WorkerGroup类型都是NioEventLoopGroup

- NioEventLoopGroup 相当于一个事件循环**线程组**, 这个组中含有多个事件循环线程 ， 每一个事件循环线程是NioEventLoop

- 每个NioEventLoop都有一个selector , 用于监听注册在其上的socketChannel的网络通讯

- 每个Boss  NioEventLoop线程内部循环执行的步骤有 3 步

  > - 处理accept事件 , 与client 建立连接 , 生成 NioSocketChannel 
  > - 将NioSocketChannel注册到某个worker，NIOEventLoop上的selector
  > - 处理任务队列的任务 ， 即runAllTasks

- 每个worker  NIOEventLoop线程循环执行的步骤

  > - 轮询注册到自己selector上的所有NioSocketChannel 的read, write事件
  > - 处理 I/O 事件， 即read , write 事件， 在对应NioSocketChannel 处理业务
  > - runAllTasks处理任务队列TaskQueue的任务 ，一些耗时的业务处理一般可以放入TaskQueue中慢慢处理，这样不影响数据在 pipeline 中的流动处理

- 每个worker NIOEventLoop处理NioSocketChannel业务时，会使用 pipeline (管道)，管道中维护了很多 handler 处理器用来处理 channel 中的数据

# 模块组件

## Bootstrap、ServerBootstrap

Bootstrap 意思是引导，一个 Netty 应用通常由一个 Bootstrap 开始，主要作用是配置整个 Netty 程序，串联各个组件，Netty 中 Bootstrap 类是客户端程序的启动引导类，ServerBootstrap 是服务端启动引导类。

## Future、ChannelFuture

在 Netty 中所有的 IO 操作都是异步的，不能立刻得知消息是否被正确处理。

但是可以过一会等它执行完成或者直接注册一个监听，具体的实现就是通过 Future 和 ChannelFutures，他们可以注册一个监听，当操作执行成功或失败时监听会自动触发注册的监听事件。

## Channel

Netty 网络通信的组件，能够用于执行网络 I/O 操作。提供的功能

- 当前网络连接的通道的状态（例如是否打开？是否已连接？）
- 网络连接的配置参数 （例如接收缓冲区大小）
- 提供异步的网络 I/O 操作(如建立连接，读写，绑定端口)，异步调用意味着任何 I/O 调用都将立即返回，并且不保证在调用结束时所请求的 I/O 操作已完成。
- 调用立即返回一个 ChannelFuture 实例，通过注册监听器到 ChannelFuture 上，可以 I/O 操作成功、失败或取消时回调通知调用方。
- 支持关联 I/O 操作与对应的处理程序。

- 不同协议、不同的阻塞类型的连接都有不同的 Channel 类型与之对应。

>  NioSocketChannel，异步的客户端 TCP Socket 连接。
>
>  NioServerSocketChannel，异步的服务器端 TCP Socket 连接。
>
>  NioDatagramChannel，异步的 UDP 连接。 
>
> NioSctpChannel，异步的客户端 Sctp 连接。
>
>  NioSctpServerChannel，异步的 Sctp 服务器端连接。              

## Selector

Netty 基于 Selector 对象实现 I/O 多路复用，通过 Selector 一个线程可以监听多个连接的 Channel 事件。
当向一个 Selector 中注册 Channel 后，Selector 内部的机制就可以自动不断地查询(Select) 这些注册的 Channel 是否有已就绪的 I/O 事件（例如可读，可写，网络连接完成等），这样程序就可以很简单地使用一个线程高效地管理多个 Channel 。

## NioEventLoop

NioEventLoop 中维护了一个线程和任务队列，支持异步提交执行任务，线程启动时会调用 NioEventLoop 的 run 方法，执行 I/O 任务和非 I/O 任务：
I/O 任务，即 selectionKey 中 ready 的事件，如 accept、connect、read、write 等，由 processSelectedKeys 方法触发。
非 IO 任务，添加到 taskQueue 中的任务，如 register0、bind0 等任务，由 runAllTasks 方法触发。

## NioEventLoopGroup

NioEventLoopGroup，主要管理 eventLoop 的生命周期，可以理解为一个线程池，内部维护了一组线程，每个线程(NioEventLoop)负责处理多个 Channel 上的事件，而一个 Channel 只对应于一个线程。

## ChannelHandler

ChannelHandler 是一个接口，处理 I/O 事件或拦截 I/O 操作，并将其转发到其 ChannelPipeline(业务处理链)中的下一个处理程序。

建议使用它的适配器类，而不用完全实现接口。

```java
/**
 *  在channel的pipeline里如下handler：ch.pipeline().addLast(new LifeCycleInBoundHandler());
 *  handler的生命周期回调接口方法调用顺序:
 *  handlerAdded -> channelRegistered -> channelActive -> channelRead -> channelReadComplete
 *  -> channelInactive -> channelUnRegistered -> handlerRemoved
 *
 * handlerAdded: 新建立的连接会按照初始化策略，把handler添加到该channel的pipeline里面，也就是channel.pipeline.addLast(new LifeCycleInBoundHandler)执行完成后的回调；
 * channelRegistered: 当该连接分配到具体的worker线程后，该回调会被调用。
 * channelActive：channel的准备工作已经完成，所有的pipeline添加完成，并分配到具体的线上上，说明该channel准备就绪，可以使用了。
 * channelRead：客户端向服务端发来数据，每次都会回调此方法，表示有数据可读；
 * channelReadComplete：服务端每次读完一次完整的数据之后，回调该方法，表示数据读取完毕；
 * channelInactive：当连接断开时，该回调会被调用，说明这时候底层的TCP连接已经被断开了。
 * channelUnRegistered: 对应channelRegistered，当连接关闭后，释放绑定的workder线程；
 * handlerRemoved： 对应handlerAdded，将handler从该channel的pipeline移除后的回调方法。
 */
```



## ChannelHandlerContext

保存 Channel 相关的所有上下文信息，同时关联一个 ChannelHandler 对象。

## ChannelPipline

保存 ChannelHandler 的 List，用于处理或拦截 Channel 的入站事件和出站操作。
ChannelPipeline 实现了一种高级形式的拦截过滤器模式，使用户可以完全控制事件的处理方式，以及 Channel 中各个的 ChannelHandler 如何相互交互。
在 Netty 中每个 Channel 都有且仅有一个 ChannelPipeline 与之对应



# 高级功能

## 编码解码器

- 基于**ChannelHandler**组件

- Netty提供了一系列实用的编码解码器，他们都实现了ChannelInboundHadnler或者ChannelOutboundHandler接口。
- Netty提供了很多编解码器，StringEncoder/StringDecoder、ObjectEncoder/ObjectDecoder等
- [Netty——Protostuff编解码](https://www.cnblogs.com/caoweixiong/p/14685569.html)，实现高效的编解码

## 粘包拆包

### 原因

TCP是一个流协议，就是没有界限的一长串二进制数据。TCP作为传输层协议并不不了解上层业务数据的具体含义，它会根据TCP缓冲区的实际情况进行数据包的划分，所以在业务上认为是一个完整的包，可能会被TCP拆分成多个包进行发送，也有可能把多个小的包封装成一个大的数据包发送，这就是所谓的TCP粘包和拆包问题。面向流的通信是无消息保护边界的。

### 解决方案

- 消息定长度，传输的数据大小固定长度，例如每段的长度固定为100字节，如果不够空位补空格
- 在数据包尾部添加特殊分隔符，比如下划线，中划线等，这种方法简单易行，但选择分隔符的时候一定要注意每条数据的内部一定不能出现分隔符。
- 发送长度：发送每条数据的时候，将数据的长度一并发送，比如可以选择每条数据的前4位是数据的长度，应用层处理时可以根据长度来判断每条数据的开始和结束。 （也就是http协议的实现，将消息分为头部和消息体，在头部中保存有当前整个消息的长度，只有在读取到足够长度的消息之后才算是读到了一个完整的消息）
- 通过自定义协议进行粘包和拆包的处理。

### 代码类

- FixedLengthFrameDecoder（固定长度报文来分包）
- LineBasedFrameDecoder （回车换行分包）
- DelimiterBasedFrameDecoder（特殊分隔符分包）
- LengthFieldBasedFrameDecoder与LengthFieldPrepender （在生成的数据包中添加一个长度字段，用于记录当前数据包的长度。）
- 自定义粘包与拆包器



## [心跳检测机制](https://blog.csdn.net/warybee/article/details/120975334)

- 设置 `ChannelOption.SO_KEEPALIVE=true`，表示打开 TCP 的 keepAlive 设置，需要操作系统支持，linux支持

- `public IdleStateHandler(long readerIdleTime, long writerIdleTime,long allIdleTime,TimeUnit unit)`

  > - 第一个参数是隔多久检查一下读事件是否发生，如果 `channelRead()` 方法超过 readerIdleTime 时间未被调用则会触发超时事件调用 `userEventTrigger()` 方法；
  >
  > - 第二个参数是隔多久检查一下写事件是否发生，writerIdleTime 写空闲超时时间设定，如果 `write()` 方法超过 writerIdleTime 时间未被调用则会触发超时事件调用 `userEventTrigger()` 方法；
  >
  > - 第三个参数是全能型参数，隔多久检查读写事件；
  >
  > - 第四个参数表示当前的时间单位。
  >
  > 所以这里可以分别控制读，写，读写超时的时间，单位为秒，如果是0表示不检测，所以如果全是0，则相当于没添加这个 IdleStateHandler
  >
  > 心跳检测也是一种 Handler，在启动时添加到 ChannelPipeline 管道中，当有读写操作时消息在其中传递。
  >
  > 每隔5s检查一下是否有读/写事件发生，如果没有就触发 后面其他自定义的handle中的 `userEventTriggered(ChannelHandlerContext ctx, Object evt)`逻辑。

## 断线自动重连实现

### 启动时连接重试

```java
public void connect() throws Exception {
        System.out.println("netty client start。。");
        //启动客户端去连接服务器端
        ChannelFuture cf = bootstrap.connect(host, port);
        cf.addListener(new ChannelFutureListener() {
            @Override
            public void operationComplete(ChannelFuture future) throws Exception {
                if (!future.isSuccess()) {
                    //重连交给后端线程执行
                    future.channel().eventLoop().schedule(() -> {
                        System.err.println("重连服务端...");
                        try {
                            connect(); // 递归调用.
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }, 3000, TimeUnit.MILLISECONDS);
                } else {
                    System.out.println("服务端连接成功...");
                }
            }
        });
        //对通道关闭进行监听
        cf.channel().closeFuture().sync();
 }
```

### 运行中连接断开时重试

```java
public class NettyClientHandler extends ChannelInboundHandlerAdapter {

    private NettyClient nettyClient;

    public NettyClientHandler(NettyClient nettyClient) {
        this.nettyClient = nettyClient;
    }

    // channel 处于不活动状态时调用
    @Override
    public void channelInactive(ChannelHandlerContext ctx) throws Exception {
        System.err.println("运行中断开重连。。。");
        nettyClient.connect();
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        cause.printStackTrace();
        ctx.close();
    }
}
```





# 高并发高性能底层原理

- 主从Reactor线程模型

  > 把连接和处理线程分开，避免阻塞。

- NIO多路复用非阻塞

  > NIO的多路复用就是一种无锁串行化的设计思想(理解下Redis和Netty的线程模型)

- **无锁串行化**设计思想

  > 为了尽可能提升性能，在IO线程内部进行串行操作，避免多线程竞争导致的性能下降。表面上看，串行化设计似乎CPU利用率不高，并发程度不够。但是，通过调整NIO线程池的线程参数，可以同时启动多个串行化的线程并行运行，这种局部无锁化的串行线程设计相比一个队列-多个工作线程模型性能更优。
  >
  > Netty的NioEventLoop读取到消息之后，直接调用ChannelPipeline的fireChannelRead(Object msg)，只要用户不主动切换线程，一直会由NioEventLoop调用到用户的Handler，期间不进行线程切换，这种串行化处理方式避免了多线程操作导致的锁的竞争，从性能角度看是最优的。

- 支持高性能序列化协议(这个nio也可以做到.)

- 零拷贝(直接内存的使用)

  > 看看下面的连接。

- ByteBuf内存池设计

  > 因为bytebuffer分配比再jvm堆上慢，但是读写比jvm快，所以bytebuffer做了池化，还有其他的优化。

- 灵活的TCP参数配置能力

  > 合理设置TCP参数在某些场景下对于性能的提升可以起到显著的效果，例如接收缓冲区SO_RCVBUF和发送缓冲区SO_SNDBUF。如果设置不当，对性能的影响是非常大的。通常建议值为128K或者256K。
  >
  > Netty在启动辅助类ChannelOption中可以灵活的配置TCP参数，满足不同的用户场景。

- 并发优化

  > - volatile的大量、正确使用;
  > - CAS和原子类的广泛使用；
  > - 线程安全容器的使用；
  > - 通过读写锁提升并发性能。

## 直接内存

优点：

- 不占用堆内存空间，减少了发生GC的可能
- java虚拟机实现上，本地IO会直接操作直接内存（直接内存=>系统调用=>硬盘/网卡），而非直接内存则需要二次拷贝（堆内存=>直接内存=>系统调用=>硬盘/网卡）

缺点：

- 初始分配较慢
- 没有JVM直接帮助管理内存，容易发生内存溢出。为了避免一直没有FULL GC，最终导致直接内存把物理内存耗完。我们可以指定直接内存的最大值，通过-XX：MaxDirectMemorySize来指定，当达到阈值的时候，调用system.gc来进行一次FULL GC，间接把那些没有被使用的直接内存回收掉。



## 解决空轮询bug

当空轮询发生并到了阈值(默认512)的话，就重新构建新select的，并把旧select中的设置的转移到新的去。

# 参考资料

[Netty 线程模型与基本使用](https://cloud.tencent.com/developer/article/1825512)

> 使用级别代码..概念大概模糊

[Netty的Reactor线程模型实现](https://zhuanlan.zhihu.com/p/87630368)

> 概念: Reactor负责监听和分配事件，线程池负责处理事件，解耦避免阻塞。
>
> 系统的讲述了3种Reactor线程模型.

[Reactor模式到底是什么？和NIO有什么关系？为什么Redis，Netty都用到了？](https://blog.csdn.net/wenzhouxiaomayi77/article/details/106301113)

> IO多路复用使用了NIO模型
> Reactor模式使用了IO多路复用的机制
> Redis使用了单Reactor模式，6.0以后就是单Reactor模式多线程池
> Netty优化了Java的NIO并且使用了类似Reactor的模式
>
> 作者中大概意思提到了， IO多路复用只是底层提供了友好的支持，Reactor模式是上层的应用优化，也就是说如果没有IO多路复用，也可以用到Reactor模式，如异步的门面模式、异步的servlert编程，都可以看做是Reactor模式。

[Netty的核心模块组件](https://zhuanlan.zhihu.com/p/360654367)

[Netty解决粘包和拆包问题的四种方案](https://www.cnblogs.com/AIPAOJIAO/p/10631551.html)

[Netty 中的心跳检测机制](https://www.cnblogs.com/rickiyang/p/12792120.html)
[Netty 断线重连解决方案](https://www.cnblogs.com/wujinsen/p/8949299.html)

[总结最全的资料](https://www.cnblogs.com/aspirant/p/11483152.html)

> **传统意义的拷贝**
>
> 1. 数据从磁盘读取到内核的read buffer
> 2. 数据从内核缓冲区拷贝到用户缓冲区
> 3. 数据从用户缓冲区拷贝到内核的socket buffer
> 4. 数据从内核的socket buffer拷贝到网卡接口（硬件）的缓冲区
>
> **零拷贝的概念**
>
> 明显上面的第二步和第三步是没有必要的，通过java的FileChannel.transferTo方法，可以避免上面两次多余的拷贝（当然这需要底层操作系统支持）
>
> 1. 调用transferTo,数据从文件由DMA引擎拷贝到内核read buffer
> 2. 接着DMA从内核read buffer将数据拷贝到网卡接口buffer
>
> **Netty中的零拷贝**
>
> - **bytebuffer**
> - **Composite Buffers** 组合ByteBuf
> - **对于FileChannel.transferTo的使用**

[拜托！请不要再问我 Netty 底层架构原理！](https://zhuanlan.zhihu.com/p/98056056)

> - Netty 的数据容器
> - ByteBuf 工作原理
> - 三类ByteBuf
> - ByteBuf 的分配
> - ByteBuf扩容

[Netty原理：ByteBuf对Nio bytebuffer做了什么导致效率提升？](https://blog.nowcoder.net/n/4db96d92dd994107aa9d04fc7e5dbe0b)

> A 池化的方式提高内存使用率
>
> B 提出了复合型缓冲区的整合方案
>
> C 增加了索引，使读写分离，使用更便捷
>
> D 解决了ByteBuffer长度固定的问题，增加了扩容机制
>
> E 用引用计数的方式进行对象回收

[JVM直接内存(Direct Memory)](https://www.cnblogs.com/codehaogg/p/13334667.html)

> 基本概念和图不错，**里面的代码就别采用了**。

https://www.jianshu.com/p/502a1af6cf3f

[直接内存（内存溢出、释放原理）](https://juejin.cn/post/7030006174649073701)

> **虽然用了虚引用类型来实现自动回收，但是还是会OOM，最好还是要调用释放**

[JAVA的几种实现零拷贝方式](https://blog.csdn.net/weixin_42073629/article/details/107406727)

> - 缓冲区和虚拟内存
> - 零拷贝提供了两种方式 ： mmap+write方式，sendfile方式
> - Java零拷贝 ： ByteBuffer、MappedByteBuffer 、DirectByteBuffer、Unsafe；FileChannel.transferTo

[传统IO与零拷贝的几种实现](https://www.cnblogs.com/ttaall/p/14029974.html)

> - kafka实现零拷贝 : FileChannel.transferTo
> - RocketMq实现零拷贝 : MappedByteBuffer
> - Netty实现零拷贝 :  ByteBuf封装了  ：  FileChannel.transferTo  和 MappedByteBuffer

[深入浅出MappedByteBuffer](https://blog.csdn.net/qq_41969879/article/details/81629469)

> 总结: 
>
> - MappedByteBuffer使用虚拟内存，因此分配(map)的内存大小不受JVM的-Xmx参数限制，但是也是有大小限制的。
> - 如果当文件超出1.5G限制时，可以通过position参数重新map文件后面的内容。
> - MappedByteBuffer在处理大文件时的确性能很高，但也存在一些问题，如内存占用、文件关闭不确定，被其打开的文件只有在垃圾回收的才会被关闭，而且这个时间点是不确定的。

[慎用 MappedByteBuffer！](https://www.iteye.com/blog/yipsilon-298153)

[FileChannel中transferTo方法的使用](https://blog.csdn.net/shuimuya324/article/details/83955723)

> 文档解释: 
>
> 将字节从此通道的文件传输到给定的可写入字节通道。 
> 试图读取从此通道的文件中给定 position 处开始的 count 个字节，并将其写入目标通道。
> **此方法的调用不一定传输所有请求的字节**；是否传输取决于通道的性质和状态。
> 如果此通道的文件从给定的 position 处开始所包含的字节数小于 count 个字节，
> 或者如果目标通道是非阻塞的并且其输出缓冲区中的自由空间少于 count 个字节，则所传输的字节数要小于请求的字节数。 
> 此方法不修改此通道的位置。如果给定的位置大于该文件的当前大小，则不传输任何字节。
> 如果目标通道中有该位置，则从该位置开始写入各字节，然后将该位置增加写入的字节数。 
> 与从此通道读取并将内容写入目标通道的简单循环语句相比，此方法可能高效得多。
> 很多操作系统可将字节直接从文件系统缓存传输到目标通道，**而无需实际复制各字节**。
> 总结:
>
> 如何用transferTo方法传输任意大小的数据的问题有待解决

ByteBuf核心扩容方法

> 采用步进4MB的方式完成扩容，采用64为基数，做倍增的方式完成扩容。最后再+4的扩容。
>
> 采用步进4MB的方式完成扩容，先翻倍。 4 -> 8 -> 16 -> ...
>
> 到了阈值就开始 +4的完成扩容。  防止内存爆了。   如  256 -> 512 -> 1024 这可不行。

