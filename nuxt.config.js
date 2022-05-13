import colors from 'vuetify/es5/util/colors'
import i18n from './config/i18n'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  ssr: true,

  env: {
    baseURL: process.env.BASE_URL
  },

  head: {
    // titleTemplate: '%s - app',
    title: 'Gynaecologia et perinatologia',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Časopis za ginekologiju, perinatologiju, reproduktivnu medicinu i ultrazvučnu dijagnostiku.'},
      { hid: 'keywords', name: 'keywords', content: 'Ginekologija, perinatologija, časopis' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/netlify-identity-widget.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      'nuxt-i18n',      
      {
        vueI18nLoader: true,
        defaultLocale: 'hr',
         locales: [
          {
             code: 'en',
             name: 'Eng',
             iso: 'en-US'
          },
          {
             code: 'hr',
             name: 'Hrv',
             iso: 'hr-HR'
          }
        ],
        vueI18n: i18n
      }
    ],
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    'nuxt-i18n',   
    ['nuxt-canonical', { baseUrl: 'https://gynaecolperinatol.hr/' }] 
  ],

  i18n: {
    strategy: 'prefix_except_default',
    seo: true,
    i18n: {      
      locales: [
        {
          code: 'en',
          name: 'Eng',
          iso: 'en-US'
       },
       {
          code: 'hr',
          name: 'Hrv',
          iso: 'hr-HR'
       }
      ],
      defaultLocale: 'hr',
      vueI18n: {
        fallbackLocale: 'hr',
        messages: {
          hr: {
            welcome: 'Dobrodošli'
          },
          en: {
            welcome: 'Welcome'
          }
        }
      }
    }
  },

  toast: {
    position: 'bottom-center',
    duration: 5000,
    theme: 'bubble',
    register: []
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://gynaecolperinatol.hr/',
    retry: { retries: 3 }
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: 'https://gynaecolperinatol.hr/'
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
