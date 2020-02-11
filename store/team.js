import { RECEIVED_INVITATIONS, SENT_INVITATIONS, TEAM_DETAIL } from "~/api";

export const state = () => ({
  team: null,
  receivedInvitations: [],
  sentInvitations: []
});

export const actions = {
  async getTeam({ commit }) {
    let data = await this.$axios.$get(TEAM_DETAIL.url);
    commit("set", data);
  },
  async getReceivedInvitations({ commit }) {
    let data = await this.$axios.$get(RECEIVED_INVITATIONS.url);
    commit("setInvitations", { ...data, type: "received" });
  },
  async getSentInvitations({ commit }) {
    let data = await this.$axios.$get(SENT_INVITATIONS.url);
    commit("setInvitations", { ...data, type: "sent" });
  }
};

export const mutations = {
  set(state, { team, status_code }) {
    if (status_code === 200) {
      state.team = team;
    } else {
      state.team = null;
    }
  },
  setInvitations(state, { type, invitations, status_code }) {
    if (status_code === 200) {
      state[`${type}Invitations`] = invitations.reverse();
    } else {
      state[`${type}Invitations`] = invitations.reverse();
    }
  }
};
