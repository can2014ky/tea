<template>
  <div class="headernav-wrapper">
    <div class="left">
      <img :src="logo" alt="">
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
        <el-menu-item index="/menu1">菜单一</el-menu-item>
        <el-menu-item index="/menu2">菜单二</el-menu-item>
      </el-menu>
      <span>登录</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: require('@src/assets/logo.png'),
      activeIndex: '/menu1',
    };
  },
  methods: {
    handleSelect() {},
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
    .right {
      color: #fff;
      line-height: 60px;
      padding-right: 18px;
      flex: 1;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
