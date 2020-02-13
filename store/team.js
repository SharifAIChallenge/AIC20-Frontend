import { RECEIVED_INVITATIONS, SENT_INVITATIONS, TEAM_DETAIL, VIEW_SUBMISSIONS } from "~/api";

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
  },
  setSubmissions(state, { submissions, status_code }) {
    if (status_code === 200) {
      state.submissions = submissions;
      state.submissions.forEach(x => {
        if (x.is_final) state.finalSubmission = [x];
      });
    }
  }
};
