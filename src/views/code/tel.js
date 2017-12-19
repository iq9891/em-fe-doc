export default {
  base: `
<template>
  <div>
    <emfe-tel :datas="baseDatas" v-model="base"></emfe-tel>
    <p class="p" v-show="base.tel">您输入的电话是： +{{base.prefix}}{{base.tel}}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        base: {
          name: '中国',
          tel: '',
          prefix: '86',
          url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
        },
        baseDatas: [
          {
            name: '中国',
            tel: '',
            prefix: '86',
            url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
          },
          {
            name: '香港',
            tel: '',
            prefix: '852',
            url: 'https://static.evente.cn/evente/img/flag/v1/xg.jpg',
          },
        ],
      };
    },
  },
</script>`,
  error: `
<template>
  <div>
    <emfe-button @click="errorStatus = true;">点击报错</emfe-button>
    <br>
    <br>
    <emfe-tel :datas="errorDatas" v-model="error" :err-ok="errorStatus">
      <div slot="error">这是一个错误信息</div>
    </emfe-tel>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        errorStatus: false,
        error: {
          name: '中国',
          tel: '',
          prefix: '86',
          url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
        },
        errorDatas: [
          {
            name: '中国',
            tel: '',
            prefix: '86',
            url: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
          },
          {
            name: '香港',
            tel: '',
            prefix: '852',
            url: 'https://static.evente.cn/evente/img/flag/v1/xg.jpg',
          },
        ],
      };
    },
  },
</script>`,
};
