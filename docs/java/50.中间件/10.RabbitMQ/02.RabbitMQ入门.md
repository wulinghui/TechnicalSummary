---
title: RabbitMQ入门
date: 2022-02-19 20:43:51
permalink: /pages/4e0755/
categories:
  - java
  - 中间件
  - RabbitMQ
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 相关概念

## Broker

接收和分发消息的应用，RabbitMQ Server就是 Message Broker

## Virtual host

出于多租户和安全因素设计的，把 AMQP 的基本组件划分到一个虚拟的分组中，类似于网络中的 namespace 概念。当多个不同的用户使用同一个 RabbitMQ server 提供的服务时，可以划分出多个vhost，每个用户在自己的 vhost 创建 exchange／queue 等

## Connection

publisher／consumer 和 broker 之间的 TCP 连接

## Channel

如果每一次访问 RabbitMQ 都建立一个 Connection，在消息量大的时候建立 TCP Connection的开销将是巨大的，效率也较低。Channel 是在 connection 内部建立的逻辑连接，如果应用程序支持多线程，通常每个thread创建单独的 channel 进行通讯，AMQP method 包含了channel id 帮助客户端和message broker 识别 channel，所以 channel 之间是完全隔离的。Channel 作为轻量级的 Connection 极大减少了操作系统建立 TCP connection 的开销

## Exchange

message 到达 broker 的第一站，根据分发规则，匹配查询表中的 routing key，分发消息到queue 中去。常用的类型有：direct (point-to-point), topic (publish-subscribe) and fanout (multicast)

## Queue

消息最终被送到这里等待 consumer 取走 

## Binding

exchange 和 queue 之间的虚拟连接，binding 中可以包含 routing key。Binding 信息被保存到 exchange 中的查询表中，用于 message 的分发依据



# [工作模式](https://zhuanlan.zhihu.com/p/366540198)

## 简单模式

- 做最简单的事情，一个生产者对应一个消费者，RabbitMQ相当于一个消息代理，负责将A的消息转发给B
- 类似一个邮箱，可以缓存消息；生产者向其中投递消息，消费者从其中取出消息
- **应用场景：**将发送的电子邮件放到消息队列，然后邮件服务在队列中获取邮件并发送给收件人

## work queues

- 与入门程序的简单模式相比，多了一个或一些消费端，多个消费端共同消费同一个队列中的消息。
- 在多个消费者之间分配任务（竞争的消费者模式），一个生产者对应多个消费者，一般适用于执行资源密集型任务，单个消费者处理不过来，需要多个消费者进行处理
- 在一个队列中如果有多个消费者，那么消费者之间对于同一个消息的关系是**竞争**的关系。
- **Work Queues** 对于任务过重或任务较多情况使用工作队列可以提高任务处理的速度。例如：短信服务部署多个，只需要有一个节点成功发送即可。
- **应用场景**：对于任务过重或任务较多情况使用工作队列可以提高任务处理的速度。
- **应用场景：** 一个订单的处理需要10s，有多个订单可以同时放到消息队列，然后让多个消费者同时处理，这样就是并行了，而不是单个消费者的串行情况

## Publish/Subscribe发布与订阅模式

### 定义

- 一次向许多消费者发送消息，一个生产者发送的消息会被多个消费者获取，也就是将一条消息将广播到**所有**的消费者中。
- 交换机需要与队列进行绑定，绑定之后；一个消息可以被多个消费者都收到。

## 与工作队列模式的区别

- 工作队列模式不用定义交换机，而发布/订阅模式需要定义交换机

- 发布/订阅模式的生产方是面向交换机发送消息，工作队列模式的生产方是面向队列发送消息(底层使用默认交换机)

- 发布/订阅模式需要设置队列和交换机的绑定，工作队列模式不需要设置，实际上工作队列模式会将队列绑 定到默认的交换机 

### **应用场景：**

###  更新商品库存后需要通知多个缓存和多个数据库，这里的结构应该是：

- 一个fanout类型交换机扇出两个个消息队列，分别为缓存消息队列、数据库消息队列
- 一个缓存消息队列对应着多个缓存消费者
- 一个数据库消息队列对应着多个数据库消费者

### 流程

- 在订阅模型中，多了一个 Exchange 角色，而且过程略有变化：

- P：生产者，也就是要发送消息的程序，但是不再发送到队列中，而是发给X（交换机）

- C：消费者，消息的接收者，会一直等待消息到来

- Queue：消息队列，接收消息、缓存消息

- Exchange：交换机（X）。一方面，接收生产者发送的消息。另一方面，知道如何处理消息，例如递交给某个特别队列、递交给所有队列、或是将消息丢弃。到底如何操作，取决于Exchange的类型。

- Exchange有常见以下3种类型：

  >  Fanout：广播，将消息交给所有绑定到交换机的队列
  >
  > Direct：定向，把消息交给符合指定routing key 的队列
  >
  > Topic：通配符，把消息交给符合routing pattern（路由模式） 的队列

  **Exchange**（交换机）只负责转发消息，不具备存储消息的能力，因此如果没有任何队列与 Exchange 绑定，或者没有符合路由规则的队列，那么消息会丢失！

  

## Routing 路由模式

### 定义

- **Routing** 模式要求队列在绑定交换机时要指定 **routing key**，消息会转发到符合 routing key 的队列。
- 有选择地（Routing key）接收消息，发送消息到交换机并且要指定路由key ，消费者将队列绑定到交换机时需要指定路由key，仅消费指定路由key的消息

### 过程

- P：生产者，向 Exchange 发送消息，发送消息时，会指定一个routing key
- X：Exchange（交换机），接收生产者的消息，然后把消息递交给与 routing key 完全匹配的队列
- C1：消费者，其所在队列指定了需要 routing key 为 error 的消息
- C2：消费者，其所在队列指定了需要 routing key 为 info、error、warning 的消息

### **应用场景**

如在商品库存中增加了1台iphone12，iphone12促销活动消费者指定routing key为iphone12，只有此促销活动会接收到消息，其它促销活动不关心也不会消费此routing key的消息

## Topics 主题模式

### 定义

Topic 主题模式可以实现 Pub/Sub 发布与订阅模式和 Routing 路由模式的功能，只是 Topic 在配置routing key 的时候可以使用通配符，显得更加灵活。

### 注意

- Topic 类型与 Direct 相比，都是可以根据 RoutingKey 把消息路由到不同的队列。只不过 Topic 类型Exchange 可以让队列在绑定 Routing key 的时候使用**通配符**！

- Routingkey 一般都是有一个或多个单词组成，多个单词之间以”.”分割，例如： item.insert

- 通配符规则：# 匹配一个或多个词，* 匹配不多不少恰好1个词，例如：item.# 能够匹配 item.insert.abc 或者 item.insert，item.* 只能匹配 item.insert

### **应用场景**

 同上，iphone促销活动可以接收主题为iphone的消息，如iphone12、iphone13等



## RPC 远程调用模式

- 在远程计算机上运行功能并等待结果就可以使用RPC
- 基本不用他的。

### 应用场景

需要等待接口返回数据，如订单支付

## Publisher Confirms 发布者确认

### 定义

- 与发布者进行可靠的发布确认，发布者确认是RabbitMQ扩展，可以实现可靠的发布。在通道上启用发布者确认后，RabbitMQ将异步确认发送者发布的消息，这意味着它们已在服务器端处理。

- 提供了监听器来接收消息投递的状态

### **应用场景**

 对于消息可靠性要求较高，比如钱包扣款



## **工作模式总结**

1. 简单模式 HelloWorld 

   > 一个生产者、一个消费者，不需要设置交换机（使用默认的交换机）

2. 工作队列模式 Work Queue

   > 一个生产者、多个消费者（竞争关系），不需要设置交换机（使用默认的交换机）。

3. 发布订阅模式 Publish/subscribe

   > 一个生产者、多个消费者（共享关系）
   >
   > 需要设置类型为 fanout 的交换机，并且交换机和队列进行绑定，当发送消息到交换机后，交换机会将消息发送到绑定的队列。

4. 路由模式 Routing

   > 一个生产者、多个消费者（匹配才消费）
   > 需要设置类型为 direct 的交换机，交换机和队列进行绑定，并且指定 routing key，当发送消息到交换机后，交换机会根据 routing key 将消息发送到对应的队列。

5. 通配符模式 Topic

> Topic 主题模式可以实现 Pub/Sub 发布与订阅模式和 Routing 路由模式的功能，只是 Topic 在配置routing key 的时候可以使用通配符，显得更加灵活。
> 需要设置类型为 topic 的交换机，交换机和队列进行绑定，并且指定通配符方式的 routing key，当发送消息到交换机后，交换机会根据 routing key 将消息发送到对应的队列。

# [安装和配置](https://www.cnblogs.com/cwp-bg/p/8397529.html)



# [Spring整合RabbitMQ详解](https://blog.csdn.net/Java_Yhua/article/details/110927909)

## 生产者

①创建生产者工程

②添加依赖

③配置整合

④编写代码发送消息

## 消费者

①创建生产者工程

②添加依赖

③配置整合

④编写消息监听器

## 小结

- 使用 Spring 整合 RabbitMQ 将组件全部使用配置方式实现，简化编码

- Spring 提供 RabbitTemplate 简化发送消息 API

- 使用监听机制简化消费者编码



# [Spring Boot整合RabbitMQ](https://www.cnblogs.com/switchvov/p/15070110.html)

## 生产端

- 创建生产者SpringBoot工程
- 引入start，依赖坐标
- 编写yml配置，基本信息配置
- 定义交换机，队列以及绑定关系的配置类
- 注入RabbitTemplate，调用方法，完成消息发送

## 消费端

- 创建消费者SpringBoot工程
- 引入start，依赖坐标
- 编写yml配置，基本信息配置
- 定义监听类，使用@RabbitListener注解完成队列监听

## 小结

- SpringBoot提供了快速整合RabbitMQ的方式

- 基本信息再yml中配置，队列交互机以及绑定关系在配置类中使用Bean的方式配置

- 生产端直接注入RabbitTemplate完成消息发送

- 消费端直接使用@RabbitListener完成消息接收



# 高级特性

## 消费端限流

- 在<rabbit:listener-container> 中配置 prefetch属性设置消费端一次拉取多少消息
- 消费端的确认模式一定为手动确认。acknowledge="manual"

## TTL

- TTL 全称 Time To Live（存活时间/过期时间）。
- 当消息到达存活时间后，还没有被消费，会被自动清除。
- RabbitMQ可以对消息设置过期时间，也可以对整个队列（Queue）设置过期时间。

## 死信队列

### 定义

死信队列，英文缩写：DLX 。Dead Letter Exchange（死信交换机），当消息成为Dead message后，可以被重新发送到另一个交换机，这个交换机就是DLX。

### 消息成为死信的三种情况

1. 队列消息长度到达限制；
2. 消费者拒接消费消息，basicNack/basicReject,并且不把消息重新放入原目标队列,requeue=false；
3. 原队列存在消息过期设置，消息到达超时时间未被消费；

### 队列绑定死信交换机

给队列设置参数： x-dead-letter-exchange 和 x-dead-letter-routing-key

### 小结

- 死信交换机和死信队列和普通的没有区别
- 当消息成为死信后，如果该队列绑定了死信交换机，则消息会被死信交换机重新路由到死信队列



## 延迟队列

### 定义

- 延迟队列，即消息进入队列后不会立即被消费，只有到达指定时间后，才会被消费。
- 很可惜，在RabbitMQ中并未提供延迟队列功能。
- 但是可以使用：TTL+死信队列 组合实现延迟队列的效果。

### 需求

- 下单后，30分钟未支付，取消订单，回滚库存。
- 新用户注册成功7天后，发送短信问候。

### 对比定时器的优点

定时器需要不断的去轮询，如果间隔时间长就会出现不准时的情况，如果间隔短数据库压力大

### 代码流程

[RabbitMQ使用死信队列解决订单超时](https://blog.csdn.net/qq_41120971/article/details/107421971)

- 延迟队列 -> 30分钟后消费消息 -> 判断订单状态  -> 如果支付，什么都不做 ；未支付，取消订单，回滚库存

- 设置队列过期时间为30分钟 -> 消息过期，进入死信交换机  ->  消费者监听死信交换机的队列 -> 判断订单状态  -> 如果支付，什么都不做 ；未支付，取消订单，回滚库存



## Consumer ACK

ack指Acknowledge，确认。 表示消费端收到消息后的确认方式。

有三种确认方式：

> 自动确认：acknowledge="none"
> 手动确认：acknowledge="manual"
> 根据异常情况确认：acknowledge="auto"，（这种方式使用麻烦）

其中自动确认是指，当消息一旦被Consumer接收到，则自动确认收到，并将相应 message 从 RabbitMQ 的消息缓存中移除。但是在实际业务处理中，很可能消息接收到，业务处理出现异常，那么该消息就会丢失。

如果设置了手动确认方式，则需要在业务处理成功后，调用channel.basicAck()，手动签收，如果出现异常，则调用channel.basicNack()方法，让其自动重新发送消息。

### 小结

在rabbit:listener-container标签中设置acknowledge属性，设置ack方式 none：自动确认，manual：手动确认

如果在消费端没有出现异常，则调用channel.basicAck(deliveryTag,false);方法确认签收消息

如果出现异常，则在catch中调用 basicNack或 basicReject，拒绝消息，让MQ重新发送消息。





## 消息可靠性投递

- 在使用 RabbitMQ 的时候，作为消息发送方希望杜绝任何消息丢失或者投递失败场景。

- RabbitMQ 为我们提供了两种方式用来控制消息的投递可靠性模式：confirm 确认模式 ; return  退回模式

### 整个消息投递的路径

producer--->rabbitmq broker--->exchange--->queue--->consumerl

消息从 producer 到 exchange 则会返回一个 confirmCallback 。

消息从 exchange-->queue 投递失败则会返回一个 returnCallback 。

我们将利用这两个 callback 控制消息的可靠性投递

### 小结

- 设置ConnectionFactory的publisher-confirms="true" 开启 确认模式。
- 使用rabbitTemplate.setConfirmCallback设置回调函数。当消息发送到exchange后回调confirm方法。在方法中判断ack，如果为true，则发送成功，如果为false，则发送失败，需要处理。
- 设置ConnectionFactory的publisher-returns="true" 开启 退回模式。
- 使用rabbitTemplate.setReturnCallback设置退回函数，当消息从exchange路由到queue失败后，如果设置了rabbitTemplate.setMandatory(true)参数，则会将消息退回给producer。并执行回调函数returnedMessage。

### 整体总结

1. 持久化

   > •exchange要持久化
   >
   > •queue要持久化
   >
   > •message要持久化

2. 生产方确认Confirm

3. 消费方确认Ack

4. Broker高可用



## 消息幂等性保障

### 定义

幂等性指一次和多次请求某一个资源，对于资源本身应该具有同样的结果。也就是说，其任意多次执行对资源本身所产生的影响均与一次执行的影响相同。

在MQ中指，消费多条相同的消息，得到与消费该消息一次相同的结果。

### 方式

- 乐观锁机制，用版本号来区分.

  > 此方案多用于【更新】的场景下。大体思路是：给业务数据增加一个版本号属性，每次更新数据前，比较当前数据的版本号是否和消息中的版本一致，如果不一致则拒绝更新数据，更新数据的同时将版本号+1

- 利用数据库唯一约束

  > 将订单表中的订单编号设置为唯一索引，创建订单时，根据订单编号就可以保证幂等

- 去重表

  > 首先在去重表上建唯一索引，其次操作时把业务表和去重表放在同个本地事务中，如果出现重复消费，数据库会抛唯一约束异常，操作就会回滚

- 利用redis的原子性

  > 每次操作都直接set到redis里面，然后将redis数据定时同步到数据库中

- 状态机机制

  > 此方案多用于更新且业务场景存在多种状态流转的场景

- token机制

  > 生产者发送每条数据的时候，增加一个全局唯一的id，这个id通常是**业务的唯一标识**，比如订单编号。在消费端消费时，则验证该id是否被消费过，如果还没消费过，则进行业务处理。处理结束后，在把该id存入redis，同时设置状态为已消费。如果已经消费过了，则不进行处理。



# [RabbitMQ集群搭建](https://blog.51cto.com/lookingdream/2129723)





# 参考资料

[官网工作模式](https://www.rabbitmq.com/getstarted.html)

[官方地址](http://www.rabbitmq.com/)

[RabbitMQ 死信队列 + TTL介绍](https://www.cnblogs.com/jwen1994/p/14377549.html)

[消息队列----使用场景，重试补偿，事务补偿，幂等性，消息堆积，有序性，ACK机制](https://blog.csdn.net/jim_007/article/details/109721683)

[RabbitMq 死信消息的过期时间的不同 会导致消费延时](https://blog.csdn.net/m0_37801313/article/details/107084076)

> 最好要保证消息的时间保持一致。

