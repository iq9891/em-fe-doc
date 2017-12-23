<template>
  <article class="message">
    <h2 class="h2">Message 全局提示</h2>
    <p class="p">轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="message.base" href="http://output.jsbin.com/tunuse" title="基本用法" info="不同的提示状态：信息(info)、成功(success)、警告(warning)、错误(error)。默认 5s 消失。">
      <emfe-button @click="info">信息</emfe-button>
      <emfe-button @click="warning">警示</emfe-button>
      <emfe-button @click="error">失败</emfe-button>
      <emfe-button @click="success">成功</emfe-button>
    </d-demo>
    <d-demo :code="message.diy" href="http://output.jsbin.com/cikuhal" title="自定义" info="在各方法中添加相应参数。">
      <emfe-button @click="diy">据顶部 100像素。 1000ms 消失。</emfe-button>
    </d-demo>
    <h4 class="h4">API</h4>
    <p class="p">通过直接调用以下方法来使用组件：</p>
    <h5 class="h5">信息方法</h5>
    <d-code type="js">{{ message.info }}</d-code>
    <h5 class="h5">成功方法</h5>
    <d-code type="js">{{ message.success }}</d-code>
    <h5 class="h5">错误方法</h5>
    <d-code type="js">{{ message.error }}</d-code>
    <h5 class="h5">警告方法</h5>
    <d-code type="js">{{ message.warning }}</d-code>
    <p class="p">以上方法隐式的创建及维护 Vue 组件。参数 config 可以是字符串或对象，当为字符串时，直接显示内容，当为对象时，具体说明如下：</p>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <p class="p">另外提供了 全局配置 的方法：</p>
    <d-code type="js">{{ message.config }}</d-code>
    <p class="p">小例子：</p>
    <d-code type="js">{{ message.configDemo }}</d-code>
    <p class="p">注：配置了每个方法的私有参数，那么全局参数将失效。参数 config 是对象，具体说明如下：</p>
    <emfe-table class="table" :columns="configTh" :data="configTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in configTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import message from '@/views/code/message';

export default {
  data() {
    return {
      message,
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
          attr: { text: 'content', desc: false },
          desc: { text: '提示内容。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'delayTime', desc: false },
          desc: { text: '延时几毫秒关闭提示。单位是 毫秒。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '5000', row: false },
        },
        {
          attr: { text: 'style', desc: false },
          desc: { text: '提示框的样式。', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
        },
        {
          attr: { text: 'close', desc: false },
          desc: { text: '关闭时的回调。', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
      ],
      configTh: [
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
      configTd: [
        {
          attr: { text: 'delayTime', desc: false },
          desc: { text: '延时几毫秒关闭提示。单位是 毫秒。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '5000', row: false },
        },
        {
          attr: { text: 'style', desc: false },
          desc: { text: '提示框的样式。', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
        },
        {
          attr: { text: 'close', desc: false },
          desc: { text: '关闭时的回调。', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
      ],
    };
  },
  methods: {
    info() {
      this.$EmfeMessage.info({
        content: '这是一条信息提示',
      });
    },
    warning() {
      this.$EmfeMessage.warning({
        content: '这是一条警示提示',
      });
    },
    error() {
      this.$EmfeMessage.error({
        content: '这是一条错误提示',
      });
    },
    success() {
      this.$EmfeMessage.success({
        content: '这是一条成功提示',
      });
    },
    diy() {
      this.$EmfeMessage.success({
        content: '这是一条成功提示',
        delayTime: 1000,
        style: {
          top: '200px',
        },
      });
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
    dCode: loadcomponents.load('Dcode'),
  },
};
</script>
