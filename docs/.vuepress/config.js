import { recoTheme } from 'vuepress-theme-reco'
export default {
  title: "mzq's docs",
  description: "mzq's docs",
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: "mzq's docs",
        items: [
          { text: '我的博客', link: 'https://blog.mzqmountain.xyz' },
          { text: '我的主页', link: 'https://mzqmountain.xyz' },
          { text: 'Github', link: 'https://github.com/mzqmountainn' }
        ]
      }
    ],
    sidebar: [
      {
        title: '首页',
        path: '/',
        collapsable: false, // 不折叠
        children: [{ title: 'Hi there~😘', path: '/' }]
      },
      {
        title: '元件',
        path: '/component/index',
        collapsable: false, // 不折叠
        children: [{ title: 'test', path: '/component/test' }]
      }
    ]
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  // 路径名为 "/<REPO>/"
  base: '/docs/'
  //...
}
