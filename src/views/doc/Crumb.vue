<template>
  <article class="crumb">
    <h2 class="h2">Crumb 面包屑</h2>
    <p class="p">右边内容的顶部导航，告诉您当前位置。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="crumb.base" href="http://output.jsbin.com/kazaraw" title="基本用法" info="可以设置返回，可以设置当前标题。">
      <emfe-crumb className="crumb" :routers="{url: 'https://www.evente.cn'}" link-text="返回" title="面包屑"></emfe-crumb>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import crumb from '@/views/code/crumb';

export default {
  data() {
    return {
      crumb,
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
          attr: { text: 'routers', desc: false },
          desc: { text: '支持 vue-router 里的各种属性，支持 url 外链形式。', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'title', desc: false },
          desc: { text: '链接右边的标题。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'linkText(link-text)', desc: false },
          desc: { text: '链接文字。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'true', row: false },
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
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/views/doc/crumb.scss";
</style>
