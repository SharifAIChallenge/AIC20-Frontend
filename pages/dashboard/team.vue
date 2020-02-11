<template>
  <dashboard-page title="dashboard.team">
    <v-row v-if="team" class="mx-0">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            {{ $t("dashboard.myTeam") }}
          </v-card-title>
          <v-divider/>
          <v-card-text>
            <team :team="team"/>
            <leave-team class="mt-4"/>
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
          <v-card-text>
            <sent-invitations/>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-col v-else>
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
  import ReceivedInvitations from "../../components/dashboard/team/ReceivedInvitations";
  import SentInvitations from "../../components/dashboard/team/SentInvitations";
  import DashboardPage from "../../components/dashboard/DashboardPage";
  import CreateTeam from "../../components/dashboard/team/CreateTeam";
  import InviteMember from "../../components/dashboard/team/InviteMember";
  import Team from "../../components/dashboard/team/Team";
  import LeaveTeam from "../../components/dashboard/team/LeaveTeam";
  import dashboardPageValidate from "../../mixins/dashboardPageValidate";
  import { mapState } from "vuex";

  export default {
    components: { SentInvitations, InviteMember, ReceivedInvitations, CreateTeam, DashboardPage, Team, LeaveTeam },
    layout: "dashboard",
    mixins: [dashboardPageValidate("team")],
    async fetch({ store }) {
      await store.dispatch("team/getTeam")
    },
    data() {
      return {
        tabs: null
      };
    },
    computed: {
      ...mapState({
        team: state => state.team.team
      })
    },
    watch: {
      tabs(val) {
        if (val === 1) {
          this.$store.dispatch("team/getReceivedInvitations")
        }
      }
    }
  };
</script>

<style scoped>

</style>
