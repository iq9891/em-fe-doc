export default {
  base: `
<template>
  <emfe-button @click="modalBtn">我是弹框</emfe-button>
  <emfe-modal :show="modalShow" title="我是提示框" @close="modalClose" @cancel="modalClose" @ok="modalClose" okText="保存">
    <div slot="modal-main">
      <div class="emfe-modal-main-input">
        <h6 class="emfe-modal-main-input-title">标题</h6>
        <emfe-input placeholder="表单标题"></emfe-input>
      </div>
    </div>
  </emfe-modal>
</template>
<script>
  export default {
    data() {
      return {
        modalShow: false,
        modalIndex: 1,
      };
    },
    methods: {
      modalBtn() {
        this.modalShow = true;
        this.modalIndex = 3;
      },
      modalClose() {
        this.modalShow = false;
        this.modalIndex = 1;
      },
    },
  },
</script>`,
  base: `
<template>
  <emfe-button @click="modalBtn">我是弹框</emfe-button>
  <emfe-button @click="tipBtn">我是弹框</emfe-button>
  <emfe-modal :show="tipShow" title="我是提示框" @close="tipClose" @cancel="tipClose" @ok="tipClose" okText="保存" :cancelFlg="false" :tip="true">
    <div slot="modal-main">
      这是一段很长的提示，他真的很长很长很长。确认删除表单数据？
    </div>
  </emfe-modal>
</template>
<script>
  export default {
    data() {
      return {
        tipShow: false,
        tipIndex: 1,
      };
    },
    methods: {
      tipBtn() {
        this.tipShow = true;
        this.tipIndex = 3;
      },
      tipClose() {
        this.tipShow = false;
        this.tipIndex = 1;
      },
    },
  },
</script>`,
};
