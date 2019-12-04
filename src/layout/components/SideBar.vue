<template>
  <div class="sidebar-wrapper">
    <el-menu
      :collapse="isCollapse"
      default-active="/home"
      unique-opened
      router
      text-color="#fff"
      active-text-color="#ffd04b"
      background-color="#1f2b41"
      >
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">导航二</span>
        </template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="/about">
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
};
</script>
<style lang="scss" scoped>
  .sidebar-wrapper {
    background-color: #1f2b41;
    height: 100%;
  }
</style>
