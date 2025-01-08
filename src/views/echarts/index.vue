<template>
  <div class="echarts-container">
    <div class="box">
      <pieChart1></pieChart1>
      <div class="text">间隔饼图</div>
    </div>
    <div class="box2">
      <barChart1></barChart1>
    </div>
    <div class="box">
      <pieChart2></pieChart2>
      <div class="text">单环间隔饼图（带总数）</div>
    </div>
  </div>
</template>

<script>
import pieChart1 from './components/pie-chart-1.vue';
import pieChart2 from './components/pie-chart-2.vue';
import barChart1 from './components/bar-chart-1.vue';
export default {
  components: {
    pieChart1,
    pieChart2,
    barChart1
  }
}
</script>

<style lang="scss" scoped>
.echarts-container {
  width: 100%;
  height: 100%;
  display: flex;
  .box {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
  }

  .box2 {
    width: 600px;
    height: 300px;
    border: 1px solid #ccc;
  }
  .text {
    text-align: center;
    line-height: 40px;
  }
}
</style>