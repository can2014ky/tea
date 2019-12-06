import Layout from '@src/layout/Index.vue';
import Menu1 from './menu1';
import Menu2 from './menu2';

const Error = () => import(/* webpackChunkName: "error" */ '@src/views/error/404.vue');
const defaultRoute = 'menu1';

export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        redirect: defaultRoute,
      },
      Menu1,
      Menu2,
    ],
  },
  {
    path: '*',
    name: 'error',
    component: Error,
    meta: {
      name: 'error',
      title: '404',
    },
  },
];
