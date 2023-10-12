// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "~/assets/main.scss", 
    "~/assets/css/tailwind.css"
  ],

  tailwindcss: {
    configPath: './tailwind.config.js',
},

  modules: [ 
      '@nuxtjs/tailwindcss',
  ],
})
