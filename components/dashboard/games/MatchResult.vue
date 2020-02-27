<template>
  <div>
    <v-row justify="center">
      <v-col>
        <v-row>
          <v-col v-for="team in gameSides[0].game_teams" :key="team.team.name" cols="12" lg="6"
                 class="d-flex justify-center px-0">
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
                {{ team.team.name }}
              </v-chip>
            </v-badge>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="1" class="d-flex align-center justify-center">
        <v-icon>mdi-sword-cross</v-icon>
      </v-col>
      <v-col>
        <v-row>
          <v-col v-for="team in gameSides[1].game_teams" :key="team.team.name" cols="12" lg="6"
                 class="d-flex justify-center px-0">
            <v-badge
              bordered
              offset-y="26"
              :color="gameSides[0].has_won ? 'success' : 'error'"
              :content="team.score"
              :value="team.score !== null"
            >
              <v-chip pill>
                {{ team.team.name }}
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
