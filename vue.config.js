const path = require('path')
const resolve = dir => path.join(__dirname,dir)
const prd = process.env.NODE_ENV==='production';

const BASE_URL = prd ? '/vueCli3':'/'

module.exports = {
  publicPath:BASE_URL,
  lintOnSave: false,
  outputDir:'dist',
  indexPath:'index.html',
  filenameHashing:true,
  // 打包时不生成map文件
  productionSourceMap:false,
  runtimeCompiler:true,
  transpileDependencies:[],
  configureWebpack:()=>{},
  css:{
    extract:prd,
    sourceMap:false,
    loaderOptions:{
      stylus:{
        import: path.resolve(__dirname,'./src/assets/css/_base.styl')
      }
    },
    modules:false
  },
  chainWebpack:config => {
    config.resolve.alias
      .set('@',resolve('src'))
      .set('@c',resolve('src/components'))
      .set('@v',resolve('src/views'));

    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options=>{
        Object.assign(options,{
          limit:10240
        })
      })
  },

  devServer:{
    headers:{
      "Access-Control-Allow-Origin":"*"
    },
    open:false,
    host:'0.0.0.0',
    port:3000,
    https:false,
    hotOnly:false,
    overlay:{
      warnings:false,
      errors:true
    },
    proxy:'http://localhost:3000'
  }
}
