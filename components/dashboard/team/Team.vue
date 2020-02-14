<template>
  <div>
    <div class="text-center my-3">
      <v-badge
        bordered
        :color="team.is_valid ? 'success' : 'error'"
        :icon="team.is_valid ? 'mdi-check-decagram' : 'mdi-lock'"
        overlap
        offset-x="30"
        offset-y="30"
      >
        <team-avatar :team="team" :size="150" custom-class="display-3 pt-4"/>
      </v-badge>
      <div class="mt-4 title">{{ team.name }}</div>
    </div>
    <v-list>
      <v-list-item v-for="item in team.participants" :key="item.user.email">
        <v-list-item-avatar
          :color="color(item)"
          class="pt-1 text-uppercase justify-center">
          {{ item.user.profile.firstname_en[0] + item.user.profile.lastname_en[0] }}
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.user.profile.firstname_fa + ' ' + item.user.profile.lastname_fa"/>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import TeamAvatar from "./TeamAvatar";

  export default {
    components: { TeamAvatar },
    props: {
      team: {
        type: Object
      }
    },
    computed: {
      ...mapState({
        colors: state => state.dashboard.colors
      })
    },
    methods: {
      color(item) {
        return this.colors[(Object.values(item.user.profile).join().length + 1 + item.user.email.length) % this.colors.length];
      }
    }
  };
</script>

<style scoped>

</style>
