<template>
  <v-list-item>
    <v-list-item-content>
      <div class="d-flex justify-center">
        <div>
          <v-chip>
            <team-avatar left :team="{name:'team1'}"/>
            team2
          </v-chip>
          <v-chip>
            <team-avatar left :team="{name:'team1'}"/>
            team2
          </v-chip>
        </div>
        <div>
          
        </div>
        <div>
          <v-chip>
            <team-avatar left :team="{name:'team1'}"/>
            team2
          </v-chip>
          <v-chip>
            <team-avatar left :team="{name:'team1'}"/>
            team2
          </v-chip>
        </div>
      </div>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn rounded depressed>
        <v-icon left>mdi-download</v-icon>
        {{ $t("dashboard.graphicLog") }}
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
  import TeamAvatar from "../team/TeamAvatar";

  export default {
    name: "MatchResult",
    components: { TeamAvatar }
  };
</script>

<style scoped>

</style>
