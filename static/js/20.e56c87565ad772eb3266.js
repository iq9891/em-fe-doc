webpackJsonp([20,111],{251:function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var c=o(1),r=s(c),a=o(27),l=s(a);e.default={data:function(){return{checkout:l.default,checkoutStatus1:!0,propTh:[{title:"属性",key:"attr"},{title:"说明",key:"desc"},{title:"类型",key:"type"},{title:"是否必须",key:"must"},{title:"默认值",key:"default"}],propTd:[{attr:{text:"slideShow(slide-show)",desc:!1},desc:{text:"选中后是否有展示自定义内容",row:!1},type:{text:"Boolean",row:!1},must:{text:"false",row:!1},default:{text:"false",row:!1}},{attr:{text:"disable",desc:!1},desc:{text:"是否禁用此多选框。1.3.0 开始建议使用 disabled 。",row:!1},type:{text:"Boolean",row:!1},must:{text:"false",row:!1},default:{text:"false",row:!1}},{attr:{text:"disabled",desc:!1},desc:{text:"是否禁用此多选框。1.3.0 新增。",row:!1},type:{text:"Boolean",row:!1},must:{text:"false",row:!1},default:{text:"false",row:!1}},{attr:{text:"title",desc:!1},desc:{text:"多选框的描述标题",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"stop",desc:!1},desc:{text:"是否阻止冒泡",row:!1},type:{text:"Boolean",row:!1},must:{text:"false",row:!1},default:{text:"true",row:!1}},{attr:{text:"value",desc:!1},desc:{text:"是否选中",row:!1},type:{text:"Boolean",row:!1},must:{text:"false",row:!1},default:{text:"false",row:!1}},{attr:{text:"tip",desc:!1},desc:{text:"问号提示文案",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"placement",desc:!1},desc:{text:"提示框出现的位置。<br>可选值为： top | top-start | top-end | bottom | bottom-start | bottom-end | left | left-start | left-end | right | right-start | right-end",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"top",row:!1}},{attr:{text:"checkedForever",desc:!1},desc:{text:"选中后禁用。",row:!1},type:{text:"Boolean",row:!1},must:{text:"false",row:!1},default:{text:"false",row:!1}},{attr:{text:"change",desc:!1},desc:{text:"点击多选框触发。<br>返回值：选则状态，设置的标题(设置的 title 属性)，当前索引(设置的 index 属性)。",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"function(){}",row:!1}},{attr:{text:"name",desc:!1},desc:{text:"设置 name",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"index",desc:!1},desc:{text:"设置索引",row:!1},type:{text:"Number | String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"inline",desc:!1},desc:{text:"复选框是否一行显示",row:!1},type:{text:"Boolean",row:!1},must:{text:"false",row:!1},default:{text:"false",row:!1}},{attr:{text:"className(class-name)",desc:!1},desc:{text:"自定义的 class 名称。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}}],eventTh:[{title:"事件",key:"name"},{title:"说明",key:"desc"},{title:"返回值",key:"return"}],eventTd:[{name:{text:"click",row:!1},desc:{text:"点击触发。并且是阻止冒泡。",row:!1},return:{text:"选则状态",row:!1}},{name:{text:"checked",row:!1},desc:{text:"改变选择状态时候触发。1.3.0 开始建议使用 change",row:!1},return:{text:"选则状态，设置的标题(设置的 title 属性)，当前索引(设置的 index 属性)",row:!1}},{name:{text:"change",row:!1},desc:{text:"改变选择状态时候触发。1.3.0 新增。",row:!1},return:{text:"选则状态，设置的标题(设置的 title 属性)，当前索引(设置的 index 属性)",row:!1}}]}},components:{dDemo:r.default.load("Ddemo")}}},27:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={base:'\n<template>\n  <emfe-checkout v-model="checkoutStatus1" title="EM-FE"></emfe-checkout>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        checkoutStatus1: true,\n      };\n    },\n  },\n<\/script>',disabled:'\n<emfe-checkout :disabled="true" title="EM-FE"></emfe-checkout>',tip:'\n<emfe-checkout title="EM-FE" tip="EM-FE 是企业级定制 UI 库"></emfe-checkout>',show:'\n<emfe-checkout :slide-show="true" :value="true" title="EM-FE 的组件">\n  <div slot="slide">\n    <emfe-checkout title="单选" inline="true"></emfe-checkout>\n    <emfe-checkout title="输入框" inline="true"></emfe-checkout>\n    <emfe-checkout title="多选" inline="true"></emfe-checkout>\n    <emfe-checkout title="下拉" inline="true"></emfe-checkout>\n  </div>\n</emfe-checkout>',no:'\n<emfe-checkout :value="true" title="选中不可选" :checkedForever="true"></emfe-checkout>',right:'\n<emfe-checkout theme="right" title="选中不可选"></emfe-checkout>'}},360:function(t,e,o){e=t.exports=o(157)(!1),e.push([t.i,".checkout-checkout{z-index:4;position:relative}",""])},384:function(t,e,o){var s=o(360);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);o(158)("3b877850",s,!0)},434:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"checkout"},[o("h2",{staticClass:"h2"},[t._v("Checkout 多选")]),t._v(" "),o("p",{staticClass:"p"},[t._v("基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。")]),t._v(" "),o("h4",{staticClass:"h4"},[t._v("代码示例")]),t._v(" "),o("d-demo",{attrs:{code:t.checkout.base,href:"http://output.jsbin.com/cavome",title:"单独使用",info:"使用 v-model 可以双向绑定数据。"}},[o("emfe-checkout",{attrs:{title:"EM-FE"},model:{value:t.checkoutStatus1,callback:function(e){t.checkoutStatus1=e},expression:"checkoutStatus1"}}),t._v(" "),o("br"),t._v("\n    "+t._s(t.checkoutStatus1?"选中":"未选中")+"\n  ")],1),t._v(" "),o("d-demo",{attrs:{code:t.checkout.disabled,href:"http://output.jsbin.com/hekeqil",title:"禁用",info:"通过设置 disabled 属性来禁用多选框。 1.3.0 开始建议使用 disabled 属性设置禁用。"}},[o("emfe-checkout",{attrs:{disabled:!0,title:"EM-FE"}})],1),t._v(" "),o("d-demo",{attrs:{code:t.checkout.tip,href:"http://output.jsbin.com/qarasut",title:"提示",info:"通过设置 tip 属性。"}},[o("emfe-checkout",{attrs:{className:"checkout",title:"EM-FE",tip:"EM-FE 是企业级定制 UI 库"}})],1),t._v(" "),o("d-demo",{attrs:{code:t.checkout.show,href:"http://output.jsbin.com/dogoqu",title:"显示隐藏内容",info:"通过设置 slideShow 属性展开隐藏的内容。多选在一横行只需设置 inline 属性。通过设置 value 属性操作默认是否选中。"}},[o("emfe-checkout",{attrs:{"slide-show":!0,value:!0,title:"EM-FE 的组件"}},[o("div",{attrs:{slot:"slide"},slot:"slide"},[o("emfe-checkout",{attrs:{title:"单选",inline:"true"}}),t._v(" "),o("emfe-checkout",{attrs:{title:"输入框",inline:"true"}}),t._v(" "),o("emfe-checkout",{attrs:{title:"多选",inline:"true"}}),t._v(" "),o("emfe-checkout",{attrs:{title:"下拉",inline:"true"}})],1)])],1),t._v(" "),o("d-demo",{attrs:{code:t.checkout.no,href:"http://output.jsbin.com/citajew",title:"选中不可选",info:"通过设置 checkedForever 属性。"}},[o("emfe-checkout",{attrs:{value:!0,title:"选中不可选",checkedForever:!0}})],1),t._v(" "),o("d-demo",{attrs:{code:t.checkout.right,href:"http://output.jsbin.com/miwiki",title:"多选框在右边",info:"通过设置 theme 属性。 1.5.0 新增。"}},[o("emfe-checkout",{attrs:{theme:"right",title:"在右面的情况"}})],1),t._v(" "),o("h4",{staticClass:"h4"},[t._v("API")]),t._v(" "),o("h5",{staticClass:"h5"},[t._v("属性")]),t._v(" "),o("emfe-table",{staticClass:"table",attrs:{columns:t.propTh,data:t.propTd}},[o("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.propTd,function(t,e){return o("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2),t._v(" "),o("h5",{staticClass:"h5"},[t._v("事件")]),t._v(" "),o("emfe-table",{staticClass:"table",attrs:{columns:t.eventTh,data:t.eventTd}},[o("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.eventTd,function(t,e){return o("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2)],1)},staticRenderFns:[]}},89:function(t,e,o){function s(t){o(384)}var c=o(16)(o(251),o(434),s,null,null);t.exports=c.exports}});