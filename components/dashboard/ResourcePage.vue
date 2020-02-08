<template>
  <div>
    <v-alert color="info" text>
      {{ data.description_fa }}
    </v-alert>
    <template v-for="section in data.sections">
      <template v-if="section.subtitles.length">
        <v-col :key="section.title_en">
          <h2 class="my-3">{{ section.title_fa }}</h2>
          <div v-html="section.markdown"></div>
        </v-col>
      </template>
      <template v-else>
        <v-card :key="section.title_en" class="mb-6">
          <v-card-title> {{ section.title_fa }}
            <v-subheader>{{ section.title_en }}</v-subheader>
          </v-card-title>
          <v-divider/>
          <v-card-text>
            <div v-html="section.markdown"></div>
          </v-card-text>
          <v-card-actions v-if="section.link_to_colab">
            <v-btn rounded light color="white" :href="section.link_to_colab" target="_blank" class="pe-4">
              <v-icon left color="primary">{{ buttonIcon }}</v-icon>
              {{ $t(buttonLabel) }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object
      },
      buttonLabel: {
        default: "dashboard.getContent"
      },
      buttonIcon: {
        default: "mdi-github-circle"
      }
    }
  };
</script>

<style scoped>

</style>
