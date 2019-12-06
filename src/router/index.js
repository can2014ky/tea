import Vue from 'vue';
import VueRouter from 'vue-router';
import { setTitle } from '@src/utils/setTitle';
import asyncRouterMap from './asyncRouterMap';
import constantRouterMap from './constantRouterMap';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    ...constantRouterMap,
    ...asyncRouterMap,
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    setTitle(to.meta.title);
  }
  next();
});

export default router;
