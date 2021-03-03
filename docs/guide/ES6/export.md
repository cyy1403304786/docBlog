## 介绍
::: warning 
  一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export/export default关键字输出该变量。顾名思义，即模块的导出功能
:::

export命令用于规定模块的对外接口。

export default命令，为模块指定默认输出。

## 相同点
- export 与 export default 均可用于导出常量、函数、文件、模块等。
- 都可以使用import 导入。

## 不同点

- export可以有多个，export default 只能有一个。
```sh
  // teset.js
  export const name = 'haha'
  export const age = '25'
```
- 通过 export 方式导出，导入时需要加 {}， export default则不需要。
- 使用export default 导出时，导入只需要知道文件名，但是使用 export 导出时，必须知道导出的变量，函数，导入时变量需要一致。
```sh
  import {name}  from 'test.js'
```


