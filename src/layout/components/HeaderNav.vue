<template>
  <div class="headernav-wrapper">
    <div @click="onCollapse" class="left" :class="isSideMenuCollapse ? 'collapseClass' : ''">
      <img v-if="isSideMenuCollapse" :src="logoSmall" alt="">
      <img v-else :src="logo" alt="">
    </div>
    <div class="right">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        router
        background-color="#0a202e"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item
          v-for="item in menu"
          :key="item.path"
          :index="item.path"
        >{{item.title}}
        </el-menu-item>
      </el-menu>
      <div>
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="dropdown">
            主题
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="theme-default">默认</el-dropdown-item>
            <el-dropdown-item command="theme-red">红色</el-dropdown-item>
            <el-dropdown-item command="theme-green">绿色</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-select
          class="select-lang"
          placeholder="请选择语言"
          v-model="$i18n.locale"
          @change="onChangeLocalLanguage">
          <el-option
            v-for="item in langs"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
        <span>登录</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Menus from './menu.json';

export default {
  data() {
    return {
      logo: require('@src/assets/logo.png'),
      logoSmall: require('@src/assets/logoSmall.png'),
      menu: Menus,
      langs: ['zh', 'en'],
    };
  },
  computed: {
    ...mapState('site', ['isSideMenuCollapse', 'themeClassName', 'localLanguage']),
    activeIndex() {
      return `/${this.$route.fullPath.split('/')[1]}`;
    },
  },
  watch: {
    themeClassName: {
      handler(val) {
        document.body.className = val;
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions('site', ['toggleSideMenuCollapse', 'toggleTheme', 'toggleLocalLanguage']),
    handleSelect() {},
    onCollapse() {
      this.toggleSideMenuCollapse();
    },
    handleCommand(command) {
      this.toggleTheme(command);
    },
    onChangeLocalLanguage(val) {
      this.toggleLocalLanguage(val);
    },
  },
  created() {
    this.$i18n.locale = this.localLanguage;
  },
};
</script>
<style lang="scss" scoped>
  .headernav-wrapper {
    height: 60px;
    color: white;
    background-color: #0a202e;
    display: flex;
    justify-content: space-between;
    .left {
      width: 200px;
      font-size: 0;
      padding: 18px;
      box-sizing: border-box;
      img {
        height: 24px;
      }
    }
    .collapseClass {
      width: 64px;
    }
    .right {
      font-size: 14px;
      color: #fff;
      line-height: 60px;
      padding-right: 18px;
      flex: 1;
      display: flex;
      justify-content: space-between;
      .dropdown {
        color: #fff;
        cursor: pointer;
      }
      .select-lang {
        width: 60px;
        ::v-deep .el-input__inner {
          color: #fff;
          background-color: inherit;
          border: none;
        }
      }
    }
  }
</style>
