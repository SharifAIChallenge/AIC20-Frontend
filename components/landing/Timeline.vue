<template>
  <v-container class="py-12">
    <glow class="mb-8">
      <h2 id="timeline" class="display-2 transparent--text text-stroke-primary text-stroke-width-2 font-weight-black">{{
        $t("home.timeline") }}</h2>
    </glow>
    <client-only>
      <v-timeline :dense="xsOnly">
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <!--        <span-->
            <!--          :class="`headline font-weight-bold ${year.color}&#45;&#45;text`"-->
            <!--          v-text="year.year"-->
            <!--        ></span>-->
          </template>
          <v-card>
            <v-card-title
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></v-card-title>
            <v-card-title class="headline">{{ year.title }}</v-card-title>
            <v-card-text>
              {{ year.caption }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </client-only>
  </v-container>
</template>

<script>
  import Glow from "../Glow";

  export default {
    components: { Glow },
    data() {
      return {
        years: [
          {
            color: "primary",
            year: "۱۴ بهمن",
            title: "شروع ثبت‌نام",
            caption: ""
          },
          {
            color: "primary",
            year: "۲۶ بهمن",
            title: "شروع مسابقه",
            caption: ""
          },
          {
            color: "primary",
            year: "۲۲ و ۲۳ اسفند",
            title: "مرحله حضوری",
            caption: ""
          }
        ]
      };
    },
    computed: {
      xsOnly() {
        return this.$vuetify.breakpoint.xsOnly;
      }
    }
  };
</script>

<style scoped>

</style>
