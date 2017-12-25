export default {
  base: `
<emfe-slide :percent="78" max-percent="100" slide-left="小" slide-right="大"></emfe-slide>`,
  scale: `
<template>
  <emfe-slide :percent="30" max-percent="100" slide-left="小" slide-right="大" @change="scaleChange"></emfe-slide>
</template>
<script>

  const step = 10;

  export default {
    data() {
      return {
        scale: 12,
      };
    },
    methods: {
      scaleChange(val) {
        const scale = val * 0.01;
        this.scale = (scale * step) + step;
      },
    },
  },
</script>`,
};
