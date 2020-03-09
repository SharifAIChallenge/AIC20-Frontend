<template>
  <dashboard-page title="dashboard.tournaments">
    <v-col>
      <v-card class="overflow-hidden">
        <v-data-table
          :headers="headers"
          :items="tournaments"
          item-key="id"
          locale="fa"
          sort-by="submit_time"
          sort-desc
        >
          <template v-slot:item.name="{ item }">
            {{ $t(`dashboard.${item.name}`) }}
          </template>
          <template v-slot:item.start_time="{ item }">
            <date-time-formatter :date="item.start_time"/>
          </template>
          <template v-slot:item.end_time="{ item }">
            <date-time-formatter :date="item.end_time"/>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </dashboard-page>
</template>

<script>
  import dashboardPageValidate from "../../mixins/dashboardPageValidate";
  import DashboardPage from "../../components/dashboard/DashboardPage";
  import DateTimeFormatter from "../../components/DateTimeFormatter";
  import { mapState } from "vuex";

  export default {
    components: { DateTimeFormatter, DashboardPage },
    layout: "dashboard",
    transition: "fade-transition",
    mixins: [dashboardPageValidate("tournaments")],
    fetch({ store }) {
      return store.dispatch("games/getChallenge");
    },
    computed: {
      ...mapState({
        tournaments: state => state.games.challenge.tournaments
      }),
      headers() {
        return [
          { text: this.$t("dashboard.tournament"), sortable: false, value: "name" },
          { text: this.$t("dashboard.submissionDeadline"), sortable: true, value: "start_time" },
          { text: this.$t("dashboard.changeFinalDeadline"), sortable: true, value: "end_time" }
        ];
      }
    }
  };
</script>

<style scoped>

</style>
