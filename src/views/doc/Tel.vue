<template>
  <article class="tel">
    <h2 class="h2">Tel 电话组合</h2>
    <p class="p">手机号和区号的组合。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="tel.base" href="http://output.jsbin.com/qevosuj" title="基本用法" info="设置必填属性 datas，配合数据绑定使用。">
      <emfe-tel :datas="baseDatas" v-model="base"></emfe-tel>
      <p class="p" v-show="base.tel">您输入的电话是： +{{base.prefix}}{{base.tel}}</p>
    </d-demo>
    <d-demo :code="tel.error" href="http://output.jsbin.com/jaqotax" title="控制错误" info="通过在内容添加 slot 展示报错信息。通过变量操作 err-ok 属性，即可操作报错信息是否显示。">
      <emfe-button @click="errorStatus = true;">点击报错</emfe-button>
      <br>
      <br>
      <emfe-tel :datas="errorDatas" v-model="error" :err-ok="errorStatus">
        <div slot="error">这是一个错误信息</div>
      </emfe-tel>
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
import tel from '@/views/code/tel';

export default {
  data() {
    return {
      tel,
      base: {
        name: '中国',
        tel: '',
        prefix: '86',
        url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
      },
      baseDatas: [
        {
          name: '中国',
          tel: '',
          prefix: '86',
          url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
        },
        {
          name: '香港',
          tel: '',
          prefix: '852',
          url: 'https://static.evente.cn/evente/img/flag/v1/xg.jpg',
        },
      ],
      errorStatus: false,
      error: {
        name: '中国',
        tel: '',
        prefix: '86',
        url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
      },
      errorDatas: [
        {
          name: '中国',
          tel: '',
          prefix: '86',
          url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
        },
        {
          name: '香港',
          tel: '',
          prefix: '852',
          url: 'https://static.evente.cn/evente/img/flag/v1/xg.jpg',
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
          attr: { text: 'datas', desc: false },
          desc: { text: '数据。 type 为 default 的时候，数据格式为：[{ name: \'下拉文字\', disabled: false }]。 其中 name 是下拉选项的名字。 disabled 是否禁用，如果不禁用可不传。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'placeholder', desc: false },
          desc: { text: '默认提示文字。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '请输入', row: false },
        },
        {
          attr: { text: 'type', desc: false },
          desc: { text: '输入框类型', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'number', row: false },
        },
        {
          attr: { text: 'errOk(err-ok)', desc: false },
          desc: { text: 'errOk 是判断输入是否正确，为 \'true\' 时，边框为红色，提示错误信息。信息必须 slot 为 error 设置。', row: false },
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
          attr: { text: 'choice', desc: false },
          desc: { text: '点击选择前缀。 1.3.0 开始建议使用 change 方法。', row: false },
          return: { text: '当前数据', row: false },
        },
        {
          attr: { text: 'change', desc: false },
          desc: { text: '点击选择前缀。 1.3.0 新增。', row: false },
          return: { text: '当前数据', row: false },
        },
        {
          attr: { text: 'blur', desc: false },
          desc: { text: '失去焦点', row: false },
          return: { text: '-', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
