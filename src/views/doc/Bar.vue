<template>
  <article class="bar">
    <h2 class="h2">Bar 二级导航</h2>
    <p class="p">用于整个网站的公共二级侧导航。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="bar.base" href="http://output.jsbin.com/visitip" title="基本用法" info="导航数据放在 datas 里面。标题放在 title 里。">
      <emfe-bar className="bar" :datas="base" title="二级导航" fullpath="/"></emfe-bar>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import bar from '@/views/code/bar';

export default {
  data() {
    return {
      bar,
      base: [
        {
          title: '一层',
          url: 'https://www.evente.cn',
        },
        {
          title: '一层',
          children: [
            {
              title: '二层',
              url: 'https://www.evente.cn',
            },
          ],
        },
      ],
      propTh: [
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
          title: '是否必须',
          key: 'must',
        },
        {
          title: '默认值',
          key: 'default',
        },
      ],
      propTd: [
        {
          attr: { text: 'datas', desc: false },
          desc: { text: '导航的数据。 {children: [{ routers: { path: \'\'}, url: \'\', }], routers: { path: \'\' }, url: \'\'}。<br>children：判断是否有二级的标识。url：外链标识，routers：本路由跳转标识，并且结合 fullpath 和 path 高亮当前菜单。routers 里面可以是 path，可以是 name。 <br>1.3.0 开始只是 url 外链形式。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'fullpath', desc: false },
          desc: { text: '自定义全路径，如果没有默认就是路由中的fullpath。用于判断当前routers中的path是否在 fullpath 中，如果在则选中。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'title', desc: false },
          desc: { text: '标题', row: false },
          type: { text: 'String', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'disabled', desc: false },
          desc: { text: '是否禁用。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'disableRex', desc: false },
          desc: { text: '导航项禁用的正则匹配', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'accordion', desc: false },
          desc: { text: '二级菜单是否手风琴效果', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
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
@import "../../assets/styles/views/doc/bar.scss";
</style>
