<template>
  <v-timeline dense>
    <v-slide-x-reverse-transition group hide-on-leave>
      <v-timeline-item
        v-for="item in items"
        :key="item.id"
        :color="item.title"
        small
      >
        <v-alert
          text
          :color="item.title"
          class="my-0 white--text"
        >
          {{ item.text }}
          <div class="me-n2 mb-n3 text-left deep-purple--text text--lighten-3 caption">{{ new
            Intl.DateTimeFormat($i18n.locale).format(new Date(item.create_date)) }}
          </div>
        </v-alert>
      </v-timeline-item>
    </v-slide-x-reverse-transition>
  </v-timeline>
</template>

<script>
  export default {
    props: ["items"]
  };
</script>

<style scoped>

</style>
