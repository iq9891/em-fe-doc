webpackJsonp([17,107],{256:function(t,e,r){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1),o=s(a),l=r(31),u=s(l);e.default={data:function(){return{crumb:u.default,propTh:[{title:"属性",key:"attr"},{title:"说明",key:"desc"},{title:"类型",key:"type"},{title:"是否必须",key:"must"},{title:"默认值",key:"default"}],propTd:[{attr:{text:"routers",desc:!1},desc:{text:"支持 vue-router 里的各种属性，支持 url 外链形式。",row:!1},type:{text:"Object",row:!1},must:{text:"true",row:!1},default:{text:"-",row:!1}},{attr:{text:"title",desc:!1},desc:{text:"链接右边的标题。",row:!1},type:{text:"String",row:!1},must:{text:"true",row:!1},default:{text:"-",row:!1}},{attr:{text:"linkText(link-text)",desc:!1},desc:{text:"链接文字。",row:!1},type:{text:"String",row:!1},must:{text:"true",row:!1},default:{text:"-",row:!1}},{attr:{text:"className(class-name)",desc:!1},desc:{text:"自定义的 class 名称。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}}]}},components:{dDemo:o.default.load("Ddemo")}}},31:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={base:'\n<emfe-crumb className="crumb" :routers="{url: \'https://www.evente.cn\'}" link-text="返回" title="面包屑"></emfe-crumb>'}},348:function(t,e,r){e=t.exports=r(157)(!1),e.push([t.i,".crumb-crumb{border:1px solid #dcdcdc}",""])},372:function(t,e,r){var s=r(348);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r(158)("18b7ff84",s,!0)},405:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"crumb"},[r("h2",{staticClass:"h2"},[t._v("Crumb 面包屑")]),t._v(" "),r("p",{staticClass:"p"},[t._v("右边内容的顶部导航，告诉您当前位置。")]),t._v(" "),r("h4",{staticClass:"h4"},[t._v("代码示例")]),t._v(" "),r("d-demo",{attrs:{code:t.crumb.base,href:"http://output.jsbin.com/kazaraw",title:"基本用法",info:"可以设置返回，可以设置当前标题。"}},[r("emfe-crumb",{attrs:{className:"crumb",routers:{url:"https://www.evente.cn"},"link-text":"返回",title:"面包屑"}})],1),t._v(" "),r("h4",{staticClass:"h4"},[t._v("API")]),t._v(" "),r("h5",{staticClass:"h5"},[t._v("属性")]),t._v(" "),r("emfe-table",{staticClass:"table",attrs:{columns:t.propTh,data:t.propTd}},[r("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.propTd,function(t,e){return r("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2)],1)},staticRenderFns:[]}},94:function(t,e,r){function s(t){r(372)}var a=r(16)(r(256),r(405),s,null,null);t.exports=a.exports}});