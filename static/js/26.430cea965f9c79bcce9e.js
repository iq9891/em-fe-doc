webpackJsonp([26,62],{139:function(t,e,o){var a=o(16)(o(301),o(412),null,null,null);t.exports=a.exports},301:function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),s=a(r),d=o(75),c=a(d);e.default={data:function(){return{upload:c.default,propTh:[{title:"属性",key:"attr"},{title:"说明",key:"desc"},{title:"类型",key:"type"},{title:"是否必须",key:"must"},{title:"默认值",key:"default"}],propTd:[{attr:{text:"action",desc:!1},desc:{text:"ajax提交路径。",row:!1},type:{text:"String",row:!1},must:{text:"true",row:!1},default:{text:"-",row:!1}},{attr:{text:"type",desc:!1},desc:{text:"上传组件的类型，可选参数： plus | icon 。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"plus",row:!1}},{attr:{text:"disabled",desc:!1},desc:{text:"是否禁用。",row:!1},type:{text:"Boolean",row:!1},must:{text:"false",row:!1},default:{text:"false",row:!1}},{attr:{text:"headers",desc:!1},desc:{text:"设置上传的请求头部。",row:!1},type:{text:"Object",row:!1},must:{text:"false",row:!1},default:{text:"{}",row:!1}},{attr:{text:"data",desc:!1},desc:{text:"上传时附带的额外参数。",row:!1},type:{text:"Object",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"name",desc:!1},desc:{text:"上传的文件字段名。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"file",row:!1}},{attr:{text:"withCredentials( with-credentials )",desc:!1},desc:{text:"是否跨站点的访问控制。",row:!1},type:{text:"Boolean",row:!1},must:{text:"false",row:!1},default:{text:"false",row:!1}},{attr:{text:"format",desc:!1},desc:{text:"支持的文件类型，format 是识别文件的后缀名。",row:!1},type:{text:"Array",row:!1},must:{text:"false",row:!1},default:{text:"[]",row:!1}},{attr:{text:"maxSize( max-size )",desc:!1},desc:{text:"文件大小限制，单位 kb 。",row:!1},type:{text:"Number",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"url",desc:!1},desc:{text:"设置图片。",row:!1},type:{text:"Number",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"intercept",desc:!1},desc:{text:"截取器的默认尺寸。",row:!1},type:{text:"Array",row:!1},must:{text:"false",row:!1},default:{text:"[]",row:!1}},{attr:{text:"interceptSync( intercept-sync )",desc:!1},desc:{text:"是否是等比缩放截取器尺寸。 1.3.0 新增。",row:!1},type:{text:"Boolean",row:!1},must:{text:"false",row:!1},default:{text:"true",row:!1}},{attr:{text:"buttonText( button-text )",desc:!1},desc:{text:"当 type 为 icon 的时候，设置按钮文案。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"上传图片",row:!1}},{attr:{text:"theme",desc:!1},desc:{text:"当 type 为 icon 的时候，设置按钮主题。可选参数： default | primary 。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"default",row:!1}},{attr:{text:"fileType( file-type )",desc:!1},desc:{text:"设置上传文件类型。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"image",row:!1}},{attr:{text:"className(class-name)",desc:!1},desc:{text:"自定义的 class 名称。",row:!1},type:{text:"String",row:!1},must:{text:"false",row:!1},default:{text:"-",row:!1}},{attr:{text:"success",desc:!1},desc:{text:"上传成功。返回：请求结果， 文件读取数据，文件列表，emfe提示方法。",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"function() {}",row:!1}},{attr:{text:"error",desc:!1},desc:{text:"上传失败。返回：请求结果， 文件读取数据，文件列表，emfe提示方法。",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"function() {}",row:!1}},{attr:{text:"close",desc:!1},desc:{text:"关闭上传弹出框。返回：emfe提示方法。",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"function() {}",row:!1}},{attr:{text:"beforeUpload( before-upload )",desc:!1},desc:{text:"上传之前。返回：文件，emfe提示方法。",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"function() {}",row:!1}},{attr:{text:"formatError( format-error )",desc:!1},desc:{text:"文件格式验证失败触发。返回：文件，emfe提示方法。",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"function() {}",row:!1}},{attr:{text:"exceededSize( exceeded-size )",desc:!1},desc:{text:"文件超出指定大小限制时触发。返回：文件，文件列表，emfe提示方法。",row:!1},type:{text:"Function",row:!1},must:{text:"false",row:!1},default:{text:"function() {}",row:!1}}],eventTh:[{title:"事件名",key:"attr"},{title:"说明",key:"desc"},{title:"返回值",key:"return"}],eventTd:[{attr:{text:"success",desc:!1},desc:{text:"上传成功",row:!1},return:{text:"请求结果，文件读取数据，文件列表，emfe提示方法",row:!1}},{attr:{text:"error",desc:!1},desc:{text:"上传失败",row:!1},return:{text:"请求结果，文件读取数据，文件列表，emfe提示方法。",row:!1}},{attr:{text:"close",desc:!1},desc:{text:"关闭上传弹出框",row:!1},return:{text:"emfe提示方法。",row:!1}},{attr:{text:"beforeUpload",desc:!1},desc:{text:"上传之前",row:!1},return:{text:"文件，emfe提示方法。",row:!1}},{attr:{text:"formatError",desc:!1},desc:{text:"文件格式验证失败触发",row:!1},return:{text:"文件，emfe提示方法。",row:!1}},{attr:{text:"exceededSize",desc:!1},desc:{text:"文件超出指定大小限制时触发",row:!1},return:{text:"文件，文件列表，emfe提示方法。",row:!1}}]}},components:{dDemo:s.default.load("Ddemo")}}},412:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"upload"},[o("h2",{staticClass:"h2"},[t._v("Upload 上传")]),t._v(" "),o("p",{staticClass:"p"},[t._v("文件选择上传，大多数是图片。")]),t._v(" "),o("h4",{staticClass:"h4"},[t._v("代码示例")]),t._v(" "),o("d-demo",{attrs:{code:t.upload.base,href:"http://output.jsbin.com/zufatuj",title:"基本用法",info:"只需加上 action 属性即可。"}},[o("emfe-upload",{attrs:{action:"https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"}})],1),t._v(" "),o("d-demo",{attrs:{code:t.upload.icon,href:"http://output.jsbin.com/meqikim",title:"icon",info:"只需 type 设为 icon 即可。"}},[o("emfe-upload",{attrs:{type:"icon",action:"https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"}})],1),t._v(" "),o("d-demo",{attrs:{code:t.upload.url,href:"http://output.jsbin.com/xiwuram",title:"url 图片",info:"设置 url 即可。"}},[o("emfe-upload",{attrs:{url:"http://dummyimage.com/200x200",action:"https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"}})],1),t._v(" "),o("d-demo",{attrs:{code:t.upload.disabled,href:"http://output.jsbin.com/jazatez",title:"禁用",info:"只需 disabled 设为 true 即可。"}},[o("emfe-upload",{attrs:{disabled:!0,action:"https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"}})],1),t._v(" "),o("d-demo",{attrs:{code:t.upload.intercept,href:"http://output.jsbin.com/xevokoc",title:"等比截取",info:"用 intercept 设置目标比例[width, height]。"}},[o("emfe-upload",{attrs:{intercept:[100,60],action:"https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"}})],1),t._v(" "),o("d-demo",{attrs:{code:t.upload.interceptSync,href:"http://output.jsbin.com/forinej",title:"普通截取",info:"用 intercept 设置目标比例[width, height]。 interceptSync 设置为 false 。 1.3.0 新增。"}},[o("emfe-upload",{attrs:{intercept:[100,60],interceptSync:!1,action:"https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"}})],1),t._v(" "),o("h4",{staticClass:"h4"},[t._v("API")]),t._v(" "),o("h5",{staticClass:"h5"},[t._v("属性")]),t._v(" "),o("emfe-table",{staticClass:"table",attrs:{columns:t.propTh,data:t.propTd}},[o("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.propTd,function(t,e){return o("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2),t._v(" "),o("h5",{staticClass:"h5"},[t._v("方法")]),t._v(" "),o("emfe-table",{staticClass:"table",attrs:{columns:t.eventTh,data:t.eventTd}},[o("emfe-table-head",{attrs:{slot:"head"},slot:"head"}),t._v(" "),t._l(t.eventTd,function(t,e){return o("emfe-table-body",{key:e,attrs:{slot:"body",ind:e,dataList:t},slot:"body"})})],2)],1)},staticRenderFns:[]}},75:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={base:'\n<emfe-upload action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>',icon:'\n<emfe-upload type="icon" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>',url:'\n<emfe-upload url="http://dummyimage.com/200x200" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>',disabled:'\n<emfe-upload :disabled="true" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>',intercept:'\n<emfe-upload :intercept="[100, 60]" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>',interceptSync:'\n<emfe-upload :intercept="[100, 60]" :interceptSync="false" action="https://www.easy-mock.com/mock/5a2e29ed89d2205cbfe7a459/emfe/upload"></emfe-upload>'}}});