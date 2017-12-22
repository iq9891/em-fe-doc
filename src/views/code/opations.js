export default {
  base: `
<template>
  <emfe-opations v-model="opationsData"></emfe-opations>
</template>
<script>
  export default {
    data() {
      return {
        opationsData: ['1', '2', ''],
      };
    },
  },
</script>`,
};
