const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,
  configureWebpack: {
    mode: 'development',
    watch: true,
    watchOptions: {
      poll: 1000,
      ignored: ['node_modules']
    },
  }
})
