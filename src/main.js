import Vue from 'vue';

import store from '@/stores';

import App from './App';
import router from './routers';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
