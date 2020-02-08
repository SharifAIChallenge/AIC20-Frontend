export const primaryButtonProps = {
  computed: {
    primaryButtonProps() {
      return {
        color: "primary",
        large: true,
        rounded: true,
        block: this.$vuetify.breakpoint.xsOnly
      };
    }
  }
};
