/*
 * @Author: lmingul
 * @Date: 2021-09-01 23:33:49
 * @LastEditors: lmingul
 * @LastEditTime: 2021-09-05 15:40:54
 * @FilePath: \project-test\vuepress-demo\vuepress-demo\docs\.vuepress\config.js
 * @Description: 
 */

 module.exports = {
     title:"hello Vuepress",
     description:"vuepress demo",
     themeConfig:{
         logo:"/assets/image/logo.jpg",
         // 导航栏配置
         nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            { 
                text: '前端技术', 
                ariaLabel:"前沿技术",
                items:[
                    {text:"Vue",link: '/guide/'},
                    {text:"React",link: '/guide/'}
                ]
            },
            {
                text:'后端技术',
                ariaLabel:"前沿技术",
                items:[
                    {text:"JAVA",link: '/guide/'},
                    {text:"Pathon",link: '/guide/'}
                ]
            },
            {
                text:"问题记录",
                link: '/guide/' 
            },
            { text: '技术指引', link: '' },
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
         sidebar:[

         ],
          
     }
 }