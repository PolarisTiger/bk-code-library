import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import VScaleScreen from 'v-scale-screen'
// import 'lib-flexible/flexible'
import $axios from "@/utils/request";

// 把变量挂载到vue的原型上
Vue.prototype.$axios = $axios;

Vue.use(VScaleScreen)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
