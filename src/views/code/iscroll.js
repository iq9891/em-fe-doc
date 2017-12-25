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
};
