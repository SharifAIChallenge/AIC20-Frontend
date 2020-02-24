<template>
  <div class="text-center">
    <a :href="staff.url !== '#' ? staff.url : undefined">
      <v-avatar :size="size">
        <v-img :src="`https://aichallenge.sharif.edu${staff.image}`"/>
      </v-avatar>
    </a>
    <div class="subtitle-2 mt-3">
      {{ staff.first_name_fa + " " + staff.last_name_fa }}
    </div>
    <div class="caption secondary--text" v-if="staff.role && !hideRole">{{ staff.role }}</div>
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
      hideRole: {
        type: Boolean
      }
    }
  };
</script>

<style scoped>

</style>
