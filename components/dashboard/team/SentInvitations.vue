<template>
  <v-list class="py-0">
    <v-divider v-if="invitations.length"/>
    <v-list-item v-for="item in invitations" :key="item.id">
      <v-list-item-content>{{ item.target.profile.firstname_fa + " " + item.target.profile.lastname_fa }}
      </v-list-item-content>
      <v-list-item-icon>
        <status-icon :status="item.status"/>
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script>
  import { mapState } from "vuex";
  import StatusIcon from "../StatusIcon";

  export default {
    components: { StatusIcon },
    computed: {
      ...mapState({
        invitations: state => state.team.sentInvitations
      })
    },
    mounted() {
      this.$store.dispatch("team/getSentInvitations");
    }
  };
</script>

<style scoped>

</style>
