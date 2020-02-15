<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="games"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      @page-count="pageCount = $event"
      item-key="id"
      sort-by="time"
      sort-desc
      show-expand
      locale="fa"
    >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length" class="px-0">
          <v-list>
            <match-result/>
            <match-result/>
            <match-result/>
          </v-list>
        </td>
      </template>
      <template v-slot:item.teams="{ item }">
        <div>
          <v-chip v-for="team in item.teams" :key="team.name" class="ma-1"><team-avatar left :team="team" :size="32"/>{{ team.name }}</v-chip>
        </div>
      </template>
      <template v-slot:item.time="{ item }">
        <date-time-formatter :date="item.time"/>
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
      // games: {
      //   type: Array
      // }
    },
    computed: {
      headers() {
        return [
          { text: this.$t("dashboard.tournament"), sortable: false, value: "tournament" },
          { text: this.$t("dashboard.teams"), sortable: false, value: "teams", align: "center" },
          { text: this.$t("dashboard.time"), sortable: true, value: "time", align: "center" },
          // { text: this.$t("dashboard.status"), sortable: false, value: "status" }
        ];
      }
    },
    data() {
      return {
        page: 1,
        pageCount: 0,
        itemsPerPage: 40,
        games: [
          {
            id: 1,
            tournament: "daily - 1",
            teams: [
              { name: "team1" },
              { name: "team2" },
              { name: "team3" },
              { name: "team4" }
            ],
            time: 1581659918980,
            status: "",
            matches: [
              {}
            ]
          }
        ]
      };
    }
  };
</script>

<style scoped>

</style>
