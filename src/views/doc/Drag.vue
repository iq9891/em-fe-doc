<template>
  <article class="drag">
    <h2 class="h2">Drag 拖拽</h2>
    <p class="p">脱您想脱，拽您想拽。😍 😍 😍</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="drag.parent" href="http://output.jsbin.com/poxudut" title="拖拽子级" info="在一个地方限制拖拽。">
      <emfe-drag class-name="doc-parent" :drag-el="drag1" :initial-value="-15">
        <div class="doc-drag" ref="drag1">我可以动</div>
      </emfe-drag>
    </d-demo>
    <d-demo :code="drag.base" href="http://output.jsbin.com/jojoteb" title="任意拖拽" info="定个样式即可使用。">
      <emfe-drag class-name="doc">我可以动</emfe-drag>
    </d-demo>
    <d-demo :code="drag.limit" href="http://output.jsbin.com/taqiwoq" title="限制范围" info="在一个地方限制拖拽。">
      <div class="doc-box">
        <emfe-drag class-name="doc" limit="true" limit-position="center">我可以动</emfe-drag>
      </div>
    </d-demo>
    <d-demo :code="drag.direction" href="http://output.jsbin.com/cuvuho" title="某一方向" info="在一个地方限制拖拽。">
      <div class="doc-box">
        <emfe-drag class-name="doc" direction="horizontal">我可以动</emfe-drag>
      </div>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">事件</h5>
    <emfe-table class="table" :columns="eventTh" :data="eventTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in eventTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import drag from '@/views/code/drag';

export default {
  data() {
    return {
      drag,
      drag1: [],
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
          attr: { text: 'limit', desc: false },
          desc: { text: '是否限制范围。', row: false },
          type: { text: 'String, Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'limitPosition( limit-position )', desc: false },
          desc: { text: '限制范围时候元素的位置。可选参数： center(居中) | top(居上)。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'true', row: false },
          default: { text: 'top', row: false },
        },
        {
          attr: { text: 'dragEl', desc: false },
          desc: { text: '设定某一个或多个拖拽元素', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'initialValue', desc: false },
          desc: { text: '拖拽元素初始值。当与父级结合使用的时候，可通过设置它，控制拖拽元素在鼠标的位置。', row: false },
          type: { text: 'Number | Array', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'direction', desc: false },
          desc: { text: '某一方向的拖拽。可选值：vertical, horizontal, all 。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'all', row: false },
        },
        {
          attr: { text: 'borderSize', desc: false },
          desc: { text: '拖拽元素的边框 | 描边 尺寸。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '0', row: false },
        },
        {
          attr: { text: 'dragDiyStyle', desc: false },
          desc: { text: '自定义拖拽样式。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'moveEle', desc: false },
          desc: { text: '是否拖拽鼠标移动元素。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'true', row: false },
        },
        {
          attr: { text: 'padding', desc: false },
          desc: { text: '拖拽元素附加的内边距[left, top]。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'Array', row: false },
          default: { text: '[0, 0]', row: false },
        },
        {
          attr: { text: 'className(class-name)', desc: false },
          desc: { text: '自定义的 class 名称。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
      ],
      eventTh: [
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
      eventTd: [
        {
          attr: { text: 'beforeDrag', desc: false },
          desc: { text: '拖拽之前触发', row: false },
          return: { text: 'event 对象，左边距离，上边距离', row: false },
        },
        {
          attr: { text: 'drag', desc: false },
          desc: { text: '拖拽时触发 Event 对象，元素左边距离，元素上面距离， 向左(大于0)还是向右(小于0)， 向上(大于0)还是向下(小于0)', row: false },
          return: { text: 'event 对象，左边距离，上边距离', row: false },
        },
        {
          attr: { text: 'afterDrag', desc: false },
          desc: { text: '拖拽之后触发', row: false },
          return: { text: 'Event 对象。', row: false },
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.drag1.push(this.$refs.drag1);
    }, 0);
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/views/doc/drag.scss";
</style>
