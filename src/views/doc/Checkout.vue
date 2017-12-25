<template>
  <article class="checkout">
    <h2 class="h2">Checkout 多选</h2>
    <p class="p">基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="checkout.base" href="http://output.jsbin.com/cavome" title="单独使用" info="使用 v-model 可以双向绑定数据。">
      <emfe-checkout v-model="checkoutStatus1" title="EM-FE"></emfe-checkout>
      <br>
      {{checkoutStatus1 ? '选中' : '未选中'}}
    </d-demo>
    <d-demo :code="checkout.disabled" href="http://output.jsbin.com/hekeqil" title="禁用" info="通过设置 disabled 属性来禁用多选框。 1.3.0 开始建议使用 disabled 属性设置禁用。">
      <emfe-checkout :disabled="true" title="EM-FE"></emfe-checkout>
    </d-demo>
    <d-demo :code="checkout.tip" href="http://output.jsbin.com/qarasut" title="提示" info="通过设置 tip 属性。">
      <emfe-checkout className="checkout" title="EM-FE" tip="EM-FE 是企业级定制 UI 库"></emfe-checkout>
    </d-demo>
    <d-demo :code="checkout.show" href="http://output.jsbin.com/dogoqu" title="显示隐藏内容" info="通过设置 slideShow 属性展开隐藏的内容。多选在一横行只需设置 inline 属性。通过设置 value 属性操作默认是否选中。">
      <emfe-checkout :slide-show="true" :value="true" title="EM-FE 的组件">
        <div slot="slide">
          <emfe-checkout title="单选" inline="true"></emfe-checkout>
          <emfe-checkout title="输入框" inline="true"></emfe-checkout>
          <emfe-checkout title="多选" inline="true"></emfe-checkout>
          <emfe-checkout title="下拉" inline="true"></emfe-checkout>
        </div>
      </emfe-checkout>
    </d-demo>
    <d-demo :code="checkout.no" href="http://output.jsbin.com/citajew" title="选中不可选" info="通过设置 checkedForever 属性。">
      <emfe-checkout :value="true" title="选中不可选" :checkedForever="true"></emfe-checkout>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">事件</h5>
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
import checkout from '@/views/code/checkout';

export default {
  data() {
    return {
      checkout,
      checkoutStatus1: true,
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
          attr: { text: 'slideShow(slide-show)', desc: false },
          desc: { text: '选中后是否有展示自定义内容', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'disable', desc: false },
          desc: { text: '是否禁用此多选框。1.3.0 开始建议使用 disabled 。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'disabled', desc: false },
          desc: { text: '是否禁用此多选框。1.3.0 新增。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'title', desc: false },
          desc: { text: '多选框的描述标题', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'stop', desc: false },
          desc: { text: '是否阻止冒泡', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'true', row: false },
        },
        {
          attr: { text: 'value', desc: false },
          desc: { text: '是否选中', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'tip', desc: false },
          desc: { text: '问号提示文案', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'placement', desc: false },
          desc: { text: '提示框出现的位置。<br>可选值为： top | top-start | top-end | bottom | bottom-start | bottom-end | left | left-start | left-end | right | right-start | right-end', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'checkedForever', desc: false },
          desc: { text: '选中后禁用。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'change', desc: false },
          desc: { text: '点击多选框触发。<br>返回值：选则状态，设置的标题(设置的 title 属性)，当前索引(设置的 index 属性)。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'name', desc: false },
          desc: { text: '设置 name', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'index', desc: false },
          desc: { text: '设置索引', row: false },
          type: { text: 'Number | String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'inline', desc: false },
          desc: { text: '复选框是否一行显示', row: false },
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
          title: '事件',
          key: 'name',
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
          name: { text: 'click', row: false },
          desc: { text: '点击触发。并且是阻止冒泡。', row: false },
          return: { text: '选则状态', row: false },
        },
        {
          name: { text: 'checked', row: false },
          desc: { text: '改变选择状态时候触发。1.3.0 开始建议使用 change', row: false },
          return: { text: '选则状态，设置的标题(设置的 title 属性)，当前索引(设置的 index 属性)', row: false },
        },
        {
          name: { text: 'change', row: false },
          desc: { text: '改变选择状态时候触发。1.3.0 新增。', row: false },
          return: { text: '选则状态，设置的标题(设置的 title 属性)，当前索引(设置的 index 属性)', row: false },
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
@import "../../assets/styles/views/doc/checkout.scss";
</style>
