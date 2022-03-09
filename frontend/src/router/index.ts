import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import BoardList from "../views/board/BoardList.vue";
import BoardWrite from "../views/board/BoardWrite.vue";
import BoardDetail from "../views/board/BoardDetail.vue";
import PageLayout from "../layout/PageLayout.vue";
import ContentLayout from "../layout/ContentLayout.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "PageLayout",
    component: PageLayout,
    redirect: "/board",
    children: [
      {
        path: "board",
        name: "Board",
        component: ContentLayout,
        redirect: "/board/list",
        children: [
          {
            path: "list",
            name: "BoardList",
            component: BoardList,
          },
          {
            path: "write",
            name: "BoardWrite",
            component: BoardWrite,
          },
          {
            path: "detail/:idx",
            name: "BoardDetail",
            component: BoardDetail,
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/user/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
