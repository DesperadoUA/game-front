import DAL_Builder from './DAL/builder'
export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-slot',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'script', src: 'https://images.dmca.com/Badges/DMCABadgeHelper.min.js' }
    ],
      script: [
		  { hid: 'stripe', src: '/js/initial_canvas.js'}
	  ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      presets: [
        [
          require.resolve("@nuxt/babel-preset-app"),
          {
            browsers: ["IE 11", "last 2 version"]
          }
        ]
      ]
    }
  },
  sitemap: {
    exclude: [
      '/useful',
      '/best-for-payout',
      '/bonus-pay',
      '/free-bonus-casino',
      '/licensed-casino',
      '/max-payout-casino',
      '/megaways',
      '/min-deposit-casino',
      '/new-slots',
      '/popular-casino',
      '/progressive',
      '/slots'
    ],
    routes: async () => {
      const request = new DAL_Builder()
      const {data} = await request.postType('pages')
                                          .url('sitemap')
                                          .get()
      return data.body.posts
    }
  }  
}
