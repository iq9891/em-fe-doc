webpackJsonp([83],{54:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={base:"\n<script>\n  export default {\n    methods: {\n      success() {\n        this.$EmfeMessage.success({\n          content: '这是一条成功提示',\n        });\n      },\n      info() {\n        this.$EmfeMessage.info({\n          content: '这是一条信息提示',\n        });\n      },\n      warning() {\n        this.$EmfeMessage.warning({\n          content: '这是一条警示提示',\n        });\n      },\n      error() {\n        this.$EmfeMessage.error({\n          content: '这是一条错误提示',\n        });\n      },\n    },\n  },\n<\/script>\n<template>\n  <div>\n    <emfe-button @click=\"info\">信息</emfe-button>\n    <emfe-button @click=\"warning\">警示</emfe-button>\n    <emfe-button @click=\"error\">失败</emfe-button>\n    <emfe-button @click=\"success\">成功</emfe-button>\n  </div>\n</template>",diy:"\n<script>\n  export default {\n    methods: {\n      diy() {\n        this.$EmfeMessage.success({\n          content: '这是一条成功提示',\n          delayTime: 1000,\n          style: {\n            top: '200px',\n          },\n        });\n      },\n    },\n  },\n<\/script>\n<template>\n  <div>\n    <emfe-button @click=\"diy\">据顶部 100像素。 1000ms 消失。</emfe-button>\n  </div>\n</template>",info:"\nthis.$Message.info(config)",success:"\nthis.$Message.success(config)",error:"\nthis.$Message.error(config)",warning:"\nthis.$Message.warning(config)",config:"\nthis.$Message.config(config);",configDemo:"\nthis.$Message.config({\n    style: {\n      top: 100,\n    },\n    delayTime: 800,\n});"}}});