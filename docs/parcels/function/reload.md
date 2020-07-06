# 前端实现页面重载但不刷新功能
这里就需要引入一个 provide/inject 功能: 在父组件中通过provider来提供变量，然后在子组件中通过inject来 深层次 注入变量。（无论目标组件里父组件有多少间隔）

app.vue(父页面)

```sh
  <router-view v-if="isRouterAlive" ></router-view>
```

```sh
     export default {
          name: '',
          components: {
          },
          props: {},
          provide() {
            return{
              reload: this.reload
            }
          },
          data () {
            return {
              isRouterAlive:true  
            }
          },
          computed: {},
          created () {
          },
          mounted () {},
          methods: {
            reload() {
              this.isRouterAlive = false
              let that = this
              this.$nextTick(() => {
                that.isRouterAlive = true
              })
            }
          }
        }
```

vue页面中(子页面)

```sh
      export default {
        inject:['reload'],
        name: '',
        components: {
        },
        props: {},
        data(){
            return{
              username:""
            }
        },
    }
```
然后就可以在方法中直接调用  this.reload() 了。