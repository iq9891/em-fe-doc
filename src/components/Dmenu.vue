<template>
  <div class="dmenu" v-emfe-documentclick="close">
    <div class="dmenu-search-box">
      <input type="text" class="input dmenu-search" v-model="search" @input="change($event)" @keyup.enter="go(moveIndex > -1 ? moveIndex : 0)" @keyup.down="moveResult('down')" @keyup.up="moveResult('up')" placeholder="搜索君">
      <ul class="dmenu-search-result" v-show="result.length">
        <li class="dmenu-search-no" v-show="!result.length" key="-1">暂无结果</li>
        <li class="dmenu-search-result-item" :class="{'dmenu-search-result-active': moveIndex === rstIndex}" v-for="(rst, rstIndex) in result" :key="rstIndex" v-show="result.length">
          <emfe-link :routers="{}" className="dmenu-search" :class="{'dmenu-search-link-active': moveIndex === rstIndex}" @click="go(rstIndex)">{{rst.title}}</emfe-link>
        </li>
      </ul>
    </div>
    <div class="dmenu-content">
      <div class="dmenu-link-box dmenu-h2">
        <router-link class="link dmenu-link" :to="{ name: 'Install' }">安装</router-link>
      </div>
      <div class="dmenu-link-box dmenu-h2">
        <router-link class="link dmenu-link" :to="{ name: 'Start' }">快速开始</router-link>
      </div>
      <h2 class="dmenu-h2">设计规范</h2>
      <ul class="dmenu-ul">
        <li class="dmenu-li" v-for="ui in uis">
          <router-link class="link dmenu-link" :to="ui.router">{{ ui.title }}</router-link>
        </li>
      </ul>
      <h2 class="dmenu-h2">组件</h2>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Base 基础</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.base">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Nav 导航</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.nav">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Form 表单</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.form">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Picker 选择器</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.picker">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Board 板子</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.board">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Tip 提示</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.tip">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Drag 拖拽</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.drag">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <dl class="dmenu-dl">
        <dt class="dmenu-dt">Other 其他</dt>
        <dd class="dmenu-dd" v-for="cpt in cpts.other">
          <router-link class="link dmenu-link" :to="cpt.router">{{ cpt.title }}</router-link>
        </dd>
      </dl>
      <h2 class="dmenu-h2">服务</h2>
      <div class="dmenu-link-box dmenu-h2" v-for="sce in services">
        <router-link class="link dmenu-link" :to="sce.router">{{ sce.title }}</router-link>
      </div>
      <h2 class="dmenu-h2">指令</h2>
      <div class="dmenu-link-box dmenu-h2" v-for="drt in directives">
        <router-link class="link dmenu-link" :to="drt.router">{{ drt.title }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import uis from './menus/ui';
import directives from './menus/directive';
import services from './menus/service';
import cpts from './menus/cpt';

export default {
  data() {
    return {
      uis,
      cpts,
      directives,
      services,
      search: '',
      result: [],
      moveIndex: -1,
    };
  },
  methods: {
    change(ev) {
      const { value } = ev.target;
      this.result = [];
      if (value) {
        const rSearch = new RegExp(value, 'gi');
        // 设计规范
        const getUiSearch = this.uis.find(ui => rSearch.test(ui.title));
        if (getUiSearch) {
          this.result.push(getUiSearch);
        }
        // 其他
        Object.keys(this.cpts).forEach((cptsKey) => {
          const getSearch = this.cpts[cptsKey].find(cpt => rSearch.test(cpt.title));
          if (getSearch) {
            this.result.push(getSearch);
          }
        });
      }
    },
    close() {
      this.result = [];
      this.search = '';
      this.moveIndex = -1;
    },
    go(index) {
      this.$router.push(this.result[index].router);
      this.close();
    },
    moveResult(dir) {
      // 按下
      if (this.moveIndex < this.result.length - 1 && dir === 'down') {
        this.moveIndex++;
      }
      // 按上
      if (this.moveIndex > 0 && dir === 'up') {
        this.moveIndex--;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/components/dmenu.scss";
</style>
