<template>
  <article class="tag">
    <h2 class="h2">Tag 标签</h2>
    <p class="p">用于整个网站的公共底部。使用规则，内容不满一屏时沉底，大于一屏时，跟随内容。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="tag.base" href="http://output.jsbin.com/huvamaz" title="切换标签" info="默认主题的用法。点击切换状态。">
      <emfe-tag-parent class-name="default">
        <emfe-tag index="0">默认</emfe-tag>
        <emfe-tag index="1" active="true">选中</emfe-tag>
        <emfe-tag index="2" disable="true">禁止</emfe-tag>
      </emfe-tag-parent>
    </d-demo>
    <d-demo :code="tag.checket" href="http://output.jsbin.com/hetutod" title="复选标签" info="选中之后禁用，可多选。">
      <emfe-tag-parent class-name="checket">
        <emfe-tag index="0">默认</emfe-tag>
        <emfe-tag index="1" active="true">选中</emfe-tag>
        <emfe-tag index="2" disable="true">禁止</emfe-tag>
      </emfe-tag-parent>
    </d-demo>
    <d-demo :code="tag.icon" href="http://output.jsbin.com/leramaf" title="icon" info="每个标签自定义 icon 的 type 属性。">
      <emfe-tag-parent class-name="default">
        <emfe-tag index="0" type="fabu">默认</emfe-tag>
        <emfe-tag index="1" type="erweima" active="true">选中</emfe-tag>
        <emfe-tag index="2" type="tishi" disable="true">禁止</emfe-tag>
      </emfe-tag-parent>
    </d-demo>
    <d-demo :code="tag.blue" href="http://output.jsbin.com/dodeciv" title="蓝色筛选" info="选中后为蓝色主题，可多选可不选。">
      <emfe-tag-parent class-name="screen" skin="blue">
        <emfe-tag index="0">默认</emfe-tag>
        <emfe-tag index="1" active="true">选中</emfe-tag>
      </emfe-tag-parent>
    </d-demo>
    <d-demo :code="tag.yellow" href="http://output.jsbin.com/cemokaf" title="黄色筛选" info="选中后为黄色主题，点击删除当前点击，需要配合 data 参数实现点击删除。">
      <emfe-tag-parent class-name="screen" skin="yellow" :data="tagDatas">
        <emfe-tag v-for="(tagData, index) in tagDatas" :key="index" :index="index" active="true" >{{tagData}}</emfe-tag>
      </emfe-tag-parent>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">emfe-tag-parent 的属性</h5>
    <emfe-table class="table" :columns="propParentTh" :data="propParentTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propParentTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">emfe-tag 的属性</h5>
    <emfe-table class="table" :columns="propTagTh" :data="propTagTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTagTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">emfe-tag 的方法</h5>
    <emfe-table class="table" :columns="eventTagTh" :data="eventTagTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in eventTagTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import tag from '@/views/code/tag';

export default {
  data() {
    return {
      tag,
      tagDatas: ['选中点击删除', '选中点击删除'],
      propParentTh: [
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
      propParentTd: [
        {
          attr: { text: 'className(class-name)', desc: false },
          desc: { text: '选择皮肤。可选值： default | checket | screen 。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'addClass(add-class)', desc: false },
          desc: { text: '自定义的 class 名称。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'skin', desc: false },
          desc: { text: '当 className 为 screen 的时候为筛选标签。 skin 可设置筛选皮肤状态。可选值： yellow | blue 。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'data', desc: false },
          desc: { text: '当 className 为 screen 的时候为筛选标签。 skin 为 yellow的时候。 如果传入该参数，那么标签可实现点击删除效果。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
      ],
      propTagTh: [
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
      propTagTd: [
        {
          attr: { text: 'disable', desc: false },
          desc: { text: '可否自定义数值。true -> 不可以。', row: false },
          type: { text: 'String | Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'type', desc: false },
          desc: { text: '字体图标的类型。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'active', desc: false },
          desc: { text: '字体图标的类型。', row: false },
          type: { text: 'String | Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'index', desc: false },
          desc: { text: '组件索引。', row: false },
          type: { text: 'String | Number', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'click', desc: false },
          desc: { text: '点击事件。返回：当前索引( index )，当前状态', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function() {}', row: false },
        },
      ],
      eventTagTh: [
        {
          title: '事件名',
          key: 'attr',
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
      eventTagTd: [
        {
          attr: { text: 'tag', desc: false },
          desc: { text: '点击事件。 1.3.0 开始建议使用 click 。', row: false },
          return: { text: '当前 tag 的索引值，标签激活状态', row: false },
        },
        {
          attr: { text: 'click', desc: false },
          desc: { text: '点击事件。 1.3.0 新增。', row: false },
          return: { text: '当前 tag 的索引值，标签激活状态', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
