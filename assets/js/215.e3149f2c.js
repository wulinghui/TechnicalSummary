(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{575:function(t,a,s){"use strict";s.r(a);var e=s(7),v=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"核心设计原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心设计原理"}},[t._v("#")]),t._v(" 核心设计原理")]),t._v(" "),a("h2",{attrs:{id:"高性能原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高性能原理"}},[t._v("#")]),t._v(" 高性能原理")]),t._v(" "),a("h3",{attrs:{id:"单线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[t._v("#")]),t._v(" 单线程?")]),t._v(" "),a("ul",[a("li",[t._v("Redis 的网络 IO 和键值对读写是由一个线程来完成的，这也是 Redis 对外 提供键值存储服务的主要流程")]),t._v(" "),a("li",[t._v("Redis 的其他功能，比如持久化、异步删除、集群数据同步等，其实是由额外的线程执行的")])]),t._v(" "),a("h3",{attrs:{id:"redis-单线程为什么还能这么快"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-单线程为什么还能这么快"}},[t._v("#")]),t._v(" Redis 单线程为什么还能这么快？")]),t._v(" "),a("ul",[a("li",[t._v("因为它所有的数据都在内存中，所有的运算都是内存级别的运算，而且单线程避免了多线程的切换性 能损耗问题。")]),t._v(" "),a("li",[t._v("正因为 Redis 是单线程，所以要小心使用 Redis 指令，对于那些耗时的指令(比如 keys)，一定要谨慎使用，一不小心就可能会导致 Redis 卡顿。")])]),t._v(" "),a("h3",{attrs:{id:"nio多路复用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nio多路复用"}},[t._v("#")]),t._v(" NIO多路复用")]),t._v(" "),a("ul",[a("li",[t._v("redis利用epoll来实现IO多路复用，将连接信息和事件放到队列中，依次放到 文件事件分派器，事件分派器将事件分发给事件处理器。")]),t._v(" "),a("li",[t._v("实现了单线程处理那么多的并发客户端连接")])]),t._v(" "),a("h2",{attrs:{id:"key设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key设计"}},[t._v("#")]),t._v(" key设计")]),t._v(" "),a("ul",[a("li",[t._v("二进制安全的数据结构")]),t._v(" "),a("li",[t._v("提供了内存预分配机制，避免了频繁的内容分配")]),t._v(" "),a("li",[t._v("兼容C语言函数库")])]),t._v(" "),a("h2",{attrs:{id:"value设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#value设计"}},[t._v("#")]),t._v(" Value设计")]),t._v(" "),a("h3",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),a("h3",{attrs:{id:"list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[t._v("#")]),t._v(" List")]),t._v(" "),a("p",[t._v("quicklist（双端链表） 和 ziplist")]),t._v(" "),a("h3",{attrs:{id:"hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[t._v("#")]),t._v(" hash")]),t._v(" "),a("ul",[a("li",[t._v("单个元素比较小时，底层用ziplist存储")]),t._v(" "),a("li",[t._v("个数超过 512 /单个元素大小超过 64 byte时，将改为hashtable编码")])]),t._v(" "),a("h3",{attrs:{id:"set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[t._v("#")]),t._v(" Set")]),t._v(" "),a("ul",[a("li",[t._v("当数据可以用整形表示时，Set集合将被编码为intset数据结构")]),t._v(" "),a("li",[t._v("intset整数集合是一个有序的，存储整型数据的结构。")]),t._v(" "),a("li",[t._v("元素个数大于 set-max-intset-entries/元素无法用整形表示 ，hashtable存储数据")])]),t._v(" "),a("h3",{attrs:{id:"zset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zset"}},[t._v("#")]),t._v(" ZSet")]),t._v(" "),a("ul",[a("li",[t._v("字典(dict) + 跳表(skiplist)")]),t._v(" "),a("li",[t._v("数据比较少时，用ziplist编码结构存储")]),t._v(" "),a("li",[t._v("元素个数超过128/单个元素大小超过 64 byte ，将用skiplist编码")])]),t._v(" "),a("h1",{attrs:{id:"内存淘汰策略-清除策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存淘汰策略-清除策略"}},[t._v("#")]),t._v(" 内存淘汰策略（清除策略）")]),t._v(" "),a("p",[t._v("当Redis运行在主从模式时，只有主结点才会执行过期删除策略，然后把删除操作”del key”同 步到从结点删除数据。")]),t._v(" "),a("h2",{attrs:{id:"被动删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#被动删除"}},[t._v("#")]),t._v(" 被动删除")]),t._v(" "),a("p",[t._v("当读/写一个已经过期的key时，会触发惰性删除策略，直接删除（del）掉这个过期 key")]),t._v(" "),a("h2",{attrs:{id:"主动删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主动删除"}},[t._v("#")]),t._v(" 主动删除")]),t._v(" "),a("p",[t._v("由于惰性删除策略无法保证冷数据被及时删掉，所以Redis会定期主动淘汰一 批已过期的key")]),t._v(" "),a("h2",{attrs:{id:"超过maxmemory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超过maxmemory"}},[t._v("#")]),t._v(" 超过maxmemory")]),t._v(" "),a("ul",[a("li",[t._v("当前已用内存超过maxmemory限定时，触发主动清理策略（8种）")])]),t._v(" "),a("h3",{attrs:{id:"不处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不处理"}},[t._v("#")]),t._v(" 不处理")]),t._v(" "),a("p",[t._v("noeviction：不会剔除任何数据，可读，拒绝所有写入并返回客户端错误信息")]),t._v(" "),a("h3",{attrs:{id:"针对所有的key做处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对所有的key做处理"}},[t._v("#")]),t._v(" 针对所有的key做处理")]),t._v(" "),a("ul",[a("li",[t._v("allkeys-random：从所有键值对中随机选择并删除数据。")]),t._v(" "),a("li",[t._v("allkeys-lru：使用 LRU 算法在所有数据中进行筛选删除。")]),t._v(" "),a("li",[t._v("allkeys-lfu：使用 LFU 算法在所有数据中进行筛选删除。")])]),t._v(" "),a("h3",{attrs:{id:"针对设置了过期时间的key做处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对设置了过期时间的key做处理"}},[t._v("#")]),t._v(" 针对设置了过期时间的key做处理")]),t._v(" "),a("ul",[a("li",[t._v("volatile-ttl：在筛选时，会针对设置了过期时间的键值对，根据过期时间的先后进行删除，越早过期的越先被删除。")]),t._v(" "),a("li",[t._v("volatile-random：就像它的名称一样，在设置了过期时间的键值对中，进行随机删除。")]),t._v(" "),a("li",[t._v("volatile-lru：会使用 LRU 算法筛选设置了过期时间的键值对删除。")]),t._v(" "),a("li",[t._v("volatile-lfu：会使用 LFU 算法筛选设置了过期时间的键值对删除。")])]),t._v(" "),a("h2",{attrs:{id:"算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法"}},[t._v("#")]),t._v(" 算法")]),t._v(" "),a("ul",[a("li",[t._v("LRU 算法（Least Recently Used，最近最少使用）")]),t._v(" "),a("li",[t._v("LFU 算法（Least Frequently Used，最不经常使用）")])]),t._v(" "),a("h1",{attrs:{id:"管道-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管道-pipeline"}},[t._v("#")]),t._v(" 管道（Pipeline）")]),t._v(" "),a("ul",[a("li",[t._v("管道执行多条命令的网络开销实际上只相当于一次命令执行的网络开销")]),t._v(" "),a("li",[t._v("redis必须在处理完所有命令前先缓存起所有命令的处理结果")]),t._v(" "),a("li",[t._v("管道中前面命令失败，后面命令不会有影响，继续执行")]),t._v(" "),a("li",[t._v("管道不会阻塞redis。")])]),t._v(" "),a("h1",{attrs:{id:"lua脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lua脚本"}},[t._v("#")]),t._v(" Lua脚本")]),t._v(" "),a("p",[t._v("redis是单进程、单线程执行脚本，所以不要在Lua脚本中出现死循环和耗时的运算，否则redis会阻塞，将不接受其他的命令")]),t._v(" "),a("h2",{attrs:{id:"好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#好处"}},[t._v("#")]),t._v(" 好处")]),t._v(" "),a("ul",[a("li",[t._v("减少网络开销")]),t._v(" "),a("li",[t._v("原子操作，替代redis的事务功能")])]),t._v(" "),a("h1",{attrs:{id:"_6-0-新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-0-新特性"}},[t._v("#")]),t._v(" 6.0 新特性")]),t._v(" "),a("ul",[a("li",[t._v("多线程的读写IO, 但是最终执行用户命令的线程依然是单线程的")]),t._v(" "),a("li",[t._v("服务端追踪key的变化，主动同步客户端缓存数据的特性")]),t._v(" "),a("li",[t._v("对于命令的访问和执行权限的控制")])]),t._v(" "),a("h1",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/c706d050d2f8",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据结构之Redis-跳表"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=v.exports}}]);