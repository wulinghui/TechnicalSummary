(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{611:function(e,t,r){"use strict";r.r(t);var o=r(7),n=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/yejingtao703/article/details/82321286",target:"_blank",rel:"noopener noreferrer"}},[e._v("云平台基础知识"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("基础知识有挺多建议看看。以下有个特别点可以提出来:   如何支持百万直播间的服务，可以采用这种去做。")]),e._v(" "),t("p",[e._v("CDN：Content Delivery Network，内容分发网络。十年前，我刚入行做IPTV流媒体业务时，都是自己写代码来完成省份区县间片源的调度的，无外呼是客户机顶盒请求到中心服务，算法会根据IP重定向到距离IP最近的机房提供服务，但是该机房不见得有客户要点播的这个片源，所以还可能要从其它机房ftp过来或者重定向到其它机房。当时没有大数据存储，机房的磁盘可以存储的片子也有限，所以还要计算哪些事热门片源互相分享、哪些是冷门片源在该机房删除，等等等等。现在这一切的一切，从大数据存储和缓存技术过来的灵感，我们只需要租用云平台的CDN服务，就都帮我们搞定了。CDN干的事情，也就是十年前我写代码干的事情了，在距离客户最近的服务点上缓存服务内容，一来提高相应速率，二来减少核心数据中心的请求次数。了解了CDN的原理，也要注意云平台采购的问题了，例如你的服务对象都在国内，你买个国外的CDN，人家压根在国内就没有布网，也就用不起来了。")])]),e._v(" "),t("h2",{attrs:{id:"配置管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置管理"}},[e._v("#")]),e._v(" 配置管理")]),e._v(" "),t("p",[e._v("confd : 使用来自etcd或Consol的模板和数据管理本地应用程序配置文件")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1669171",target:"_blank",rel:"noopener noreferrer"}},[e._v("confd基本使用--Nginx配置自动化"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("模板化，参数从数据库来，生成结果配置文件")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1494459",target:"_blank",rel:"noopener noreferrer"}},[e._v("confd + Nacos | 无代码侵入的配置变更管理"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("Nacos 插件，使得confd支持nacos数据库。")])]),e._v(" "),t("h2",{attrs:{id:"告警项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#告警项目"}},[e._v("#")]),e._v(" 告警项目")]),e._v(" "),t("p",[e._v("Skywalking告警相关文章：")]),e._v(" "),t("p",[e._v("https://blog.51cto.com/knifeedge/5141446")]),e._v(" "),t("p",[e._v("https://blog.51cto.com/zero01/2463976")]),e._v(" "),t("p",[e._v("https://www.cnblogs.com/heihaozi/p/apache-skywalking-alarm.html")]),e._v(" "),t("p",[e._v("https://github.com/apache/skywalking/blob/master/docs/en/setup/backend/configuration-vocabulary.md")]),e._v(" "),t("p",[e._v("Prometheus告警相关文章：")]),e._v(" "),t("p",[e._v("https://blog.csdn.net/qq_43437874/article/details/120411586")]),e._v(" "),t("p",[e._v("https://www.kancloud.cn/pshizhsysu/prometheus/1872669#POST_apiv2alerts_35")]),e._v(" "),t("p",[e._v("https://www.cnblogs.com/longcnblogs/p/9620733.html")]),e._v(" "),t("p",[e._v("https://yunlzheng.gitbook.io/prometheus-book/parti-prometheus-ji-chu/alert/prometheus-alert-rule")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("- [你真的会 Prometheus 查询吗？--PromQL 合集](https://xie.infoq.cn/article/e03000fe46ef95f6454be7ba4)\n")])])]),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/qq_38371367/article/details/108104084",target:"_blank",rel:"noopener noreferrer"}},[e._v("常见开源告警系统对比分析"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("Alertmanager 功能的介绍和背景信息。")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://prometheus.io/docs/guides/file-sd/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus 通过consul动态加载配置文件"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("这个只是服务发现，加载target目标机器；算是Targets动态配置的实现方案。")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/shykevin/article/details/107012444",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alertmanager 安装与使用"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("Prometheus的警报分为两个部分。Prometheus服务器中的警报规则将警报发送到Alertmanager。该Alertmanager 然后管理这些警报，包括沉默，抑制，聚集和通过的方法")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.51cto.com/lookingdream/2506233",target:"_blank",rel:"noopener noreferrer"}},[e._v("prometheus动态刷新rule"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("二种方式 ： 1、通过模板 2、开启配置文件热加载： 官网地址："),t("a",{attrs:{href:"https://prometheus.io/docs/prometheus/latest/management_api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("管理 API"),t("OutboundLink")],1)])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.lijiaocn.com/%E6%8A%80%E5%B7%A7/2018/08/30/confd-prometheus-dynamic-config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("通过consul、confd，动态为prometheus添加监控目标和告警规则"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("配置prometheus，动态发现监控目标 ;  配置confd，动态更新告警规则 ; 再调用上面的管理API")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/458403256",target:"_blank",rel:"noopener noreferrer"}},[e._v("prometheus告警规则管理"),t("OutboundLink")],1)])]),e._v(" "),t("blockquote",[t("p",[e._v("通过修改源码的方式，可以动态实现告警规则更新")])])])}),[],!1,null,null,null);t.default=n.exports}}]);