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
        <li class="dmenu-li">
          <router-link class="link dmenu-link" :to="{ name: 'Color' }">色彩</router-link>
        </li>
        <li class="dmenu-li">
          <router-link class="link dmenu-link" :to="{ name: 'Font' }">字体</router-link>
        </li>
      </ul>
      <h2 class="dmenu-h2">组件</h2>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Base</dt>
        <dd class="dmenu-dd">
          <router-link class="link dmenu-link" :to="{ name: 'Start' }">快速开始</router-link>
        </dd>
        <dd class="dmenu-dd">
          <router-link class="link dmenu-link" :to="{ name: 'Install' }">安装</router-link>
        </dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/components/dmenu.scss";
</style>
