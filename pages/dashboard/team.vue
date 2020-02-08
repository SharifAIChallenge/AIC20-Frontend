<template>
  <dashboard-page title="dashboard.team">
    <v-card class="overflow-hidden">
      <v-tabs icons-and-text grow v-model="tabs">
        <v-tab>
          {{ $t("dashboard.createTeam") }}
          <v-icon>mdi-account-group</v-icon>
        </v-tab>
        <v-tab>
          {{ $t("dashboard.receivedInvitations") }}
          <v-icon>mdi-email</v-icon>
        </v-tab>
      </v-tabs>
      <v-divider/>
      <v-tabs-items v-model="tabs" class="mt-4">
        <v-tab-item>
          <v-card-text>
            <create-team/>
          </v-card-text>
        </v-tab-item>
        <v-tab-item>
          <v-card-text>
            <recieved-invitations/>
          </v-card-text>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </dashboard-page>
</template>

<script>
  import DashboardPage from "../../components/dashboard/DashboardPage";
  import CreateTeam from "../../components/dashboard/team/CreateTeam";
  import RecievedInvitations from "../../components/dashboard/team/RecievedInvitations";
  import dashboardPageValidate from "../../mixins/dashboardPageValidate";
  export default {
    components: { RecievedInvitations, CreateTeam, DashboardPage },
    layout: "dashboard",
    mixins: [dashboardPageValidate("team")],
    data() {
      return {
        tabs: null
      }
    }
  };
</script>

<style scoped>

</style>
