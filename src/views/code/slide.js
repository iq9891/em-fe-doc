export default {
  base: `
<emfe-slide :percent="78" maxPercent="100" slideLeft="小" slideRight="大"></emfe-slide>`,
  scale: `
<template>
  <emfe-slide :percent="30" maxPercent="100" slideLeft="小" slideRight="大" @change="scaleChange"></emfe-slide>
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
