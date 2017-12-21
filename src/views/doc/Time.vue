<template>
  <article class="time">
    <h2 class="h2">Time 时间</h2>
    <p class="p">时间组件，可设置某一时刻。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="time.base" href="http://output.jsbin.com/xupasaj" title="基本用法" info="只需加上 v-model 属性即可。">
      <emfe-time v-model="timeBase"></emfe-time>
      <p class="p" v-show="timeBase">您选择的时间是：{{timeBase}}</p>
    </d-demo>
    <d-demo :code="time.confirm" href="http://output.jsbin.com/rifofaj" title="无确认" info="confirm 为 false，并没有确认按钮。" style="z-index: 4">
      <emfe-time :confirm="false"></emfe-time>
    </d-demo>
    <d-demo :code="time.choices" href="http://output.jsbin.com/corefub" title="一段时间内可选" info="设置 time-choices 在一段时间内可选。" style="z-index: 3">
      <emfe-time time-choices="12:34:56|17:29:39"></emfe-time>
    </d-demo>
    <d-demo :code="time.filter" href="http://output.jsbin.com/pufegop" title="单独设置某个不可选" info="设置 disabled-* 某单位不可选。" style="z-index: 3">
      <emfe-time :disabled-hours="[1,5,9]" :disabled-minutes="[2,4,10]" :disabled-seconds="[7,8,9]"></emfe-time>
    </d-demo>
    <d-demo :code="time.open" href="http://output.jsbin.com/maxiyo" title="直接展示" info="设置 open 为 ture ， confirm 为 false 。" style="z-index: 3">
      <emfe-time :open="true" :confirm="false"></emfe-time>
    </d-demo>
    <d-demo :code="time.disabled" href="http://output.jsbin.com/jumuxel" title="禁用" info="设置 disabled 即可。 1.3.0 开始禁用变灰。" style="z-index: 3">
      <emfe-time :disabled="true"></emfe-time>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">方法</h5>
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
import time from '@/views/code/time';

export default {
  data() {
    return {
      time,
      timeBase: '12:12:12',
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
          attr: { text: 'placeholder', desc: false },
          desc: { text: '默认文案。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '选择时间', row: false },
        },
        {
          attr: { text: 'confirm', desc: false },
          desc: { text: '是否显示底部控制栏，开启后，选择完时间自动关闭，或者点击其他地方关闭，没有确定按钮。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'true', row: false },
        },
        {
          attr: { text: 'open', desc: false },
          desc: { text: '手动控制时间选择器的显示状态，true 为显示，false 为需要点击显示。建议配合 confirm 和相关事件一起使用。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
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
          desc: { text: '选中时间触发。 1.3.0 开始建议使用 change 。', row: false },
          return: { text: '时间', row: false },
        },
        {
          attr: { text: 'change', desc: false },
          desc: { text: '选中时间触发。 1.3.0 新增。', row: false },
          return: { text: '时间', row: false },
        },
        {
          attr: { text: 'ok', desc: false },
          desc: { text: '确定触发。', row: false },
          return: { text: '时间', row: false },
        },
        {
          attr: { text: 'close', desc: false },
          desc: { text: '关闭触发。', row: false },
          return: { text: '时间', row: false },
        },
        {
          attr: { text: 'cancel', desc: false },
          desc: { text: '取消( 点击红叉子 )触发。', row: false },
          return: { text: '时间', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
