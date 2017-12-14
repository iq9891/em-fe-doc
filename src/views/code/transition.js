export default {
  height: `
<template>
  <emfe-button @click="gradual">点我</emfe-button>
  <emfe-transition name="gradual">
    <div class="transition-block" v-show="gradualStatus">改变高度的动画</div>
  </emfe-transition>
</template>
<style>
.transition-block {
  width: 200px;
  height: 50px;
  margin: 32px 0 0;
  padding: 16px;
  background: #1996f9;
  color: #fff;
}
</style>
<script>
export default {
  data() {
    return {
      gradualStatus: true,
    };
  },
  methods: {
    gradual() {
      this.gradualStatus = !this.gradualStatus;
    },
  },
}
</script>`,
  fade: `
<template>
<emfe-button @click="fade">点我</emfe-button>
<emfe-transition name="fade">
  <div class="transition-block" v-show="fadeStatus">改变透明度的动画</div>
</emfe-transition>
</template>
<style>
.transition-block {
  width: 200px;
  height: 50px;
  margin: 32px 0 0;
  padding: 16px;
  background: #1996f9;
  color: #fff;
}
</style>
<script>
export default {
  data() {
    return {
      fadeStatus: true,
    };
  },
  methods: {
    fade() {
      this.fadeStatus = !this.fadeStatus;
    },
  },
}
</script>`,
};
