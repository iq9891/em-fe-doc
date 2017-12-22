<template>
  <article class="copy">
    <h2 class="h2">Copy 复制</h2>
    <p class="p">可以复制一段内容到剪切板。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="copy.base" href="http://output.jsbin.com/gicipib" title="基本用法" info="通过回调函数检测是否成功。">
      <emfe-copy copy-value="http://www.evente.cn" @copySuccess="copySuc" @copyFail="copyFail"></emfe-copy>
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
import copy from '@/views/code/copy';

export default {
  data() {
    return {
      copy,
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
          attr: { text: 'read', desc: false },
          desc: { text: '复制的内容是否只读。', row: false },
          type: { text: 'String | Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'true', row: false },
        },
        {
          attr: { text: 'title', desc: false },
          desc: { text: '复制按钮悬浮的提示文字。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '复制网址', row: false },
        },
        {
          attr: { text: 'text', desc: false },
          desc: { text: '黑色的提示文字。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '表单页面：', row: false },
        },
        {
          attr: { text: 'copyValue(copy-value)', desc: false },
          desc: { text: '复制的内容。', row: false },
          type: { text: 'String', row: false },
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
    };
  },
  methods: {
    copySuc() {
      this.$EmfeMessage.success({
        content: '复制成功',
      });
    },
    copyFail() {
      this.$EmfeMessage.error({
        content: '复制失败',
      });
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
