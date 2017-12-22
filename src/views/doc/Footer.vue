<template>
  <article class="footer">
    <h2 class="h2">Footer 底部</h2>
    <p class="p">用于整个网站的公共底部。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="footer.base" href="http://output.jsbin.com/gicipib" title="基本用法" info="只需加上 content 属性即可。">
      <emfe-footer content="EM-FE"></emfe-footer>
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
import footer from '@/views/code/footer';

export default {
  data() {
    return {
      footer,
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
          attr: { text: 'content', desc: false },
          desc: { text: '底部内容', row: false },
          type: { text: 'String', row: false },
          must: { text: 'true', row: false },
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
@import "../../assets/styles/views/doc/footer.scss";
</style>
