//accounts
export const SIGN_UP = {
  name: "SIGN_UP",
  method: "post",
  payload: "data",
  url: "/accounts/signup"
};

export const RESET_PASSWORD = {
  name: "RESET_PASSWORD",
  method: "post",
  payload: "data",
  url: "/accounts/password/reset"
};

export const RESET_PASSWORD_CONFIRM = {
  name: "RESET_PASSWORD_CONFIRM",
  method: "post",
  payload: "data",
  url: "/accounts/password/reset/confirm"
};

export const CHANGE_PASSWORD = {
  name: "CHANGE_PASSWORD",
  method: "post",
  payload: "data",
  url: "/accounts/password/change"
};

export const EDIT_PROFILE = {
  name: "EDIT_PROFILE",
  method: "put",
  payload: "data",
  url: "/accounts/profile"
};

//team
export const CREATE_TEAM = {
  name: "CREATE_TEAM",
  method: "post",
  payload: "data",
  url: "/participation/team"
};

export const LEAVE_TEAM = {
  name: "LEAVE_TEAM",
  method: "delete",
  url: "/participation/team"
};

export const EDIT_TEAM = {
  name: "EDIT_TEAM",
  method: "put",
  payload: "data",
  url: "/participation/team"
};

export const TEAM_DETAIL = {
  name: "TEAM_DETAIL",
  method: "get",
  url: "/participation/team"
};

export const INVITE = {
  name: "INVITE",
  method: "post",
  payload: "data",
  url: "/participation/invitation/invite"
};

export const RECEIVED_INVITATIONS = {
  name: "RECEIVED_INVITATIONS",
  method: "get",
  url: "/participation/invitation/invitations-to-me"
};

export const SENT_INVITATIONS = {
  name: "SENT_INVITATIONS",
  method: "get",
  url: "/participation/invitation/invitations-to-others"
};

export const ANSWER_INVITATION = {
  name: "ANSWER_INVITATION",
  method: "post",
  url: "/participation/invitation",
  payload: "data",
  slug: "id"
};

export const TOGGLE_MULTI_FRIENDLY = {
  name: "TOGGLE_MULTI_FRIENDLY",
  method: "post",
  url: "/participation/team/multi-friendly",
};

//notifications
export const NOTIFICATIONS = {
  name: "NOTIFICATIONS",
  method: "get",
  url: "/subscribe/public-notifications"
};

//challenge
export const SUBMIT_CODE = {
  name: "SUBMIT_CODE",
  method: "post",
  payload: "data",
  url: "/challenge/submission/submit"
};

export const VIEW_SUBMISSIONS = {
  name: "VIEW_SUBMISSIONS",
  method: "get",
  url: "/challenge/submission/submissions"
};

export const CHANGE_FINAL_SUBMISSION = {
  name: "CHANGE_FINAL_SUBMISSION",
  method: "put",
  slug: "id",
  url: "/challenge/submission/change_final"
};

//games
export const REQUEST_FRIENDLY_MATCH = {
  name: "REQUEST_FRIENDLY_MATCH",
  method: "post",
  url: "/challenge/game/friendly",
  payload: "data"
};

export const VIEW_MATCHES = {
  name: "VIEW_MATCHES",
  method: "get",
  url: "/challenge/games"
};

export const VIEW_LOBBY = {
  name: "VIEW_LOBBY",
  method: "get",
  url: "/challenge/game/lobby"
};

// scoreboard
export const GET_SCOREBOARD = {
  name: "GET_SCOREBOARD",
  method: "get",
  url: "/scoreboard/challenge"
};

export const PRIMARY_CHALLENGE = {
  name: "PRIMARY_CHALLENGE",
  method: "get",
  url: "/challenge/challenges/1"
};

export const GAME_STATS = {
  name: "GAME_STATS",
  method: "get",
  url: "/challenge/game/stats"
};
