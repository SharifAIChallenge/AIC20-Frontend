<template>
  <dashboard-page title="dashboard.games">
    <v-col>
      <v-card>
        <v-card-title>
          {{ $t("dashboard.friendlyGame") }}
        </v-card-title>
        <v-divider/>
        <v-card-text>
          <friendly-match/>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card style="overflow: hidden">
        <games-list :games="friendlyGames"/>
      </v-card>
    </v-col>
  </dashboard-page>
</template>

<script>
  import dashboardPageValidate from "../../mixins/dashboardPageValidate";
  import GamesList from "../../components/dashboard/games/GamesList";
  import DashboardPage from "../../components/dashboard/DashboardPage";
  import FriendlyMatch from "../../components/dashboard/games/FriendlyMatch";
  import { mapState } from "vuex";

  export default {
    components: { FriendlyMatch, DashboardPage, GamesList },
    layout: "dashboard",
    mixins: [dashboardPageValidate("games")],
    async fetch({ store }) {
      store.dispatch("games/getFriendlyMatches");
    },
    computed: {
      ...mapState({
        friendlyGames: state => state.games.friendlyGames
      })
    }
  };
</script>

<style scoped>

</style>
