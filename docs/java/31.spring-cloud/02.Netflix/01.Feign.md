---
title: Feign
date: 2022-01-21 16:20:52
permalink: /pages/793949/
categories:
  - java
  - 微服务
  - Netflix
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---


# 高级用法

- 整合熔断器，利用的重试接口和自定义client

- 日志配置 > 可以局部，也可以全局
- 契约配置 > 默认是支持springmvc，还可以修改支持原生的注解
- 拦截器> 可以实现身份认证
- 超时时间配置

> 和ribbon整合以feign为准，但是RestTemplate还是ribbon的配置.

- 客户端组件配置 ：利用Client 自定义其他协议扩展 ; 
- 可以切换 Apache HttpClient，OkHttp等等；还可以改成RPC等其他协议。
- 开启GZIP 压缩配置
- 编码器解码器配置
- [openFeign整合dubbo](https://blog.csdn.net/qq_43631716/article/details/121322743)

## 建议:

- 不要配置全局配置，使用yml配置文件中配置每个服务配置

- 开启GZIP

  

# Feign接口扩展点

- Contract ： 解析和校验注解，获得元数据集合
- InvocationHandlerFactory ： 生成动态代理对象
- feign.InvocationHandlerFactory.MethodHandler : 真正执行代理对象的invoke方法.
- feign.Logger:  可以记录执行的各个阶段的日志，比如失败后、执行后的结果.
- Retryer: 重试的操作
- RequestInterceptor ： 拦截器，用于扩展Request
- Client : 真正执行远程调用.
- Encoder、Decoder、ErrorDecoder ： 请求序列化、正常响应反序列化



# Spring-cloud 的OpenFeign扩展点

- Targeter ： 创建的动态代理入口
- FeignClientFactoryBean :  本身的Feign
- FeignContext : 上下文用于创建相关的Bean

# 源码解析

> 可以看到和ribbon整合，只是用了ribbon的选择service，其他的配置还是以feign为主的。

## 执行Feign执行的主要过程:

1. Contract  ： 根据接口类的注解，解析MethodMetadata
2. InvocationHandlerFactory： 生成代理对象
3. MethodHandler ： 执行代理对象的invoke方法
4. Encoder： 编码
5. RequestInterceptor  ： 拦截器额外增强
6. 获得Request
7.  Client  执行调用
8. Decoder、ErrorDecoder  : 反序列化并返回结果对象



# 运用到的设计模式

| 责任链模式 | RequestInterceptor                    |
| ---------- | ------------------------------------- |
| 建造者模式 | Feign.builder() ， Response.builder() |
| 代理模式   | jdk代理                               |
| 门面模式   | Client                                |
|            |                                       |
|            |                                       |
|            |                                       |
|            |                                       |



# 项目结构

Feign 和 spring mvc 要定义2遍?   不需要...

```java
/**
 * @author qinkaiyuan
 * @date 2019-09-28 11:09
 * 前端初始化内容
 */
@RequestMapping("app")
@FeignClient(name = "app", url = "${socialuni.server-url:https://api.socialuni.cn}")
public interface SocialuniAppAPI {
    @PostMapping("getAppLaunchData")
    ResultRO<SocialAppLaunchDataRO> getAppLaunchData();

    @PostMapping("queryHomeSwipers")
    ResultRO<List<HomeSwiperVO>> queryHomeSwipers();

    @PostMapping("sendErrorLog")
    ResultRO<Void> sendErrorLog(@RequestBody @Valid FrontErrorLogVO frontErrorLogVO);
}




/**
 * @author qinkaiyuan
 * @date 2019-09-28 11:09
 * 前端初始化内容
 */
@RestController
public class AppController implements SocialuniAppAPI {
    @Resource
    SocialuniAppAPI socialuniAppAPI;
    @Resource
    AppService appService;

    @Override
    public ResultRO<SocialAppLaunchDataRO> getAppLaunchData() {
        return socialuniAppAPI.getAppLaunchData();
    }

    @Override
    public ResultRO<List<HomeSwiperVO>> queryHomeSwipers() {
        return appService.queryHomeSwipers();
    }

    @Override
    public ResultRO<Void> sendErrorLog(FrontErrorLogVO frontErrorLogVO) {
        return appService.sendErrorLog(frontErrorLogVO);
    }
}
```



# 参考资料

- [Feign 和 OpenFeign 两者区别](https://blog.csdn.net/songyinyi/article/details/106191656)

- [Feign的git地址](https://github.com/OpenFeign/feign)
- [Feign 官方文档翻译](https://www.jianshu.com/p/b6a47b06d3dc)

- [feign自定义请求拦截器、编码器、解码器](https://blog.csdn.net/MariaOzawa/article/details/109133593)
- [Feign的工作原理](https://blog.csdn.net/cold___play/article/details/106245560)
- [HttpClient、OKhttp、RestTemplate接口调用对比，选择一个优秀的 HTTP Client 的重要性](https://blog.csdn.net/weixin_44739349/article/details/106097201)
> HttpClient 是Apache的一个三方网络框架，网络请求做了完善的封装，api众多，用起来比较方便，开发快。
> OKhttp 高效的HTTP客户端，它能允许同一ip和端口的请求重用一个socket，这种方式能大大降低网络连接的时间.降低了服务器服务器的压力，透明的GZIP压缩减少响应数据的大小；缓存响应内容。对http和https都有良好的支持。对大数据量的网络请求支持非常好。
>  RestTemplate 提供了多种便捷访问远程Http服务的方法,能够大大提高客户端的编写效率。面向对 RESTful Web 服务调用的功能。
 