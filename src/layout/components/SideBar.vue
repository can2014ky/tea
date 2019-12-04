<template>
  <div class="sidebar-wrapper">
    <el-menu
      :collapse="isCollapse"
      :default-active="activeIndex"
      unique-opened
      router
      text-color="#fff"
      active-text-color="#ffd04b"
      background-color="#1f2b41"
      >
      <el-menu-item v-for="item in menu.children" :key="item.path" :index="item.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import Menus from '@src/menu.json';

export default {
  data() {
    return {
      isCollapse: false,
      menu: {},
      activeIndex: '',
    };
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
  }
</style>
