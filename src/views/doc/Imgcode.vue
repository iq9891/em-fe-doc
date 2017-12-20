<template>
  <article class="imgcode">
    <h2 class="h2">Imgcode 图片验证码</h2>
    <p class="p">图片和验证码的组合。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="imgcode.base" href="http://output.jsbin.com/bominax" title="基本用法" info="click 点击可以换图片，可以数据绑定。">
      <emfe-imgcode :src="src" v-model="model" @click="click"></emfe-imgcode>
      <p class="p" v-show="model">您的输入：{{model}}</p>
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
import imgcode from '@/views/code/imgcode';

export default {
  data() {
    return {
      imgcode,
      model: '',
      src: 'https://static.evente.cn/evente/img/flag/v1/mlxy.jpg',
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
          attr: { text: 'placeholder', desc: false },
          desc: { text: '默认提示内容', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'src', desc: false },
          desc: { text: '图片地址', row: false },
          type: { text: 'String', row: false },
          must: { text: 'true', row: false },
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
          attr: { text: 'click', desc: false },
          desc: { text: '点击触发。', row: false },
          return: { text: '-', row: false },
        },
        {
          attr: { text: 'blur', desc: false },
          desc: { text: '失去焦点触发。', row: false },
          return: { text: '-', row: false },
        },
        {
          attr: { text: 'change', desc: false },
          desc: { text: '变化触发', row: false },
          return: { text: '当前值', row: false },
        },
      ],
    };
  },
  methods: {
    click() {
      this.src = 'https://static.evente.cn/evente/img/flag/v1/de.jpg';
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
