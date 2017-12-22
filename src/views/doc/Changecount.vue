<template>
  <article class="changecount">
    <h2 class="h2">Changecount 数字动效</h2>
    <p class="p">通过上下滚动改变数字。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="changecount.base" href="http://output.jsbin.com/gicipib" title="基本用法" info="用 count 设置个数。">
      <emfe-changecount :count="base"></emfe-changecount>
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
import random from 'em-underline/random';
import loadcomponents from '@/tools/loadcomponents';
import changecount from '@/views/code/changecount';

export default {
  data() {
    return {
      changecount,
      base: random(100, 10000000),
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
          attr: { text: 'count', desc: false },
          desc: { text: '最大值。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '0', row: false },
        },
        {
          attr: { text: 'Number', desc: false },
          desc: { text: '数字运动时间。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '0.3', row: false },
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
