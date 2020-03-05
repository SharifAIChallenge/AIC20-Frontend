<template>
  <dashboard-page title="dashboard.scoreboard">
    <!--    <v-col>-->
    <!--      <v-alert text type="info" class="my-0">-->
    <!--        {{ $t("dashboard.codeScoreboardMessage") }}-->
    <!--      </v-alert>-->
    <!--    </v-col>-->
    <v-col>
      <v-card class="overflow-hidden">
        <v-tabs grow v-model="tab">
          <v-tab v-for="tab in tabs" :key="tab.name">
            {{ $t(`dashboard.${tab.name}`) }}
          </v-tab>
        </v-tabs>
        <v-divider/>
        <v-tabs-items v-model="tab" class="mt-4">
          <v-tab-item v-for="tab in tabs" :key="tab.name+'item'">
            <v-card-text>
              <scoreboard :teams="tab.teams"/>
            </v-card-text>
          </v-tab-item>
        </v-tabs-items>
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
    transition: "fade-transition",
    async fetch({ store }) {
      await store.dispatch("scoreboard/get", { tab: store.state.scoreboard.tab ? "seeding" : "friendly" });
    },
    computed: {
      ...mapState({
        friendlyTeams: state => state.scoreboard.friendlyScoreboard,
        seedingTeams: state => state.scoreboard.seedingScoreboard,
        scoreboardTab: state => state.scoreboard.tab
      }),
      tab: {
        set(val) {
          this.$store.commit("scoreboard/setTab", val);
          this.$store.dispatch("scoreboard/get", { tab: this.tabs[val].name });
        },
        get() {
          return this.scoreboardTab;
        }
      },
      tabs() {
        return [
          { name: "friendly", teams: this.friendlyTeams },
          { name: "seeding", teams: this.seedingTeams }
        ];
      }
    }
  };
</script>
