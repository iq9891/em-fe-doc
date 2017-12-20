export default {
  base: `
<template>
  <div>
    {{switchModel ? '开' : '关'}}
    <emfe-switch v-model="switchModel">
      <span slot="open">ON</span>
      <span slot="close">OFF</span>
    </emfe-switch>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        switchModel: true,
      };
    },
  },
</script>`,
  interceptor: `
<template>
  <div>
    <emfe-switch :interceptor="interceptor" @toggle="interceptorChange">
      <span slot="open">ON</span>
      <span slot="close">OFF</span>
    </emfe-switch>
    <emfe-modal :show="modal" title="拦截一下" @close="modalCancel" @cancel="modalCancel" @ok="modalOk">
      <div slot="modal-main">吃了么？</div>
    </emfe-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        interceptor: false,
        modal: false,
      };
    },
    methods: {
      interceptorChange() {
        this.openModal();
      },
      openModal() {
        this.modal = true;
      },
      closeModal() {
        this.modal = false;
      },
      modalCancel() {
        this.interceptor = false;
        this.closeModal();
      },
      modalOk() {
        this.interceptor = true;
        this.closeModal();
        // 恢复
        setTimeout(() => {
          this.interceptor = false;
        }, 201);
      },
    },
  },
</script>`,
  disabled: `
<emfe-switch :disabled="true">
  <span slot="open">ON</span>
  <span slot="close">OFF</span>
</emfe-switch>`,
};
