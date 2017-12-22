<template>
  <article class="datetime">
    <h2 class="h2">Datetime 日期时间</h2>
    <p class="p">日期时间组件，可设置某一天某一时刻。具体用法可参照：<emfe-link :routers="{ name: 'Date' }">Date 日期组件</emfe-link>， <emfe-link :routers="{ name: 'Time' }">Time 时间</emfe-link>。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="datetime.base" href="http://output.jsbin.com/telerus" title="基本用法" info="只需加上 v-model 属性即可。" style="z-index: 5">
      <emfe-datetime v-model="datetimeBase"></emfe-datetime>
      <p class="p" v-show="datetimeBase">您选择的日期时间是：{{datetimeBase}}</p>
    </d-demo>
    <d-demo :code="datetime.filter" href="http://output.jsbin.com/quvevuh" title="筛选" info="设置 disabled-date 回调函数即可 。 筛选条件是今天之前不可选。并且隐藏不可选时间。" style="z-index: 3">
      <emfe-datetime :disabled-date="disabledOpt" :disabled-hours="[1,5,9]" :disabled-minutes="[2,4,10]" :disabled-seconds="[7,8,9]"></emfe-datetime>
    </d-demo>
    <d-demo :code="datetime.disabled" href="http://output.jsbin.com/zatiruj" title="禁用" info="设置 disabled 为 ture 。 1.3.0 开始禁用变灰。" style="z-index: 2">
      <emfe-datetime :disabled="true"></emfe-datetime>
    </d-demo>
    <d-demo :code="datetime.exact" href="http://output.jsbin.com/wepijaz" title="精密设置时间" info="设置 exact 为 hour 。 1.3.0 新增。" style="z-index: 2">
      <emfe-datetime exact="hour"></emfe-datetime>
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
import datetime from '@/views/code/datetime';

export default {
  data() {
    return {
      datetime,
      datetimeBase: '2017/01/02 12:34:56',
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
          attr: { text: 'disabledDate( disabled-date )', desc: false },
          desc: { text: '设置不可选择的日期时间，参数为当前的日期时间，需要返回 Boolean 是否禁用这天。 参数： 要筛选的日期时间。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(datetime) {return false;}', row: false },
        },
        {
          attr: { text: 'timeChoices( time-choices )', desc: false },
          desc: { text: '可选时间范围。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '00:00:00|23:59:59', row: false },
        },
        {
          attr: { text: 'disabled', desc: false },
          desc: { text: '禁用。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'exact', desc: false },
          desc: { text: '精密设置时间。可选值： hour | minute | second 。 1.3.0 新增。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'second', row: false },
        },
        {
          attr: { text: 'invisibleDisable( invisible-disable )', desc: false },
          desc: { text: '是否显示禁选时间。 1.3.0 新增。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'placeholder', desc: false },
          desc: { text: '默认文案。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '选择时间', row: false },
        },
        {
          attr: { text: 'disabledHours( disabled-hours )', desc: false },
          desc: { text: '设置不可选择的小时。组合禁止用户选择某个小时。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'false', row: false },
          default: { text: '[]', row: false },
        },
        {
          attr: { text: 'disabledMinutes( disabled-minutes )', desc: false },
          desc: { text: '设置不可选择的分钟。组合禁止用户选择某个分钟。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'false', row: false },
          default: { text: '[]', row: false },
        },
        {
          attr: { text: 'disabledSeconds( disabled-seconds )', desc: false },
          desc: { text: '设置不可选择的秒数。组合禁止用户选择某个秒数。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'false', row: false },
          default: { text: '[]', row: false },
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
          desc: { text: '选中日期时间触发。 1.3.0 开始建议使用 change 。', row: false },
          return: { text: '日期时间', row: false },
        },
        {
          attr: { text: 'change', desc: false },
          desc: { text: '选中日期时间触发。 1.3.0 新增。', row: false },
          return: { text: '日期时间', row: false },
        },
        {
          attr: { text: 'ok', desc: false },
          desc: { text: '确定触发。', row: false },
          return: { text: '日期时间', row: false },
        },
        {
          attr: { text: 'close', desc: false },
          desc: { text: '关闭触发。', row: false },
          return: { text: '日期时间', row: false },
        },
        {
          attr: { text: 'cancel', desc: false },
          desc: { text: '取消( 点击红叉子 )触发。 1.3.0 开始，数据为空，并且 v-model 为空。 1.3.0 之前返回默认提示文案。', row: false },
          return: { text: '日期时间', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
