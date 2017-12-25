export default {
  base: `
<template>
  <emfe-menu className="menu" :datas="base"></emfe-menu>
</template>
<style>
.menu-menu {
  border-top: 1px solid #dcdcdc;
  border-left: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  position: static;
  height: 200px;
  width: 128px;
}

.menu-main {
  height: 100%;
}
</style>
<script>
  export default {
    data() {
      return {
        base: [
          {
            title: '字体',
            icon: 'fabu',
          },
          {
            title: '会员',
            icon: 'tishi',
          },
        ],
      };
    },
  },
</script>`,
};
