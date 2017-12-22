<template>
  <article>
    <h2 class="h2">Inputmore 多个输入框</h2>
    <p class="p">在原生 inputmore 控件基础上进行了功能扩展，可以组合使用。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="inputmore.base" href="http://output.jsbin.com/wopopiq" title="基本用法" info="只需设置 datas 属性即可。">
      <emfe-inputmore-group :datas="group1"></emfe-inputmore-group>
    </d-demo>
    <d-demo :code="inputmore.icon" href="http://output.jsbin.com/hufekup" title="icon 用法" info="只需设置 icon 属性即可。">
      <emfe-inputmore-group icon="shouji1" :datas="group2"></emfe-inputmore-group>
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
import inputmore from '@/views/code/inputmore';

export default {
  data() {
    return {
      inputmore,
      group1: [
        '内容1',
      ],
      group2: [
        'icon 1',
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
          desc: { text: '数据来渲染多个输入框。结果: [\'something\']', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'placeholder', desc: false },
          desc: { text: '输入框默认提示。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'new', desc: false },
          desc: { text: '自定义新增内容。不设置默认为空。', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'type', desc: false },
          desc: { text: '输入框类型', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'text', row: false },
        },
        {
          attr: { text: 'icon', desc: false },
          desc: { text: '输入框前面的 icon 图标。请参照：<a class="link" href="#/doc/icon">Icon 字体图标</a>。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'max', desc: false },
          desc: { text: '最多添加多少个', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: 'Infinity', row: false },
        },
        {
          attr: { text: 'min', desc: false },
          desc: { text: '最少添加多少个', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '1', row: false },
        },
        {
          attr: { text: 'className(class-name)', desc: false },
          desc: { text: '自定义的 class 名称。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'inputHandle', desc: false },
          desc: { text: '输入时候触发。返回值：当前对象，当前索引', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'plusHandle', desc: false },
          desc: { text: '增加时候触发。返回值：当前对象，当前索引，所有数据', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'reduceHandle', desc: false },
          desc: { text: '减少时候触发。返回值：当前对象，当前索引，所有数据', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
      ],
      eventTh: [
        {
          title: '事件',
          key: 'name',
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
          name: { text: 'inputHandle', row: false },
          desc: { text: '输入时候触发。', row: false },
          return: { text: '当前对象，当前索引', row: false },
        },
        {
          name: { text: 'plusHandle', row: false },
          desc: { text: '增加时候触发。', row: false },
          return: { text: '当前对象，当前索引，所有数据', row: false },
        },
        {
          name: { text: 'reduceHandle', row: false },
          desc: { text: '减少时候触发。', row: false },
          return: { text: '当前对象，当前索引，所有数据', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
