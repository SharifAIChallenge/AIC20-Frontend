<template>
  <client-only>
    <v-sparkline
      :value="value"
      color="rgba(255, 255, 255, .7)"
      height="129"
      padding="24"
      stroke-linecap="round"
      smooth
      auto-draw
      auto-line-width
      :gradient="positive ? gradientGreen : gradientRed"
    >
      <template v-slot:label="item">
        {{item.value}}
      </template>
    </v-sparkline>
  </client-only>
</template>

<script>
  export default {
    data() {
      return {
        showLabels: false,
        lineWidth: 2,
        labelSize: 7,
        radius: 10,
        padding: 8,
        lineCap: "round",
        gradientGreen: ["#00E676", "#EEFF41"],
        gradientRed: ["#FF1744", "#F4511E"],
        value: [0, 2, 5, 9, 5, 10, 3, 5, 4, 10],
        gradientDirection: "top",
        fill: false,
        type: "trend",
        autoLineWidth: false
      };
    },
    computed: {
      positive() {
        const len = this.value.length;
        if (len < 2) return  true;
        return this.value[len-1] >= this.value[len-2]
      }
    }
  };
</script>

<style scoped>

</style>
