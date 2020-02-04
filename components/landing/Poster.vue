<template>
  <v-parallax height="650" src="/image/bg-hero.jpg">
    <v-row
      align="center"
      justify="center"
    >
      <glow>
        <v-col class="text-center" cols="12">
          <div>
            <span class="display-1 display-xs-2 font-family-chopsic text-stroke-width-2 text-stroke-white transparent--text">sharif</span>
            <span class="display-2 display-xs-4 font-family-chopsic pl-3 text-stroke-width-2 text-stroke-primary transparent--text">AI</span>
          </div>
          <div class="display-1 display-xs-2 font-family-chopsic text-stroke-width-2 text-stroke-white transparent--text">Challenge
          </div>
          <div class="display-2 display-xs-4 font-family-chopsic text-stroke-width-2 text-stroke-primary transparent--text">2020
          </div>
        </v-col>
      </glow>
    </v-row>
    <v-row v-if="!$auth.loggedIn" class="justify-center">
      <v-btn rounded x-large light color="primary" to="/signup">
        <v-icon left>mdi-rocket</v-icon>
        {{ $t("form.registerNow") }}
      </v-btn>
    </v-row>
  </v-parallax>
</template>

<script>
  import Glow from "../Glow";

  export default {
    name: "Poster",
    components: { Glow },
    computed: {
      size() {
        return this.$vuetify.breakpoint.xsOnly ? 1 : 2;
      }
    }
  };
</script>

<style scoped>
  @media (min-width: 600px) {
    .v-application .display-xs-4 {
      font-size: 6rem !important;
      line-height: 6rem;
    }
    .v-application .display-xs-2 {
      font-size: 3rem !important;
      line-height: 3.125rem;
    }
  }
</style>
