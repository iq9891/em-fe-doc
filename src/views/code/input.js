export default {
  base: `
<emfe-input placeholder="请输入"></emfe-input>`,
  disabled: `
<emfe-input :disabled="true" placeholder="请输入"></emfe-input>`,
  error: `
<template>
  <emfe-button @click="error = true;">点击报错</emfe-button>
  <br>
  <br>
  <emfe-input :err-ok="error" placeholder="请输入文字！">
    <div slot="error">这是一个错误信息</div>
  </emfe-input>
</template>
<script>
  export default {
    data() {
      return {
        error: false,
      };
    },
  },
</script>`,
  icon: `
<emfe-input :icon-ok="true" icon-type="fabu" placeholder="请输入"></emfe-input>`,
  vmodel: `
<template>
  <emfe-input v-model="inputVal"></emfe-input>
</template>
<script>
  export default {
    data() {
      return {
        inputVal: '',
      };
    },
  },
</script>`,
};
