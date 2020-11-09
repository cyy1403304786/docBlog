# 解构赋值

## 基本用法

### 对象解构

让我们一起看看对象的解构赋值吧:
```sh
    let obj = {
      type: 'iphone',
      name: 'cyy',
      start: {
        sex: '女',
        age: 24
      },
      end: {
        job:'web',
        school:'wz'
      }
    }
    let {type, name, start: {sex,age},end: {job,school}} = obj

    // console.log(type)
    // console.log(name)
    // console.log(sex)
    // console.log(job)


```

### 数组解构

接下来让我们再一起看看数组的解构
```sh

    let colors = ['red', 'blue', 'black']
    let [firstColor, secondColor] = colors
    // console.log(firstColor)

    let [a, b, c] = [1, 2, 3] // a=1, b=2, c=3
    let [d, [e], f] = [1, [2], 3] // 嵌套数组解构 d=1, e=2, f=3
    let [g, ...h] = [1, 2, 3] // 数组拆分 g=1, h=[2, 3]
    let [i,,j] = [1, 2, 3] // 不连续解构 i=1, j=3
    let [k,l] = [1, 2, 3] // 不完全解构 k=1, l=2

```

## 使用场景

### 变量赋值
```sh

    const {userName, password} = {userName: 'aaaa', password: 123456}
    console.log(userName)
    console.log(password)
    const [userName1, password1] = ['aaaa', 123456]
    console.log(userName1)
    console.log(password1)
    
```