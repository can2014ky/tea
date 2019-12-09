<template>
  <div class="sidebar-wrapper">
    <el-menu
      :collapse="!isSideMenuCollapse"
      :default-active="activeIndex"
      unique-opened
      router
      :collapse-transition="false"
      text-color="#fff"
      active-text-color="#ffd04b"
      background-color="#1f2b41"
      >
      <template v-for="item in menu.children">
        <el-menu-item v-if="!item.children" :key="item.path" :index="item.path">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
        <el-submenu v-else :key="item.path" :index="item.path">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.title}}</span>
          </template>
            <el-menu-item
              v-for="submenu in item.children"
              :key="submenu.path"
              :index="submenu.path"
            >{{submenu.title}}
            </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Menus from './menu.json';

export default {
  data() {
    return {
      menu: {},
      activeIndex: '',
    };
  },
  computed: {
    ...mapState('site', ['isSideMenuCollapse']),
  },
  watch: {
    $route: {
      handler(val) {
        if (val.matched[1]) {
          this.menu = Menus.find(item => item.name === val.matched[1].meta.name);
          this.activeIndex = val.fullPath;
        }
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
  .sidebar-wrapper {
    background-color: #1f2b41;
    height: 100%;
    ::v-deep .el-menu {
      border-right: none;
    }
  }
</style>
