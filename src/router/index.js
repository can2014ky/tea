import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@src/layout/Index.vue';
import Home from '../views/home/Home.vue';
import Error from '../views/error/404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        redirect: 'home',
      },
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue'),
      },
    ],
  },
  {
    path: '*',
    name: 'error',
    component: Error,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
