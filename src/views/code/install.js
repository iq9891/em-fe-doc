const cli = `
npm i -g vue-cli
mkdir my-project && cd my-project
vue init webpack
npm i && npm i em-fe
`;

const main = `
import Vue from 'vue'
// 引入 EM-FE js
import emfe from 'em-fe'
// 引入 EM-FE 样式
import 'em-fe/dist/css/emfe.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 注册 EM-FE 组件
Vue.use(emfe)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
`;

const dev = `
# 执行如下命令后，浏览器自动打开项目预览页面
npm start
`;

const importscript = `
<!-- 引入 Vue.js -->
<script src="https://vuejs.org/js/vue.min.js"></script>
<!-- 引入 EM-FE stylesheet -->
<link rel="stylesheet" href="https://unpkg.com/em-fe/dist/css/emfe.css">
<!-- 引入 EM-FE -->
<script src="https://unpkg.com/em-fe/dist/emfe.min.js"></script>
`;

const cdn = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>EM-FE CDN 例子</title>
  <!-- 引入 Vue.js -->
  <script src="https://vuejs.org/js/vue.min.js"></script>
  <!-- 引入 EM-FE stylesheet -->
  <link rel="stylesheet" href="https://unpkg.com/em-fe/dist/css/emfe.css">
  <!-- 引入 EM-FE -->
  <script src="https://unpkg.com/em-fe/dist/emfe.min.js"></script>
</head>
<body>
<div id="app">
  <emfe-button theme="primary" @click="show">我是按钮，点我一下</emfe-button>
  <emfe-modal :show="visible" title="欢迎" @ok="visible = false" @close="visible = false" @cancel="visible = false">
    <div slot="modal-main">欢迎来到 EM-FE</div>
  </emfe-modal>
</div>
<script>
  new Vue({
    el: '#app',
    data: {
      visible: false
    },
    methods: {
      show: function () {
        this.visible = true;
      }
    }
  })
</script>
</body>
</html>
`;

export default {
  cli,
  main,
  dev,
  importscript,
  cdn,
};
