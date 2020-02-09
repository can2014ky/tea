<template>
  <div class="home">
    <div></div>
    <div>
      <el-button type="primary">按钮</el-button>
      <el-button type="success">按钮</el-button>
      <el-button type="warning">按钮</el-button>
      <el-button type="danger">按钮</el-button>
      <el-button type="info">按钮</el-button>
    </div>
    <div>
      <span>国际化：</span>
      <span>{{ $t('message') }}</span>
    </div>
    <div>
      <ve-line :data="chartData" :settings="chartSettings" width="800px"></ve-line>
      <ve-histogram :data="chartData" :extend="chartExtend" width="800px"></ve-histogram>
    </div>
  </div>
</template>

<script>
import { getBanner, getMockList, getMockDetail } from '@src/api/request/menu1';
import cloneDeep from 'lodash/cloneDeep';

export default {
  name: 'home',
  data() {
    this.chartSettings = {
      xAxisType: 'time',
    };
    this.chartExtend = {
      series: {
        barWidth: 10,
      },
      tooltip: {
        trigger: 'none',
      },
    };
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '2018-01-01', 访问用户: 1393 },
          { 日期: '2018-01-02', 访问用户: 3530 },
          { 日期: '2018-01-03', 访问用户: 2923 },
        ],
      },
    };
  },
  created() {
    this.getBanner();
    // this.getMockList();
    // this.getMockDetail();
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
