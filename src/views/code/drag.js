export default {
  base: `
<template>
  <emfe-drag className="doc">我可以动</emfe-drag>
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
  <emfe-drag className="doc" limit="true" limit-position="center">我可以动</emfe-drag>
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
  direction: `
<template>
  <emfe-drag className="doc" direction="horizontal">我可以动</emfe-drag>
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
  parent: `
<template>
  <emfe-drag className="doc-parent" :dragEl="drag1">
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
  cursor: all-scroll
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
