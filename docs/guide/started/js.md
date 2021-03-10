# js 知识点合集
::: warning
   JavaScript 是属于 HTML 和 Web 的编程语言。有函数优先的轻量级，解释型或即时编译型，常作为开发Web 页面的脚本语言。
:::

## 数据类型

* String：字符串类型
* Boolean：布尔类型，true or false
* Number：线性的事物，大小和次序分明
* Undefined：代表一切未知的事物（声明对象未定义）
* Null：空对象指针
* Symbol：Symbol 类型的对象永远不相等，用于解决属性名冲突（ES6新增）

以上属于基本数据类型，JS引用数据类型（复杂数据类型）有object,包括：
* Object  
* Array
* function
* Date

**<font size= 5> 1，如何判断数据类型？</font>**
* <font size= 5 color=red> typeof </font> 操作符(返回的类型都是字符串形式，并且对于引用数据类型除了function 返回 function 类型外，其他均返回 object。不适宜判断复杂数据类型)

```sh
    console.log(typeof(NAN))-----number
    console.log(typeof(null))-----object
```

* <font size= 5 color=red> instanceof </font> 用于判断一个变量是否为某个对象的实例，会返回ture 或 false

```sh

     let arr = []
     console.log(arr instanceof Array) // true

```

* <font size= 5 color=red> constructor </font>(较少应用)

* <font size= 5 color=red> Object.prototype.toString.call </font>(强烈推荐)

```sh

    console.log(Object.prototype.toString.call('')) ;   // [object String]
    console.log(Object.prototype.toString.call(1)) ;    // [object Number]
    console.log(Object.prototype.toString.call(true)) ; // [object Boolean]
    console.log(Object.prototype.toString.call(Symbol())); //[object Symbol]
    console.log(Object.prototype.toString.call(undefined)) ; // [object Undefined]
    console.log(Object.prototype.toString.call(null)) ; // [object Null]
    console.log(Object.prototype.toString.call(new Function())) ; // [object Function]
    console.log(Object.prototype.toString.call(new Date())) ; // [object Date]
    console.log(Object.prototype.toString.call([])) ; // [object Array]
    console.log(Object.prototype.toString.call(new RegExp())) ; // [object RegExp]
    console.log(Object.prototype.toString.call(new Error())) ; // [object Error]
    console.log(Object.prototype.toString.call(document)) ; // [object HTMLDocument]
    console.log(Object.prototype.toString.call(window)) ; //[object global] window 是全局对象 global 的引用

```

**<font size= 5> 2，堆和栈</font>**
