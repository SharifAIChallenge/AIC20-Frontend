<template>
  <div>
    <v-card-title v-if="!hideSearch">
      <div>{{ title }}</div>
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
          <span class="ps-3" :style="teamColor(item.rank, teams.length)">
              {{ item.team.name }}
              </span>
        </template>
        <template v-slot:item.ratio="{ item }">
          {{ `${item.ratio.toFixed(2)}%` }}
        </template>
        <template v-slot:item.score="{ item }">
          <span dir="ltr">{{ item.score.toFixed() }}</span>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length" class="px-0">
            <team-loader :key="item.team.name" :name="item.team.name"/>
          </td>
        </template>
      </v-data-table>
      <v-pagination v-if="!hidePagination" v-model="page" :length="pageCount" :total-visible="5" circle class="my-3"/>
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
        type: Array,
      },
      hidePagination: {
        type: Boolean
      },
      hideSearch: {
        type: Boolean
      },
      title: {
        type: String,
        default: ""
      }
    },
    computed: {
      headers() {
        return [
          { text: this.$t("dashboard.team"), sortable: false, value: "team" },
          { text: this.$t("dashboard.rank"), sortable: true, value: "rank" },
          { text: this.$t("dashboard.score"), sortable: true, value: "score" },
          { text: this.$t("dashboard.winRatio"), sortable: true, value: "ratio" },
          { text: this.$t("dashboard.wins"), sortable: true, value: "wins" },
          { text: this.$t("dashboard.draws"), sortable: true, value: "draws" },
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
      },
      teamColor(rank, total) {
        return { color: this.percentToColor(rank / total) };
      },
      percentToColor(val) {
        let colors = [
          { r: 233, g: 30, b: 99 },
          { r: 255, g: 87, b: 34 },
          { r: 255, g: 235, b: 59 },
          { r: 76, g: 175, b: 80 },
          { r: 0, g: 150, b: 136 },
        ];
        let i = Math.floor((colors.length - 1) * val);
        let color = { ...colors[colors.length - 1] };
        if (i !== colors.length - 1) {
          let percent = (val - i / (colors.length - 1) ) * (colors.length - 1);
          color.r = Math.round(colors[i].r + percent * (colors[i + 1].r - colors[i].r));
          color.g = Math.round(colors[i].g + percent * (colors[i + 1].g - colors[i].g));
          color.b = Math.round(colors[i].b + percent * (colors[i + 1].b - colors[i].b));
        }
        let h = color.r * 0x10000 + color.g * 0x100 + color.b * 0x1;
        return "#" + ("000000" + h.toString(16)).slice(-6);
      }
    }
  };
</script>

<style scoped>

</style>
