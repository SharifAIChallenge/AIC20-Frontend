<template>
  <v-parallax height="650" src="/image/bg-hero.jpg">
    <v-row>
      <v-col>
      <live-stream/>
      </v-col>
    </v-row>
<!--    <v-row-->
<!--      align="center"-->
<!--      justify="center"-->
<!--    >-->
<!--      <glow>-->
<!--        <v-col class="text-center" cols="12">-->
<!--          <div>-->
<!--            <span-->
<!--              class="display-1 display-xs-2 font-family-chopsic text-stroke-width-2 text-stroke-white transparent&#45;&#45;text">sharif</span>-->
<!--            <span-->
<!--              class="display-2 display-xs-4 font-family-chopsic pl-3 text-stroke-width-2 text-stroke-primary transparent&#45;&#45;text">AI</span>-->
<!--          </div>-->
<!--          <div-->
<!--            class="display-1 display-xs-2 font-family-chopsic text-stroke-width-2 text-stroke-white transparent&#45;&#45;text">-->
<!--            Challenge-->
<!--          </div>-->
<!--          <div-->
<!--            class="display-2 display-xs-4 font-family-chopsic text-stroke-width-2 text-stroke-primary transparent&#45;&#45;text">-->
<!--            2020-->
<!--          </div>-->
<!--        </v-col>-->
<!--      </glow>-->
<!--    </v-row>-->
<!--    <v-row class="justify-center">-->
<!--      <div>-->
<!--        <v-btn v-if="!$auth.loggedIn" rounded x-large light color="primary" to="/signup" block>-->
<!--          <v-icon left>mdi-rocket</v-icon>-->
<!--          {{ $t("form.registerNow") }}-->
<!--        </v-btn>-->
<!--        <v-dialog v-model="dialog" width="900">-->
<!--          <template v-slot:activator="{ on }">-->
<!--            <v-btn-->
<!--              class="mt-5"-->
<!--              rounded-->
<!--              outlined-->
<!--              v-on="on"-->
<!--              block-->
<!--              x-large-->
<!--            >-->
<!--              <v-icon color="primary" left>mdi-play</v-icon>-->
<!--              {{ $t("home.watchTeaser") }}-->
<!--            </v-btn>-->
<!--          </template>-->

<!--          <v-card>-->
<!--            <v-btn icon large class="p-absolute" style="z-index: 1" @click="dialog=false">-->
<!--              <v-icon>mdi-close</v-icon>-->
<!--            </v-btn>-->
<!--            <v-btn loading text color="accent" class="p-absolute" block style="top: 50%;"/>-->
<!--            <v-card-text class="pa-0" dir="ltr">-->
<!--              <v-responsive :aspect-ratio="16/9">-->
<!--                <keep-alive>-->
<!--                  <teaser v-if="dialog"/>-->
<!--                </keep-alive>-->
<!--              </v-responsive>-->
<!--            </v-card-text>-->
<!--          </v-card>-->
<!--        </v-dialog>-->
<!--      </div>-->
<!--    </v-row>-->
  </v-parallax>
</template>

<script>
  import Glow from "../Glow";
  import Teaser from "./Teaser";
  import LiveStream  from "./LiveStream";

  export default {
    name: "Poster",
    components: { Teaser, Glow, LiveStream },
    data() {
      return {
        dialog: false
      };
    },
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
