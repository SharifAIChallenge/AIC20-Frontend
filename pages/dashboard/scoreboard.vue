<template>
  <dashboard-page title="dashboard.scoreboard">
    <!--    <v-col>-->
    <!--      <v-alert text type="info" class="my-0">-->
    <!--        {{ $t("dashboard.codeScoreboardMessage") }}-->
    <!--      </v-alert>-->
    <!--    </v-col>-->
    <v-col>
      <v-card class="overflow-hidden">
        <client-only>
          <v-tabs grow v-model="tab">
            <v-tab v-for="tab in tabs" :key="tab.name">
              {{ $t(`dashboard.${tab.name}`) }}
            </v-tab>
            <v-tab>
              {{ $t(`dashboard.groups`) }}
            </v-tab>
          </v-tabs>
        </client-only>
        <v-divider/>
        <v-tabs-items v-model="tab" class="mt-4">
          <v-tab-item v-for="tab in tabs" :key="tab.name+'item'">
            <scoreboard :teams="tab.teams"/>
          </v-tab-item>
          <v-tab-item>
            <v-skeleton-loader v-if="!groupScoreboards.length" type="list-item@7"/>
            <scoreboard
              v-else
              v-for="scoreboard in groupScoreboards"
              :teams="scoreboard.rows"
              :key="scoreboard.group_name"
              :title="`گروه ${scoreboard.group_name}`"
              hide-search
              hide-pagination
              class="mb-12"
            />
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
      await store.dispatch("scoreboard/get", { tab: store.state.scoreboard.tab === 1 ? "seeding" : store.state.scoreboard.tab === 0 ? "friendly" : "groups" });
    },
    data() {
      return {
        tabNames: ["friendly", "seeding", "groups"]
      }
    },
    computed: {
      ...mapState({
        friendlyTeams: state => state.scoreboard.friendlyScoreboard,
        seedingTeams: state => state.scoreboard.seedingScoreboard,
        groupScoreboards: state => state.scoreboard.groupScoreboards,
        scoreboardTab: state => state.scoreboard.tab
      }),
      tab: {
        set(val) {
          this.$store.commit("scoreboard/setTab", val);
          this.$store.dispatch("scoreboard/get", { tab: this.tabNames[val] });
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
