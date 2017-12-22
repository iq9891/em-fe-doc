export default {
  base: `
<template>
  <emfe-number v-model="base"></emfe-number>
</template>
<script>
  export default {
    data() {
      return {
        base: 10,
      };
    },
  },
</script>`,
  limit: `
<emfe-number :min="-1" :max="10" unit="个"></emfe-number>`,
  diy: `
<emfe-number :disabled="false" :step="0.12"></emfe-number>`,
};
