import Vue from "vue";
import VueRouter from "vue-router";
import Music from "../views/HomeView.vue";
import "../public-path";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Music",
    name: "Music",
    component: Music,
  },
  {
    path: "/Dome",
    name: "Dome",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  // @ts-ignore
  base: window.__POWERED_BY_QIANKUN__ ? "/qk-micro-vue" : "/",
  routes,
});

export default router;
