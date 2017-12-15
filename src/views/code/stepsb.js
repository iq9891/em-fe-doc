export default {
  base: `
  <template>
    <emfe-steps-b :datas="stepDatas" :active="2"></emfe-steps-b>
  </template>
  <script>
    export default {
      data() {
        return {
          stepDatas: {
            stepsText: [
              {
                text: '验证原手机号',
              },
              {
                text: '验证新手机号',
              },
              {
                text: '修改成功',
              },
            ],
            allStepsNums: 3,
          }, // end stepDatas
        };
      },
    },
  </script>`,
};
