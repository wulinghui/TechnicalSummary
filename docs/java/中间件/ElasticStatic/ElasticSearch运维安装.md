---
title: ElasticSearch运维安装
date: 2022-03-10 08:43:37
permalink: /pages/022d75/
categories:
  - java
  - 中间件
  - ElasticStatic
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 注意

- 【重要】所有对应配套的组件，版本要一致，es的版本之间有很大的区别。如: **7.6.1**

# 安装Elasticsearch

-  创建普通用户 ： ES不能使用root用户来启动，必须使用普通用户来安装启动。

- 上传压缩包并解压

- 修改配置文件： 用对应创建的用户

- 修改jvm.option ： 调整jvm堆内存大小，es特别吃内存。

- 修改系统配置，解决启动时候的问题

  > 普通用户打开文件的最大数限制  `sudo vi /etc/security/limits.conf`
  >
  > 普通用户启动线程数限制  ` sudo vi /etc/security/limits.d/90‐nproc.conf`
  >
  > 普通用户调大虚拟内存 sudo vi  /etc/sysctl.conf

- 启动ES服务



# Elasticsearch集群环境搭建

- 将安装包分发到其他服务器上面

- 修改elasticsearch.yml

- 修改jvm.option

- node2与node3修改es配置文件

  ```java
  cluster.name 一致
  node.name 不一致
  discovery.seed_hosts 和上面的节点ip一致
  cluster.initial_master_nodes 和设置的名称一致    
  ```

  

# Elasticsearch-head插件

这个插件是es提供的一个用于图形化界面查看的一个插件工具，可以安装上这个插件之后，通过这个插件来实现我们通过浏览器查看es当中的数据

步骤: 

- 安装**nodejs**
- 下载安装包，然后进行解压
-  创建软连接
- 修改环境变量
- 启动验证nodes安装成功
- 上传压缩包到/usr/local/es路径下去,解压安装包
- 机器修改Gruntfile.js
- 机器修改app.js
- 启动head服务
- 访问elasticsearch-head界面



# 安装IK分词器

- [下载Elasticsearch IK分词器](https://github.com/medcl/elasticsearch-analysis-ik/releases)
- 切换es安装用户
- 并在es的安装目录下/plugins创建ik目录
- 将下载的ik分词器上传并解压到该目录
- 重启Elasticsearch



# 客户端Kibana

- 下载Kibana放之/usr/local/es目录中
- 解压文件
- 修改配置文件: vi kibana.yml      ;  server.host、elasticsearch.hosts
- 启动Kibana
- 访问



# 安装FileBeat

- 将FileBeat Linux安装包上传到Linux系统
- 并将压缩包解压到系统就可以了
- 创建配置文件
- 启动 ： ./filebeat -c filebeat_mq_log.yml -e 



# 安装Logstash

1. 下载Logstash
2. 解压Logstash到指定目录
3. 运行测试
