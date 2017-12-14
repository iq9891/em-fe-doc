<template>
  <article class="grid">
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
    <d-demo :code="grid.base" href="http://output.jsbin.com/pamijoj" title="基本用法" info="水平排列的布局。emfe-col 必须放在 emfe-row 里面。">
      <emfe-row>
        <emfe-col span="8">
          <div class="grid-blue">col-8</div>
        </emfe-col>
        <emfe-col span="8">
          <div class="grid-lightblue">col-8</div>
        </emfe-col>
        <emfe-col span="8">
          <div class="grid-blue">col-8</div>
        </emfe-col>
      </emfe-row>
    </d-demo>
    <d-demo :code="grid.interval" href="http://output.jsbin.com/hocuva" title="区块间隔" info="通过给 emfe-row 添加 gutter 属性，可以给下属的 emfe-col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。">
      <emfe-row :gutter="16">
        <emfe-col span="12">
          <div class="grid-blue">col-12</div>
        </emfe-col>
        <emfe-col span="12">
          <div class="grid-lightblue">col-12</div>
        </emfe-col>
      </emfe-row>
    </d-demo>
    <d-demo :code="grid.sort" href="http://output.jsbin.com/qayugiw" title="栅格排序" info="通过设置 push 和 pull 来改变栅格的顺序。">
      <emfe-row>
        <emfe-col span="18" pull="6">
          <div class="grid-blue">col-18 | pull-6</div>
        </emfe-col>
        <emfe-col span="6" push="18">
          <div class="grid-lightblue">col-6 | push-18</div>
        </emfe-col>
      </emfe-row>
    </d-demo>
    <d-demo :code="grid.deviation" href="http://output.jsbin.com/vuqurev" title="左右偏移" info="通过设置 offset 属性，将列进行左右偏移，偏移栅格数为 offset 的值。">
      <emfe-row>
        <emfe-col span="6" offset="8">
          <div class="grid-blue">col-6 | offset-8</div>
        </emfe-col>
        <emfe-col span="6" offset="4">
          <div class="grid-lightblue">col-6 | offset-4</div>
        </emfe-col>
      </emfe-row>
    </d-demo>
    <d-demo :code="grid.flex" href="http://output.jsbin.com/gofaju" title="Flex 用法" info="支持 Flex 布局">
      <emfe-row type="flex">
        <emfe-col span="12">
          <div class="grid-blue">col-12</div>
        </emfe-col>
        <emfe-col span="12">
          <div class="grid-lightblue">col-12</div>
        </emfe-col>
      </emfe-row>
    </d-demo>
    <d-demo :code="grid.order" href="http://output.jsbin.com/kebosiy" title="Flex 顺序" info="通过 Flex 布局的order来改变栅格的顺序。">
      <emfe-row type="flex">
        <emfe-col span="6" order="4">
          <div class="grid-blue">1 | order-4</div>
        </emfe-col>
        <emfe-col span="6" order="3">
          <div class="grid-lightblue">2 | order-3</div>
        </emfe-col>
        <emfe-col span="6" order="2">
          <div class="grid-blue">3 | order-2</div>
        </emfe-col>
        <emfe-col span="6" order="1">
          <div class="grid-lightblue">4 | order-1</div>
        </emfe-col>
      </emfe-row>
    </d-demo>
    <d-demo :code="grid.array" href="http://output.jsbin.com/cocuxec" title="Flex 排列" info="通过给 emfe-row 设置参数 justify 为不同的值，来定义子元素的排布方式。在 Flex 模式下有效。">
      <emfe-row type="flex" justify="start" align="top">
        <emfe-col span="4">
          <p class="grid-blue">col-4</p>
        </emfe-col>
        <emfe-col span="4">
          <p class="grid-lightblue">col-4</p>
        </emfe-col>
        <emfe-col span="4">
          <p class="grid-blue">col-4</p>
        </emfe-col>
        <emfe-col span="4">
          <p class="grid-lightblue">col-4</p>
        </emfe-col>
      </emfe-row>
    </d-demo>
    <d-demo :code="grid.deviation" href="http://output.jsbin.com/vuqurev" title="Flex 对齐" info="通过给 emfe-row 设置参数 align 为不同的值，来定义子元素在垂直方向上的排布方式。在 Flex 模式下有效。">
      <emfe-row type="flex" justify="center" align="middle">
        <emfe-col span="4">
          <p class="grid-blue" style="height: 80px">col-4</p>
        </emfe-col>
        <emfe-col span="4">
          <p class="grid-lightblue" style="height: 30px">col-4</p>
        </emfe-col>
        <emfe-col span="4">
          <p class="grid-blue" style="height: 100px">col-4</p>
        </emfe-col>
        <emfe-col span="4">
          <p class="grid-lightblue" style="height: 60px">col-4</p>
        </emfe-col>
      </emfe-row>
    </d-demo>
    <d-demo :code="grid.response" href="http://output.jsbin.com/tipaxo" title="响应式布局" info="参照 Bootstrap 的 响应式设计，预设四个响应尺寸：xs md lg xl。">
      <emfe-row>
        <emfe-col :xl="3" :lg="5" :md="8" :xs="12" span="24">
          <div class="grid-blue">col-1</div>
        </emfe-col>
        <emfe-col :xl="3" :lg="5" :md="8" :xs="12" span="24">
          <div class="grid-lightblue">col-2</div>
        </emfe-col>
        <emfe-col :xl="3" :lg="5" :md="8" :xs="12" span="24">
          <div class="grid-blue">col-3</div>
        </emfe-col>
        <emfe-col :xl="3" :lg="5" :md="8" :xs="12" span="24">
          <div class="grid-lightblue">col-4</div>
          </emfe-col>
      </emfe-row>
    </d-demo>
    <d-demo :code="grid.other" href="http://output.jsbin.com/tipaxo" title="响应式布局" info="span pull push offset order 属性可以通过内嵌到 xs sm md lg 属性中来使用。其中 :xs='6' 相当于 :xs='{ span: 6 }'。">
      <emfe-row>
        <emfe-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
          <div class="grid-blue">col</div>
        </emfe-col>
        <emfe-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">
          <div class="grid-lightblue">col</div>
        </emfe-col>
        <emfe-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">
          <div class="grid-blue">col</div>
          </emfe-col>
      </emfe-row>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">emfe-row 的 属性</h5>
    <emfe-table class="table" :columns="rowTh" :data="rowTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in rowTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">emfe-col 的 属性</h5>
    <emfe-table class="table" :columns="colTh" :data="colTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in colTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import grid from '@/views/code/grid';

export default {
  data() {
    return {
      grid,
      rowTh: [
        {
          title: '属性',
          key: 'attr',
        },
        {
          title: '说明',
          key: 'desc',
        },
        {
          title: '类型',
          key: 'type',
        },
        {
          title: '默认值',
          key: 'default',
        },
      ],
      rowTd: [
        {
          attr: { text: 'gutter', desc: false },
          desc: { text: '栅格间距，单位 px ，左右平分。范围： 0 ~ 48 。', row: false },
          type: { text: 'Number | String', row: false },
          default: { text: '8', row: false },
        },
        {
          attr: { text: 'basin', desc: false },
          desc: { text: '垂直栅格间距，单位 px ，上下平分。范围： 0 ~ 48 。', row: false },
          type: { text: 'Number | String', row: false },
          default: { text: '0', row: false },
        },
        {
          attr: { text: 'type', desc: false },
          desc: { text: '布局模式，可选值为 Flex 或不选。 Flex 在现代浏览器下有效。', row: false },
          type: { text: 'String', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'align', desc: false },
          desc: { text: 'Flex 布局下的垂直对齐方式，可选值为 top 、 middle 、 bottom 。', row: false },
          type: { text: 'String', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'justify', desc: false },
          desc: { text: 'Flex 布局下的水平排列方式，可选值为 start 、 end、center 、 space-around、  space-between 。', row: false },
          type: { text: 'String', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'className(class-name)', desc: false },
          desc: { text: '自定义的 class 名称。', row: false },
          type: { text: 'String', row: false },
          default: { text: '-', row: false },
        },
      ],
      colTh: [
        {
          title: '属性',
          key: 'attr',
        },
        {
          title: '说明',
          key: 'desc',
        },
        {
          title: '类型',
          key: 'type',
        },
        {
          title: '默认值',
          key: 'default',
        },
      ],
      colTd: [
        {
          attr: { text: 'span', desc: false },
          desc: { text: '栅格的占位格数，可选值为 0 ~ 24 的整数，为 0 时，相当于 display: none。', row: false },
          type: { text: 'Number | String', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'tag', desc: false },
          desc: { text: '自定义标签名字。', row: false },
          type: { text: 'String', row: false },
          default: { text: 'div', row: false },
        },
        {
          attr: { text: 'offset', desc: false },
          desc: { text: '栅格左侧的间隔格数，间隔内不可以有栅格。', row: false },
          type: { text: 'Number | String', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'push', desc: false },
          desc: { text: '栅格向右移动格数。', row: false },
          type: { text: 'Number | String', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'pull', desc: false },
          desc: { text: '栅格向左移动格数。', row: false },
          type: { text: 'Number | String', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'xs', desc: false },
          desc: { text: '< 768px 响应式栅格，可为栅格数或一个包含其他属性的对象。', row: false },
          type: { text: 'Number | Object', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'md', desc: false },
          desc: { text: '≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象 。', row: false },
          type: { text: 'Number | Object', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'lg', desc: false },
          desc: { text: '≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象 。', row: false },
          type: { text: 'Number | Object', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'xl', desc: false },
          desc: { text: '≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象 。', row: false },
          type: { text: 'Number | Object', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'className(class-name)', desc: false },
          desc: { text: '自定义的 class 名称。', row: false },
          type: { text: 'String', row: false },
          default: { text: '-', row: false },
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
@import "../../assets/styles/views/doc/grid.scss";
</style>
