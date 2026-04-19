import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '地狱降临',
  description: '沸腾着难以言喻体验的混沌海洋——一个原创世界观百科',
  lang: 'zh-CN',
  base: '/hell-wiki/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700;900&family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }],
  ],

  themeConfig: {
    logo: '/favicon.svg',

    nav: [
      { text: '指南', link: '/guide/' },
      { text: '势力', link: '/factions/' },
      { text: '人物', link: '/characters/' },
      { text: '技术', link: '/technology/' },
      { text: '历史', link: '/history/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '世界观概述',
          items: [
            { text: '关于这个世界', link: '/guide/' },
          ]
        },
        {
          text: '核心概念',
          items: [
            { text: '地狱', link: '/guide/hell' },
            { text: '恶魔', link: '/guide/demons' },
            { text: '王子', link: '/guide/princes' },
            { text: '猎魔人', link: '/guide/hunters' },
          ]
        },
      ],
      '/factions/': [
        {
          text: '四大聚集地',
          items: [
            { text: '势力总览', link: '/factions/' },
            { text: '长安', link: '/factions/changan' },
            { text: '赛博', link: '/factions/cyber' },
            { text: '伦底纽姆', link: '/factions/rondinium' },
            { text: '塔帕姆', link: '/factions/tapam' },
          ]
        },
        {
          text: '长安详情',
          items: [
            { text: '六司', link: '/factions/six-ministries' },
            { text: '天罡', link: '/factions/tiangang' },
            { text: '长安十剑客', link: '/factions/top-swordsmen' },
          ]
        },
      ],
      '/characters/': [
        {
          text: '人物图鉴',
          items: [
            { text: '人物索引', link: '/characters/' },
            { text: '已登场人物', link: '/characters/featured' },
          ]
        },
      ],
      '/technology/': [
        {
          text: '技术体系',
          items: [
            { text: '技术总览', link: '/technology/' },
            { text: '义体改造', link: '/technology/cybernetics' },
            { text: '圣化机械', link: '/technology/holy-mech' },
            { text: '血肉强化', link: '/technology/flesh-enhance' },
            { text: '符咒', link: '/technology/talisman' },
            { text: '丹药', link: '/technology/elixir' },
          ]
        },
      ],
      '/history/': [
        {
          text: '历史事件',
          items: [
            { text: '大事年表', link: '/history/' },
            { text: '龙怒之日', link: '/history/dragon-wrath' },
          ]
        },
      ],
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: { noResultsText: '没有找到相关结果', resetButtonTitle: '清除搜索条件', footer: { selectText: '选择', navigateText: '切换' } }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EndEntropy/hell-wiki' }
    ],

    footer: {
      message: '世界观设定 © 2026',
    },

    editLink: {
      pattern: 'https://github.com/EndEntropy/hell-wiki/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    lastUpdated: {
      text: '最后更新于',
    },
  },

  vite: {
    // 自定义 Vite 配置（如需）
  },
})
