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
            <v-tab v-for="tab in tabNames" :key="tab">
              {{ $t(`dashboard.${tab}`) }}
            </v-tab>
          </v-tabs>
        </client-only>
        <v-divider/>
        <v-tabs-items v-model="tab" class="mt-4">
          <v-tab-item>
            <v-expansion-panels accordion mandatory>
              <v-expansion-panel
                v-for="scoreboard in [...seedingScoreboards].reverse()"
                :key="scoreboard.challenge_type"
              >
                <v-expansion-panel-header class="title">{{ $t(`dashboard.${scoreboard.challenge_type}`) }}</v-expansion-panel-header>
                <v-expansion-panel-content class="px-0">
                  <scoreboard :teams="scoreboard.rows" class="mx-n6"/>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-tab-item>
          <v-tab-item>
            <scoreboard :teams="friendlyTeams"/>
          </v-tab-item>
          <v-tab-item>
            <v-skeleton-loader v-if="!groupsScoreboards.length" type="list-item@7"/>
            <v-expansion-panels v-else accordion mandatory multiple>
              <v-expansion-panel
                v-for="scoreboard in groupsScoreboards"
                :key="scoreboard.group_name"
              >
                <v-expansion-panel-header class="title">{{ `گروه ${scoreboard.group_name}` }}</v-expansion-panel-header>
                <v-expansion-panel-content class="px-0">
                  <scoreboard
                    :teams="scoreboard.rows"
                    hide-search
                    hide-pagination
                    class="mx-n6 mb-6"
                  />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
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
      await store.dispatch("scoreboard/get", { tab: store.state.scoreboard.tab === 0 ? "seeding" : store.state.scoreboard.tab === 1 ? "friendly" : "groups" });
    },
    data() {
      return {
        tabNames: ["seeding", "friendly", "groups"]
      };
    },
    computed: {
      ...mapState({
        friendlyTeams: state => state.scoreboard.friendlyScoreboard,
        seedingScoreboards: state => state.scoreboard.seedingScoreboards,
        groupsScoreboards: state => state.scoreboard.groupsScoreboards,
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
      }
    }
  };
</script>
