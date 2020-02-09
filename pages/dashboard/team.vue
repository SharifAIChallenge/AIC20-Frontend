<template>
  <dashboard-page title="dashboard.team">
    <v-row class="mx-0">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            {{ $t("dashboard.myTeam") }}
          </v-card-title>
          <v-divider/>
          <v-card-text>
            <team :team="team"/>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>
            {{ $t("dashboard.inviteTeammates") }}
          </v-card-title>
          <v-divider/>
          <v-card-text>
            <invite-member/>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-col>
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
              <received-invitations/>
            </v-card-text>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </dashboard-page>
</template>

<script>
  import DashboardPage from "../../components/dashboard/DashboardPage";
  import CreateTeam from "../../components/dashboard/team/CreateTeam";
  import ReceivedInvitations from "../../components/dashboard/team/ReceivedInvitations";
  import Team from "../../components/dashboard/team/Team";
  import dashboardPageValidate from "../../mixins/dashboardPageValidate";
  import InviteMember from "../../components/dashboard/team/InviteMember";

  export default {
    components: { InviteMember, ReceivedInvitations, CreateTeam, DashboardPage, Team },
    layout: "dashboard",
    mixins: [dashboardPageValidate("team")],
    data() {
      return {
        tabs: null,
        team: {
          name: "team name"
        }
      };
    }
  };
</script>

<style scoped>

</style>
