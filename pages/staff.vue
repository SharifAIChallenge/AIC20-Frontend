<template>
  <div>
    <div class="primary--bg primary pb-12">
      <div class="d-flex justify-center">
        <div class="p-absolute text-stroke-width-2 text-stroke-white transparent--text text-center font-family-chopsic"
             style="font-size: 150pt; width: 100%; top: -50px; opacity: 0.1; letter-spacing: 10px !important;">
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
        <client-only>
          <v-tabs grow centered center-active show-arrows v-model="tabs">
            <v-tab v-for="group in groups" :key="group + 'Tab'">
              {{ $t(`staff.${group}`) }}
            </v-tab>
          </v-tabs>
          <v-divider/>
          <v-tabs-items v-model="tabs" class="mt-4">
            <v-tab-item v-for="group in groups" :key="group">
              <v-card-text>
                <staff-group :group="staff[group]" :name="group" hide-title cass="mb-8"/>
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </client-only>
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
        staff: {}
      };
    },
    async asyncData({ $axios }) {
      let staff = await $axios.$get("/staff/staffs");
      return { staff };
    },
    computed: {
      groups() {
        return Object.keys(this.staff).sort((x, y) => x.length - y.length);
      }
    }
  };
</script>

<style scoped>

</style>
