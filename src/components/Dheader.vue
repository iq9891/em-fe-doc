<template>
  <header class="dheader">
    <h1 class="dheader-title">
      <router-link class="link dheader-title-link" :to="{ name: 'Home' }">EM-FE</router-link>
    </h1>
    <div class="dheader-list">
      <router-link class="link dheader-btn" :to="{ name: 'Start' }">快速开始</router-link>
      <router-link class="link dheader-btn" :to="{ name: 'Install' }">组件</router-link>
    </div>
  </header>
</template>

<style lang="scss">
@import "../assets/styles/components/dheader.scss";
</style>
