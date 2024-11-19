import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      component: () => import("@/views/index"),
      meta: {
        title: "首页"
      },
    },
    {
      path: "/full-screen",
      component: () => import("@/views/full-screen/index"),
      meta: {
        title: "全屏"
      },
    },
  ]
});

export default router;
