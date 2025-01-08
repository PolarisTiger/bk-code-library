<template>
  <div>
    <div style="width: 600px; height: 290px" ref="barChart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { colorList, barChartData1 } from '../constant.js';
export default {
  data() {
    return {
      lineList: barChartData1,
      colorList,
      mybarChart: null,
      legendList: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.legendList = this.lineList[0].detailList.map((item, i) => ({
        name: item.name,
        color1: colorList[i].color1,
        color2: colorList[i].color2,
        color3: colorList[i].color3,
      }))
      this.barCharts()
    },
    barCharts() {
      let mybarChart = new echarts.init(this.$refs.barChart);
      mybarChart.setOption(this.getLineOption());
      this.mybarChart = mybarChart
    },
    getLineOption() {
      // 获取 lineList 的名称列表，如果 lineList 为空，则返回一个空数组
      const xList = this.lineList.length > 0 ? this.lineList.map(x => x.name) : [];

      // 获取 lineList 的第一个元素，如果为空，则返回一个空对象
      const list = this.lineList[0] || {};
      let yList = []
      // 检查 list 和 list.detailList 是否存在，以避免运行时错误
      if (list && list.detailList && Array.isArray(list.detailList)) {
        // 获取柱状图的 legend 数据，确保后端接口返回的数据格式一致
        yList = this.legendList.map(legendItem => {
          const detailItem = list.detailList.find(detailItem => detailItem.name === legendItem.name);
          return detailItem ? detailItem.name : ''; // 如果未找到匹配的项，则返回空字符串
        });
      }
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '0%',
          top: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: xList,
          axisLine: {
            lineStyle: {
              color: '#E2E8EE'

            }
          },
          axisLabel: {
            textStyle: {
              color: "#666666"
            },
            formatter: function (value) {
              // 在这里处理换行，例如每10个字符换行一次
              return value.replace(/(.{4})/g, '$1\n');
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#E2E8EE'],
              width: 1,
              type: 'dashed'
            }
          }
        },

        yAxis: [{
          type: 'value',
          axisLabel: {
            textStyle: {
              color: "#666666"
            }
          },
          axisLine: {
            lineStyle: {
              color: '#E2E8EE'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#E2E8EE'],
              width: 1,
              type: 'solid'
            }
          }
        },
        ],
        series: []
      };
      // 将后端数据循环按照分类添加到echarts中
      option.series = yList.map((x, i) => {
        return {
          name: x,
          type: 'bar',
          barWidth: '12px',
          barGap: '0%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: colorList[i].color1
              }, {
                offset: 1,
                color: colorList[i].color2
              }]),
              barBorderRadius: [6, 6, 0, 0],
            }
          },
          data: this.lineList.map(y => {
            return y.detailList.find(z => z.name === x).num || 0
          })
        }
      })
      return option;
    }
  }
}
</script>

<style></style>