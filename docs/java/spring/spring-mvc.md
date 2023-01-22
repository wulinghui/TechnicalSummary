---
title: spring-mvc
date: 2022-02-10 14:29:33
permalink: /pages/915c4e/
categories:
  - java
  - spring
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 高级用法

1. FlashMap、RedirectAttributes : 给重定向设置的参数
2. @SessionAttributes ： 将对应的内容从model中匹配到后放到session中。
3. @InitBinder ：  数据绑定（预处理）、类级别的属性编辑器、请求参数带有fieldDefaultPrefix的参数,去掉该前缀再绑定到对应请求入参上、设置过滤的参数不接受等等设置好多处理器。 具体看他的set方法。
4. @ModelAttribute ：  请求处理方法之前的预处理属于类上的、绑定请求参数到实体对象
5. @ControllerAdvice : 全局异常处理、全局数据绑定（预处理）
6. [内容协商](https://zhuanlan.zhihu.com/p/115891808): 默认不开启，根据不同的请求格式,返回不同的类型数据格式(json、xml)
7. ApplicationContextInitializer 接口refresh()之前对ApplicationContext的扩展点.
8. [动态注册处理接口](https://blog.csdn.net/zimou5581/article/details/99548519)

# 核心类

- HandlerExecutionChain :  Handler执行链， 里面包含Handler和拦截器

- HandlerMapping ： 处理器映射器；负责根据用户请求找到 Handler 即处理器，SpringMVC 提供了不同的映射器实现不同的

  映射方式，例如：配置文件方式，实现接口方式，注解方式等。

- ModelAndView:   承载model和view，供程序员操作的.

- HandlerExceptionResolver :   异常处理视图

- DispatcherServlet： 前端调度器 ， 负责将请求拦截下来分发到各控制器方法中 

- HandlerMapping: 负责根据请求的URL和配置@RequestMapping映射去匹配， 匹配到 会返回Handler（具体控制器的方法） 

- HandlerAdaper: 负责调用Handler-具体的方法- 返回视图的名字 Handler将它封装到 ModelAndView(封装视图名，request域的数据） 

- ViewReslover: 根据ModelAndView里面的视图名地址去找到具体的jsp封装在View对象中 

- View：进行视图渲染（将jsp转换成html内容 --这是Servlet容器的事情了） 最终response 到的客户端



# 主体流程

## 启动流程

JDK的SPI 到 Servlet的SCI接口 =>  业务设置的ServletInitializer类，实现父子容器的初始化 ->  @EnableWebMvc 注册相关的bean。

servlert启动后，才回调spring的**ApplicationContextInitializer**接口，再他里面执行父子容器refresh方法。

## 运行流程

1. DispatcherServlet.doService入口，遍历所有**HandlerMapping**解析request获得该**Handler**和**对应的拦截器**，以**HandlerExecutionChain**对象返回；

2. 循环调用**HandlerAdapter**.supports确定合适的**HandlerAdapter**

3. HandlerExecutionChain.applyPreHandle调用前置拦截器的preHandle方法

4. HandlerAdapter.handle 执行 解析参数和处理业务,获得业务返回，并封装成ModelAndView返回。

   > 提取Request中的模型数据，填充Handler入参，开始执行Handler（Controller)。
   >
   > HttpMessageConveter的数据转换， 数据验证

5. 拦截器处理后置方法

6. 异常判断并封装处理成ModelAndView

7. 根据返回的ModelAndView，选择一个适合的ViewResolver

8. ViewResolver 结合Model和View，来渲染视图

9. 拦截器处理完成方法.

10. 将渲染结果返回给客户端


# 自己的疑问

- DispatcherServlet上面没有@webservlert注解，必须要配置。  spring-boot是通过Servlet3.0研究之ServletContainerInitializer实现的，零配置实现的。





# 一些比较有趣的代码

```java
// 需求背景: 整合第三方jar对外提供一些服务
// 传统做法: 就是写controller层再做一些业务逻辑封装调用一下。
// 改进:     能不能利用mvc的参数解析来实现,较少的侵入性呢??
        RequestMappingHandlerMapping rmhm = (RequestMappingHandlerMapping) applicationContext.getBean("requestMappingHandlerMapping");
        //
        String [] empty = new String[0];

        RequestMappingInfo.Builder mappping = RequestMappingInfo
                // 类名 + 方法名
                .paths(method.getDeclaringClass().getSimpleName()+"/"+method.getName())     //
                .methods(RequestMethod.POST) // 强制设置为post.
                .params(empty) //
                .headers(empty)
                .consumes(empty)
                .produces(empty)
                .mappingName(method.toString());
        RequestMappingInfo mapping = mappping.build();
        Object handler = null;
        //TODO 这种要求handler必须是单例的。
        rmhm.registerMapping(mapping,handler,method);

        // TODO 如果要handler是多例的话，怎么处理，就想QQTool是不同的appid调用不同的。
        // 做个公共接口，只用request的解析和
        ServletInvocableHandlerMethod invocableMethod = new ServletInvocableHandlerMethod(handler,method);
        ModelAndViewContainer mavContainer = new ModelAndViewContainer();
        ServletWebRequest webRequest = new ServletWebRequest(null, null);
        Object invoke = invocableMethod.invokeForRequest(webRequest, mavContainer, new Object[0]);
        // 最后一个不足，这些都是动态的。如果第三方jar更新了并且改动了方法，他是不会报错的。
        // 有好多问题不会再编码层面报出来，这块就需要回归测试来校验了。
```



# 参考资料

[简单讲一下SpringMVC的执行流程？](https://cloud.tencent.com/developer/article/1415712)



