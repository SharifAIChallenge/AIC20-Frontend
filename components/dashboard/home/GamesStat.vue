<template>
  <div>
    <v-progress-circular class="game-stat display-1" size="200" width="40" color="info" :rotate="rotate"
                         :value="percent">
      <span class="white--text">{{ `${percent}%` }}</span>
    </v-progress-circular>
    <div class="mt-8">
      <v-chip pill class="mx-2">
        <v-avatar left color="info">
          <v-icon>mdi-emoticon-happy</v-icon>
        </v-avatar>
        {{ wins }}
        {{ $tc("dashboard.wins", wins) }}
      </v-chip>
      <v-chip pill class="mx-2">
        <v-avatar left color="error">
          <v-icon>mdi-emoticon-sad</v-icon>
        </v-avatar>
        {{ loss }}
        {{ $tc("dashboard.loss", loss) }}
      </v-chip>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      wins: {
        default: 0,
        type: Number
      },
      loss: {
        default: 0,
        type: Number
      }
    },
    computed: {
      value() {
        return this.wins + this.loss ? this.wins / (this.wins + this.loss) : .5;
      },
      percent() {
        return (this.value * 100).toFixed(0);
      },
      rotate() {
        return 360 - this.value * 180;
      }
    }
  };
</script>

<style>
  .game-stat .v-progress-circular__underlay {
    stroke: var(--v-error-base) !important;
  }
</style>
