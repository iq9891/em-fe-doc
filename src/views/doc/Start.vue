<template>
  <article class="start">
    <h2 class="h2">快速开始</h2>
    <p class="p">本节将介绍如何在项目中使用 EM-FE</p>
    <h3 class="h3">使用 vue-cli</h3>
    <p class="p">我们还可以使用 <a href="https://github.com/vuejs/vue-cli" class="link" target="_blank">vue-cli</a> 初始化项目，命令如下：</p>
    <d-code type="bash">{{text}}</d-code>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h2 class="h2">快速开始</h2>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import start from '@/views/code/start';
// .trim()
//           .replace(/\s{5}/g, '\n')
//           .replace(/&lt;/g, '<')
//           .replace(/&gt;/g, '>')
//           .replace(/&amp;/g, '&')
export default {
  data() {
    return {
      text: start.cli,
    };
  },
  mounted() {
  },
  components: {
    dCode: loadcomponents.load('Dcode'),
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/views/doc/start.scss";
</style>
