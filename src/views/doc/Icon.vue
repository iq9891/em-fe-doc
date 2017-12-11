<template>
  <article class="icon">
    <h2 class="h2">字体图标</h2>
    <p class="p">Em-FE 使用的是 <a href="http://www.iconfont.cn/" class="link">iconfont</a> 生成的字体。</p>
    <h4 class="h4">如何使用</h4>
    <p class="p">使用 <code class="code-inline">&lt;emfe-icon /&gt;</code> 组件，指定图标对应的 <code class="code-inline">type</code> 属性，示例代码：</p>
    <d-code type="html" href="http://output.jsbin.com/zopumap">{{ emfe }}</d-code>
    <p class="p">渲染后为：</p>
    <d-code type="html" href="http://output.jsbin.com/zopumap">{{ rendor }}</d-code>
    <h4 class="h4">API</h4>
    <h5 class="h5">Icon 属性</h5>
    <emfe-table class="table" :columns="propTh" :data="propTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in propTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h5 class="h5">Icon 事件</h5>
    <emfe-table class="table" :columns="methodTh" :data="methodTd">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in methodTd" :ind="index" :key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <h4 class="h4">示例</h4>
    <p class="p">下面是例子，可以搜索，可以复制。点击下面的图标按钮可以直接复制组件代码！！</p>
    <emfe-row :gutter="16">
      <emfe-col className="color" :xl="12" :lg="18" :md="16" :xs="12" span="18">
        <emfe-input v-model="icon" placeholder="搜索君，我只认识英文，如 fabu" className="icon"></emfe-input>
      </emfe-col>
    </emfe-row>
    <emfe-row :gutter="16">
      <emfe-col className="icon" :xl="2" :lg="4" :md="6" :xs="12" span="24" v-for="(iconName, iconIndex) in iconNames" :key="iconIndex">
        <div class="copy icon-item" @click="copyIcon(iconName)">
          <emfe-icon className="icon" :type="iconName"></emfe-icon>
          <p class="p icon-p">{{ iconName }}</p>
        </div>
      </emfe-col>
    </emfe-row>
  </article>
</template>

<script>
import Clipboard from 'clipboard';
import loadcomponents from '@/tools/loadcomponents';
import icon from '@/views/code/icon';
import iconNames from '@/views/code/iconname';

export default {
  data() {
    const { emfe, rendor, copy } = icon;
    return {
      emfe,
      rendor,
      copy,
      icon: '',
      propTh: [
        {
          title: '属性',
          key: 'name',
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
          title: '默认值',
          key: 'default',
        },
      ],
      propTd: [
        {
          name: { text: 'type', row: false },
          desc: { text: '图标的名称', row: false },
          type: { text: 'String', row: false },
          default: { text: '-', row: false },
        },
        {
          name: { text: 'class-name', row: false },
          desc: { text: '自定义的 class 名称', row: false },
          type: { text: 'String', row: false },
          default: { text: '-', row: false },
        },
      ],
      methodTh: [
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
      methodTd: [
        {
          name: { text: 'click', row: false },
          desc: { text: '点击触发。并且是阻止冒泡。', row: false },
          return: { text: '-', row: false },
        },
      ],
    };
  },
  computed: {
    iconNames() {
      return iconNames.filter((iName) => {
        const rName = new RegExp(this.icon, 'gi');
        return rName.test(iName);
      });
    },
  },
  methods: {
    copyIcon(type) {
      const self = this;
      const clipboard = new Clipboard('.copy', {
        text() {
          return self.copy(type);
        },
      });

      clipboard.on('success', (e) => {
        e.clearSelection();
        clipboard.destroy();
        this.$EmfeMessage.success({
          content: '代码已复制到剪贴板',
        });
        setTimeout(() => {
          this.copied = false;
        }, 5000);
      });
    },
  },
  components: {
    dCode: loadcomponents.load('Dcode'),
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/views/doc/icon.scss";
</style>
