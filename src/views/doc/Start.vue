<template>
  <article>
    <h2 class="h2">快速开始</h2>
    <p class="p">本节将介绍如何在项目中使用 EM-FE</p>
    <h3 class="h3">使用 CDN</h3>
    <p class="p">通过 <a href="https://unpkg.com/em-fe" class="link" target="_blank">https://unpkg.com/em-fe</a> 可以看到 EM-FE 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用：</p>
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
    const { importscript, cdn } = install;
    return {
      importscript,
      cdn,
    };
  },
  components: {
    dCode: loadcomponents.load('Dcode'),
  },
};
</script>
