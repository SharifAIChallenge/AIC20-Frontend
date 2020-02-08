<template>
  <dashboard-page title="dashboard.settings" permanent>
    <v-card class="overflow-hidden">
      <v-tabs icons-and-text :grow="mobile" v-model="tabs">
        <v-tab>
          {{ $t("dashboard.editProfile") }}
          <v-icon>mdi-account-edit</v-icon>
        </v-tab>
        <v-tab>
          {{ $t("form.changePassword") }}
          <v-icon>mdi-shield-edit</v-icon>
        </v-tab>
      </v-tabs>
      <v-divider/>
      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card-text class="mt-3">
            <edit-profile/>
          </v-card-text>
        </v-tab-item>
        <v-tab-item>
          <v-card-text class="mt-3">
            <change-password/>
          </v-card-text>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </dashboard-page>
</template>

<script>
  import EditProfile from "../../components/dashboard/EditProfile";
  import ChangePassword from "../../components/dashboard/ChangePassword";
  import DashboardPage from "../../components/dashboard/DashboardPage";

  export default {
    components: { DashboardPage, ChangePassword, EditProfile },
    layout: "dashboard",
    data() {
      return {
        tabs: null
      };
    },
    computed: {
      mobile() {
        return this.$vuetify.breakpoint.xsOnly;
      }
    }
  };
</script>

<style scoped>

</style>
