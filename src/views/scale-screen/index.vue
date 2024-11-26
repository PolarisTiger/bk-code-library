<template>
  <v-scale-screen width="1000" height="600">
    <div class="bg">
    </div>
  </v-scale-screen>
</template>

<script>
export default {
/**
 * 组件api
 * width： 大屏宽度
 * height: 大屏高度
 * autoScale： 自适应配置，配置为 boolean 类型时，为启动或者关闭自适应，配置为对象时，若 x 为 true，x 轴产生边距，y 为 true 时，y 轴产生边距，启用 fullScreen 时此配置失效
 * delay：窗口变化防抖延迟时间
 * fullScreen：全屏自适应，启用此配置项时会存在拉伸效果，同时 autoScale 失效，非必要情况下不建议开启
 * 详细文档参考 github  -》   https://github.com/Alfred-Skyblue/v-scale-screen/blob/v3.0/README.zh_CN.md
 */
}
</script>

<style lang="scss" scoped>
.bg {
  background-color: black;
  width: 1000px;
  height: 600px;
}
</style>