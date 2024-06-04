// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
 devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/')
  },
  app: {
    head: {
      title: 'D-ERP'
    }
  },
  css: [
    '~/assets/css/main.css'
  ],
  modules: [
     (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@pinia-plugin-persistedstate/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    "@nuxt/content"
  ],
  imports: {
    dirs: ['./stores']
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})

