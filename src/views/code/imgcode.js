export default {
  base: `
<template>
  <emfe-imgcode :src="src" v-model="model" @click="click"></emfe-imgcode>
</template>
<script>
  export default {
    data() {
      return {
        model: '',
        src: 'https://static.evente.cn/evente/img/flag/v1/mlxy.jpg',
      };
    },
    methods: {
      click() {
        this.src = 'https://static.evente.cn/evente/img/flag/v1/de.jpg';
      },
    },
  },
</script>`,
};
