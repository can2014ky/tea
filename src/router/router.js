import Layout from '@src/layout/Index.vue';

const Error = () => import(/* webpackChunkName: "error" */ '@src/views/error/404.vue');
const Home = () => import(/* webpackChunkName: "home" */ '@src/views/home/Home.vue');
const About = () => import(/* webpackChunkName: "home" */ '@src/views/about/About.vue');

export default [
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
        meta: {
          name: 'home',
          title: '首页',
        },
      },
      {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
          name: 'about',
          title: '关于',
        },
      },
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
