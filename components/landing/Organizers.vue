<template>
  <v-container class="py-12">
    <glow class="mb-8">
      <h2 id="organizer" class="display-2 transparent--text text-stroke-primary text-stroke-width-2 font-weight-black">
        {{
        $t("home.organizer") }}</h2>
    </glow>
    <v-row justify="center">
      <v-col  cols="8" sm="6" md="5" lg="4">
        <v-card color="white" class="pa-5">
          <img src="/image/SSC.png" style="max-width: 100%; border-radius: 0!important;"/>
        </v-card>
      </v-col>
    </v-row>
    <glow class="my-8">
      <h2 class="display-2 transparent--text text-stroke-primary text-stroke-width-2 font-weight-black">{{
        $t("home.sponsors") }}</h2>
    </glow>
    <v-row align="stretch" justify="center">
      <v-col cols="5" sm="4" md="3" lg="3">
        <v-card color="white" class="pa-5">
          <img src="/image/Alibaba.png" style="max-width: 100%; border-radius: 0!important;"/>
        </v-card>
      </v-col>
      <v-col cols="5" sm="4" md="3" lg="3">
        <v-card color="white" class="pa-5 fill-height d-flex align-center">
          <img src="/image/Tapsi.png" style="max-width: 100%; border-radius: 0!important;"/>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="4" sm="3" md="2" lg="2">
        <v-card color="white" class="pa-5 fill-height d-flex align-center">
          <img src="/image/Aparat.png" style="max-width: 100%; border-radius: 0!important;"/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Glow from "../Glow";

  export default {
    components: { Glow }
  };
</script>

<style scoped>

</style>
