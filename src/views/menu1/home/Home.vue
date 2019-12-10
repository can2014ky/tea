<template>
  <div class="home">
    首页
  </div>
</template>

<script>
import { getBanner } from '@src/api/request/menu1';
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: 'home',
  created() {
    getBanner().then((res) => { console.log('banner request:', res); });
    const objects = [{ a: 1 }, { b: 2 }];
    const deep = cloneDeep(objects);
    console.log(333, deep);
  },
};
</script>
