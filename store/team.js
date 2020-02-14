import { RECEIVED_INVITATIONS, SENT_INVITATIONS, TEAM_DETAIL, VIEW_SUBMISSIONS } from "~/api";
import Vue from "vue";

export const state = () => ({
  team: null,
  receivedInvitations: [],
  sentInvitations: [],
  finalSubmission: []
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
  },
  async getSubmissions({ commit }) {
    let data = await this.$axios.$get(VIEW_SUBMISSIONS.url);
    commit("setSubmissions", data);
  }
};

export const mutations = {
  set(state, { team, status_code }) {
    if (status_code === 200) {
      Vue.set(state, "team", team);
    } else {
      Vue.set(state, "team", null);
    }
  },
  setInvitations(state, { type, invitations, status_code }) {
    if (status_code === 200) {
      Vue.set(state, `${type}Invitations`, invitations.reverse());
    } else {
      Vue.set(state, `${type}Invitations`, null);
    }
  },
  setSubmissions(state, { submissions, status_code }) {
    if (status_code === 200) {
      Vue.set(state, "submissions", submissions);
      state.submissions.forEach(x => {
        if (x.is_final) state.finalSubmission = [x];
      });
    }
  }
};
