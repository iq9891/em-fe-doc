export default {
  base: `
<template>
  <emfe-textarea v-model="textareaModel"></emfe-textarea>
</template>
<script>
  export default {
    data() {
      return {
        textareaModel: 'EM-FE',
      };
    },
  },
</script>`,
};
