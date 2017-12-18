<template>
  <article>
    <h2 class="h2">Input 输入框</h2>
    <p class="p">在原生 input 控件基础上进行了功能扩展，可以组合使用。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="input.base" href="http://output.jsbin.com/hufekup" title="基本用法" info="可以使用 v-model 实现数据的双向绑定。可以直接设置 class-name 来改变输入框的样式。">
      <emfe-input placeholder="请输入"></emfe-input>
    </d-demo>
    <d-demo :code="input.disabled" href="http://output.jsbin.com/tutemiw" title="禁用" info="通过添加 disabled 属性可设置为不可用状态。">
      <emfe-input :disabled="true" placeholder="请输入"></emfe-input>
    </d-demo>
    <d-demo :code="input.error" href="http://output.jsbin.com/suwehi" title="禁用" info="通过在内容添加 slot 展示报错信息。通过变量操作 errOk 属性，即可操作报错信息是否显示。">
      <emfe-button @click="error = true;">点击报错</emfe-button>
      <br>
      <br>
      <emfe-input :err-ok="error" placeholder="请输入文字！">
        <div slot="error">这是一个错误信息</div>
      </emfe-input>
    </d-demo>
    <d-demo :code="input.icon" href="http://output.jsbin.com/xuzazax" title="icon 版" info="必须设置 icon-ok 属性为 true，设置用 icon-type 设置 icon 类型。">
      <emfe-input :icon-ok="true" icon-type="fabu" placeholder="请输入"></emfe-input>
    </d-demo>
    <d-demo :code="input.vmodel" href="http://output.jsbin.com/gabakux" title="双向绑定" info="设置 v-model 即可实现。">
      <emfe-input v-model="inputVal"></emfe-input>
      <p class="p" v-show="inputVal">输入的值： {{ inputVal }}</p>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">事件</h5>
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
import input from '@/views/code/input';

export default {
  data() {
    return {
      input,
      error: false,
      inputVal: 'EM-FE',
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
          desc: { text: '设置输入框内容', row: false },
          type: { text: 'String | Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'disabled', desc: false },
          desc: { text: '是否禁用此多选框。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'placeholder', desc: false },
          desc: { text: '默认提示', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'readonly', desc: false },
          desc: { text: '是否只读', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'autofocus', desc: false },
          desc: { text: '自动获取输入框', row: false },
          type: { text: 'Boolean', row: false },
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
          attr: { text: 'iconOk(icon-ok)', desc: false },
          desc: { text: '设置是否带有 icon', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'iconType(icon-yype)', desc: false },
          desc: { text: 'icon-ok 为 \'true\' 时，设置 icon 图标的类型', row: false },
          type: { text: 'Number | String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'type', desc: false },
          desc: { text: '定义输入框类型', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'text', row: false },
        },
        {
          attr: { text: 'maxlength', desc: false },
          desc: { text: 'maxlength是定义输入框最长输入长度', row: false },
          type: { text: 'String | Number', row: false },
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
        {
          attr: { text: 'change', desc: false },
          desc: { text: '点击多选框触发。<br>返回值：选则状态。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'focus', desc: false },
          desc: { text: '聚焦触发。<br>返回值：选则状态。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'blur', desc: false },
          desc: { text: '失去焦点触发。<br>返回值：选则状态。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
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
          name: { text: 'blur', row: false },
          desc: { text: '失去焦点的时候触发。', row: false },
          return: { text: '-', row: false },
        },
        {
          name: { text: 'focus', row: false },
          desc: { text: '聚焦的时候出发', row: false },
          return: { text: '-', row: false },
        },
        {
          name: { text: 'change', row: false },
          desc: { text: '改变选择状态时候触发。', row: false },
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
