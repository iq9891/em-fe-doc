<template>
  <article class="link">
    <h2 class="h2">Link 链接</h2>
    <p class="p">用于整个网站的公共超级链接。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="link.base" href="http://output.jsbin.com/jojoteb" title="基本用法" info="routers 的属性里面配置路由。">
      <emfe-link :routers="{ name: 'Font' }">去 EM-FE 的字体</emfe-link>
    </d-demo>
    <d-demo :code="link.url" href="http://output.jsbin.com/valaxem" title="外链用法" info="routers 中设置 url 属性即可">
      <emfe-link :routers="{ url: 'https://www.evente.cn' }">去活动易</emfe-link>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">事件</h5>
    <emfe-table class="table" :columns="eventTh" :data="eventTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in eventTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import link from '@/views/code/link';

export default {
  data() {
    return {
      link,
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
          attr: { text: 'tag', desc: false },
          desc: { text: '设置渲染出来的标签。必须结合 routers 使用。如果是正常的 Vue 的 Router 跳转属性，才能正常渲染 tag 设置的标签。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'routers', desc: false },
          desc: { text: '设置跳转，支持router里面的属性，外跳属性是 url', row: false },
          type: { text: 'String', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'click', desc: false },
          desc: { text: '点击事件', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
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
          attr: { text: 'click', desc: false },
          desc: { text: '点击触发', row: false },
          return: { text: '-', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>

<!--<style lang="scss">
// @import "../../assets/styles/views/doc/link.scss";
</style>
-->
