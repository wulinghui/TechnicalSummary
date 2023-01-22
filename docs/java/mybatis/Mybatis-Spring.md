---
title: Mybatis-Spring
date: 2022-02-21 00:26:43
permalink: /pages/e51cfb/
categories:
  - java
  - mybatis
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# Mybatis-Spring

Mybatis整合spring，Mybatis他自己也有一个cglib的代理，有自己的IOC容器，并且是接口就行了(spring是不会扫描接口的BeanDefinition)。 他们是怎么整合的??  

## Spring是怎么管理Mapper接口的动态代理的

### 1.3.x版本

1. MapperScan   导入了 MapperScannerRegistrar（实现了ImportBeanDefinitionRegistrar接口）.
2. registerBeanDefinitions 方法中:  new ClassPathMapperScanner   利用@MapperScan中定义的属性初始化，利用他扫描Mapper
3. ClassPathMapperScanner   重写了判断BeanDefintion方法isCandidateComponent。 判断接口，是可以扫描到的。
4. 重写了doScan方法，责任链调用super.doScan，再处理BeanDefinitions集合。
5. 修改BeanDefinition几个重要的属性: BeanClass为MapperFactoryBean ， 添加一个构造参数为原始的Class，把AutowireMode修改为byType
6. MapperFactoryBean 实现了2个重要接口 FactoryBean和InitializingBean接口。
7. InitializingBean 再实例化时会给configuration.addMapper 往mybatis的configuration注册Mapper.
8. FactoryBean :  中就是 getSqlSession().getMapper()
9. MapperFactoryBean的AutowireMode为byType，所以Spring会自动调用set方法，有两个set方法，一个setSqlSessionFactory，一个setSqlSessionTemplate，而这两个方法执行的前提是根据方法参数类型能找到对应的bean，所以Spring容器中要提前存在SqlSessionFactory类型的bean或者SqlSessionTemplate类型的bean。如果你定义的是一个SqlSessionFactory（SqlSessionFactoryBean）类型的bean，那么最终也会被包装为一个SqlSessionTemplate对象，并且赋值给sqlSession属性
10. 而在SqlSessionTemplate类中就存在一个getMapper方法，这个方法中就产生一个Mapper接口代理对象，之后就是Mybatis的流程。



```java
 MapperFactoryBean<T> extends SqlSessionDaoSupport implements FactoryBean<T> 
 SqlSessionDaoSupport  extends DaoSupport  => InitializingBean
 继承了SqlSessionDaoSupport，是他set的SqlSession

```



### 2.0.x版本

新特性: 新增@MapperScans、支持@Repeatable、支持编程式扫描（@Bean : MapperScannerConfigurer）、MyBatisBatchItemWriterBuilder、MyBatisPagingItemReaderBuilder、MyBatisCursorItemReaderBuilder。

1. MapperScannerRegistrar 注册一个 MapperScannerConfigurer的BeanDefinition（他实现了BeanDefinitionRegistryPostProcessor 扩展点去做的，这样可以兼容spring4.x以下的版本）。
2. MapperScannerConfigurer 里面执行scan()方法。后续逻辑一样。 



## [如何整合spring事务](https://www.cnblogs.com/xing1/p/15212532.html)

```java
@Bean
  public SqlSessionFactory sqlSessionFactory() {
    SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
    factoryBean.setDataSource(dataSource());
    return factoryBean.getObject();
  }

SqlSessionFactoryBean  实现了  FactoryBean ，InitializingBean ， ApplicationListener ： 
  @Override
  public SqlSessionFactory getObject() throws Exception {
    if (this.sqlSessionFactory == null) {
      afterPropertiesSet();   // 这里面就用到了 new SpringManagedTransactionFactory(); 
    }
    return this.sqlSessionFactory;
  }

SpringManagedTransactionFactory ： 里面就用到了 new SpringManagedTransaction(dataSource); 

核心就是: 
org.springframework.jdbc.datasource.DataSourceUtils.getConnection(this.dataSource); 
再往下就是spring的事务内容了。
```



## 如何解决线程不安全的问题

SqlSessionTemplate   -> sqlSessionProxy  -> SqlSessionInterceptor  -> DefaultSqlSession

```java
  public SqlSessionTemplate(SqlSessionFactory sqlSessionFactory, ExecutorType executorType,
      PersistenceExceptionTranslator exceptionTranslator) {

    notNull(sqlSessionFactory, "Property 'sqlSessionFactory' is required");
    notNull(executorType, "Property 'executorType' is required");

    this.sqlSessionFactory = sqlSessionFactory;
    this.executorType = executorType;
    this.exceptionTranslator = exceptionTranslator;
    this.sqlSessionProxy = (SqlSession) newProxyInstance(SqlSessionFactory.class.getClassLoader(),
        new Class[] { SqlSession.class }, new SqlSessionInterceptor());
  }


SqlSessionInterceptor : 中的 jdk代理 , invoke方法： 最重要的就是getSqlSession方法.
DefaultSqlSessionFactory.openSession(executorType); // 就会调用上面SpringManagedTransactionFactory.newTransaction 
之后就是整合spring事务管理的内容了。
```

## 总结

程序员定义SqlSessionFactoryBean  ， 他将构建SqlSessionFactory，整合spring的事务。

ClassPathMapperScanner : 重写判断bean办法，和修改扫描出来的BeanDefinition的BeanClass为MapperFactoryBean

MapperFactoryBean ： 从上面spring 获得 SqlSession再包装成为sqlSessionTemplate，解决线程安全和整合spring事务的问题。

## 运用的设计模式

| 工厂模式    | SpringManagedTransactionFactory、SqlSessionFactoryBean、MapperFactoryBean |
| ----------- | :----------------------------------------------------------: |
| 适配器模式  |                   SpringManagedTransaction                   |
| 装饰模式    |                  SqlSessionTemplate、Logger                  |
| 模板模式    |         SqlSessionDaoSupport、ClassPathMapperScanner         |
| 代理模式    |                SqlSessionTemplate、getMapper                 |
| 责任链模式  |     ClassPathMapperScanner.doScan、SqlSessionInterceptor     |
| Builder模式 | MyBatisBatchItemWriterBuilder、MyBatisPagingItemReaderBuilder、MyBatisCursorItemReaderBuilder |





# tk

过程类似

# mybatis-plus

过程类似
