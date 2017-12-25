export default {
  base: `
<template>
  <emfe-copy copy-value="http://www.evente.cn" @copySuccess="copySuc" @copyFail="copyFail"></emfe-copy>
</template>
<script>
  export default {
    methods: {
      copySuc() {
        this.$EmfeMessage.success({
          content: '复制成功',
        });
      },
      copyFail() {
        this.$EmfeMessage.error({
          content: '复制失败',
        });
      },
    },
  },
</script>`,
};
