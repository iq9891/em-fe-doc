<template>
  <article class="datapanel">
    <h2 class="h2">Datapanel 数据面板</h2>
    <p class="p">用于整个网站的公共底部。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="datapanel.base" href="http://output.jsbin.com/punoya" title="基本用法" info="可以设置各种东西。">
      <emfe-datapanel title="总收集量" icon="fabu" content-text="99" company-text="人">
        <div slot="tipText">一套基于 Vue.js 企业级定制 UI 组件库。承载着千千万万 vue 重度开发者的愿景。</div>
      </emfe-datapanel>
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
import datapanel from '@/views/code/datapanel';

export default {
  data() {
    return {
      datapanel,
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
          attr: { text: 'title', desc: false },
          desc: { text: '数据模板的标题。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'contentText( content-text )', desc: false },
          desc: { text: '数据模板的内容文字。绿色的字。', row: false },
          type: { text: 'String | Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'companyText( company-text )', desc: false },
          desc: { text: '单位文字。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'iconFlg( icon-flg )', desc: false },
          desc: { text: '是否有图标。 通过 type 设置图标类型。 1.3.0 开始可以直接用 icon 设置图标类型，组件根据是否有 icon 属性判断。', row: false },
          type: { text: 'String | Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'type', desc: false },
          desc: { text: '设置图标类型。 通过 iconFlg( icon-flg ) 设置是否有图标。 1.3.0 开始可以直接用 icon 设置图标类型，组件根据是否有 icon 属性判断。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'theme', desc: false },
          desc: { text: '图标提示的主题。可选参数： light | dark 。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'dark', row: false },
        },
        {
          attr: { text: 'placement', desc: false },
          desc: { text: '图标提示的位置。可选参数： top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end 。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'bottom', row: false },
        },
        {
          attr: { text: 'styles', desc: false },
          desc: { text: '设置提示的样式。', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
        },
        {
          attr: { text: 'linkText( link-text )', desc: false },
          desc: { text: '跳转文案。', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
        },
        {
          attr: { text: 'icon', desc: false },
          desc: { text: '设置图标类型。 1.3.0 新增。', row: false },
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
          attr: { text: 'link', desc: false },
          desc: { text: '链接跳转触发', row: false },
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
