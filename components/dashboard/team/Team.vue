<template>
  <div>
    <div class="text-center my-3">
      <div style="position: relative">
        <span v-if="editable" class="p-absolute" style="z-index: 1; bottom: 0">
          <v-btn small fab @click="dialog=true" color="#281047">
            <v-icon>mdi-image-edit</v-icon>
          </v-btn>
        </span>
        <team-avatar :team="team" :size="150" custom-class="display-3 pt-4"/>
      </div>
      <div class="mt-6 title">
        <span>
          <v-icon small class="mb-1" :color="team.is_valid ? 'light-blue' : 'error'">
            {{ team.is_valid ? "mdi-check-decagram" : "mdi-lock" }}
          </v-icon>
        </span>
        {{ team.name }}
      </div>
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
          <v-list-item-subtitle v-text="item.user.email"/>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-dialog v-model="dialog" max-width="320">
      <v-card>
        <v-card-title style="word-break: unset">
          {{ $t("dashboard.editAvatar") }}
          <v-spacer/>
          <v-btn icon @click="dialog=false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider/>
        <v-card-text class="pa-3">
          <edit-avatar @close="dialog=false" :deletable="!!team.image"/>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import TeamAvatar from "./TeamAvatar";
  import EditAvatar from "./EditAvatar";

  export default {
    components: { EditAvatar, TeamAvatar },
    props: {
      team: {
        type: Object
      },
      editable: {
        typ: Boolean,
        default: false
      }
    },
    data() {
      return {
        dialog: false
      };
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
