<template>
  <div>
    <v-skeleton-loader
      v-if="loading"
      :height="50*count"
      :type="`list-item@${count}`"
    >
    </v-skeleton-loader>
    <v-list v-else-if="team">
      <div v-if="avatar" class="text-center">
        <team-avatar :team="team" :size="64"/>
      </div>
      <v-list-item v-for="(item, i) in team.participants" :key="item+i">
        <v-list-item-content>{{ item.user.profile.firstname_fa + " " + item.user.profile.lastname_fa }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
  import Team from "./Team";
  import { TEAM_DETAIL } from "../../../api";
  import TeamAvatar from "./TeamAvatar";

  export default {
    components: { TeamAvatar, Team },
    props: {
      name: {
        type: String
      },
      avatar: {
        type: Boolean
      },
      count : {
        type: Number,
        default: 2
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
