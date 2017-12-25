<template>
  <article class="modal">
    <h2 class="h2">Modal 对话框</h2>
    <p class="p">简单的滑动提示。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="modal.base" href="http://output.jsbin.com/badohuj" title="基本用法" info="提示内容可以嵌套任何东西。" :style="{'z-index': modalIndex}">
      <emfe-button @click="modalBtn">我是弹框</emfe-button>
      <emfe-modal :show="modalShow" title="我是提示框" @close="modalClose" @cancel="modalClose" @ok="modalClose" okText="保存">
        <div slot="modal-main">
          <div class="emfe-modal-main-input">
            <h6 class="emfe-modal-main-input-title">标题</h6>
            <emfe-input placeholder="表单标题"></emfe-input>
          </div>
        </div>
      </emfe-modal>
    </d-demo>
    <d-demo :code="modal.tip" href="http://output.jsbin.com/yufisar" title="基本用法" info="提示内容可以嵌套任何东西。" :style="{'z-index': tipIndex}">
      <emfe-button @click="tipBtn">我是弹框</emfe-button>
      <emfe-modal :show="tipShow" title="我是提示框" @close="tipClose" @cancel="tipClose" @ok="tipClose" okText="保存" :cancelFlg="false" :tip="true">
        <div slot="modal-main">
          这是一段很长的提示，他真的很长很长很长。确认删除表单数据？
        </div>
      </emfe-modal>
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
import modal from '@/views/code/modal';

export default {
  data() {
    return {
      modal,
      modalShow: false,
      modalIndex: 1,
      tipShow: false,
      tipIndex: 1,
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
          attr: { text: 'show', desc: false },
          desc: { text: '控制遮罩层显示隐藏。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'width', desc: false },
          desc: { text: '弹出框的宽度。不带 px 。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '440', row: false },
        },
        {
          attr: { text: 'title', desc: false },
          desc: { text: '标题。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'cancelText', desc: false },
          desc: { text: '弹出框取消按钮文案。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '取消', row: false },
        },
        {
          attr: { text: 'okText', desc: false },
          desc: { text: '弹出框取消按钮文案。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '确定', row: false },
        },
        {
          attr: { text: 'cancelFlg', desc: false },
          desc: { text: '是否显示取消按钮。', row: false },
          type: { text: 'String | Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'true', row: false },
        },
        {
          attr: { text: 'okFlg', desc: false },
          desc: { text: '是否显示取消按钮。', row: false },
          type: { text: 'String | Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'true', row: false },
        },
        {
          attr: { text: 'tip', desc: false },
          desc: { text: '内容是否只是一行提示文字。', row: false },
          type: { text: 'Boolean', row: false },
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
          attr: { text: 'cancel', desc: false },
          desc: { text: '点击关闭按钮触发。', row: false },
          return: { text: '-', row: false },
        },
        {
          attr: { text: 'cancel', desc: false },
          desc: { text: '点击取消按钮触发。', row: false },
          return: { text: '-', row: false },
        },
        {
          attr: { text: 'ok', desc: false },
          desc: { text: '点击确认按钮触发。', row: false },
          return: { text: '-', row: false },
        },
      ],
    };
  },
  methods: {
    modalBtn() {
      this.modalShow = true;
      this.modalIndex = 3;
    },
    modalClose() {
      this.modalShow = false;
      this.modalIndex = 1;
    },
    tipBtn() {
      this.tipShow = true;
      this.tipIndex = 3;
    },
    tipClose() {
      this.tipShow = false;
      this.tipIndex = 1;
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
