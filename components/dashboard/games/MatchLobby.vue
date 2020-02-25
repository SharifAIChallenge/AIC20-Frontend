<template>
  <div>
    <v-row justify="center">
      <v-col>
        <div class="d-flex justify-space-around">
          <v-col v-for="i in 2" :key="i" cols="12" sm="6" class="d-flex justify-center">
            <v-chip pill v-if="i-1 < lobby.teams1.length">
              <team-avatar left :team="{name: lobby.teams1[i-1].name}"/>
              {{ lobby.teams1[i-1].name }}
            </v-chip>
            <v-skeleton-loader v-else type="chip"/>
          </v-col>
        </div>
      </v-col>
      <v-col class="text-center pa-6" cols="1">
        <v-icon>mdi-sword-cross</v-icon>
      </v-col>
      <v-col>
        <div class="d-flex justify-space-around">
          <v-col v-for="i in 2" :key="i" cols="12" sm="6" class="d-flex justify-center">
            <v-chip pill v-if="i-1 < lobby.teams2.length">
              <team-avatar left :team="{name: lobby.teams2[i-1].name}"/>
              {{ lobby.teams2[i-1].name }}
            </v-chip>
            <v-skeleton-loader v-else type="chip"/>
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
