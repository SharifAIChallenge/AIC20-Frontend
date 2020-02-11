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
        <v-avatar size="150" :color="colors[team.name.length % colors.length]">
          <v-img v-if="team.image" :src="team.image"/>
          <span v-else class="text-uppercase display-3 pt-4 font-weight-bold">{{ team.name[0] }}</span>
        </v-avatar>
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
  import { LEAVE_TEAM } from "../../../api";

  export default {
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
