<template>
  <article class="font">
    <h2 class="h2">Font 字体</h2>
    <p class="p">EM-FE 的 CSS 对字体进行了统一规范。跨平台的字体设定，力求在各个操作系统下都有最佳展示效果。</p>
    <h3 class="h3">概述</h3>
    <p class="p">EM-FE 推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。</p>
    <h4 class="h4">中文字体</h4>
    <emfe-row :gutter="16" className="font">
      <emfe-col className="font" span="9">
        <div class="font-common">
          <h5 class="font-title font-title-yahei">连接人与现场</h5>
          <p class="font-desc">Microsoft YaHei</p>
        </div>
      </emfe-col>
      <emfe-col className="font" span="9">
        <div class="font-common">
          <h5 class="font-title font-title-pingfangsc">连接人与现场</h5>
          <p class="font-desc">PingFangSC</p>
        </div>
      </emfe-col>
    </emfe-row>
    <h4 class="h4">英文字体</h4>
    <emfe-row :gutter="16" className="font">
      <emfe-col className="font" span="9">
        <div class="font-common">
          <h5 class="font-title font-title-helvetica">Connecting people and spot</h5>
          <p class="font-desc">Helvetica</p>
        </div>
      </emfe-col>
      <emfe-col className="font" span="9">
        <div class="font-common">
          <h5 class="font-title font-title-arial">Connecting people and spot</h5>
          <p class="font-desc">Arial</p>
        </div>
      </emfe-col>
    </emfe-row>
    <h4 class="h4">Font-family 代码</h4>
    <d-code type="css">{{ font }}</d-code>
    <h4 class="h4">字体使用规范</h4>
    <emfe-table class="table" :columns="fontTh" :data="fontTd">
      <emfe-table-head slot="head">
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in fontTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import font from '@/views/code/font';

export default {
  data() {
    return {
      font,
      fontTh: [
        {
          title: '类型',
          key: 'type',
        },
        {
          title: '示例',
          key: 'demo',
        },
        {
          title: '粗细',
          key: 'weight',
        },
        {
          title: '颜色',
          key: 'color',
        },
        {
          title: '字号',
          key: 'size',
        },
      ],
      fontTd: [
        {
          type: { text: '标题', row: false },
          demo: { text: '<p style="font-size: 16px;color:#333;">连接人与现场</p>', row: false },
          weight: { text: '默认', row: false },
          color: { text: '#333333', row: false },
          size: { text: '16px', row: false },
        },
        {
          type: { text: '正文', row: false },
          demo: { text: '<p style="font-size: 14px;color:#333;">连接人与现场</p>', row: false },
          weight: { text: '默认', row: false },
          color: { text: '#333333', row: false },
          size: { text: '14px', row: false },
        },
        {
          type: { text: '提示文字', row: false },
          demo: { text: '<p style="font-size: 12px;color:#333;">连接人与现场</p>', row: false },
          weight: { text: '默认', row: false },
          color: { text: '#333333', row: false },
          size: { text: '12px', row: false },
        },
      ],
    };
  },
  components: {
    dCode: loadcomponents.load('Dcode'),
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/views/doc/font.scss";
</style>
