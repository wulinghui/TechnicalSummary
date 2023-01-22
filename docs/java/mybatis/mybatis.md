---
title: mybatis
date: 2022-02-21 00:26:43
permalink: /pages/bb6033/
categories:
  - java
  - mybatis
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# 高级用法(扩展点)

- [MyBatis之databaseIdProvider多数据库支持](https://blog.csdn.net/likewindy/article/details/51396576)
- [设置vfs 可以扩展xml文件的来源。](https://blog.csdn.net/TangKenny/article/details/113680711) 
- [Mybatis四大核心对象之插件编写与原理](https://blog.csdn.net/weixin_42412601/article/details/104645211)
- [LanguageDriver实现动态 SQL](https://blog.csdn.net/w_yunlong/article/details/79201509)
- [mybatis之XMLLanguageDriver使用方式例子](https://blog.csdn.net/nmgrd/article/details/77198976)
- [MyBatis（十一）扩展：自定义类型处理器](https://dev-preview.cnblogs.com/niujifei/p/15312252.html)
- [MyBatis 添加元数据自定义元素标签](https://juejin.cn/post/6854573216359415822)
- [Mybatis PropertyTokenizer，属性分词器工具类解析](https://blog.csdn.net/seasonsbin/article/details/116998082)

# [核心类](http://www.mybatis.cn/archives/715.html)

- SqlSessionFactoryBuilder -》 SqlSessionFactory -》 SqlSession
- SqlSession， 作为MyBatis工作的主要顶层API，通过这个接口可以执行执行SQL语句、获取Mappers、管理事务
- Executor，sql执行；MyBatis执行器，是MyBatis调度的核心，负责SQL语句的生成和查询缓存的维护
- StatementHandler，封装了JDBC Statement操作，负责对JDBC Statement的操作，如设置参数、将Statement结果集转换成List集合。
- ParameterHandler，参数映射；负责对用户传递的参数转换成JDBC Statement 所需要的参数
- ResultSetHandler，结果集映射；负责将JDBC返回的ResultSet结果集对象转换成List类型的集合
- TypeHandler，负责Java数据类型和JDBC数据类型之间的映射和转换
- MappedStatement，维护了一条select|update|delete|insert节点的封装
- SqlSource，sql获取/解析/动态sql；负责根据用户传递的parameterObject，动态地生成SQL语句，将信息封装到BoundSql对象中，并返回
- BoundSql，表示动态生成的SQL语句以及相应的参数信息
- Configuration，MyBatis所有的配置信息都维持在Configuration对象之中
- MapperProxyFactory ，jdk动态代理创建Mapper对象。

# 主体流程

## 构建SqlSessionFactory

**SqlSessionFactoryBuilder**  解析xml中的properties、settings、日志、别名、插件、Factory、environment、databaseIdProviderElement、typeHandlerElement 、mapperElement 节点信息 生成 **Configuration**  再构建**SqlSessionFactory**

## 解析mapper的5种形式

xml中的namespace、class、package 最终都调用**MapperRegistry.addMapper**方法放到**Configuration#mapperRegistry.knownMappers** 中保存。

resource、url 调用**XMLMapperBuilder#parse**方法放到**Configuration#mappedStatements**中保存。

## openSession过程

从**Configuration**中获得环境变量  》》 构建**TransactionFactory**并获得事务 》》 构建**Executor**且放到**SqlSession**中

## 执行过程

1. **MapperProxyFactory**通过jdk动态代理将**MapperProxy**的Handle生成接口的实现类，再invoke的方法内部执行；
2. **SqlSession**的查询操作，具体是先获得**MappedStatement**，执行**Executor**的真正执行的接口；
3. 获得**BoundSql**，构建缓存key并做缓存相关操作，或者再构建**StatementHandler**，内部构建了**ParameterHandler**，**ResultSetHandler**，再通过**TypeHandler**执行并封装结果集
3. 最后commit，清除一级缓存，等等收尾工作。



# 运用到的设计模式

| Builder模式  | SqlSessionFactoryBuilder、XMLConfigBuilder、XMLMapperBuilder、XMLStatementBuilder、CacheBuilder、MapperAnnotationBuilder、MapperBuilderAssistant |
| ------------ | ------------------------------------------------------------ |
| 工厂模式     | SqlSessionFactory、ObjectFactory、MapperProxyFactory  、ObjectWrapperFactory 、reflectorFactory、TransactionFactory |
| 单例模式     | ErrorContext   利用threadLocal每个线程中是单例的,            |
| 代理模式     | MapperProxy、ConnectionLogger；还有executor.loader包使用了cglib或者javassist达到延迟加载的效果ProxyFactory.createProxy |
| 组合模式     | SqlNode 解析sql.xml语句                                      |
| 模板方法模式 | BaseExecutor和SimpleExecutor、BaseTypeHandler 、BaseStatementHandler |
| 适配器模式   | Log的Mybatis接口和它对jdbc、log4j等各种日志框架的适配实现    |
| 装饰者模式   | Cache缓存、CachingExecutor二级缓存执行器                     |
| 门面模式     | SqlSession，作为顶层的API给客户端使用， 不执行具体的内容，都是交给对应的Executor去执行； 日志也是一个门面 |
| 迭代器模式   | PropertyTokenizer属性分词器                                  |





# 参考资料

[mybatis的缓存机制：一级缓存和二级缓存的区别](https://www.cnblogs.com/yunianzeng/p/11826449.html)

> 一级缓存的作用域是一个sqlsession内，默认开启；二级缓存作用域是针对mapper进行缓存。
>
> 一级缓存时执行commit，close，增删改等操作，就会清空当前的一级缓存；当对SqlSession执行更新操作（update、delete、insert）后并执行commit时，不仅清空其自身的一级缓存（执行更新操作的效果），也清空二级缓存（执行commit()的效果）。
>
> 不管是不是相同的session,只要mapper的namespace相同,可能共享缓存，如果开启了二级缓存，那么在关闭sqlsession后(close)，才会把该sqlsession一级缓存中的数据添加到namespace的二级缓存中。

