<template>
  <div class="home">
    首页
  </div>
</template>

<script>
import { getBanner, getMockList, getMockDetail } from '@src/api/request/menu1';
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: 'home',
  created() {
    // this.getBanner();
    this.getMockList();
    this.getMockDetail();
    const objects = [{ a: 1 }, { b: 2 }];
    const deep = cloneDeep(objects);
    console.log('lodash test:', deep);
  },
  methods: {
    async getBanner() {
      const res = await getBanner();
      console.log('banner request:', res);
    },
    async getMockList() {
      const res = await getMockList();
      console.log('mock list request:', res);
    },
    async getMockDetail() {
      const res = await getMockDetail();
      console.log('mock detail request:', res);
    },
  },
};
</script>
