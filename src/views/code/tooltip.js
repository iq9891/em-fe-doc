export default {
  base: `
<emfe-tooltip placement="bottom">
  <emfe-button slot="render">这是一个带提示的按钮</emfe-button>
  <div slot="tip">
    <p>EM-FE 的组件</p>
    <emfe-button>提示中的按钮</emfe-button>
  </div>
</emfe-tooltip>`,
  set: `
<emfe-tooltip offset="40" theme="light" placement="bottom">
  <emfe-button slot="render">这是一个带提示的按钮</emfe-button>
  <div slot="tip">EM-FE 的组件</div>
</emfe-tooltip>`,
  delay: `
<emfe-tooltip delay="1000" placement="bottom">
  <emfe-button slot="render">这是一个带提示的按钮</emfe-button>
  <div slot="tip">EM-FE 的组件</div>
</emfe-tooltip>`,
};
