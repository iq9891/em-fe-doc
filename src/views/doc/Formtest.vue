<template>
  <article class="formtest">
    <h2 class="h2">Copy 复制</h2>
    <p class="p">可以复制一段内容到剪切板。</p>
    <h4 class="h4">代码示例</h4>
    <d-demo :code="formtest.qq" type="js" href="http://output.jsbin.com/detozaz" title="qq" :info="`验证${qqTest ? '' : '不'}通过。`">
      <emfe-input v-model="qq" placeholder="请输入 qq 号"></emfe-input>
    </d-demo>
    <d-demo :code="formtest.card" type="js" href="http://output.jsbin.com/sawakul" title="身份证" :info="`验证${cardTest ? '' : '不'}通过。`">
      <emfe-input v-model="card" placeholder="请输入身份证"></emfe-input>
    </d-demo>
    <d-demo :code="formtest.num" type="js" href="http://output.jsbin.com/viyosi" title="数字" :info="`验证规则：正负数，小数。验证${numTest ? '' : '不'}通过。`">
      <emfe-input v-model="num" placeholder="请输入数字"></emfe-input>
    </d-demo>
    <d-demo :code="formtest.numInt" type="js" href="http://output.jsbin.com/bemerev" title="正负整数" :info="`验证规则：正负整数。验证${numIntTest ? '' : '不'}通过。`">
      <emfe-input v-model="numInt" placeholder="请输入正负整数"></emfe-input>
    </d-demo>
    <d-demo :code="formtest.negative" type="js" href="http://output.jsbin.com/nicuwid" title="负数" :info="`验证规则：负数( 带小数 )。验证${negativeTest ? '' : '不'}通过。`">
      <emfe-input v-model="negative" placeholder="请输入负数"></emfe-input>
    </d-demo>
    <d-demo :code="formtest.negativeInt" type="js" href="http://output.jsbin.com/nugifib" title="负整数" :info="`验证规则：负整数。验证${negativeIntTest ? '' : '不'}通过。`">
      <emfe-input v-model="negativeInt" placeholder="请输入负整数"></emfe-input>
    </d-demo>
    <d-demo :code="formtest.positiveInt" type="js" href="http://output.jsbin.com/zuhikex" title="正整数" :info="`验证规则：正整数。验证${positiveIntTest ? '' : '不'}通过。`">
      <emfe-input v-model="positiveInt" placeholder="请输入正整数"></emfe-input>
    </d-demo>
    <d-demo :code="formtest.positive" type="js" href="http://output.jsbin.com/digewux" title="正数" :info="`验证规则：正数( 带小数 )。验证${positiveTest ? '' : '不'}通过。`">
      <emfe-input v-model="positive" placeholder="请输入正数"></emfe-input>
    </d-demo>
    <d-demo :code="formtest.ip" type="js" href="http://output.jsbin.com/fenivil" title="ip" :info="`验证${ipTest ? '' : '不'}通过。`">
      <emfe-input v-model="ip" placeholder="请输入 ip"></emfe-input>
    </d-demo>
    <d-demo :code="formtest.web" type="js" href="http://output.jsbin.com/ridejif" title="网址" :info="`验证${webTest ? '' : '不'}通过。`">
      <emfe-input v-model="web" placeholder="请输入网址"></emfe-input>
    </d-demo>
    <d-demo :code="formtest.email" type="js" href="http://output.jsbin.com/yemoru" title="邮箱" :info="`验证${emailTest ? '' : '不'}通过。`">
      <emfe-input v-model="email" placeholder="请输入邮箱"></emfe-input>
    </d-demo>
    <d-demo :code="formtest.phone" type="js" href="http://output.jsbin.com/zoxibof" title="手机号(主办号)" :info="`验证${phoneTest ? '' : '不'}通过。`">
      <emfe-input v-model="phone" placeholder="请输入手机号(主办号)"></emfe-input>
    </d-demo>
    <d-demo :code="formtest.childAccount" type="js" href="http://output.jsbin.com/senixit" title="子账号" :info="`验证${childAccountTest ? '' : '不'}通过。`">
      <emfe-input v-model="childAccount" placeholder="请输入子账号"></emfe-input>
    </d-demo>
    <d-demo :code="formtest.password" type="js" href="http://output.jsbin.com/vejihip" title="密码" :info="`验证规则：8-20位数字大小写字母。验证${passwordTest ? '' : '不'}通过。`">
      <emfe-input v-model="password" placeholder="请输入密码"></emfe-input>
    </d-demo>
    <d-demo :code="formtest.money" type="js" href="http://output.jsbin.com/menodah" title="金钱" :info="`验证规则：正数，保留两位小数。验证${moneyTest ? '' : '不'}通过。`">
      <emfe-input v-model="money" placeholder="请输入金钱"></emfe-input>
    </d-demo>
    <h4 class="h4">API</h4>
    <p class="p">通过直接调用以下方法来使用组件：</p>
    <d-code type="js">{{ formtest.use }}</d-code>
    <p class="p">config 为被检测的内容。</p>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import formtest from '@/views/code/formtest';

export default {
  data() {
    return {
      formtest,
      qq: '',
      card: '',
      num: '',
      numInt: '',
      negative: '',
      negativeInt: '',
      positiveInt: '',
      positive: '',
      ip: '',
      web: '',
      phone: '',
      childAccount: '',
      password: '',
      email: '',
      money: '',
    };
  },
  computed: {
    qqTest() {
      return this.$EmfeFormTest.qq(this.qq);
    },
    cardTest() {
      return this.$EmfeFormTest.card(this.card);
    },
    numTest() {
      return this.$EmfeFormTest.num(this.num);
    },
    numIntTest() {
      return this.$EmfeFormTest.numInt(this.numInt);
    },
    negativeTest() {
      return this.$EmfeFormTest.negative(this.negative);
    },
    negativeIntTest() {
      return this.$EmfeFormTest.negativeInt(this.negativeInt);
    },
    positiveIntTest() {
      return this.$EmfeFormTest.positiveInt(this.positiveInt);
    },
    positiveTest() {
      return this.$EmfeFormTest.positive(this.positive);
    },
    ipTest() {
      return this.$EmfeFormTest.ip(this.ip);
    },
    webTest() {
      return this.$EmfeFormTest.web(this.web);
    },
    phoneTest() {
      return this.$EmfeFormTest.phone(this.phone);
    },
    childAccountTest() {
      return this.$EmfeFormTest.childAccount(this.childAccount);
    },
    passwordTest() {
      return this.$EmfeFormTest.password(this.password);
    },
    emailTest() {
      return this.$EmfeFormTest.email(this.email);
    },
    moneyTest() {
      return this.$EmfeFormTest.money(this.money);
    },
  },
  components: {
    dDemo: loadcomponents.load('Ddemo'),
    dCode: loadcomponents.load('Dcode'),
  },
};
</script>
