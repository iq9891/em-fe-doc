<template>
  <div id="app" class="app" v-cloak>
    <d-header></d-header>
    <div class="app-wrap">
      <d-menu></d-menu>
      <keep-alive>
        <router-view class="app-view"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';

export default {
  components: {
    dHeader: loadcomponents.load('Dheader'),
    dMenu: loadcomponents.load('Dmenu'),
  },
};
</script>

<style lang="scss">
@import "./assets/styles/base.scss";
</style>
