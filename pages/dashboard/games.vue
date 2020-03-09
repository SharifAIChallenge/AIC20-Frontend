<template>
  <dashboard-page title="dashboard.games">
    <v-col>
      <v-card>
        <v-card-title>
          {{ $t("dashboard.requestFriendlyMatch") }}
        </v-card-title>
        <v-divider/>
        <v-card-text>
          <friendly-match/>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card>
        <v-card-title>
          {{ $t("dashboard.friendlyLobby") }}
          <v-btn icon class="ms-3" @click="$store.dispatch('games/getFriendlyLobbies')">
            <v-icon>mdi-autorenew</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider/>
        <v-card-text>
          <match-lobby/>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card style="overflow: hidden">
        <v-card-title>
          {{ $t("dashboard.games") }}
          <v-btn icon class="ms-3" @click="$store.dispatch('games/getGames', {})">
            <v-icon>mdi-autorenew</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider/>
        <games-list :games="games"/>
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
  import MatchLobby from "../../components/dashboard/games/MatchLobby";

  export default {
    components: { MatchLobby, FriendlyMatch, DashboardPage, GamesList },
    layout: "dashboard",
    transition: "fade-transition",
    mixins: [dashboardPageValidate("games")],
    fetch({ store }) {
      return Promise.all(
        [
          store.dispatch("games/getGames", {}),
          store.dispatch("games/getFriendlyLobbies")
        ]
      );
    },
    computed: {
      ...mapState({
        games: state => state.games.games
      })
    }
  };
</script>

<style scoped>

</style>
