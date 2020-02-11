<template>
  <v-icon :color="icon[status].color">{{ icon[status].i }}</v-icon>
</template>

<script>
  export default {
    props: {
      status: {
        type: String,
        default: "not_answered"
      }
    },
    data() {
      return {
        icon: {
          accepted: { i: "mdi-checkbox-marked-circle-outline", color: "success" },
          not_answered: { i: "mdi-clock-outline", color: "info" },
          rejected: { i: "mdi-close-circle-outline", color: "error" }
        }
      };
    }
  };
</script>

<style scoped>

</style>
