/*
 * @Author: lmingul
 * @Date: 2021-09-01 23:33:49
 * @LastEditors: lmingul
 * @LastEditTime: 2021-09-02 00:16:40
 * @FilePath: \project-test\vuepress-demo\vuepress-demo\docs\.vuepress\config.js
 * @Description: 
 */

 module.exports = {
     title:"hello Vuepress",
     description:"vuepress demo",
     themeConfig:{
         logo:"/assets/image/logo.jpg",
         nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
          ]
     }
 }