<template>
  <v-container class="py-12">
    <v-row>
      <v-col cols="12" md="6">
        <glow class="mb-8">
          <h2 id="organizer" class="display-2 transparent--text text-stroke-primary text-stroke-width-2 font-weight-black">
            {{
            $t("home.organizer") }}</h2>
        </glow>
        <v-row class="justify-center justify-md-start">
          <v-col  cols="8" sm="6" md="5" lg="4">
            <v-card color="white" class="pa-5">
              <img src="/image/SSC.png" style="max-width: 100%; border-radius: 0!important;"/>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <glow class="mb-8">
          <h2 class="display-2 transparent--text text-stroke-primary text-stroke-width-2 font-weight-black">{{
            $t("home.sponsors") }}</h2>
        </glow>
        <v-row align="stretch" class="justify-center justify-md-start">
          <v-col cols="4" sm="3" md="3">
            <v-card color="white" class="pa-1">
              <img src="/image/Alibaba.png" style="max-width: 100%; border-radius: 0!important;"/>
            </v-card>
          </v-col>
          <v-col cols="4" sm="3" md="3">
            <v-card color="white" class="pa-1 fill-height d-flex align-center">
              <img src="/image/Tapsi.png" style="max-width: 100%; border-radius: 0!important;"/>
            </v-card>
          </v-col>
        </v-row>
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
