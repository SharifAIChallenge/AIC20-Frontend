<template>
  <div>
    <div class="text-center my-3">
      <v-avatar size="150" :color="colors[team.name.length % colors.length]">
        <v-img v-if="team.image" :src="team.image"/>
        <span v-else class="text-uppercase display-3 pt-4 font-weight-bold">{{ team.name[0] }}</span>
      </v-avatar>
      <div class="mt-4 title">{{ team.name }}</div>
    </div>
    <v-list class="mb-4">
      <v-list-item v-for="item in items" :key="item.title">
        <v-list-item-avatar>
          <v-img :src="item.avatar"/>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"/>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-dialog v-model="dialog" max-width="320">
      <template v-slot:activator="{ on }">
        <v-btn large color="white" rounded outlined dark v-on="on">
          <v-icon color="error" left>mdi-exit-run</v-icon>
          {{ $t("dashboard.leaveTeam") }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title style="word-break: unset">
          {{ leaveMessage }}
        </v-card-title>
        <v-card-actions>
          <v-col>
            <v-btn block rounded color="primary" @click="dialog = false">{{ $t("form.cancel") }}</v-btn>
          </v-col>
          <v-col>
            <v-btn block rounded outlined @click="dialog = false">{{ $t("dashboard.leaveTeam") }}</v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    props: {
      team: {
        type: Object
      }
    },
    data() {
      return {
        dialog: false,
        leaveMessage: "می‌خواهید تیمتان را ترک کنید؟",
        items: [
          // { title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          // { title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          // { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        ],
      };
    },
    computed: {
      ...mapState({
        colors: state => state.dashboard.colors
      })
    }
  };
</script>

<style scoped>

</style>
