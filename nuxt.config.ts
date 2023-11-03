// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  css: ['~/assets/css/tailwind.scss'],
  modules: [
    '@pinia/nuxt',
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
  ],
  auth: {
    globalAppMiddleware: true,
  }
})
