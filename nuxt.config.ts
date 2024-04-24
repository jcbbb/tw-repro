// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  extends: [
    '@shuriken-ui/nuxt'
  ],

  modules: ["@nuxtjs/tailwindcss"]
})