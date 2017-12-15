export default {
  base: `
<template>
  <emfe-checkout v-model="checkoutStatus1" title="EM-FE"></emfe-checkout>
</template>
<script>
  export default {
    data() {
      return {
        checkoutStatus1: true,
      };
    },
  },
</script>`,
  disabled: `
<emfe-checkout :disabled="true" title="EM-FE"></emfe-checkout>`,
  tip: `
<emfe-checkout title="EM-FE" tip="EM-FE 是企业级定制 UI 库"></emfe-checkout>`,
  show: `
<emfe-checkout :slide-show="true" :value="true" title="EM-FE 的组件">
  <div slot="slide">
    <emfe-checkout title="单选" inline="true"></emfe-checkout>
    <emfe-checkout title="输入框" inline="true"></emfe-checkout>
    <emfe-checkout title="多选" inline="true"></emfe-checkout>
    <emfe-checkout title="下拉" inline="true"></emfe-checkout>
  </div>
</emfe-checkout>`,
  no: `
<emfe-checkout :value="true" title="选中不可选" :checkedForever="true"></emfe-checkout>`,
};
