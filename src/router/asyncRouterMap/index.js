import Layout from '@src/layout/Index.vue';
import Menu1 from './menu1';
import Menu2 from './menu2';

const defaultRoute = { name: 'home' };

export default [
  {
    path: '/',
    component: Layout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        redirect: defaultRoute,
      },
      Menu1,
      Menu2,
    ],
  },
];
