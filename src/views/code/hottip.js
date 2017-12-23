export default {
  base: `
<emfe-hottip>
  <div slot="no2">注册设置：默认注册方式为手机号、验证码，即用户只需填写手机号和验证码即可注册成功。其他字段默认完善信息，如果您想收集用户的更多信息，可以编辑字段类型设置为“注册时必填”，即用户在注册时必须填写该字段才能完成注册。<emfe-link :routers="{url: 'https://www.evente.com'}">去设置</emfe-link></div>
</emfe-hottip>`,
  lang: `
<template>
  <emfe-hottip @change="skew">
    <div slot="no1">
      <ul>
        <li>积分抵现说明：</li>
        <li>1.积分抵现功能，下单时可以用积分直接选择积分抵付订单金额，积分使用时根据主办设置的条件，如3000积分可抵1元现金使用，享受抵现优惠。</li>
        <li>2.可设置全站支持积分抵现的有效时间。</li>
        <li>3.可设置单笔订单最高使用积分抵扣的比例。</li>
        <li>4.开通后支持会员用户使用积分抵扣现金。</li>
        <li>5.积分抵现描述和使用帮助</li>
      </ul>
    </div>
    <div slot="no2">
      <ul>
        <li>积分抵现说明：</li>
        <li>1.积分抵现功能，下单时可以用积分直接选择积分抵付订单金额，积分使用时根据主办设置的条件，如3000积分可抵1元现金使用，享受抵现优惠。</li>
        <li>2.可设置全站支持积分抵现的有效时间。</li>
      </ul>
    </div>
  </emfe-hottip>
</template>
<script>
  export default {
    data() {
      return {
        status: false,
      };
    },
    methods: {
      skew(status) {
        this.status = !status;
      },
    },
  },
</script>`,
};
