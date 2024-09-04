const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.googleapis.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
})
