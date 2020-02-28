<template>
  <div>
    <div style="position: relative">
      <div class="p-absolute" style="width: 100%; z-index: 1">
        <v-progress-circular class="game-draw-stat display-1" size="200" width="40" color="warning"
                             :rotate="drawRotate"
                             :value="drawPercent"/>
      </div>
      <v-progress-circular class="game-stat display-1" size="200" width="40" color="info" :rotate="winRotate"
                           :value="winPercent">
        <span class="white--text">{{ `${winPercent}%` }}</span>
      </v-progress-circular>
    </div>

    <div class="mt-8">
      <v-chip pill class="mx-2">
        <v-avatar left color="info">
          <v-icon>mdi-emoticon-happy</v-icon>
        </v-avatar>
        {{ wins }}
        {{ $tc("dashboard.wins", wins) }}
      </v-chip>
      <v-chip pill class="mx-2">
        <v-avatar left color="warning">
          <v-icon>mdi-emoticon-neutral</v-icon>
        </v-avatar>
        {{ draws }}
        {{ $tc("dashboard.draws", draws) }}
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
      },
      draws: {
        default: 0,
        type: Number
      }
    },
    computed: {
      total() {
        return this.wins + this.loss + this.draws;
      },
      winValue() {
        return this.total ? this.wins / this.total : .33;
      },
      drawValue() {
        return this.total ? this.draws / this.total : .34;
      },
      winPercent() {
        return (this.winValue * 100).toFixed(0);
      },
      drawPercent() {
        return (this.drawValue * 100).toFixed(0);
      },
      winRotate() {
        return -90;
      },
      drawRotate() {
        return this.winValue * 360 - 90;
      }
    }
  };
</script>

<style>
  .game-stat .v-progress-circular__underlay {
    stroke: var(--v-error-base) !important;
  }

  .game-draw-stat .v-progress-circular__underlay {
    stroke: transparent !important;
  }
</style>
