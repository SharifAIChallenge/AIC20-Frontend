import { VIEW_FRIENDLY_MATCHES } from "~/api";
import Vue from "vue";

export const state = () => ({
  friendlyGames: []
});

export const actions = {
  async getFriendlyMatches({ commit }) {
    let data = await this.$axios.$get(VIEW_FRIENDLY_MATCHES.url);
    commit("setFriendlyMatches", data);
  }
};

export const mutations = {
  setFriendlyMatches(state, { status_code, friendlies }) {
    if (status_code === 20) {
      Vue.set(state, "friendlyGames", friendlies);
    }
  }
};
