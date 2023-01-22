---
title: UDP
date: 2022-02-26 16:11:59
permalink: /pages/875551/
categories:
  - 基础与理论
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---


# 简介

UDP是**传输层**的协议，功能即为在IP的数据报文服务之上增加了最基本的服务：**复用**和**分用**以及**差错检测**。

# 特点

- 是无连接的，用一次就断了。相比于TCP协议，UDP协议在传送数据前不需要建立连接，当然也就没有释放连接。
- 是尽最大努力交付的。也就是说UDP协议无法保证数据能够准确的交付到目的主机。也不需要对接收到的UDP报文进行确认。
- 是面向报文的。也就是说UDP协议将应用层传输下来的数据封装在一个UDP包中，不进行拆分或合并。因此，运输层在收到对方的UDP包后，会去掉首部后，将数据原封不动的交给应用进程。
- 没有拥塞控制。因此UDP协议的发送速率不送网络的拥塞度影响。
- UDP支持一对一、一对多、多对一和多对多的交互通信。
- UDP的头部占用较小，只占用8个字节，TCP首部20字节。

# 应用场景

- UDP也常用于多媒体应用（如IP电话，实时视频会议，流媒体等）数据的可靠传输对他们而言并不重要，TCP的拥塞控制会使他们有较大的延迟，也是不可容忍的
- DNS如果运行在TCP之上而不是UDP，那么DNS的速度将会慢很多

# 总结

- 和TCP的相比，就是以速度为主，放弃可靠性。
- UDP常用于**一次性**的，**传输少量数据**的，**容许丢失**的、网络应用。
- 或者说是网络波动特别大，tcp动不动就要重发，断线再握手，服务端也要重发发ACK，对2端都不友好。



# 首部格式

![](https://img-blog.csdnimg.cn/20181226160325166.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2FhMTkyODk5Mjc3Mg==,size_16,color_FFFFFF,t_70)

# 传输过程

注意: 他们没有连接，也就是说他是单向的，谁都是客户端和服务端。

客户端 -> 发送消息  -> 接收数剧(可选) -> 关闭套接字

服务端 -> 接收数剧  ->   发送消息 -> 关闭套接字

**还有:** 当传输层从IP层收到UDP数据报时，就根据首部中的目的端口，把UDP数据报通过相应的端口，上交给应用进程。
如果接收方UDP发现收到的报文中的目的端口号不正确（不存在对应端口号的应用进程0,），就丢弃该报文，并由ICMP发送“端口不可达”差错报文给对方。 ICMP是网络层协议，第三层的，在udp层是不知道的哟。 也就是说udp只管发，错了我也不知道，也不管。



**但是**一般编程是会写客户端和服务器，来接收和响应数据的，如下图。

![](https://img-blog.csdnimg.cn/20201017230229558.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzODEyODY4,size_16,color_FFFFFF,t_70#pic_center)



# java编码

```java

class Test{
    public static void main(String[] args)throws IOException{
        //定义udp数据套接字，监听端口.
        DatagramSocket  server = new DatagramSocket(5050);
        //作为服务端，接收数据，并放到DatagramPacket，数组中存放
        server.receive(recvPacket); // 这里会阻塞，直到有消息。
        
        /*
        作为客户端，
        定义数据的发送
        */
        //通过接收到的数据包	获取发送方的端口
        int port = recvPacket.getPort();
        //通过接收到的数据包	获取发送方的ip地址
        InetAddress addr = recvPacket.getAddress();
        //封装需要发送的udp数据包
        DatagramPacket sendPacket 
            = new DatagramPacket("Recv Msg" , sendBuf.length , addr , port );
        //发送数据包
        server.send(sendPacket);  // 这里也不会阻塞..只管发

    }
}

```



# 参考资料

[UDP传输协议](https://blog.csdn.net/u011532367/article/details/50544106)

> 大致传输流程，和java代码

[UDP协议的详细解析](https://blog.csdn.net/aa1928992772/article/details/85240358)

> 优势介绍、首部格式、UDP校验。
>
> **常用一次性传输比较少量数据的网络应用**

[UDP介绍](https://blog.csdn.net/chengfengwenalan/article/details/84496477)

> UDP协议介绍
> UDP数据包格式
> IP协议介绍
> 用户数据、 UDP、 IP、 MAC 四个报文的关系

[Java实现UDP通信](https://www.jianshu.com/p/89b5737347f7)