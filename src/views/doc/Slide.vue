<template>
  <article class="slide">
    <h2 class="h2">Slide 滑动选择</h2>
    <p class="p">滑动方块选择相应数值。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="slide.base" href="http://output.jsbin.com/kojoyus" title="基本用法" info="通过回调函数检测是否成功。">
      <emfe-slide :percent="78" max-percent="100" slide-left="小" slide-right="大"></emfe-slide>
    </d-demo>
    <d-demo :code="slide.scale" href="http://output.jsbin.com/matezot" title="换算比例" info="根据一个特定比例值换算。">
      <emfe-slide :percent="30" max-percent="100" slide-left="小" slide-right="大" @change="scaleChange"></emfe-slide>
      <p class="p" v-show="scale">您选择的比例是：{{scale}}</p>
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
import slide from '@/views/code/slide';

const step = 10;

export default {
  data() {
    return {
      slide,
      scale: 12,
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
          attr: { text: 'percent', desc: false },
          desc: { text: '进度条进度的value值。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'maxPercent( max-percent )', desc: false },
          desc: { text: '进度条最大值。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'slideWidth', desc: false },
          desc: { text: '进度条的宽度。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'slideLeft', desc: false },
          desc: { text: '进度条的左边描述。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'slideRight', desc: false },
          desc: { text: '进度条的右边描述。', row: false },
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
          attr: { text: 'change', desc: false },
          desc: { text: '拖动滑块触发。', row: false },
          return: { text: '滑动元素和距离左边的距离', row: false },
        },
      ],
    };
  },
  methods: {
    scaleChange(val) {
      const scale = val * 0.01;
      this.scale = (scale * step) + step;
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
