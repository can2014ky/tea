import Layout from '@src/layout/Index.vue';

const Error = () => import(/* webpackChunkName: "error" */ '@src/views/error/404.vue');

const Menu1 = () => import(/* webpackChunkName: "menu1" */ '@src/views/menu1/Index.vue');
const Home = () => import(/* webpackChunkName: "menu1" */ '@src/views/menu1/home/Home.vue');
const About = () => import(/* webpackChunkName: "menu1" */ '@src/views/menu1/about/About.vue');

const Menu2 = () => import(/* webpackChunkName: "menu2" */ '@src/views/menu2/Index.vue');
const Eat = () => import(/* webpackChunkName: "menu2" */ '@src/views/menu2/eat/Index.vue');
const Tomato = () => import(/* webpackChunkName: "menu2" */ '@src/views/menu2/eat/Tomato.vue');
const Potato = () => import(/* webpackChunkName: "menu2" */ '@src/views/menu2/eat/Potato.vue');
const Study = () => import(/* webpackChunkName: "menu2" */ '@src/views/menu2/study/Index.vue');

export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        redirect: 'menu1',
      },
      {
        path: 'menu1',
        component: Menu1,
        meta: {
          name: 'menu1',
          title: '菜单一',
        },
        children: [
          {
            path: '',
            redirect: 'home',
          },
          {
            path: 'home',
            name: 'home',
            component: Home,
            meta: {
              name: 'home',
              title: '首页',
            },
          },
          {
            path: 'about',
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
        path: 'menu2',
        component: Menu2,
        meta: {
          name: 'menu2',
          title: '菜单二',
        },
        children: [
          {
            path: '',
            redirect: 'eat',
          },
          {
            path: 'eat',
            component: Eat,
            meta: {
              name: 'eat',
              title: '吃饭',
            },
            children: [
              {
                path: '',
                redirect: 'tomato',
              },
              {
                path: 'tomato',
                name: 'tomato',
                component: Tomato,
                meta: {
                  name: 'tomato',
                  title: '番茄',
                },
              },
              {
                path: 'potato',
                name: 'potato',
                component: Potato,
                meta: {
                  name: 'potato',
                  title: '土豆',
                },
              },
            ],
          },
          {
            path: 'study',
            name: 'study',
            component: Study,
            meta: {
              name: 'study',
              title: '学习',
            },
          },
        ],
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
