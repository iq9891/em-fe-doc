<template>
  <article class="tooltip">
    <h2 class="h2">Tooltip 文字提示</h2>
    <p class="p">简单的滑动提示。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="tooltip.base" href="http://output.jsbin.com/mebebor" title="基本用法" info="提示内容可以嵌套任何东西。">
      <emfe-tooltip>
        <emfe-button slot="render">这是一个带提示的按钮</emfe-button>
        <div slot="tip">
          <p>EM-FE 的组件</p>
          <emfe-button>提示中的按钮</emfe-button>
        </div>
      </emfe-tooltip>
    </d-demo>
    <d-demo :code="tooltip.set" href="http://output.jsbin.com/mebebor" title="设置距离和方向" info="改变与操作区域的距离和方向。">
      <emfe-tooltip offset="40" theme="light" placement="right">
        <emfe-button slot="render">这是一个带提示的按钮</emfe-button>
        <div slot="tip">EM-FE 的组件</div>
      </emfe-tooltip>
    </d-demo>
    <d-demo :code="tooltip.delay" href="http://output.jsbin.com/mebebor" title="延时" info="延时 1 秒。">
      <emfe-tooltip delay="1000">
        <emfe-button slot="render">这是一个带提示的按钮</emfe-button>
        <div slot="tip">EM-FE 的组件</div>
      </emfe-tooltip>
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
import tooltip from '@/views/code/tooltip';

export default {
  data() {
    return {
      tooltip,
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
          desc: { text: '主题设置。可选参数： dark | light 。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'dark', row: false },
        },
        {
          attr: { text: 'arrowStatus', desc: false },
          desc: { text: '小三角是否显示。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'true', row: false },
        },
        {
          attr: { text: 'offset', desc: false },
          desc: { text: '提示框与选中文本之间的距离。', row: false },
          type: { text: 'Number | String', row: false },
          must: { text: 'false', row: false },
          default: { text: '8', row: false },
        },
        {
          attr: { text: 'styles', desc: false },
          desc: { text: '自定义样式。', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
        },
        {
          attr: { text: 'delay', desc: false },
          desc: { text: '延迟显示，单位毫秒。', row: false },
          type: { text: 'Number | String', row: false },
          must: { text: 'false', row: false },
          default: { text: '100', row: false },
        },
        {
          attr: { text: 'placement', desc: false },
          desc: { text: '设置提示方向。可选参数：\'top\', \'top-start\', \'top-end\', \'bottom\', \'bottom-start\', \'bottom-end\', \'left\', \'left-start\', \'left-end\', \'right\', \'right-start\', \'right-end\'', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'top', row: false },
        },
        {
          attr: { text: 'disable', desc: false },
          desc: { text: '禁用。', row: false },
          type: { text: 'Boolean | String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'types', desc: false },
          desc: { text: '触发提示的事件类型。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'hover', row: false },
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
          attr: { text: 'before-show', desc: false },
          desc: { text: '显示之前触发。', row: false },
          return: { text: '-', row: false },
        },
        {
          attr: { text: 'after-show', desc: false },
          desc: { text: '显示之后触发。', row: false },
          return: { text: '-', row: false },
        },
        {
          attr: { text: 'before-hide', desc: false },
          desc: { text: '隐藏之前触发。', row: false },
          return: { text: '-', row: false },
        },
        {
          attr: { text: 'after-hide', desc: false },
          desc: { text: '隐藏之后触发。', row: false },
          return: { text: '-', row: false },
        },
        {
          attr: { text: 'popper', desc: false },
          desc: { text: 'click点击事件触发。', row: false },
          return: { text: '当前状态', row: false },
        },
      ],
    };
  },
  methods: {
    tooltipSuc() {
      this.$EmfeMessage.success({
        content: '复制成功',
      });
    },
    tooltipFail() {
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
