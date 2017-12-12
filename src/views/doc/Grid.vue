<template>
  <article class="font">
    <h2 class="h2">栅格</h2>
    <p class="p">在多数业务情况下，EMFE 需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。</p>
    <p class="p">划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。</p>
    <h4 class="h4">概述</h4>
    <p class="p">我们定义了两个概念，行row和列col，具体使用方法如下：</p>
    <ul class="ul">
      <li class="li">使用 row 在水平方向创建一行</li>
      <li class="li">将一组 col 插入在 row 中</li>
      <li class="li">在每个 col 中，键入自己的内容</li>
      <li class="li">通过设置 col 的 span 参数，指定跨越的范围，其范围是 1 到 24</li>
      <li class="li">每个 row 中的 col 总和应该为 24</li>
    </ul>
    <h4 class="h4">Flex 布局</h4>
    <p class="p">我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。</p>
    <p class="p">Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但排版则不拘泥于栅格。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="grid.base" href="baidu.com" title="基本用法" info="这是一些描述"></d-demo>
    <h4 class="h4">字体使用规范</h4>
    <emfe-table class="table" :columns="fontTh" :data="fontTd" :hover="true">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in fontTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import font from '@/views/code/font';
import grid from '@/views/code/grid';

export default {
  data() {
    return {
      grid,
      font,
      fontTh: [
        {
          title: '类型',
          key: 'type',
        },
        {
          title: '示例',
          key: 'demo',
        },
        {
          title: '粗细',
          key: 'weight',
        },
        {
          title: '颜色',
          key: 'color',
        },
        {
          title: '字号',
          key: 'size',
        },
      ],
      fontTd: [
        {
          type: { text: '标题', row: false },
          demo: { text: '<p style="font-size: 16px;color:#333;">连接人与现场</p>', row: false },
          weight: { text: '默认', row: false },
          color: { text: '#333333', row: false },
          size: { text: '16px', row: false },
        },
        {
          type: { text: '正文', row: false },
          demo: { text: '<p style="font-size: 14px;color:#333;">连接人与现场</p>', row: false },
          weight: { text: '默认', row: false },
          color: { text: '#333333', row: false },
          size: { text: '14px', row: false },
        },
        {
          type: { text: '提示文字', row: false },
          demo: { text: '<p style="font-size: 12px;color:#333;">连接人与现场</p>', row: false },
          weight: { text: '默认', row: false },
          color: { text: '#333333', row: false },
          size: { text: '12px', row: false },
        },
      ],
    };
  },
  components: {
    dCode: loadcomponents.load('Dcode'),
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/views/doc/font.scss";
</style>
