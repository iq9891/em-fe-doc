export default {
  base: `
<template>
  <emfe-datetime v-model="datetimeBase"></emfe-datetime>
</template>
<script>
  export default {
    data() {
      return {
        datetimeBase: '2017/01/02',
      };
    },
  },
</script>`,
  filter: `
<template>
  <emfe-datetime :disabled-date="disabledOpt" :disabled-hours="[1,5,9]" :disabled-minutes="[2,4,10]" :disabled-seconds="[7,8,9]"></emfe-datetime>
</template>
<script>
  export default {
    data() {
      return {
        disabledOpt: datetime => datetime && datetime.valueOf() < Date.now() - 86400000,
      };
    },
  },
</script>`,
  disabled: `
<emfe-datetime :disabled="true"></emfe-datetime>`,
  exact: `
<emfe-datetime exact="hour"></emfe-datetime>`,
};
