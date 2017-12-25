export default {
  base: `
<template>
  <emfe-iscroll ref="iscroll" class="iscroll-wrap" :options="config">
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
  </emfe-iscroll>
</template>
<style>
.iscroll-wrap {
  border: 1px solid #dcdcdc;
  position: relative;
  height: 100px;
  overflow: hidden;
}
</style>
<script>
  export default {
    data() {
      config: {
        scrollbars: true,
        mouseWheel: true,
        click: false,
        preventDefault: true,
      },
    },
  },
</script>`,
  act: `
<template>
  <emfe-iscroll ref="iscroll2" class="iscroll-wrap" :options="config">
    <p>
      <br>
      <emfe-button @click="scrollToTop">点击滚动到 这里</emfe-button>
      <br>
      <br>
    </p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p><span style="color: #f00;">这里</span></p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
    <p>一些不必要的内容</p>
  </emfe-iscroll>
</template>
<style>
.iscroll-wrap {
  border: 1px solid #dcdcdc;
  position: relative;
  height: 100px;
  overflow: hidden;
}
</style>
<script>
  export default {
    data() {
      config: {
        scrollbars: true,
        mouseWheel: true,
        click: false,
        preventDefault: true,
      },
    },
    methods: {
      scrollToTop() {
        const myScroll = this.$refs.iscroll2;
        const scrollEle = myScroll.$el;
        myScroll.scrollToElement(scrollEle.querySelector('p:nth-child(11)'), null, null, true);
      },
    },
  },
</script>`,
  showhide: `
<template>
  <div>
    <emfe-button @click="tipBtn">点击我出现弹出框的滚动</emfe-button>
    <emfe-modal :show="tipShow" title="我是提示框" @close="tipClose" @cancel="tipClose" @ok="tipClose" okText="保存" :cancelFlg="false" :tip="true">
      <div slot="modal-main">
        <emfe-button @click="showHide">{{lang ? '隐藏' : '展开'}}不必要的内容</emfe-button>
        <br>
        <br>
        <br>
        <emfe-iscroll ref="iscroll3" class="iscroll-wrap" :options="config">
          <div v-show="lang">
            <p>新增的很多不必要的很容</p>
            <p>新增的很多不必要的很容</p>
            <p>新增的很多不必要的很容</p>
            <p>新增的很多不必要的很容</p>
            <p>新增的很多不必要的很容</p>
          </div>
          <p>一些不必要的内容</p>
          <p>一些不必要的内容</p>
          <p>一些不必要的内容</p>
          <p>一些不必要的内容</p>
          <p>一些不必要的内容</p>
          <p>一些不必要的内容</p>
          <p>一些不必要的内容</p>
          <p>一些不必要的内容</p>
          <p>一些不必要的内容</p>
          <p>一些不必要的内容</p>
          <p>一些不必要的内容</p>
          <p>一些不必要的内容</p>
          <p>一些不必要的内容</p>
          <p>一些不必要的内容</p>
          <div v-show="lang">
            <p>新增的很多不必要的很容</p>
            <p>新增的很多不必要的很容</p>
            <p>新增的很多不必要的很容</p>
            <p>新增的很多不必要的很容</p>
            <p>新增的很多不必要的很容</p>
          </div>
        </emfe-iscroll>
      </div>
    </emfe-modal>
  </div>
</template>
<style>
.iscroll-wrap {
  border: 1px solid #dcdcdc;
  position: relative;
  height: 100px;
  overflow: hidden;
}
</style>
<script>
  export default {
    data() {
      tipShow: false,
      tipIndex: 1,
      lang: false,
      config: {
        scrollbars: true,
        mouseWheel: true,
        click: false,
        preventDefault: true,
      },
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
      showHide() {
        this.lang = !this.lang;
        this.refresh();
      },
      refresh() {
        this.$refs.iscroll3.refresh();
      },
    },
  },
</script>`,
};
