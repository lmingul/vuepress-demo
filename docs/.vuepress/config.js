/*
 * @Author: lmingul
 * @Date: 2021-09-01 23:33:49
 * @LastEditors: lmingul
 * @LastEditTime: 2021-09-12 23:02:02
 * @FilePath: \project-test\vuepress-demo\vuepress-demo\docs\.vuepress\config.js
 * @Description: 
 */

 const description = "vuepress demo"
 const title = "vuepress项目知识库"
 const path = require("path")



 module.exports = {
     title:title,
     description:description,
    //  theme: '@vuepress/vue',
    // 修改webpack 的内部配置
    configureWebpack : {
        resolve:{
            alias:{
                "":""
            }
        }

    },
    // 提供多语言支持的语言配置
    locales:{
        "/":{
            lang:"zh-CN",
            title:"前端开发知识库",
            description:"项目记录"
        }
    },



    head: [
        ['link', {
          rel: 'icon',
          href: `/favicon.ico`
        }]
      ],
      base:"/blog/",
      serviceWorker:true,
     themeConfig:{
         logo:"/assets/image/logo.jpg",
         docsDir: 'docs',
         smoothScroll:true,
         editLinks:true,
         editLinkText:"帮助我们改善此页面",
         // 导航栏配置
         nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            { 
                text: '前端', 
                items:[
                    {text:"Vue",link: '/frontend/vue/'},
                    {text:"React",link: '/frontend/react/'}
                ]
            },
            {
                text:'后端',
                items:[
                    {text:"JAVA",link: '/frontend/vue/'},
                    {text:"Pathon",link: '/frontend/react/'}
                ]
            },
            {
                text:"问题记录",
                link: '/problemLog/'
            },
            { text: '技术指引', link: '/techguide/' },
            {
                text:"网站扩展",
                ariaLabel:"xxx",
                items:[
                    {text:"vuepress",link:"https://vuepress.vuejs.org/zh/"},
                    {text:"GitHub",link:"https://github.com/"},
                    {text:"Vue",link:"https://vuejs.org/"}
                ],
            },
          ],
         // 侧边栏配置 
         sidebar:{
            '/techguide/' :[
                {
                    title:'技术指引',
                    collapsable:false,
                    children:[
                        '/',
                        'js',
                    ]
                   
                }
            ],
             '/guild/': [
                 {
                     title:"指南",
                     collapsable:false,
                     children:[
                         '/',
                         'index',
                         'JS'
                     ]
                 }
             ],
           
             '/frontend/vue/' :[
                 {
                     title:'Vue',
                     collapsable:false,
                     children:[
                         '',
                         'basic',
                     ]
                 }
             ]

         },
     }
 }