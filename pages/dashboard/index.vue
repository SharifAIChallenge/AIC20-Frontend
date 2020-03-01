<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card>
        <v-card-title>
          {{ $t("dashboard.recentUpdates") }}
          <v-spacer/>
          <v-btn rounded small color="secondary" to="/dashboard/updates" nuxt>{{ $t("dashboard.seeAll") }}</v-btn>
        </v-card-title>
        <v-divider/>
        <v-card-text class="ps-0">
          <updates :items="notifications.slice(0, 3)"/>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card>
        <v-card-title>{{ $t("dashboard.gameStats") }}</v-card-title>
        <v-divider/>
        <v-card-text class="text-center">
          <games-stat :wins="gameStat.wins" :loss="gameStat.loss" :draws="gameStat.draws"/>
        </v-card-text>
      </v-card>
    </v-col>
<!--    <v-col cols="12" md="6">-->
<!--      <v-card>-->
<!--        <v-card-title>{{ $t("dashboard.performance") }}</v-card-title>-->
<!--        <v-divider/>-->
<!--        <v-card-text>-->
<!--          <performance/>-->
<!--        </v-card-text>-->
<!--      </v-card>-->
<!--    </v-col>-->
  </v-row>
</template>

<script>
  import Updates from "../../components/dashboard/Updates";
  import GamesStat from "../../components/dashboard/home/GamesStat";
  import Performance from "../../components/dashboard/home/Performance";
  import { mapState } from "vuex";
  import { GAME_STATS, NOTIFICATIONS } from "../../api";

  export default {
    components: { Performance, GamesStat, Updates },
    layout: "dashboard",
    transition: "fade-transition",
    async asyncData({ store, $axios }) {
      let data = await $axios.$get(GAME_STATS.url);
      if (data.status_code === 200)
        return {
          gameStat: {
            wins: data.wins,
            loss: data.loss,
            draws: data.draws
          }
        };
    },
    async fetch({ store, $axios }) {
      let data = await $axios.$get(NOTIFICATIONS.url);
      store.commit("notification/set", data);
    },
    data() {
      return {
        gameStat: {
          wins: 0,
          loss: 0,
          draws: 0
        }
      };
    },
    computed: {
      ...mapState({
        notifications: state => state.notification.notifications
      })
    }
  };
</script>

<style scoped>

</style>
