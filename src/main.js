import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@src/components/index';
import '@src/icons/index';

import '@src/plugins/element';
import '@src/themes/index';
import i18n from './i18n';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
