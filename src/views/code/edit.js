export default {
  base: `
<template>
  <emfe-edit :one-list="oneList" :add-one-obj="addOneObj" one-placeholder="一级选项提示" two-placeholder="二级选项提示" :add-two-obj="addTwoObj"></emfe-edit>
</template>
<script>
  export default {
    data() {
      return {
        oneList: [
          {
            name: '李红星',
            sub_choices: [
              {
                name: '男',
              },
              {
                name: '天秤座',
              },
            ],
          },
          {
            name: '李偶得',
            sub_choices: [
              {
                name: '男',
              },
              {
                name: '射手座',
              },
            ],
          },
        ],
        addOneObj: {
          name: '一级选项',
          sub_choices: [
            {
              name: '二级选项',
            },
            {
              name: '二级选项',
            },
          ],
        },
        addTwoObj: {
          name: '二级选项',
        },
      };
    },
  },
</script>`,
};
