module.exports = {
    base: "/",   //网站用来部署的基准 URL
    title: "学习笔记",  //网站标题
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/img/test.ico' }],
    ], //头部标签
    theme: '@vuepress/blog',
    themeConfig : {
        sidebar: 'auto',
        lastUpdated: '上次更新',
        lastUpdated: true,
        nav : [
            {text: 'home',  link: '/',},
            { text: '个人网站',  link: 'http://www.yysmile.cn', target:'_blank', rel:''},
            { text: 'github 地址', link: 'https://github.com/cyy1403304786', target:'_blank', rel:'' },
        ],
        sidebar: [
              {
                title: '工具类', 
                collapsable: true, //是否展开
                children: 
                    [ 
                      {title:'css 重要知识点', path: './guide/started/css'},
                      {title:'js 重要知识点', path: './guide/started/js'},
                      {title:'vue 重要知识点', path: './guide/started/vue'},
                      {title:'http 重要知识点', path: './guide/started/http'},
                      {title:'webhook自动部署', path: './guide/started/webhook'},
                      {title:'自定义代码片段', path: './guide/started/snipt'},
                      {title:'echarts图表', path: './guide/started/echarts'},
                      {title:'nginx', path: './guide/started/nginx'} ,
                      {title:'pm2的相关使用', path: './guide/started/pm2'},
                      {title:'nuxt的相关使用', path: './guide/started/nuxt'},
                      {title:'css3的相关介绍', path: './guide/started/css3'},
                    ]
              },
              {
                title: 'ES6', 
                collapsable: true, //是否展开
                children: 
                    [   
                      {title:'export 和 export default 的区别', path: './guide/ES6/export'},
                    ]
              },
              {
                title: 'parcels技术点',
                collapsable: true, //是否展开
                children: 
                [   {title:'parcels项目说明文档', path: './parcels/function/item'},      
                ]
              },
              {
                title: 'toppgo技术点', 
                collapsable: true, //是否展开
                children: 
                    [   
                      {title:'toppgo 项目说明文档', path: './toppgo/produce/introduce'},
                      {title:'toppgo APP项目说明文档', path: './toppgo/produce/introduceApp'} 
                    ]
              },
              {
                title: '17feia技术点', 
                collapsable: true, //是否展开
                children:
                  [   
                    {title:'17fea项目说明文档', path: './17feia/produce'},   
                  ]
              },
              {
                title: 'balidrop技术点', 
                collapsable: true, //是否展开
                children:
                  [   
                    {title:'balidrop项目说明文档', path: './balidrop/produce'},   
                  ]
              },
              {
                title: 'elementui 相关功能点',
                collapsable: true, //是否展开
                children: 
                [   {title:'el-popover 点击内容隐藏弹框', path: './elementui/function/popover'},   
                    {title:'form 表单', path: './elementui/function/form'},
                    {title:'el-tooltip', path: './elementui/function/tooltip'},
                    {title:'tree 树组件的相关应用', path: './elementui/function/tree'},
                    {title:'elementui表格合并的方法', path: './elementui/function/table'},
                ]
              },
              {
                title: 'es6',
                collapsable: true, //是否展开
                children: 
                [   
                  {title:'es6数组的相关方法', path: './es6/arrayFuc'},   
                  {title:'es6中关于map集合和set集合', path: './es6/map'},
                  {title:'es6中的解构赋值', path: './es6/destructuring'},
                  {title:'es6中的模块化', path: './es6/modules'},
                  {title:'es6中的promise', path: './es6/promise'},
                  
                ]
              },
              {
                title: '前端性能优化',
                collapsable: true, //是否展开
                children: 
                [   
                  {title:'路由懒加载', path: './performance/route'},   
                ]
              },
              {
                title: 'vue3.0学习',
                collapsable: true, //是否展开
                children: 
                [   
                  {title:'vue3.0 项目搭建', path: './vue3.0/start'},   
                ]
              },
        ],
        sidebarDepth : 2,  //侧边栏自动显示当前激活页面中标题的链接，嵌套在页面本身的链接下。默认深度是1，提取h2标题；0禁用标题链接；最大值为2，同时提取h2和h3。

    },
    serviceWorker: true
}