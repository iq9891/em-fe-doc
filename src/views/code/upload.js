export default {
  base: `
<emfe-upload action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>`,
  icon: `
<emfe-upload type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>`,
  url: `
<emfe-upload url="http://dummyimage.com/200x200" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>`,
  disabled: `
<emfe-upload :disabled="true" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>`,
  intercept: `
<emfe-upload :intercept="[100, 60]" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>`,
  interceptSync: `
<emfe-upload :intercept="[100, 60]" :interceptSync="false" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>`,
};
