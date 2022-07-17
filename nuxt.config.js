export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ants_client',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/scss/style.scss'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  styleResources: {
    scss: [
      '@assets/scss/variables.scss'
    ]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', 'cookie-universal-nuxt', '@nuxtjs/axios', '@nuxt/image', '@nuxtjs/google-fonts'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'localhost:5000',
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru'
    }
  },

  pageTransition: {
    name: 'page',
    mode: 'out-in',
    appear: true
  },

  loading: {
    failedColor: '#F95738',
    color: '#0EA976',
    height: '5px',
    throttle: 0
  },

  googleFonts: {
    families: {
      "Libre+Baskerville": true,
      "Comfortaa": true
    }
  }
}
