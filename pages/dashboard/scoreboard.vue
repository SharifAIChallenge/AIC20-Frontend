<template>
  <dashboard-page title="dashboard.scoreboard">
    <v-col>
      <v-alert text type="info" class="my-0">
        {{ $t("dashboard.codeScoreboardMessage") }}
      </v-alert>
    </v-col>
    <v-col>
      <v-card>
        <scoreboard :teams="teams"/>
      </v-card>
    </v-col>
  </dashboard-page>
</template>

<script>
  import dashboardPageValidate from "../../mixins/dashboardPageValidate";
  import DashboardPage from "../../components/dashboard/DashboardPage";
  import { mapState } from "vuex";
  import Scoreboard from "../../components/dashboard/scoreboard/Scoreboard";

  export default {
    components: { DashboardPage, Scoreboard },
    layout: "dashboard",
    mixins: [dashboardPageValidate("scoreboard")],
    async fetch({ store }) {
      await store.dispatch("scoreboard/get");
    },
    computed: {
      ...mapState({
        teams: state => state.scoreboard.scoreboard
      })
    }
  };
</script>
