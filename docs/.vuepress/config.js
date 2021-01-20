module.exports = {
    base: "/",   //网站用来部署的基准 URL
    title: '个人博客', 
    description: 'Just playing around',
  
    head: [
        ['link', { rel: 'icon', href: '/img/test.ico' }],
    ],
    theme: '@vuepress/blog',
    themeConfig : {
        sidebar: 'auto',
        lastUpdated: '上次更新',
        lastUpdated: true,
        nav : [
            {text: 'home',  link: '/',},
            { text: '接口定义',  link: 'https://www.baidu.com', target:'_self', rel:''},
            { text: '接口字段定义', link: 'https://www.baidu.com', target:'_self', rel:'' },
            { text: '附录：错误码', link: 'https://www.baidu.com', target:'_self', rel:'' }
        ],
        sidebar: [
              ['./guide/started/webhook','webhook自动部署'],
              ['./guide/started/snipt', '自定义代码片段'],
              ['./guide/started/echarts', 'echarts图表'],
              ['./guide/started/nginx', 'nginx'],
              ['./guide/started/pm2', 'pm2的相关使用'],
              ['./guide/started/nuxt', 'nuxt的相关使用'],
              ['./guide/started/css3', 'css3的相关介绍'],
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