export default {
  base: `
<template>
  <emfe-smscode v-model="modelBase" times="22" @click="clickBase" :time-start="startBase" :end="timeEndBase"></emfe-smscode>
</template>
<script>
  export default {
    data() {
      return {
        modelBase: 13810902078,
        startBase: false,
      };
    },
    methods: {
      clickBase() {
        this.startBase = true;
      },
      timeEndBase(val) {
        this.startBase = val;
      },
    },
    watch: {
      startBase(val, oldVal) {
        if (val !== oldVal) {
          this.startBase = val;
        }
      },
    },
  },
</script>`,
  error: `
<template>
  <emfe-button @click="error = true;">点击报错</emfe-button>
  <br>
  <br>
  <emfe-smscode :err-ok="error" @click="clickError" :time-start="startError" :end="timeEndError">
    <div slot="error">这是一个错误信息</div>
  </emfe-smscode>
</template>
<script>
  export default {
    data() {
      return {
        error: false,
        startError: false,
      };
    },
    methods: {
      clickError() {
        this.startError = true;
      },
      timeEndError(val) {
        this.startError = val;
      },
    },
    watch: {
      startError(val, oldVal) {
        if (val !== oldVal) {
          this.startError = val;
        }
      },
    },
  },
</script>`,
  icon: `
<emfe-smscode icon="fabu"></emfe-smscode>
`,
  disabled: `
<emfe-smscode :disabled="true"></emfe-smscode>
`,
};
