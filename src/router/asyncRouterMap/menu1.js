const Menu1 = () => import(/* webpackChunkName: "menu1" */ '@src/views/menu1/Index.vue');
const Home = () => import(/* webpackChunkName: "menu1" */ '@src/views/menu1/home/Home.vue');
const About = () => import(/* webpackChunkName: "menu1" */ '@src/views/menu1/about/About.vue');

export default {
  path: 'menu1',
  component: Menu1,
  meta: {
    name: 'menu1',
    title: '菜单一',
  },
  children: [
    {
      path: '',
      redirect: { name: 'home' },
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
};
