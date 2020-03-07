<template>
  <v-container class="py-12">
    <glow class="mb-8">
      <h2 id="trophies" class="display-2 transparent--text text-stroke-primary text-stroke-width-2 font-weight-black">{{
        $t("home.trophies") }}</h2>
    </glow>
    <v-row class="justify-space-around align-end">
      <v-col order="1" order-md="2" cols="12" md="4" class="mb-md-12">
        <v-lazy
          transition="scale-transition"
          :options="{threshold: 0.5}"
          :min-height="200"
        >
          <trophy :trophy="trophies[0]"/>
        </v-lazy>
      </v-col>
      <v-col order="2" order-md="1" cols="12" sm="6" md="4">
        <v-lazy
          transition="scale-transition"
          :options="{threshold: 0.5}"
          :min-height="200"
        >
          <trophy :trophy="trophies[1]"/>
        </v-lazy>
      </v-col>
      <v-col order="3" cols="12" sm="6" md="4">
        <v-lazy
          transition="scale-transition"
          :options="{threshold: 0.5}"
          :min-height="200"
        >
          <trophy :trophy="trophies[2]"/>
        </v-lazy>
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
            title: "تیم اول",
            amount: "۳",
            color: "secondary",
            icon: "mdi-trophy-outline",
            unit: "میلیون تومان"
          },
          {
            title: "تیم دوم",
            amount: "۲",
            color: "primary",
            icon: "mdi-trophy-variant-outline",
            unit: "میلیون تومان"
          },
          {
            title: "تیم سوم",
            amount: "۱",
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
