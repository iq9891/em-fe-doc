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
        <d-code type="html" className="demo" :href="href">{{ code }}</d-code>
      </div>
      <div class="demo-more" @click="moreClick">
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
      height: 0,
      more: false,
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
  },
  mounted() {
    this.review = `${this.$refs.review.$el.clientHeight}px`;
    this.source = 'auto';
    this.height = this.review;
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
