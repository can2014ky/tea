const os = require('os');
const path = require('path');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: '/', // 部署应用包时的基本URL,默认是服务器根目录'/'
  outputDir: 'dist',
  assetsDir: 'assets',
  indexPath: 'index.html',
  lintOnSave: process.env.NODE_ENV === 'development',
  runtimeCompiler: true,
  transpileDependencies: [],
  productionSourceMap: false,
  parallel: os.cpus().length > 1,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://123.59.211.225:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@src', resolve('src')) // 默认就已经配置了
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'));
  },
};
