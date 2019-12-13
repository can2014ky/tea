<template>
  <div>
    土豆
    <svg-icon icon-class="assetsConfig"></svg-icon>
    <svg-icon icon-class="pdf" class="pdf"></svg-icon>
    <siemPagination type="full"></siemPagination>
    <siemDialog :dialogConfig="dialogConfig"></siemDialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogConfig: {
        dialogVisible: true,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
  .pdf {
    color:red;
    height:16px;
    width:16px;
  }
</style>
