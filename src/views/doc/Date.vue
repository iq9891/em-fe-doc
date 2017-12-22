<template>
  <article class="date">
    <h2 class="h2">Date 日期</h2>
    <p class="p">日期组件，可设置某一天。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="date.base" href="http://output.jsbin.com/yeliluw" title="基本用法" info="只需加上 v-model 属性即可。" style="z-index: 5">
      <emfe-date v-model="dateBase"></emfe-date>
      <p class="p" v-show="dateBase">您选择的日期是：{{dateBase}}</p>
    </d-demo>
    <d-demo :code="date.confirm" href="http://output.jsbin.com/bavurep" title="无确认" info="confirm 设置为 false 即可。" style="z-index: 4">
      <emfe-date :confirm="false"></emfe-date>
    </d-demo>
    <d-demo :code="date.filter" href="http://output.jsbin.com/rarewun" title="筛选" info="设置 disabled-date 回调函数即可 。 筛选条件是今天之前不可选。" style="z-index: 3">
      <emfe-date :disabled-date="disabledOpt"></emfe-date>
    </d-demo>
    <d-demo :code="date.disabled" href="http://output.jsbin.com/puqihoh" title="禁用" info="设置 disabled 为 ture 。 1.3.0 开始禁用变灰。" style="z-index: 2">
      <emfe-date :disabled="true"></emfe-date>
    </d-demo>
    <d-demo :code="date.open" href="http://output.jsbin.com/quvenih" title="直接展示" info="设置 open 为 ture ， confirm 为 false 。" style="z-index: 1">
      <emfe-date :open="true" :confirm="false"></emfe-date>
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
import date from '@/views/code/date';

export default {
  data() {
    return {
      date,
      dateBase: '2017/01/02',
      disabledOpt: disabledDate => disabledDate && disabledDate.valueOf() < Date.now() - 86400000,
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
          attr: { text: 'panelstyle', desc: false },
          desc: { text: '自定义面板样式', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
        },
        {
          attr: { text: 'format', desc: false },
          desc: { text: '中间连接的符号', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '/', row: false },
        },
        {
          attr: { text: 'disabled', desc: false },
          desc: { text: '禁用', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'placeholder', desc: false },
          desc: { text: '默认文案', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '选择日期', row: false },
        },
        {
          attr: { text: 'confirm', desc: false },
          desc: { text: '是否显示底部控制栏，开启后，选择完日期自动关闭，或者点击其他地方关闭，没有确定按钮。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'true', row: false },
        },
        {
          attr: { text: 'open', desc: false },
          desc: { text: '手动控制日期选择器的显示状态，true 为显示，false 为需要点击显示。建议配合 confirm 和相关事件一起使用。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'disabledDate( disabled-date )', desc: false },
          desc: { text: '设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天。 参数： 要筛选的日期。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(date) {return false;}', row: false },
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
          attr: { text: 'choice', desc: false },
          desc: { text: '选中日期触发。 1.3.0 开始建议使用 change 。', row: false },
          return: { text: '日期', row: false },
        },
        {
          attr: { text: 'change', desc: false },
          desc: { text: '选中日期触发。 1.3.0 新增。', row: false },
          return: { text: '日期', row: false },
        },
        {
          attr: { text: 'ok', desc: false },
          desc: { text: '确定触发。', row: false },
          return: { text: '日期', row: false },
        },
        {
          attr: { text: 'close', desc: false },
          desc: { text: '关闭触发。', row: false },
          return: { text: '日期', row: false },
        },
        {
          attr: { text: 'cancel', desc: false },
          desc: { text: '取消( 点击红叉子 )触发。 1.3.0 开始，数据为空，并且 v-model 为空。 1.3.0 之前返回默认提示文案。', row: false },
          return: { text: '日期', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
