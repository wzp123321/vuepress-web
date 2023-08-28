// docs/.vuepress/config.js
module.exports = {
  title: "wanzp博客",
  description: "wanzp使用vuepress搭建的个人静态网站",
  markdown: {
    lineNumbers: true,
  },
  //   主题色
  theme: "reco",
  //   主题配置
  themeConfig: {
    // 标题栏
    nav: [
      { text: "主页", link: "/" },
      { text: "node", link: "/node/" },
      { text: "前端", link: "/webframe/" },
      { text: "数据库", link: "/database/" },
      { text: "android", link: "/android/" },
      { text: "面试问题", link: "/interview/" },
    ],
    // 侧边栏
    sidebar: [
      {
        title: "软件资源",
        children: ["/软件资源/软件资源"],
        initialOpenGroupIndex: 1, // 可选的, 默认值是 0
      },
    ],
  },
};
