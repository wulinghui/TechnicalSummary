(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{574:function(e,t,a){"use strict";a.r(t);var r=a(7),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("建议先看看单机版的的持久化，再来看这个。")]),e._v(" "),t("h1",{attrs:{id:"主从架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从架构"}},[e._v("#")]),e._v(" 主从架构")]),e._v(" "),t("h2",{attrs:{id:"全量复制流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全量复制流程"}},[e._v("#")]),e._v(" 全量复制流程")]),e._v(" "),t("ol",[t("li",[e._v("slave发送PSYNC 命令给master请求复制数据")]),e._v(" "),t("li",[e._v("master收到PSYNC命令后，会在后台进行数据持久化通过bgsave生成最新的rdb快照文件")]),e._v(" "),t("li",[e._v("继续接收客户端的请求，它会把数据集的请求以aof格式，缓存在内存中")]),e._v(" "),t("li",[e._v("给slave发送rdb数据")]),e._v(" "),t("li",[e._v("slave清空旧数据,并加载rdb")]),e._v(" "),t("li",[e._v("master发送 buff的aof指令")]),e._v(" "),t("li",[e._v("slave 执行aof的指令")]),e._v(" "),t("li",[e._v("重复6/7步骤")])]),e._v(" "),t("h2",{attrs:{id:"部分复制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部分复制"}},[e._v("#")]),e._v(" 部分复制")]),e._v(" "),t("ul",[t("li",[e._v("redis2.8版本以后，slave维护了复制的数据下标offset和master的进程id")]),e._v(" "),t("li",[e._v("当网络连接断开重连后，slave从所记录的数据下标开始psync(ofset)同步")]),e._v(" "),t("li",[e._v("master进程id变化，从节点数据下标不在master的缓存，将会进行全量复制")])]),e._v(" "),t("h2",{attrs:{id:"主从复制风暴"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主从复制风暴"}},[e._v("#")]),e._v(" 主从复制风暴")]),e._v(" "),t("ul",[t("li",[e._v("多个从节点同时复制主节点导致主节点压力过大")]),e._v(" "),t("li",[e._v("让部分从节点与从节点(与主节点同步)同步数据")])]),e._v(" "),t("h1",{attrs:{id:"哨兵架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哨兵架构"}},[e._v("#")]),e._v(" 哨兵架构")]),e._v(" "),t("ul",[t("li",[e._v("sentinel哨兵是特殊的redis服务，不提供读写服务，主要用来监控redis实例节点")]),e._v(" "),t("li",[e._v("对比主从架构，不需要人工切换主节点")])]),e._v(" "),t("h2",{attrs:{id:"流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[e._v("#")]),e._v(" 流程")]),e._v(" "),t("ul",[t("li",[e._v("client端第一次从哨兵找出redis的主节点，后续就直接访问redis的主节点，不会每次都通过sentinel代理访问redis的主节点")]),e._v(" "),t("li",[e._v("当redis的主节点发生变化，哨兵会第一时间感知到，并且将新的redis 主节点通知给client端")])]),e._v(" "),t("h2",{attrs:{id:"哨兵leader选举流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哨兵leader选举流程"}},[e._v("#")]),e._v(" 哨兵leader选举流程")]),e._v(" "),t("ul",[t("li",[e._v("一个master服务器被某sentinel视为下线状态，发起选举")]),e._v(" "),t("li",[e._v("该sentinel会与其他sentinel协商选出sentinel的leader进 行故障转移工作")]),e._v(" "),t("li",[e._v("同时每个sentinel每次选举都会自增配置纪元(选举周期)，每个纪元中只会选择一 个sentinel的leader")]),e._v(" "),t("li",[e._v("如果所有超过一半的sentinel选举某sentinel作为leader。之后该sentinel进行故障转移 操作，从存活的slave中选举出新的master")])]),e._v(" "),t("h1",{attrs:{id:"集群架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群架构"}},[e._v("#")]),e._v(" 集群架构")]),e._v(" "),t("ul",[t("li",[e._v("可以看做主从+哨兵+多节点(槽位)")]),e._v(" "),t("li",[e._v("由多个主从节点群组成的分布式服务器群，它具有复制、高可用和分片特性")]),e._v(" "),t("li",[e._v("redis集群的性能和高可用性均优于之前版本的哨兵模式，且配置非常简单")])]),e._v(" "),t("h2",{attrs:{id:"原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[e._v("#")]),e._v(" 原理")]),e._v(" "),t("ul",[t("li",[e._v("Redis Cluster 将所有数据划分为 16384 个 slots(槽位)")]),e._v(" "),t("li",[e._v("槽位定位算法：对 key 值使用 crc16 算法进行 hash 得到一个整数值，然后用这个整数值对 16384 进行取模 来得到具体槽位")]),e._v(" "),t("li",[e._v("集群的槽位配置信息并将其缓存在客户端本地")]),e._v(" "),t("li",[e._v("客户端与服务器不一致的情况，会发起重定向")])]),e._v(" "),t("h2",{attrs:{id:"节点间的通信机制协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#节点间的通信机制协议"}},[e._v("#")]),e._v(" 节点间的通信机制协议")]),e._v(" "),t("h3",{attrs:{id:"集中式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集中式"}},[e._v("#")]),e._v(" 集中式")]),e._v(" "),t("p",[e._v("zookeeper集中式存储元数据，优点在于元数据的更新和读取，时效性非常好，一旦元数据出现变更立即就会更新到集中式的存储中，其他节 点读取的时候立即就可以感知到；不足在于所有的元数据的更新压力全部集中在一个地方，可能导致元数据的存储压力。")]),e._v(" "),t("h3",{attrs:{id:"gossip协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gossip协议"}},[e._v("#")]),e._v(" gossip协议")]),e._v(" "),t("ul",[t("li",[e._v("meet   某个节点发送meet给新加入的节点，让新节点加入集群中，然后新节点就会开始与其他节点进行通信")]),e._v(" "),t("li",[e._v("ping     每个节点都会频繁给其他节点发送ping，其中包含自己的状态还有自己维护的集群元数据，互相通过 ping交换元数据")]),e._v(" "),t("li",[e._v("pong   对ping和meet消息的返回，包含自己的状态和其他信息，也可以用于信息广播和更新")]),e._v(" "),t("li",[e._v("fail      某个节点判断另一个节点fail之后，就发送fail给其他节点，通知其他节点，指定的节点宕机了")]),e._v(" "),t("li",[e._v("优点在于元数据的更新比较分散，不是集中在一个地方，更新请求会陆陆续续，打到所有节点上去更新，有一定的延时，降低了压力；缺点在于元数据更新有延时可能导致集群的一些操作会有一些滞后。")]),e._v(" "),t("li",[e._v("端口:: 自己提供服务的端口号+10000")])]),e._v(" "),t("h2",{attrs:{id:"cluster-­node-­timeout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cluster-­node-­timeout"}},[e._v("#")]),e._v(" cluster-­node-­timeout")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("表示当某个节点持续 timeout 的时间失联时，才可以认定该节点出现故障，需要进行主从切换。")])]),e._v(" "),t("li",[t("p",[e._v("所以要合理配置他，防止网络抖动会导致主从频繁切换")])])]),e._v(" "),t("h2",{attrs:{id:"集群leader选举流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群leader选举流程"}},[e._v("#")]),e._v(" 集群leader选举流程")]),e._v(" "),t("ul",[t("li",[e._v("slave发现自己的master变为FAIL，延迟一段时间后发起选举")]),e._v(" "),t("li",[e._v("将自己记录的集群currentEpoch（选举周期）加1，并广播FAILOVER_AUTH_REQUEST 信息")]),e._v(" "),t("li",[e._v("其他节点收到该信息，只有master响应，判断请求者的合法性，并发送FAILOVER_AUTH_ACK，对每一个 epoch（周期）只发送一次ack")]),e._v(" "),t("li",[e._v("尝试failover的slave收集master返回的FAILOVER_AUTH_ACK")]),e._v(" "),t("li",[e._v("slave收到超过半数master的ack后变成新Master，Ack相同继续选举")]),e._v(" "),t("li",[e._v("slave变成master并广播Pong消息通知其他集群节点，停止选举")])]),e._v(" "),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[e._v("#")]),e._v(" 常用命令")]),e._v(" "),t("ul",[t("li",[e._v("create：创建一个集群环境host1:port1 ... hostN:portN")]),e._v(" "),t("li",[e._v("call：可以执行redis命令")]),e._v(" "),t("li",[e._v("add-node：将一个节点添加到集群里，第一个参数为新节点的ip:port，第二个参数为集群中任意一个已经存在的节点的ip:port")]),e._v(" "),t("li",[e._v("del-node：移除一个节点")]),e._v(" "),t("li",[e._v("reshard：重新分片")]),e._v(" "),t("li",[e._v("check：检查集群状态")])]),e._v(" "),t("h2",{attrs:{id:"集群脑裂数据丢失问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群脑裂数据丢失问题"}},[e._v("#")]),e._v(" 集群脑裂数据丢失问题")]),e._v(" "),t("h3",{attrs:{id:"现象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现象"}},[e._v("#")]),e._v(" 现象")]),e._v(" "),t("ul",[t("li",[e._v("cluster-­node-­timeout太短由于网络波动导致，选举其实主节点还没有挂呢，这段期间主节点还在对外提供写服务")]),e._v(" "),t("li",[e._v("主节点挂了，buffer里面的数据没有同步到从节点")]),e._v(" "),t("li",[e._v("另一种情况，多个主节点对外提供写服务，一旦网络分区恢复， 会将其中一个主节点变为从节点，这时会有大量数据丢失。")])]),e._v(" "),t("h3",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[e._v("#")]),e._v(" 解决方案")]),e._v(" "),t("ul",[t("li",[e._v("用:: min‐replicas‐to‐write 1 ，代表成功写数据最少同步的slave数量，尽量避免脑裂问题")])]),e._v(" "),t("h2",{attrs:{id:"集群是否完整才能对外提供服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群是否完整才能对外提供服务"}},[e._v("#")]),e._v(" 集群是否完整才能对外提供服务")]),e._v(" "),t("p",[e._v("配置cluster-require-full-coverage为no可以对外服务")]),e._v(" "),t("h2",{attrs:{id:"redis集群为什么至少需要三个master节点-并且推荐节点数为奇数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis集群为什么至少需要三个master节点-并且推荐节点数为奇数"}},[e._v("#")]),e._v(" Redis集群为什么至少需要三个master节点，并且推荐节点数为奇数？")]),e._v(" "),t("p",[e._v("半数以上: 4个master要>2个主机，也就只允许挂掉一个master。和3个master一样。")]),e._v(" "),t("h2",{attrs:{id:"redis集群对批量操作命令的支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis集群对批量操作命令的支持"}},[e._v("#")]),e._v(" Redis集群对批量操作命令的支持")]),e._v(" "),t("p",[e._v("数据分片hash计算的只会是大括号里的值")]),e._v(" "),t("h1",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_44324174/article/details/108939199",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis中哨兵选举算法"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/rjzheng/p/11430592.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("redis为什么16384个槽"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/200846bd9461",target:"_blank",rel:"noopener noreferrer"}},[e._v("redis集群对批量操作命令的支持"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("mset {user1}:1:name wangji {user1}:1:age 666")]),e._v(" "),t("p",[e._v("这样能保证这两个操作的内容分布到同一slot上.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);