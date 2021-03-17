# vue 知识点合集
::: warning
   Vue 是一个用于构建用户界面的开源Javascript框架，也是一个创建单页面的 Web 应用框架。Vue 关注的核心是视图层，可以方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互。
:::

## 浅谈MVC 、MVVM、MVP

<font size= 5 color=red> MVC </font>

MVC 是一个编程思想，是一种设计模式。
- Model: 数据模型层，将数据发送到 View 层；
- View： 视图层，显示界面，传送指令到 Controller；
- Controller：控制层，完成业务逻辑后调用数据渲染视图；

所有的通信都是单向的


<font size= 5 color=red> MVP </font>

MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向。
- Model: 数据模型层；
- View： 视图层，显示界面；
- Presenter：控制层，完成业务逻辑后调用数据渲染视图；

各部分的通信都是双向的

View 与 Model 不发生联系，都通过 Presenter 传递。

<font size= 5 color=red> MVVM </font>

MVVM 也是一种设计思想，简称为数据驱动。
- Model: 数据模型层，负责处理业务逻辑以及和服务器端进行交互；
- View： 视图层，负责将数据模型转化为UI展示出来，可以简单的理解为HTML页面； 
- ViewModel：视图模型层，用来连接Model和View，是Model和View之间的通信桥梁；

各部分之间的通信时双向的，采用双向绑定，view的变动自动反映到 ViewModel。



## 双向数据绑定

::: details 数据绑定:
    单向绑定：把 Model 绑定到 View,当我们用 JavaScript 代码 更新 Model 时，view 就会自动更新。

    双向绑定：用户更新View, Modele 的数据也自动更新了，这个就是双向数据绑定。
:::

**<font size= 3> 双向数据绑定的原理？</font>**

vue 实现双向数据的绑定主要是通过数据的劫持结合发布/订阅模式的方式，通过Object.defineProperty()的set,get 方法。在数据变动的时候发布消息给订阅者触发监听。


## 对 SPA 的理解

SPA，简称单页面应用。主要通过页面重写当前页面来与用户交互，避免了页面之间切换打断用户体验。Vue 就是属于单页面应用。

**<font size= 3> 1，单页面与多页面的区别？</font>**

* 单页面
    * 由一个主页面和多个页面片段组成
    * 页面刷新是局部刷新
    * 难以做页面SEO，可通过 SSR 方式
    * 数据传递容易
    * 页面切换快，用户体验好
    * 首屏加载慢

* 多页面
    * 由多个主页面组成
    * 页面刷新是整页刷新
    * 容易实现 SEO
    * 切换加载资源，速度慢，用户体验差


**<font size= 3> 2，实现单页面的SEO？</font>**

SSR服务端渲染，将组件或页面通过服务器生成html，再返回给浏览器，如nuxt.js



**<font size= 3> 3，SPA 首屏加载慢问题</font>**

SPA 首屏优化的方式：
   * 通过路由懒加载，减小入口文件体积；
   * 静态资源本地缓存（后端资源返回，设置Cache-Control 响应头）；
   * UI框架按需加载；
   * 图片资源的压缩；
   * 开启GZip压缩；

## vue 组件中data 属性返回的是一个函数而不是一个对象？

**<font size= 3> 1，VUE 实例和组件定义data的 区别</font>**

vue实例的时候定义data 属性既可以是对象，也可以是函数

```sh
   const app = new Vue({
      el:"#app",
      // 对象格式
      data:{
         foo:"foo"
      },
      // 函数格式
      data(){
         return {
               foo:"foo"
         }
      }
   })
```

组件中定义data 属性只能是函数

```sh
Vue.component('component1',{
    template:`<div>组件</div>`,
    data:{
        foo:"foo"
    }
})
```

**<font size= 3> 2，VUE 组件中定义 data 属性为什么必须是函数？</font>**

组件实例对象data必须为函数，目的是为了防止多个组件实例对象之间共用一个data，产生数据污染。采用函数的形式，initData时会将其作为工厂函数都会返回全新data对象。


模仿组件构造函数，定义data属性，采用对象的形式

```sh
function Component(){
 
}
Component.prototype.data = {
	count : 0
}
```

创建两个组件实例

```sh
const componentA = new Component()
const componentB = new Component()
```

修改componentA组件data属性的值，componentB中的值也发生了改变

```sh
console.log(componentB.data.count)  // 0
componentA.data.count = 1
console.log(componentB.data.count)  // 1
```

产生上述现象的原因是因为两者共用了同一个内存地址，componentA修改的内容，同样对componentB产生了影响。

vue组件可能会有很多个实例，采用函数返回一个全新data形式，使每个实例对象的数据不会受到其他实例对象数据的污染


## vue 组件中的通信？

**<font size= 3> 1，组件间通信的分类？</font>**

* 父子组件通信
* 兄弟组件通信
* 祖孙与后代组件通信
* 非关系组件间的通信

**<font size= 3> 2，组件通信方案？</font>**

* 1，通过 props 传递；
* 2，通过 $emit 触发自定义事件；
* 3，使用 ref；
* 4，EventBus；
* 5，$parent 或$root；
* 6，attrs 与 listeners；
* 7，Provide 与 Inject
* 8，vuex;

**<font size= 3> 3，组件通信使用场景？</font>**

- 父子组件通信使用 1,2

```sh

```




