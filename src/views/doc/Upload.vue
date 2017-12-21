<template>
  <article class="upload">
    <h2 class="h2">Upload 上传</h2>
    <p class="p">文件选择上传，大多数是图片。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="upload.base" href="http://output.jsbin.com/zufatuj" title="基本用法" info="只需加上 action 属性即可。">
      <emfe-upload action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>
    </d-demo>
    <d-demo :code="upload.icon" href="http://output.jsbin.com/meqikim" title="icon" info="只需 type 设为 icon 即可。">
      <emfe-upload type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>
    </d-demo>
    <d-demo :code="upload.url" href="http://output.jsbin.com/xiwuram" title="url 图片" info="设置 url 即可。">
      <emfe-upload url="http://dummyimage.com/200x200" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>
    </d-demo>
    <d-demo :code="upload.disabled" href="http://output.jsbin.com/jazatez" title="禁用" info="只需 disabled 设为 true 即可。">
      <emfe-upload :disabled="true" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>
    </d-demo>
    <d-demo :code="upload.intercept" href="http://output.jsbin.com/xevokoc" title="等比截取" info="用 intercept 设置目标比例[width, height]。">
      <emfe-upload :intercept="[100, 60]" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>
    </d-demo>
    <d-demo :code="upload.interceptSync" href="http://output.jsbin.com/forinej" title="普通截取" info="用 intercept 设置目标比例[width, height]。 interceptSync 设置为 false 。 1.3.0 新增。">
      <emfe-upload :intercept="[100, 60]" :interceptSync="false" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>
    </d-demo>
    <h4 class="h4">API</h4>
    <h5 class="h5">属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">方法</h5>
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
import upload from '@/views/code/upload';

export default {
  data() {
    return {
      upload,
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
          attr: { text: 'action', desc: false },
          desc: { text: 'ajax提交路径。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'true', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'type', desc: false },
          desc: { text: '上传组件的类型，可选参数： plus | icon 。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'plus', row: false },
        },
        {
          attr: { text: 'disabled', desc: false },
          desc: { text: '是否禁用。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'headers', desc: false },
          desc: { text: '设置上传的请求头部。', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '{}', row: false },
        },
        {
          attr: { text: 'data', desc: false },
          desc: { text: '上传时附带的额外参数。', row: false },
          type: { text: 'Object', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'name', desc: false },
          desc: { text: '上传的文件字段名。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'file', row: false },
        },
        {
          attr: { text: 'withCredentials( with-credentials )', desc: false },
          desc: { text: '是否跨站点的访问控制。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'false', row: false },
        },
        {
          attr: { text: 'format', desc: false },
          desc: { text: '支持的文件类型，format 是识别文件的后缀名。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'false', row: false },
          default: { text: '[]', row: false },
        },
        {
          attr: { text: 'maxSize( max-size )', desc: false },
          desc: { text: '文件大小限制，单位 kb 。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'url', desc: false },
          desc: { text: '设置图片。', row: false },
          type: { text: 'Number', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'intercept', desc: false },
          desc: { text: '截取器的默认尺寸。', row: false },
          type: { text: 'Array', row: false },
          must: { text: 'false', row: false },
          default: { text: '[]', row: false },
        },
        {
          attr: { text: 'interceptSync( intercept-sync )', desc: false },
          desc: { text: '是否是等比缩放截取器尺寸。 1.3.0 新增。', row: false },
          type: { text: 'Boolean', row: false },
          must: { text: 'false', row: false },
          default: { text: 'true', row: false },
        },
        {
          attr: { text: 'buttonText( button-text )', desc: false },
          desc: { text: '当 type 为 icon 的时候，设置按钮文案。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '上传图片', row: false },
        },
        {
          attr: { text: 'theme', desc: false },
          desc: { text: '当 type 为 icon 的时候，设置按钮主题。可选参数： default | primary 。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'default', row: false },
        },
        {
          attr: { text: 'fileType( file-type )', desc: false },
          desc: { text: '设置上传文件类型。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'image', row: false },
        },
        {
          attr: { text: 'className(class-name)', desc: false },
          desc: { text: '自定义的 class 名称。', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: '-', row: false },
        },
        {
          attr: { text: 'success', desc: false },
          desc: { text: '上传成功。返回：请求结果， 文件读取数据，文件列表，emfe提示方法。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function() {}', row: false },
        },
        {
          attr: { text: 'error', desc: false },
          desc: { text: '上传失败。返回：请求结果， 文件读取数据，文件列表，emfe提示方法。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function() {}', row: false },
        },
        {
          attr: { text: 'close', desc: false },
          desc: { text: '关闭上传弹出框。返回：emfe提示方法。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function() {}', row: false },
        },
        {
          attr: { text: 'beforeUpload( before-upload )', desc: false },
          desc: { text: '上传之前。返回：文件，emfe提示方法。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function() {}', row: false },
        },
        {
          attr: { text: 'formatError( format-error )', desc: false },
          desc: { text: '文件格式验证失败触发。返回：文件，emfe提示方法。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function() {}', row: false },
        },
        {
          attr: { text: 'exceededSize( exceeded-size )', desc: false },
          desc: { text: '文件超出指定大小限制时触发。返回：文件，文件列表，emfe提示方法。', row: false },
          type: { text: 'Function', row: false },
          must: { text: 'false', row: false },
          default: { text: 'function() {}', row: false },
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
          attr: { text: 'success', desc: false },
          desc: { text: '上传成功', row: false },
          return: { text: '请求结果，文件读取数据，文件列表，emfe提示方法', row: false },
        },
        {
          attr: { text: 'error', desc: false },
          desc: { text: '上传失败', row: false },
          return: { text: '请求结果，文件读取数据，文件列表，emfe提示方法。', row: false },
        },
        {
          attr: { text: 'close', desc: false },
          desc: { text: '关闭上传弹出框', row: false },
          return: { text: 'emfe提示方法。', row: false },
        },
        {
          attr: { text: 'beforeUpload', desc: false },
          desc: { text: '上传之前', row: false },
          return: { text: '文件，emfe提示方法。', row: false },
        },
        {
          attr: { text: 'formatError', desc: false },
          desc: { text: '文件格式验证失败触发', row: false },
          return: { text: '文件，emfe提示方法。', row: false },
        },
        {
          attr: { text: 'exceededSize', desc: false },
          desc: { text: '文件超出指定大小限制时触发', row: false },
          return: { text: '文件，文件列表，emfe提示方法。', row: false },
        },
      ],
    };
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
