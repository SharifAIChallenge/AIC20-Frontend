<template>
  <v-container class="py-12">
    <v-row align="center">
      <v-col cols="12" md="5">
        <glow class="d-inline-block pe-3">
          <h2 id="about" class="text-stroke-primary text-stroke-width-2 display-4 transparent--text font-weight-black">
            {{ $t("home.about") }}
          </h2>
        </glow>
        <glow class="d-inline-block">
            <span class="white--text display-2 font-weight-bold">
            نبرد
          </span>
        </glow>
        <glow class="py-3">
            <span class="white--text display-2 font-weight-bold">
            هوش مصنوعی
          </span>
        </glow>
        <glow>
            <span class="transparent--text text-stroke-white text-stroke-width-2 display-3 font-weight-black">
            شریف
          </span>
        </glow>
      </v-col>
      <v-col>
        <div class="pt-8" v-html="text">
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Glow from "../Glow";

  export default {
    components: { Glow },
    props: ["text"]
  };
</script>

<style scoped>

</style>
