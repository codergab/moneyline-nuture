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
				href: 'https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400'
			}
		]
	},

	/*
   ** Customize the progress-bar color
   */
	loading: {
		color: '#fff'
	},

	/*
   ** Global CSS
   */
	css: [ '~/assets/css/main.css' ],

	/*
   ** Plugins to load before mounting the App
   */
	plugins: [],

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
