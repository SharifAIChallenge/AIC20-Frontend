<template>
  <v-container class="py-12">
    <v-row align="center">
      <v-col cols="12" md="5">
        <glow class="d-inline-block pe-3">
          <h2 id="whyai" class="text-stroke-primary text-stroke-width-2 display-4 transparent--text font-weight-black">
            چرا
          </h2>
        </glow>
        <glow class="d-inline-block">
            <span class="white--text display-2 font-weight-bold">
            نبرد
          </span>
        </glow>
        <glow class="py-3">
            <span class="secondary--text display-2 font-weight-bold">
            هوش مصنوعی
          </span>
        </glow>
        <glow>
            <span class="white--text display-2 font-weight-bold">
            شریف؟
          </span>
        </glow>
      </v-col>
      <v-col>
        <v-carousel
          cycle
          continuous
          hide-delimiter-background
          show-arrows-on-hover
          height="400"
        >
          <v-carousel-item v-for="(slide, i) in why" :key="i">

            <v-sheet height="100%" color="bg">
              <v-row class="fill-height px-10" align="center">
                <div>
                  <div class="d-inline-block">
                    <glow>
                      <v-icon :size="90" color="secondary">{{ slide.icon }}</v-icon>
                    </glow>
                  </div>
                  <div class="d-inline-block">
                    <glow>
                      <div class="display-3 transparent--text text-stroke-width-2 text-stroke-white font-weight-black d-inline-block ps-5">{{ slide.title }}</div>
                    </glow>
                  </div>
                  <div v-html="slide.body" class="pt-8"></div>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <div class="text-center pt-8">
      <v-btn v-if="!$auth.loggedIn" rounded x-large light color="primary" to="/signup">
        <v-icon left>mdi-rocket</v-icon>
        {{ $t("form.registerNow") }}
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  import Glow from "../Glow";

  export default {
    name: "WhyAi",
    components: { Glow },
    props: ["why"]
  };
</script>

<style scoped>

</style>
