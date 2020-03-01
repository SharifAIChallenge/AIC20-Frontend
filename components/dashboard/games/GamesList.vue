<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="games"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      @page-count="pageCount = $event"
      item-key="time"
      sort-by="time"
      sort-desc
      locale="fa"
    >
<!--      <template v-slot:expanded-item="{ headers, item }">-->
<!--        <td :colspan="headers.length" class="px-0">-->
<!--          <v-list>-->
<!--            <match-result/>-->
<!--            <match-result/>-->
<!--          </v-list>-->
<!--        </td>-->
<!--      </template>-->
      <template v-slot:item.teams="{ item }">
        <div>
          <match-result :game-sides="item.game_sides" />
        </div>
      </template>
      <template v-slot:item.time="{ item }">
        <date-time-formatter :date="item.time"/>
      </template>
      <template v-slot:item.status="{ item }">
        {{ $t(`dashboard.${item.status}`) }}
      </template>
      <template v-slot:item.log="{ item }">
        <v-btn v-if="item.log !== null" rounded small text block color="info" class="my-1" :href="item.log" target="_blank">
          <v-icon left small>mdi-download</v-icon>
          {{ $t("dashboard.graphic") }}
        </v-btn>
        <v-btn v-if="item.client_log !== null" rounded small text block color="amber" class="my-1" :href="item.client_log">
          <v-icon left small>mdi-download</v-icon>
          {{ $t("dashboard.client") }}
        </v-btn>
      </template>
    </v-data-table>
    <v-pagination v-model="page" :length="pageCount" :total-visible="5" circle class="my-3"/>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import TeamAvatar from "../team/TeamAvatar";
  import DateTimeFormatter from "../../DateTimeFormatter";
  import MatchResult from "./MatchResult";

  export default {
    components: { MatchResult, DateTimeFormatter, TeamAvatar },
    props: {
      games: {
        type: Array
      }
    },
    computed: {
      headers() {
        return [
          // { text: this.$t("dashboard.tournament"), sortable: false, value: "tournament" },
          { text: this.$t("dashboard.time"), sortable: true, value: "time", align: "right" },
          { text: this.$t("dashboard.teams"), sortable: false, value: "teams", align: "center" },
          { text: this.$t("dashboard.status"), sortable: false, value: "status", align: "center" },
          { text: this.$t("dashboard.log"), sortable: false, value: "log", align: "center", width: 70 },
        ];
      }
    },
    data() {
      return {
        page: 1,
        pageCount: 0,
        itemsPerPage: 5
        // games: [
        //   {
        //     id: 1,
        //     tournament: "daily - 1",
        //     teams: [
        //       { name: "team1" },
        //       { name: "team2" },
        //       { name: "team3" },
        //       { name: "team4" }
        //     ],
        //     time: 1581659918980,
        //     status: "",
        //     matches: [
        //       {}
        //     ]
        //   }
        // ]
      };
    }
  };
</script>

<style scoped>

</style>
