(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{552:function(t,a,s){"use strict";s.r(a);var r=s(7),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),a("p",[t._v("需要网络抓包.不仅仅是自己使用哈。")]),t._v(" "),a("h1",{attrs:{id:"调研"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调研"}},[t._v("#")]),t._v(" 调研")]),t._v(" "),a("ul",[a("li",[t._v("Charles Proxy：易于使用，适合GUI用户。（工具）")]),t._v(" "),a("li",[t._v("Wireshark & tcpdump：适合高级网络分析和协议研究。（工具）")]),t._v(" "),a("li",[t._v("Burp Suite：如果需要进行安全相关的抓包分析，它是一个强大工具。 （工具）")]),t._v(" "),a("li",[t._v("mitmproxy：开源，强大，适合CLI用户和自动化需求。（服务器）")]),t._v(" "),a("li",[t._v("Squid：强大的代理服务器，适合需要缓存和网络优化的场景。（服务器）")]),t._v(" "),a("li",[t._v("Nginx： 作为反向代理可以帮助你捕获和处理流量，同时具有高扩展性。（服务器）")])]),t._v(" "),a("p",[t._v("最终看啦文档采用mitmproxy来处理。")]),t._v(" "),a("h1",{attrs:{id:"mitmproxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mitmproxy"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.mitmproxy.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mitmproxy"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"ubuntu服务器的安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu服务器的安装"}},[t._v("#")]),t._v(" ubuntu服务器的安装")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo apt update\nsudo apt install mitmproxy\n# 支持外部代理 --listen-host 0.0.0.0 \n# 支持全球流量的代理  --set block_global=false\n# web界面支持外网访问 --web-host 0.0.0.0\n# 默认代理端口是8080 , web页面端口是8081\nmitmweb --listen-host 0.0.0.0 --web-host 0.0.0.0 --set block_global=false\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"网络设置http代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络设置http代理"}},[t._v("#")]),t._v(" 网络设置http代理")]),t._v(" "),a("ul",[a("li",[t._v("注意mac是分http和https2个代理的哈。")]),t._v(" "),a("li",[t._v("其他的有的是一个代理项就行。")])]),t._v(" "),a("h2",{attrs:{id:"配置证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置证书"}},[t._v("#")]),t._v(" 配置证书")]),t._v(" "),a("ul",[a("li",[t._v("坑1 ：一个代理服务器是一个证书,不能混合使用。 也就是说切换代理服务器，这个证书也需要重新安装")]),t._v(" "),a("li",[t._v("进入 "),a("code",[t._v("http://mitm.it")]),t._v(" 之后找到对应平台。 get xxx 是下载，旁边的 Show Instructions 是安装说明。")])]),t._v(" "),a("h3",{attrs:{id:"ios设备配置代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios设备配置代理"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://blog.csdn.net/2301_78843735/article/details/138803809",target:"_blank",rel:"noopener noreferrer"}},[t._v("ios设备配置代理"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("说明里面没有的内容为：")]),t._v(" "),a("ul",[a("li",[t._v("Wi-Fi设置HTTP 代理")]),t._v(" "),a("li",[t._v("在sari中打开http://mitm.it/ 其他浏览器有问题（不会自动安装证书.）。")]),t._v(" "),a("li",[t._v("证书的信任设置: 设置 -> 通用-> VPN与设备管理 ->  mitmproxy")]),t._v(" "),a("li",[t._v("【说明里面有这个】信任证书，通用 -> 关于本机 -> 下拉到 证书信任设置 -> 找到mitmproxy点击开关信任")])]),t._v(" "),a("h3",{attrs:{id:"安卓证书安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安卓证书安装"}},[t._v("#")]),t._v(" 安卓证书安装")]),t._v(" "),a("p",[t._v("用户级别的证书\n安卓7以下 安装到用户级别  -》 可以发送https请求\n安卓7+以上 安装到用户级别 -》 无法发送https请求")]),t._v(" "),a("p",[t._v("安卓7+以上要发送https请求 必须安装到系统级别证书")]),t._v(" "),a("h4",{attrs:{id:"安卓模拟器证书安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安卓模拟器证书安装"}},[t._v("#")]),t._v(" 安卓模拟器证书安装")]),t._v(" "),a("p",[t._v("同上 下载完成 之后 在通知栏点击下载内容进行安装就行。"),a("br"),t._v("\n注意用途是：VPN和应用\n查看： 安全 -》 信任的凭证 -》 用户 -》 可以看到我们定义的CA")]),t._v(" "),a("h4",{attrs:{id:"安卓真机系统级别安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安卓真机系统级别安装"}},[t._v("#")]),t._v(" 安卓真机系统级别安装")]),t._v(" "),a("ol",[a("li",[t._v("需要root，root这一步现在就不容易啦。")])]),t._v(" "),a("h3",{attrs:{id:"windows和安卓证书安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows和安卓证书安装"}},[t._v("#")]),t._v(" [windows和安卓证书安装]")]),t._v(" "),a("p",[t._v("参考"),a("code",[t._v("软件测试学习笔记丨Mitmproxy使用")])]),t._v(" "),a("h2",{attrs:{id:"web网址查看抓包内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web网址查看抓包内容"}},[t._v("#")]),t._v(" web网址查看抓包内容")]),t._v(" "),a("p",[t._v("访问"),a("code",[t._v("服务器ip:8081")])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/ceshiren_com/article/details/142762957",target:"_blank",rel:"noopener noreferrer"}},[t._v("软件测试学习笔记丨Mitmproxy使用"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);