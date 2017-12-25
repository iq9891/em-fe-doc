<template>
  <article class="documentclick">
    <h2 class="h2">Documentclick 顶级事件</h2>
    <p class="p">给 document 绑定点击事件。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="documentclick.base" href="http://output.jsbin.com/yohapaq" title="基本用法" info="绑定指令。">
      <p class="p" v-emfe-documentclick="click">点击 body 次数： {{time}} 次</p>
    </d-demo>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import documentclick from '@/views/code/documentclick';

export default {
  data() {
    return {
      documentclick,
      time: 0,
    };
  },
  methods: {
    click() {
      this.time++;
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
  },
};
</script>
