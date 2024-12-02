<template>
  <div style="padding: 50px;">
    <div>{{ weather.city }}</div>
    <div>{{ weather.temperature }} 度</div>
    <div>{{ weather.weather }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      weather: {},
    };
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    async getWeather() {
      const res = await axios.request({
        url: "https://restapi.amap.com/v3/weather/weatherInfo",
        method: "GET",
        // 具体城市代码请参考https://lbs.amap.com/api/webservice/guide/api/weatherinfo/
        // 该例子城市为 重庆
        params: {
          city: "500000",
          // 该key为王炳坤申请个人key，低用量可用，超出需申请（根据用量付费）
          key: "e4d76eff06c7842570ae1b37eebc2f15",
        },
      });
      const { weather = '', city = '', temperature = '' } = res.data["lives"][0]
      this.weather = {
        city,
        temperature,
        weather
      }
    }
  },
}
</script>

<style></style>