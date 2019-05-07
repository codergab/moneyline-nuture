import pkg from './package';

export default {
	mode: 'spa',

	/*
   ** Headers of the page
   */
	head: {
		title: 'Moneyline',
		meta: [
			{
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
		link: [
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/icon.png'
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,600'
			},
			{
				rel: 'stylesheet',
				href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
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
	css: [ '~/assets/css/main.css' ],

	/*
   ** Plugins to load before mounting the App
   */
	plugins: [
		'~/plugins/form-wizard.js',
		'~/plugins/vue-range-slider',
		'~/plugins/vee-validate',
		'~/plugins/axios',
		'~/plugins/vue-noty',
		// '~/plugins/vue-modal',
		'~/plugins/vue-modaltor',
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
		// baseURL: 'http://localhost:8080/api/v1'
		baseURL: 'http://192.168.0.104:8080/api/v1'
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
