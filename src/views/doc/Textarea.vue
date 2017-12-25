<template>
  <article class="textarea">
    <h2 class="h2">Textarea 多行文本</h2>
    <p class="p">用 Vue 对 Textarea 的二次封装。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="textarea.base" href="http://output.jsbin.com/gaseraz" title="数据绑定" info="只需加上 v-model 属性即可。">
      <emfe-textarea v-model="textareaModel"></emfe-textarea>
      <p class="p" v-show="textareaModel">您的输入：{{textareaModel}}</p>
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
import textarea from '@/views/code/textarea';

export default {
  data() {
    return {
      textarea,
      textareaModel: 'EM-FE',
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
          attr: { text: 'blur', desc: false },
          desc: { text: '失去焦点触发。返回当前值。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'focus', desc: false },
          desc: { text: '获取焦点触发。返回当前值。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'change', desc: false },
          desc: { text: '变化触发。返回当前值。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
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
          attr: { text: 'focus', desc: false },
          desc: { text: '获取焦点触发。', row: false },
          return: { text: '当前值', row: false },
        },
        {
          attr: { text: 'blur', desc: false },
          desc: { text: '失去焦点触发。', row: false },
          return: { text: '当前值', row: false },
        },
        {
          attr: { text: 'change', desc: false },
          desc: { text: '变化触发', row: false },
          return: { text: '当前值', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
