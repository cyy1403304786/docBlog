(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{418:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-知识点合集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-知识点合集"}},[t._v("#")]),t._v(" vue 知识点合集")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Vue 是一个用于构建用户界面的开源Javascript框架，也是一个创建单页面的 Web 应用框架。Vue 关注的核心是视图层，可以方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互。")])]),t._v(" "),a("h2",{attrs:{id:"浅谈mvc-、mvvm、mvp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅谈mvc-、mvvm、mvp"}},[t._v("#")]),t._v(" 浅谈MVC 、MVVM、MVP")]),t._v(" "),a("p",[a("font",{attrs:{size:"5",color:"red"}},[t._v(" MVC ")])],1),t._v(" "),a("p",[t._v("MVC 是一个编程思想，是一种设计模式。")]),t._v(" "),a("ul",[a("li",[t._v("Model: 数据模型层，将数据发送到 View 层；")]),t._v(" "),a("li",[t._v("View： 视图层，显示界面，传送指令到 Controller；")]),t._v(" "),a("li",[t._v("Controller：控制层，完成业务逻辑后调用数据渲染视图；")])]),t._v(" "),a("p",[t._v("所有的通信都是单向的")]),t._v(" "),a("p",[a("font",{attrs:{size:"5",color:"red"}},[t._v(" MVP ")])],1),t._v(" "),a("p",[t._v("MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向。")]),t._v(" "),a("ul",[a("li",[t._v("Model: 数据模型层；")]),t._v(" "),a("li",[t._v("View： 视图层，显示界面；")]),t._v(" "),a("li",[t._v("Presenter：控制层，完成业务逻辑后调用数据渲染视图；")])]),t._v(" "),a("p",[t._v("各部分的通信都是双向的")]),t._v(" "),a("p",[t._v("View 与 Model 不发生联系，都通过 Presenter 传递。")]),t._v(" "),a("p",[a("font",{attrs:{size:"5",color:"red"}},[t._v(" MVVM ")])],1),t._v(" "),a("p",[t._v("MVVM 也是一种设计思想，简称为数据驱动。")]),t._v(" "),a("ul",[a("li",[t._v("Model: 数据模型层，负责处理业务逻辑以及和服务器端进行交互；")]),t._v(" "),a("li",[t._v("View： 视图层，负责将数据模型转化为UI展示出来，可以简单的理解为HTML页面；")]),t._v(" "),a("li",[t._v("ViewModel：视图模型层，用来连接Model和View，是Model和View之间的通信桥梁；")])]),t._v(" "),a("p",[t._v("各部分之间的通信时双向的，采用双向绑定，view的变动自动反映到 ViewModel。")]),t._v(" "),a("h2",{attrs:{id:"双向数据绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双向数据绑定"}},[t._v("#")]),t._v(" 双向数据绑定")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("数据绑定:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("单向绑定：把 Model 绑定到 View,当我们用 JavaScript 代码 更新 Model 时，view 就会自动更新。\n\n双向绑定：用户更新View, Modele 的数据也自动更新了，这个就是双向数据绑定。\n")])])])]),t._v(" "),a("p",[a("strong",[a("font",{attrs:{size:"3"}},[t._v(" 双向数据绑定的原理？")])],1)]),t._v(" "),a("p",[t._v("vue 实现双向数据的绑定主要是通过数据的劫持结合发布/订阅模式的方式，通过Object.defineProperty()的set,get 方法。在数据变动的时候发布消息给订阅者触发监听。")]),t._v(" "),a("h2",{attrs:{id:"对-spa-的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对-spa-的理解"}},[t._v("#")]),t._v(" 对 SPA 的理解")]),t._v(" "),a("p",[t._v("SPA，简称单页面应用。主要通过页面重写当前页面来与用户交互，避免了页面之间切换打断用户体验。Vue 就是属于单页面应用。")]),t._v(" "),a("p",[a("strong",[a("font",{attrs:{size:"3"}},[t._v(" 1，单页面与多页面的区别？")])],1)]),t._v(" "),a("ul",[a("li",[a("p",[t._v("单页面")]),t._v(" "),a("ul",[a("li",[t._v("由一个主页面和多个页面片段组成")]),t._v(" "),a("li",[t._v("页面刷新是局部刷新")]),t._v(" "),a("li",[t._v("难以做页面SEO，可通过 SSR 方式")]),t._v(" "),a("li",[t._v("数据传递容易")]),t._v(" "),a("li",[t._v("页面切换快，用户体验好")]),t._v(" "),a("li",[t._v("首屏加载慢")])])]),t._v(" "),a("li",[a("p",[t._v("多页面")]),t._v(" "),a("ul",[a("li",[t._v("由多个主页面组成")]),t._v(" "),a("li",[t._v("页面刷新是整页刷新")]),t._v(" "),a("li",[t._v("容易实现 SEO")]),t._v(" "),a("li",[t._v("切换加载资源，速度慢，用户体验差")])])])]),t._v(" "),a("p",[a("strong",[a("font",{attrs:{size:"3"}},[t._v(" 2，实现单页面的SEO？")])],1)]),t._v(" "),a("p",[t._v("SSR服务端渲染，将组件或页面通过服务器生成html，再返回给浏览器，如nuxt.js")]),t._v(" "),a("p",[a("strong",[a("font",{attrs:{size:"3"}},[t._v(" 3，SPA 首屏加载慢问题")])],1)]),t._v(" "),a("p",[t._v("SPA 首屏优化的方式：")]),t._v(" "),a("ul",[a("li",[t._v("通过路由懒加载，减小入口文件体积；")]),t._v(" "),a("li",[t._v("静态资源本地缓存（后端资源返回，设置Cache-Control 响应头）；")]),t._v(" "),a("li",[t._v("UI框架按需加载；")]),t._v(" "),a("li",[t._v("图片资源的压缩；")]),t._v(" "),a("li",[t._v("开启GZip压缩；")])]),t._v(" "),a("h2",{attrs:{id:"vue-组件中data-属性返回的是一个函数而不是一个对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件中data-属性返回的是一个函数而不是一个对象"}},[t._v("#")]),t._v(" vue 组件中data 属性返回的是一个函数而不是一个对象？")]),t._v(" "),a("p",[a("strong",[a("font",{attrs:{size:"3"}},[t._v(" 1，VUE 实例和组件定义data的 区别")])],1)]),t._v(" "),a("p",[t._v("vue实例的时候定义data 属性既可以是对象，也可以是函数")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("   const app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#app"')]),t._v(",\n      // 对象格式\n      data:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         foo:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n      // 函数格式\n      "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               foo:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("组件中定义data 属性只能是函数")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("Vue.component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'component1'")]),t._v(","),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    template:"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("组件"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(",\n    data:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        foo:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[a("font",{attrs:{size:"3"}},[t._v(" 2，VUE 组件中定义 data 属性为什么必须是函数？")])],1)]),t._v(" "),a("p",[t._v("组件实例对象data必须为函数，目的是为了防止多个组件实例对象之间共用一个data，产生数据污染。采用函数的形式，initData时会将其作为工厂函数都会返回全新data对象。")]),t._v(" "),a("p",[t._v("模仿组件构造函数，定义data属性，采用对象的形式")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nComponent.prototype.data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcount "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("创建两个组件实例")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("const componentA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconst componentB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new Component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("修改componentA组件data属性的值，componentB中的值也发生了改变")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("componentB.data.count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  // "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\ncomponentA.data.count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nconsole.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("componentB.data.count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  // "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[t._v("产生上述现象的原因是因为两者共用了同一个内存地址，componentA修改的内容，同样对componentB产生了影响。")]),t._v(" "),a("p",[t._v("vue组件可能会有很多个实例，采用函数返回一个全新data形式，使每个实例对象的数据不会受到其他实例对象数据的污染")]),t._v(" "),a("h2",{attrs:{id:"vue-组件中的通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件中的通信"}},[t._v("#")]),t._v(" vue 组件中的通信？")]),t._v(" "),a("p",[a("strong",[a("font",{attrs:{size:"3"}},[t._v(" 1，组件间通信的分类？")])],1)]),t._v(" "),a("ul",[a("li",[t._v("父子组件通信")]),t._v(" "),a("li",[t._v("兄弟组件通信")]),t._v(" "),a("li",[t._v("祖孙与后代组件通信")]),t._v(" "),a("li",[t._v("非关系组件间的通信")])]),t._v(" "),a("p",[a("strong",[a("font",{attrs:{size:"3"}},[t._v(" 2，组件通信方案？")])],1)]),t._v(" "),a("ul",[a("li",[t._v("1，通过 props 传递；")]),t._v(" "),a("li",[t._v("2，通过 $emit 触发自定义事件；")]),t._v(" "),a("li",[t._v("3，使用 ref；")]),t._v(" "),a("li",[t._v("4，EventBus；")]),t._v(" "),a("li",[t._v("5，$parent 或$root；")]),t._v(" "),a("li",[t._v("6，attrs 与 listeners；")]),t._v(" "),a("li",[t._v("7，Provide 与 Inject")]),t._v(" "),a("li",[t._v("8，vuex;")])]),t._v(" "),a("p",[a("strong",[a("font",{attrs:{size:"3"}},[t._v(" 3，组件通信使用场景？")])],1)]),t._v(" "),a("ul",[a("li",[t._v("1，父子组件通信使用")])]),t._v(" "),a("p",[t._v("1.1，子组件设置 props 属性，定义接收父组件传递过来的参数；")]),t._v(" "),a("p",[t._v("1.2，子组件通过$emit触发自定义事件，$emit第二个参数为子组件向父组件传递的数值；")]),t._v(" "),a("p",[t._v("1.3，父组件在使用子组件的时候设置ref，可以通过ref 属性获取子组件实例从而获取数据；")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("// 子组件\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("el-dialog "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"测试弹框啊"')]),t._v(" :visible.sync"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isUploadImgDialog"')]),t._v(" :close-on-click-modal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"600px"')]),t._v(" @close"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"handleClose"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("留言："),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("el-input v-model"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"person"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"margin-top: 10px;"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/el-input"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   \n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("slot")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"footer"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dialog-footer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("el-button @click"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"saveSub"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("提交"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/el-button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("el-button @click"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isUploadImgDialog = false"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$t")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'common.关闭'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/el-button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/span"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/el-dialog"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n props: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   content: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type: String, \n      required: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n"),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    isUploadImgDialog: false,\n    person:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\nmethods: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("handleClose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    this.isUploadImgDialog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n  "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("saveSub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    this."),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),t._v(",this.person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n// 父组件\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("el-button "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"primary"')]),t._v(" @click"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$refs")]),t._v('.dialog.isUploadImgDialog = true"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("点击"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/el-button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Dialog "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dialog"')]),t._v(" :content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bodyContent"')]),t._v(" @post"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getData"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/Dialog"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n\n getData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n")])])]),a("ul",[a("li",[a("p",[t._v("2，兄弟组件通信使用")]),t._v(" "),a("p",[t._v("2.1，有father.vue，brother1.vue，brother2.vue三个组件，需要在brother1，brother2 之间进行传值")]),t._v(" "),a("p",[t._v("2.2，建立一个eventbus 的js 文件")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" Vue from "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" default new Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])])]),a("p",[t._v("2.3，brother1.vue 引入bus.js，通过emit 自定义事件触发传递参数")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("el-button @click"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getData()"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("eventBUS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/el-button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" Bus from "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/utils/bus.js'")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("getData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Bus."),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getData'")]),t._v(", this.person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("2.4，brother2.vue 引入bus.js，通过Bus.$on 接收参数")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/span"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" Bus from "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/utils/bus.js'")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("created")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Bus."),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getData'")]),t._v(", target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n          console.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])])]),t._v(" "),a("li",[a("p",[t._v("3，祖孙后代组件通信使用")]),t._v(" "),a("p",[t._v("3.1，在祖先组件定义provide 属性，返回传递的值")]),t._v(" "),a("p",[t._v("3.2，在后代组件通过inject接收组件传递过来的值")])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v(" // App.vue\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("router-view v-if"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isRouterAlive"')]),t._v(" /"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("provide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      reload: this.reload\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n   "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      isRouterAlive: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n   methods: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("reload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      this.isRouterAlive "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("let")]),t._v(" that "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" this\n      this."),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        that.isRouterAlive "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  // 子孙组件（test.vue）\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" default "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     inject: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reload'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n     methods: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("refresh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          this.reload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);