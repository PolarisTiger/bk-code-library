<template>
  <div style="width: 300px; height: 250px" ref="pieChart"></div>
</template>

<script>
import echarts from 'echarts'
import { colorList } from '../constant';
export default {
  data() {
    return {
      pieList: [],
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.pieList = [
        { name: 'name1', value: 20 },
        { name: 'name2', value: 30 },
        { name: 'name3', value: 40 },
        { name: 'name4', value: 50 },
        { name: 'name5', value: 60 },
      ]
      this.pieCharts()
    },
    pieCharts() {
      let myChart = new echarts.init(this.$refs.pieChart);
      myChart.setOption(this.getPieOption());
    },
    getPieOption() {
      let colorStops = colorList.map(x => (
        [
          {
            offset: 0,
            color: x.color1, // 0% 处的颜色
          },
          {
            offset: 1,
            color: x.color2, // 0% 处的颜色
          }
        ]
      ))
      let data = this.pieList
      const sum = data.reduce((per, cur) => per + cur.value, 0);

      let option = {
        title: {
          show: true,
          text: sum,
          subtext: '人',
          x: "center",
          y: "45%",
          textStyle: {
            fontFamily: "DDing",
            fontSize: 48,
            fontWeight: 'bold',
            color: '#353D76'
          },
          subtextStyle: {
            fontFamily: 'Siyuan',
            color: '#353D76',
            fontSize: 24,
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)',
        },
        series: [
          {
            name: "",
            type: "pie",
            roundCap: true,
            radius: ["56%", "66%"],
            center: ["50%", "60%"],
            minAngle: 10,

            data: data,
            label: {
              show: false,
            },
            startAngle: -90, // 设置起始角度为-90度，使饼图逆时针展示
            // 设置图元的样式
            itemStyle: {
              // 设置图元的边框颜色
              borderColor: '#fff',
              // 设置图元的边框宽度
              borderWidth: 4,
              // 设置图元的颜色
              color: function (params) {
                return {
                  x: 0,
                  y: 1,
                  x2: 1,
                  y2: 0,
                  // 根据索引值从 colorStops 数组中获取颜色渐变对象
                  colorStops: colorStops[params.dataIndex], // 100% 处的颜色

                }
              },
            }
          },
          {
            type: "pie",
            radius: ["50%", "52%"],
            center: ["50%", "60%"],
            animation: false,
            hoverAnimation: false,
            tooltip: {
              show: false,
            },
            data: [
              {
                value: 100,
              },
            ],
            label: {
              show: false,
            },
            itemStyle: {
              normal: {
                color: "#F1F1FC",
              },
            },
          },
          {
            name: "",
            type: "pie",
            startAngle: 90,
            radius: "50%",
            animation: false,
            hoverAnimation: false,
            center: ["50%", "60%"],
            tooltip: {
              show: false,
            },
            itemStyle: {
              normal: {
                labelLine: {
                  show: false,
                },
                color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                  {
                    offset: 1,
                    color: "#FBFEFD",
                  },
                  {
                    offset: 0,
                    color: "#F0F5FF",
                  },
                ]),
                // shadowBlur: 60,
              },
            },
            data: [
              {
                value: 100,
              },
            ],
          },
        ],
      };

      return option;
    }
  }
}
</script>
