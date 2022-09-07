const less = [
  'auto-complete',
  'avatar',
  'breadcrumb',
  'button',
  'card',
  'checkbox',
  'dropdown',
  'form',
  'icon',
  'input',
  'layout',
  'menu',
  'modal',
  'pagination',
  'select',
  'table',
  'empty',
  'result',
  'page-header',
  'message',
]

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Admin Panel',
    title: 'Dashboard',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
    ]
  },

  // Customize the progress-bar color
  loading: {
    color: '#000',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    ...less.map((l) => {
      return {
        src: `ant-design-vue/lib/${l}/style`,
        lang: 'less',
      }
    }),
    {
      src: '@/assets/styles/index.less',
      lang: 'less',
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui', '@/plugins/axios', '@/plugins/utils'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org
    '@nuxtjs/google-fonts',
    // https://google-fonts.nuxtjs.org
    '@nuxtjs/google-fonts',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://www.npmjs.com/package/@nuxtjs/device
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',
  ],

  // Google Fonts https://google-fonts.nuxtjs.org/options
  googleFonts: {
    display: 'swap',
    families: {
      // https://google-fonts.nuxtjs.org/options
      Poppins: {
        wght: [400, 500, 600, 800],
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  // Axios Proxy https://axios.nuxtjs.org/options#proxy
  proxy: {
    '/api/': process.env.BASE_URL,
  },

  // Auth https://auth.nuxtjs.org/schemes/local
  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'token',
          global: true,
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30, // ttl: 2592000 same as file gesdinet_jwt_refresh_token.yaml
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          refresh: { url: '/api/auth/refresh', method: 'post' },
          user: { url: '/api/auth/user', method: 'get' },
          logout: false,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Add custom plugins or presets through the `babel` object
    // Docs: https://nuxtjs.org/api/configuration-build#babel
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },

    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,

          // Modify ant-design-vue vars
          // See https://github.com/vueComponent/ant-design-vue/blob/master/components/style/themes/default.less
          modifyVars: {
            // Colors
            // '@primary-color': '#284d7e',

            // Base Scaffolding Variables
            '@font-family':
              "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",

            // Font size (same tailwind)
            '@font-size-base': '14px',
            '@font-size-lg': '@font-size-base + 2px',
            '@font-size-sm': '12px',
            '@font-size-xs': '10px',

            // Layout
            '@layout-header-height': '64px',
            '@layout-header-padding': '0',

            // Breadcrumb
            '@breadcrumb-base-color': '#d1d5db',
            '@breadcrumb-font-size': '@font-size-sm',

            // PageHeader
            '@page-header-padding': '0',

            // Media queries breakpoints
            // Extra small screen / phone 5
            '@screen-xxs': '360px',
            '@screen-xxs-min': '@screen-xxs',

            // Extra small screen / phone 6/7/8
            '@screen-xs': '480px',
            '@screen-xs-min': '@screen-xs',

            // Small screen / tablet
            '@screen-sm': '576px',
            '@screen-sm-min': '@screen-sm',

            // Medium screen / desktop
            '@screen-md': '768px',
            '@screen-md-min': '@screen-md',

            // Large screen / wide desktop
            '@screen-lg': '992px',
            '@screen-lg-min': '@screen-lg',

            // Extra large screen / full hd
            '@screen-xl': '1200px',
            '@screen-xl-min': '@screen-xl',

            // Extra extra large screen / large desktop
            '@screen-xxl': '1600px',
            '@screen-xxl-min': '@screen-xxl',

            // provide a maximum
            '@screen-xxs-max': '(@screen-xs-min - 1px)',
            '@screen-xs-max': '(@screen-sm-min - 1px)',
            '@screen-sm-max': '(@screen-md-min - 1px)',
            '@screen-md-max': '(@screen-lg-min - 1px)',
            '@screen-lg-max': '(@screen-xl-min - 1px)',
            '@screen-xl-max': '(@screen-xxl-min - 1px)',
          },
        },
      },
    },
  },
}
