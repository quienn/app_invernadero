export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["konsta"],
  },
  modules: ["nuxt-scheduler"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
