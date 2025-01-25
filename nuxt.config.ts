export default defineNuxtConfig({
  // modulos
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  // seo
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'fade', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'author', content: 'Kalos Lazo' },
        { name: 'publisher', content: 'kaloslazo.dev' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/icon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/icon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/icon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/icon/favicon-16x16.png' },
        { rel: 'manifest', href: '/img/icon/site.webmanifest' }
      ],
      htmlAttrs: {
        lang: 'es'
      },
    },
  },
  site: {
    url: 'https://kaloslazo.dev',
    name: ''
  },
  // nitro
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  // google fonts
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
    display: 'swap',
    preload: true,
    download: true
  },
  // markdown content
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          preload: [
            'javascript',
            'bash',
            'python',
          ],
        },
        remarkPlugins: {
          'remark-emoji': {
            emoticon: true,
          },
          'remark-gfm': false,
          'rehype-external-links': {
            target: '_blank',
            rel: 'noopener noreferer',
          },
        },
        toc: {
          depth: 3,
        },
      },
    },
  },
  // tailwind
  tailwindcss: {
    cssPath: [
      '~/assets/css/tailwind.css',
      { injectPosition: "first" }
    ],
    config: {
      content: [
        'content/**/*.md',
      ]
    },
    viewer: {
      endpoint: '/_tailwind',
      exportViewer: true,
    },
    exposeConfig: false,
  },
  // routes
  routeRules: {
    '/': { prerender: true },
    '/blog': { isr: true },
    '/blog/**': { isr: true },
  },
  sourcemap: false,
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01',
})