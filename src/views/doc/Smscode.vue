<template>
  <article class="smscode">
    <h2 class="h2">Smscode 短信验证码</h2>
    <p class="p">发短信并输入验证码。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="smscode.base" href="http://output.jsbin.com/sogegan" title="基本用法" info="click 点击可以换图片，可以数据绑定，可以设置倒计时时间。">
      <emfe-smscode v-model="modelBase" times="22" @click="clickBase" :time-start="startBase" :end="timeEndBase"></emfe-smscode>
      <p class="p" v-show="modelBase">您的输入：{{modelBase}}</p>
    </d-demo>
    <d-demo :code="smscode.error" href="http://output.jsbin.com/bifila" title="报错" info="通过在内容添加 slot 展示报错信息。通过变量操作 err-ok 属性，即可操作报错信息是否显示。">
      <emfe-button @click="error = true;">点击报错</emfe-button>
      <br>
      <br>
      <emfe-smscode :err-ok="error" @click="clickError" :time-start="startError" :end="timeEndError">
        <div slot="error">这是一个错误信息</div>
      </emfe-smscode>
    </d-demo>
    <d-demo :code="smscode.icon" href="http://output.jsbin.com/nobibup" title="图标" info="设置 icon 即可。">
      <emfe-smscode icon="fabu"></emfe-smscode>
    </d-demo>
    <d-demo :code="smscode.disabled" href="http://output.jsbin.com/jiravoz" title="禁用" info="设置 disabled 即可。">
      <emfe-smscode :disabled="true"></emfe-smscode>
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
import smscode from '@/views/code/smscode';

export default {
  data() {
    return {
      smscode,
      modelBase: 13810902078,
      startBase: false,
      error: false,
      startError: false,
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
          default: { text: '请输入验证码', row: false },
        },
        {
          attr: { text: 'title', desc: false },
          desc: { text: '按钮的文案', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '获取验证码', row: false },
        },
        {
          attr: { text: 'icon', desc: false },
          desc: { text: 'icon 类型', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'disabled', desc: false },
          desc: { text: '禁用', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'errorTitle', desc: false },
          desc: { text: '报错按钮文案', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '重试', row: false },
        },
        {
          attr: { text: 'type', desc: false },
          desc: { text: '输入框类型', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'number', row: false },
        },
        {
          attr: { text: 'maxlength', desc: false },
          desc: { text: '输入内容的长度。只支持 number 类型。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: 'Infinity', row: false },
        },
        {
          attr: { text: 'times', desc: false },
          desc: { text: '倒计时时间。', row: false },
          type: { text: 'Number | String', row: false },
          must: { text: 'false', row: false },
          default: { text: '60', row: false },
        },
        {
          attr: { text: 'timeStart', desc: false },
          desc: { text: '控制是否开启定时器。', row: false },
          type: { text: 'String | Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'errOk(err-ok)', desc: false },
          desc: { text: 'errOk 是判断输入是否正确，为 \'true\' 时，边框为红色，提示错误信息。信息必须 slot 为 error 设置。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'click', desc: false },
          desc: { text: '点击验证码', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'change', desc: false },
          desc: { text: '输入时触发。返回当前值。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'end', desc: false },
          desc: { text: '倒计时结束触发。返回 false。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
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
        {
          attr: { text: 'end', desc: false },
          desc: { text: '倒计时结束触发', row: false },
          return: { text: 'false', row: false },
        },
      ],
    };
  },
  methods: {
    clickBase() {
      this.startBase = true;
    },
    timeEndBase(val) {
      this.startBase = val;
    },
    clickError() {
      this.startError = true;
    },
    timeEndError(val) {
      this.startError = val;
    },
  },
  watch: {
    startBase(val, oldVal) {
      if (val !== oldVal) {
        this.startBase = val;
      }
    },
    startError(val, oldVal) {
      if (val !== oldVal) {
        this.startError = val;
      }
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
