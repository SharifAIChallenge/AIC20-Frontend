<template>
  <div class="d-flex flex-column align-center">
    <div>
      <glow>
        <v-icon :color="trophy.color" size="150">{{ trophy.icon }}</v-icon>
      </glow>
    </div>
    <v-chip color="white" light class="px-5 my-5">{{ trophy.title }}</v-chip>
    <div>
      <glow class="d-inline-block">
        <span class="display-3 text-stroke-width-2 text-stroke-white font-weight-black transparent--text">{{ trophy.amount }}</span>
      </glow>
      <span class="display-1">{{ trophy.unit }}</span>
    </div>
  </div>
</template>

<script>
  import Glow from "./Glow";

  export default {
    components: { Glow },
    props: {
      trophy: {
        type: Object
      },
      icon: {
        default: "mdi-trophy-variant-outline",
        type: String
      },
      title: {
        type: String
      },
      amount: {
        type: String
      },
      unit: {
        default: "میلیون تومان"
      },
      color: {
        default: "primary",
        type: String
      }
    }
  };
</script>

<style scoped>

</style>
