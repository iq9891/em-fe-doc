<template>
  <div id="app" class="app" v-cloak>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
