export default {
  base: `
<template>
  <div class="layout-wrap">
    <emfe-header logo="https://static.evente.cn/evente/b/desktop/images/logo2017.png" className="layout" user="EM-FE"></emfe-header>
    <emfe-menu :datas="menuData" className="layout"></emfe-menu>
    <div class="layout-warp">真正的内容区域</div>
  </div>
</template>
<style>
.layout-wrap {
  border: 1px solid #dcdcdc;
  height: 300px;
  position: relative;
  overflow: hidden;
}

.layout-header {
  width: 100%;
  position: static;
}

.layout-menu {
  position: static;
  float: left;
}

.layout-warp {
  float: left;
}
</style>
<script>
  export default {
    data() {
      return {
        menuData: [
          {
            title: '百度',
            icon: 'fabu',
            url: 'http://baidu.com',
          },
          {
            title: '腾讯',
            icon: 'fabu',
            url: 'http://qq.com',
          },
        ],
      };
    },
  },
</script>`,
};
