---
title: 使用ElasticSearch
date: 2022-03-10 08:13:27
permalink: /pages/0614a8/
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
# 选型对比

## Lucene

优点 : java搜索届的基石； 轻巧和应用强绑定集成

缺点: 

- 只能在Java项目中使用,并且要以jar包的方式直接集成项目中.
- 使用非常复杂-创建索引和搜索索引代码繁杂
- 不支持集群环境-索引数据不同步（不支持大型项目）
- 索引数据如果太多就不行，索引库和应用所在同一个服务器,共同占用硬 盘.共用空间少.

## Solr

优点: 

- 当单纯的对已有数据进行搜索时，Solr更快
- Solr 支持更多格式的数据，比如JSON、XML、CSV，而 Elasticsearch 仅支持 json文件格

缺点:

- 当实时建立索引时, Solr会产生io阻塞，查询性能较差, Elasticsearch具有明显的优势。

## 总结

特别小的项目用lucence，实时搜索应用(实时数据插入/更新/删除)用ES，传统的用Solr。





# 全文检索概念和原理

## 什么是全文检索

- 通过一个程序扫描文本中的每一个单词，**针对单词建立索引**，并保存该单词在文本中的位置、以及出现的次数
- 用户查询时，通过之前建立好的索引来查询，将索引中单词对应的文本位置、出现的次数返回给用户，因为有了具体文本的位置，所以就可以将具体内容读取出来了

## 倒排索引

- 存储过程: 分词，去重，排序。
- 存储的结构:    单词1  ->  index1,index2   ； 就是每个单词，对应在那些数据的位置上。
- 查找过程:  根据词条找id , 再根据id定位数据。
- **支持海量数据原理**？？ 词条基本固定，index扩展也没啥关系，所以支持海量数据存储。



# 核心概念

| es                                        | 数据库    |
| ----------------------------------------- | --------- |
| Index                                     | database  |
| Type(7.0以后将废弃了，就是没有表的概念了) | Table     |
| Document文档                              | Row 行    |
| Field 字段                                | Column 列 |
| mapping 映射                              | 表结构    |



## 索引 index

- 一个索引就是一个拥有几分相似特征的文档的集合。

- 一个索引由一个名字来标识（必须全部是小写字母的）

## 映射 mapping

- ElasticSearch中的映射（Mapping）用来定义一个文档。
- 处理数据的方式和规则方面做一些限制。如字段的数据类型、分词、是否被索引。

## 字段Field

## 字段类型 Type

- 每一个字段都应该有一个对应的类型，如int、text等等
- 这和上面提到的Type不一样

## 文档 document

- 一个文档是一个可被索引的基础信息单元，类似一条记录。
- 以JSON来表示

## 集群 cluster

一个集群就是由一个或多个节点组织在一起，它们共同持有整个的数据，并一起提 供索引和搜索功能

## 节点 node

一个节点是集群中的一个服务器，作为集群的一部分，它存储数据，参与集群的索 引和搜索功能

## 分片 shards

- 一个索引可以存储超出单个结点硬件限制的大量数据，Elasticsearch提供了将索引划分成多份的能力，这些 份就叫做分片
- 当创建一个索引的时候，可以指定你想要的分片的数量
- 每个分片本身也是一个功能完善并且独立的“索引”，这个“索引”可以 被放置到集群中的任何节点上
- 分片很重要 ： 允许水平分割/扩展你的内容容量；允许在分片之上进行分布式的、并行的操作，进而提高性能/吞吐量
- 它的文档怎样聚合回搜索请求，是完全由 Elasticsearch管理的，对于作为用户来说，这些都是透明的

## 副本  replicas

- 背景: 在一个网络/云的环境里，失败随时都可能发生，在某个分片/节点不知怎 么的就处于离线状态，或者由于任何原因消失了，这种情况下，有一个故障转移机制是非常有用并且是强烈推荐的。
- 副本很重要 : 在分片/节点失败的情况下，提供了高可用性；扩展搜索量/吞吐量，因为搜索可以在所有的副本上并行运行。
- 每个索引可以被分成多个分片。一个索引有0个或者多个副本
- 一旦设置了副本，每个索引就有了主分片和副本分片，分片和副本的数量可以在索引创建的时候指定
- 在索引创建之后，可以在任何时候动态地改变副本的数量，但是不能改变分片的数量







# 生态圈组件介绍

- ElasticSearch ： 核心服务
- Kibana :    es的web图形界面客户端
- 







# 使用

## 指定IK分词器作为默认分词器

需要安装ik分词器。

- ES的默认分词设置是standard，这个在中文分词时就比较尴尬了
- 最好使用 `ik_max_word` 最大分词。
- ik_smart 他是最简单的不咋分词

## ES数据管理

- 利用Restful做增删查改，这里可以做后端的封装，或者前端直连(不建议)

- GET查询 PUT添加 POST修改 DELE删除

- 基本操作demo

  ```javascript
  # 索引
  创建索引 PUT /索引名称
  查询索引 GET /索引名称
  删除索引 DELETE /索引名称
  # 文档
  增加/修改文档 POST /索引名称/类型/id
  修改文档 PUT /索引名称/类型/id
  查询文档 GET /索引名称/类型/id
  删除文档 DELETE /索引名称/类型/id
  ```

  

- POST和PUT都能起到创建/更新的作用，但是他们的差别如下:

  > 1. 需要注意的是==PUT==需要对一个具体的资源进行操作也就是要确定id才能进行==更新/创建，而==POST==是可以针对整个资源集合进行操作的，如果不写id就由ES生成一个唯一id进行==创建==新文档，如果填了id那就针对这个id的文档进行创建/更新
  >
  > 2. PUT会将json数据都进行替换, POST只会更新相同字段的值
  >
  > 3. PUT与DELETE都是幂等性操作, 即不论操作多少次, 结果都一样

## 查询操作

```java
#查询当前类型中的所有文档 _search
GET /索引名称/类型/_search
#等于条件查询    
GET /索引名称/类型/_search?q=字段名:值
#范围查询
GET /索引名称/类型/_search?q=字段名[25 TO 26]
#查询小于等于
GET /索引名称/类型/_search?q=字段名:<=值
#分页查询  from=*&size=*
GET /索引名称/类型/_search?q=age[25 TO 26]&from=0&size=1    
#对查询结果只输出某些字段    
GET /索引名称/类型/_search?_source=字段,字段
#对查询结果排序 sort=字段:desc/asc
GET /索引名称/类型/_search?sort=字段:desc
```

# 批量操作

## 批量获取文档数据

批量获取文档数据是通过_mget的API来实现的

```java
# 在URL中不指定index和type
docs : 文档数组参数
    _index : 指定index
    _type : 指定type
    _id : 指定id
    _source : 指定要查询的字段
如下: 
GET _mget
{
"docs": [
{
"_index": "es_db",
"_type": "_doc",
"_id": 1
},
{
"_index": "es_db",
"_type": "_doc",
"_id": 2
}
]
}
```

```java
# 在URL中指定index
请求地址：/{{indexName}}/_mget
功能说明 ： 可以通过ID批量获取不同index和type的数据
如: GET /es_db/_mget
{
"docs": [
{
"_type":"_doc",
"_id": 3
},
{
"_type":"_doc",
"_id": 4
}
]
}    
```

```java
#在URL中指定index和type
请求地址：/{{indexName}}/{{typeName}}/_mget
如GET /es_db/_doc/_mget
{
"docs": [
{
"_id": 1
},
{
"_id": 2
}
]
}    
```

```java
#多个ID进行批量查询 _mget
GET /索引名称/类型/_mget
{
    "ids":["1","2"]
}
```

## 批量操作文档数据

批量对文档进行写操作是通过_bulk的API来实现的

- 请求地址：_bulk
- 请求参数：通过_bulk操作文档，一般至少有两行参数(或偶数行参数)

- - 第一行参数为指定操作的类型及操作的对象(index,type和id)
  - 第二行参数才是操作的数据

- 操作类型，主要有create,index,delete和update

```java
# 批量创建文档create
POST _bulk
{"create":{"_index":"article", "_type":"_doc", "_id":3}}
{"id":3,"tags":["java", "面向对象"],"create_time":1554015482530}
{"create":{"_index":"article", "_type":"_doc", "_id":4}}
{"id":4,"tags":["java", "面向对象"],"create_time":1554015482530}    
```

```java
# 普通创建或全量替换index
POST _bulk
{"index":{"_index":"article", "_type":"_doc", "_id":3}}
{"id":3,"tags":["java", "面向对象"],"create_time":1554015482530}
{"index":{"_index":"article", "_type":"_doc", "_id":4}}
{"id":4,"tags":["java", "面向对象"],"create_time":1554015482530}    
// 如果原文档不存在，则是创建
// 如果原文档存在，则是替换(全量修改原文档)
```

```java
# 批量删除delete
POST _bulk    
{"delete":{"_index":"article", "_type":"_doc", "_id":3}}
{"delete":{"_index":"article", "_type":"_doc", "_id":4}}    
```

```java
# 批量修改update
POST _bulk
{"update":{"_index":"article", "_type":"_doc", "_id":3}}
{"doc":{"title":"ES大法必修内功"}}
{"update":{"_index":"article", "_type":"_doc", "_id":4}}
{"doc":{"create_time":1554018421008}}
```



# DSL高级查询

- Domain Specific Language 领域专用语言
- DSL由叶子查询子句和复合查询子句两种子句组成。

## **无查询条件**

无查询条件是查询所有，默认是查询所有的，或者使用match_all表示所有

```java
GET /es_db/_doc/_search
{
"query":{
"match_all":{}
}
}
```

## 有查询条件

### 叶子条件查询(单字段查询条件)

#### 模糊匹配

模糊匹配主要是针对文本类型(text)的字段，文本类型的字段会对内容进行分词，对查询时，也会对搜索条件进行分词，然后通过倒排索引查找到匹配的数据，模糊匹配主要通过match等参数来实现

- match : 通过match关键词模糊匹配条件内容

  > match会根据该字段的分词器，进行分词查询。
  >
  > match条件还支持以下参数：
  >
  > - query : 指定匹配的值
  > - operator : 匹配条件类型
  >
  > - - and : 条件分词后都要匹配
  >   - or : 条件分词后有一个匹配即可(默认)
  >
  > - minmum_should_match : 指定最小匹配的数量

- prefix : 前缀匹配

- regexp : 通过正则表达式来匹配数据

#### 精确匹配

- term : 单个条件相等

  > term查询不会对字段进行分词查询，会采用精确匹配。
  >
  > 注意: 采用term精确查询, 查询字段映射类型属于为keyword.

- terms : 单个字段属于某个值数组内的值

- range : 字段属于某个范围内的值

- exists : 某个字段的值是否存在

- ids : 通过ID批量查询

### 多字段查询

- 多字段模糊匹配查询与精准查询 multi_match
- 未指定字段条件查询 query_string , 含 AND 与 OR 条件
- 指定一个或多个字段条件查询 query_string , 含 AND 与 OR 条件
- 范围查询 range范围关键字、gte 大于等于、lte  小于等于、gt 大于、lt 小于、now 当前时间

### 组合条件查询(多条件查询)

组合条件查询是将叶子条件查询语句进行组合而形成的一个完整的查询条件

#### bool

各条件之间有and,or或not的关系

- - must : 各个条件都必须满足，即各条件是and的关系
  - should : 各个条件有一个满足即可，即各条件是or的关系
  - must_not : 不满足所有条件，即各条件是not的关系
  - filter : 不计算相关度评分，它不计算_score即相关度评分，效率更高
  - **must/filter/shoud/must_not** 等的子条件是通过 **term/terms/range/ids/exists/match** 等叶子条件为参数的
  - 以上参数，当只有一个搜索条件时，must等对应的是一个对象，当是多个条件时，对应的是一个数组

#### constant_score 

不计算相关度评分

### 连接查询(多文档合并查询)

- 父子文档查询：parent/child
- 嵌套文档查询: nested

## filter DSL

**Filter过滤器方式查询，它的查询不会计算相关性分值，也不会对结果进行排序, 因此效率会高一点，查询的结果可以被缓存。**

## match、term、match_phase、query_string区别

- match  模糊匹配，需要指定字段名，但是输入会进行分词
- term    精确匹配，需要指定字段名，输入不会进行分词
- match_phase 会对输入做分词，但是需要结果中也包含所有的分词，而且顺序要求一样
- query_string  和match类似，不同的是它是在所有字段中搜索，范围更广泛

对类型的区别:

- term查询keyword字段 : term不会分词。而keyword字段也不分词。需要完全匹配才可。
- term查询text字段： 因为text字段会分词，而term不分词，所以term查询的条件必须是text字段分词后的某一个。
- match查询keyword字段 ： match会被分词，而keyword不会被分词，match的需要跟keyword的完全匹配可以。
- match查询text字段： match分词，text也分词，只要match的分词结果和text的分词结果有相同的就匹配。

总结: 

parse 效率低，精确度高一点；match  找的东西多

# 聚合搜索

bucket就是一个聚合搜索时的数据分组，metric就是对一个bucket数据执行的统计分析(如：求和，最大值，最小值，平均值)

再aggs下面、最基础的聚合为terms单位 ，操作有_count，avg，max，min，sum，sort

## keyword

text单字分词不能做聚合，可以用fields  keyword type  （xxx.keyword）

## 子聚合

先根据聚合分组，在组内根据brand再次聚合分组，这种操作可以称为**下钻分析**。就是aggs可以嵌套查询定义。

## 区间统计

以100万为一个范围，统计不同范围内车辆的销售量和平均价格，可以使用**histogram**类似terms

date_histogram 是对date类型的field执行区间聚合分组

## _global bucket

在聚合统计数据的时候，有些时候需要对比部分数据和总体数据。

如：统计某品牌车辆平均价格和所有车辆平均价格。

可以使用global是用于定义一个全局bucket，这个bucket会忽略query的条件，检索所有document进行对应的聚合统计。

## 对聚合统计数据进行排序

aggs+order

如：统计每个品牌的汽车销量和销售总额，按照销售总额的降序排列。

如果有多层aggs，执行下钻聚合的时候，也可以根据最内层聚合数据执行排序。

但是**只能组内数据排序，而不能跨组实现排序。**

## search+aggs

聚合类似SQL中的group by子句，search类似SQL中的where子句。

## filter+aggs



# 文档映射

动态映射： 在文档写入Elasticsearch时，会根据文档字段自动识别类型

静态映射： 写入数据前事先定义好映射，包含文档的各字段类型、分词器

## 数据建模

- 搜索数据时太多没用的内容，比如查询北京市，还会出来其他的街道。
- 防止es对数据做扁平化处理，正常（如果字段需要分词，会将分词数据保存在对应的字段位置，当然应该是一个倒排索引，这里只是一个直观的案例）
- 使用 nested object数据类型ES在保存的时候不会有扁平化处理，保存方式如下：所以在搜索的时候一定会有需要的搜索结果。
- 缺点: 就是采取的是类似冗余数据的方式，将多个数据都放在一起了，每次更新，需要重新索引整个对象，维护成本就比较高。

## 父子关系数据建模

针对上面的数据冗余的缺点

使用 Join 数据类型实现，可以通过 Parent / Child 的关系，从而分离两个对象。

父文档和子文档是两个独立的文档，更新父文档无需重新索引整个子文档。子文档被新增，更改和删除也不会影响到父文档和其他子文档。

**要点**：就是父子数据必须存在于一个shard分片中。

优点: 文档存储在一起，读取性能高、父子文档可以独立更新。

定义父子关系的几个步骤 ：  

- - 设置索引的 Mapping，type为join，申明父子关系
  - 索引父文档
  - 索引子文档
  - 按需查询文档

支持的查询

- 查询所有文档
- Parent Id 查询，返回所有相关子文档，
- Has Child 查询    ，返回父文档 、通过对子文档进行查询
- Has Parent 查询 ，  返回相关性的子文档 ，通过对父文档进行查询

## 文件系统数据建模

为其中的字段path定义一个特殊的分词器，`"tokenizer" : "path_hierarchy"`

## 对已存在的mapping映射进行修改

不能直接修改，只能做迁移后再起别名，这就实现索引的平滑过渡,并且是零停机

具体方法

   1）如果要推倒现有的映射, 你得重新建立一个静态索引		

   2）然后把之前索引里的数据导入到新的索引里		

   3）删除原创建的索引		

   4）为新索引起个别名, 为原索引名



# 核心类型

- text ： 该类型被用来索引长文本，在创建索引前会将这些文本进行分词，转化为词的组合，建立索引；允许es来检索这些词，text类型**不能**用来排序和聚合。
- keyword ： 该类型，只能精准查询，不能分词查询，可以被用来检索过滤、排序和聚合，keyword类型不可用text进行分词模糊检索
- 数值型： long、integer、short、byte、double、float
- 日期型：date
- 布尔型：boolean





# 乐观并发控制

Elasticsearch，不想数据库用悲观并发控制，而是采用版本号来控制并发。

- ES新版本(7.x)不使用version进行并发版本控制
- 而是用 if_seq_no=版本值&if_primary_term=文档位置 
- _seq_no：文档版本号，作用同_version
- _primary_term：文档所在位置
- 他们和version不同， version属于当个文档，而seq_no属于整个index



# 手工控制搜索结果精准度

minimum_should_match可以使用百分比或固定数字。

固定数字代表query搜索条件中的词条，至少需要匹配多少个。

百分比代表query搜索条件中词条百分比，如果无法整除，向下匹配（如，query条件有3个单词，如果使用百分比提供精准度计算，那么是无法除尽的，如果需要至少匹配两个单词，则需要用67%来进行描述。如果使用66%描述，ES则认为匹配一个单词即可。）。

如果使用should+bool搜索的话，也可以控制搜索条件的匹配度。



# dis_max实现best fields策略

- best fields策略： 搜索的document中的某一个field，尽可能多的匹配搜索条件。
- most fields策略： 尽可能多的字段匹配到搜索条件
- 长尾数据： 我们搜索4个关键词，但很多文档只匹配1个，也显示出来了，这些文档其实不是我们想要的
- **精确匹配的数据可以尽可能的排列在最前端，且可以通过minimum_should_match来去除长尾数据，避免长尾数据字段对排序结果的影响。**但是这种**相对排序不均匀。**
- dis_max语法： 直接获取搜索的多条件中的，单条件query相关度分数最高的数据，以这个数据做相关度排序。

## tie_breaker参数优化

在某些情况下，可能还需要其他query条件中的相关度介入最终的结果排序，这个时候可以使用tie_breaker参数来优化dis_max搜索。

tie_breaker参数代表的含义是：将其他query搜索条件的相关度分数乘以参数值，再参与到结果排序中。

## multi_match

可以完成相同的事。

使用multi_match语法为：其中type常用的有best_fields和most_fields。^n代表权重，相当于"boost":n 



# 其他场景

## boost权重控制

一般用于搜索时相关度排序使用。广告投放权重最高

## cross fields搜索

一个唯一的标识，分部在多个fields中，使用这种唯一标识搜索数据就称为cross fields搜索。

比如: 地址可以分为省、市、区县、街道。要搜索这种就是cross搜索。

Cross fields搜索策略，是从多个字段中搜索条件数据。

### 实现

这种搜索，一般都是使用most fields搜索策略。

默认情况下，和most fields搜索的逻辑是一致的，计算相关度分数是和best fields策略一致的。

一般来说，如果使用cross fields搜索策略，那么都会携带一个额外的参数operator。用来标记搜索条件如何在多个字段中匹配。

### 缺点

most fields策略是尽可能匹配更多的字段，所以会导致精确搜索结果排序问题。

又因为cross fields搜索，不能使用minimum_should_match来去除长尾数据。
所以在使用most fields和cross fields策略搜索数据的时候，都有不同的缺陷。

**所以**商业项目开发中，都推荐使用best fields策略实现搜索。

## copy_to组合fields

copy_to : 就是将多个字段，复制到一个字段中，实现一个多字段组合的逻辑字段。

优点: copy_to可以解决cross fields搜索问题，在商业项目中，也用于解决搜索条件默认字段问题。

使用: 如果需要使用copy_to语法，则需要在定义index的时候，手工指定mapping映射策略

## 短语搜索

就是搜索条件不分词。代表搜索条件不可分割。

可以用match phrase实现

## 近似匹配

这种特殊要求的搜索就是近似搜索。包括hell搜索条件在hello world数据中搜索，包括h搜索提示等都数据近似搜索的一部分。

[看这个资料](https://blog.csdn.net/gwd1154978352/article/details/84141627)

可以用match phrase + slop实现

### 总结

召回率：召回率就是搜索结果比率

精准度：就是搜索结果的准确率

如果在搜索的时候，只使用match phrase语法，会导致召回率底下，因为搜索结果中必须包含短语

如果在搜索的时候，只使用match语法，会导致精准度底下，因为搜索结果排序是根据相关度分数算法计算得到。

如果需要在结果中兼顾召回率和精准度的时候，就需要将match和proximity search混合使用，来得到搜索结果。

## 前缀搜索

用于搜索前缀提示，类似百度搜索的提示。

使用前缀匹配实现搜索能力。 **prefix 关键字**

通常针对keyword类型字段，也就是不分词的字段。而keyword类型字段数据大小写敏感。

前缀搜索不会计算相关度分数。

因为前缀搜索需要扫描完整的索引内容，所以前缀越长，相对效率越高。前缀越短，效率越低。

## 通配符搜索

但是和java还有数据库不太一样。通配符可以在倒排索引中使用，也可以在keyword类型字段中使用。

```java
wildcard 关键字
? - 一个任意字符
* - 0~n个任意字符
```

性能也很低，也是需要扫描完整的索引。不推荐使用。

## 正则搜索

ES支持正则表达式。可以在倒排索引或keyword类型字段中使用。

```java
regexp 关键字
[] - 范围，如： [0-9]是0~9的范围数字
. - 一个字符
+ - 前面的表达式可以出现多次。
```

性能也很低，需要扫描完整索引。

## 搜索推荐

搜索提示，索引中有若干数据以“hello”开头，那么在输入hello的时候，推荐相关信息。

match_phrase_prefix关键字

其原理和match phrase类似，是先使用match匹配term数据（java），然后在指定的slop移动次数范围内，前缀匹配（s），max_expansions是用于指定prefix最多匹配多少个term（单词），超过这个数量就不再匹配了。这种语法的限制是，只有最后一个term会执行前缀搜索。

因为效率较低，如果必须使用，则一定要使用参数max_expansions。

## fuzzy模糊搜索技术

搜索的时候，可能搜索条件文本输入错误。

fuzzy技术就是用于解决错误拼写的（在英文中很有效，在中文中几乎无效。）

fuzzy关键字

其中fuzziness代表value的值word可以修改多少个字母来进行拼写错误的纠正

## 高亮显示

在搜索中，经常需要对搜索关键字做高亮显示，高亮显示也有其常用的参数

highlight中的field，必须跟query中的field一一对齐的

设置高亮html标签，默认是<em>标签 ：  pre_tags、post_tags

高亮片段fragment的设置，设置要显示出来的fragment_size文本判断的长度，number_of_fragments显示几个片段

## 大数据量分页

- 使用from和size对1W条数据以内来进行分页，性能可以。
- Elasticsearch做了一个限制，默认不允许查询的是10000条以后的数据，会报错。
- 每次传统分页都需要将要查询的数据进行重新排序，这样非常浪费性能。
- 使用scroll游标是将要用的数据一次性排序好，然后分批取出。
- 使用scroll查询后，排序后的数据会保持一定的时间，后续的分页查询都从该快照取数据即可。
- 使用: 第一次使用scroll分页查询设置缓存时间(超时时间不要设置太短，否则会出现异常)、之后操作直接用返回的scroll id进行查询。



# 分词器

将句子拆分成一个一个的单个的单词，同时对每个单词进行normalization（时态转换，单复数转换）

## 内置分词器

- standard analyzer标准分析仪
- simple analyzer简单分析器  
- whitespace analyzer 空白分词器
- stop analyzer:移除停用词

## 自定义分词器

可以实现过滤自定义的数据。 分为2种，自己做插件，或者简单的可以用设置做相关组合。

analyzer.type = custom ，然后再引用过滤规则和内容。

## IK中文分词器

### 相关配置

- IKAnalyzer.cfg.xml：用来配置自定义词库
- main.dic：ik原生内置的中文词库，总共有27万多条，只要是这些单词，都会被分在一起
- quantifier.dic：放了一些单位相关的词
- suffix.dic：放了一些后缀
- surname.dic：中国的姓氏
- stopword.dic：英文停用词

### 自定义词库 IKAnalyzer.cfg.xml 

ext_dict 、 ext_stopwords、remote_ext_dict、remote_ext_stopwords

### IK热更新

可以用remote_ext_dict、remote_ext_stopwords 写里面远程配置的文件。

最好修改IK远程字典源码使他支持热添加停用词和分词；



# Elasticsearch SQL

目前FROM只支持单表

功能有: 查询、将SQL转换为DSL、全文检索、分组统计、



# 高级功能

## 搜索模板

将我们的一些搜索进行模板化，然后的话，每次执行这个搜索，就直接调用模板，给传入一些参数就可以了

- 简单定义参数并传递 ：  GET /cars/_search/template
- toJson方式传递参数 ： GET /cars/_search/template
- join方式传递参数 : GET /cars/_search/template
- default value定义 : 

### 记录template实现重复调用

可以使用Mustache语言({{name}}代表变量)作为搜索请求的预处理，它提供了模板，然后通过键值对来替换模板中的变量。

1. 保存template到ES :   POST _scripts/{id}
2. 调用template执行搜索 :  GET cars/_search/template {  id: "{id}"  }
3. 查询已定义的template : GET _scripts/{id}
4. 删除已定义的template : DELETE _scripts/{id}

## 搜索建议

- 应用场景，suggest search（completion suggest）：就是建议搜索或称为搜索建议，也可以叫做自动完成-auto completion。类似百度中的搜索联想提示功能。

- 用于进行前缀搜索的一种特殊的数据结构，而且会全部放在内存中，所以suggest search进行的前缀搜索提示，性能是非常高。
- 需要使用suggest的时候，必须在定义index时，为其mapping指定开启suggest。

## 地理位置搜索

- 可实现在指定区域内搜索数据、搜索指定地点附近的数据、聚合统计分析指定地点附近的数据等操作。
- 必须提供一个特殊的字段类型。GEO - geo_point。地理位置的坐标点。
- 定义geo point mapping ；录入数据；搜索指定区域范围内的数据



# Java API

## 原生API

- RestHighLevelClient : 连接ES集群
- IndexRequest : 描述请求
- 新增：IndexRequest
- 更新：UpdateRequest
- 删除：DeleteRequest
- 根据ID获取：GetRequest
- 关键字检索：SearchRequest
- scroll分页方式查询 :  SearchSrollRequest
- 高亮查询 : HighlightBuilder 、HighlightField 

## spring data es

继承就有了增删查改，方便。

但是复杂的查询实现不了。










kibana  es的客户端

post和put的区别

filter 精确匹配快没缓存
text和wordkey

车博为什么能搜到？？



es
修改映射？
如何加锁？
es准实时搜索    ，hbase 更快
put和get流程

# 思考

倒排索引为啥能存海量数据??

操作post和put的区别？？

text和wordkey 有啥区别??

修改映射？
如何加锁？

# 参考资料

- 官方网站: https://www.elastic.co/ 
- 下载地址：https://www.elastic.co/cn/start
- [mustache模板技术](https://www.cnblogs.com/JoannaQ/p/3462318.html)

