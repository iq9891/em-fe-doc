<template>
  <article class="panel">
    <h2 class="h2">Panel 面板</h2>
    <p class="p">数据展示的板子。 1.3.0 开始，可以每条控制是否有开关，开关是否开启，是否有 icon 。可以统一设置是否有开关。每条数据中的属性优先组件统一设置属性。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="panel.base" href="http://output.jsbin.com/bifeguw" title="基本用法" info="属性中设置，都是针对于全局的。比如 type 为 babu ，那么所有 icon 类型都是发布。与数据中的属性冲突，数据属性优先。">
      <emfe-panel :data="panelSame" type="fabu" :switch-type="true" :switch-ok="true"></emfe-panel>
    </d-demo>
    <d-demo :code="panel.diy" href="http://output.jsbin.com/kukefed" title="基本用法" info="只需加上 data 属性即可。">
      <emfe-panel :data="panelDiy"></emfe-panel>
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
import panel from '@/views/code/panel';

export default {
  data() {
    return {
      panel,
      panelDiy: [
        { text: '累计消费次数', cont: '24次', switchOk: true, type: 'fabu' },
        { text: '累计消费金额', cont: '￥20300.00', switchOk: true, switchState: true, type: 'erweima' },
        { text: '平均消费', cont: '￥210.00', type: 'duoxuan' },
        { text: '平均消费', cont: '￥210.00' },
      ],
      panelSame: [
        { text: '累计消费次数', cont: '2次', type: 'duoxuan' },
        { text: '累计消费金额', cont: '￥200.00' },
        { text: '平均消费', cont: '￥100.00' },
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
          attr: { text: 'data', desc: false },
          desc: { text: '面板数据。数据结构：[{ text: \'some\', cont: \'some\', switchOk: true, switchState: true, type: \'fabu\' },] 。 <br> text： 左侧文案。 <br> cont：右侧文案。<br> switchOk：是否有开关。<br> switchState：开关是否开启。<br> type：icon 类型。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'false', row: false },
          default: { text: '[]', row: false },
        },
        {
          attr: { text: 'type', desc: false },
          desc: { text: '统一设置 icon 类型。 如果与数据中 type 冲突，优先数据中的 type 。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'false', row: false },
          default: { text: '[]', row: false },
        },
        {
          attr: { text: 'switchOk( switch-ok )', desc: false },
          desc: { text: '统一设置是否有开关。 如果与数据中 switchOk 冲突，优先数据中的 switchOk 。 1.3.0 新增。', row: false },
          type: { text: 'Boolean | String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'switchType( switch-type )', desc: false },
          desc: { text: '统一设置开关状态。 如果与数据中 switchType 冲突，优先数据中的 switchType 。 1.3.0 开始建议使用 switchState 。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'switchState( switch-state )', desc: false },
          desc: { text: '统一设置开关状态。 如果与数据中 switchState 冲突，优先数据中的 switchState 。 1.3.0 新增。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
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
          attr: { text: 'switchs', desc: false },
          desc: { text: '开关改变状态触发。 1.3.0 开始建议使用 change 方法。', row: false },
          return: { text: '当前状态，当前索引，当前数据', row: false },
        },
        {
          attr: { text: 'icon-click', desc: false },
          desc: { text: '点击 icon 触发。 1.3.0 开始建议使用 click 方法。', row: false },
          return: { text: '当前索引，当前数据', row: false },
        },
        {
          attr: { text: 'change', desc: false },
          desc: { text: '开关改变状态触发。 1.3.0 新增。', row: false },
          return: { text: '当前状态，当前索引，当前数据', row: false },
        },
        {
          attr: { text: 'click', desc: false },
          desc: { text: '点击 icon 触发。 1.3.0 新增。', row: false },
          return: { text: '当前索引，当前数据', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
