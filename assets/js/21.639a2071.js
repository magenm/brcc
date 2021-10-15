(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{404:function(t,a,s){"use strict";s.r(a);var n=s(46),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),s("h2",{attrs:{id:"部署brcc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署brcc"}},[t._v("#")]),t._v(" 部署brcc")]),t._v(" "),s("p",[t._v("    请点击《"),s("RouterLink",{attrs:{to:"/deploy.html"}},[t._v("部署手册")]),t._v("》查看如何部署brcc server端。假设管理端的地址是http://127.0.0.1:8080")],1),t._v(" "),s("h2",{attrs:{id:"登录管理端增加配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录管理端增加配置"}},[t._v("#")]),t._v(" 登录管理端增加配置")]),t._v(" "),s("h3",{attrs:{id:"登录管理端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录管理端"}},[t._v("#")]),t._v(" 登录管理端")]),t._v(" "),s("p",[t._v("访问 "),s("a",{attrs:{href:"http://127.0.0.1:8080/#/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8080/#/login"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"/brcc/login.png",alt:"登录界面"}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("初始安装的超管账号和密码admin/admin")])])]),t._v(" "),s("h3",{attrs:{id:"增加产品线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加产品线"}},[t._v("#")]),t._v(" 增加产品线")]),t._v(" "),s("p",[t._v("产品线入口， 产品线入口有3个，首页中的【全部产品线】、具体产品，个人信息菜单下拉框中的【我的产品线】如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/brcc/product_entry.png",alt:"产品线入口"}})]),t._v(" "),s("p",[t._v("新建产品线 test。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/brcc/product_create.png",alt:"产品线新建"}}),t._v("\n新建后，点击test进入工程列表")]),t._v(" "),s("h3",{attrs:{id:"增加工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加工程"}},[t._v("#")]),t._v(" 增加工程")]),t._v(" "),s("p",[t._v('进入工程列表后，点击"新建工程"按钮。\n'),s("img",{attrs:{src:"/brcc/project-manage.png",alt:"工程管理"}}),t._v('\n新建工程 example，api密码设置为123456。新建后在工程列表界面点击"example"进入环境页面。')]),t._v(" "),s("h3",{attrs:{id:"增加环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加环境"}},[t._v("#")]),t._v(" 增加环境")]),t._v(" "),s("p",[t._v('点击"新增环境"，增加一个新环境dev,\n'),s("img",{attrs:{src:"/brcc/environment.png",alt:"环境管理"}}),t._v("\n点击dev，进入版本页面。")]),t._v(" "),s("h3",{attrs:{id:"增加版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加版本"}},[t._v("#")]),t._v(" 增加版本")]),t._v(" "),s("p",[t._v('新增环境 1.0,点击"1.0"进入分组页面。\n'),s("img",{attrs:{src:"/brcc/version-list.png",alt:"版本管理"}})]),t._v(" "),s("h3",{attrs:{id:"增加分组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加分组"}},[t._v("#")]),t._v(" 增加分组")]),t._v(" "),s("p",[t._v('新增分组 g1，点击"g1"进入配置页面。\n'),s("img",{attrs:{src:"/brcc/group-list.png",alt:"分组管理"}})]),t._v(" "),s("h3",{attrs:{id:"增加配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加配置"}},[t._v("#")]),t._v(" 增加配置")]),t._v(" "),s("p",[t._v("增加3个配置：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("a=5\nb=34\nc=xx13\n")])])]),s("p",[s("img",{attrs:{src:"/brcc/config-batch.png",alt:"配置管理"}})]),t._v(" "),s("h2",{attrs:{id:"使用java-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用java-sdk"}},[t._v("#")]),t._v(" 使用java-sdk")]),t._v(" "),s("h3",{attrs:{id:"增加brcc依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加brcc依赖"}},[t._v("#")]),t._v(" 增加brcc依赖")]),t._v(" "),s("p",[t._v("创建一个通用的springboot应用，在pom文件中增加如下依赖：")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.baidu.mapp"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("brcc-sdk-starter"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.0.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("brcc sdk starter的最好使用最新版本。"),s("a",{attrs:{href:"https://maven-badges.herokuapp.com/maven-central/com.baidu.mapp/brcc-sdk-starter",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://maven-badges.herokuapp.com/maven-central/com.baidu.mapp/brcc-sdk-starter/badge.svg",alt:"brcc sdk starter"}}),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"增加brcc的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加brcc的配置"}},[t._v("#")]),t._v(" 增加brcc的配置")]),t._v(" "),s("p",[t._v("在application.yml增加brcc的配置")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rcc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cc-server-url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8080/ "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这里brcc server的地址")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("project-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" example                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#工程名")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cc-password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("                   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#工程的api密码")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dev                         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#环境名称")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cc-version-name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#版本名称")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("log-properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#是否打印配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable-update-callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#是否启用自动更新")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable-interrupt-service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#第一次加载工程api密码错误时是否中断服务")]),t._v("\n")])])]),s("h3",{attrs:{id:"检查配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查配置"}},[t._v("#")]),t._v(" 检查配置")]),t._v(" "),s("p",[t._v("启动应用， 在日志中检查是否有打印类似如下信息：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("a=5\nb=34 \nc=xx13 \n")])])]),s("h3",{attrs:{id:"使用配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用配置"}},[t._v("#")]),t._v(" 使用配置")]),t._v(" "),s("p",[t._v("拉取配置成功后，既可通过spring的placeholder能力在各种注解中使用这些配置，如：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${a}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${b}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${c}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用go-sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用go-sdk"}},[t._v("#")]),t._v(" 使用go-sdk")]),t._v(" "),s("h3",{attrs:{id:"brcc-go-sdk代码库地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#brcc-go-sdk代码库地址"}},[t._v("#")]),t._v(" brcc-go-sdk代码库地址")]),t._v(" "),s("p",[t._v("https://github.com/baidu/brcc/tree/main/brcc-go-sdk")]),t._v(" "),s("h3",{attrs:{id:"brcc初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#brcc初始化"}},[t._v("#")]),t._v(" brcc初始化")]),t._v(" "),s("p",[t._v("使用")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    brcc github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("baidu"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("brcc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("brcc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sdk\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"_1-通过toml文件初始化brcc客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过toml文件初始化brcc客户端"}},[t._v("#")]),t._v(" 1) 通过toml文件初始化brcc客户端")]),t._v(" "),s("p",[t._v("配置示例")]),t._v(" "),s("div",{staticClass:"language-toml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-toml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("serverUrl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"brcc.baidu-int.com"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("projectName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"brcc-go-client"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("envName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("versionName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("apiPassword")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("enableCallback")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("callbackInterval")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("requestTimeout")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("enableCache")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key property"}},[t._v("cacheDir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/tmp/brcc"')]),t._v("\n")])])]),s("p",[t._v("参数说明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("配置参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("是否必填")]),t._v(" "),s("th",[t._v("配置说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("serverUrl")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("brcc服务域名")])]),t._v(" "),s("tr",[s("td",[t._v("projectName")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("brcc工程名")])]),t._v(" "),s("tr",[s("td",[t._v("envName")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("brcc环境名")])]),t._v(" "),s("tr",[s("td",[t._v("versionName")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("版本号")])]),t._v(" "),s("tr",[s("td",[t._v("apiPassword")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("工程API密码")])]),t._v(" "),s("tr",[s("td",[t._v("enableCallback")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("是否开启配置更新回调, 默认值false关闭")])]),t._v(" "),s("tr",[s("td",[t._v("callbackInterval")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("配置更新回调时间间隔, 单位秒, 默认值300秒")])]),t._v(" "),s("tr",[s("td",[t._v("requestTimeout")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("brcc服务接口访问超时时间, 单位秒, 默认值5秒")])]),t._v(" "),s("tr",[s("td",[t._v("enableCache")]),t._v(" "),s("td",[t._v("bool")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("是否开启文件缓存, 在远程获取配置失败时从本地缓存中读取配置, 默认值false关闭")])]),t._v(" "),s("tr",[s("td",[t._v("cacheDir")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("文件缓存位置, 默认值 /tmp/brcc")])])])]),t._v(" "),s("p",[t._v("初始化")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用toml配置文件初始化brcc客户端, name为配置文件路径")]),t._v("\nerr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" brcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StartWithConfFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("panic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sprintf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"init brcc error: %v"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-通过代码配置初始化brcc客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过代码配置初始化brcc客户端"}},[t._v("#")]),t._v(" 2) 通过代码配置初始化brcc客户端")]),t._v(" "),s("p",[t._v("初始化示例")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("brccConf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("brcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ProjectName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"brcc-go-client"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    EnvName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ServerUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"brcc.baidu-int.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ApiPassword"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123456"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    VersionName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    EnableCallback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    CallbackIntervalInt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    RequestTimeoutInt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    EnableCache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    CacheDir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/tmp/brcc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nerr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" brcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("StartWithConf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" brccConf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("panic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sprintf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"init brcc error: %v"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"brcc获取远程配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#brcc获取远程配置"}},[t._v("#")]),t._v(" brcc获取远程配置")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取远程配置")]),t._v("\nbrcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取所有的key")]),t._v("\nbrcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetAllKeys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"brcc注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#brcc注入"}},[t._v("#")]),t._v(" brcc注入")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Test "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    A "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`brcc:"test.a"`')]),t._v("\n    B "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`brcc:"test.b"`')]),t._v("\n    C "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`brcc:"test.c"`')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ntv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("Test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注入")]),t._v("\nbrcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"brcc监听配置变更"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#brcc监听配置变更"}},[t._v("#")]),t._v(" brcc监听配置变更")]),t._v(" "),s("p",[t._v("使用示例")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" DemoSet "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("DemoSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ce "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("brcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChangeEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//建议defer捕获协程panic处理")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("recover")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"watch update callback panic"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" change "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" ce"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Changes "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" change"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChangeType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" brcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ADD "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" change"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChangeType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" brcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MODIFY "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" change"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NewValue\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" change"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChangeType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" brcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DELETE "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" DemoSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nbrcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Watch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);