<template>
  <article class="layout">
    <h2 class="h2">Layout 布局</h2>
    <p class="p">布局和导航是产品的骨架，是页面的重要构成模式之一，是作为后续展开页面设计的基础，可以为产品奠定交互和视觉风格。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="layout.base" href="http://output.jsbin.com/goxijud" title="基本用法" info="传统的后台布局。也可以根据需求定制布局。">
      <div class="layout-wrap">
        <emfe-header logo="https://static.evente.cn/evente/b/desktop/images/logo2017.png" className="layout" user="EM-FE"></emfe-header>
        <emfe-menu :datas="menuData" className="layout"></emfe-menu>
        <div class="layout-main">真正的内容区域</div>
      </div>
    </d-demo>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import layout from '@/views/code/layout';

export default {
  data() {
    return {
      layout,
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
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/views/doc/layout.scss";
</style>
