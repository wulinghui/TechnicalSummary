(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{548:function(v,_,a){"use strict";a.r(_);var t=a(7),r=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[v._v("#")]),v._v(" 介绍")]),v._v(" "),_("p",[v._v("最初叫ShardingJDBC。到现在他包含三个重要的产品ShardingJDBC、ShardingProxy和 ShardingSidecar。")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th"),v._v(" "),_("th",[v._v("ShardingJDBC")]),v._v(" "),_("th",[v._v("ShardingProxy")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("数据库")]),v._v(" "),_("td",[v._v("任意")]),v._v(" "),_("td",[v._v("MySQL/PostgreSQL")])]),v._v(" "),_("tr",[_("td",[v._v("连接消耗数")]),v._v(" "),_("td",[v._v("高")]),v._v(" "),_("td",[v._v("低")])]),v._v(" "),_("tr",[_("td",[v._v("异构语言")]),v._v(" "),_("td",[v._v("仅java")]),v._v(" "),_("td",[v._v("任意")])]),v._v(" "),_("tr",[_("td",[v._v("性能")]),v._v(" "),_("td",[v._v("损耗低")]),v._v(" "),_("td",[v._v("损耗略高")])]),v._v(" "),_("tr",[_("td",[v._v("中心化")]),v._v(" "),_("td",[v._v("无")]),v._v(" "),_("td",[v._v("是")])]),v._v(" "),_("tr",[_("td",[v._v("静态入口")]),v._v(" "),_("td",[v._v("无")]),v._v(" "),_("td",[v._v("有")])]),v._v(" "),_("tr",[_("td",[v._v("业务侵入")]),v._v(" "),_("td",[v._v("大")]),v._v(" "),_("td",[v._v("无")])])])]),v._v(" "),_("h1",{attrs:{id:"shardingjdbc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#shardingjdbc"}},[v._v("#")]),v._v(" ShardingJDBC")]),v._v(" "),_("h2",{attrs:{id:"读写分离"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#读写分离"}},[v._v("#")]),v._v(" 读写分离")]),v._v(" "),_("p",[v._v("核心配置mast name，slave name就行了。")]),v._v(" "),_("h2",{attrs:{id:"核心概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[v._v("#")]),v._v(" 核心概念")]),v._v(" "),_("ul",[_("li",[v._v("逻辑表：水平拆分的数据库的相同逻辑和数据结构表的总称")]),v._v(" "),_("li",[v._v("真实表：在分片的数据库中真实存在的物理表。")]),v._v(" "),_("li",[v._v("数据节点：数据分片的最小单元。由数据源名称和数据表组成")]),v._v(" "),_("li",[v._v("绑定表：分片规则一致的主表和子表。  防止笛卡尔集，提高性能。绑定关系不能自定义，按分片的计算结果绑定的。")]),v._v(" "),_("li",[v._v("广播表：也叫公共表，指素有的分片数据源中都存在的表，表结构和表中的数据 在每个数据库中都完全一致(强一致性的)。例如字典表。")]),v._v(" "),_("li",[v._v("分片键：用于分片的数据库字段，是将数据库(表)进行水平拆分的关键字段。 SQL中若没有分片字段，将会执行全路由，性能会很差。")]),v._v(" "),_("li",[v._v("分片算法：通过分片算法将数据进行分片，支持通过=、BETWEEN和IN分片。 分片算法需要由应用开发者自行实现，可实现的灵活度非常高。")]),v._v(" "),_("li",[v._v("分片策略：真正用于进行分片操作的是分片键+分片算法。分库和分表策略可以随意组合。")])]),v._v(" "),_("h2",{attrs:{id:"配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[v._v("#")]),v._v(" 配置")]),v._v(" "),_("ul",[_("li",[v._v("配置真实数据源")]),v._v(" "),_("li",[v._v("指定表的分布情况")]),v._v(" "),_("li",[v._v("指定表的主键生成策略")]),v._v(" "),_("li",[v._v("选定计算的字段")]),v._v(" "),_("li",[v._v("根据计算的字段算出对应的库名。")]),v._v(" "),_("li",[v._v("根据计算的字段算出对应的表名。")])]),v._v(" "),_("h2",{attrs:{id:"分片算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分片算法"}},[v._v("#")]),v._v(" 分片算法")]),v._v(" "),_("h3",{attrs:{id:"noneshardingstrategy"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#noneshardingstrategy"}},[v._v("#")]),v._v(" NoneShardingStrategy")]),v._v(" "),_("p",[v._v("不分片")]),v._v(" "),_("h3",{attrs:{id:"inlineshardingstrategy"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#inlineshardingstrategy"}},[v._v("#")]),v._v(" InlineShardingStrategy")]),v._v(" "),_("ul",[_("li",[v._v("内联分片")]),v._v(" "),_("li",[v._v("按照分片表达式来进行分片。")]),v._v(" "),_("li",[v._v("支持 = 或者 IN")]),v._v(" "),_("li",[v._v("不支持范围分片")])]),v._v(" "),_("h3",{attrs:{id:"standardshardingstrategy"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#standardshardingstrategy"}},[v._v("#")]),v._v(" StandardShardingStrategy")]),v._v(" "),_("ul",[_("li",[v._v("标准分片，精确和范围。")]),v._v(" "),_("li",[v._v("自定义实现类实现算法")]),v._v(" "),_("li",[v._v("支持 = 或者 IN  范围，其中精确分片算法是必须提供的，而范围分片算法则是可选的。")]),v._v(" "),_("li",[v._v("只支持单分片键的标准分片策略")])]),v._v(" "),_("h3",{attrs:{id:"complexshardingstrategy"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#complexshardingstrategy"}},[v._v("#")]),v._v(" ComplexShardingStrategy")]),v._v(" "),_("ul",[_("li",[v._v("复杂分片，多字段分表")]),v._v(" "),_("li",[v._v("有标准分片的特性，同时提供按照多个分片列进行综合分片的算法")]),v._v(" "),_("li",[v._v("但是分片的类型要保持一致")])]),v._v(" "),_("h3",{attrs:{id:"hintshardingstrategy"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hintshardingstrategy"}},[v._v("#")]),v._v(" HintShardingStrategy")]),v._v(" "),_("ul",[_("li",[v._v("强制路由分片")]),v._v(" "),_("li",[v._v("强制走业务代码算法中设置的表。比如在按userid奇偶分片的策略下，select userid from t_user where userid in (1,3,5,7,9)可以操作的。")]),v._v(" "),_("li",[v._v("分片键是线程隔离的，只在当前线程有效，所以通常建 议使用之后立即关闭，或者用try资源方式打开。")]),v._v(" "),_("li",[v._v("限制: 不支持函数计算，不支持多层子查询，不支持UNION")])]),v._v(" "),_("h2",{attrs:{id:"主键生成策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主键生成策略"}},[v._v("#")]),v._v(" 主键生成策略")]),v._v(" "),_("p",[v._v("默认提供了UUID和SNOWFLAKE")]),v._v(" "),_("h3",{attrs:{id:"uuid"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#uuid"}},[v._v("#")]),v._v(" UUID")]),v._v(" "),_("p",[v._v("采用UUID.randomUUID()的方式产生唯一且不重复的分布式主键。最终生成一 个字符串类型的主键。缺点是生成的主键无序。")]),v._v(" "),_("h3",{attrs:{id:"snowflake"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#snowflake"}},[v._v("#")]),v._v(" SNOWFLAKE")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("雪花算法,能够保证不同进程主键的不重复性，"),_("strong",[v._v("相同进程")]),v._v("主键的有序性。")])]),v._v(" "),_("li",[_("p",[v._v("缺点：强依赖机器时钟，如果机器上时钟回拨，会导致发号重复。")])]),v._v(" "),_("li",[_("p",[v._v("注意: 他是局部有序，不是全局有序。")])]),v._v(" "),_("li",[_("p",[v._v("二进制形式 包含4部分，从高位到低位分表为：1bit符号位、41bit时间戳位、10bit工作进程位 以及12bit序列号位。")])])]),v._v(" "),_("h3",{attrs:{id:"spi扩展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#spi扩展"}},[v._v("#")]),v._v(" SPI扩展")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("目标： 1、全局唯一，2、高性能，3、高可用，4、趋势递增")])]),v._v(" "),_("li",[_("p",[v._v("通过SPI实现对应接口实现")])]),v._v(" "),_("li",[_("p",[v._v("不要再应用层给他设置主键，"),_("strong",[v._v("切记")]),v._v("。")])]),v._v(" "),_("li",[_("p",[v._v("可以采用时间+redis分布式主键获得区段自增，以实现扩容时不需要进行数据迁移。")])])]),v._v(" "),_("h2",{attrs:{id:"sql使用限制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sql使用限制"}},[v._v("#")]),v._v(" SQL使用限制")]),v._v(" "),_("h1",{attrs:{id:"分片内核剖析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分片内核剖析"}},[v._v("#")]),v._v(" 分片内核剖析")]),v._v(" "),_("h2",{attrs:{id:"解析引擎"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解析引擎"}},[v._v("#")]),v._v(" 解析引擎")]),v._v(" "),_("p",[v._v("词法解析器用于将SQL拆解成抽象语法树，一开始采用Druid再自研再用ANLTR再增加一些AST的缓存机制(针对ANLTR4的特性，官网"),_("strong",[v._v("建议尽量")]),v._v("采用PreparedStatement的预编译方式来提高SQL执行的性能)。")]),v._v(" "),_("h2",{attrs:{id:"路由引擎"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#路由引擎"}},[v._v("#")]),v._v(" 路由引擎")]),v._v(" "),_("p",[v._v("根据解析上下文匹配数据库和表的分片策略，生成路由路径。")]),v._v(" "),_("p",[v._v("单片路由、多片路由、范围路由、广播路由")]),v._v(" "),_("h2",{attrs:{id:"改写引擎"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#改写引擎"}},[v._v("#")]),v._v(" 改写引擎")]),v._v(" "),_("p",[v._v("用户只需要面向逻辑库和逻辑表来写SQL，最终由ShardigSphere的改写引擎将 SQL改写为在真实数据库中可以正确执行的语句。")]),v._v(" "),_("h2",{attrs:{id:"执行引擎"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#执行引擎"}},[v._v("#")]),v._v(" 执行引擎")]),v._v(" "),_("p",[v._v("ShardingSphere并不是简单的将改写完的SQL提交到数据库执行。执行引擎的目标是自动化的平衡资源控制和执行效率，目前就是靠下面的模式。")]),v._v(" "),_("h3",{attrs:{id:"内存限制模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存限制模式"}},[v._v("#")]),v._v(" 内存限制模式")]),v._v(" "),_("p",[v._v("不限制连接数，并发执行，但是查询并发，结果集会使用"),_("strong",[v._v("流式归并")]),v._v("(这个过程慢n^2)，解决内存溢出，吞吐量高，适合OLAP数据分析场景。")]),v._v(" "),_("h3",{attrs:{id:"连接限制模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#连接限制模式"}},[v._v("#")]),v._v(" 连接限制模式")]),v._v(" "),_("p",[v._v("对连接数进行限制，内存不限制，查询查用"),_("strong",[v._v("串行")]),v._v("，结果集"),_("strong",[v._v("内存归并")]),v._v("，"),_("strong",[v._v("效率高")]),v._v("，比较适合小数据量的OLTP事务场景。")]),v._v(" "),_("h2",{attrs:{id:"归并引擎"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#归并引擎"}},[v._v("#")]),v._v(" 归并引擎")]),v._v(" "),_("p",[v._v("将从各个数据节点获取的多数据结果集，组合成为一个结果集并正确的返回至请求 客户端，称为结果归并。")]),v._v(" "),_("h3",{attrs:{id:"流式归并"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流式归并"}},[v._v("#")]),v._v(" 流式归并")]),v._v(" "),_("p",[v._v("流式归并是指以一条一条数据的方式进行迭代归并，而内存归并是将所有结果集 都查询到内存中，进行统一归并")]),v._v(" "),_("h3",{attrs:{id:"内存归并"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内存归并"}},[v._v("#")]),v._v(" 内存归并")]),v._v(" "),_("p",[v._v("读出来都在jvm内存中处理。")]),v._v(" "),_("h3",{attrs:{id:"排序归并"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#排序归并"}},[v._v("#")]),v._v(" 排序归并")]),v._v(" "),_("p",[v._v("多个库，有多个指针去遍历。")]),v._v(" "),_("h1",{attrs:{id:"spi"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#spi"}},[v._v("#")]),v._v(" SPI")]),v._v(" "),_("p",[v._v("具体的见官网的《开发者⼿册》")]),v._v(" "),_("h2",{attrs:{id:"解析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[v._v("#")]),v._v(" 解析")]),v._v(" "),_("ul",[_("li",[v._v("SQLParserFacade： 配置⽤于 SQL 解析的词法分析器和语法分析器⼊口")]),v._v(" "),_("li",[v._v("SQLVisitorFacade ： SQL 语法树访问器⼊口")]),v._v(" "),_("li",[v._v("ShardingSphereRuleBuilder ： ⽤于将⽤⼾配置转化为规则对象")])]),v._v(" "),_("h2",{attrs:{id:"内核"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内核"}},[v._v("#")]),v._v(" 内核")]),v._v(" "),_("ul",[_("li",[v._v("DatabaseType ： ⽀持的数据库类型")]),v._v(" "),_("li",[v._v("SQLRouter ： ⽤于处理路由结果")]),v._v(" "),_("li",[v._v("SQLRewriteContextDecorator ： ⽤于处理 SQL 改写结果")]),v._v(" "),_("li",[v._v("SQLExecutionHook ： SQL 执⾏过程监听器")]),v._v(" "),_("li",[v._v("ResultProcessEngine ： ⽤于处理结果集")])]),v._v(" "),_("h2",{attrs:{id:"数据分片"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据分片"}},[v._v("#")]),v._v(" 数据分⽚")]),v._v(" "),_("ul",[_("li",[v._v("ShardingAlgorithm ： 分⽚算法")]),v._v(" "),_("li",[v._v("KeyGenerateAlgorithm ： 分布式主键⽣成算法")]),v._v(" "),_("li",[v._v("DatabaseSQLEntry ： 获取当前时间的数据库⽅⾔")])]),v._v(" "),_("h2",{attrs:{id:"其他功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他功能"}},[v._v("#")]),v._v(" 其他功能")]),v._v(" "),_("ul",[_("li",[v._v("ReplicaLoadBalanceAlgorithm ： 读库负载均衡算法")]),v._v(" "),_("li",[v._v("EncryptAlgorithm ： 数据加密算法")]),v._v(" "),_("li",[v._v("ShardingTransactionManager ： 分布式事务管理器")])]),v._v(" "),_("h1",{attrs:{id:"分布式事务处理方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务处理方式"}},[v._v("#")]),v._v(" 分布式事务处理方式")]),v._v(" "),_("p",[v._v("强一致性与最终一致性（柔性事务BASE）")]),v._v(" "),_("h2",{attrs:{id:"本地事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本地事务"}},[v._v("#")]),v._v(" 本地事务")]),v._v(" "),_("ul",[_("li",[v._v("不需要修改代码，用spring的@Transactional")]),v._v(" "),_("li",[v._v("这也是"),_("strong",[v._v("默认使用")]),v._v("的事务方式")])]),v._v(" "),_("p",[v._v("⽀持项")]),v._v(" "),_("ul",[_("li",[v._v("完全⽀持⾮跨库事务")]),v._v(" "),_("li",[v._v("完全⽀持因逻辑异常导致的跨库事务。例如：同⼀事务中，跨两个库更新。更新完毕后，抛出空指 针，则两个库的内容都能回滚。")])]),v._v(" "),_("p",[v._v("不⽀持项")]),v._v(" "),_("ul",[_("li",[v._v("不⽀持因⽹络、硬件异常导致的跨库事务。例如：同⼀事务中，跨两个库更新，更新完毕后、未提 交之前，第⼀个库宕机，则只有第⼆个库数据提交。")]),v._v(" "),_("li",[v._v("不支持跨节点和服务的，比如feign调用了其他的微服务。")])]),v._v(" "),_("h2",{attrs:{id:"xa-两阶段事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#xa-两阶段事务"}},[v._v("#")]),v._v(" XA 两阶段事务")]),v._v(" "),_("ul",[_("li",[v._v("需要引入相关依赖和配置")]),v._v(" "),_("li",[v._v("ShardingSphere默认采用atomikos作为实现框架实现JTA规范用于XA规范。")]),v._v(" "),_("li",[v._v("同时，也支持bitronix、narayana等框架，甚至提供了SPI扩展点")])]),v._v(" "),_("p",[v._v("⽀持项")]),v._v(" "),_("ul",[_("li",[v._v("⽀持数据分⽚后的跨库事务。")]),v._v(" "),_("li",[v._v("两阶段提交保证操作的原⼦性和数据的强⼀致性。")]),v._v(" "),_("li",[v._v("服务宕机重启后，提交/回滚中的事务可⾃动恢复。")]),v._v(" "),_("li",[v._v("⽀持同时使⽤ XA 和⾮ XA 的连接池。")])]),v._v(" "),_("p",[v._v("不⽀持项")]),v._v(" "),_("ul",[_("li",[v._v("服务宕机后，在其它机器上恢复提交/回滚中的数据。")])]),v._v(" "),_("h2",{attrs:{id:"seata-柔性事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#seata-柔性事务"}},[v._v("#")]),v._v(" Seata 柔性事务")]),v._v(" "),_("ul",[_("li",[v._v("其实也是更多的基于Seata的AT模式（柔性事务BASE）")]),v._v(" "),_("li",[v._v("也有SPI接口")])]),v._v(" "),_("p",[v._v("⽀持项")]),v._v(" "),_("ul",[_("li",[v._v("⽀持数据分⽚后的跨库事务")]),v._v(" "),_("li",[v._v("⽀持 RC 隔离级别")]),v._v(" "),_("li",[v._v("通过 undo 快照进⾏事务回滚")]),v._v(" "),_("li",[v._v("⽀持服务宕机后的，⾃动恢复提交中的事务。")])]),v._v(" "),_("p",[v._v("不⽀持项")]),v._v(" "),_("ul",[_("li",[v._v("不⽀持除 RC 之外的隔离级别。")])]),v._v(" "),_("h1",{attrs:{id:"shardingproxy"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#shardingproxy"}},[v._v("#")]),v._v(" ShardingProxy")]),v._v(" "),_("p",[v._v("ShardingProxy的功能同样是分库分表，但是他是一个独立部署的服务端，提供统一的数据库代理服务。")]),v._v(" "),_("p",[v._v("注意，ShardingProxy目前只支持MySQL和 PostgreSQL。")]),v._v(" "),_("h1",{attrs:{id:"测试影子库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#测试影子库"}},[v._v("#")]),v._v(" 测试影子库")]),v._v(" "),_("ul",[_("li",[v._v("进⾏压测数据隔离的影⼦数据库，与⽣产数据库应当使⽤相同的配置。")]),v._v(" "),_("li",[v._v("再生产库中，创建平级的影子库，避免环境和主机的问题。")]),v._v(" "),_("li",[v._v("可以采用Sharding的影子库功能，多添加一个列，用于标识走对应的影子库。")])]),v._v(" "),_("h1",{attrs:{id:"项目使用核心步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目使用核心步骤"}},[v._v("#")]),v._v(" 项目使用核心步骤")]),v._v(" "),_("ol",[_("li",[v._v("定义分库分表数据源，再启动类排除默认spring的数据源。")]),v._v(" "),_("li",[v._v("设置默认不分表的数据源")]),v._v(" "),_("li",[v._v("定制分库分表规则")]),v._v(" "),_("li",[v._v("分库分表规则优化： 分库分表规则、绑定表、读写分离、自定义路由策略、自定义主键生成策略等")])]),v._v(" "),_("h1",{attrs:{id:"旧数据处理方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#旧数据处理方式"}},[v._v("#")]),v._v(" 旧数据处理方式")]),v._v(" "),_("p",[v._v("在业务过程中做分库分表，必然要做数据迁移。下面是比较稳妥的方案")]),v._v(" "),_("ol",[_("li",[v._v("要评估数据分片方案，对关键的SQL进行整理并分析")]),v._v(" "),_("li",[v._v("将不支持的sql改成其他方式实现")]),v._v(" "),_("li",[v._v("制定好了分库分表方案，包括主键/分片/路由等等。")]),v._v(" "),_("li",[v._v("不要着急实践，最好是在业务中对SQL进行数据双写（老数据库也写一份）。也可以用SPI的扩展点去做。")]),v._v(" "),_("li",[v._v("这上面的过程中，再去分析方案是不是合适，那些需要调整的，都合适了之后，就可以进行"),_("strong",[v._v("旧数据迁移")]),v._v("了。可以采用ShardingProxy、keetle等工具去做这些操作。")]),v._v(" "),_("li",[v._v("然后把双写去掉。")])]),v._v(" "),_("h1",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("h2",{attrs:{id:"使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[v._v("#")]),v._v(" 使用")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("分片算法")])]),v._v(" "),_("li",[_("p",[v._v("自定义主键生成，等等相关的SPI")]),v._v(" "),_("blockquote",[_("p",[v._v("比如大尺度上按范围分片，但是在每个数据范围内，使用取模分片。")]),v._v(" "),_("p",[v._v("这样利于扩展又够均匀。")]),v._v(" "),_("p",[v._v("这个还要配合分片策略来做具体的分片，比如要采用Standard中的precise精确分片方式。")])])]),v._v(" "),_("li",[_("p",[v._v("注意用绑定表减少笛卡尔集")])]),v._v(" "),_("li",[_("p",[v._v("注意: 他原生的默认分布式事务，只支持配置的多表和对应的操作，不支持块节点/服务，但是他支持SeataAT。")])]),v._v(" "),_("li",[_("p",[v._v("设置默认数据源；达到针对配置的表走分库分表策略，其他的没有配置的表还是会走对应的默认数据库。")])])]),v._v(" "),_("h2",{attrs:{id:"部署"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[v._v("#")]),v._v(" 部署")]),v._v(" "),_("ul",[_("li",[v._v("用混合模式部署，运维使用ShardingProxy，开发使用ShardingJDBC，用zk做统一配置。")]),v._v(" "),_("li",[v._v("可以用MHA、nginx保证ShardingProxy高可用。")])]),v._v(" "),_("h2",{attrs:{id:"原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[v._v("#")]),v._v(" 原理")]),v._v(" "),_("ul",[_("li",[v._v("通过datasource 整合其他框架。")]),v._v(" "),_("li",[v._v("连接限制模式，内存限制模式")]),v._v(" "),_("li",[v._v("流式归并，内存归并，排序归并")])]),v._v(" "),_("h1",{attrs:{id:"思考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[v._v("#")]),v._v(" 思考")]),v._v(" "),_("ul",[_("li",[v._v("如何将记录平均分配到两个库的四个表？")]),v._v(" "),_("li",[v._v("为什么要配置绑定表？  减少笛卡尔集")])]),v._v(" "),_("h1",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[v._v("#")]),v._v(" 参考资料")]),v._v(" "),_("p",[_("a",{attrs:{href:"https://blog.csdn.net/roykingw/article/details/71486825",target:"_blank",rel:"noopener noreferrer"}},[v._v("常用MAVEN打包方式总结"),_("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=r.exports}}]);