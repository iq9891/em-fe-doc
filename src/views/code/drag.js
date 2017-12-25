export default {
  base: `
<template>
  <emfe-drag class-name="doc">我可以动</emfe-drag>
</template>
<style>
.doc-box {
  border: 1px solid #dcdcdc;
  height: 100px;
  width: 120px;
  position: relative;
}
.doc-drag {
  border: 1px solid #dcdcdc;
  width: 30px;
  height: 30px;
  position: absolute;
  cursor: all-scroll
}
</style>`,
  limit: `
<template>
  <div class="doc-box">
    <emfe-drag class-name="doc" limit="true" limit-position="center">我可以动</emfe-drag>
  </div>
</template>
<style>
.doc-box {
  border: 1px solid #dcdcdc;
  height: 100px;
  width: 120px;
  position: relative;
}
.doc-drag {
  border: 1px solid #dcdcdc;
  width: 30px;
  height: 30px;
  position: absolute;
  cursor: all-scroll;

  /* 拖拽时禁止选中文字 */
  pointer-events: none;
}
</style>`,
  direction: `
<template>
  <emfe-drag class-name="doc" direction="horizontal">我可以动</emfe-drag>
</template>
<style>
.doc-box {
  border: 1px solid #dcdcdc;
  height: 100px;
  width: 120px;
  position: relative;
}
.doc-drag {
  border: 1px solid #dcdcdc;
  width: 30px;
  height: 30px;
  position: absolute;
  cursor: all-scroll;

  /* 拖拽时禁止选中文字 */
  pointer-events: none;
}
</style>`,
  parent: `
<template>
  <emfe-drag class-name="doc-parent" :drag-el="drag1" :initial-value="-15">
    <div class="doc-drag" ref="drag1"></div>
  </emfe-drag>
</template>
<style>
.doc-parent-drag {
  border: 1px solid #dcdcdc;
  height: 100px;
  width: 120px;
  position: relative;
}
.doc-drag {
  border: 1px solid #dcdcdc;
  width: 30px;
  height: 30px;
  position: absolute;
  cursor: all-scroll;

  /* 拖拽时禁止选中文字 */
  pointer-events: none;
}
</style>
<script>
  export default {
    data() {
      return {
        drag1: [],
      };
    },
    mounted() {
      setTimeout(() => {
        this.drag1.push(this.$refs.drag1);
      }, 0);
    },
  },
</script>`,
};
