<template>
  <dashboard-page title="dashboard.updates">
    <v-col>
      <v-card>
        <updates/>
      </v-card>
    </v-col>
  </dashboard-page>
</template>

<script>
  import Updates from "../../components/dashboard/Updates";
  import DashboardPage from "../../components/dashboard/DashboardPage";
  import dashboardPageValidate from "../../mixins/dashboardPageValidate";

  export default {
    layout: "dashboard",
    components: { DashboardPage, Updates },
    mixins: [dashboardPageValidate("updates")]
  };
</script>

<style scoped>

</style>
