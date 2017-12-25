<template>
  <article class="countdown">
    <h2 class="h2">Countdown 倒计时</h2>
    <p class="p">设置一个时间，倒着走直到 0 。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="countdown.base" href="http://output.jsbin.com/soxufam" title="基本用法" info="只需设置 time 属性即可。">
      <emfe-countdown className="countdown" :time="time"></emfe-countdown>
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
import countdown from '@/views/code/countdown';

export default {
  data() {
    const date = new Date();
    return {
      countdown,
      time: `${date.getFullYear()}-${date.getMonth() + 2}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
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
          attr: { text: 'time', desc: false },
          desc: { text: '倒计时截止时间，结构： 2017-10-05 10:20:30', row: false },
          type: { text: 'String', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'end', desc: false },
          desc: { text: '结束的时候触发', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'true', row: false },
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
          attr: { text: 'end', desc: false },
          desc: { text: '倒计时结束触发。', row: false },
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
@import "../../assets/styles/views/doc/countdown.scss";
</style>
