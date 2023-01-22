---
title: SpringBoot项目部署之外挂配置文件Deploy方式
date: 2021-10-27 14:33:43
permalink: /pages/acd420/
categories:
  - java
  - spring
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
  # 应用场景

我想把自己的配置文件放到服务器中,而不再代码中体现。

也就是说**application-test.yml** 再项目里面没有。

# 最终代码

```cmd
java -jar -Dspring.profiles.active=test socialuni-demo-0.2.0.jar --spring.config.location="C:\Users\Administrator\Desktop\application-test.yml"

```





# 参考资料

- [SpringBoot项目部署之外挂配置文件Deploy方式](https://blog.csdn.net/weixin_36898373/article/details/105640358)
- [springboot项目实现jar包外配置文件管理](https://blog.csdn.net/xrq0508/article/details/80050119)
- [spring-boot启动时，指定spring.profiles.active](https://blog.csdn.net/jmlqqs/article/details/107289746)
- [Spring Boot外部配置文件](http://c.biancheng.net/spring_boot/external-config.html)

