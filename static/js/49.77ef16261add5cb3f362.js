webpackJsonp([49,89],{111:function(t,e,r){var o=r(16)(r(273),r(414),null,null,null);t.exports=o.exports},273:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1),s=o(a),n=r(49),u=o(n);e.default={data:function(){return{inputmore:u.default,group1:["内容1"],group2:["icon 1"],propTh:[{title:"属性",key:"attr"},{title:"说明",key:"desc"},{title:"类型",key:"type"},{title:"是否必须",key:"must"},{title:"默认值",key:"default"}],propTd:[{attr:{text:"datas",desc:!1},desc:{text:"数据来渲染多个输入框。结果: ['something']",row:!1},type:{text:"Array",row:!1},must:{text:"true",row:!1},default:{text:"-",row:!1}},{attr:{text:"placeholder",desc:!1},desc:{text:"输入框默认提示。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"new",desc:!1},desc:{text:"自定义新增内容。不设置默认为空。",row:!1},type:{text:"Object",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"type",desc:!1},desc:{text:"输入框类型",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"text",row:!1}},{attr:{text:"icon",desc:!1},desc:{text:'输入框前面的 icon 图标。请参照：<a class="link" href="#/doc/icon">Icon 字体图标</a>。',row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"max",desc:!1},desc:{text:"最多添加多少个",row:!1},type:{text:"Number",row:!1},must:{text:"false",row:!1},default:{text:"Infinity",row:!1}},{attr:{text:"min",desc:!1},desc:{text:"最少添加多少个",row:!1},type:{text:"Number",row:!1},must:{text:"false",row:!1},default:{text:"1",row:!1}},{attr:{text:"className(class-name)",desc:!1},desc:{text:"自定义的 class 名称。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"inputHandle",desc:!1},desc:{text:"输入时候触发。返回值：当前对象，当前索引",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"plusHandle",desc:!1},desc:{text:"增加时候触发。返回值：当前对象，当前索引，所有数据",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"reduceHandle",desc:!1},desc:{text:"减少时候触发。返回值：当前对象，当前索引，所有数据",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}}],eventTh:[{title:"事件",key:"name"},{title:"说明",key:"desc"},{title:"返回值",key:"return"}],eventTd:[{name:{text:"inputHandle",row:!1},desc:{text:"输入时候触发。",row:!1},return:{text:"当前对象，当前索引",row:!1}},{name:{text:"plusHandle",row:!1},desc:{text:"增加时候触发。",row:!1},return:{text:"当前对象，当前索引，所有数据",row:!1}},{name:{text:"reduceHandle",row:!1},desc:{text:"减少时候触发。",row:!1},return:{text:"当前对象，当前索引，所有数据",row:!1}}]}},components:{dDemo:s.default.load("Ddemo")}}},414:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("h2",{staticClass:"h2"},[t._v("Inputmore 多个输入框")]),t._v(" "),r("p",{staticClass:"p"},[t._v("在原生 inputmore 控件基础上进行了功能扩展，可以组合使用。")]),t._v(" "),r("h4",{staticClass:"h4"},[t._v("代码示例")]),t._v(" "),r("d-demo",{attrs:{code:t.inputmore.base,href:"http://output.jsbin.com/wopopiq",title:"基本用法",info:"只需设置 datas 属性即可。"}},[r("emfe-inputmore-group",{attrs:{datas:t.group1}})],1),t._v(" "),r("d-demo",{attrs:{code:t.inputmore.icon,href:"http://output.jsbin.com/xabesac",title:"icon 用法",info:"只需设置 icon 属性即可。"}},[r("emfe-inputmore-group",{attrs:{icon:"shouji1",datas:t.group2}})],1),t._v(" "),r("h4",{staticClass:"h4"},[t._v("API")]),t._v(" "),r("h5",{staticClass:"h5"},[t._v("属性")]),t._v(" "),r("emfe-table",{staticClass:"table",attrs:{columns:t.propTh,data:t.propTd}},[r("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.propTd,function(t,e){return r("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2),t._v(" "),r("h5",{staticClass:"h5"},[t._v("事件")]),t._v(" "),r("emfe-table",{staticClass:"table",attrs:{columns:t.eventTh,data:t.eventTd}},[r("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.eventTd,function(t,e){return r("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2)],1)},staticRenderFns:[]}},49:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={base:"\n<template>\n  <emfe-inputmore-group :datas=\"group1\"></emfe-inputmore-group>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        group1: [\n          '内容1',\n        ],\n      };\n    },\n  },\n<\/script>",icon:'\n<template>\n  <emfe-inputmore-group :datas="group2" icon="shouji1"></emfe-inputmore-group>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        group2: [\n          \'icon 1\',\n        ],\n      };\n    },\n  },\n<\/script>'}}});