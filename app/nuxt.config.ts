// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/main.css"],
  pages: true,
  app: {
    head: {
      title: "SITHS Book Review",
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "https://aezh-frazzeto-thingy-backend.onrender.com",
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit", "reicon-vue"],
    },
  },
});
