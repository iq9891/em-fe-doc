<template>
  <article class="title">
    <h2 class="h2">Title 标题</h2>
    <p class="p">内容页面上的标题</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="title.base" href="http://output.jsbin.com/kesixup" title="基本用法" info="直接往里面添加即可。">
      <emfe-title>EM-FE 的标题</emfe-title>
    </d-demo>
    <d-demo :code="title.slot" href="http://output.jsbin.com/pagekup" title="扩展" info="加您想加的内容。">
      <emfe-title>
        <emfe-link :routers="{}">EM-FE 的标题</emfe-link>
      </emfe-title>
    </d-demo>
    <d-demo :code="title.tip" href="http://output.jsbin.com/qusisix" title="基本用法" info="直接往里面添加即可。">
      <emfe-title tip="EM-FE 的提示">EM-FE 的标题</emfe-title>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import title from '@/views/code/title';

export default {
  data() {
    return {
      title,
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
          attr: { text: 'tip', desc: false },
          desc: { text: '问号提示的文案', row: false },
          type: { text: 'String', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },

        {
          attr: { text: 'placement', desc: false },
          desc: { text: '提示框出现的位置。<br>可选值为： top | top-start | top-end | bottom | bottom-start | bottom-end | left | left-start | left-end | right | right-start | right-end', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'bottom', row: false },
        },
        {
          attr: { text: 'className(class-name)', desc: false },
          desc: { text: '自定义的 class 名称。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
