---
title: MongoDB使用
date: 2022-04-13 17:31:29
permalink: /pages/5465c3/
categories:
  - 数据库
  - MongoDB
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# MongoDB介绍

- 语法有点类似于面向对象的查询语言
- 支持对数据建立索引
- 一个开源OLTP（联机事务处理）数据库，原则上 Oracle 和 MySQL 能做的事情， MongoDB 都能做（包括 ACID 事务）
- 它灵活的文档模型（JSON）非常适合敏捷式开发、高可用和水平扩展的大数据应用

## 版本变迁

0.x 起步阶段 ->  1.x 支持复制集和分片集  -> 2.x 更丰富的数据库功能 -> 3.x wiredTiger和周边生态环境 -> 4.x 分布式事务支持。





## 概念

- 数据库（database）：最外层的概念，可以理解为逻辑上的名称空间，一个数 据库包含多个不同名称的集合。
- 集合（collection）：相当于SQL中的表，一个集合可以存放多个不同的文档。 
- 文档（document）：一个文档相当于数据表中的一行，由多个不同的字段组 成。 
- 字段（field）：文档中的一个属性，等同于列（column）。 
- 索引（index）：独立的检索式数据结构，与SQL概念一致。 
- _id：每个文档中都拥有一个唯一的_id字段，相当于SQL中的主键（primary key）。 
- 视图（view）：可以看作一种虚拟的（非真实存在的）集合，与SQL中的视图类 似。从MongoDB 3.4版本开始提供了视图功能，其通过聚合管道技术实现。 
- 聚合操作（$lookup）：MongoDB用于实现“类似”表连接（tablejoin）的 聚合操作符。

## 与RDBMS差异

- 半结构化： 在一个集合中，文档所拥有的字段并不需要是相同的，而且也不需要 对所用的字段进行声明。
- 文档还可以支持多级的嵌套、数组等灵活的数据类型
- 弱关系 ： 没有外键的约束，使用聚合管道

## 如何考虑是否选择MongoDB?

![](https://gitee.com/RollBack2010/blogsimg/raw/master/img/image-20220316173141628.png)

只要有一项需求满足就可以考虑使用MongoDB，匹配越多，选择MongoDB越合适。





# 安装管理

安装咯

官方GUI工具web——COMPASS

GUI工具客户端—— Robo 3T（免费）

| 文件名称     | 作用               |
| ------------ | ------------------ |
| mongostat    | 数据库性能监控工具 |
| mongotop     | 热点表监控工具     |
| mongodump    | 数据库逻辑备份工具 |
| mongorestore | 数据库逻辑恢复工具 |
| mongoexport  | 数据导出工具       |
| mongoimport  | 数据导入工具       |
| bsondump     | BSON格式转换工具   |
| mongofiles   | GridFS文件工具     |



# 文档操作

| 操作                       | 含义                                                         |
| -------------------------- | ------------------------------------------------------------ |
| db.collection.insertOne()  | 新增单个文档，支持writeConcern                               |
| db.collection.insertMany() | 批量新增文档                                                 |
| insert                     | 插入的数据主键已经存在，则会抛 DuplicateKeyException 异常，提示主键重复，不保存当前数据。可批量 |
| save                       | 如果 _id 主键存在则更新数据，如果不存在就插入数据。可批量    |
| find(query, projection)    | query ：可选，使用查询操作符指定查询条件。projection ：可选，使用投影操作符指定返回的键。 |
| findOne                    | 查询集合中的第一个文档                                       |
| pretty()                   | 方法以格式化的方式来显示所有文档                             |
| sort()                     | 数据进行排序                                                 |
| skip                       | 指定跳过记录数                                               |
| limit                      | 限定返回结果数量                                             |
| ObjectId()                 | 字符串获得id.                                                |
| update                     | 更新文档完整操作。                                           |
| updateOne                  | 更新单个文档                                                 |
| updateMany                 | 更新多个文档                                                 |
| replaceOne                 | 替换单个文档                                                 |
| findAndModify              | 会返回符合查询条件的文档数据，并完成对文档的修改。<br />会返回修改前的“旧”数据。如果希望返回修改后的数据，则可以指定new选项 |
| findOneAndUpdate           | 更新单个文档并返回更新前（或更新后）的文档                   |
| findOneAndReplace          | 替换单个文档并返回替换前（或替换后）的文档                   |
|                            |                                                              |
|                            |                                                              |

## 插入文档

- insertOne: 支持writeConcern 

  ```json
  db.collection.insertOne(
     <document>,
     {
        writeConcern: <document>
     }
  )
  /*
  writeConcern 决定一个写操作落到多少个节点上才算成功。writeConcern 的取值包括： 
  0：发起写操作，不关心是否成功； 
  1~集群最大数据节点数：写操作需要被复制到指定节点数才算成功； 
  majority：写操作需要被复制到大多数节点上才算成功。
  */
  ```

## 批量新增文档

- insertMany:向指定集合中插入多条文档数据

```json
db.collection.insertMany(
   [ <document 1> , <document 2>, ... ],
   {
      writeConcern: <document>,
      ordered: <boolean>      
   }
)
```



## MQL语法

`                db.collection.find().pretty()              `

- $lt: 存在并小于
- $lte: 存在并小于等于
- $gt: 存在并大于
- $gte: 存在并大于等于
- $ne: 不存在或存在但不等于
- $in: 存在并在指定数组中
- $nin: 不存在或不在指定数组中
- $or: 匹配两个或多个条件中的一个
- $and: 匹配全部条件
- $regex ：匹配字符串的正则表达式

和sql对照表

| SQL             | MQL                                    |
| --------------- | -------------------------------------- |
| a = 1           | {a: 1}                                 |
| a <> 1          | {a: {$ne: 1}}                          |
| a > 1           | {a: {$gt: 1}}                          |
| a >= 1          | {a: {$gte: 1}}                         |
| a < 1           | {a: {$lt: 1}}                          |
| a <= 1          | {a: {$lte: 1}}                         |
| a = 1 AND b = 1 | {a: 1, b: 1}或{$and: [{a: 1}, {b: 1}]} |
| a = 1 OR b = 1  | {$or: [{a: 1}, {b: 1}]}                |
| a IS NULL       | {a: {$exists: false}}                  |
| a IN (1, 2, 3)  | {a: {$in: [1, 2, 3]}}                  |



## 查询优化

### 处理分页问题

**使用查询条件+唯一排序条件**

数据量大的时候，应该避免使用skip/limit形式的分页

```javascript
第一页：db.posts.find({}).sort({_id: 1}).limit(20); 
第二页：db.posts.find({_id: {$gt: <第一页最后一个_id>}}).sort({_id: 1}).limit(20); 
```

### **避免使用 count** 

db.coll.count({x: 100})

尽可能不要计算总页数，特别是数据量大和查询条件不能完整命中索引时。

需要遍历完 1000w 条找到所有符合要求的文档才能得到结果。 为了计算总页数而进行的 count() 往往是拖慢页面整体加载速度的原因。

## 更新文档

db.collection.update(query,update,options)

- query：描述更新的查询条件；

- update：描述更新的动作及新的内容；

- options：描述更新的选项

- - upsert:  可选，如果不存在update的记录，是否插入新的记录。默认false，不插入
  - multi: 可选，是否按条件查询出的多条记录全部更新。 默认false,只更新找到的第一条记录
  - writeConcern :可选，决定一个写操作落到多少个节点上才算成功。

**更新操作符**

| **操作符** | **格式**                                        | **描述**                                       |
| ---------- | ----------------------------------------------- | ---------------------------------------------- |
| $set       | {$set:{field:value}}                            | 指定一个键并更新值，若键不存在则创建           |
| $unset     | {$unset : {field : 1 }}                         | 删除一个键                                     |
| $inc       | {$inc : {field : value } }                      | 对数值类型进行增减                             |
| $rename    | {$rename : {old_field_name : new_field_name } } | 修改字段名称                                   |
| $push      | { $push : {field : value } }                    | 将数值追加到数组中，若数组不存在则会进行初始化 |
| $pushAll   | {$pushAll : {field : value_array }}             | 追加多个值到一个数组字段内                     |
| $pull      | {$pull : {field : _value } }                    | 从数组中删除指定的元素                         |
| $addToSet  | {$addToSet : {field : value } }                 | 添加元素到数组中，具有排重功能                 |
| $pop       | {$pop : {field : 1 }}                           | 删除数组的第一个或最后一个元素                 |

## findAndModify

默认情况下，findAndModify会返回修改前的“旧”数据。如果希望返回修改后的数据，则可以指定new选项

```json
db.books.findAndModify({
    query:{_id:ObjectId("61caa09ee0782536660494dd")},
    update:{$inc:{favCount:1}},
    new: true
})
```

## 删除文档

remove  : 需要配合查询条件使用、指定一个空文档条件会删除所有文档

官方推荐使用 deleteOne() 和 deleteMany()

```json
db.books.deleteMany ({})  //删除集合下全部文档
db.books.deleteMany ({ type:"novel" })  //删除 type等于 novel 的全部文档
db.books.deleteOne ({ type:"novel" })  //删除 type等于novel 的一个文档
```

如果希望删除整个集合，则使用**drop命令**会更加高效

`                db.books.findOneAndDelete({type:"novel"},{sort:{favCount:1}})  // 删除第一个并查询返回             `

利用这个特性，findOneAndDelete可以实现队列的先进先出。

## 文档结构规范

- 防止使用太长的字段名（浪费空间）
- 防止使用太深的数组嵌套（超过2层操作比较复杂）
- 不使用中文，标点符号等非拉丁字母作为字段名

## 写规范

- update 语句里只包括需要更新的字段 
- 尽可能使用批量插入来提升写入性能 
- 使用TTL自动过期日志类型的数据





# BSON协议与数据类型

JSON基于文本的解析效率并不是最好的，在某些场景下往往会考虑选择更合适的编/解码格式。

BSON则是二进制（字节流）编/解码的形式。空间和解析都快，更高效的遍历，更丰富的数据类型

## 数据类型

Double、String、Object、Array、Binary data、ObjectId、Boolean、Date、Null、Regular Expression、JavaScript、32-bit integer、Timestamp、64-bit integer、Decimal128、Min key、Max key

## $type操作符

$type操作符基于BSON类型来检索集合中匹配的数据类型，并返回结果。

`                db.books.find({"title" : {$type : "string"}})              `

## 日期类型

`db.dates.insert([{data1:Date()},{data2:new Date()},{data3:ISODate()}])`

使用new Date与ISODate最终都会生成ISODate类型的字段（对应于UTC时间），+0时区的时间

## ObjectId生成器

MongoDB集合中所有的文档都有一个唯一的_id字段，作为集合的主键。在默认情况下，_id字段使用ObjectId类型，采用16进制编码形式，共12个字节。

为了避免文档的_id字段出现重复，ObjectId被定义为3个部分:

- 4字节表示Unix时间戳（秒）。
- 5字节表示随机数（机器号+进程号唯一）。 
- 3字节表示计数器（初始化时随机）。

大多数客户端驱动都会自行生成这个字段，这样做不但提高了离散性，还可以降低MongoDB服务器端的计算压力。

API:

- ObjectId() : 新的 ObjectId
- str() : 返回对象的十六进制字符串表示。
- ObjectId.getTimestamp() : 将对象的时间戳部分作为日期返回。
- ObjectId.toString() : 以字符串文字“”的形式返回 JavaScript 表示ObjectId(...)。
- ObjectId.valueOf() :  将对象的表示形式返回为十六进制字符串。返回的字符串是str属性。

## 内嵌文档

就是内嵌对象；

db.books.find({"author.name":"三毛"})    // "" 必须带。

## 数组

```javascript
// 增加tags标签
db.books.updateOne({"author.name":"三毛"},{$set:{tags:["旅行","随笔","散文","爱情","文学"]}})
// 会查询到所有的tags
db.books.find({"author.name":"三毛"},{title:1,tags:1})
// 利用$slice获取最后一个tag，$silice是一个查询操作符，用于指定数组的切片方式
db.books.find({"author.name":"三毛"},{title:1,tags:{$slice:-1}})
// 数组末尾追加元素，可以使用$push操作符
db.books.updateOne({"author.name":"三毛"},{$push:{tags:"猎奇"}})
// 和$each操作符配合可以用于添加多个元素
db.books.updateOne({"author.name":"三毛"},{$push:{tags:{$each:["伤感","想象力"]}}})
//会查出所有包含伤感的文档
db.books.find({tags:"伤感"})
// 会查出所有同时包含"伤感","想象力"的文档
db.books.find({tags:{$all:["伤感","想象力"]}})
```

## 嵌套型的数组

数组，内嵌的文档结构

```javascript
// 
db.goods.insertOne({
    name:"羽绒服",
    tags:[
        {tagKey:"size",tagValue:["M","L","XL","XXL","XXXL"]},
        {tagKey:"color",tagValue:["黑色","宝蓝"]},
        {tagKey:"style",tagValue:"韩风"}
    ]
})
// 筛选出color=黑色的商品信息
db.goods.find({
    tags:{
        $elemMatch:{tagKey:"color",tagValue:"黑色"}
    }
})
// 筛选出color=蓝色，并且size=XL的商品信息
db.goods.find({
    tags:{
        $all:[
            {$elemMatch:{tagKey:"color",tagValue:"黑色"}},
            {$elemMatch:{tagKey:"size",tagValue:"XL"}}
        ]  
    }
})
//

```

## 固定集合

数据库只会存储“限额”的数据，超过该限额的旧数据都会被丢弃。数据在写入这种集合时遵循FIFO原则。

```javascript
// max：指集合的文档数量最大值，这里是10条
// size：指集合的空间占用最大值，这里是4096字节（4KB）
// 这两个参数会同时对集合的上限产生影响。也就是说，只要任一条件达到阈值都会认为集合已经写满。其中size是必选的，而max则是可选的。
db.createCollection("logs",{capped:true,size:4096,max:10})
//

```

### 优势

固定集合在底层使用的是顺序I/O操作，因此固定集合的写入性能是很高的。

如果按写入顺序进行数据读取，也会获得非常好的性能表现。

### 限制

1. 无法动态修改存储的上限
2. 无法删除已有的数据
3. 对已有数据进行修改，新文档大小必须与原来的文档大小一致，否则不允许更新：
4. 默认情况下，固定集合只有一个_id索引，而且最好是按数据写入的顺序进行读取。当然，也可以添加新的索引，但这会降低数据写入的性能。
5. 固定集合不支持分片，同时，在MongoDB 4.2版本中规定了事务中也无法对固定集合执行写操作

### 适用场景

- 固定集合很适合用来存储一些“临时态”的数据。
- 系统日志
- 存储少量文档，如最新发布的TopN条文章信息
- 使用固定集合实现FIFO队列，如



# WiredTiger

可插拔存储引擎的概念。目前主要有MMAPV1、WiredTiger存储引擎可供选择。

MongoDB为了尽可能保证业务查询的“热数据”能快速被访问，其内部缓存的默认大小达到了系统内存的一半。

## 读缓存

流程: 

- 数据库发起Buffer I/O读操作，由操作系统将磁盘数据页加载到文件系统的页缓存区。
- 引擎层读取页缓存区的数据，进行解压后存放到内部缓存区。
- 在内存中完成匹配查询，将结果返回给应用。

## 写缓冲

### 流程: 

- 应用向MongoDB写入数据（插入、修改或删除）。
- 数据库从内部缓存中获取当前记录所在的页块，如果不存在则会从磁盘中加载（Buffer I/O） 
- WiredTiger开始执行写事务，修改的数据写入页块的一个更新记录表，此时原来的记录仍然保持不变。
-  如果开启了Journal日志，则在写数据的同时会写入一条Journal日志（Redo Log）。该日志在最长不超过100ms之后写入磁盘
- 数据库每隔60s执行一次CheckPoint操作，此时内存中的修改会真正刷入磁盘。

### 如何提高性能:

- 如果每次写入都触发一次磁盘I/O，那么开销太大，而且响应时延会比较大。
- 多个变更的写入可以尽可能进行I/O合并，降低资源负荷。

### CheckPoint（检查点）机制

当建立CheckPoint时，WiredTiger会在内存中建立所有数据的一致性快照，并将该快照覆盖的所有数据变化一并进行持久化（fsync）。成功之后，内存中数据的修改才得以真正保存。

### Journal日志

如果开启了Journal日志，那么WiredTiger会将每个写操作的redo日志写入Journal缓冲区，该缓冲区会频繁地将日志持久化到磁盘上。默认情况下，Journal缓冲区每100ms执行一次持久化。此外，Journal日志达到100MB，或是应用程序指定journal：true，写操作都会触发日志的持久化。

由于Journal日志采用的是顺序I/O写操作，频繁地写入对磁盘的影响并不是很大。

一个优化点:  当Journal日志达到2GB时同样会触发CheckPoint行为。如果应用存在大量随机写入，则CheckPoint可能会造成磁盘I/O的抖动。在磁盘性能不足的情况下，问题会更加显著，此时适当缩短CheckPoint周期可以让写入平滑一些。

### 事务的控制

快照（snapshot）描述了某一时刻（point-in-time）数据在内存中的一致性视图，而这种数据的一致性是WiredTiger通过MVCC（多版本并发控制）实现的。

### 断电恢复

一旦MongoDB发生宕机，重启程序时会先恢复到上一个检查点，然后根据Journal日志恢复增量的变化。由于Journal日志持久化的间隔非常短，数据能得到更高的保障，如果按照当前版本的默认配置，则其在断电情况下最多会丢失100ms的写入数据。





# 聚合操作

聚合操作处理数据记录并返回计算结果。

## 单一作用聚合

提供了对常见聚合过程的简单访问，操作都从单个集合聚合文档

| 语法                                   | 含义                                                         |
| -------------------------------------- | ------------------------------------------------------------ |
| db.collection.estimatedDocumentCount() | 返回集合或视图中所有文档的计数                               |
| db.collection.count()                  | 返回与find()集合或视图的查询匹配的文档计数 。等同于 db.collection.find(query).count()构造。<br />db.collection.count()没有查询谓词可能导致计数不准确。要避免这些情况，请在分片群集上使用 db.collection.aggregate()方法。 |
| db.collection.distinct()               | 在单个集合或视图中查找指定字段的不同值，并在数组中返回结果。 |



## 聚合管道

他是一个计算框架。它可以：

- 作用在一个或几个集合上； 
- 对集合中的数据进行的一系列运算；
- 将这些数据转化为期望的形式；
- 类似于SQL 查询中的GROUP BY、 LEFT OUTER JOIN 、 AS等

### 管道（Pipeline）

整个聚合运算过程称为管道（Pipeline）

- 接受一系列文档（原始数据）；  
- 每个阶段(看下面的介绍)对这些文档进行一系列运算； 
- 结果文档输出给下一个阶段；

### 阶段（Stage）

管道是由多个阶段（Stage）组成的。

| 阶段           | 描述                         | SQL等价运算符   |
| -------------- | ---------------------------- | --------------- |
| $match         | 筛选条件                     | WHERE           |
| $project       | 投影                         | AS              |
| $lookup        | 左外连接                     | LEFT OUTER JOIN |
| $sort          | 排序                         | ORDER BY        |
| $group         | 分组                         | GROUP BY        |
| $count         | 计数并返回与查询匹配的结果数 |                 |
| $skip/$limit   | 分页                         |                 |
| $unwind        | 展开数组                     |                 |
| $graphLookup   | 图搜索                       |                 |
| $facet/$bucket | 分面搜索                     |                 |

#### $group

按指定的表达式对文档进行分组，并将每个不同分组的文档输出到下一个阶段。

$group不会输出具体的文档而只是统计信息。

```javascript
{ $group: { _id: <expression>, <field1>: { <accumulator1> : <expression1> }, ... } }
```

- _id字段是必填的;但是，可以指定_id值为null来为整个输入文档计算累计值。
- 剩余的计算字段是可选的，并使用运算符进行计算。
- _id和表达式可以接受任何有效的[表达式](https://docs.mongodb.com/manual/meta/aggregation-quick-reference/#aggregation-expressions)。

#### accumulator操作符

| 名称        | 描述                                                         | 类比sql   |
| ----------- | ------------------------------------------------------------ | --------- |
| $avg        | 计算均值                                                     | avg       |
| $first      | 返回每组第一个文档，如果有排序，按照排序，如果没有按照默认的存储的顺序的第一个文档。 | limit 0,1 |
| $last       | 返回每组最后一个文档，如果有排序，按照排序，如果没有按照默认的存储的顺序的最后个文档。 | -         |
| $max        | 根据分组，获取集合中所有文档对应值得最大值。                 | max       |
| $min        | 根据分组，获取集合中所有文档对应值得最小值。                 | min       |
| $push       | 将指定的表达式的值添加到一个数组中。                         | -         |
| $addToSet   | 将表达式的值添加到一个集合中（无重复值，无序）。             | -         |
| $sum        | 计算总和                                                     | sum       |
| $stdDevPop  | 返回输入值的总体标准偏差（population standard deviation）    | -         |
| $stdDevSamp | 返回输入值的样本标准偏差（the sample standard deviation）    | -         |

#### $unwind

可以将数组拆分为单独的文档

```javascript
{
  $unwind:
    {
     #要指定字段路径，在字段名称前加上$符并用引号括起来。
      path: <field path>,
      #可选,一个新字段的名称用于存放元素的数组索引。该名称不能以$开头。
      includeArrayIndex: <string>,  
      #可选，default :false，若为true,如果路径为空，缺少或为空数组，则$unwind输出文档
      preserveNullAndEmptyArrays: <boolean> 
    } 
}
```

#### $lookup

每个输入待处理的文档，经过$lookup 阶段的处理，输出的新文档中会包含一个新生成的数组。

数组列存放的数据是来自被Join集合的适配文档，如果没有，集合为空（即 为[ ])

```javascript
db.collection.aggregate([{
      $lookup: {
             from: "<collection to join>", // 同一个数据库下等待被Join的集合。
             localField: "<field from the input documents>",  // 源集合中的match值，如果输入的集合中，某文档没有 localField这个Key（Field），在处理的过程中，会默认为此文档含有 localField：null的键值对。
             foreignField: "<field from the documents of the from collection>",  // 待Join的集合的match值，如果待Join的集合中，文档没有foreignField值，在处理的过程中，会默认为此文档含有 foreignField：null的键值对。
             as: "<output array field>"  // 为输出文档的新增值命名。如果输入的集合中已存在该值，则会覆盖掉
           }
  })
```

### 语法

```javascript
// pipelines 一组数据聚合阶段。除$out、$Merge和$geonear阶段之外，每个阶段都可以在管道中出现多次。 
pipeline = [$stage1, $stage2, ...$stageN];
// options 可选，聚合操作的其他参数。包含：查询计划、是否使用临时文件、 游标、最大操作时间、读写策略、强制索引等等
db.collection.aggregate(pipeline, {options})
```



## MapReduce

已经被聚合管道代替(他能做的事聚合管道都能做)，官方已经废弃了。



# 多文档事务

在 4.2 开始全面(如: 复制集的多表多行，分片集群的多表多行 )支持了多文档事务。 

## 原则

- **无论何时**，事务的使用总是能避免则避免； 
- 模型设计先于事务，尽可能用模型设计规避事务；
- 不要使用过大的事务（尽量控制在 1000 个文档更新以内）； 
- 当必须使用事务时，尽可能让涉及事务的文档分布在同一个分片上，这将有效地提高效率；



## 注意事项

- 可以实现和关系型数据库类似的事务场景 
- 必须使用与 MongoDB 4.2 兼容的驱动； 
- 事务默认必须在 60 秒（可调）内完成，否则将被取消； 
- 涉及事务的分片不能使用仲裁节点； 
- 事务会影响 chunk 迁移效率。正在迁移的 chunk 也可能造成事务提交失败（重试 即可）；
- 多文档事务中的读操作必须使用主节点读； 
- readConcern 只应该在事务级别设置，不能设置在每次读写操作上。

## writeConcern

决定一个写操作落到多少个节点上才算成功。

```javascript
// java 使用
writeConcern ： { w: <value>, j: <boolean>, wtimeout: <number> }  
// 等待大多数成员节点写入数据后才会响应,超时写入失败
db.user.insertOne({name:"小明"},{writeConcern:{w:"majority",wtimeout:3000}})
```

1. w: 数据写入到number个节点才向用客户端确认
2. 写入操作的journal持久化后才向客户端确认
3. wtimeout: 写入超时时间，仅w的值大于1时有效。

总结: 

- 虽然多于半数的 writeConcern 都是安全的，但通常只会设置 majority，因为这是等待写入延迟时间最短的选择； 
- 不要设置 writeConcern 等于总节点数，因为一旦有一个节点故障，所有写操作都将失败；
-  writeConcern 虽然会增加写操作延迟时间，但并不会显著增加集群压力，因此无论是否等待，写操作最终都会复制到所有节点上。设置 writeConcern 只是让写操作等待复制后再返回而已；
- 应对重要数据应用 {w: “majority”}，普通数据可以应用 {w: 1} 以确保最佳性能。

## readPreference

决定使用哪一个节点来满足正在发起的读请求。

- primary: 只选择主节点，默认模式；   对于实时要求高的。
- primaryPreferred：优先选择主节点，如果主节点不可用则选择从节点；  
- secondary：只选择从节点；   对于报表类，实时要求不高的。
- secondaryPreferred：优先选择从节点， 如果从节点不可用则选择主节点； 
- nearest：根据客户端对节点的 Ping 值判断节点的远近，选择从最近的节点读取。    cdn要访问的信息。

```javascript
// 配置:: 
// 通过 MongoDB 的连接串参数：
mongodb://host1:27107,host2:27107,host3:27017/?replicaSet=rs0&readPreference=secondary
// 通过 MongoDB 驱动程序 API：
MongoCollection.withReadPreference(ReadPreference readPref)
// Mongo Shell：
db.collection.find().readPref( "secondary" )
```

## Tag

readPreference 只能控制使用一类节点。Tag 则可以将节点选择控制到一个或几个节点。

```javascript
// 为复制集节点添加标签
conf = rs.conf()
conf.members[1].tags = { purpose: "online"}
conf.members[4].tags = { purpose: "analyse"}
rs.reconfig(conf)
// 查询
db.collection.find({}).readPref( "secondary", [ {purpose: "analyse"} ] )
```

## readConcern

readConcern 决定这个节点上的数据哪些是可读的，类似于关系数据库的隔离级别。

- available：读取所有可用的数据; 
- local：读取所有可用且属于当前分片的数据;
- majority：读取在大多数节点上提交完成的数据;   数据读一致性的充分保证。
- linearizable：可线性化读取文档，仅支持从主节点读;   增强处理 majority 情况下主节点失联时候的例外情况 
- snapshot：读取最近快照中的数据，仅可用于多文档事务;   最高隔离级别，接近于关系型数据库的Serializable

如果事务内使用 {readConcern: “snapshot”}，则可以达到可重复读 Repeatable Read

## 事务超时

在执行事务的过程中，如果操作太多，或者存在一些长时间的等待，则可能会产生NoSuchTracnsaction异常。 

默认情况下MongoDB会为每个事务设置1分钟的超时时间，如果在该时间内没有提交，就会强制将其终止。

## 事务写机制

- 当一个事务开始后，如果事务要修改的文档在事务外部被修改过，会报错。
- 如果一个事务已经开始修改一个文档，其他事务会等待事务完成后才继续进行。



# MongoDB开发规范

（1）命名原则。数据库、集合命名需要简单易懂，数据库名使用小写字符，集合名称使用统一命名风格，可以统一大小写或使用驼峰式命名。数据库名和集合名称均不能超过64个字符。

（2）集合设计。对少量数据的包含关系，使用嵌套模式有利于读性能和保证原子性的写入。对于复杂的关联关系，以及后期可能发生演进变化的情况，建议使用引用模式。

（3）文档设计。避免使用大文档，MongoDB的文档最大不能超过16MB。如果使用了内嵌的数组对象或子文档，应该保证内嵌数据不会无限制地增长。在文档结构上，尽可能减少字段名的长度，MongoDB会保存文档中的字段名，因此字段名称会影响整个集合的大小以及内存的需求。一般建议将字段名称控制在32个字符以内。

（4）索引设计。在必要时使用索引加速查询。避免建立过多的索引，单个集合建议不超过10个索引。MongoDB对集合的写入操作很可能也会触发索引的写入，从而触发更多的I/O操作。无效的索引会导致内存空间的浪费，因此有必要对索引进行审视，及时清理不使用或不合理的索引。遵循索引优化原则，如覆盖索引、优先前缀匹配等，使用explain命令分析索引性能。

（5）分片设计。对可能出现快速增长或读写压力较大的业务表考虑分片。分片键的设计满足均衡分布的目标，业务上尽量避免广播查询。应尽早确定分片策略，最好在集合达到256GB之前就进行分片。如果集合中存在唯一性索引，则应该确保该索引覆盖分片键，避免冲突。为了降低风险，单个分片的数据集合大小建议不超过2TB。

（6）升级设计。应用上需支持对旧版本数据的兼容性，在添加唯一性约束索引之前，对数据表进行检查并及时清理冗余的数据。新增、修改数据库对象等操作需要经过评审，并保持对数据字典进行更新。

（7）考虑数据老化问题，要及时清理无效、过期的数据，优先考虑为系统日志、历史数据表添加合理的老化策略。

（8）数据一致性方面，非关键业务使用默认的WriteConcern：1（更高性能写入）；对于关键业务类，使用WriteConcern：majority保证一致性（性能下降）。如果业务上严格不允许脏读，则使用ReadConcern：majority选项。

（9）使用update、findAndModify对数据进行修改时，如果设置了upsert：true，则必须使用唯一性索引避免产生重复数据。

（10）业务上尽量避免短连接，使用官方最新驱动的连接池实现，控制客户端连接池的大小，最大值建议不超过200。

（11）对大量数据写入使用Bulk Write批量化API，建议使用无序批次更新。

（12）优先使用单文档事务保证原子性，如果需要使用多文档事务，则必须保证事务尽可能小，一个事务的执行时间最长不能超过60s。

（13）在条件允许的情况下，利用读写分离降低主节点压力。对于一些统计分析类的查询操作，可优先从节点上执行。

（14）考虑业务数据的隔离，例如将配置数据、历史数据存放到不同的数据库中。微服务之间使用单独的数据库，尽量避免跨库访问。

（15）维护数据字典文档并保持更新，提前按不同的业务进行数据容量的规划。





# MongoDB调优

1.  慢查询
2. 阻塞等待
3. 硬件资源不足

1,2通常是因为模型/索引设计不佳导致的

排查思路：按1-2-3依次排查

**影响因素:** 

客户端请求 :  writeConcern、readPreference、readConcern、jonmal、方案设计等等

驱动设置:   长连接、超时时间、游标处理时间

MongoDB存储引擎 ：  存储、刷盘时间、快照、压缩率

OS 系统 ： 

硬件 :  足够内存、SSD

# MongoDB性能监控工具

- mongostat :  查看当前的QPS/内存使用/连接数
- mongotop :  查看数据库的热点表
- Profiler模块 :   记录的日志都是已经发生的事情
- db.currentOp() : 查看数据库当前正在执行的一些操作，读取的是当前数据库的命令快照

# change stream

3.6版本开始提供订阅数据变更的功能。

Change Stream 是基于 oplog 实现的，提供推送实时增量的推送功能。

## 使用场景 

- 微服务联动
- 其他任何需要系统联动的场景。
- 如: 监控、分析平台 、数据同步、消息推送 

## 注意事项 

- Change Stream 依赖于 oplog，因此中断时间不可超过 oplog 回收的最大时间窗；  
- 在执行 update 操作时，如果只更新了部分数据，那么 Change Stream 通知的也是增量部分； 
- 删除数据时通知的仅是删除数据的 _id。





# 参考资料

[MongoDB介绍](https://www.cnblogs.com/rb2010/p/16048695.html)

[记一次 MongoDB 占用 CPU 过高问题的排查](https://cloud.tencent.com/developer/article/1495820)

[MongoDB线上案例：一个参数提升16倍写入速度](https://cloud.tencent.com/developer/article/1857119)
