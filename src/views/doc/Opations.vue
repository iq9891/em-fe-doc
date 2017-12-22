<template>
  <article class="opations">
    <h2 class="h2">Opations 二级类目</h2>
    <p class="p">可以添加，可以删除，可以一层套一层。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="opations.base" href="http://output.jsbin.com/votuwux" title="基本用法" info="v-model 配置即可。 1.3.0 新增 v-model 。">
      <emfe-opations v-model="opationsData"></emfe-opations>
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
import opations from '@/views/code/opations';

export default {
  data() {
    return {
      opations,
      opationsData: ['1', '2', ''],
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
          attr: { text: 'dataPlaceholder( data-placeholder )', desc: false },
          desc: { text: '选项默认提示。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '选项', row: false },
        },
        {
          attr: { text: 'otherPlaceholder( other-placeholder )', desc: false },
          desc: { text: '其他默认提示。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '其他', row: false },
        },
        {
          attr: { text: 'other', desc: false },
          desc: { text: '数据中是否包含其他。', row: false },
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
          attr: { text: 'down', desc: false },
          desc: { text: '拖拽按下触发', row: false },
          return: { text: '当前数据，当前传入值', row: false },
        },
        {
          attr: { text: 'move', desc: false },
          desc: { text: '拖拽移动触发', row: false },
          return: { text: '当前数据，当前传入值', row: false },
        },
        {
          attr: { text: 'up', desc: false },
          desc: { text: '拖拽抬起触发', row: false },
          return: { text: '-', row: false },
        },
        {
          attr: { text: 'swap', desc: false },
          desc: { text: '交换触发', row: false },
          return: { text: '当前数据，目标索引，当前索引，当前传入值', row: false },
        },
        {
          attr: { text: 'plus', desc: false },
          desc: { text: '添加触发', row: false },
          return: { text: '当前数据，当前索引', row: false },
        },
        {
          attr: { text: 'minus', desc: false },
          desc: { text: '添加触发', row: false },
          return: { text: '当前数据，当前索引', row: false },
        },
        {
          attr: { text: 'otherplus', desc: false },
          desc: { text: '其他添加触发', row: false },
          return: { text: '当前数据，当前索引', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
