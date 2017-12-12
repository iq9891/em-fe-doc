<template>
  <div class="dcode" :class="dcodeName">
    <pre class="pre" :class="preName"><code class="code" :class="codeName" ref="code"><slot></slot></code></pre>
    <div class="dcode-handle">
      <a class="link copy dcode-handle-item" href="javascript:void('复制');" title="复制" @click="copy">{{ copied ? '已' : ''}}复制</a>
      <a class="link dcode-handle-item" v-if="href" target="_blank" title="在线预览" :href="href">在线预览</a>
    </div>
    <span class="dcode-type">{{type}}</span>
  </div>
</template>
<script>
import 'highlightjs/styles/github.css';
import highlightjs from 'highlightjs';
import Clipboard from 'clipboard';

export default {
  data() {
    return {
      html: '',
      copied: false,
    };
  },
  props: {
    type: {
      type: String,
      default: 'js',
    },
    href: {
      type: String,
    },
    className: {
      type: String,
    },
  },
  computed: {
    dcodeName() {
      return this.className ? `${this.className}-dcode` : '';
    },
    preName() {
      return this.className ? `${this.className}-pre` : '';
    },
    codeName() {
      return this.className ? `${this.className}-code` : '';
    },
  },
  mounted() {
    this.html = this.$refs.code.innerHTML.replace(/\n/, '');
    this.$refs.code.innerHTML = this.html;
    highlightjs.highlightBlock(this.$refs.code);
  },
  methods: {
    copy() {
      const code = this.html.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

      const clipboard = new Clipboard('.copy', {
        text() {
          return code;
        },
      });

      clipboard.on('success', (e) => {
        e.clearSelection();
        clipboard.destroy();
        this.copied = true;
        this.$EmfeMessage.success({
          content: '代码已复制到剪贴板',
        });
        setTimeout(() => {
          this.copied = false;
        }, 5000);
      });
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/components/dcode.scss";
</style>
