<template>
  <article class="number">
    <h2 class="h2">Number 数字</h2>
    <p class="p">可以改变数字的大小。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="number.base" href="http://output.jsbin.com/kicuxow" title="基本用法" info="v-model 使用。">
      <emfe-number v-model="base"></emfe-number>
    </d-demo>
    <d-demo :code="number.limit" href="http://output.jsbin.com/valesiw" title="限制" info="使用 max | min 设置 最大 | 最小值。 使用 unit 设置单位。">
      <emfe-number :min="-1" :max="10" unit="个"></emfe-number>
    </d-demo>
    <d-demo :code="number.diy" href="http://output.jsbin.com/yunuzet" title="自定义" info="disabled 设置为 false 。使用 step 设置增减步伐。">
      <emfe-number :disabled="false" :step="0.12"></emfe-number>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">方法</h5>
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
import number from '@/views/code/number';

export default {
  data() {
    return {
      number,
      base: 10,
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
          attr: { text: 'unit', desc: false },
          desc: { text: '自定义单位。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'max', desc: false },
          desc: { text: '最大值。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: 'Infinity', row: false },
        },
        {
          attr: { text: 'min', desc: false },
          desc: { text: '最小值。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '-Infinity', row: false },
        },
        {
          attr: { text: 'step', desc: false },
          desc: { text: '每次改变的步伐，可以是小数。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '5', row: false },
        },
        {
          attr: { text: 'disabled', desc: false },
          desc: { text: '可否自定义数值。true -> 不可以。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'true', row: false },
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
          attr: { text: 'change', desc: false },
          desc: { text: '加减按钮触发。', row: false },
          return: { text: '新值，旧值', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
