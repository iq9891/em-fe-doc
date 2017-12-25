export default {
  base: `
<template>
  <emfe-header className="header" user="EM-FE"></emfe-header>
</template>
<style>
.header-header {
  width: 100%;
  position: static;
}
</style>
<script>
export default {
  methods: {
    home() {
      this.$router.push('/');
    },
  },
}
</script>`,
};
