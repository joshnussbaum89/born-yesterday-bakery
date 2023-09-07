import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://bornyesterdaybakery.com',
  scopedStyleStrategy: 'class',
  build: {
    inlineStylesheets: 'always',
  },
})
