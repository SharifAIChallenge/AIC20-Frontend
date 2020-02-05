<template>
  <v-container class="py-12">
    <v-row align="center">
      <v-col cols="12" md="5">
        <glow class="d-inline-block pe-3">
          <h2 id="quotes" class="text-stroke-primary text-stroke-width-2 display-4 transparent--text font-weight-black">
            درباره
          </h2>
        </glow>
        <glow class="py-3">
            <span class="font-family-chopsic transparent--text text-stroke-white text-stroke-width-1 display-1">
            AI Challenge
          </span>
        </glow>
        <glow>
            <span class="white--text display-2 font-weight-bold">
            چه می‌گویند؟
          </span>
        </glow>
      </v-col>
      <v-col>
        <v-carousel
          cycle
          continuous
          hide-delimiter-background
          show-arrows-on-hover
          height="300"
          vertical
        >
          <v-carousel-item v-for="(slide, i) in quotes" :key="i">

            <v-sheet height="100%" color="bg">
              <v-row class="fill-height px-10" align="center">
                <div>
                  <Glow>
                    <v-icon :size="100" color="primary">mdi-format-quote-open-outline</v-icon>
                  </Glow>
                  <div v-html="slide.comment_fa" class="py-5"></div>
                  <div class="d-flex align-center justify-space-between caption">
                    <i>{{slide.name_fa}}</i>
                  <Glow>
                    <v-icon :size="80" color="primary">mdi-format-quote-close</v-icon>
                  </Glow>
                  </div>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Glow from "../Glow";

  export default {
    name: "WhyAi",
    components: { Glow },
    props: ["quotes"]
  };
</script>

<style scoped>

</style>
