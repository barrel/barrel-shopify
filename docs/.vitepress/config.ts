import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Shopify Vite Plugin',
  description: 'Vite integration for Shopify themes',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          {
            text: 'Gettin Started',
            link: '/guide/'
          },
          {
            text: 'Example Projects',
            link: '/guide/example-projects'
          },
          {
            text: 'Configuration Reference',
            link: '/guide/configuration'
          }
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/barrel/shopify-vite/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/barrel/shopify-vite' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright (c) Barrel'
    }
  }
})
