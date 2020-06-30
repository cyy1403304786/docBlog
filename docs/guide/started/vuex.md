# vuex 是什么?
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式(官方解释)。
什么是状态管理模式?打个比方，vue中组件通过data 取用数据，但是如果多个组件同时需要用到这个数据，通过组件传值的方式来同步data 数据，会造成项目繁琐冗余。为此，vue 提供了一个统一管理工具---vuex。在vuex 中定义的值整个vue组件中都可以使用。
# 核心内容
##  state
:::  warning
 通过一个对象定义一些常量数据，在vue组件中通过计算属性读取这些状态值，每当
 vuex 中state 值发生变化的时候，都会重新请求计算属性，并触发更新关联的DOM
:::
 在vuex中定义 state
```sh
  const state = {
    searchForm: {
      available: null,
      pagingDto:{
          pageNo: 1,
          pageSize: 10,
          pageTotal: 0
      }
    },
    testArr:[]
}
```
  在vue 组件中使用vuex 
```sh
  //vue组件中引用state 数据应在计算属性中(此处通过mapState构造函数统一读取数据)
  computed: {
     ...mapState({
      searchForm: state => state.wechatInfo.searchForm,
    })
},
```

## action
:::  warning
 主要用于处理一些异步操作，项目中我们主要通过actions 结合 es7中的 async 函数配合使用，action 提交的是mutation,
 改变数据用mutation。action 通过commit 方法提交mutation 不直接变更状态。
:::

在vuex 中定义 action
```sh
  const actions ={
    //actions 调用的第一个参数是 store 实例,里面有state,commit,dispatch方法
    async warnDefineListA({ commit, state, dispatch}, params) {
      let res = await warnDefineList(state.searchForm);
      if (res.flag) {
        commit('warnDefineListM', res);
      }
    },
    ...
  }
```
在vue组件中使用
```sh
  ...mapActions("wechatInfo", ["warnDefineListA","servicesListA","servicesDelA","servicesSaveA"]),
```
## Getter
有时候我们需要对列表的数据进行过滤，这时候就用到getter（可以认为是 store 的计算属性）。

在vuex 中定义 getters
```sh
  const getters = {
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length
      }
  }
  
```
在vue组件中使用
```sh
...mapGetters("wechatInfo", ["warnDefineListA","servicesListA","servicesDelA","servicesSaveA"]),

```

## Mutation
更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 类似于事件
在vuex 中定义 mutation
```sh
  const mutation = {
      warnDefineListM(state, data) {
        state.serviceData = data.rows
        state.searchForm.pagingDto.pageTotal = data.total
    },
    ...
  }
  
```

