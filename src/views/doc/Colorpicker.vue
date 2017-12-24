<template>
  <article class="color">
    <h2 class="h2">Color 颜色选择器</h2>
    <p class="p">选择您想选择的任意颜色。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="colorCode.base" href="http://output.jsbin.com/mamazi" title="基本用法" info="通过回调函数检测是否成功。">
      <emfe-color v-model="color"></emfe-color>
      <p class="p" v-show="color">{{color}}是您选择的颜色。</p>
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
import colorCode from '@/views/code/colorpicker';

export default {
  data() {
    return {
      colorCode,
      color: '00ff00',
      status: '',
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
          attr: { text: 'btnText', desc: false },
          desc: { text: '打开颜色选择器的按钮文案。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '打开', row: false },
        },
        {
          attr: { text: 'subText', desc: false },
          desc: { text: '关闭颜色选择器按钮的文案', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '确定', row: false },
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
          attr: { text: 'close', desc: false },
          desc: { text: '关闭颜色选择器', row: false },
          return: { text: 'hex 格式颜色值', row: false },
        },
        {
          attr: { text: 'ok', desc: false },
          desc: { text: '确定按钮触发', row: false },
          return: { text: 'hex 格式颜色值', row: false },
        },
        {
          attr: { text: 'change', desc: false },
          desc: { text: '改变颜色触发', row: false },
          return: { text: 'hex 格式颜色值', row: false },
        },
      ],
    };
  },
  methods: {
    ok(color) {
      this.color = color;
      this.status = '确定';
    },
    cancel() {
      this.status = '取消';
    },
    change(color) {
      this.ok(color);
      this.status = '移动中';
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
