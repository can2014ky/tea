<template>
  <div class="sidebar-wrapper">
    <el-menu
      default-active="1"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      class="menu">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">资产维护</span>
        </template>
          <el-menu-item index="2-1">资产列表</el-menu-item>
          <el-menu-item index="2-2">服务列表</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">资产配置</span>
        </template>
          <el-menu-item index="3-1">资产组维护</el-menu-item>
          <el-menu-item index="3-2">资产白名单</el-menu-item>
          <el-menu-item index="3-3">端口组配置</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">关于</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen() {

    },
    handleClose() {

    },
  },
};
</script>
<style lang="scss" scoped>
  .sidebar-wrapper {
    background-color: #1f2b41;
    height: 100%;
    ::v-deep .el-menu {
      background-color: inherit;
      .el-submenu__title {
        color: #fff;
        &:hover {
          background-color: #2a4660;
        }
      }
      .el-menu-item {
        color: #fff;
        &:hover {
          background-color: #2a4660;
        }
      }
      .el-menu-item:focus, .el-menu-item:hover {
        background-color: #2a4660;
      }
    }
  }
</style>
