import { GET_SCOREBOARD } from "~/api";
import Vue from "vue";

export const state = () => ({
  friendlyScoreboard: [],
  seedingScoreboard: [],
  tab: 0
});

export const actions = {
  async get({ commit }, { tab }) {
    let data = await this.$axios.$get(GET_SCOREBOARD[tab].url);
    commit("set", { ...data, tab });
  }
};

export const mutations = {
  set(state, { scoreboard, status_code, tab }) {
    if (status_code === 200) {
      let i = 1;
      scoreboard.forEach(x => {
        x.rank = i++;
        if (x.wins + x.loss + x.draws) x.ratio = x.wins / (x.wins + x.loss + x.draws) * 100;
        else x.ratio = 0
      });
      Vue.set(state, `${tab}Scoreboard`, scoreboard);
    } else {
      Vue.set(state, `${tab}Scoreboard`, []);
    }
  },
  setTab(state, tab) {
    state.tab = tab;
  }
};
