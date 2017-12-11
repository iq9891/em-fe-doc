<template>
  <div class="doc" v-cloak>
    <d-header></d-header>
    <div class="doc-wrap">
      <d-menu></d-menu>
      <div class="doc-view-box">
        <keep-alive>
          <router-view class="doc-view"></router-view>
        </keep-alive>
      </div>
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
@import "../assets/styles/views/doc.scss";
</style>
