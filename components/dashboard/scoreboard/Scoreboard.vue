<template>
  <div>
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
        :items="teams"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        :expanded.sync="expanded"
        :custom-filter="filterTeam"
        hide-default-footer
        show-expand
        single-expand
        @page-count="pageCount = $event"
        item-key="team.name"
        locale="fa"
      >
        <template v-slot:item.team="{ item }">
          <team-avatar :team="{name: item.team.name, image: item.team.image}" :size="36" custom-class="pt-1"/>
          <span class="ps-3">
              {{ item.team.name }}
              </span>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length" class="px-0">
            <team-loader :key="item.team.name" :name="item.team.name"/>
          </td>
        </template>
      </v-data-table>
      <v-pagination v-model="page" :length="pageCount" :total-visible="5" circle class="my-3"/>
    </div>
  </div>
</template>

<script>
  import TeamAvatar from "../team/TeamAvatar";
  import TeamLoader from "../team/TeamLoader";

  export default {
    components: { TeamLoader, TeamAvatar },
    props: {
      teams: {
        type: Array
      }
    },
    computed: {
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
        expanded: []
      };
    },
    methods: {
      filterTeam(value, search, item) {
        return value != null &&
          search != null &&
          !!value.name && value.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      }
    }
  };
</script>

<style scoped>

</style>
