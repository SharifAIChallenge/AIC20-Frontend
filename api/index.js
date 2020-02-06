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
