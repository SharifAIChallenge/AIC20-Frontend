<template>
  <div>
    <glow v-if="!hideTitle" class="my-5">
      <div class="display-1 font-weight-black primary--text">{{ $t(`staff.${name}`) }}</div>
    </glow>
    <staff-team v-for="team in teams" :team="group[team]" :name="team" :key="team" class="mb-12"/>
  </div>
</template>

<script>
  import StaffTeam from "./StaffTeam";
  import Glow from "../Glow";

  export default {
    props: {
      group: {
        type: Object
      },
      name: {
        type: String
      },
      hideTitle: {
        type: Boolean
      }
    },
    components: { StaffTeam, Glow },
    computed: {
      teams() {
        return Object.keys(this.group);
      }
    }
  };
</script>

<style scoped>

</style>
