<template>
  <dashboard-page title="dashboard.settings" permanent>
    <v-col>
      <v-card class="overflow-hidden">
        <v-tabs icons-and-text grow v-model="tabs">
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
        <v-tabs-items v-model="tabs" class="mt-4">
          <v-tab-item>
            <v-card-text>
              <edit-profile/>
            </v-card-text>
          </v-tab-item>
          <v-tab-item>
            <v-card-text>
              <change-password/>
            </v-card-text>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </dashboard-page>
</template>

<script>
  import EditProfile from "../../components/dashboard/settings/EditProfile";
  import ChangePassword from "../../components/dashboard/settings/ChangePassword";
  import DashboardPage from "../../components/dashboard/DashboardPage";

  export default {
    components: { DashboardPage, ChangePassword, EditProfile },
    layout: "dashboard",
    transition: "fade-transition",
    data() {
      return {
        tabs: null
      };
    }
  };
</script>

<style scoped>

</style>
