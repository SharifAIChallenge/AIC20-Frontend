<template>
  <div>
    <v-row class="justify-center">
      <v-card width="80" class="text-center ma-1 py-2">
        <span class="display-2">{{ days }}</span>
        <div class="primary--text">{{ $tc("time.day", days) }}</div>
      </v-card>
      <v-card width="80" class="text-center ma-1 py-2">
        <span class="display-2">{{ hours }}</span>
        <div class="primary--text">{{ $tc("time.hour", hours) }}</div>
      </v-card>
      <v-card width="80" class="text-center ma-1 py-2">
        <span class="display-2">{{ minutes }}</span>
        <div class="primary--text">{{ $tc("time.minute", minutes) }}</div>
      </v-card>
      <v-card width="80" class="text-center ma-1 py-2">
        <span class="display-2">{{ seconds }}</span>
        <div class="primary--text">{{ $tc("time.second", seconds) }}</div>
      </v-card>
    </v-row>
  </div>
</template>

<script>
  import countdownTimer from "../mixins/countdownTimer";

  export default {
    mixins: [countdownTimer]
  };
</script>

<style scoped>

</style>
