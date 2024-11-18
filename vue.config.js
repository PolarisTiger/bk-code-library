const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  css: {
    loaderOptions: {
      css: {
        // 这个选项可以使css单位自动转换为px到rem单位
        // 基础大小 baseSize 可以按需修改
        loaderOptions: {
          remUnit: 37.5 // 设计稿宽度除以10，这里假设设计稿宽度是375px
        }
      }
    }
  }
};