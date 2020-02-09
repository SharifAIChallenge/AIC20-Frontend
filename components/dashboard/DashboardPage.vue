<template>
  <v-row class="flex-column ">
    <v-col class="pa-0 mt-md-n11" :class="{'hidden-md-and-up': !permanent}">
      <v-col class="pt-md-0 mt-md-n5 pb-md-7">
        <h2 class="ps-3">{{ $t(title) }}</h2>
      </v-col>
    </v-col>
    <div>
      <slot/>
    </div>
  </v-row>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      },
      permanent: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
