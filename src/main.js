import Vue from 'vue';
// 引入 EM-FE js
import emfe from 'em-fe';
// 引入 EM-FE 样式
import 'em-fe/dist/css/emfe.css';

import store from '@/stores';

import App from './App';
import router from './routers';

Vue.config.productionTip = false;

Vue.use(emfe);
console.log(1);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
