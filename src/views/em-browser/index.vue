<template>
  <div>
    <button type="primary" style="margin: 20px auto;" @click="clickButton">点击按钮</button>
  </div>
</template>

<script>
export default {
  created() {
    // unity监听/点击事件触发 
    // 最后打包成url特定页面，用于unity挂载Browser
    // vue unity 需要统一方法名 如 （getButtonClick）
    window['getButtonClick'] = (b) => {
      return ("getButtonClick:" + b);
    };
  },
  methods: {
    clickButton() {
      let a = 10;
      window.getButtonClick(a)
    },

    // unity  c#端方法
    // 注册监听方法，当网页端调用了getButtonClick后，unity端就会自动Debug后面，传参格式为JSONNode
    // Browser.RegisterFunction("getClickButton", new Browser.JSCallback(Action<JSONNode>));
  }

}
</script>

<style></style>