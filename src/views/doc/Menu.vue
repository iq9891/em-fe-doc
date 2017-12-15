<template>
  <article class="menu">
    <h2 class="h2">Menu 导航</h2>
    <p class="p">用于整个网站的公共左侧导航。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="menu.base" href="http://output.jsbin.com/babesiz" title="基本用法" info="导航数据放在 datas 里面。">
      <emfe-menu className="menu" :datas="base"></emfe-menu>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">事件</h5>
    <emfe-table class="table" :columns="eventTh" :data="eventTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in eventTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import menu from '@/views/code/menu';

export default {
  data() {
    return {
      menu,
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
          desc: { text: '导航的数据。 {children: [{ routers: { path: \'\'}, url: \'\', }], routers: { path: \'\' }, url: \'\'}。<br>children：判断是否有二级的标识。url：外链标识，routers：本路由跳转标识，并且结合fullpath和path高亮当前菜单。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'fullpath', desc: false },
          desc: { text: '自定义全路径，如果没有默认就是路由中的fullpath。用于判断当前routers中的path是否在 fullpath 中，如果在则选中。', row: false },
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
      eventTh: [
        {
          title: '事件',
          key: 'name',
        },
        {
          title: '说明',
          key: 'desc',
        },
        {
          title: '返回值',
          key: 'return',
        },
      ],
      eventTd: [
        {
          name: { text: 'short', row: false },
          desc: { text: '当点击一级导航顶部变小按钮的时候触发。', row: false },
          return: { text: '一级导航状态(是否被展开), 二级导航状态(是否被展开)', row: false },
        },
        {
          name: { text: 'column', row: false },
          desc: { text: '当点击一级导航中的菜单，有二级导航出现的时候触发。', row: false },
          return: { text: '一级导航状态(是否被展开), 二级导航状态(是否被展开)', row: false },
        },
      ],
    };
  },
  methods: {
    home() {
      this.$router.push('/');
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/views/doc/menu.scss";
</style>
