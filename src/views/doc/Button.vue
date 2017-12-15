<template>
  <article>
    <h2 class="h2">Button 按钮</h2>
    <p class="p">基础组件，作用于全局。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="button.white" href="http://output.jsbin.com/literel" title="默认白色用法" info="只需知道按钮内容即可">
      <emfe-button>白底</emfe-button>
    </d-demo>
    <d-demo :code="button.whiteDisabled" href="http://output.jsbin.com/lilapit" title="默认白色禁用" info="disabled 为 true 时">
      <emfe-button :disabled="true">白底禁用</emfe-button>
    </d-demo>
    <d-demo :code="button.blue" href="http://output.jsbin.com/sageti" title="默认白色用法" info="theme 为 primary">
      <emfe-button theme="primary">蓝底</emfe-button>
    </d-demo>
    <d-demo :code="button.icon" href="http://output.jsbin.com/tawehaw" title="图标按钮" info="type 为 icon 的具体名字。具体请参照字体图标。">
      <emfe-button type="fabu">图标按钮</emfe-button>
    </d-demo>
    <d-demo :code="button.group" href="http://output.jsbin.com/zuqosit" title="按钮组合" info="将多个 emfe-button 放入 emfe-button-group 内，可实现按钮组合的效果。emfe-button 必须设置 group 为 true 属性。并且 设置 index 索引属性，可以在点击事件中返回当前索引。statu 属性为 true 时，当前 emfe-button 为选中状态。">
      <emfe-button-group>
        <emfe-button :group="true" index="0" statu="true">1</emfe-button>
        <emfe-button :group="true" index="1">20</emfe-button>
        <emfe-button :group="true" index="2">40</emfe-button>
        <emfe-button :group="true" index="3">60</emfe-button>
        <emfe-button :group="true" index="4">80</emfe-button>
        <emfe-button :group="true" index="5">100</emfe-button>
      </emfe-button-group>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">事件</h5>
    <emfe-table class="table" :columns="eventTh" :data="eventTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in eventTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import button from '@/views/code/button';

export default {
  data() {
    return {
      button,
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
          attr: { text: 'theme', desc: false },
          desc: { text: '按钮主题，可选值为 default | primary', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'default', row: false },
        },
        {
          attr: { text: 'type', desc: false },
          desc: { text: '<a class="link" href="/#/doc/icon">字体图标</a>的名字。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'disabled', desc: false },
          desc: { text: '是否按钮禁用', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'statu', desc: false },
          desc: { text: '在组合按钮中，statu 属性为 true 时，当前 emfe-button 为选中状态。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'index', desc: false },
          desc: { text: '设置 index 索引属性，可以在点击事件中返回当前索引。', row: false },
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
          name: { text: 'click', row: false },
          desc: { text: '点击触发。并且是阻止冒泡。', row: false },
          return: { text: '当前索引', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
