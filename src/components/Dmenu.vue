<template>
  <div class="dmenu">
    <input type="text" class="input dmenu-search" placeholder="搜索组件...">
    <div class="dmenu-content">
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">组件</dt>
        <dd class="dmenu-dd">
          <router-link class="link dmenu-link" :to="{ name: 'Start' }">快速开始</router-link>
        </dd>
        <dd class="dmenu-dd">
          <router-link class="link" :to="{ name: 'Home' }">回家</router-link>
        </dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/components/dmenu.scss";
</style>
