import pkg from './package';

export default {
  mode: 'spa',
  server: {
    // port:
    host: '0.0.0.0'
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Moneyline',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/icon.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:400,700'
      },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    // color: '#40A774',
    throttle: 0,
    delay: 3000,
    name: 'chasing-dots',
    color: '#40A774',
    background: 'white',
    height: '4px'
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-range-slider',
    '~/plugins/vee-validate',
    '~/plugins/axios',
    '~/plugins/vue-noty',
    '~/plugins/form-wizard.js',
    '~/plugins/vue-modaltor',
    '~/plugins/vue-button-loader',
    {
      src: '~/plugins/localStorage.js',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://localhost:8080/api/v1'
    // baseURL: 'https://api.moneyline.ng/api/v1'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
