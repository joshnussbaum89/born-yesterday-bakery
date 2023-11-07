import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://bornyesterdaybakery.com',
  scopedStyleStrategy: 'class',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://bornyesterdaybakery.com/success/',
      lastmod: new Date(),
    }),
  ],
})
