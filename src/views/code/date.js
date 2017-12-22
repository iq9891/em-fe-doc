export default {
  base: `
<template>
  <emfe-date v-model="dateBase"></emfe-date>
</template>
<script>
  export default {
    data() {
      return {
        dateBase: '2017/01/02',
      };
    },
  },
</script>`,
  confirm: `
<emfe-date :confirm="false"></emfe-date>`,
  open: `
<emfe-date :open="true" :confirm="false"></emfe-date>`,
  filter: `
<template>
  <emfe-date :disabled-date="disabledOpt"></emfe-date>
</template>
<script>
  export default {
    data() {
      return {
        disabledOpt: date => date && date.valueOf() < Date.now() - 86400000,
      };
    },
  },
</script>`,
  disabled: `
<emfe-date :disabled="true"></emfe-date>`,
};
