# 模块化的相关知识

## 导出----export
```sh
    export const baseUrl = 'http://127.0.0.1'
  	export function fn1 () {
      		//do something
 	 }

    //唯一性导出，再进行导入的时候是没有大括号的
    export default function fn1 () {
          //do something
    }

```

## 导入---import（隐式导入）
```sh
  import { fn1, baseUrl } from './test1.js'

  //唯一性导入
  import fn1   from './test1.js'

  //完全导入
  import  * as example from './example.js'

  //显示导入
  <scripte type="module" src="/module.js">



```
