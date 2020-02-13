<template>
  <v-chip >
      <v-icon left :color="icon[status].color">{{ icon[status].i }}</v-icon>
    {{ $t(`dashboard.${status}`) }}
  </v-chip>
</template>

<script>
  export default {
    props: {
      status: {
        type: String,
        default: "uploaded"
      }
    },
    data() {
      return {
        icon: {
          compiled: { i: "mdi-progress-check", color: "success" },
          failed: { i: "mdi-progress-alert", color: "error" },
          compiling: { i: "mdi-progress-wrench", color: "info" },
          uploaded: { i: "mdi-progress-check", color: "info" },
          uploading: { i: "mdi-progress-upload", color: "info" }
        }
      };
    }
  };
</script>
