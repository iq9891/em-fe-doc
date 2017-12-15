<template>
  <article class="color">
    <h2 class="h2">Color 色彩</h2>
    <p class="p">本节将介绍如何在项目中， EM-FE 遵循的色彩规范。EM-FE 推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。</p>
    <h4 class="h4">品牌色 brand</h4>
    <emfe-row :gutter="16" className="color">
      <emfe-col className="color" span="6">
        <div class="color-common color-brand-default">
          <h5 class="color-title">主色 默认</h5>
          <p class="color-desc">#1996f9</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-brand-hover">
          <h5 class="color-title">浅色 悬停</h5>
          <p class="color-desc">#50affa</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-brand-focus">
          <h5 class="color-title">重色 点击</h5>
          <p class="color-desc">#147dd9</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-brand-active">
          <h5 class="color-title">特浅 选中</h5>
          <p class="color-desc">#f2f9ff</p>
        </div>
      </emfe-col>
    </emfe-row>
    <h4 class="h4 color-h4">辅助色 auxiliary</h4>
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
          <h5 class="color-title">auxiliary 信息</h5>
          <p class="color-desc">#1996f9</p>
        </div>
      </emfe-col>
    </emfe-row>
    <h4 class="h4 color-h4">文字色 font</h4>
    <h5 class="h5">全局</h5>
    <emfe-row :gutter="16" className="color">
      <emfe-col className="color" span="6">
        <div class="color-common color-font-text">
          <h5 class="color-title">正文</h5>
          <p class="color-desc">#333333</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-font-menu">
          <h5 class="color-title">导航</h5>
          <p class="color-desc">#454545</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-font-prompt">
          <h5 class="color-title">默认提示</h5>
          <p class="color-desc">#999999</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-font-disable">
          <h5 class="color-title">禁用</h5>
          <p class="color-desc">#d8d8d8</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-font-tip">
          <h5 class="color-title">特别提示</h5>
          <p class="color-desc">#4cbd63</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-font-error">
          <h5 class="color-title">报错文字</h5>
          <p class="color-desc">#ff4949</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-font-link">
          <h5 class="color-title">超链接</h5>
          <p class="color-desc">#1996f9</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-font-write">
          <h5 class="color-title">填充色按钮</h5>
          <p class="color-desc">#ffffff</p>
        </div>
      </emfe-col>
    </emfe-row>
    <h5 class="h5">图标</h5>
    <emfe-row :gutter="16" className="color">
      <emfe-col className="color" span="6">
        <div class="color-common color-icon-default">
          <h5 class="color-title">默认图标</h5>
          <p class="color-desc">#8d8d8d</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-icon-brand">
          <h5 class="color-title">有色图标</h5>
          <p class="color-desc">#1996f9</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-icon-success">
          <h5 class="color-title">有色图标</h5>
          <p class="color-desc">#4cbd63</p>
        </div>
      </emfe-col>
    </emfe-row>
    <h5 class="h5">复选标签</h5>
    <emfe-row :gutter="16" className="color">
      <emfe-col className="color" span="6">
        <div class="color-common color-font-tag-default">
          <h5 class="color-title">默认</h5>
          <p class="color-desc">#1996f9</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-font-tag-hover">
          <h5 class="color-title">悬停</h5>
          <p class="color-desc">#50affa</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-font-tag-active-default">
          <h5 class="color-title">选中默认</h5>
          <p class="color-desc">#ecb55d</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-font-tag-active-hover">
          <h5 class="color-title">选中悬停</h5>
          <p class="color-desc">#f1cb8d</p>
        </div>
      </emfe-col>
    </emfe-row>
    <h4 class="h4 color-h4">背景色</h4>
    <h5 class="h5">全局</h5>
    <emfe-row :gutter="16" className="color">
      <emfe-col className="color" span="6">
        <div class="color-common color-bg-title">
          <h5 class="color-title">标题/勾选展开</h5>
          <p class="color-desc">#f5f6fa</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-bg-disable">
          <h5 class="color-title">禁用</h5>
          <p class="color-desc">#f4f4f4</p>
        </div>
      </emfe-col>
    </emfe-row>
    <h5 class="h5">切换标签</h5>
    <emfe-row :gutter="16" className="color">
      <emfe-col className="color" span="6">
        <div class="color-common color-bg-tag-default">
          <h5 class="color-title">默认</h5>
          <p class="color-desc">#dfe3e6</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-bg-tag-hover">
          <h5 class="color-title">悬停</h5>
          <p class="color-desc">#e8ebed</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-bg-tag-selected">
          <h5 class="color-title">选中</h5>
          <p class="color-desc">#607384</p>
        </div>
      </emfe-col>
    </emfe-row>
    <h5 class="h5">筛选标签</h5>
    <emfe-row :gutter="16" className="color">
      <emfe-col className="color" span="6">
        <div class="color-common color-bg-tag-default">
          <h5 class="color-title">默认</h5>
          <p class="color-desc">#dfe3e6</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-bg-tag-hover">
          <h5 class="color-title">悬停</h5>
          <p class="color-desc">#e8ebed</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-bg-tag-selected2">
          <h5 class="color-title">选中</h5>
          <p class="color-desc">#fffcf7</p>
        </div>
      </emfe-col>
    </emfe-row>
    <h4 class="h4 color-h4">线框颜色</h4>
    <h5 class="h5">全局</h5>
    <emfe-row :gutter="16" className="color">
      <emfe-col className="color" span="6">
        <div class="color-common color-border-btn-default">
          <h5 class="color-title">默认</h5>
          <p class="color-desc">#dcdcdc</p>
        </div>
      </emfe-col>
    </emfe-row>
    <h5 class="h5">按钮</h5>
    <emfe-row :gutter="16" className="color">
      <emfe-col className="color" span="6">
        <div class="color-common color-border-btn-default">
          <h5 class="color-title">默认</h5>
          <p class="color-desc">#dcdcdc</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-border-btn-hover">
          <h5 class="color-title">悬停</h5>
          <p class="color-desc">#f4f4f4</p>
        </div>
      </emfe-col>
      <emfe-col className="color" span="6">
        <div class="color-common color-border-btn-focus">
          <h5 class="color-title">点击</h5>
          <p class="color-desc">#f4f4f4</p>
        </div>
      </emfe-col>
    </emfe-row>
  </article>
</template>

<script>
import install from '@/views/code/install';

export default {
  data() {
    const { importscript, cdn } = install;
    return {
      importscript,
      cdn,
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/views/doc/color.scss";
</style>
