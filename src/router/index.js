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
    {
      path: "/em-browser",
      component: () => import("@/views/em-browser/index"),
      meta: {
        title: "unity与前端通信"
      },
    },
    {
      path: "/scale-screen",
      component: () => import("@/views/scale-screen/index"),
      meta: {
        title: "屏幕自适应"
      },
    },
    {
      path: "/qr-code",
      component: () => import("@/views/qr-code/index"),
      meta: {
        title: "二维码生成"
      },
    },
  ]
});

export default router;
