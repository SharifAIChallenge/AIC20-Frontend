<template>
  <div>
    <v-slide-y-transition group>
      <match-lobby-item v-for="(lobby, i) in lobbies" :lobby="lobby" :key="i"/>
    </v-slide-y-transition>
    <p v-if="!lobbies.length" class="text-center">{{ $t("dashboard.noLobbies") }}</p>
  </div>
</template>

<script>
  import MatchLobbyItem from "./MatchLobbyItem";
  import { mapState } from "vuex";

  export default {
    name: "MatchLobby",
    components: { MatchLobbyItem },
    computed: {
      ...mapState({
        lobbies: state => state.games.friendlyLobbies
      })
    }
  };
</script>

<style scoped>

</style>
