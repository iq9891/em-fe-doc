<template>
  <div class="dcode">
    <pre class="pre"><code class="code" ref="code"><slot></slot></code></pre>
    <div class="dcode-handle">
      <a class="link dcode-handle-item" href="javascript:;">复制</a>
      <a class="link dcode-handle-item" v-if="href" target="_blank" :href="href">在线预览</a>
    </div>
    <span class="dcode-type">{{type}}</span>
  </div>
</template>
<script>
import highlightjs from 'highlightjs';
import 'highlightjs/styles/github.css';

export default {
  props: {
    type: {
      type: String,
      default: 'js',
    },
    href: {
      type: String,
    },
  },
  mounted() {
    this.code = this.$refs.code.innerHTML.replace(/\n/, '');
    this.$refs.code.innerHTML = this.code;
    highlightjs.highlightBlock(this.$refs.code);
  },
};
</script>

<style lang="scss">
@import "../assets/styles/components/dcode.scss";
</style>
