<template>
  <article class="page">
    <h2 class="h2">Page 分页</h2>
    <p class="p">用于整个网站的分页。 1.3.0 之前不支持 em-page 。 emfe-page 属于 1.3.0 的新功能 。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="page.base" href="http://output.jsbin.com/yiculeg" title="基本用法" info="只需设置 page-count 属性即可。">
      <emfe-page :page-count="18"></emfe-page>
    </d-demo>
    <d-demo :code="page.page" href="http://output.jsbin.com/rumihev" title="设置当前页" info="只需设置 cur-page 属性即可。">
      <emfe-page :cur-page="7" :page-count="18"></emfe-page>
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
import page from '@/views/code/page';

export default {
  data() {
    return {
      page,
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
          attr: { text: 'cur-page(curPage)', desc: false },
          desc: { text: '设置当前选中索引', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '1', row: false },
        },
        {
          attr: { text: 'page-count(pageCount)', desc: false },
          desc: { text: '总页数', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '1', row: false },
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
          name: { text: 'change', row: false },
          desc: { text: '当前页数改变时候触发。1.3.0 之前不支持', row: false },
          return: { text: '当前页码', row: false },
        },
        {
          name: { text: 'togglePage', row: false },
          desc: { text: '当前页数改变时候触发。1.3.0 之后，建议统一用 change 方法', row: false },
          return: { text: '当前页码', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
