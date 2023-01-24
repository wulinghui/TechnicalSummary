---
title: BIO，NIO，AIO
date: 2022-02-20 14:30:50
permalink: /pages/1105f3/
categories:
  - java
  - java-se
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# BIO(Blocking IO)

同步阻塞模型，一个客户端连接对应一个处理线程

## 代码

```java
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class SocketServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(9000);
        while (true) {
            System.out.println("等待连接。。");
            //阻塞方法
            Socket clientSocket = serverSocket.accept();
            System.out.println("有客户端连接了。。");
            handler(clientSocket);

            /*new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        handler(clientSocket);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }).start();*/
        }
    }

    private static void handler(Socket clientSocket) throws IOException {
        byte[] bytes = new byte[1024];
        System.out.println("准备read。。");
        //接收客户端的数据，阻塞方法，没有数据可读时就阻塞
        int read = clientSocket.getInputStream().read(bytes);
        System.out.println("read完毕。。");
        if (read != -1) {
            System.out.println("接收到客户端的数据：" + new String(bytes, 0, read));
        }
        clientSocket.getOutputStream().write("HelloClient".getBytes());
        clientSocket.getOutputStream().flush();
    }
}
```

- Socket clientSocket = serverSocket.accept();

  >  获得客户端的连接，他会阻塞方法

- clientSocket.getInputStream().read(bytes);

  > 接收客户端的数据，阻塞方法，没有数据可读时就阻塞，一直等有数据才返回
  >
  > 改良方法把clientSocket放到线程中处理每个连接，但是阻塞的线程也有很多

## 优点

BIO 方式适用于连接数目比较小且固定的架构， 这种方式对服务器资源要求比较高，  但程序简单易理解。

## 缺点

- IO代码里read操作是阻塞操作，如果连接不做数据读写操作会导致线程阻塞，浪费资源
- 如果线程很多，会导致服务器线程太多，压力太大，比如C10K问题
- 不能支持更多的连接，特别是空闲连接.





# NIO(Non Blocking IO)

- 同步非阻塞，服务器实现模式为一个线程可以处理多个请求(连接)，客户端发送的连接请求都会注册到多路复用器selector上，多路复用器轮询到连接有IO请求就进行处理

## 代码

```java

public class NioSelectorServer {

    public static void main(String[] args) throws IOException, InterruptedException {

        // 创建NIO ServerSocketChannel
        ServerSocketChannel serverSocket = ServerSocketChannel.open();
        serverSocket.socket().bind(new InetSocketAddress(9000));
        // 设置ServerSocketChannel为非阻塞
        serverSocket.configureBlocking(false);
        // 打开Selector处理Channel，即创建epoll
        Selector selector = Selector.open();
        // 把ServerSocketChannel注册到selector上，并且selector对客户端accept连接操作感兴趣
        serverSocket.register(selector, SelectionKey.OP_ACCEPT);
        System.out.println("服务启动成功");

        while (true) {
            // 阻塞等待需要处理的事件发生
            selector.select();

            // 获取selector中注册的全部事件的 SelectionKey 实例
            Set<SelectionKey> selectionKeys = selector.selectedKeys();  // 有事件发生的集合，空闲的就不会到这里面。
            Iterator<SelectionKey> iterator = selectionKeys.iterator();

            // 遍历SelectionKey对事件进行处理
            while (iterator.hasNext()) {
                SelectionKey key = iterator.next(); 
                // 如果是OP_ACCEPT事件，则进行连接获取和事件注册
                if (key.isAcceptable()) {
                    ServerSocketChannel server = (ServerSocketChannel) key.channel();
                    SocketChannel socketChannel = server.accept();
                    socketChannel.configureBlocking(false);
                    // 这里只注册了读事件，如果需要给客户端发送数据可以注册写事件
                    socketChannel.register(selector, SelectionKey.OP_READ);
                    System.out.println("客户端连接成功");
                } else if (key.isReadable()) {  // 如果是OP_READ事件，则进行读取和打印
                    SocketChannel socketChannel = (SocketChannel) key.channel();
                    ByteBuffer byteBuffer = ByteBuffer.allocate(128);
                    int len = socketChannel.read(byteBuffer);
                    // 如果有数据，把数据打印出来
                    if (len > 0) {
                        System.out.println("接收到消息：" + new String(byteBuffer.array()));
                    } else if (len == -1) { // 如果客户端断开连接，关闭Socket
                        System.out.println("客户端断开连接");
                        socketChannel.close();
                    }
                }
                //从事件集合里删除本次处理的key，防止下次select重复处理
                iterator.remove();
            }
        }
    }
}
```

### 主流程

- 创建NIO ServerSocketChannel，设置ServerSocketChannel为非阻塞
- 获得并打开Selector
- 把ServerSocketChannel注册到selector上，并且设置selector对客户端accept连接操作感兴趣
- 阻塞等待需要处理的事件发生
- 获取selector中注册的全部事件的 SelectionKey 实例
- 遍历做不同事件的处理。

### serverSocket.configureBlocking(false);

- SocketChannel socketChannel = serverSocket.accept();// 设置获得ServerSocketChannel为非阻塞；
- 非阻塞模式accept方法不会阻塞，否则会阻塞
- NIO的非阻塞是由操作系统内部实现的，底层调用了linux内核的accept函数

### socketChannel.configureBlocking(false);

- 设置SocketChannel非阻塞
- SocketChannel.read(byteBuffer); 
- 非阻塞模式read方法不会阻塞，没有消息也会往下读，返回的len为0

## 核心对象

- SelectionKey    channel和selector关联的对象
- ServerSocketChannel  服务端Channel
- SocketChannel  客户端Channel
- Selector 多路复用器



## 几个重要方法

- Selector.open()  //创建多路复用器
- socketChannel.register(selector, SelectionKey.OP_READ)  //将channel注册到多路复用器上，只处理读的事件
- selector.select()  //阻塞等待需要处理的事件发生
- SelectionKey.channel()  //获得关联的channel



## 多路复用器/事件处理器

- OP_ACCEPT事件    // 进行连接获取和事件注册
- OP_READ事件        //  进行读取和打印
- ​        //写事件



## 核心组件

### Selector(多路复用器)

- selector 根据 channel 读写事件的发生将其交由某个空闲的线程处理

- 他底层内部会维护2个集合，一个是存所有channel，一个是一段时间内有事件的集合.

  > `selector.selectedKeys()` 有事件驱动的，才会被选出来。
  >
  > `selector.keys()`  所有注册的集合.

- 他关联的Channel分为 ServerSocketChannel ，SocketChannel

### Channel(通道)

channel 会注册到 selector 上

### Buffer(缓冲区)

每个 channel 对应一个 buffer缓冲区，buffer 底层就是个数组

### Non-blocking IO（非阻塞IO）

操作系统的非阻塞定义.



## NIO底层

### JDK1.4

#### 用linux的内核函数select()

- 遍历
- 数组结构，最大连接有上限
- 轮询所有的sockchannel，时间复杂度O(n)

#### 用linux的内核函数poll()来实现

- 遍历
- 链表，最大连接无上限
- 轮询所有的sockchannel，时间复杂度O(n)

### JDK1.5

#### 引入了epoll基于事件响应机制来优化NIO

- 回调
- 哈希表，无上限
- 事件通知方式，每当有IO事件就绪，系统注册的回调函数就会被调用，时间复杂度O(1)

## Redis/nginx线程模型

基于epoll的NIO线程模型,epoll实例收集所有事件(连接与读写事件)，由一个服务端线程连续处理所有事件命令。

## 优点

NIO方式适用于连接数目多且连接比较短（轻操作） 的架构，比如聊天服务器， 弹幕系统， 服务器间通讯

## 缺点

编程比较复杂









# AIO(NIO 2.0)

异步非阻塞， 由操作系统完成后回调通知服务端程序启动线程去处理

## 应用场景

AIO方式适用于连接数目多且连接比较长(重操作)的架构

## 原理

就是NIO + 新线程 -> 操作连接和读数据

## 为什么Netty使用NIO而不是AIO

- 在Linux系统上，AIO的底层实现仍使用Epoll，没有很好实现AIO，因此在性能上没有明显的优势，而且被JDK封装了一层不容易深度优化，Linux上AIO还不够成熟。
- Netty是异步非阻塞框架，Netty在NIO上做了很多异步的封装，有了这种功能实现了。







# epoll

## 优点

- 支持一个进程打开大数目的socket描述符
- IO效率不随FD数目增加而线性下降
- 使用mmap加速内核与用户空间的消息传递

## 工作模式

### LT

LT(level triggered，水平触发模式)是缺省的工作方式，

当epoll_wait检测到描述符事件发生并将此事件通知应用程序，应用程序可以不立即处理该事件。下次调用epoll_wait时，会再次响应应用程序并通知此事件。

### ET

(edge-triggered，边缘触发模式)是高速工作方式。

就是内核通知过的事情不会再说第二遍，数据错过没读，你自己负责。这种机制确实速度提高了，但是风险相伴而行。

## 模型API

### epoll_create

 创建一个epoll的句柄

### epoll_ctl

事件注册函数

### epoll_wait

等待事件的到来，如果检测到事件，就将所有就绪的事件从内核事件表中复制到它的第二个参数events指向的数组







# poll epoll的区别

##  从用户态和内核态，谈谈poll epoll的区别???

1.  能打开的最大连接数
2. FD多了之后的效率问题
3. 数据传递方式，用户态到内核态的拷贝次数。

[select poll epoll函数从用户态到内核态拷贝次数是多少？](https://www.zhihu.com/question/452550138)

> select poll函数会把fds从用户态拷贝到内核态，在从内核态拷贝回用户态，总共两次。 而epoll函数只会把fds从用户态拷贝到内核态，只有一次。

[趣谈网络协议栈(五)，Epoll从用户态到内核态过程分析](https://zhuanlan.zhihu.com/p/453816689)

> - 传统的select/poll的一个致命弱点是部分活跃socket，每一次扫描都会线性扫描整个socket集合，导致IO效率随fd数量线性下降
> - epoll只会经检测活跃的socket，idle状态的socket则不会；相当于实现了一个伪AIO
> - 如果所有socket基本都是活跃的，epoll并不比select/poll效率高，相反由于使用epoll_ctl效率反而下降
> - epoll使用mmap避免用户态、内核态对fd相关数据的来回copy

# 参考资料

[BIO，NIO，AIO 总结](https://blog.csdn.net/m0_38109046/article/details/89449305)

> 第4组件：Non-blocking IO（非阻塞IO） ，操作系统的非阻塞API.

[IO进化史：BIO、NIO、多路复用、select、poll、epoll](https://blog.csdn.net/qq_27184497/article/details/120957285)

[BIO，NIO，AIO的底层（select/poll以及epoll）](https://blog.csdn.net/qq_40910541/article/details/88656765)

[nio的三种实现方式：select, poll, epoll](https://www.cnblogs.com/hi3254014978/p/14156961.html)

[Linux编程之epoll](https://www.cnblogs.com/skyfsm/p/7102367.html)

> - epoll模型的优点: 
> - 两种工作模式
> - 模型API
> - epoll的一个简单使用范例
> - 带ET和LT双模式的epoll服务器
> - EPOLLONESHOT事件

