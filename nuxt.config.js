export default {
  plugins: [
    { src: '@/plugins/localStorage',
      ssr: false
    },
  ],
  modules: [
    '@nuxtjs/bulma'
  ],
  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
}
