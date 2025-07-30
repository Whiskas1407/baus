import tailwindcss from "@tailwindcss/vite";
import tailwindConfig from './tailwind.config.js'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  css: ['@/assets/css/main.css', '@/assets/css/stylesheet.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})