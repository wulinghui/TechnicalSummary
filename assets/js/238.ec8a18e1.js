(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{604:function(_,v,t){"use strict";t.r(v);var a=t(7),s=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[v("strong",[_._v("以下都是手敲，不涉密。")]),_._v(" 只是做这个系统的一些想法和踩得一些坑的一些记录。")]),_._v(" "),v("h1",{attrs:{id:"架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[_._v("#")]),_._v(" 架构")]),_._v(" "),v("p",[_._v("入侵监测系统，利用APISIX的API，分析他的请求响应日志分析，比如一些ip总是token不合法的，频繁访问验证码的，频繁触发缓存穿透的。 再把这些ip都给进黑名单。")]),_._v(" "),v("p",[_._v("分布式日志系统、")]),_._v(" "),v("p",[_._v("监控系统")]),_._v(" "),v("h2",{attrs:{id:"分层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分层"}},[_._v("#")]),_._v(" 分层")]),_._v(" "),v("ul",[v("li",[_._v("apisix 层 代替nginx做域名解析，原则上不允许变动。")]),_._v(" "),v("li",[_._v("getWay层 ， 2台以上机器做灰度发布，切换流量使用，尽量不发布，除非网关的代码或配置变动。")]),_._v(" "),v("li",[_._v("消息API层，做消息处理层相关业务（如单聊/群聊等）的一些实现的门面")]),_._v(" "),v("li",[_._v("netty/ws层 ，消息处理层，只做消息转发操作重试，不做任何业务处理。")]),_._v(" "),v("li",[_._v("MQ，Redis层做中间临时数据存储层。")]),_._v(" "),v("li",[_._v("具体相关业务处理层，和相关对外提供接口。")])]),_._v(" "),v("h2",{attrs:{id:"主体流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主体流程"}},[_._v("#")]),_._v(" 主体流程")]),_._v(" "),v("ol",[v("li",[_._v("调用登录服务接口，获得token授权")]),_._v(" "),v("li",[_._v("设置客户端的一些个性化设置(连接类型,开启搜索,持久化时间等级,未读数统计方式,超时重发等级)，调用获得IM连接服务初始化，利用nacos的rabbion获得地址，并放到redis登记（string记用户和hash记服务器），获得连接的类型ws/tcp和地址。")]),_._v(" "),v("li",[_._v("调用未读数，未读消息等等上线相关接口，并做各自的业务操作。")]),_._v(" "),v("li",[_._v("调用单聊/群聊等发送消息接口，往kafka中放入消息，再从redis中获得到对应的消息服务并且发送消息。（发消息可以不ok，MQ操作必须ok）")]),_._v(" "),v("li",[_._v("MQ，下面存储、搜索、离线消息、未读数服务订阅消费。")]),_._v(" "),v("li",[_._v("接受到的客户端，调用ACK已读接口，只往MQ发送消息已读topic。")]),_._v(" "),v("li",[_._v("MQ，下面的存储，未读数，离线服务做相关业务。")]),_._v(" "),v("li",[_._v("调用下线或者服务端保活失效，发送下线消息到MQ，同时关闭连接。 MQ对应的做移除redis记录，用户状态变更等等。")]),_._v(" "),v("li",[_._v("MQ中的离线服务，做删除redis注册表。")])]),_._v(" "),v("h1",{attrs:{id:"表结构设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表结构设计"}},[_._v("#")]),_._v(" 表结构设计")]),_._v(" "),v("ul",[v("li",[_._v("发件箱和收件箱")]),_._v(" "),v("li",[_._v("群已读功能，使用读扩散，群已读表存放.")])]),_._v(" "),v("p",[v("code",[_._v("查看用户1跟用户2的聊天记录，首先可以先分页查询聊天消息索引的id，box_type 代表是收的还是发的，select mid,box_type from im_user_msg_box t where t.owner_uid = 1 and t.other_uid = 2 order by mid;(注意要分页查)，然后再for循环在im_msg_content表查每条消息内容展示。")])]),_._v(" "),v("h1",{attrs:{id:"内部项目中的调用消息接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内部项目中的调用消息接口"}},[_._v("#")]),_._v(" 内部项目中的调用消息接口.")]),_._v(" "),v("p",[_._v("为了不走网关直连消息API层，利用feign和Rabbion的轮询配置。")]),_._v(" "),v("p",[_._v("（发消息和kafka都在消息接口中）")]),_._v(" "),v("h1",{attrs:{id:"离线消息服务设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#离线消息服务设计"}},[_._v("#")]),_._v(" 离线消息服务设计")]),_._v(" "),v("p",[_._v("减少数据库压力，且把有些业务上不需要存储的数据，不落数据库和ES存储，按照客户端的配置，做的区分。")]),_._v(" "),v("p",[_._v("极大的减少了业务的存储压力。就这样还是做了分表处理。")]),_._v(" "),v("h2",{attrs:{id:"redis数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis数据"}},[_._v("#")]),_._v(" Redis数据")]),_._v(" "),v("p",[_._v("receiverId 是用户id + to + 群组 或者 发送用户")]),_._v(" "),v("p",[_._v("mid 是客户端生成的时间戳的UUID")]),_._v(" "),v("p",[_._v("msg 是消息内容")]),_._v(" "),v("ol",[v("li",[_._v("添加消息：zadd offline_msg_#{receiverId} #{mid} #{msg} // score就存储消息的id _")]),_._v(" "),v("li",[_._v("查询消息：zrevrange offline_msg_#{receiverId} 0 9 // 按消息id从大到小排序取最新的 十条消息，上拉刷新继续查 _")]),_._v(" "),v("li",[_._v("删除消息：zremrangebyscore offline_msg_#{receiverId} 0  max_mid // 删除客户端已 读取过的介于最小的消息id和最大的消息id之间的所有消息")]),_._v(" "),v("li",[_._v("如果单个key消息存储过大，目前采用的是定时晚上查询数据库大字段做的处理，也可以考虑按周或者按月针对同一个receiverId多搞几个key分段来存储。")])]),_._v(" "),v("h1",{attrs:{id:"未读数设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#未读数设计"}},[_._v("#")]),_._v(" 未读数设计")]),_._v(" "),v("ul",[v("li",[_._v("该用户下所有的未读数。")]),_._v(" "),v("li",[_._v("每个离线集合的key    String 自增。")]),_._v(" "),v("li",[_._v("群未读数设计，hincrby msg:noreadcount:gid uid 1 (gid为群id，uid为用户id)。")]),_._v(" "),v("li",[_._v("用lua脚本保证里面的原子性。")])]),_._v(" "),v("h1",{attrs:{id:"消息服务某节点下线"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息服务某节点下线"}},[_._v("#")]),_._v(" 消息服务某节点下线")]),_._v(" "),v("p",[_._v("需要对应连接的客户端主动去重连并且拉离线消息接口等业务操作。")]),_._v(" "),v("h2",{attrs:{id:"正常下线"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#正常下线"}},[_._v("#")]),_._v(" 正常下线")]),_._v(" "),v("p",[_._v("如果是正常发布的话，再脚本里面有触发spring-的shutdown机制：")]),_._v(" "),v("ol",[v("li",[_._v("注销nacos的节点，不再接受新的连接")]),_._v(" "),v("li",[_._v("循环关闭所有客户端连接，以便客户端重连到其他节点。")]),_._v(" "),v("li",[_._v("睡眠一会，以保证上面都是好的。")]),_._v(" "),v("li",[_._v("循环redis中的hash判断，之前所有的客户端，是否还是本机ip，是的话就发送下线消息到MQ。")]),_._v(" "),v("li",[_._v("删除上面的hash。")])]),_._v(" "),v("h2",{attrs:{id:"类似宕机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类似宕机"}},[_._v("#")]),_._v(" 类似宕机")]),_._v(" "),v("p",[_._v("xxl-job跑类似获得，不健康的节点，操作上面的3操作。不及时也没关系。")]),_._v(" "),v("h2",{attrs:{id:"异常情况"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异常情况"}},[_._v("#")]),_._v(" 异常情况")]),_._v(" "),v("ul",[v("li",[_._v("在消息API层中，发消息重试机制中，做最后的判断，是否删除reids对应的string")]),_._v(" "),v("li",[_._v("再消息API层中，报错未知发送消息错误，会触发客户端的主动重连操作。")])]),_._v(" "),v("h1",{attrs:{id:"其他问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其他问题"}},[_._v("#")]),_._v(" 其他问题")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("redis存客户端的uuid时间戳，有效时间半小时，来保证幂等性问题。")])]),_._v(" "),v("li",[v("p",[_._v("剔除长时间空闲的连接，目前采用的是客户端自己剔除。")])]),_._v(" "),v("li",[v("p",[_._v("如果业务端掉线或者清了他们的nextID，这种情况怎么办???")]),_._v(" "),v("blockquote")])]),_._v(" "),v("h2",{attrs:{id:"有序性的保证"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#有序性的保证"}},[_._v("#")]),_._v(" 有序性的保证")]),_._v(" "),v("h3",{attrs:{id:"基于客户端的有序性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基于客户端的有序性"}},[_._v("#")]),_._v(" 基于客户端的有序性")]),_._v(" "),v("p",[_._v("利用序号和下次序号，实现了一套保证全局有序性,同时拥有背压敏感协议限流、和消息顺序阻塞报警和黑名单控制的可选方案。")]),_._v(" "),v("p",[_._v("我们后台有个接口专门获得他的nextId。  一般都是在他们上线后调用，以保证下次nextId不会断。  正常调用下线接口会有nextId不会存在客户端了。（如果业务端掉线或者清了他们的nextID，这种情况怎么办???  ）")]),_._v(" "),v("p",[_._v("他发送消息会有这个id和自己生成的nextId，再后端会存入下次需要的nextId，以防客户端丢失，放到hash集合里面去，通过nextId找一只找，没有找到再判断这次消费是不是的，都不是就退出循环。")]),_._v(" "),v("h1",{attrs:{id:"群聊已读功能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#群聊已读功能"}},[_._v("#")]),_._v(" 群聊已读功能")]),_._v(" "),v("p",[_._v("群聊要有已读用户列表，每条消息都要有这些已读功能。")]),_._v(" "),v("h2",{attrs:{id:"读扩散"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#读扩散"}},[_._v("#")]),_._v(" 读扩散")]),_._v(" "),v("p",[_._v("用户在群里发一条消息只存一份数据，群里所有人都读同一份消息数据。之前的实现，实现不了"),v("strong",[_._v("群聊已读")]),_._v("功能")]),_._v(" "),v("h2",{attrs:{id:"写扩散"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写扩散"}},[_._v("#")]),_._v(" 写扩散")]),_._v(" "),v("p",[_._v("群聊消息表，消息索引已读表。")]),_._v(" "),v("p",[_._v("就是说用户在群里发一条消息会针对群里每个用户都存一条消息索引，然后再单独 存储一份消息内容，这样可以针对用户是否已读做一些处理，但是写扩散有一个问题就是群的人数不能太 多，否则性能会有问题，而且会有大量存储浪费，比如万人群聊，要是用写扩散，每个用户发一条消息， 要存储上万条索引，这个对性能以及存储耗费太大。")]),_._v(" "),v("h2",{attrs:{id:"根据bitmap"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#根据bitmap"}},[_._v("#")]),_._v(" 根据bitmap")]),_._v(" "),v("p",[_._v("一条消息就是一条数组，数组大小就是用户的顺序，很可惜redis没有获得所有bitmap的内容，这个需要自己实现。")]),_._v(" "),v("h2",{attrs:{id:"存消息对应的位置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#存消息对应的位置"}},[_._v("#")]),_._v(" 存消息对应的位置")]),_._v(" "),v("p",[_._v("一个群消息表。一个群消息用户表它里面2个字段，上次读取一批消息最大值id(next)，最近读取一批消息最大值id ，过滤条件就可以是当前消息id是否再这之间。")]),_._v(" "),v("p",[_._v("这样就变成了读扩散了。")]),_._v(" "),v("h2",{attrs:{id:"百万级别的群聊-直播间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#百万级别的群聊-直播间"}},[_._v("#")]),_._v(" 百万级别的群聊，直播间")]),_._v(" "),v("h3",{attrs:{id:"未读数更新高并发问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#未读数更新高并发问题"}},[_._v("#")]),_._v(" 未读数更新高并发问题")]),_._v(" "),v("ul",[v("li",[_._v("问题:一条消息就1百万次redis，这肯定不能这样做。")]),_._v(" "),v("li",[_._v("解决: 所以我们可以不实时更新服务端的未读数，而改为jvm内存操作+定时批量更新redis。")]),_._v(" "),v("li",[_._v("思考: 当然中间可能会出现未读数服务宕机导致丢失部分未读数， 一般来说业务是能够允许的。")])]),_._v(" "),v("h3",{attrs:{id:"消息发送高并发难题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#消息发送高并发难题"}},[_._v("#")]),_._v(" 消息发送高并发难题")]),_._v(" "),v("ul",[v("li",[_._v("问题: 按照上面的架构，要给群里百万个用户转发消息，意味着一条消息就要要查询1百万次redis里的netty服务路由信息，再去发送")]),_._v(" "),v("li",[_._v("解决: 把用户连接均匀的分配给每台netty，直接给所有netty发消息(不查redis了)，在每台netty里根据群聊id找到所有对应用户连接，发送消息。")])]),_._v(" "),v("p",[_._v("思考:")]),_._v(" "),v("ol",[v("li",[_._v("如果有台服务器，没有分配到群聊id的用户，消息怎么处理呢??   直接丢弃。")]),_._v(" "),v("li",[_._v("netty服务器多了，那么你同步轮询往netty发消息，就慢了，最终服务就挂了吧??  这个可以用MQ解耦/异步/削峰吧；")]),_._v(" "),v("li",[_._v("上述的MQ异步之后，但还是同步的，意味着还是有顺序的???  那么就把MQ放到每个netty上去，重新搭建一个MQ集群专门给这些群聊消息，这些只给netty监听。")]),_._v(" "),v("li",[_._v("并发高了，怎么办??   放心上面的MQ机制已经平稳的处理netty的群聊消息了，但是其他服务我们可以用限流、熔断做处理。")]),_._v(" "),v("li",[_._v("能不能用UDP，减少TCP的ACK机制呢???  不可以，群聊消息要保证可靠。直播间可以做的。")])]),_._v(" "),v("h1",{attrs:{id:"百万直播间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#百万直播间"}},[_._v("#")]),_._v(" 百万直播间")]),_._v(" "),v("ul",[v("li",[_._v("同时发送1万个人发消息的高并发问题???  在业务上是，看不过来的，可以丢掉一些消息的，可以采用上面的UDP，甚至过载了不重要的用户直接丢弃不发消息也是可以的，但是这里最好做用户画像区分对待，避免错过金主用户。")])]),_._v(" "),v("h1",{attrs:{id:"百万关注的消息流"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#百万关注的消息流"}},[_._v("#")]),_._v(" 百万关注的消息流")]),_._v(" "),v("h2",{attrs:{id:"读扩散-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#读扩散-2"}},[_._v("#")]),_._v(" 读扩散")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("实现: redis存消息id，再回查mysql的消息表。存储的一份，需要多次回查。")])]),_._v(" "),v("li",[v("p",[_._v("问题: 这种对于一般的是可以，用户查询频繁回查mysql就多了，这样mysql会有问题。")])]),_._v(" "),v("li",[v("p",[_._v("思考: 把消息放redis，不再回查mysql ？？？ 那也不行，用户都频繁查redis是不是也会有问题呀，同时把消息放到redis是不是存储也大，这个思路就是下面的写扩散。")])]),_._v(" "),v("li",[v("p",[_._v("总结: 这种对查询要求高，节省存储， 适合给那些不咋上线的用户。 "),v("strong",[_._v("回查总是慢的")])])])]),_._v(" "),v("h2",{attrs:{id:"写扩散-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#写扩散-2"}},[_._v("#")]),_._v(" 写扩散")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("实现: 利用上面私聊的思路，"),v("strong",[_._v("发件箱和收件箱")]),_._v(" ，他发一条消息，同时往他的粉丝收件箱写一份。")])]),_._v(" "),v("li",[v("p",[_._v("问题: 粉丝几百万的话，就会写几百万条消息，直接GG.")])]),_._v(" "),v("li",[v("p",[_._v("总结: 这个"),v("strong",[_._v("适合")]),_._v("小粉丝量的。")])])]),_._v(" "),v("h2",{attrs:{id:"读写混合扩散"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#读写混合扩散"}},[_._v("#")]),_._v(" 读写混合扩散")]),_._v(" "),v("ul",[v("li",[_._v("实现: 活跃用户"),v("strong",[_._v("写扩散")]),_._v("，非活跃用户"),v("strong",[_._v("读扩散")]),_._v("，非活跃用户读取消息后把这些消息写到自己的收件箱("),v("strong",[_._v("改进")]),_._v(")")]),_._v(" "),v("li",[_._v("思考: 这个方案业务相关，真正活跃的粉丝其他并不多，所以用写扩散(以空间换时间ok)，但是对非活跃的粉丝给他存就是浪费空间存储。")]),_._v(" "),v("li",[_._v("问题: 非活跃用户用"),v("strong",[_._v("读扩散")]),_._v("方案，那么第一次查询也慢呀??? 这个没有办法,但是这里对读扩散做了优化，之后的重复查询就会快了，同时该用户经常上线后用户状态也会变成活跃用户，就有写扩散的机制了。")]),_._v(" "),v("li",[_._v("总结: 这套方案复杂，需要根据用户标签做不同方案处理。")])]),_._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),v("ul",[v("li",[_._v("大V 采用读写混合扩散.")]),_._v(" "),v("li",[_._v("小V 采用写扩散.")]),_._v(" "),v("li",[_._v("读扩散查询慢就不适合。")]),_._v(" "),v("li",[_._v("收件箱可以是mysql、redis等等。但是发件箱最好是关系型数据库。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);