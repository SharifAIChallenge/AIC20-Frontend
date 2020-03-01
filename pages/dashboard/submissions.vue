<template>
  <dashboard-page title="dashboard.submissions">
    <v-col>
      <v-card>
        <v-card-text>
          <code-submission/>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card>
        <v-card-title>{{ $t("dashboard.submissionsHistory") }}
          <v-btn icon class="ms-3" @click="$store.dispatch('team/getSubmissions')">
            <v-icon>mdi-autorenew</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider/>
        <submissions-list :submissions="submissions"/>
      </v-card>
    </v-col>
  </dashboard-page>
</template>

<script>
  import dashboardPageValidate from "../../mixins/dashboardPageValidate";
  import DashboardPage from "../../components/dashboard/DashboardPage";
  import CodeSubmission from "../../components/dashboard/submission/CodeSubmission";
  import SubmissionsList from "../../components/dashboard/submission/SubmissionsList";
  import { mapState } from "vuex";

  export default {
    components: { CodeSubmission, DashboardPage, SubmissionsList },
    layout: "dashboard",
    mixins: [dashboardPageValidate("submissions")],
    transition: "fade-transition",
    async fetch({ store }) {
      await store.dispatch("team/getSubmissions")
    },
    computed: {
      ...mapState({
        submissions: state => state.team.submissions,
      })
    }
  };
</script>

<style scoped>

</style>
