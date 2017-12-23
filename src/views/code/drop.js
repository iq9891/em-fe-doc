export default {
  base: `
<template>
  <emfe-drop class-name="doc-drop" :opations-data="list"></emfe-drop>
</template>
<style>
.doc-drop {
  height: 32px;
  display: flex;
}

.doc-drop-drag {
  flex-wrap: nowrap;
  flex: 1;
  height: 32px;
  line-height: 32px;
  border: 1px solid #dcdcdc;
  margin-left: -1px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: none;
  cursor: move;
}
</style>
<script>
  export default {
    data() {
      return {
        list: [
          {
            title: 1,
          },
          {
            title: 2,
          },
          {
            title: 3,
          },
          {
            title: 4,
          },
          {
            title: 5,
          },
        ],
      };
    },
  },
</script>`,
  url: `
<emfe-link :routers="{ url: 'https://www.evente.cn' }">去活动易</emfe-link>`,
};
