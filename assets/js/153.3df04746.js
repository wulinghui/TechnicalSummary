(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{519:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"高级用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高级用法"}},[t._v("#")]),t._v(" 高级用法")]),t._v(" "),s("ol",[s("li",[t._v("FlashMap、RedirectAttributes : 给重定向设置的参数")]),t._v(" "),s("li",[t._v("@SessionAttributes ： 将对应的内容从model中匹配到后放到session中。")]),t._v(" "),s("li",[t._v("@InitBinder ：  数据绑定（预处理）、类级别的属性编辑器、请求参数带有fieldDefaultPrefix的参数,去掉该前缀再绑定到对应请求入参上、设置过滤的参数不接受等等设置好多处理器。 具体看他的set方法。")]),t._v(" "),s("li",[t._v("@ModelAttribute ：  请求处理方法之前的预处理属于类上的、绑定请求参数到实体对象")]),t._v(" "),s("li",[t._v("@ControllerAdvice : 全局异常处理、全局数据绑定（预处理）")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/115891808",target:"_blank",rel:"noopener noreferrer"}},[t._v("内容协商"),s("OutboundLink")],1),t._v(": 默认不开启，根据不同的请求格式,返回不同的类型数据格式(json、xml)")]),t._v(" "),s("li",[t._v("ApplicationContextInitializer 接口refresh()之前对ApplicationContext的扩展点.")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/zimou5581/article/details/99548519",target:"_blank",rel:"noopener noreferrer"}},[t._v("动态注册处理接口"),s("OutboundLink")],1)])]),t._v(" "),s("h1",{attrs:{id:"核心类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心类"}},[t._v("#")]),t._v(" 核心类")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("HandlerExecutionChain :  Handler执行链， 里面包含Handler和拦截器")])]),t._v(" "),s("li",[s("p",[t._v("HandlerMapping ： 处理器映射器；负责根据用户请求找到 Handler 即处理器，SpringMVC 提供了不同的映射器实现不同的")]),t._v(" "),s("p",[t._v("映射方式，例如：配置文件方式，实现接口方式，注解方式等。")])]),t._v(" "),s("li",[s("p",[t._v("ModelAndView:   承载model和view，供程序员操作的.")])]),t._v(" "),s("li",[s("p",[t._v("HandlerExceptionResolver :   异常处理视图")])]),t._v(" "),s("li",[s("p",[t._v("DispatcherServlet： 前端调度器 ， 负责将请求拦截下来分发到各控制器方法中")])]),t._v(" "),s("li",[s("p",[t._v("HandlerMapping: 负责根据请求的URL和配置@RequestMapping映射去匹配， 匹配到 会返回Handler（具体控制器的方法）")])]),t._v(" "),s("li",[s("p",[t._v("HandlerAdaper: 负责调用Handler-具体的方法- 返回视图的名字 Handler将它封装到 ModelAndView(封装视图名，request域的数据）")])]),t._v(" "),s("li",[s("p",[t._v("ViewReslover: 根据ModelAndView里面的视图名地址去找到具体的jsp封装在View对象中")])]),t._v(" "),s("li",[s("p",[t._v("View：进行视图渲染（将jsp转换成html内容 --这是Servlet容器的事情了） 最终response 到的客户端")])])]),t._v(" "),s("h1",{attrs:{id:"主体流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主体流程"}},[t._v("#")]),t._v(" 主体流程")]),t._v(" "),s("h2",{attrs:{id:"启动流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动流程"}},[t._v("#")]),t._v(" 启动流程")]),t._v(" "),s("p",[t._v("JDK的SPI 到 Servlet的SCI接口 =>  业务设置的ServletInitializer类，实现父子容器的初始化 ->  @EnableWebMvc 注册相关的bean。")]),t._v(" "),s("p",[t._v("servlert启动后，才回调spring的"),s("strong",[t._v("ApplicationContextInitializer")]),t._v("接口，再他里面执行父子容器refresh方法。")]),t._v(" "),s("h2",{attrs:{id:"运行流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行流程"}},[t._v("#")]),t._v(" 运行流程")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("DispatcherServlet.doService入口，遍历所有"),s("strong",[t._v("HandlerMapping")]),t._v("解析request获得该"),s("strong",[t._v("Handler")]),t._v("和"),s("strong",[t._v("对应的拦截器")]),t._v("，以"),s("strong",[t._v("HandlerExecutionChain")]),t._v("对象返回；")])]),t._v(" "),s("li",[s("p",[t._v("循环调用"),s("strong",[t._v("HandlerAdapter")]),t._v(".supports确定合适的"),s("strong",[t._v("HandlerAdapter")])])]),t._v(" "),s("li",[s("p",[t._v("HandlerExecutionChain.applyPreHandle调用前置拦截器的preHandle方法")])]),t._v(" "),s("li",[s("p",[t._v("HandlerAdapter.handle 执行 解析参数和处理业务,获得业务返回，并封装成ModelAndView返回。")]),t._v(" "),s("blockquote",[s("p",[t._v("提取Request中的模型数据，填充Handler入参，开始执行Handler（Controller)。")]),t._v(" "),s("p",[t._v("HttpMessageConveter的数据转换， 数据验证")])])]),t._v(" "),s("li",[s("p",[t._v("拦截器处理后置方法")])]),t._v(" "),s("li",[s("p",[t._v("异常判断并封装处理成ModelAndView")])]),t._v(" "),s("li",[s("p",[t._v("根据返回的ModelAndView，选择一个适合的ViewResolver")])]),t._v(" "),s("li",[s("p",[t._v("ViewResolver 结合Model和View，来渲染视图")])]),t._v(" "),s("li",[s("p",[t._v("拦截器处理完成方法.")])]),t._v(" "),s("li",[s("p",[t._v("将渲染结果返回给客户端")])])]),t._v(" "),s("h1",{attrs:{id:"自己的疑问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自己的疑问"}},[t._v("#")]),t._v(" 自己的疑问")]),t._v(" "),s("ul",[s("li",[t._v("DispatcherServlet上面没有@webservlert注解，必须要配置。  spring-boot是通过Servlet3.0研究之ServletContainerInitializer实现的，零配置实现的。")])]),t._v(" "),s("h1",{attrs:{id:"一些比较有趣的代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些比较有趣的代码"}},[t._v("#")]),t._v(" 一些比较有趣的代码")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需求背景: 整合第三方jar对外提供一些服务")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传统做法: 就是写controller层再做一些业务逻辑封装调用一下。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改进:     能不能利用mvc的参数解析来实现,较少的侵入性呢??")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMappingHandlerMapping")]),t._v(" rmhm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMappingHandlerMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" applicationContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"requestMappingHandlerMapping"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" empty "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMappingInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder")]),t._v(" mappping "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMappingInfo")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类名 + 方法名")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDeclaringClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSimpleName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("methods")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 强制设置为post.")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("params")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("headers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("consumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("produces")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("empty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mappingName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestMappingInfo")]),t._v(" mapping "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mappping"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" handler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//TODO 这种要求handler必须是单例的。")]),t._v("\n        rmhm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerMapping")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mapping"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO 如果要handler是多例的话，怎么处理，就想QQTool是不同的appid调用不同的。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 做个公共接口，只用request的解析和")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletInvocableHandlerMethod")]),t._v(" invocableMethod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletInvocableHandlerMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndViewContainer")]),t._v(" mavContainer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelAndViewContainer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletWebRequest")]),t._v(" webRequest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServletWebRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" invoke "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" invocableMethod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("invokeForRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webRequest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mavContainer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后一个不足，这些都是动态的。如果第三方jar更新了并且改动了方法，他是不会报错的。")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有好多问题不会再编码层面报出来，这块就需要回归测试来校验了。")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br")])]),s("h1",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1415712",target:"_blank",rel:"noopener noreferrer"}},[t._v("简单讲一下SpringMVC的执行流程？"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);