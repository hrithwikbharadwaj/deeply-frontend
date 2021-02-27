export default {
  ssr: false ,// Disable Server Side rendering
  // target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  axios: {
    baseURL: 'https://richurl.tech/api/',
    credentials: false,
    proxyHeaders: false
  },
  
  auth: {
    
    redirect: {
     
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          user: { url: '/auth', method: 'get', propertyName: 'user' },
          logout: false
        },
        token: {
          property: 'token',
          maxAge: 60 * 60 * 24 * 30,
          // required: true,
          type: ''
        },
       
      
      }
    }
  },
  head: {
    title: 'richurl',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy', 
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/robots'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa:{
    manifest: {
      name: 'RichURL',
      description: 'Create Rich Deep Links for free',
      useWebmanifestExtension: false,
      short_name:'RichURL',
      lang: 'en',
      share_target:{
        action:'/',
        method:'GET',
        params:{
          
          text:'videolink'
        }
      }
      
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
