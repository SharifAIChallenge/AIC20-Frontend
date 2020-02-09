<template>
  <dashboard-page title="dashboard.updates">
    <v-col>
      <v-card>
        <v-card-text class="ps-0 py-0">
        <updates :items="updates"/>
        </v-card-text>
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
    mixins: [dashboardPageValidate("updates")],
    data() {
      return {
        updates: [
          {
            id: 1,
            text: "محتوای آموزشی دوازدهمین نبرد هوش مصنوعی شریف منتشر شد. برای مشاهده و دریافت آن به بخش محتوای آموزشی مراجعه کنید.",
            title: "info"
          }
        ]
      };
    }
  };
</script>

<style scoped>

</style>
