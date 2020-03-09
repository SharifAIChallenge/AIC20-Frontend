import { GET_SCOREBOARD } from "~/api";
import Vue from "vue";

function setRanks(scoreboard) {
  let i = 1;
  scoreboard.forEach(x => {
    x.rank = i++;
    if (x.wins + x.loss + x.draws) x.ratio = x.wins / (x.wins + x.loss + x.draws) * 100;
    else x.ratio = 0;
  });
}

export const state = () => ({
  friendlyScoreboard: [],
  seedingScoreboards: [],
  groupsScoreboards: [],
  tab: 0
});

export const actions = {
  async get({ commit }, { tab }) {
    let data = await this.$axios.$get(GET_SCOREBOARD[tab].url);
    if (tab === "groups" || tab === "seeding") commit("setScoreboards", { ...data, tab });
    else commit("set", { ...data, tab });
  }
};

export const mutations = {
  set(state, { scoreboard, status_code, tab }) {
    if (status_code === 200) {
      setRanks(scoreboard);
      Vue.set(state, `${tab}Scoreboard`, scoreboard);
    } else {
      Vue.set(state, `${tab}Scoreboard`, []);
    }
  },
  setScoreboards(state, { scoreboards, status_code, tab }) {
    if (status_code === 200) {
      scoreboards.forEach(x => setRanks(x.rows));
      Vue.set(state, `${tab}Scoreboards`, scoreboards);
    } else {
      Vue.set(state, `${tab}Scoreboards`, []);
    }
  },
  setTab(state, tab) {
    state.tab = tab;
  }
};
