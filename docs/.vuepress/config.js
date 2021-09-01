/*
 * @Author: lmingul
 * @Date: 2021-09-01 23:33:49
 * @LastEditors: lmingul
 * @LastEditTime: 2021-09-02 00:44:32
 * @FilePath: \project-test\vuepress-demo\vuepress-demo\docs\.vuepress\config.js
 * @Description: 
 */

 module.exports = {
     title:"hello Vuepress",
     description:"vuepress demo",
     themeConfig:{
         logo:"/assets/image/logo.jpg",
         nav: [
            { text: '首页', link: '/' },
            { 
                text: '前端', 
                ariaLabel:"前沿技术",
                items:[
                    {text:"Vue",link: '/guide/'},
                    {text:"React",link: '/guide/'}
                ]
                },
            { text: '指南', link: '/guide/' },
            { text: '扩展', link: 'https://google.com' },
            { text: '技术栈', link: '' },
            { text: '后端', link: '' },
          ]
     }
 }