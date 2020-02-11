<template>
  <div>
    <v-skeleton-loader
      v-if="loading"
      height="250"
      type=" image, list-item-avatar"
    >
    </v-skeleton-loader>
    <team v-else-if="team" :team="team"/>
  </div>
</template>

<script>
  import Team from "./Team";
  import { TEAM_DETAIL } from "../../../api";

  export default {
    components: { Team },
    props: {
      name: {
        type: String
      }
    },
    data() {
      return {
        team: null,
        loading: false
      };
    },
    methods: {
      async loadTeam() {
        this.loading = true;
        let { team } = await this.$axios.$get(TEAM_DETAIL.url, { params: { name: this.name } });
        this.team = team;
        this.loading = false;
      }
    },
    mounted() {
      this.loadTeam();
    }
  };
</script>

<style scoped>

</style>
