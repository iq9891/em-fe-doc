export default {
  base: `
<template>
  <emfe-bar className="bar" :datas="base" title="二级导航"></emfe-bar>
</template>
<style>
.menu-menu {
  border-top: 1px solid #dcdcdc;
  border-left: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  position: static;
  width: 128px;
}
</style>
<script>
  export default {
    data() {
      return {
        base: [
          {
            title: '一层',
            routers: {
              url: 'https://www.evente.cn',
            },
          },
          {
            title: '一层',
            children: [
              {
                title: '二层',
                routers: {
                  url: 'https://www.evente.cn',
                },
              },
            ],
          },
        ],
      };
    },
  },
</script>`,
};
