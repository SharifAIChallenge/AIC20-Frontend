<template>
  <v-container class="py-12">
    <glow class="mb-8" id="our_team">
      <span class="title pe-3">برخی از اعضای</span>
      <h2 class="display-2 transparent--text text-stroke-primary text-stroke-width-2 font-weight-black d-inline-block">
        {{ $t("home.ourTeam") }}
      </h2>
    </glow>
    <v-row class="justify-center my-6">
      <v-col v-for="(item, i) in staffs" :key="i" cols="6" sm="4" md="3" lg="2">
        <staff-avatar :staff="item" hide-role/>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-btn rounded x-large light color="primary" to="/staffs">
        <v-icon left>mdi-more</v-icon>
        {{ $t("dashboard.seeAll") }}
      </v-btn>
    </div>
    <v-divider class="my-12"/>
    <v-row>
      <v-col cols="12" md="6">
        <glow class="mb-8">
          <h2 id="organizer"
              class="display-2 transparent--text text-stroke-primary text-stroke-width-2 font-weight-black">
            {{
            $t("home.organizer") }}</h2>
        </glow>
        <v-row class="justify-center justify-md-start">
          <v-col cols="8" sm="6" md="5" lg="4">
            <v-card color="white" class="pa-5" href="https://ssc.ce.sharif.edu/" target="_blank">
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
  import StaffAvatar from "../staffs/StaffAvatar";

  export default {
    components: { StaffAvatar, Glow },
    props: {
      staffs: {
        type: Array
      }
    }
  };
</script>

<style scoped>

</style>
