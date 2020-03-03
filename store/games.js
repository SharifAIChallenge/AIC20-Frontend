import { VIEW_MATCHES, VIEW_LOBBY, PRIMARY_CHALLENGE } from "~/api";
import Vue from "vue";

export const state = () => ({
  games: [],
  friendlyLobbies: [],
  challenge: {
    friendly_game_delay: 0,
    code_submit_delay: 0
  }
});

export const actions = {
  async getGames({ commit }) {
    let data = await this.$axios.$get(VIEW_MATCHES.url);
    commit("setGames", data);
  },
  async getFriendlyLobbies({ commit }) {
    let data = await this.$axios.$get(VIEW_LOBBY.url);
    commit("setFriendlyLobbies", data);
  },
  async getChallenge({ commit }) {
    let data = await this.$axios.$get(PRIMARY_CHALLENGE.url);
    commit("setChallenge", data);
  }
};

export const mutations = {
  setGames(state, { status_code, games }) {
    if (status_code === 200) {
      games.forEach(x => {
        let log = null;
          if (x.game_sides[0].game_teams[0]) log = x.game_sides[0].game_teams[0].log;
          if (x.game_sides[0].game_teams[1]) log = x.game_sides[0].game_teams[1].log;
          if (x.game_sides[1].game_teams[0]) log = x.game_sides[1].game_teams[0].log;
          if (x.game_sides[1].game_teams[1]) log = x.game_sides[1].game_teams[1].log;
        x.client_log = log;
      });
      Vue.set(state, "games", games);
    }
  },
  setChallenge(state, { status_code, challenge }) {
    if (status_code === 200) {
      Vue.set(state, "challenge", challenge);
    }
  },
  setFriendlyLobbies(state, { status_code, lobbies }) {
    if (status_code === 200) {
      Vue.set(state, "friendlyLobbies", lobbies);
    }
  }
};
