import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import pkg from './package'

export default {
  mode: 'universal',

  head: {
    title: 'LM Portfolio',
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
    routes: function () {
      return axios.get(
        'https://api.storyblok.com/v1/cdn/stories?version=published&token=QVDD6VDTahJchwiS5Pryiwtt&starts_with=work&cv=' +
          Math.floor(Date.now() / 1e3)
      )
        .then((res) => {
          const projects = res.data.stories.map(sp => sp.full_slug)
          return [
            '/',
            '/work',
            ...projects
          ]
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
