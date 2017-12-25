export default {
  base: `
<template>
  <emfe-color v-model="color"></emfe-color>
</template>
<script>
  export default {
    data() {
      return {
        color: '00ff00',
      };
    },
  },
</script>`,
};
