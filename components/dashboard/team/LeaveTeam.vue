<template>
  <div>
    <v-dialog v-model="dialog" max-width="320">
      <template v-slot:activator="{ on }">
        <v-btn large color="white" rounded outlined dark v-on="on">
          <v-icon color="error" left>mdi-exit-run</v-icon>
          {{ $t("dashboard.leaveTeam") }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title style="word-break: unset">
          {{ $t("dashboard.leaveTeamMessage") }}
        </v-card-title>
        <v-card-actions>
          <v-col>
            <v-btn block rounded color="primary" @click="dialog = false">{{ $t("form.cancel") }}</v-btn>
          </v-col>
          <v-col>
            <v-btn block rounded outlined :loading="loading" @click="leaveTeam">{{ $t("dashboard.leaveTeam") }}</v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { LEAVE_TEAM } from "../../../api";

  export default {
    data() {
      return {
        loading: false,
        dialog: false
      };
    },
    methods: {
      async leaveTeam() {
        this.loading = true;
        let data = await this.$axios.$delete(LEAVE_TEAM.url);
        this.loading = false;
        this.dialog = false;
        this.$store.dispatch("team/getTeam");
        if (data.errors) {
          this.$toast.error("خطایی در ترک تیم رخ داد.");
        } else {
          this.$toast.success("با موفقیت تیم‌تان را ترک کردید.");
        }
      }
    }
  };
</script>

<style scoped>

</style>
