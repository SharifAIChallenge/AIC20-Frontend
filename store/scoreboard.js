import { GET_SCOREBOARD } from "~/api";
import Vue from "vue";

export const state = () => ({
  scoreboard: []
});

export const actions = {
  async get({ commit }) {
    let data = await this.$axios.$get(GET_SCOREBOARD.url);
    commit("set", data);
  }
};

export const mutations = {
  set(state, { scoreboard, status_code }) {
    if (status_code === 200) {
      let i = 1;
      scoreboard.forEach(x => x.rank = i++);
      Vue.set(state, "scoreboard", scoreboard);
    } else {
      Vue.set(state, "scoreboard", []);
    }
  }
};
