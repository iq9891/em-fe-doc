export default {
  base: `
<template>
  <p class="p" v-emfe-documentclick="click">点击 body 次数： {{time}} 次</p>
</template>
<script>
  export default {
    data() {
      return {
        time: 0,
      };
    },
    methods: {
      click() {
        this.time++;
      },
    },
  },
</script>`,
};
