<template>
  <article class="radio">
    <h2 class="h2">Radio 单选</h2>
    <p class="p">用 Vue 模拟原生 Radio 。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="radio.base" href="http://output.jsbin.com/xafiyan" title="基本用法" info="index 代表索引必须传，name 必须定义一下，就像原生单选一样。 statu 设置默认选中。">
      <emfe-radio index="0" name="group1" :statu="true">文字1</emfe-radio>
      <emfe-radio index="1" name="group1">文字2</emfe-radio>
    </d-demo>
    <d-demo :code="radio.group" href="http://output.jsbin.com/yokaci" title="组合" info="结合 group 简单管理。">
      <emfe-radio-group>
        <emfe-radio index="0" name="group2">文字1</emfe-radio>
        <emfe-radio index="1" name="group2">文字2</emfe-radio>
      </emfe-radio-group>
    </d-demo>
    <d-demo :code="radio.styleIndex" href="http://output.jsbin.com/denudoy" title="改变选中颜色" info="设置 styleIndex 的值改变选中颜色，返回 index 的值。">
      <emfe-radio-group>
        <emfe-radio index="styleIndex: purple" name="group3" styleIndex="purple" @change="styleIndexChange">名字1</emfe-radio>
        <emfe-radio index="styleIndex: green" name="group3" styleIndex="green" @change="styleIndexChange">名字2</emfe-radio>
      </emfe-radio-group>
      <p class="p" v-show="styleIndex">当前选中： {{ styleIndex }}</p>
    </d-demo>
    <d-demo :code="radio.tip" href="http://output.jsbin.com/nuhewax" title="提示" info="设置 tip 的值即可。">
      <emfe-radio-group>
        <emfe-radio index="10" name="group4" tip="这是名字">李红星</emfe-radio>
        <emfe-radio index="20" name="group4" tip="这是名字">李小龙</emfe-radio>
      </emfe-radio-group>
    </d-demo>
    <d-demo :code="radio.slideShow" href="http://output.jsbin.com/fodawur" title="展开隐藏内容" info="隐藏内容可以设置 slot 。">
      <emfe-radio-group>
        <emfe-radio index="0" name="group5" tip="简单的单选">文字1</emfe-radio>
        <emfe-radio index="1" name="group5" :statu="true" :slide-show="true" tip="家电项目">文字2
          <div slot="slide">
            <emfe-radio-group>
              <emfe-radio index="app-1" name="app" inline="true">电脑</emfe-radio>
              <emfe-radio index="app-2" name="app" inline="true">手机</emfe-radio>
              <emfe-radio index="app-3" name="app" inline="true">电视</emfe-radio>
            </emfe-radio-group>
          </div>
        </emfe-radio>
        <emfe-radio index="2" name="group5" :slide-show="true" tip="体育项目">文字3
          <div slot="slide">
            <emfe-radio-group>
              <emfe-radio index="sports-1" name="sports">足球</emfe-radio>
              <emfe-radio index="sports-2" name="sports">篮球</emfe-radio>
            </emfe-radio-group>
          </div>
        </emfe-radio>
      </emfe-radio-group>
    </d-demo>
    <d-demo :code="radio.disabled" href="http://output.jsbin.com/xohore" title="禁用" info="设置 disabled 的值即可。">
      <emfe-radio-group>
        <emfe-radio index="10" name="group6" :disabled="true">李红星</emfe-radio>
        <emfe-radio index="20" name="group6" :disabled="true">李小龙</emfe-radio>
      </emfe-radio-group>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">Radio 属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">Radio 事件</h5>
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
import radio from '@/views/code/radio';

export default {
  data() {
    return {
      radio,
      styleIndex: '',
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
          attr: { text: 'disabled', desc: false },
          desc: { text: '是否禁用此多选框。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
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
          type: { text: 'String', row: false },
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
          attr: { text: 'statu', desc: false },
          desc: { text: '是否选中', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'styleIndex', desc: false },
          desc: { text: '控制选中图片颜色，purple: 紫色，green：绿色，lightBlue： 浅蓝色，orange： 橙色', row: false },
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
          default: { text: 'top', row: false },
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
          desc: { text: '点击多选框触发。<br>返回值：当前索引(设置的 index 属性)。', row: false },
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
          name: { text: 'change', row: false },
          desc: { text: '改变选择状态时候触发。', row: false },
          return: { text: '当前索引(设置的 index 属性)', row: false },
        },
      ],
    };
  },
  methods: {
    styleIndexChange(index) {
      this.styleIndex = index;
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/views/doc/radio.scss";
</style>
