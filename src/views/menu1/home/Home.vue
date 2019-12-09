<template>
  <div class="home">
    首页
  </div>
</template>

<script>
import { getBanner } from '@src/api/request/menu1';

export default {
  name: 'home',
  created() {
    getBanner();
  },
};
</script>
