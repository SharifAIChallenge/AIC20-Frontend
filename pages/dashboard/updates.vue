<template>
  <dashboard-page title="dashboard.updates">
    <v-col>
      <v-card>
        <v-card-text class="ps-0 py-0">
        <updates :items="notifications"/>
        </v-card-text>
      </v-card>
    </v-col>
  </dashboard-page>
</template>

<script>
  import Updates from "../../components/dashboard/Updates";
  import DashboardPage from "../../components/dashboard/DashboardPage";
  import dashboardPageValidate from "../../mixins/dashboardPageValidate";
  import { NOTIFICATIONS } from "../../api";
  import { mapState } from "vuex";

  export default {
    layout: "dashboard",
    components: { DashboardPage, Updates },
    mixins: [dashboardPageValidate("updates")],
    async fetch({ store, $axios }) {
      let data = await $axios.$get(NOTIFICATIONS.url);
      store.commit("notification/set", data);
    },
    computed: {
      ...mapState({
        notifications: state => state.notification.notifications
      })
    }
  };
</script>

<style scoped>

</style>
