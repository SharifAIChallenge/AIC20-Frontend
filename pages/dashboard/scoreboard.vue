<template>
  <dashboard-page title="dashboard.scoreboard">
    <v-col>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            :label="$t('dashboard.search')"
            color="info"
            outlined
            dense
            single-line
            hide-details
          />
        </v-card-title>
        <div>
          <v-data-table
            :search="search"
            :headers="headers"
            :items="submissions"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            @page-count="pageCount = $event"
            item-key="id"
            locale="fa"
          >
            <template v-slot:item.team="{ item }">
              <v-avatar size="36" :color="colors[item.team.length % colors.length]">
                <v-img v-if="item.image" :src="item.image"/>
                <span v-else class="text-uppercase pt-1 font-weight-bold">{{ item.team[0] }}</span>
              </v-avatar>
              <span class="ps-3">
              {{ item.team }}
              </span>
            </template>
          </v-data-table>
          <v-pagination v-model="page" :length="pageCount" :total-visible="5" circle class="my-3"/>
        </div>
      </v-card>
    </v-col>
  </dashboard-page>
</template>

<script>
  import dashboardPageValidate from "../../mixins/dashboardPageValidate";
  import DashboardPage from "../../components/dashboard/DashboardPage";
  import { mapState } from "vuex";

  export default {
    components: { DashboardPage },
    layout: "dashboard",
    mixins: [dashboardPageValidate("scoreboard")],
    computed: {
      ...mapState({
        colors: state => state.dashboard.colors
      }),
      headers() {
        return [
          { text: this.$t("dashboard.team"), sortable: false, value: "team" },
          { text: this.$t("dashboard.rank"), sortable: true, value: "rank" },
          { text: this.$t("dashboard.score"), sortable: true, value: "score" },
          { text: this.$t("dashboard.wins"), sortable: true, value: "wins" },
          { text: this.$t("dashboard.loss"), sortable: true, value: "loss" }
        ];
      }
    },
    data() {
      return {
        search: "",
        page: 1,
        pageCount: 0,
        itemsPerPage: 40,
        submissions: [
          {
            id: 1,
            team: "team",
            image: "",
            rank: 1,
            score: 1234,
            wins: 300,
            loss: 204
          },
          {
            id: 2,
            team: "team1",
            image: "",
            rank: 2,
            score: 1034,
            wins: 200,
            loss: 304
          },
          {
            id: 3,
            team: "team11",
            image: "",
            rank: 3,
            score: 134,
            wins: 30,
            loss: 104
          }
          // {
          //   id: 2,
          //   team_name: "team name",
          //   rank: "1",
          //   score: "1234"
          // },
          // {
          //   id: 3,
          //   team_name: "team name",
          //   rank: "1",
          //   score: "1234"
          // },
          // {
          //   id: 4,
          //   team_name: "team name",
          //   rank: "1",
          //   score: "1234"
          // },
          // {
          //   id: 5,
          //   team_name: "team name",
          //   rank: "1",
          //   score: "1234"
          // },
          // {
          //   id: 6,
          //   team_name: "team name",
          //   rank: "1",
          //   score: "1234"
          // },
          // {
          //   id: 7,
          //   team_name: "team name",
          //   rank: "1",
          //   score: "1234"
          // },
          // {
          //   id: 8,
          //   team_name: "team name",
          //   rank: "1",
          //   score: "1234"
          // },
          // {
          //   id: 9,
          //   team_name: "team name",
          //   rank: "1",
          //   score: "1234"
          // }

        ]
      };
    }
  };
</script>
