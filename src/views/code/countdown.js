export default {
  base: `
<template>
  <emfe-countdown className="countdown" :time="time"></emfe-countdown>
</template>
<style>
.countdown-countdown-time {
  width: 9%;
}
</style>
<script>
  export default {
    data() {
      const date = new Date();
      return {
        time: \`\${date.getFullYear()}-\${date.getMonth() + 2}-\${date.getDate()} \${date.getHours()}:\${date.getMinutes()}:\${date.getSeconds()}\`,
      };
    },
  },
</script>`,
};
