export default {
  target: 'static',

  head: {
    title: 'nuxt-vite-test-setup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-vite',
  ],

  modules: [
    '@nuxtjs/axios',
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion'
  ],

  build: {},
  tailwindcss: {
    jit: true
  }
}
