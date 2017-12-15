<template>
  <article class="stepsb">
    <h2 class="h2">Stepsb 步骤指引</h2>
    <p class="p">用于整个网站的步骤指引。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="stepsb.base" href="http://output.jsbin.com/yujugi" title="基本用法" info="步骤信息加在 datas 属性上，步骤索引加在 active 属性上。">
      <emfe-steps-b :datas="stepDatas" :active="2"></emfe-steps-b>
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
import stepsb from '@/views/code/stepsb';

export default {
  data() {
    return {
      stepsb,
      stepDatas: {
        stepsText: [
          {
            text: '验证原手机号',
          },
          {
            text: '验证新手机号',
          },
          {
            text: '修改成功',
          },
        ],
        allStepsNums: 3,
      },
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
          desc: { text: '进度数据。数据格式：{stepsText: [{text: \' \'}], allStepsNums: 1}', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'active', desc: false },
          desc: { text: '进度索引', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
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
