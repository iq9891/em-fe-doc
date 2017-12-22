<template>
  <article class="edit">
    <h2 class="h2">Edit 二级类目</h2>
    <p class="p">可以添加，可以删除，可以一层套一层。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="edit.base" href="http://output.jsbin.com/yarenac" title="基本用法" info="可以设置各种东西。">
      <emfe-edit :one-list="oneList" :add-one-obj="addOneObj" one-placeholder="一级选项提示" two-placeholder="二级选项提示" :add-two-obj="addTwoObj"></emfe-edit>
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
import edit from '@/views/code/edit';

export default {
  data() {
    return {
      edit,
      oneList: [
        {
          name: '李红星',
          sub_choices: [
            {
              name: '男',
            },
            {
              name: '天秤座',
            },
          ],
        },
        {
          name: '李偶得',
          sub_choices: [
            {
              name: '男',
            },
            {
              name: '射手座',
            },
          ],
        },
      ],
      addOneObj: {
        name: '一级选项',
        sub_choices: [
          {
            name: '二级选项',
          },
          {
            name: '二级选项',
          },
        ],
      },
      addTwoObj: {
        name: '二级选项',
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
          attr: { text: 'oneList(one-list)', desc: false },
          desc: { text: '默认显示的一级和二级内容。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'onePlaceholder(one-placeholder)', desc: false },
          desc: { text: '一级提示。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '选项', row: false },
        },
        {
          attr: { text: 'twoPlaceholder(two-placeholder)', desc: false },
          desc: { text: '二级提示。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '二级选项', row: false },
        },
        {
          attr: { text: 'twoPlaceholder(two-placeholder)', desc: false },
          desc: { text: '二级提示。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '二级选项', row: false },
        },
        {
          attr: { text: 'addOneObj(add-one-obj)', desc: false },
          desc: { text: '点击一级添加按钮需要添加的内容。', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
        },
        {
          attr: { text: 'addTwoObj(add-two-obj)', desc: false },
          desc: { text: '点击二级添加按钮需要添加的内容。', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
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
