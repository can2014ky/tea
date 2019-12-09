<template>
  <div class="layout-wrapper">
    <el-container>
      <el-header>
        <HeaderNav/>
      </el-header>
      <el-container class="container-wrapper">
        <el-aside :width="width">
          <SideBar></SideBar>
        </el-aside>
        <el-main>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import HeaderNav from './components/HeaderNav.vue';
import SideBar from './components/SideBar.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    HeaderNav,
    SideBar,
    AppMain,
  },
  computed: {
    ...mapState('site', ['isSideMenuCollapse']),
    width() {
      return this.isSideMenuCollapse ? '64px' : '200px';
    },
  },
};
</script>
<style lang="scss" scoped>
  .layout-wrapper {
    ::v-deep .el-header {
      padding: 0;
    }
    .container-wrapper {
      min-height: calc(100vh - 60px);
    }
  }
</style>
