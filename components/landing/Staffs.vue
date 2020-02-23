<template>

</template>

<script>
  import StaffGroup from "../staffs/StaffGroup";

  export default {
    components: { StaffGroup },
    props: {
      staffs: {
        type: Object
      }
    },
    data() {
      return {
        tabs: null
      };
    }
  };
</script>

<style scoped>

</style>
