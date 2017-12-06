<template>
  <article class="color">
    <h2 class="h2">色彩</h2>
    <p class="p">本节将介绍如何在项目中， EM-FE 遵循的色彩规范</p>
    <h3 class="h3">概述</h3>
    <p class="p">EM-FE 推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。</p>
    <h4 class="h4">品牌色 brand</h4>
    <emfe-row :gutter="16" className="color">
      <emfe-col className="color" span="6">
        <div class="color-common color-brand-default">
          <h5 class="color-title">brand 默认</h5>
          <p class="color-desc">#1996f9</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-brand-hover">
          <h5 class="color-title">brand 悬停</h5>
          <p class="color-desc">#50affa</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-brand-focus">
          <h5 class="color-title">brand 点击</h5>
          <p class="color-desc">#147dd9</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-brand-active">
          <h5 class="color-title">brand 选中</h5>
          <p class="color-desc">#f2f9ff</p>
        </div>
      </emfe-col>
    </emfe-row>
    <h4 class="h4">辅助色 auxiliary</h4>
    <emfe-row :gutter="16" className="color">
      <emfe-col className="color" span="6">
        <div class="color-common color-auxiliary-success">
          <h5 class="color-title">auxiliary 成功</h5>
          <p class="color-desc">#4cbd63</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-auxiliary-warning">
          <h5 class="color-title">auxiliary 警告</h5>
          <p class="color-desc">#fd883b</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-auxiliary-danger">
          <h5 class="color-title">auxiliary 危险</h5>
          <p class="color-desc">#ff4949</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-auxiliary-info">
          <h5 class="color-title">auxiliary 提示</h5>
          <p class="color-desc">#1996f9</p>
        </div>
      </emfe-col>
    </emfe-row>
    <h4 class="h4">文字色 font</h4>
    <emfe-row :gutter="16" className="color">
      <emfe-col className="color" span="3">
        <div class="color-common color-font-text">
          <h5 class="color-title">正文颜色</h5>
          <p class="color-desc">#333333</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="3">
        <div class="color-common color-font-menu">
          <h5 class="color-title">一级侧导航颜色</h5>
          <p class="color-desc">#454545</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="3">
        <div class="color-common color-font-bar">
          <h5 class="color-title">二级侧导航颜色</h5>
          <p class="color-desc">#666666</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="3">
        <div class="color-common color-font-prompt">
          <h5 class="color-title">提示颜色</h5>
          <p class="color-desc">#999999</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="3">
        <div class="color-common color-font-disable">
          <h5 class="color-title">禁用颜色</h5>
          <p class="color-desc">#d8d8d8</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="3">
        <div class="color-common color-font-tag-checkout">
          <h5 class="color-title">标签多选颜色</h5>
          <p class="color-desc">#ecb55d</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="3">
        <div class="color-common color-font-tag-checkout-active">
          <h5 class="color-title">标签选中颜色</h5>
          <p class="color-desc">#ecb55d</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="3">
        <div class="color-common color-font-write">
          <h5 class="color-title">白色</h5>
          <p class="color-desc">#ffffff</p>
        </div>
      </emfe-col>
    </emfe-row>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import install from '@/views/code/install';

export default {
  data() {
    const { importscript, cdn } = install;
    return {
      importscript,
      cdn,
    };
  },
  components: {
    dCode: loadcomponents.load('Dcode'),
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/views/doc/color.scss";
</style>
