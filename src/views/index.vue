<template>
  <div style="padding: 100px; background-color: #04A25F;">
    <button @click="toPage('/full-screen')">全屏</button>
    <button @click="toPage('/em-browser')">unity 与 前端通信</button>
    <button @click="toPage('/scale-screen')">大屏屏幕自适应 </button>
    <button @click="toPage('/qr-code')">二维码生成</button>
    <button @click="toPage('/gaode-weather')">高德天气</button>
  </div>
</template>

<script>
export default {
  methods: {
    toPage(path) {
      this.$router.push({
        path,
      })
    }
  }
}
</script>

<style></style>