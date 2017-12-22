export default {
  base: `
<template>
  <emfe-datapanel @link="link" link-text='查看详情' title="总收集量" icon="fabu" content-text="99" company-text="人">
    <div slot="tipText">一套基于 Vue.js 企业级定制 UI 组件库。承载着千千万万 vue 重度开发者的愿景。</div>
  </emfe-datapanel>
</template>
<script>
  export default {
    methods: {
      link() {
        window.location.href = 'https://www.evente.cn';
      },
    },
  },
</script>`,
};
