// vue的配置文件

module.exports = {
  devServer: {
      open: true,
      port: 8001,
      proxy: {
          '/apis': {
              target:'http:127.0.0.1:1337',  // target host
              ws: true,  // proxy websockets 
              changeOrigin: true,  // needed for virtual hosted sites
              pathRewrite: {
                  '^/apis': ''  // rewrite path
              }
          },
      }
  }  
};