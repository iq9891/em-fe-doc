<template>
  <div class="dcode">
    <pre class="pre"><code class="code" ref="code"><slot></slot></code></pre>
    <a class="link dcode-handle" href="javascript:;">复制</a>
    <span class="dcode-type">{{type}}</span>
  </div>
</template>
<script>
import code from '@/tools/code';

export default {
  props: {
    type: {
      type: String,
      default: 'js',
    },
  },
  mounted() {
    this.code = this.$refs.code.innerHTML;
    this.$refs.code.innerHTML = code[this.type](this.code);
  },
};
</script>

<style lang="scss">
@import "../assets/styles/components/dcode.scss";
</style>
