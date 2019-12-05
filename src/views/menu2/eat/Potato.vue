<template>
  <div>
    土豆
    <svg-icon icon-class="pdf" class="pdf"></svg-icon>
    <siemPagination></siemPagination>
    <siemDialog :dialogConfig="dialogConfig"></siemDialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogConfig: {
        dialogVisible: false,
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
