export const state = () => ({
  colors: ["red", "pink", "blue", "cyan", "teal", "green", "light-green", "lime", "amber", "orange"],
  routes: {
    home: {
      title: "dashboard.home",
      icon: "mdi-home-variant-outline",
      link: "/dashboard",
      disabled: false
    },
    updates: {
      title: "dashboard.updates",
      icon: "mdi-bell-outline",
      link: "/dashboard/updates",
      disabled: false,
      divider: true
    },
    // getting_started: {
    //   title: "dashboard.gettingStarted",
    //   icon: "mdi-help-circle-outline",
    //   link: "/dashboard/getting_started",
    //   disabled: true
    // },
    resources: {
      title: "dashboard.resources",
      icon: "mdi-file-document-outline",
      link: "/dashboard/resources",
      disabled: false
    },
    tutorials: {
      title: "dashboard.tutorials",
      icon: "mdi-school-outline",
      link: "/dashboard/tutorials",
      disabled: false,
      divider: true
    },
    tournaments: {
      title: "dashboard.tournaments",
      icon: "mdi-tournament",
      link: "/dashboard/tournaments",
      disabled: true
    },
    scoreboard: {
      title: "dashboard.scoreboard",
      icon: "mdi-scoreboard-outline",
      link: "/dashboard/scoreboard",
      disabled: true,
      divider: true
    },
    team: {
      title: "dashboard.team",
      icon: "mdi-account-group",
      link: "/dashboard/team",
      disabled: false
    },
    submissions: {
      title: "dashboard.submissions",
      icon: "mdi-upload-outline",
      link: "/dashboard/submissions",
      disabled: true
    },
    games: {
      title: "dashboard.games",
      icon: "mdi-gamepad-variant-outline",
      link: "/dashboard/games",
      disabled: true
    }
  }
});

export const getters = {
  sidebar(state) {
    return Object.values(state.routes);
  }
};

export const mutations = {
  enableRoute(state, { route }) {
    state.routes[route].disabled = false;
  },
  disableRoute(state, { route }) {
    state.routes[route].disabled = true;
  }
};
