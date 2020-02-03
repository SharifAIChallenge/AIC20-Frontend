<template>
  <v-container class="py-12">
    <glow class="mb-8">
      <h2 id="trophies" class="display-2 transparent--text text-stroke-primary text-stroke-width-2 font-weight-black">{{
        $t("home.trophies") }}</h2>
    </glow>
    <v-row class="justify-space-around align-end">
      <v-col order="1" order-md="2" cols="12" md="4" class="mb-md-12">
        <trophy :trophy="trophies[0]"/>
      </v-col>
      <v-col order="2" order-md="1" cols="12" sm="6" md="4">
        <trophy :trophy="trophies[1]"/>
      </v-col>
      <v-col order="3" cols="12" sm="6" md="4">
        <trophy :trophy="trophies[2]"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Trophy from "../Trophy";
  import Glow from "../Glow";

  export default {
    components: { Trophy, Glow },
    data() {
      return {
        trophies: [
          {
            title: "تیم قهرمان",
            amount: "۱۰",
            color: "secondary",
            icon: "mdi-trophy-outline",
            unit: "میلیون تومان"
          },
          {
            title: "تیم دوم",
            amount: "۷",
            color: "primary",
            icon: "mdi-trophy-variant-outline",
            unit: "میلیون تومان"
          },
          {
            title: "تیم سوم",
            amount: "۳",
            color: "primary",
            icon: "mdi-trophy-variant-outline",
            unit: "میلیون تومان"
          }
        ]
      };
    }
  };
</script>

<style scoped>

</style>
