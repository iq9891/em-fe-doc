<template>
  <article class="transition">
    <h2 class="h2">Transition 动画</h2>
    <p class="p">EM-FE 内应用在部分组件的过渡动画，你也可以直接使用。在使用之前请阅读 <a href="https://cn.vuejs.org/v2/api/#transition" class="link">transition 组件文档</a>。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="transition.height" href="http://output.jsbin.com/sakopec" title="高度动画" info="属性 name 为 gradual">
      <emfe-button @click="gradual">点我</emfe-button>
      <emfe-transition name="gradual">
        <div class="transition-block" v-show="gradualStatus">改变高度的动画</div>
      </emfe-transition>
    </d-demo>
    <d-demo :code="transition.fade" href="http://output.jsbin.com/zinobin" title="透明度动画" info="属性 name 为 fade">
      <emfe-button @click="fade">点我</emfe-button>
      <emfe-transition name="fade">
        <div class="transition-block" v-show="fadeStatus">改变透明度的动画</div>
      </emfe-transition>
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
import transition from '@/views/code/transition';

export default {
  data() {
    return {
      transition,
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
          attr: { text: 'name', desc: false },
          desc: { text: '动画类型，目前只有 fade | gradual', row: false },
          type: { text: 'String', row: false },
          must: { text: 'false', row: false },
          default: { text: 'v', row: false },
        },
      ],
      gradualStatus: true,
      fadeStatus: true,
    };
  },
  methods: {
    gradual() {
      this.gradualStatus = !this.gradualStatus;
    },
    fade() {
      this.fadeStatus = !this.fadeStatus;
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/views/doc/transition.scss";
</style>
