<template>
  <div class="d-flex flex-column justify-center countdown" style="height: 400px;">
    <div>
      <countdown-timer :deadline="new Date(2020,1,15, 21).getTime()"/>
    </div>
    <div class="mt-5">
      <v-row class="justify-center">
        <glow>
          <v-col class="text-center display-1">
            {{$t("home.tillCompetitionStart") }}
          </v-col>
        </glow>
      </v-row>
    </div>
  </div>
</template>

<script>
  import CountdownTimer from "../CountdownTimer";
  import Glow from "../Glow";

  export default {
    components: { Glow, CountdownTimer }
  };
</script>

<style scoped>
</style>
