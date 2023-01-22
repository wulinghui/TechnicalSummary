---
title: MongoDB索引
date: 2022-04-21 15:31:27
permalink: /pages/b7113c/
categories:
  - 数据库
  - MongoDB
tags:
  - 
author: 
  name: wulinghui
  link: https://gitee.com/hellowllh/projects
---
# MongoDB索引数据结构

- WiredTiger官方文档：介绍明确指出是B+树。（而不是B树）
- mysql的调优经验再这里一样适用。

# 索引的分类

- 按照索引包含的字段数量，可以分为单键索引和组合索引（或复合索引）。
- 按照索引字段的类型，可以分为主键索引和非主键索引。
- 按照索引节点与物理记录的对应方式来分，可以分为聚簇索引和非聚簇索引，其中聚簇索引是指索引节点上直接包含了数据记录，而后者则仅仅包含一个指向数据记录的指针。
- 按照索引的特性不同，又可以分为唯一索引、稀疏索引、文本索引、地理空间索引等

# 索引设计原则

1. 每个查询原则上都需要创建对应索引
2. 单个索引设计应考虑满足尽量多的查询
3. 索引字段选择及顺序需要考虑查询覆盖率及选择性
4. 对于更新及其频繁的字段上创建索引需慎重
5. 对于数组索引需要慎重考虑未来元素个数
6. 对于超长字符串类型字段上慎用索引
7. 并发更新较高的单个集合上不宜创建过多索引

# 索引操作

```javascript
// 创建索引语法格式
db.collection.createIndex(keys, options)
// 查看索引信息
db.books.getIndexes()
// 查看索引键
db.books.getIndexKeys()
// 查看索引占用空间
db.collection.totalIndexSize([is_detail])
// 删除集合指定索引
db.col.dropIndex("索引名称")
//  删除集合所有索引   不能删除主键索引
db.col.dropIndexes()
```

可选参数列表如下：

| **Parameter**      | **Type**      | **Description**                                              |
| ------------------ | ------------- | ------------------------------------------------------------ |
| background         | Boolean       | 建索引过程会阻塞其它数据库操作，background可指定以后台方式创建索引，即增加 "background" 可选参数。 "background" 默认值为false。 |
| unique             | Boolean       | 建立的索引是否唯一。指定为true创建唯一索引。默认值为false.   |
| name               | string        | 索引的名称。如果未指定，MongoDB的通过连接索引的字段名和排序顺序生成一个索引名称。 |
| dropDups           | Boolean       | 3.0+版本已废弃。在建立唯一索引时是否删除重复记录,指定 true 创建唯一索引。默认值为 false. |
| sparse             | Boolean       | 对文档中不存在的字段数据不启用索引；这个参数需要特别注意，如果设置为true的话，在索引字段中不会查询出不包含对应字段的文档。默认值为 false. |
| expireAfterSeconds | integer       | 指定一个以秒为单位的数值，完成 TTL设定，设定集合的生存时间。 |
| v                  | index version | 索引的版本号。默认的索引版本取决于mongod创建索引时运行的版本。 |
| weights            | document      | 索引权重值，数值在 1 到 99,999 之间，表示该索引相对于其他索引字段的得分权重。 |
| default_language   | string        | 对于文本索引，该参数决定了停用词及词干和词器的规则的列表。 默认为英语 |
| language_override  | string        | 对于文本索引，该参数指定了包含在文档中的字段名，语言覆盖默认的language，默认值为 language. |

# 索引类型

## 单键索引

某一个特定的字段上建立索引

`db.inventory.createIndex( { item:1 },{unique:true,background: true} )`   // 创建唯一索引后台执行              

## 复合索引

多个字段组合而成的索引

`db.inventory.createIndex( { item:1,ratings: 1 } )`

## 多键索引

在数组的属性上建立索引，多键索引也可以出现在复合字段上

`db.inventory.createIndex( { ratings: 1 } )`

针对这个数组的任意值的查询都会定位到这个文档,既多个索引入口或者键值引用同一个文档

**注意：**MongoDB并不支持一个复合索引中同时出现多个数组字段

## 地理空间索引

地理空间索引（2dsphereindex）就是专门用于实现位置检索的一种特殊索引。

`db.restaurant.createIndex({location : "2dsphere"})`

## 全文索引（Text Indexes）

```javascript
db.stores.createIndex({name: "text", description: "text"})
//  通过$text操作符来查寻数据中所有包含“coffee”,”shop”，“java”列表中任何词语的商店
db.stores.find({$text: {$search: "java coffee shop"}})
```

**注意：** MongoDB的文本索引功能存在诸多限制，而官方并未提供中文分词的功能

## Hash索引

在索引字段上进行精确匹配,但不支持范围查询,不支持多键hash；

`db.users.createIndex({username : 'hashed'})`

## 通配符索引

支持对未知或任意字段的查询

```javascript
db.products.createIndex( { "product_attributes.$**" : 1 } )
// 下面都会走索引。
db.products.find( { "product_attributes.size.length" : { $gt : 60 } } )
db.products.find( { "product_attributes.material" : "Leather" } )
db.products.find( { "product_attributes.secret_feature.name" : "laser" } )
```

**注意：**  

1. 通配符索引不兼容的索引类型或属性。 TTL、TEXT、2D、unique、hashed
2. 通配符索引是稀疏的，不索引空字段。因此，通配符索引不能支持查询字段不存在的文档。
3. 通配符索引为文档或数组的内容生成条目，而不是文档/数组本身。因此通配符索引不能支持精确的文档/数组相等匹配。





# 索引属性

## 唯一索引

唯一性是很常见的一种索引约束需求。

- 唯一性索引对于文档中缺失的字段，会使用null值代替。
- 可以用它来指定某些字段必输。
- 对于分片的集合，唯一性约束必须匹配分片规则。

## 部分索引

仅对满足指定过滤器表达式的文档进行索引。

部分索引具有更低的存储需求和更低的索引创建和维护的性能成本。

```javascript
// partialFilterExpression选项接受指定过滤条件的文档
/**
    等式表达式(例如:field: value或使用$eq操作符)
    $exists: true
    $gt， $gte， $lt， $lte
    $type 
    顶层的$and
**/
db.restaurants.createIndex(
   { cuisine: 1, name: 1 },
   { partialFilterExpression: { rating: { $gt: 5 } } }
)

// 符合条件，使用索引
db.restaurants.find( { cuisine: "Italian", rating: { $gte: 8 } } )
// 不符合条件，不能使用索引
db.restaurants.find( { cuisine: "Italian" } )
```

注意:  **唯一约束结合部分索引使用导致唯一约束失效的问题**

 如果同时指定了partialFilterExpression和唯一约束，那么唯一约束只适用于满足筛选器表达式的文档。

如果文档不满足筛选条件，那么带有惟一约束的部分索引不会阻止插入不满足惟一约束的文档。 

也就是说不满足部分索引条件的还可以插入成功。

## 稀疏索引

索引只包含具有索引字段的文档的条目，索引将跳过没有索引字段的文档。

特性： 只对存在字段的文档进行索引（包括字段值为null的文档）

同时具有稀疏性和唯一性的索引可以防止集合中存在字段值重复的文档，但允许不包含此索引字段的文档插入。

**注意:**  如果稀疏索引会导致查询和排序操作的结果集不完整，MongoDB将不会使用该索引，除非hint()明确指定索引。

```javascript
# 创建具有唯一约束的稀疏索引
db.scores.createIndex( { score: 1 } , { sparse: true, unique: true } )
```



## TTL索引

需要声明在一个日期类型的字段中，TTL 索引是特殊的单字段索引，MongoDB 可以使用它在一定时间或特定时钟时间后自动从集合中删除文档。

TTL 索引不保证过期数据会在过期后立即被删除。文档过期和 MongoDB 从数据库中删除文档的时间之间可能存在延迟。删除过期文档的后台任务**每 60 秒**运行一次。因此，在文档到期和后台任务运行之间的时间段内，文档可能会保留在集合中。

### 可变的过期时间

TTL索引在创建之后，仍然可以对过期时间进行修改。

```javascript
db.eventlog.createIndex( { "lastModifiedDate": 1 }, { expireAfterSeconds: 3600 } )
// 重置过期时间
db.runCommand({collMod:"log_events",index:{keyPattern:{createdAt:1},expireAfterSeconds:600}})
```

### 使用约束

- TTL索引只能支持单个字段，并且必须是非_id字段。
- TTL索引不能用于固定集合。 
- TTL索引无法保证及时的数据老化，60s的延迟
- TTL索引对于数据的清理仅仅使用了remove命令，这种方式并不是很高效。 （相比之下，按日期分表的方式操作会更加高效。）

## 隐藏索引

隐藏索引对查询规划器不可见，不能用于支持查询。

通过对规划器隐藏索引，用户可以在不实际删除索引的情况下评估删除索引的潜在影响。如果影响是负面的，用户可以取消隐藏索引，而不必重新创建已删除的索引。

```javascript
创建隐藏索引
db.restaurants.createIndex({ borough: 1 },{ hidden: true });
# 隐藏现有索引
db.restaurants.hideIndex( { borough: 1} );
db.restaurants.hideIndex( "索引名称" )
# 取消隐藏索引
db.restaurants.unhideIndex( { borough: 1} );
db.restaurants.unhideIndex( "索引名称" ); 
```



# 索引使用建议

1. 为每一个查询建立合适的索引
2. 创建合适的复合索引，不要依赖于交叉索引
3. 复合索引字段顺序：匹配条件在前，范围条件在后
4. 尽可能使用覆盖索引
5. 建索引要在后台运行
6. 避免设计过长的数组索引

# explain执行计划

```javascript
db.collection.find().explain(<verbose>)
//                              
db.books.find({title:"book-1"}).explain("queryPlanner")                             
```





verbose 如下:   默认queryPlanner

| 模式名字          | 描述                                                         |
| ----------------- | ------------------------------------------------------------ |
| queryPlanner      | 执行计划的详细信息，包括查询计划、集合信息、查询条件、最佳执行计划、查询方式和 MongoDB 服务信息等 |
| exectionStats     | 最佳执行计划的执行情况和被拒绝的计划等信息                   |
| allPlansExecution | 选择并执行最佳执行计划，并返回最佳执行计划和其他执行计划的执行情况 |



## queryPlanner

| **字段名称**   | **描述**                    |
| -------------- | --------------------------- |
| indexFilterSet | 是否使用索引                |
| parsedQuery    | 查询条件                    |
| winningPlan    | 最佳执行计划                |
| stage          | 查询方式，在winningPlan里面 |
| filter         | 过滤条件                    |



## stage状态

| **状态**        | **描述**                               |
| --------------- | -------------------------------------- |
| COLLSCAN        | 全表扫描                               |
| IXSCAN          | 索引扫描                               |
| FETCH           | 根据索引检索指定文档                   |
| SHARD_MERGE     | 将各个分片返回数据进行合并             |
| SORT            | 在内存中进行了排序                     |
| LIMIT           | 使用limit限制返回数                    |
| SKIP            | 使用skip进行跳过                       |
| IDHACK          | 对_id进行查询                          |
| SHARDING_FILTER | 通过mongos对分片数据进行查询           |
| COUNTSCAN       | count不使用Index进行count时的stage返回 |
| COUNT_SCAN      | count使用了Index进行count时的stage返回 |
| SUBPLA          | 未使用到索引的$or查询的stage返回       |
| TEXT            | 使用全文索引进行查询时候的stage返回    |
| PROJECTION      | 限定返回字段时候stage的返回            |

执行计划的返回结果中尽量不要出现以下stage:

- COLLSCAN(全表扫描)
- SORT(使用sort但是无index)
- 不合理的SKIP
- SUBPLA(未用到index的$or)
- COUNTSCAN(不使用index进行count)

