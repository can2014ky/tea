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
      <span>登录</span>
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
    };
  },
  computed: {
    ...mapState('site', ['isSideMenuCollapse']),
    activeIndex() {
      return `/${this.$route.fullPath.split('/')[1]}`;
    },
  },
  methods: {
    ...mapActions('site', ['toggleSideMenuCollapse']),
    handleSelect() {},
    onCollapse() {
      this.toggleSideMenuCollapse();
    },
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
      color: #fff;
      line-height: 60px;
      padding-right: 18px;
      flex: 1;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
