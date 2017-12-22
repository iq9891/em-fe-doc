export default {
  base: `
<template>
  <emfe-select :datas="radio"></emfe-select>
</template>
<script>
  export default {
    data() {
      return {
        radio: [
          {
            name: '可用',
            disabled: false,
          },
          {
            name: '可用',
            disabled: false,
          },
          {
            name: '禁用',
            disabled: true,
          },
        ],
      };
    },
  },
</script>`,
  checkbox: `
<template>
  <emfe-select :datas="checkbox" type="checkbox" :check-vals="checkboxVals"></emfe-select>
</template>
<script>
  export default {
    data() {
      return {
        checkboxVals: ['可选并选中', '不可选并选中'],
        checkbox: [
          {
            name: '可选并选中',
            checked: true,
          },
          {
            name: '可选并未选中',
          },
          {
            name: '不可选并未选中',
            disabled: true,
          },
          {
            name: '不可选并选中',
            checked: true,
            disabled: true,
          },
        ],
      };
    },
  },
</script>`,
  error: `
<template>
  <emfe-button @click="isError = true;">点击报错</emfe-button>
  <br>
  <br>
  <emfe-select :err-ok="isError" :datas="error">
    <div slot="error">错误提示</div>
  </emfe-select>
</template>
<script>
  export default {
    data() {
      return {
        isError: false,
        error: [
          {
            name: '报错文字1',
          },
          {
            name: '报错文字2',
          },
        ],
      };
    },
  },
</script>`,
  news: `
<template>
  <emfe-select :datas="news" news @add="add"></emfe-select>
</template>
<script>
  export default {
    data() {
      return {
        news: [
          {
            name: '新建文字1',
          },
          {
            name: '新建文字2',
          },
        ],
      };
    },
    methods: {
      add(nData) {
        this.news.push({
          name: nData,
        });
      },
    },
  },
</script>`,
  tips: `
<template>
  <emfe-select :datas="tips" tip="提示文字" placement="right"></emfe-select>
</template>
<script>
  export default {
    data() {
      return {
        tips: [
          {
            name: '提示文字1',
          },
          {
            name: '提示文字2',
          },
        ],
      };
    },
  },
</script>`,
  disabled: `
<emfe-select :datas="[]" :disabled="true"></emfe-select>`,
  direction: `
<template>
  <emfe-select :datas="direction" direction="top"></emfe-select>
</template>
<script>
  export default {
    data() {
      return {
        direction: [
          {
            name: '向上文字1',
          },
          {
            name: '向上文字2',
          },
        ],
      };
    },
  },
</script>`,
};
