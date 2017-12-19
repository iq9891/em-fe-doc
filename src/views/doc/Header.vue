<template>
  <article class="header">
    <h2 class="h2">Header 头部</h2>
    <p class="p">用于整个网站的公共头部。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="header.base" href="http://output.jsbin.com/tisibo" title="基本用法" info="简单的使用。">
      <emfe-header className="header" user="EM-FE" :home="home"></emfe-header>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">方法</h5>
    <emfe-table class="table" :columns="eventTh" :data="eventTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in eventTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import header from '@/views/code/header';

export default {
  data() {
    return {
      header,
      propTh: [
        {
          title: '属性',
          key: 'attr',
        },
        {
          title: '说明',
          key: 'desc',
        },
        {
          title: '类型',
          key: 'type',
        },
        {
          title: '是否必须',
          key: 'must',
        },
        {
          title: '默认值',
          key: 'default',
        },
      ],
      propTd: [
        {
          attr: { text: 'logo', desc: false },
          desc: { text: 'logo 的图片地址。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false。 1.3.0 新增。 1.3.0 之前必须值。', row: false },
          default: { text: 'https://static2.evente.cn/static/img/logo2017.png', row: false },
        },
        {
          attr: { text: 'user', desc: false },
          desc: { text: '用户名称', row: false },
          type: { text: 'String', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'home', desc: false },
          desc: { text: '点击 logo 的方法。如果没有默认跳转 https://www.evente.cn/ 并触发 goHome 方法。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'className(class-name)', desc: false },
          desc: { text: '自定义的 class 名称。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
      ],
      eventTh: [
        {
          title: '事件名',
          key: 'attr',
        },
        {
          title: '说明',
          key: 'desc',
        },
        {
          title: '返回值',
          key: 'return',
        },
      ],
      eventTd: [
        {
          attr: { text: 'logout', desc: false },
          desc: { text: '退出登录触发', row: false },
          return: { text: '-', row: false },
        },
        {
          attr: { text: 'goIndex', desc: false },
          desc: { text: '控制台首页触发', row: false },
          return: { text: '-', row: false },
        },
        {
          attr: { text: 'goAccount', desc: false },
          desc: { text: '点击用户触发', row: false },
          return: { text: '-', row: false },
        },
        {
          attr: { text: 'goHome', desc: false },
          desc: { text: '点击 logo 触发。和 home 属性互斥。', row: false },
          return: { text: '-', row: false },
        },
      ],
    };
  },
  methods: {
    home() {
      this.$router.push('/');
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/views/doc/header.scss";
</style>
