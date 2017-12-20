<template>
  <article class="table">
    <h2 class="h2">Table 表格</h2>
    <p class="p">用 Vue 模拟原生 Table 。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="table.base" href="http://output.jsbin.com/sanayag" title="基本用法" info="设置各种数据，渲染表格。 columns 属性是对应关系。注： text 中支持 html。 columns 数据结构：[ { title: '标题', key: 'name' } ]，title 是 表头的名字， key 是表内容数据对应的 key 值。dataBase: [ { name: { text: '李阳光', row: false, color: '#fd883b' } } ]。 row 为 true 合并行的时候，必须配合 hebing 为 true 使用才能真正生效，并且带有 hebing 字段的 text 为空。详细的请源码。 text 字段支持原生 html 。">
      <emfe-table :columns="columnBase" :data="dataBase" :border="true">
        <emfe-table-head slot="head">
        </emfe-table-head>
        <emfe-table-body slot="body" v-for="(dataList,index) in dataBase" :ind="index" :key="index" :data-list="dataList">
        </emfe-table-body>
      </emfe-table>
    </d-demo>
    <d-demo :code="table.hover" href="http://output.jsbin.com/woqifez" title="变色带移入效果" info="在 data 数据中添加 disabled 为 true，即可，不管是哪行变色。 1.3.0 开始统一移入效果。">
      <emfe-table :columns="columnHover" :data="dataHover" :hover="true">
        <emfe-table-head slot="head">
        </emfe-table-head>
        <emfe-table-body slot="body" v-for="(dataList,index) in dataHover" :ind="index" :key="index" :data-list="dataList">
        </emfe-table-body>
      </emfe-table>
    </d-demo>
    <d-demo :code="table.auto" href="http://output.jsbin.com/yeqobov" title="自适应" info="最外层定义一个框框。">
      <div style="width: 100%; overflow: auto;">
        <emfe-table :columns="columnAuto" :data="dataAuto">
          <emfe-table-head slot="head">
          </emfe-table-head>
          <emfe-table-body slot="body" v-for="(dataList,index) in dataAuto" :ind="index" :key="index" :data-list="dataList">
          </emfe-table-body>
        </emfe-table>
      </div>
    </d-demo>
    <d-demo :code="table.slot" href="http://output.jsbin.com/bupipeb" title="内嵌" info="如果你希望传入多个slot，需要把数据( data 属性 )里的 slot 设置为 a - i ，插入的 slot 对应 a - i ，具体看源码。目前支持 a - i 。">
      <emfe-table :columns="columnSlot" :data="dataSlot">
        <emfe-table-head slot="head">
        </emfe-table-head>
        <emfe-table-body slot="body" v-for="(dataList,index) in dataSlot" :ind="index" :key="index" :data-list="dataList">
          <div slot="a">
            <emfe-checkout title="多选"></emfe-checkout>
          </div>
          <div slot="b">EM-FE</div>
          <div slot="c">
            <emfe-button>按钮</emfe-button>
          </div>
        </emfe-table-body>
      </emfe-table>
    </d-demo>
    <d-demo :code="table.no" href="http://output.jsbin.com/rafanam" title="暂无数据" info="data 数据为空时。">
      <div style="width: 100%; overflow: auto;">
        <emfe-table :columns="columnNo" :data="dataNo" nothing-text="无数据">
          <emfe-table-head slot="head">
          </emfe-table-head>
          <emfe-table-body slot="body" v-for="(dataList,index) in dataNo" :ind="index" :key="index" :data-list="dataList">
          </emfe-table-body>
        </emfe-table>
      </div>
    </d-demo>
    <d-demo :code="table.checked" href="http://output.jsbin.com/polobej" title="某列选中" info="在 emfe-table-head 和 emfe-table-body 上设置 checked 属性。">
      <emfe-table :columns="columnChecked" :data="dataChecked">
        <emfe-table-head slot="head" :checked="1">
        </emfe-table-head>
        <emfe-table-body slot="body" v-for="(dataList,index) in dataChecked" :ind="index" :key="index" :data-list="dataList" :checked="1">
        </emfe-table-body>
      </emfe-table>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">emfe-table 属性</h5>
    <emfe-table class="table" :columns="propTableTh" :data="propTableTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTableTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">emfe-table-head 属性</h5>
    <emfe-table class="table" :columns="propHeadTh" :data="propHeadTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propHeadTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">emfe-table-head 事件</h5>
    <emfe-table class="table" :columns="eventHeadTh" :data="eventHeadTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in eventHeadTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">emfe-table-body 属性</h5>
    <emfe-table class="table" :columns="propBodyTh" :data="propBodyTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propBodyTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">emfe-table-body 事件</h5>
    <emfe-table class="table" :columns="eventBodyTh" :data="eventBodyTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in eventBodyTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import table from '@/views/code/table';

export default {
  data() {
    return {
      table,
      columnBase: [
        {
          title: '标题',
          key: 'name',
        },
        {
          title: '地址',
          key: 'place',
        },
      ],
      dataBase: [
        {
          name: { text: '李阳光', row: false, color: '#fd883b' },
          place: { text: '帝都', row: false, color: '#1996f9' },
        },
        {
          name: { text: '<a href="javascript:;">李红星</a>', row: false },
          place: { text: '帝都', row: true, color: '#1996f9' },
        },
        {
          name: { text: '<a href="javascript:;">李红星</a>', row: false },
          place: { text: '', hebing: true, row: true },
        },
      ],
      columnHover: [
        {
          title: '标题',
          key: 'name',
        },
        {
          title: '地址',
          key: 'place',
        },
      ],
      dataHover: [
        {
          name: { text: '李阳光', row: false },
          place: { text: '帝都', row: false },
        },
        {
          name: { text: '李红星', row: false },
          place: { text: '帝都', row: false },
          disabled: true,
        },
      ],
      columnAuto: [
        {
          title: '姓名',
          key: 'name',
        },
        {
          title: '地址',
          key: 'place',
        },
        {
          title: '年龄',
          key: 'age',
        },
        {
          title: '性别',
          key: 'sex',
        },
        {
          title: '婚姻情况',
          key: 'marriage',
        },
        {
          title: '婚姻情况',
          key: 'marriage',
        },
        {
          title: '爱好',
          key: 'hobby',
        },
        {
          title: '学历',
          key: 'education',
        },
        {
          title: '肤色',
          key: 'skin',
        },
      ],
      dataAuto: [
        {
          name: { text: '李红星', row: false },
          place: { text: '帝都某 SOHO 的某座的某层的某房间', row: false },
          age: { text: 3, row: false },
          sex: { text: '男', row: false },
          marriage: { text: '未婚', row: false },
          hobby: { text: '撩妹，抽烟，喝酒', row: false },
          education: { text: '幼儿园', row: false },
          skin: { text: '蜡黄色', row: false },
        },
      ],
      columnSlot: [
        {
          title: '姓名',
          key: 'name',
        },
        {
          title: '操作',
          key: 'place',
        },
      ],
      dataSlot: [
        {
          name: { text: '李黄河', row: false },
          place: { slot: 'a', row: false },
        },
        {
          name: { text: '李无敌', row: false },
          place: { slot: 'b', row: false },
        },
        {
          name: { text: '李红星', row: false },
          place: { slot: 'c', row: false },
        },
      ],
      columnNo: [
        {
          title: '姓名',
          key: 'name',
        },
        {
          title: '地址',
          key: 'place',
        },
        {
          title: '年龄',
          key: 'age',
        },
        {
          title: '性别',
          key: 'sex',
        },
        {
          title: '婚姻情况',
          key: 'marriage',
        },
        {
          title: '婚姻情况',
          key: 'marriage',
        },
        {
          title: '爱好',
          key: 'hobby',
        },
        {
          title: '学历',
          key: 'education',
        },
        {
          title: '肤色',
          key: 'skin',
        },
      ],
      dataNo: [],
      columnChecked: [
        {
          title: '标题',
          key: 'name',
        },
        {
          title: '地址',
          key: 'place',
        },
      ],
      dataChecked: [
        {
          name: { text: '李千年', row: false },
          place: { text: '帝都', row: false },
        },
        {
          name: { text: '李红星', row: false },
          place: { text: '帝都', row: true },
        },
      ],
      propTableTh: [
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
      propTableTd: [
        {
          attr: { text: 'columns', desc: false },
          desc: { text: '表格 thead 数据。数据格式 [ { title: \'标题\', key: \'name\' } ]。<br>数据详解：<br> title：表头的内容。<br> key 是对应关系。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'false', row: false },
          default: { text: '[]', row: false },
        },
        {
          attr: { text: 'data', desc: false },
          desc: { text: '表格 tbody 数据。数据格式 [ { name: { text: \'李红星\', row: true, color: \'#1996f9\', hebing: true, slot: false, required: false }, disabled: true } ]。 <br>数据详解：<br> text：文案，当带有 hebing 为 true 的目标合并列中同一 key 值的 row 设为 true 时，必须为空或没有 text 属性。 row 为 true 的时候，为空。<br> row：是否合并列，与目标合并。<br> color：改变内容文字颜色， 1.3.0 新增。<br> hebing: 设置在目标合并的列，并为 true，同时 row 为 true 。<br> slot：希望传入多个 slot ，需要把数据里的 slot 设置为 a - i ，插入的 slot 对应 a - i 。 required：为 true 时，左边会有红星标注。 <br> disabled：为 true 时，当前行置灰。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'false', row: false },
          default: { text: '[]', row: false },
        },
        {
          attr: { text: 'hover', desc: false },
          desc: { text: '鼠标移入表格主体内容时候整行变色。', row: false },
          type: { text: 'String | Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'border', desc: false },
          desc: { text: '表格主体每列之间以竖线隔开。', row: false },
          type: { text: 'String | Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'nothingText( nothing-text )', desc: false },
          desc: { text: '表格主体无数据的文案。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '尚未收集到数据', row: false },
        },
        {
          attr: { text: 'classAddName(class-add-name)', desc: false },
          desc: { text: '自定义的 class 名称。 1.3.0 开始建议使用 className(class-name) 。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'className(class-name)', desc: false },
          desc: { text: '自定义的 class 名称。 1.3.0 新增。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
      ],
      propHeadTh: [
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
      propHeadTd: [
        {
          attr: { text: 'checked', desc: false },
          desc: { text: '当前被选中。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '-1', row: false },
        },
      ],
      eventHeadTh: [
        {
          title: '事件',
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
      eventHeadTd: [
        {
          attr: { text: 'thJump', desc: false },
          desc: { text: '点击触发。 1.3.0 开始建议使用 click', row: false },
          return: { text: '当前索引', row: false },
        },
        {
          attr: { text: 'click', desc: false },
          desc: { text: '点击触发。 1.3.0 新增。', row: false },
          return: { text: '当前索引', row: false },
        },
      ],
      propBodyTh: [
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
      propBodyTd: [
        {
          attr: { text: 'dataList', desc: false },
          desc: { text: '表格主体的每条数据。', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
        },
        {
          attr: { text: 'ind', desc: false },
          desc: { text: '表格主体循环的索引。点击触发时候被返回。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '0', row: false },
        },
        {
          attr: { text: 'checked', desc: false },
          desc: { text: '当前被选中。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '-1', row: false },
        },
      ],
      eventBodyTh: [
        {
          title: '事件',
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
      eventBodyTd: [
        {
          attr: { text: 'jump', desc: false },
          desc: { text: '点击触发。 1.3.0 开始建议使用 click', row: false },
          return: { text: '当前索引( 设置的 ind )', row: false },
        },
        {
          attr: { text: 'click', desc: false },
          desc: { text: '点击触发。 1.3.0 新增。', row: false },
          return: { text: '当前索引( 设置的 ind )', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
