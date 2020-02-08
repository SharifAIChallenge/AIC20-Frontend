<template>
  <dashboard-page title="dashboard.team">
    <v-card class="overflow-hidden">
      <v-tabs icons-and-text grow v-model="tabs">
        <v-tab>
          {{ $t("dashboard.createTeam") }}
          <v-icon>mdi-account-edit</v-icon>
        </v-tab>
        <v-tab>
          {{ $t("dashboard.receivedInvitations") }}
          <v-icon>mdi-shield-edit</v-icon>
        </v-tab>
      </v-tabs>
      <v-divider/>
      <v-tabs-items v-model="tabs" class="mt-4">
        <v-tab-item>
          <v-card-text>
          </v-card-text>
        </v-tab-item>
        <v-tab-item>
          <v-card-text>
          </v-card-text>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </dashboard-page>
</template>

<script>
  import DashboardPage from "../../components/dashboard/DashboardPage";
  export default {
    components: { DashboardPage },
    layout: "dashboard",
    data() {
      return {
        tabs: null
      }
    }
  };
</script>

<style scoped>

</style>
