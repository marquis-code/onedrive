export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  server: {
    port: 3000,
    host: "0.0.0.0",
    timing: false,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "OneDrive",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Securely save and share what’s important with OneDrive",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.css",
      },
    ],
    script: [
      {
        src: "https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.umd.js",
      },
    ],
  },
  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/axios",
    "~/plugins/bootstrap-vue.client",
    { src: "~/plugins/toastr.js", mode: "client" },
  ],
  bootstrapVue: {
    icons: true,
    bootstrapCSS: true, // here you can disable automatic bootstrapCSS in case you are loading it yourself using sass
    bootstrapVueCSS: true, // CSS that is specific to bootstrapVue components can also be disabled. That way you won't load css for modules that you don't use
    componentPlugins: [], // Here you can specify which components you want to load and use
    directivePlugins: [], // Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    [
      "nuxt-sweetalert2",
      {
        confirmButtonColor: "#FFFFFF",
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  pwa: {
    meta: {
      title: "OneDrive",
      author: "Marquis",
    },
    manifest: {
      name: "Securely save and share what’s important with OneDrive",
      short_name: "OneDrive",
      lang: "en",
      theme_color: "#4169E1",
      background_color: "#4169E1",
      orientation: "portrait",
      display: "standalone",
    },
  },
  generate: {
    fallback: true,
  },
};
