<template>
  <v-avatar :left="left" :right="right" :size="size" :color="colors[team.name.length % colors.length]">
    <v-img v-if="team.image" :src="team.image"/>
    <span v-else class="text-uppercase font-weight-bold" :class="customClass">{{ team.name[0] }}</span>
  </v-avatar>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    props: {
      team: {
        type: Object
      },
      size: {
        type: Number,
        default: 36
      },
      customClass: {
        type: String,
        default: "pt-1"
      },
      left: {
        type: Boolean
      },
      right: {
        type: Boolean
      }
    },
    computed: {
      ...mapState({
        colors: state => state.dashboard.colors
      })
    },
  };
</script>

<style scoped>

</style>
