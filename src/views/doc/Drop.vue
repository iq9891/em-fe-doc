<template>
  <article class="drop">
    <h2 class="h2">Drop 换位置</h2>
    <p class="p">拖着拖着就换位置了。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="drop.base" href="http://output.jsbin.com/kezuhag" title="基本用法" info="配合样式就可以交换。">
      <emfe-drop class-name="doc-drop" :opations-data="list"></emfe-drop>
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
import drop from '@/views/code/drop';

export default {
  data() {
    return {
      drop,
      list: [
        {
          title: 1,
        },
        {
          title: 2,
        },
        {
          title: 3,
        },
        {
          title: 4,
        },
        {
          title: 5,
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

<style lang="scss">
@import "../../assets/styles/views/doc/drop.scss";
</style>
