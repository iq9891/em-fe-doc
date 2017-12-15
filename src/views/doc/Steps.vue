<template>
  <article class="steps">
    <h2 class="h2">Steps 图标指引</h2>
    <p class="p">用于整个网站的图标指引。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="steps.base" href="http://output.jsbin.com/decekuj" title="基本用法" info="步骤信息加在 datas 属性上，步骤索引加在 active 属性上。">
      <emfe-steps :datas="stepDatas" :active="1"></emfe-steps>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import steps from '@/views/code/steps';

export default {
  data() {
    return {
      steps,
      stepDatas: [
        {
          title: '第一步',
          icon: 'fabu',
        },
        {
          title: '第二步',
          icon: 'erweima',
        },
        {
          title: '第三步',
          icon: 'tishi',
        },
        {
          title: '第四步',
          icon: 'shezhi',
        },
      ],
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
          attr: { text: 'datas', desc: false },
          desc: { text: '进度数据。数据格式：[{icon: \'fabu\', title: \'\'}]', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'active', desc: false },
          desc: { text: '进度索引', row: false },
          type: { text: 'Number', row: false },
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
