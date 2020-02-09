<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title>
          {{ $t("dashboard.recentUpdates") }}
          <v-spacer/>
          <v-btn rounded small color="secondary" to="/dashboard/updates" nuxt>{{ $t("dashboard.seeAll") }}</v-btn>
        </v-card-title>
        <v-divider/>
        <v-card-text class="ps-0">
          <updates :items="updates"/>
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-col>
<!--    <v-col cols="12" md="6">-->
<!--      <v-card>-->
<!--        <v-card-title>{{ $t("dashboard.gameStats") }}</v-card-title>-->
<!--        <v-divider/>-->
<!--        <v-card-text class="text-center">-->
<!--          <games-stat :wins="gameStat.wins" :loss="gameStat.loss"/>-->
<!--        </v-card-text>-->
<!--      </v-card>-->
<!--    </v-col>-->
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

  export default {
    components: { Performance, GamesStat, Updates },
    layout: "dashboard",
    data() {
      return {
        updates: [
          {
            id: 1,
            text: "محتوای آموزشی دوازدهمین نبرد هوش مصنوعی شریف منتشر شد. برای مشاهده و دریافت آن به بخش محتوای آموزشی مراجعه کنید.",
            title: "info"
          }
        ],
        gameStat: {
          wins: 2,
          loss: 1
        }
      };
    }
  };
</script>

<style scoped>

</style>
