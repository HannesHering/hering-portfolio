// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content", "@nuxt/ui", "@stefanobartoletti/nuxt-social-share"],
  app: {
    head: {
      title: 'Hering - Portfolio'
    }
  }
})