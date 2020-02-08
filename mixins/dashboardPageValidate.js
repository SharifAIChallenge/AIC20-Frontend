export default (name) => ({
  validate({ store }) {
    return !store.state.dashboard.routes[name].disabled;
  }
})
