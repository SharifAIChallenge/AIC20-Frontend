<template>

</template>

<script>
  import dashboardPageValidate from "../../mixins/dashboardPageValidate";

  export default {
    layout: "dashboard",
    transition: "fade-transition",
    mixins: [dashboardPageValidate("tournaments")]
  };
</script>

<style scoped>

</style>
