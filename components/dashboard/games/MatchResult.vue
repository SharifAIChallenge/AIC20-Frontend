<template>
  <div>
    <v-row justify="center" class="mx-0 px-2">
      <v-col>
        <v-row class="mx-0">
          <v-col v-for="(team, i) in gameSides[0].game_teams" :key="team.team.name+i" cols="12"
                 class="d-flex justify-start px-0">
            <v-badge
              left
              bordered
              offset-y="26"
              :color="gameSides[0].has_won ? 'success' : 'error'"
              :content="team.score"
              :value="team.score !== null"
            >
              <v-chip pill>
                <team-avatar left :team="team.team"/>
                <span class="d-inline-block text-truncate"
                      style="max-width: 100px;">
                {{ team.team.name }}
                </span>
              </v-chip>
            </v-badge>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="1" class="d-flex align-center justify-center">
        <v-icon>mdi-sword-cross</v-icon>
      </v-col>
      <v-col>
        <v-row class="mx-0">
          <v-col v-for="(team, i) in gameSides[1].game_teams" :key="team.team.name+i" cols="12"
                 class="d-flex justify-end px-0">
            <v-badge
              bordered
              offset-y="26"
              :color="gameSides[1].has_won ? 'success' : 'error'"
              :content="team.score"
              :value="team.score !== null"
            >
              <v-chip pill>
                <span class="d-inline-block text-truncate"
                      style="max-width: 100px;">
                {{ team.team.name }}
                </span>
                <team-avatar right :team="team.team"/>
              </v-chip>
            </v-badge>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import TeamAvatar from "../team/TeamAvatar";

  export default {
    props: ["gameSides"],
    components: { TeamAvatar }
  };
</script>

<style scoped>

</style>
