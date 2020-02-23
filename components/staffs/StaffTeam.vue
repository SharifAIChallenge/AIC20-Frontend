<template>
  <div>
    <glow class="my-2 ms-6">
      <div class="headline font-weight-bold secondary--text" v-if="name !== '_'">{{ $t(`staff.${name}`) }}</div>
    </glow>
    <v-row class="justify-center">
      <v-col v-for="(item, i) in team" :key="team+i" cols="6" sm="4" md="3" lg="2">
        <staff-avatar :staff="item"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import StaffAvatar from "./StaffAvatar";
  import Glow from "../Glow";

  export default {
    components: { StaffAvatar, Glow },
    props: {
      team: {
        type: Array
      },
      name: {
        type: String
      }
    }
  };
</script>

<style scoped>

</style>
