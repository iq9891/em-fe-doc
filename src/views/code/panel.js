export default {
  base: `
  <template>
    <emfe-panel :data="panelSame" type="fabu" :switch-type="true" :switch-ok="true"></emfe-panel>
  </template>
  <script>
    export default {
      data() {
        return {
          panelSame: [
            { text: '累计消费次数', cont: '2次', switchOk: true, type: 'duoxuan' },
            { text: '累计消费金额', cont: '￥200.00', switchOk: true },
            { text: '平均消费', cont: '￥100.00', switchOk: true },
          ],
        };
      },
    },
  </script>`,
  diy: `
<template>
  <emfe-panel :data="panelDiy"></emfe-panel>
</template>
<script>
  export default {
    data() {
      return {
        panelDiy: [
          { text: '累计消费次数', cont: '24次', switchOk: true, type: 'fabu' },
          { text: '累计消费金额', cont: '￥20300.00', switchOk: true, switchState: true, type: 'erweima' },
          { text: '平均消费', cont: '￥210.00', type: 'duoxuan' },
          { text: '平均消费', cont: '￥210.00' },
        ],
      };
    },
  },
</script>`,
};
