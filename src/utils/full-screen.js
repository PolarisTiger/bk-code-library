/**
 * 浏览器全屏
 */
export const reqFullScreen = () => {
  // 检查是否支持标准全屏 API
  if (document.documentElement.requestFullScreen) {
    // 使用标准全屏 API
    document.documentElement.requestFullScreen();
  } else if (document.documentElement.webkitRequestFullScreen) {
     // 使用 WebKit 全屏 API
    document.documentElement.webkitRequestFullScreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    // 使用 Mozilla 全屏 API
    document.documentElement.mozRequestFullScreen();
  }
};

/**
 * 浏览器退出全屏
 */
export const exitFullScreen = () => {
  // 检查是否支持 requestFullScreen
  if (document.documentElement.requestFullScreen) {
    // 调用退出全屏的方法
    document.exitFullScreen();
  } else if (document.documentElement.webkitRequestFullScreen) {
    // 调用WebKit退出全屏的方法
    document.webkitCancelFullScreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    // 调用Mozilla退出全屏的方法
    document.mozCancelFullScreen();
  }
};