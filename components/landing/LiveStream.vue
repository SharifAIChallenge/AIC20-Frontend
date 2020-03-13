<template>
  <v-card class="overflow-hidden">
    <v-tabs centered v-model="tab">
      <v-tab v-for="tab in tabNames" :key="tab">
        {{ $t(`dashboard.${tab}`) }}
      </v-tab>
    </v-tabs>
    <v-divider/>
    <v-tabs-items v-model="tab" class="mt-4">
      <v-tab-item class="text-center">
      <iframe src="https://player.twitch.tv/?channel=ai_challenge" frameborder="0" allowfullscreen="true" scrolling="no" height="500" width="820"></iframe><a href="https://www.twitch.tv/ai_challenge?tt_content=text_link&tt_medium=live_embed" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">Watch live video from AI_Challenge on www.twitch.tv</a>
      </v-tab-item>
      <v-tab-item>
      <iframe src="https://challonge.com/aic_2020_final/module" width="100%" height="500" frameborder="0"
              scrolling="auto" allowtransparency="true"
              class="final_bracket"
      ></iframe>
      </v-tab-item>
      <v-tab-item>

      </v-tab-item>

    </v-tabs-items>
  </v-card>
</template>

<script>
  export default {
    data() {
      return {
        tabNames: ["closing", "scoreboard"],
        tab: null
      }
    }
  };
</script>

<style scoped>

</style>
