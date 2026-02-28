import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',

  ssr: false,

  devServer: {
    port: 3001
  },

  devtools: { enabled: false },
  app: {
    head: {
      title: 'EduBattle',
      meta: [],
      link: []
    }
  },
  css: ['vuetify/styles', '~/assets/styles/app.scss'],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000'
    }
  },
  plugins: ['~/plugins/api.ts', '~/plugins/vuetify.ts'],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    plugins: [
      vuetify({
        styles: { configFile: 'assets/styles/vuetify.scss' }
      })
    ]
  },

  modules: ['@pinia/nuxt', '@nuxt/eslint']
});
