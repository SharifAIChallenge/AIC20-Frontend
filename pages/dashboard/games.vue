<template>
  <dashboard-page title="dashboard.games">
    <v-col>
      <v-card>
        <v-card-title>
          {{ $t("dashboard.friendlyGame") }}
        </v-card-title>
        <v-divider/>
        <v-card-text>

        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card style="overflow: hidden">
        <games-list/>
      </v-card>
    </v-col>
  </dashboard-page>
</template>

<script>
  import dashboardPageValidate from "../../mixins/dashboardPageValidate";
  import GamesList from "../../components/dashboard/games/GamesList";
  import DashboardPage from "../../components/dashboard/DashboardPage";

  export default {
    components: { DashboardPage, GamesList },
    layout: "dashboard",
    mixins: [dashboardPageValidate("games")]
  };
</script>

<style scoped>

</style>
