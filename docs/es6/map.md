# es6 中的map 集合


# es6 中的set 集合

::: warning
 ECMAScript 6 中的 Set 类型是一种有序列表，其中包含一些相互独立的非重复值，通过 Set 集合可以快速访问其中的数据
:::

- 通过set 集合 进行数组的去重操作

```sh
    let arr = [1,2,3,4,4]
    // new Set() 构造函数创建一个 set 集合，里面的参数可以是一个数组
    const set = new Set(arr);
    // es6 中的 Array.from() 方法可以将类数组对象转换为数组
    console.log(Array.from(set))
```

- 通过set 集合 创建元素，获取集合中的长度
```sh
  let set = new Set()
  set.add(1)  //向set 集合中添加元素
  console.log(set.size) //获取集合的长度
```

