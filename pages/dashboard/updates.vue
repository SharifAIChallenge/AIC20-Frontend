<template>
  <dashboard-page title="dashboard.updates">
    <v-card>
      <updates/>
    </v-card>
  </dashboard-page>
</template>

<script>
  import Updates from "../../components/dashboard/Updates";
  import DashboardPage from "../../components/dashboard/DashboardPage";
  export default {
    layout: "dashboard",
    components: { DashboardPage, Updates }
  };
</script>

<style scoped>

</style>
