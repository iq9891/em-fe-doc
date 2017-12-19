export default {
  base: `
<emfe-radio index="0" name="group1" :statu="true">文字1</emfe-radio>
<emfe-radio index="1" name="group1">文字2</emfe-radio>`,
  group: `
<emfe-radio-group>
  <emfe-radio index="0" name="group2">文字1</emfe-radio>
  <emfe-radio index="1" name="group2">文字2</emfe-radio>
</emfe-radio-group>`,
  styleIndex: `
<template>
  <p v-show="styleIndex">当前选中： {{ styleIndex }}</p>
  <emfe-radio-group>
    <emfe-radio index="styleIndex: purple" name="group3" styleIndex="purple" @change="styleIndexChange">名字1</emfe-radio>
    <emfe-radio index="styleIndex: green" name="group3" styleIndex="green" @change="styleIndexChange">名字2</emfe-radio>
  </emfe-radio-group>
</template>
<script>
  export default {
    data() {
      return {
        styleIndex: '',
      };
    },
    methods: {
      styleIndexChange(index) {
        this.styleIndex = index;
      },
    },
  },
</script>`,
  tip: `
<emfe-radio-group>
  <emfe-radio index="10" name="group4" tip="这是名字">李红星</emfe-radio>
  <emfe-radio index="20" name="group4" tip="这是名字">李小龙</emfe-radio>
</emfe-radio-group>`,
  slideShow: `
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
</emfe-radio-group>`,
  disabled: `
  <emfe-radio-group>
    <emfe-radio index="10" name="group6" :disabled="true">李红星</emfe-radio>
    <emfe-radio index="20" name="group6" :disabled="true">李小龙</emfe-radio>
  </emfe-radio-group>`,
};
