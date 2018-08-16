module.exports = {
	/*
	 ** Headers of the page999666
	 */
	head: {
		title: 'ubeejoy',
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Nuxt.js project'
			}
		],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		},{
			rel: 'stylesheet',
			href: '//at.alicdn.com/t/font_783323_rzhwh8rt0m.css'
		}],
		script: [{
			src: 'https://connect.facebook.net/en_US/sdk.js'
		},{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
		},{
			src: '//at.alicdn.com/t/font_783323_rzhwh8rt0m.js'
		},{
			src:"https://apis.google.com/js/api:client.js"
		}]
	},
	plugins: [
		{
			src: '~/plugins/swiper.js',
			ssr: false
		},
		{
			src: '~/plugins/i18n.js'
		},
		{
			src: '~/plugins/htRem.js',
			ssr: false
		}
	],
	css: [
		'~static/base.css',
		'swiper/dist/css/swiper.css'
	],

	router: {
		middleware: ['i18n','isWap'],
		linkActiveClass: 'active-link'
	},
	generate: {
		routes: ['/', '/about', '/privacy', '/terms', '/login','/storage','/register','/recharge', '/kr', '/kr/about', '/kr/privacy', '/kr/terms','/kr/login', '/kr/register','/kr/recharge','/en', '/en/about', '/en/privacy', '/en/terms','/en/login','/en/register','/en/recharge']
	},
	/*
	 ** Customize the progress bar color
	 */
	loading: {
		/*设置进度条样式*/
		color: '#f8b833',
		failedColor: 'red'
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** Run ESLint on save
		 */
		vendor: ['axios', 'lodash'],
		extend(config, {
			isDev,
			isClient
		}) {
			if(isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					//loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	},
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/proxy'
	],
	axios: {
		proxy: true
		// 这里的true也可以是一个包含默认配置的对象
	},
	proxy: {
		'/api': {
			// target: 'http://10.18.6.34:8888',
			//target: 'http://liyabins.mynatapp.cc',
			target: 'http://10.17.1.75:8115',
			pathRewrite: {
				'^/api': '/'
			}
		}
	}
}