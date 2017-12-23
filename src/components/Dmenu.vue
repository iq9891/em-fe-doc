<template>
  <div class="dmenu">
    <input type="text" class="input dmenu-search" placeholder="搜索君">
    <div class="dmenu-content">
      <div class="dmenu-link-box dmenu-h2">
        <router-link class="link dmenu-link" :to="{ name: 'Install' }">安装</router-link>
      </div>
      <div class="dmenu-link-box dmenu-h2">
        <router-link class="link dmenu-link" :to="{ name: 'Start' }">快速开始</router-link>
      </div>
      <h2 class="dmenu-h2">设计规范</h2>
      <ul class="dmenu-ul">
        <li class="dmenu-li" v-for="ui in uis">
          <router-link class="link dmenu-link" :to="ui.router">{{ ui.title }}</router-link>
        </li>
      </ul>
      <h2 class="dmenu-h2">组件</h2>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Base 基础</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.base">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Nav 导航</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.nav">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Form 表单</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.form">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Picker 选择器</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.picker">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Board 板子</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.board">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Other 其他</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.other">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Tip 提示</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.tip">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Drag 拖拽</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.drag">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Service 服务</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.service">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
import uis from './menus/ui';
import cpts from './menus/cpt';

export default {
  data() {
    return {
      uis,
      cpts,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/styles/components/dmenu.scss";
</style>
