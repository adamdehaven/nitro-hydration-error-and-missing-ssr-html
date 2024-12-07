// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    preset: 'cloudflare-module', // Define here in the portal app since the core layer is deploy-agnostic
    prerender: {
      autoSubfolderIndex: false, // Set to false to match Cloudflare route matching rules: https://nuxt.com/deploy/cloudflare
    },
  },
})
