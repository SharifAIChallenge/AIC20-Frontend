<template>
    <div class="text-center">
      <v-avatar :size="size">
        <v-img :src="`https://aichallenge.sharif.edu${staff.image}`"/>
      </v-avatar>
      <div class="subtitle-2 mt-3">
        {{ staff.first_name_fa + " " + staff.last_name_fa }}
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      staff: {
        type: Object
      },
      size: {
        type: Number,
        default: 120
      },
    }
  };
</script>

<style scoped>

</style>
