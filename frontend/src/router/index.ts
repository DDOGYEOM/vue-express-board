import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import BoardList from '../views/board/BoardList.vue';
import PageLayout from '../layout/PageLayout.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'PageLayout',
    component: PageLayout,
    children: [
      {
        path: 'board',
        name: 'BoardList',
        component: BoardList,
      }
    ]
  },
  {
    path: '/board',
    name: 'BoardList',
    component: BoardList,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
