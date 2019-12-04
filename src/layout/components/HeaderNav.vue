<template>
  <div class="headernav-wrapper">
    <div class="left">
      <img :src="logo" alt="">
    </div>
    <div class="right">
      <span>登录</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo: '',
      // logo: require('@src/assets/logo.png'),
    };
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
      font-size: 0;
      padding: 18px;
      img {
        height: 24px;
      }
    }
    .right {
      color: #fff;
      line-height: 60px;
      padding-right: 18px;
    }
  }
</style>
