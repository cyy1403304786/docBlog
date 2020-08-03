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
            {
                title: '开发指南',
                collapsable: true, //是否展开
                children: [{title:'测试aaa', path: './guide/install/install'}]
            },
            
            //   ['./guide/install/install','介绍'],
            //   ['./guide/started/started','快速上手'],
              ['./guide/started/webhook','webhook自动部署'],
              ['./guide/started/snipt', '自定义代码片段'],
              ['./guide/started/echarts', 'echarts图表'],
              ['./guide/started/nginx', 'nginx'],
              ['./guide/started/vuex', 'vuex'],
              ['./guide/started/pm2', 'pm2的相关使用'],
              ['./guide/started/nuxt', 'nuxt的相关使用'],
              ['./guide/started/css3', 'css3的相关介绍'],
              {
                title: 'parcels技术点',
                collapsable: true, //是否展开
                children: 
                [   {title:'parcels项目说明文档', path: './parcels/function/item'},   
                    {title:'公用库使用', path: './parcels/function/submodule'},
                    {title:'前端处理国际化', path: './parcels/function/i18n'},
                    // {title:'前端工程自动化', path: './parcels/function/webAuto'},
                    // {title:'全局方法及引用', path: './parcels/function/global'},
                    {title:'前端实现页面重载不刷新', path: './parcels/function/reload'},
                ]
              }
        ],
        sidebarDepth : 2,  //侧边栏自动显示当前激活页面中标题的链接，嵌套在页面本身的链接下。默认深度是1，提取h2标题；0禁用标题链接；最大值为2，同时提取h2和h3。

      },
      serviceWorker: true
}