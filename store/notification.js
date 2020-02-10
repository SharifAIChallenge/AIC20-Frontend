export const state = () => ({
  notifications: []
});

export const mutations = {
  set (state, { notifications, status_code }) {
    if (status_code === 200) {
      state.notifications = notifications.reverse()
    }
  }
};
