<template>
  <div style="width: 300px; height: 250px" ref="pieChart"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  data() {
    return {
      list: [],
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.list = [
        { name: 'name1', value: 20 },
        { name: 'name2', value: 30 },
        { name: 'name3', value: 40 },
        { name: 'name4', value: 50 },
        { name: 'name5', value: 60 },
      ]
      this.pieCharts()
    },
    pieCharts() {
      let myChart = new echarts.init(this.$refs.pieChart)
      myChart.setOption(this.getOption())
    },
    getOption() {
      const data = this.list
      let data1 = [];
      let sum = 0
      data.forEach((item) => {
        sum += Number(item.value);
      });
      // 给每个数据后添加特定的透明的数据形成间隔
      data.forEach((item) => {
        if (item.value !== 0) {
          data1.push(item, {
            name: '',
            value: sum / 70,
            tooltip: {
              show: false,
            },
            labelLine: {
              show: false,
              lineStyle: {
                color: 'transparent',
              },
            },
            itemStyle: {
              color: 'transparent',
            },
          });
        }
      });
      var colorList = ['#FCA3B5', '#fff', '#1EDACE', '#fff', '#F1894E', '#fff', '#0DA2F8', '#fff', '#9D90F6', '#fff'];
      var colorList1 = ['#FEDFE6', '#fff', '#D6FDFD', '#fff', '#FFE3CD', '#fff', '#ADDFFD', '#fff', '#E8DAF0', '#fff'];
      var colorList2 = ['#FF4C68', '#fff', '#95FDFC', '#fff', '#F4B37B', '#fff', '#0077FF', '#fff', '#BEB2FB', '#fff'];
      let option = {
        tooltip: {
          trigger: 'item',
          show: true
        },
        series: [{
          type: 'pie',
          radius: ['75%', '85%'],
          center: ["50%", "50%"],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              color: function (params) {
                return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: colorList[params.dataIndex] },
                  { offset: 1, color: colorList2[params.dataIndex] },
                ])
              }
            }
          },
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          startAngle: -270,
          data: data1
        }, {
          type: 'pie',
          radius: ['50%', '75%'],
          center: ["50%", "50%"],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              color: function (params) {
                return colorList1[params.dataIndex]
              }
            }
          },
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          startAngle: -270,
          data: data1
        }, {
          // 最外圆圈
          type: 'pie',
          zlevel: 1,
          silent: true, //取消高亮
          radius: ['94%', '95%'],
          center: ["50%", "50%"],
          itemStyle: {
            normal: {
              show: false,
              color: '#F1F1FC',
            },
          },
          labelLine: {
            show: false,
            normal: {
              length: 10,
              length2: 0,
              lineStyle: {
                color: 'transparent',
              },
            },
          },
          label: {
            show: false,
          },
          data: [100],
        },
        {
          // 最内圆圈
          type: 'pie',
          zlevel: 1,
          silent: true, //取消高亮
          radius: ['36%', '35%'],
          center: ["50%", "50%"],
          itemStyle: {
            normal: {
              show: false,
              color: '#F1F1FC',
            },
          },
          labelLine: {
            show: false,
            normal: {
              length: 10,
              length2: 0,
              lineStyle: {
                color: 'transparent',
              },
            },
          },
          label: {
            show: false,
          },
          data: [100],
        }, {
          // 最外圆圈
          type: 'pie',
          zlevel: 1,
          silent: true, //取消高亮
          radius: ['35%', '0%'],
          center: ["50%", "50%"],
          itemStyle: {
            normal: {
              show: false,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#FBFEFD' },
                { offset: 1, color: '#F0F5FF' },
              ]),
            },
          },
          labelLine: {
            show: false,
            normal: {
              length: 10,
              length2: 0,
              lineStyle: {
                color: 'transparent',
              },
            },
          },
          label: {
            show: false,
          },
          data: [100],
        },]
      };
      return option;
    }
  }
}
</script>
