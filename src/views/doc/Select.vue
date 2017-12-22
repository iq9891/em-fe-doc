<template>
  <article class="select">
    <h2 class="h2">Select 下拉框</h2>
    <p class="p">用 Vue 模拟原生 select 。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="select.base" href="http://output.jsbin.com/kubefet" title="基本用法" info="只需加上 datas 属性即可。 datas 数据结构：[{ name: '1', disabled: false,}]。 其中 name 是下拉选项的名字。 disabled 是否禁用，如果不禁用可不传。 1.3.0 之前 type 设定为 default ，才有单选模式。">
      <emfe-select :datas="radio"></emfe-select>
    </d-demo>
    <d-demo :code="select.checkbox" href="http://output.jsbin.com/metinop" title="多选" info="只需加上 datas 属性即可。 datas 数据结构：[{ name: '1', checked: false, disabled: false,}]。 其中 name 是下拉选项的名字。 checked 是否选中，如果不禁用可不传。 disabled 是否禁用，如果不禁用可不传。 type 设定为 checkbox ，才有多选模式。 checkVals 是下拉框默认显示的值。如果 datas 里面设置了 checked 为 true，那么得设置，不然显示会有问题。">
      <emfe-select :datas="checkbox" type="checkbox" :check-vals="checkboxVals"></emfe-select>
    </d-demo>
    <d-demo :code="select.error" href="http://output.jsbin.com/seziwix" title="报错" info="通过 err-ok 的属性设置报错是否显示。">
      <emfe-button @click="isError = true;">点击报错</emfe-button>
      <br>
      <br>
      <emfe-select :err-ok="isError" :datas="error">
        <div slot="error">错误提示</div>
      </emfe-select>
    </d-demo>
    <d-demo :code="select.news" href="http://output.jsbin.com/zugorit" title="新建" info="通过 news 的属性设置新建模式。 1.3.0 开始支持 add 方法，用于保存事件触发。 1.3.0 开始支持 news 属性直接设置带有保存按钮的模式。">
      <emfe-select :datas="news" news @add="add"></emfe-select>
    </d-demo>
    <d-demo :code="select.tips" href="http://output.jsbin.com/vubocay" title="提示" info="通过 tips 的属性设置。">
      <emfe-select :datas="tips" tip="提示文字" placement="right"></emfe-select>
    </d-demo>
    <d-demo :code="select.disabled" href="http://output.jsbin.com/heciroc" title="禁用" info="通过 disabled 的属性设置。">
      <emfe-select :datas="[]" :disabled="true"></emfe-select>
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
import select from '@/views/code/select';

export default {
  data() {
    return {
      select,
      radio: [
        {
          name: '可用',
          disabled: false,
        },
        {
          name: '可用',
          disabled: false,
        },
        {
          name: '禁用',
          disabled: true,
        },
      ],
      checkboxVals: ['可选并选中', '不可选并选中'],
      checkbox: [
        {
          name: '可选并选中',
          checked: true,
        },
        {
          name: '可选并未选中',
        },
        {
          name: '不可选并未选中',
          disabled: true,
        },
        {
          name: '不可选并选中',
          checked: true,
          disabled: true,
        },
      ],
      isError: false,
      error: [
        {
          name: '报错文字1',
        },
        {
          name: '报错文字2',
        },
      ],
      news: [
        {
          name: '新建文字1',
        },
        {
          name: '新建文字2',
        },
      ],
      tips: [
        {
          name: '提示文字1',
        },
        {
          name: '提示文字2',
        },
      ],
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
          attr: { text: 'type', desc: false },
          desc: { text: '下拉框类型。 可选值：checkbox | default | icon 。 1.3.0 之前 type 设定为 default ，才有单选模式。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'default', row: false },
        },
        {
          attr: { text: 'seleStu', desc: false },
          desc: { text: '有没有新建。 可选值：newList。1.3.0 开始，建议 news 属性。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'news', desc: false },
          desc: { text: '有没有新建。 1.3.0 新增。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'disabled', desc: false },
          desc: { text: '禁用', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'datas', desc: false },
          desc: { text: '数据。 type 为 default 的时候，数据格式为：[{ name: \'下拉文字\', disabled: false }]。 其中 name 是下拉选项的名字。 disabled 是否禁用，如果不禁用可不传。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'addText', desc: false },
          desc: { text: '新建模式中，新建输入框的默认提示文字。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '添加标签', row: false },
        },
        {
          attr: { text: 'selectText', desc: false },
          desc: { text: '下拉框的默认提示文字。', row: false },
          type: { text: 'String | Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '选择标签', row: false },
        },
        {
          attr: { text: 'errOk(err-ok)', desc: false },
          desc: { text: 'errOk 是判断输入是否正确，为 \'true\' 时，边框为红色，提示错误信息。信息必须 slot 为 error 设置。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'checkVals(check-vals)', desc: false },
          desc: { text: '下拉框默认显示的数据。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'false', row: false },
          default: { text: '[]', row: false },
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
          desc: { text: '下拉框选中触发。 1.3.0 新增。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'getDefData', desc: false },
          desc: { text: '选中下拉选项(type = icon|default)。时候触发。 1.3.0 开始建议使用 change 属性。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'close', desc: false },
          desc: { text: '关闭时触发。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'addDataCheck', desc: false },
          desc: { text: '多选添加数据时触发。 1.3.0 开始，建议使用 add 属性。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'addDataRadio', desc: false },
          desc: { text: '单选添加数据时触发。 1.3.0 开始，建议使用 add 属性。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'add', desc: false },
          desc: { text: '添加时触发。 1.3.0 新增。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'delopt', desc: false },
          desc: { text: '多选模式，不选中的时候触发。 1.3.0 开始，建议使用 change 方法。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'checkedopt', desc: false },
          desc: { text: '多选模式，选中的时候触发。 1.3.0 开始，建议使用 change 方法。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'getAllData', desc: false },
          desc: { text: '多选模式，选中下拉选项的时候触发。 1.3.0 开始，建议使用 change 方法。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'getDefData', desc: false },
          desc: { text: '单选或者 icon 模式，选中下拉选项的时候触发。 1.3.0 开始，建议使用 change 方法。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'clickInput', desc: false },
          desc: { text: '点击下拉框事件。 1.3.0 开始，建议使用 click 方法。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'click', desc: false },
          desc: { text: '点击下拉框事件。 1.3.0 新增。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function(){}', row: false },
        },
        {
          attr: { text: 'tip', desc: false },
          desc: { text: '提示。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'placement', desc: false },
          desc: { text: '提示的显示方向。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'right', row: false },
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
          desc: { text: '点击下拉框事件。 1.3.0 新增。', row: false },
          return: { text: '-', row: false },
        },
        {
          attr: { text: 'close', desc: false },
          desc: { text: '关闭时触发。', row: false },
          return: { text: '当前值', row: false },
        },
        {
          attr: { text: 'add', desc: false },
          desc: { text: '添加时触发。 1.3.0 新增。', row: false },
          return: { text: '新建的数据，所有数据', row: false },
        },
        {
          attr: { text: 'change', desc: false },
          desc: { text: '下拉框选中触发。 1.3.0 新增。', row: false },
          return: { text: '当前值，当前数据，所有数据', row: false },
        },
        {
          attr: { text: 'delopt', desc: false },
          desc: { text: '多选模式，不选中的时候触发。 1.3.0 开始，建议使用 change 方法。', row: false },
          return: { text: '新建的数据，所有数据', row: false },
        },
        {
          attr: { text: 'checkedopt', desc: false },
          desc: { text: '多选模式，选中的时候触发。 1.3.0 开始，建议使用 change 方法。', row: false },
          return: { text: '当前值，当前数据，所有数据', row: false },
        },
        {
          attr: { text: 'getAllData', desc: false },
          desc: { text: '多选模式，选中下拉选项的时候触发。 1.3.0 开始，建议使用 change 方法。', row: false },
          return: { text: '当前值，当前数据，所有数据', row: false },
        },
        {
          attr: { text: 'addDataCheck', desc: false },
          desc: { text: '多选添加数据时触发。 1.3.0 开始，建议使用 add 属性。', row: false },
          return: { text: '新建的数据，所有数据', row: false },
        },
        {
          attr: { text: 'addDataRadio', desc: false },
          desc: { text: '单选添加数据时触发。 1.3.0 开始，建议使用 add 属性。', row: false },
          return: { text: '新建的数据，所有数据', row: false },
        },
        {
          attr: { text: 'clickInput', desc: false },
          desc: { text: '点击下拉框事件。 1.3.0 开始，建议使用 click 方法。', row: false },
          return: { text: '-', row: false },
        },
      ],
    };
  },
  methods: {
    add(nData) {
      this.news.push({
        name: nData,
      });
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
