<template>
  <div>
    <v-row justify="center">
      <v-col>
        <v-row>
          <v-col v-for="i in 2" :key="i" cols="12" sm="6" class="d-flex justify-center px-0">
            <v-chip pill v-if="i-1 < lobby.teams1.length">
              <team-avatar left :team="{name: lobby.teams1[i-1].name, image: lobby.teams1[i-1].image}"/>
              {{ lobby.teams1[i-1].name }}
            </v-chip>
            <v-skeleton-loader v-else type="chip"/>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="1" class="d-flex align-center justify-center">
        <v-icon>mdi-sword-cross</v-icon>
      </v-col>
      <v-col>
        <v-row>
          <v-col v-for="i in 2" :key="i" cols="12" sm="6" class="d-flex justify-center px-0">
            <v-chip pill v-if="i-1 < lobby.teams2.length">
              {{ lobby.teams2[i-1].name }}
              <team-avatar right :team="{name: lobby.teams2[i-1].name, image: lobby.teams2[i-1].image}"/>
            </v-chip>
            <v-skeleton-loader v-else type="chip"/>
          </v-col>
        </v-row>
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
