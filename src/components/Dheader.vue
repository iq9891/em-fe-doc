<template>
  <header class="dheader">
    <h1 class="dheader-title">
      <router-link class="link dheader-title-link" :to="{ name: 'Home' }">EM-FE</router-link>
      <a href="https://www.npmjs.org/package/em-fe">
        <img src="https://camo.githubusercontent.com/951fffbb1cfd3b9a40ea74d3f939454fd2de2c9a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f656d2d66652e7376673f7374796c653d666c61742d737175617265" alt="version" data-canonical-src="https://img.shields.io/npm/v/em-fe.svg?style=flat-square" style="max-width:100%;color:#1996f9;font-size: 12px;">
      </a>
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
