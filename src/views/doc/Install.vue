<template>
  <article>
    <h2 class="h2">安装</h2>
    <p class="p">本节将介绍如何在项目中使用 EM-FE</p>
    <h3 class="h3">使用 vue-cli</h3>
    <p class="p">我们还可以使用 <a href="https://github.com/vuejs/vue-cli" class="link" target="_blank">vue-cli</a> 初始化项目，命令如下：</p>
    <d-code type="bash">{{ cli }}</d-code>
    <h4 class="h4">引入 EM-FE</h4>
    <p class="p">在 <code class="code-inline">my-project/src/main.js</code> 中写入以下内容：</p>
    <d-code type="js">{{ main }}</d-code>
    <p class="p">以上代码便完成了 EM-FE 的引入。需要注意的是，样式文件需要单独引入。</p>
    <h4 class="h4">开始使用</h4>
    <p class="p">至此，一个基于 Vue 和 EM-FE 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。启动开发模式：</p>
    <d-code type="bash">{{ dev }}</d-code>
    <h3 class="h3">使用 CDN</h3>
    <p class="p">通过 <a href="https://unpkg.com/em-fe" class="link" target="_blank">https://unpkg.com/em-fe</a> 可以看到 iView 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用：</p>
    <d-code type="html">{{ importscript }}</d-code>
    <h4 class="h4">示例</h4>
    <p class="p">通过 CDN 可以快速使用 EM-FE 写出一个示例，您可以复制下面代码或<a href="http://output.jsbin.com/qemuni" class="link" target="_blank">在线预览</a>。</p>
    <d-code type="html" href="http://output.jsbin.com/qemuni">{{ cdn }}</d-code>
  </article>
</template>

<script>
import loadcomponents from '@/tools/loadcomponents';
import install from '@/views/code/install';

export default {
  data() {
    const { cli, main, dev, importscript, cdn } = install;
    return {
      cli,
      main,
      dev,
      importscript,
      cdn,
    };
  },
  components: {
    dCode: loadcomponents.load('Dcode'),
  },
};
</script>
