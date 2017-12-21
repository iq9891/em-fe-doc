export default {
  base: `
<template>
  <emfe-time v-model="timeBase"></emfe-time>
</template>
<script>
  export default {
    data() {
      return {
        timeBase: '12:12:12',
      };
    },
  },
</script>`,
  confirm: `
<emfe-date :confirm="false"></emfe-date>`,
  open: `
<emfe-time :open="true" :confirm="false"></emfe-time>`,
  choices: `
<emfe-date time-choices="12:34:56|17:29:39"></emfe-date>`,
  filter: `
<emfe-time disabled-hours="[1,5,9]" disabled-minutes="[2,4,10]" disabled-seconds="[7,8,9]"></emfe-time>`,
  disabled: `
<emfe-time :disabled="true"></emfe-time>`,
};
