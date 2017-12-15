export default {
  base: `
  <template>
    <emfe-steps :datas="stepDatas" :active="1"></emfe-steps>
  </template>
  <script>
    export default {
      data() {
        return {
          stepDatas: [
            {
              title: '第一步',
              icon: 'fabu',
            },
            {
              title: '第二步',
              icon: 'erweima',
            },
            {
              title: '第三步',
              icon: 'tishi',
            },
            {
              title: '第四步',
              icon: 'shezhi',
            },
          ],
        };
      },
    },
  </script>`,
};
