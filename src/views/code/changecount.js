export default {
  base: `
<template>
  <emfe-changecount :count="base"></emfe-changecount>
</template>
<script>
  export default {
    data() {
      return {
        base: 1998,
      },
    },
  },
</script>`,
};
