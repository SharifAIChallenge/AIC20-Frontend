<template>
  <v-avatar :left="left" :right="right" :size="size" :color="colors[team.name.length % colors.length]">
    <client-only>
      <v-img v-if="teamImage" :src="teamImage"/>
      <span v-else class="text-uppercase font-weight-bold" :class="customClass">{{ team.name[0] }}</span>
    </client-only>
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
      }),
      teamImage() {
        return this.team.image ? this.team.image.replace("http://", "https://") : null
      }
    }
  };
</script>

<style scoped>

</style>
