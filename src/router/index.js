import Vue from 'vue';
import VueRouter from 'vue-router';
import { setTitle } from '@src/utils/setTitle';
import routes from './router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    setTitle(to.meta.title);
  }
  next();
});

export default router;
