# 数组的相关方法


- Array.Of() 创建数组

```sh
    //通过es6 中 的 Array.of() 方法创建一个新的数组
    let item1 =  Array.of(1,2)
    console.log(item1)
    //调用Array 构造函数创造一个数组对象
    let item2 = new Array(2)
    console.log(item2)
    //通过数组字面量的方法创建一个数组对象
    let item3 = [1,2]
    console.log(item3)
```
- Array.from() 将类数组对象转换为数组

::: warning
  类数组对象: 可以通过索引访问元素，并且拥有length 属性；但是没有数组的其他方法，如:push  forEach  indexOf 等。
:::

```sh
  //创建一个 类数组对象
   let obj = {
      0: 'cyy',
      1: 24,
      length: 2
    }

  //通过es5 中的 slice 方法

  console.log(Array.prototype.slice.call(obj))

  //通过es6 中的 Array.from() 方法

  console.log(Array.from(obj))
```

- find() 搜索数组中指定的值  findIndex()搜索数组中指定元素的索引值

```sh
      //根据某个条件进行查找匹配的元素，一旦返回为ture 就立即停止执行(找到符合标准的第一个元素)
      let arr = [3,4,5,6]
       console.log( arr.find(n => n > 5))
      //同理，找出对应的索引
      let arr = [3,4,5,6]
       console.log( arr.findIndex(n => n > 5))

      // 如果要找出对应的跟某个值匹配的元素，则使用 indexOf() 方法
          let arr = [3,4,5,6]
          // 返回元素在数组中的对应位置，如果没有查询到则返回为-1
          console.log(arr.indexOf(5))
     


```

- concat() 用于连接两个或多个数组（如果传空，则复制数组）

```sh

    // 克隆数组
    // 方法一(数组的 concat 方法)
         let colors = ['red','blue','black']
      // let cloneArrs = colors.concat()
    // 方法二(对象展开运算符)
         let [...cloneArrs] = colors
        console.log(cloneArrs)


```
