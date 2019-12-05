<template>
  <div>
    <siemPagination></siemPagination>
    <siemDialog :dialogConfig="dialogConfig"></siemDialog>
    土豆
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
