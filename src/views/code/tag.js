export default {
  base: `
<emfe-tag-parent class-name="default">
  <emfe-tag index="0">默认</emfe-tag>
  <emfe-tag index="1" active="true">选中</emfe-tag>
  <emfe-tag index="2" disable="true">禁止</emfe-tag>
</emfe-tag-parent>`,
  checket: `
<emfe-tag-parent class-name="checket">
  <emfe-tag index="0">默认</emfe-tag>
  <emfe-tag index="1" active="true">选中</emfe-tag>
  <emfe-tag index="2" disable="true">禁止</emfe-tag>
</emfe-tag-parent>`,
  icon: `
<emfe-tag-parent class-name="default">
  <emfe-tag index="0" type="fabu">默认</emfe-tag>
  <emfe-tag index="1" type="erweima" active="true">选中</emfe-tag>
  <emfe-tag index="2" type="tishi" disable="true">禁止</emfe-tag>
</emfe-tag-parent>`,
  blue: `
<emfe-tag-parent class-name="screen" skin="blue">
  <emfe-tag index="0">默认</emfe-tag>
  <emfe-tag index="1" active="true">>选中</emfe-tag>
</emfe-tag-parent>`,
  yellow: `
<template>
  <emfe-tag-parent class-name="screen" skin="yellow" :data="tagDatas">
    <emfe-tag v-for="(tagData, index) in tagDatas" :key="index" :index="index" active="true" >{{tagData}}</emfe-tag>
  </emfe-tag-parent>
</template>
<script>
  export default {
    data() {
      return {
        tagDatas: ['选中点击删除', '选中点击删除'],
      };
    },
  },
</script>`,
};
