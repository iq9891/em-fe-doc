<template>
  <article class="iscroll">
    <h2 class="h2">Iscroll 滚动</h2>
    <p class="p">本组件是 iscroll5 的二次封装。 参照地址：<a href="http://iscrolljs.com" class="link">http://iscrolljs.com</a>。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="iscroll.base" href="http://output.jsbin.com/zekewuy" title="基本用法" info="加上 options 配置，最外层给 position: relative;height: 100px;overflow: hidden; 即可使用，三种样式缺一不可。">
      <emfe-iscroll ref="iscroll" class="iscroll-wrap" :options="config">
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
      </emfe-iscroll>
    </d-demo>
    <d-demo :code="iscroll.act" href="http://output.jsbin.com/qusafo" title="交互用法" info="用 $ref 获取 iscroll 的原生对象。">
      <emfe-iscroll ref="iscroll2" class="iscroll-wrap" :options="config">
        <p>
          <br>
          <emfe-button @click="scrollToTop">点击滚动到 这里</emfe-button>
          <br>
          <br>
        </p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p><span style="color: #f00;">这里</span></p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
        <p>一些不必要的内容</p>
      </emfe-iscroll>
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
import iscroll from '@/views/code/iscroll';

export default {
  data() {
    return {
      iscroll,
      config: {
        scrollbars: true,
        mouseWheel: true,
        click: false,
        preventDefault: true,
      },
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
          attr: { text: 'options', desc: false },
          desc: { text: 'iScroll 相关配置', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
        },
        {
          attr: { text: 'wrapperClass', desc: false },
          desc: { text: '外层的 class 名称', row: false },
          type: { text: 'Array | Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
        },
        {
          attr: { text: 'wrapperStyle', desc: false },
          desc: { text: '外层的 样式', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
        },
        {
          attr: { text: 'scrollerClass', desc: false },
          desc: { text: '滚动层的 class 名称', row: false },
          type: { text: 'Array | Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
        },
        {
          attr: { text: 'scrollerStyle', desc: false },
          desc: { text: '滚动层的 样式', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
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
          attr: { text: 'pullUp', desc: false },
          desc: { text: '向上滚动结束触发', row: false },
          return: { text: 'event，iscroll', row: false },
        },
        {
          attr: { text: 'pullDown', desc: false },
          desc: { text: '向下滚动结束触发', row: false },
          return: { text: 'event，iscroll', row: false },
        },
        {
          attr: { text: 'beforeScrollStart', desc: false },
          desc: { text: '滚动开始之前触发', row: false },
          return: { text: 'iscroll 对象', row: false },
        },
        {
          attr: { text: 'scrollCancel', desc: false },
          desc: { text: '滚动取消触发', row: false },
          return: { text: 'iscroll 对象', row: false },
        },
        {
          attr: { text: 'scrollStart', desc: false },
          desc: { text: '滚动开始触发', row: false },
          return: { text: 'iscroll 对象', row: false },
        },
        {
          attr: { text: 'scrollEnd', desc: false },
          desc: { text: '滚动结束触发', row: false },
          return: { text: 'iscroll 对象', row: false },
        },
        {
          attr: { text: 'scroll', desc: false },
          desc: { text: '滚动触发', row: false },
          return: { text: 'iscroll 对象', row: false },
        },
        {
          attr: { text: 'flick', desc: false },
          desc: { text: '轻弹触发', row: false },
          return: { text: 'iscroll 对象', row: false },
        },
        {
          attr: { text: 'zoomStart', desc: false },
          desc: { text: '变焦开始触发', row: false },
          return: { text: 'iscroll 对象', row: false },
        },
        {
          attr: { text: 'zoomEnd', desc: false },
          desc: { text: '变焦结束触发', row: false },
          return: { text: 'iscroll 对象', row: false },
        },
      ],
    };
  },
  methods: {
    scrollToTop() {
      const myScroll = this.$refs.iscroll2;
      const scrollEle = myScroll.$el;
      myScroll.scrollToElement(scrollEle.querySelector('p:nth-child(11)'), null, null, true);
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/views/doc/iscroll.scss";
</style>
