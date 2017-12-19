export default {
  base: `
<template>
  <emfe-inputmore-group :datas="group1"></emfe-inputmore-group>
</template>
<script>
  export default {
    data() {
      return {
        group1: [
          '内容1',
        ],
      };
    },
  },
</script>`,
  icon: `
<template>
  <emfe-inputmore-group :datas="group2" icon="shouji1"></emfe-inputmore-group>
</template>
<script>
  export default {
    data() {
      return {
        group2: [
          'icon 1',
        ],
      };
    },
  },
</script>`,
};
