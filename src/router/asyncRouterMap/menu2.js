const Menu2 = () => import(/* webpackChunkName: "menu2" */ '@src/views/menu2/Index.vue');
const Eat = () => import(/* webpackChunkName: "menu2" */ '@src/views/menu2/eat/Index.vue');
const Tomato = () => import(/* webpackChunkName: "menu2" */ '@src/views/menu2/eat/Tomato.vue');
const Potato = () => import(/* webpackChunkName: "menu2" */ '@src/views/menu2/eat/Potato.vue');
const Study = () => import(/* webpackChunkName: "menu2" */ '@src/views/menu2/study/Index.vue');

export default {
  path: 'menu2',
  component: Menu2,
  meta: {
    name: 'menu2',
    title: '菜单二',
  },
  children: [
    {
      path: '',
      redirect: { name: 'tomato' },
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
          redirect: { name: 'tomato' },
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
};
