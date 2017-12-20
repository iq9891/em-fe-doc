
<template>
  <article class="switch">
    <h2 class="h2">Switch 开关</h2>
    <p class="p">在两种状态间切换时用到的开关选择器。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="switchCode.base" href="http://output.jsbin.com/tipexey" title="数据绑定" info="只需加上 v-model 属性即可。 v-model： 1.3.0 新增。">
      {{switchModel ? '开' : '关'}}
      <emfe-switch v-model="switchModel">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
      </emfe-switch>
    </d-demo>
    <d-demo :code="switchCode.disabled" href="http://output.jsbin.com/tubisu" title="禁用" info="只需加上 disabled 属性即可。">
      <emfe-switch :disabled="true">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
      </emfe-switch>
    </d-demo>
    <d-demo :code="switchCode.interceptor" href="http://output.jsbin.com/fefaqay" title="拦截器" info="只需加上 interceptor 属性可控制是否改变。注意在改变同意之后的 200 秒要恢复 interceptor 为 false，不然会有问题。">
      <emfe-switch :interceptor="interceptor" @toggle="interceptorChange">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
      </emfe-switch>
      <emfe-modal :show="modal" title="拦截一下" @close="modalCancel" @cancel="modalCancel" @ok="modalOk">
        <div slot="modal-main">吃了么？</div>
      </emfe-modal>
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
import switchCode from '@/views/code/switch';

export default {
  data() {
    return {
      switchCode,
      switchModel: true,
      interceptor: false,
      modal: false,
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
          attr: { text: 'value', desc: false },
          desc: { text: '初始状态为开启时，设置 value 为 true。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'disabled', desc: false },
          desc: { text: '禁用', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
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
          attr: { text: 'change', desc: false },
          desc: { text: '开关改变。 1.3.0 新增。', row: false },
          return: { text: '开关状态', row: false },
        },
        {
          attr: { text: 'toggle', desc: false },
          desc: { text: '开关改变。 1.3.0 开始建议使用 change', row: false },
          return: { text: '开关状态', row: false },
        },
      ],
    };
  },
  methods: {
    interceptorChange() {
      this.openModal();
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    modalCancel() {
      this.interceptor = false;
      this.closeModal();
    },
    modalOk() {
      this.interceptor = true;
      this.closeModal();
      // 恢复
      setTimeout(() => {
        this.interceptor = false;
      }, 201);
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
