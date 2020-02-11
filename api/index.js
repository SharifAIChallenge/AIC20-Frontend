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
  url: "/participation/team/create"
};

export const LEAVE_TEAM = {
  name: "LEAVE_TEAM",
  method: "post",
  url: "/participation/team/leave"
};

export const TEAM_DETAIL = {
  name: "TEAM_DETAIL",
  method: "get",
  url: "/participation/team/detail"
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
  slug: "_id"
};

//notifications
export const NOTIFICATIONS = {
  name: "NOTIFICATIONS",
  method: "get",
  url: "/subscribe/public-notifications"
};
