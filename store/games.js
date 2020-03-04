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
  async getGames({ commit, rootState, dispatch }) {
    let data = await this.$axios.$get(VIEW_MATCHES.url);
    if (rootState.team.team === null) {
      await dispatch("team/getTeam", null, { root: true });
    }
    let team = rootState.team.team.name;
    commit("setGames", { ...data, team });
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
  setGames(state, { status_code, games, team }) {
    if (status_code === 200) {
      games.forEach(x => {
        let log = null;
        let ss = [0, 0, 1, 1];
        let ts = [0, 1, 0, 1];
        ss.forEach(i => {
          ts.forEach(j => {
            let side = x.game_sides[i].game_teams[j];
            if (side && side.team.name === team) log = side.log;
          });
        });
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
