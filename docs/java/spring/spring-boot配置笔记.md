---
title: spring-boot配置笔记
date: 2022-08-18 13:58:03
permalink: /pages/6e2c36/
categories:
  - java
  - spring
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
```
# 项目偶发出现org.apache.http.NoHttpResponseException: The target server failed to respond异常 
# https://blog.csdn.net/hupoling/article/details/107256696 他是从客户端解决的。下面的配置是从服务端解决的。
# tomcat 关闭 keep-Alive
server.tomcat.keep-alive-timeout=0
server.tomcat.max-keep-alive-requests=1
```

