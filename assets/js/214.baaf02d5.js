(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{573:function(t,a,e){"use strict";e.r(a);var s=e(7),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"key名设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key名设计"}},[t._v("#")]),t._v(" key名设计")]),t._v(" "),a("h2",{attrs:{id:"【建议】-可读性和可管理性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【建议】-可读性和可管理性"}},[t._v("#")]),t._v(" 【建议】: 可读性和可管理性")]),t._v(" "),a("blockquote",[a("p",[t._v("比如业务名:表名:id")])]),t._v(" "),a("h2",{attrs:{id:"【建议】-简洁性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【建议】-简洁性"}},[t._v("#")]),t._v(" 【建议】：简洁性")]),t._v(" "),a("blockquote",[a("p",[t._v("保证语义的前提下，控制key的长度")])]),t._v(" "),a("h2",{attrs:{id:"【强制】-不要包含特殊字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【强制】-不要包含特殊字符"}},[t._v("#")]),t._v(" "),a("strong",[t._v("【强制】")]),t._v("：不要包含特殊字符")]),t._v(" "),a("blockquote",[a("p",[t._v("空格、换行、单双引号以及其他转义字符")])]),t._v(" "),a("h2",{attrs:{id:"【强制】-集群批量操作key-用-保证成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【强制】-集群批量操作key-用-保证成功"}},[t._v("#")]),t._v(" "),a("strong",[t._v("【强制】")]),t._v(": 集群批量操作key，用{}保证成功")]),t._v(" "),a("h1",{attrs:{id:"value设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#value设计"}},[t._v("#")]),t._v(" value设计")]),t._v(" "),a("h2",{attrs:{id:"【强制】-拒绝bigkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【强制】-拒绝bigkey"}},[t._v("#")]),t._v(" 【强制】：拒绝bigkey")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("string类型控制在10KB以内，hash、list、set、zset元素个数不要超过5000")])]),t._v(" "),a("li",[a("p",[t._v("危害： 过期删除，导致redis阻塞，网络拥塞")])]),t._v(" "),a("li",[a("p",[t._v("bigkey的产生")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("社交类：粉丝列表，如果某些明星或者大v不精心设计下，必是bigkey。")]),t._v(" "),a("li",[t._v("统计类：例如按天存储某项功能或者网站的用户集合，除非没几个人用，否则必是bigkey。")]),t._v(" "),a("li",[t._v("缓存类：将数据从数据库load出来序列化放到Redis里，第一是不是有必要把所有字段都缓存，第二，有没有相关关联的数据，为了 图方便把相关数据都存一个key下，产生bigkey")])])])]),t._v(" "),a("li",[a("p",[t._v("非字符串的bigkey，不用del删除，用hscan、sscan、zscan方式渐进式删除")])]),t._v(" "),a("li",[a("p",[t._v("如何优化bigkey")])])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("拆")]),t._v(" "),a("li",[t._v("如果bigkey不可避免，用渐进式和局部数据获取数据，避免阻塞.")])])]),t._v(" "),a("h2",{attrs:{id:"【推荐】-选择适合的数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【推荐】-选择适合的数据类型"}},[t._v("#")]),t._v(" 【推荐】：选择适合的数据类型")]),t._v(" "),a("p",[t._v("要合理控制和使用数据结构，但也要注意节省内存和性能之间的平衡")]),t._v(" "),a("h2",{attrs:{id:"【推荐】-控制key的生命周期-redis不是垃圾桶。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【推荐】-控制key的生命周期-redis不是垃圾桶。"}},[t._v("#")]),t._v(" 【推荐】：控制key的生命周期，redis不是垃圾桶。")]),t._v(" "),a("p",[t._v("(条件允许可以打散过期时间，防止集中过期，统一调用del，阻塞reids)")]),t._v(" "),a("h1",{attrs:{id:"【推荐】-慎用lua脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【推荐】-慎用lua脚本"}},[t._v("#")]),t._v(" 【推荐】：慎用lua脚本")]),t._v(" "),a("h1",{attrs:{id:"命令使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令使用"}},[t._v("#")]),t._v(" 命令使用")]),t._v(" "),a("h2",{attrs:{id:"【推荐】-o-n-命令关注n的数量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【推荐】-o-n-命令关注n的数量"}},[t._v("#")]),t._v(" 【推荐】 O(N)命令关注N的数量")]),t._v(" "),a("p",[t._v("hgetall、lrange、smembers、zrange、sinter等并非不能使用，但是需要明确N的值。有遍历的需求可以使用hscan、sscan、zscan代替。")]),t._v(" "),a("h2",{attrs:{id:"【推荐】-禁用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【推荐】-禁用命令"}},[t._v("#")]),t._v(" 【推荐】：禁用命令")]),t._v(" "),a("p",[t._v("禁止线上使用keys、flushall、flushdb等，通过redis的rename机制禁命令")]),t._v(" "),a("h2",{attrs:{id:"【推荐】合理使用select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【推荐】合理使用select"}},[t._v("#")]),t._v(" 【推荐】合理使用select")]),t._v(" "),a("p",[t._v("redis的多数据库较弱，还是单线程处理")]),t._v(" "),a("h2",{attrs:{id:"【推荐】使用批量操作提高效率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【推荐】使用批量操作提高效率"}},[t._v("#")]),t._v(" 【推荐】使用批量操作提高效率")]),t._v(" "),a("h2",{attrs:{id:"【建议】redis事务功能较弱-不建议过多使用-可以用lua替代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【建议】redis事务功能较弱-不建议过多使用-可以用lua替代"}},[t._v("#")]),t._v(" 【建议】Redis事务功能较弱，不建议过多使用，可以用lua替代")]),t._v(" "),a("h1",{attrs:{id:"客户端使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端使用"}},[t._v("#")]),t._v(" 客户端使用")]),t._v(" "),a("h2",{attrs:{id:"【推荐】-避免多个应用使用一个redis实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【推荐】-避免多个应用使用一个redis实例"}},[t._v("#")]),t._v(" 【推荐】 避免多个应用使用一个Redis实例")]),t._v(" "),a("h2",{attrs:{id:"【推荐】使用带有连接池的数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【推荐】使用带有连接池的数据库"}},[t._v("#")]),t._v(" 【推荐】使用带有连接池的数据库")]),t._v(" "),a("blockquote",[a("p",[t._v("连接池预热")])]),t._v(" "),a("h2",{attrs:{id:"【建议】高并发下建议客户端添加熔断功能-例如sentinel、hystrix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【建议】高并发下建议客户端添加熔断功能-例如sentinel、hystrix"}},[t._v("#")]),t._v(" 【建议】高并发下建议客户端添加熔断功能(例如sentinel、hystrix)")]),t._v(" "),a("h2",{attrs:{id:"【推荐】设置合理的密码-如有必要可以使用ssl加密访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【推荐】设置合理的密码-如有必要可以使用ssl加密访问"}},[t._v("#")]),t._v(" 【推荐】设置合理的密码，如有必要可以使用SSL加密访问")]),t._v(" "),a("h1",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("h2",{attrs:{id:"【强制】-设置最大内存-maxmemory-policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【强制】-设置最大内存-maxmemory-policy"}},[t._v("#")]),t._v(" 【强制】: 设置最大内存(maxmemory-policy)")]),t._v(" "),a("blockquote",[a("p",[t._v("如果不设置最大内存(maxmemory-policy)，当 Redis 内存超出物理内存限制时，内存的数据会开始和磁盘产生频繁的交换 (swap)，会让 Redis 的性能急剧下降。")])]),t._v(" "),a("h2",{attrs:{id:"【推荐】cluster-require-full-coverage为no"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【推荐】cluster-require-full-coverage为no"}},[t._v("#")]),t._v(" 【推荐】cluster-require-full-coverage为no")]),t._v(" "),a("p",[t._v("cluster-require-full-coverage为no时，集群可以不完整提供服务")]),t._v(" "),a("h2",{attrs:{id:"【推荐】cluster-­node-­timeout-设置合理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【推荐】cluster-­node-­timeout-设置合理"}},[t._v("#")]),t._v(" 【推荐】cluster-­node-­timeout 设置合理")]),t._v(" "),a("p",[t._v("防止脑裂问题")]),t._v(" "),a("h1",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://z.itpub.net/article/detail/928593C72777EA5A9117C901CF5D0B97",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis最佳实践：7个维度+43条使用规范，带你彻底玩转Redis"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("性能")]),t._v(" "),a("li",[t._v("可靠性")]),t._v(" "),a("li",[t._v("资源")]),t._v(" "),a("li",[t._v("运维")]),t._v(" "),a("li",[t._v("监控")]),t._v(" "),a("li",[t._v("安全")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.z.itpub.net/zitpub.net/JPG/2021-07-21/F14D84912AAE76A0A69BB0C0F39CD275.jpg",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://image.z.itpub.net/zitpub.net/JPG/2021-07-21/6342D1A196A9A8891408D727FF714E36.jpg",alt:""}})])])}),[],!1,null,null,null);a.default=r.exports}}]);