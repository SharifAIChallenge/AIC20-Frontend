import colors from "vuetify/es5/util/colors";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#FF5722",
    height: "3px"
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/fonts/fonts.scss", "@/assets/style.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/i18n.js", "~/plugins/axios.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "@nuxtjs/toast"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    browserBaseURL: "https://aichallenge.sharif.edu/api",
    // baseURL: "https://aichallenge.sharif.edu/api",
    baseURL: "http://172.17.0.1:8000/api"
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    defaultAssets: {
      font: false
    },
    treeShake: true,
    rtl: true,
    theme: {
      options: {
        customProperties: true
      },
      dark: true,
      themes: {
        dark: {
          primary: colors.deepOrange.base,
          accent: colors.pink.base,
          secondary: colors.amber.darken3,
          info: colors.blue.base,
          warning: colors.amber.base,
          error: colors.red.accent3,
          success: colors.green.accent4,
          bg: "#160031"
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
    }
  },
  router: {
    middleware: ["auth"]
  },
  auth: {
    redirect: {
      home: "/dashboard"
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: "/accounts/login", method: "post", propertyName: "token" },
          logout: { url: "/accounts/logout", method: "post" },
          user: { url: "/accounts/profile", method: "get", propertyName: "user" }
        },
        tokenRequired: true,
        tokenType: "token"
      }
    },
    resetOnError: true
  },
  toast: {
    position: "bottom-center",
    theme: "bubble",
    duration: 4000,
    keepOnHover: true,
    className: ["v-application", "v-application--is-rtl"]
  }
};
