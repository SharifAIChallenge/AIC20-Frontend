<template>
  <div>
    <v-row justify="center">
      <v-col>
        <div class="d-flex justify-space-around">
          <v-col cols="12" sm="6" class="text-center">
            <v-chip pill>
              <team-avatar left :team="{name: lobby.teams[0].name}"/>
              {{ lobby.teams[0].name }}
            </v-chip>
          </v-col>
          <v-col cols="12" sm="6" class="text-center">
            <v-skeleton-loader type="chip"/>
          </v-col>
        </div>
      </v-col>
      <v-col class="text-center mt-1" cols="1">
        <v-icon>mdi-sword-cross</v-icon>
      </v-col>
      <v-col>
        <div class="d-flex justify-space-around">
          <v-col cols="12" sm="6" class="text-center">
            <v-skeleton-loader type="chip"/>
          </v-col>
          <v-col cols="12" sm="6" class="text-center">
            <v-skeleton-loader type="chip"/>
          </v-col>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import TeamAvatar from "../team/TeamAvatar";

  export default {
    components: { TeamAvatar },
    props: ["lobby"]
  };
</script>

<style scoped>

</style>
