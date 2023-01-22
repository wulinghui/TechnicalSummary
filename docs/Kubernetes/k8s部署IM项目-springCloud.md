---
title: k8s部署IM项目-springCloud
date: 2022-06-27 09:03:45
permalink: /pages/76a20e/
categories:
  - Kubernetes
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 部署spring-cloud

k8s算内核还不是pass  。   
pass是kbuleshrer，蓝鲸。


# 部署Mysql
多主多从（多个一主一从），分库分表，从库用于备份和读写分离。
mysql扩容，独特扩容sts。  一主一从，读写分离。share proxy

一主一从 ： 
主节点: 
1. 有状态的Statefulset，PVC(RWO、存数据), SC(密码)，CM 和 service
2. Replicas=1  ； Image= MySQL：5.7.34
3. NodePort Service服务设置
4. 配置文件： 设置开启binlog、server_id、需要复制的数据库。
5. 进入pod内执行命令:  Slave 数据库使用来连接的账户并授权
从节点:
- 1/2/3同上
- 配置文件: 中继节点日志、server_id;
- 执行命令: 连接主数据库设置(master_host为主节点的serviceName)、启动 slave 
再主节点source加载业务的初始化数据。有些新项目引入了flyway可以不需要这一步。


注意: 
- 2个不同的配置文件，还有进pod里面去操作sql语句,设置权限相关内容。
- mysql主从，pod崩溃恢复情况？  serviceName单个节点所以podIP会变，也没关系。
- 一个主对应一个从。
# 部署Shardingsphere-Proxy
业务上都是用ShardingSphere-JDBC，proxy只是用于运维维护。
- Deployment无状态的、SC共用mysql，CM、Service用loadBalancer、PersistentVolumeClaim(RWM、存放jar)
- 崩溃恢复？？  无状态服务，崩溃也没关系。
- 数据库不能随便扩展，sts的一般都不能。
# 部署redis
- yaml文件: 有状态的Statefulset，动态pv模板(RWO、存数据),设置副本数为6, CM 和 service无头服务
- jsonpath获得所有的ip:  kubectl get pods -l app=redis-cluster -n production -o  jsonpath='{range.items[*]}{.status.podIP}:6379 '
- 执行集群命令: redis-cli --cluster create 10.10.219.1:6379 10.10.219.57:6379 10.10.219.56:6379  10.10.109.100:6379 10.10.219.55:6379 10.10.109.69:6379 --cluster-replicas 1

注意:  ip只能是pod的ip，最好是用sts的pod全域名(主机名不好使)，不能是serviceName。 
> 这里还有修改/data/nodes.conf的nodeIP的脚本。 建议还是用sts的pod全域名。

崩溃恢复： 
Redis集群中每个节点都有自己的NodeId，里面保存（/data/nodes.conf）了各个节点的信息，所以持久化了后pod就能获得这个文件去连接集群了。




# 部署RocketMq
两主两从，同步模式： 
- NameServer
> 客户端都连接指定多个NameServer。
> NameServer 需要部署多个节点，以保证 NameServer 的高可用。
> NameServer 本身是无状态，不产生数据的存储，是通过 Broker 心跳将 Topic 信息同步到NameServer 中。
> 多个 NameServer 之间不会有数据的同步，是通过 Broker 向多个 NameServer 多写。

- Broker
> 多个 Broker 可以形成一个 Broker 分组。每个 Broker 分组存在一个 Master 和多个 Slave 节点。
> Master 节点，可提供读和写功能。Slave 节点，可提供读功能。
> Master 节点会不断发送新的 CommitLog 给 Slave 节点。Slave 节点不断上报本地的
> CommitLog 已经同步到的位置给 Master 节点。
> Slave 节点会从 Master 节点拉取消费进度、Topic 配置等等。
> 多个 Broker 分组，形成 Broker 集群。
> Broker 集群和集群之间，不存在通信与数据同步。
> Broker 可以配置同步刷盘或异步刷盘，根据消息的持久化的可靠性来配置。

总结: 
- broker： 
4个yaml都是sts、service，动态存储模板，指定不同的配置文件。再配置文件中设置NameServer、brokerName(分组)
broker-a 主 1
broker-b 主 2
broker-a-s 从 1
broker-a-s 从 2

- NameServer（注册中心）:  sts、 2个副本、无存储，客户端连接用pod全域名连接。
- Console（可视化 web 界面） : Deployment、加上Ingress供外部访问。

崩溃恢复: 里面对应的配置文件NameServer是不变的。


# [部署kafka](https://www.jianshu.com/p/af79350a6ddb)
zk : 2个service(一个hs无头、一个cs客户端连接)，sts、3副本、动态存储、selector设置亲和性(不部署再kafka、每个node只部署一个) , 设置PodDisruptionBudget保护至少一个节点

kafka : service无头，PodDisruptionBudget至少2个节点，sts、3副本、动态存储、selector设置亲和性，用zk的pod的DNS全域名连接zk.


# 部署Nacos
- nacos单机会丢数据，内存数据库。
- 所以线上采用集群的nacos。

具体配置: 
ConfigMap 设置数据库。
sts的网络是固定的，无头服务用pod名选址； 3个副本、开通tcp和http端口、NACOS_SERVERS环境变量设置3个主机名、不配置存储。
设置Ingress用于页面访问。


nacos状态不对问题：  pod写全域名，别写podname-序号。


# 部署业务
Deployment、设置HPA自动伸缩。Service的ClusterIP 和 Ingress。
CM: 对应应用的配置文件。 里面中间件的地址都是serviceName，或者sts的Pod的DNS域名。
SC: 密码是用上面中间件中创建的。(对应CM里面就是环境变量)


非生产的namespace：中间件都部署单机版的。
日志文件: 用hostpath静态存储。  日志一般不写到pvc里面。    跟着节点走，在domenset里面部署elk收集到pvc里面。
resources.limits: 限制和JVM内存保持好，否则OOM后会出现总删除/重启pod。


连不上redis：  集群不正常，重新初始化redis，看好配置文件。


# 参考资料
![k8s环境通过DNS名称访问POD](https://blog.51cto.com/leejia/2584207?ivk_sa=1025922q)>  直接访问pod的方式 : pod自动分配的ip、DNS名称访问（deployment会变、statefulset固定）![在K8s上部署Redis集群的方法步骤](https://www.jb51.net/article/210827.htm)
> 那为什么没有使用稳定的标志，Redis Pod也能正常进行故障转移呢？这涉及了Redis本身的机制。
> 但是他这里是用了sts的pod全域名，作为稳定的网络标识。

- [官网: Kubernetes Nacos](https://nacos.io/zh-cn/docs/use-nacos-with-kubernetes.html)




Tekton    ops系统。  二次开发： Jenkins是封装 Api；Tekton是组合 Task就行了。



