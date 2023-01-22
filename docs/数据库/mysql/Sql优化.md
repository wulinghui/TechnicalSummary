---
title: Sql优化
date: 2022-02-21 00:26:43
permalink: /pages/c84dc1/
categories:
  - 数据库
  - mysql
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# Order by优化



## 排序方式

MySQL支持两种方式的排序filesort和index，Using index是指MySQL扫描索引本身完成排序。index效率高，filesort效率低。

### index

order by的条件不在索引列上，就会产生Using filesort

### filesort

字段的总长度小于max_length_for_sort_data ， 则使用单路排序模式

#### 单路排序

是一次性取出满足条件行的所有字段，然后在sort buffer中进行排序

#### 双路排序（回表排序模式）

是首先根据相应的条件取出相应的排序字段和可以直接定位行 数据的行 ID，然后在 sort buffer 中进行排序，排序完后需要再次取回其它需要的字段





## 联和索引排序

- explain查询的Extra字段里尽量不要出现using filesort 
- 尽量在索引列上完成排序，遵循索引建立（索引创建的顺序）时的最左前缀法则
- order by默认升序，索引的排序方式默认也是升序。 desc变成了降序了，顺序不一样，可以采用（降序索引）；
- 对于排序来说，多个相等条件也是范围查询，导致filesort 。
- order by满足两种情况会使用Using index。

  1) order by语句使用索引最左前列。
  2) 使用where子句与order by子句条件列组合满足索引最左前列。与索引的排序方式不同，则会产生filesort
- 如果order by的条件不在索引列上，就会产生Using filesort。
- 能用覆盖索引尽量用覆盖索引。



# group by优化

1. group by与order by很类似，其实质是先排序后分组，遵照索引创建顺序的最左前缀法则。
2. 对于group by的优化如果不需要排序的可以加上**order by null禁止排序**。
2. where高于having，能写在where中的限定条件就不要去having限定了。



# limit 优化

## 原理

limit 10000,10;  

看似只查询了 10 条记录，实际这条 SQL 是先读取 10010 条记录，然后抛弃前 10000 条记录，然后读到后面 10 条想要的数据。因此要查询一张大表比较靠后的数据，执行效率是非常低的。

## 常见分页优化技巧

1. 根据自增且连续的主键排序的分页查询

   `                select * from employees where id > 10000 limit 5;              `

   

2. 根据非主键字段排序的分页查询
   **让排序时返回的字段尽可能少**

`                select * from employees e inner join (select id from employees order by name limit 90000,5) ed on e.id = ed.id;              `



# Join关联查询优化

- 关联字段加索引
- 小表驱动大表，当使用left join时，左表是驱动表，右表是被驱动表，当使用right join时，右表时驱动表，左表是被驱动表，当使用join时，mysql会选择数据量比较小的表作为驱动表，大表作为被驱动表。
- 如果有索引一般选择 NLJ 算法，有索引的情况下 NLJ 算法比 BNL算法性能更高

## 嵌套循环连接(NLP)

- 没有内存机制
- Extra 中未出现 Using join buffer 则表示使用的 join 算 法是 NLJ

## 基于块的嵌套循环连接(BNL)

- join_buffer (把一部分数据读到内存)
- 被驱动表的关联字段没索引的关联查询，一般都会使用 BNL 算法









# in和exsits优化

- 小表驱动大表
- 先执行in内部的查询
- 后执行exsits内部的查询

# [count查询优化](https://blog.csdn.net/iFuMI/article/details/77920767)

**count(\*)≈count(1)>count(字段)>count(主键 id)** 

- 某个字段count不会统计字段为null值的数据行
- 字段有索引：count(*)≈count(1)>count(字段)>count(主键 id) 
- show table status 代替总行数 （故略计算）



