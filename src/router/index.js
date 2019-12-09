import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress'; // 插件
import 'nprogress/nprogress.css';
import { getToken } from '@src/utils/auth';
import { setTitle } from '@src/utils/setTitle';
import asyncRouterMap from './asyncRouterMap';
import constantRouterMap from './constantRouterMap';

NProgress.configure({
  showSpinner: false,
});

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    ...constantRouterMap,
    ...asyncRouterMap,
  ],
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  const token = getToken() || '233'; // 暂时屏蔽！！！
  const isRequiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (to.meta.title) {
    setTitle(to.meta.title);
  }
  if (isRequiresAuth) {
    if (token) {
      next();
    } else {
      next({
        path: '/login',
        query: to.fullPath.indexOf('redirect') < 0 ? { redirect: to.fullPath } : {},
      });
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
