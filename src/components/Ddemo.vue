<template>
  <emfe-row className="demo">
    <emfe-col className="demo" span="12" ref="review">
      <div class="demo-preview">
        <slot></slot>
      </div>
      <div class="demo-info">
        <header class="demo-header">
          <span class="demo-title">{{ title }}</span>
        </header>
        <p class="p demo-p">{{ info }}</p>
      </div>
    </emfe-col>
    <emfe-col className="demo" span="12" :style="{height: `${height}`}" ref="source">
      <div class="demo-code-box">
        <d-code :type="type" className="demo" :href="href" ref="code">{{ code }}</d-code>
      </div>
      <div class="demo-more" v-show="hasMore" @click="moreClick">
        <emfe-icon className="demo" type="gengduo" @click="moreClick" :class="{'demo-icon-active': more}"></emfe-icon>
      </div>
    </emfe-col>
  </emfe-row>
</template>
<script>
import loadcomponents from '@/tools/loadcomponents';

export default {
  data() {
    return {
      copied: false,
      review: 0,
      source: 0,
      codeHeight: 0,
      height: 0,
      more: false,
      hasMore: true,
    };
  },
  props: {
    code: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    href: {
      type: String,
    },
    type: {
      type: String,
      default: 'html',
    },
  },
  mounted() {
    // 不加定时器，有可能高度获取不正确，如 /doc/bar 中的 demo
    setTimeout(() => {
      const reviewHeight = this.$refs.review.$el.clientHeight;
      this.review = `${reviewHeight}px`;
      this.codeHeight = this.$refs.code.$el.clientHeight;
      this.source = 'auto';
      this.height = this.review;
      this.hasMore = this.codeHeight > reviewHeight;
    }, 0);
  },
  methods: {
    moreClick() {
      this.height = this.more ? this.review : this.source;
      this.more = !this.more;
    },
  },
  components: {
    dCode: loadcomponents.load('Dcode'),
  },
};
</script>

<style lang="scss">
@import "../assets/styles/components/dcode.scss";
</style>
