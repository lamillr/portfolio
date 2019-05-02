// eslint-disable-next-line no-unused-vars
import pkg from './package'
// eslint-disable-next-line import/order
import axios from 'axios'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Lisa Miller's Portfolio",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lisa Miller Portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i|Lustria' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [ '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [ '~/plugins/fontawesome.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['storyblok-nuxt', { accessToken: process.env.NODE_ENV === 'production' ? 'QVDD6VDTahJchwiS5Pryiwtt' : '7Jy33aVnzcM7VvTaF3ifYgtt', cacheProvider: 'memory' }
    ]
  ],

  generate: {
    routes: function (callback) {
      const token = 'QVDD6VDTahJchwiS5Pryiwtt'
      const version = 'published'
      let cacheVersion = 0

      const routes = ['/']
      // eslint-disable-next-line camelcase
      axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`).then((space_res) => {
        cacheVersion = space_res.data.space.version

        // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
        axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cacheVersion}`).then((res) => {
          Object.keys(res.data.links).forEach((key) => {
            if (res.data.links[key].slug !== 'home') {
              routes.push('/' + res.data.links[key].slug)
            }
          })

          callback(null, routes)
        })
      })
    }
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
