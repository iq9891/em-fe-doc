export default {
  white: `
<emfe-button>白底</emfe-button>`,
  whiteDisabled: `
<emfe-button :disabled="true">白底</emfe-button>`,
  blue: `
<emfe-button theme="primary">蓝底</emfe-button>`,
  icon: `
<emfe-button type="fabu">图标按钮</emfe-button>`,
  group: `
<emfe-button-group>
  <emfe-button :group="true" index="0" statu="true">1</emfe-button>
  <emfe-button :group="true" index="1">20</emfe-button>
  <emfe-button :group="true" index="2">40</emfe-button>
  <emfe-button :group="true" index="3">60</emfe-button>
  <emfe-button :group="true" index="4">80</emfe-button>
  <emfe-button :group="true" index="5">100</emfe-button>
</emfe-button-group>`,
};
