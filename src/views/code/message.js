export default {
  base: `
<script>
  export default {
    methods: {
      success() {
        this.$EmfeMessage.success({
          content: '这是一条成功提示',
        });
      },
      info() {
        this.$EmfeMessage.info({
          content: '这是一条信息提示',
        });
      },
      warning() {
        this.$EmfeMessage.warning({
          content: '这是一条警示提示',
        });
      },
      error() {
        this.$EmfeMessage.error({
          content: '这是一条错误提示',
        });
      },
    },
  },
</script>
<template>
  <div>
    <emfe-button @click="info">信息</emfe-button>
    <emfe-button @click="warning">警示</emfe-button>
    <emfe-button @click="error">失败</emfe-button>
    <emfe-button @click="success">成功</emfe-button>
  </div>
</template>`,
  diy: `
<script>
  export default {
    methods: {
      diy() {
        this.$EmfeMessage.success({
          content: '这是一条成功提示',
          delayTime: 1000,
          style: {
            top: '200px',
          },
        });
      },
    },
  },
</script>
<template>
  <div>
    <emfe-button @click="diy">据顶部 100像素。 1000ms 消失。</emfe-button>
  </div>
</template>`,
  info: `
this.$Message.info(config)`,
  success: `
this.$Message.success(config)`,
  error: `
this.$Message.error(config)`,
  warning: `
this.$Message.warning(config)`,
  config: `
this.$Message.config(config);`,
  configDemo: `
this.$Message.config({
    style: {
      top: 100,
    },
    delayTime: 800,
});`,
};
