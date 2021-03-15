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

主要应用为 vue、angular


## 双向数据绑定

::: details 数据绑定:
    单向绑定：把 Model 绑定到 View,当我们用 JavaScript 代码 更新 Model 时，view 就会自动更新。

    双向绑定：用户更新View, Modele 的数据也自动更新了，这个就是双向数据绑定。
:::

**<font size= 5> 1，双向数据绑定的原理？</font>**

vue 实现双向数据的绑定主要是通过数据的劫持结合发布/订阅模式的方式，通过Object.defineProperty()的set,get 方法。在数据变动的时候发布消息给订阅者触发监听。





