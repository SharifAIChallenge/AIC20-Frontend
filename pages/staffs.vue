<template>
  <div>
    <div class="primary--bg primary pb-12">
      <div class="d-flex justify-center">
        <div class="p-absolute text-stroke-width-2 text-stroke-white transparent--text text-center font-family-chopsic"
             style="font-size: 160pt; width: 2000px; top: -50px; opacity: 0.1; letter-spacing: 10px !important;">
          our team
        </div>
      </div>
      <v-container class="py-12">
        <v-row align="center">
          <v-col>
            <glow class="d-inline-block pe-3">
              <h2 id="about"
                  class="display-3 white--text font-weight-black">
                {{ $t("home.ourTeam") }}
              </h2>
            </glow>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="mt-n12 pb-12">
      <v-card class="mt-n3">
        <v-tabs grow centered center-active show-arrows v-model="tabs">
          <v-tab v-for="group in groups" :key="group + 'Tab'">
            {{ $t(`staff.${group}`) }}
          </v-tab>
        </v-tabs>
        <v-divider/>
        <v-tabs-items v-model="tabs" class="mt-4">
          <v-tab-item v-for="group in groups" :key="group">
            <v-card-text>
              <staff-group :group="staffs[group]" :name="group" hide-title cass="mb-8"/>
            </v-card-text>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
  </div>
</template>

<script>
  import Glow from "../components/Glow";
  import StaffGroup from "../components/staffs/StaffGroup";

  export default {
    auth: false,
    components: { StaffGroup, Glow },
    data() {
      return {
        tabs: null,
        staffs: {}
      };
    },
    async asyncData({ $axios }) {
      let staffs = await $axios.$get("/staff/staffs", { headers: { Authorization: false } });
      return { staffs };
    },
    computed: {
      groups() {
        return Object.keys(this.staffs);
      }
    }
  };
</script>

<style scoped>

</style>
