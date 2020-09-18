# toppgo 项目说明文档

## 项目介绍
toppgo 是一个提供给海外华人，留学生以及国内外采购商等仓库增值和国际转运服务的平台。其中包括首页网站(采用nuxt 框架搭建)，后台管理平台(采用vue框架)，手机app(采用uniapp技术搭建)等。

## 前端所用技术框架选型
该项目后台管理系统采用 vue 搭配 vue-cli3.0 脚手架，配合vuex 状态管理器 结合webpack 打包工具，采用 scss 扩展语言构造而成。
该项目前台展示页面采用 nuxt 技术搭建，配合 vue-i18n 进行相关国际化操作，支持三国语言(中文，韩文，英文)。


## 项目结构
参照 parcels 结构构建而成。

## toppgo 重要项目点
### nuxt 中关于引入svg 图标
- 项目全局安装svg-sprite-loader：
```sh
    npm i svg-sprite-loader --save-dev
```
- 建立 svg 文件目录 (assets/icons/svg/exapmle.svg) ----如下图:

![solar](../../.vuepress/public/img/svg.png)

- 在components/目录下新建文件svgIcon.vue
```sh
      <template>
      <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
      </svg>
    </template>

    <script>
    export default {
      name: 'SvgIcon',
      props: {
        iconClass: {
          type: String,
          required: true,
          default: ''
        },
        className: {
          type: String,
          default: ''
        }
      },
      computed: {
        iconName() {
          return `#icon-${this.iconClass}`
        },
        svgClass() {
          if (this.className) {
            return 'svg-icon ' + this.className
          } else {
            return 'svg-icon'
          }
        }
      }
    }
    </script>

    <style scoped>
    .svg-icon {
      width: 156px;  //自定义宽高
      height: 56px;
      fill: currentColor;
      overflow: hidden;
    }
    </style>
```
- 在plugins/目录下新建文件icons.js
```sh
  import Vue from 'vue'
  import SvgIcon from '../components/svgIcon'// svg组件


  Vue.component('svg-icon', SvgIcon)

  const requireAll = requireContext => requireContext.keys().map(requireContext)

  //require.context 用法参照parcels 技术点中的 前端自动化工程

  const req = require.context('../assets/icons/svg', false, /\.svg$/)
  requireAll(req)

```
- 修改nuxt.config.js文件
```sh
const path = require('path')  //引入path 路径
module.exports = {
  // ...
  plugins: [
    // ...
    { src: '@/plugins/icons', ssr: true }
  ]
  // ...
  build: {
    // ...
    extend (config, ctx) {
      // ...
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [path.resolve(__dirname, 'assets/icons/svg')]
      // Includes /icons/svg for svg-sprite-loader
      config.module.rules.push({
        test: /\.svg$/,
        include: [path.resolve(__dirname, 'assets/icons/svg')],
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]',
        },
      }) 
    }
    // ...
  }
  // ...
}

```
- vue组件中使用:
```sh
  <svg-icon icon-class="article" /> //其中 article 是图标文件的文件名（如本项目中的 toppgo）
```

### nuxt 中全局动画过渡效果
::: warning
  Nuxt.js 默认使用的过渡效果名称为 page. 如果想让每一个页面的切换都有淡出 (fade) 效果，我们需要创建一个所有路由共用的 CSS 文件。所以我们可以在 assets/scss 目录下创建全局样式表: reset.scss,
  并添加如下样式即可:
:::

```sh
  /*************全局动画过渡*************/
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.2s;
  }
  .page-enter,
  .page-leave-active {
    opacity: 0;
  }
```


## toppgo 项目部署说明
- 测试环境部署(192.168.8.167):
```sh
  cd /toppgo 
  sh 01-nuxt-web.sh  //更新nuxt 系统页面
  sh 02-vue-admin.sh //更新个人中心后台系统
```
- 线上环境部署(国内服务器 139.224.190.136  美国服务器 47.254.25.116  欧洲服务器  47.254.158.111 )

前端更新线上:

   1,toppgo前台页面 

     ---------先本地打包nuxt 项目(npm run build)

     ---------打包完成后复制(.nuxt nuxt.config.js package-lock.json package.json static )到对应项目目录

     ---------pm2 restart mynuxt (在对应服务器上执行)

   2,toppgo个人中心页面

     ---------本地打包(npm run build)

     ---------将本地生成的dist 文件 丢到对应线上前端项目目录

### 关于nuxt 部署脚本
```sh
  #!/bin/bash
  keyword=$1
  # 打包
  if [ -z $1 ] || [[ "nuxt-web" =~ $keyword ]];then
    echo 更新 nuxt-web.........................................................
    cd /toppgo/nuxt-toppgo-html
    git reset --hard
    git pull
    cnpm i
    echo -e '\n\n'
      echo 开始打包nuxt-web...
      cd /toppgo/nuxt-toppgo-html
      rm -rf .nuxt
      cnpm run build
      pm2 restart nuxt-toppgo
  fi
  # 运行
  echo 打包完成...
```


### vue 中关于引入svg 图标

- 安装svg-sprite-loader：npm i svg-sprite-loader --save-dev
- 建立 svg 文件目录 (assets/icons/svg/exapmle.svg) 
- 在src/components目录下新建文件svgIcon.vue
```sh
    <template>
      <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
          <use :xlink:href="iconName"/>
      </svg>
  </template>

  <script>
  export default {
      name: 'svgIcon',
      props: {
          iconClass: {
              type: String,
              required: true
          },
          className: {
              type: String,
              default: ''
          }
      },
      computed: {
          iconName() {
              return `#icon-${this.iconClass}`
          },
          svgClass() {
              if (this.className) {
                  return 'svg-icon ' + this.className
              } else {
                  return 'svg-icon'
              }
          }
      }
  }
  </script>

  <style scoped>
  .svg-icon {
      width: 140px;
      height: 56px;
      fill: currentColor;
      overflow: hidden;
  }
  </style>
```

- 在src/icons目录下新建文件index.js
```sh
  import Vue from 'vue'
  import SvgIcon from '@/components/svgIcon'// svg组件

  Vue.component('svg-icon', SvgIcon)
  const req = require.context('./svg', false, /\.svg$/)
  const requireAll = requireContext => requireContext.keys().map(requireContext)
  requireAll(req)

```

- 在src/main.js文件中引入
```sh
  import './icons'
```

- 修改webpack 配置 (vue.config.js)
```sh
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
```

- 在vue组件中使用

```sh
  <svg-icon icon-class="toppgo" />
```