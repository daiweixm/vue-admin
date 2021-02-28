const path = require('path')
module.exports={
  publicPath: process.env.NODE_ENV === 'production' ? '':'/',
  outputDir: process.env.NODE_ENV === 'production' ? 'dist':'devdist',
  lintOnSave: true,
  chainWebpack: (config) => {
  },
  configureWebpack: (config) => {
  },
  productionSourceMap: false,
  css:{
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/main.scss";`
      }
    },
    requireModuleExtension: true,
    modules: false
  },
  // 是否为 Babel 或 TypeScript 使用 thread-loader
  parallel: require('os').cpus().length > 1,
  pwa: {},
  // 所有 webpack-dev-server 的选项都支持
  devServer: {},
   // 可以用来传递任何第三方插件选项
   pluginOptions: {}
}