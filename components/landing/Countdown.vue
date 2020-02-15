<template>
  <v-container>
    <v-row class="flex-column justify-center py-12">
      <v-col>
        <countdown-timer :deadline="new Date(2020,2,2, 23).getTime()"/>
      </v-col>
      <v-col class="mt-5">
        <v-row class="justify-center">
          <glow>
            <v-col class="text-center display-1">
              تا رقابت انتخابی
            </v-col>
          </glow>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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
