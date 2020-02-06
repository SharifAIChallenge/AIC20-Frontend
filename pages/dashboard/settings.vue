<template>
  <v-row class="flex-column align-center">
    <v-col>
      <h2 class="ps-3">{{ $t("dashboard.settings") }}</h2>
    </v-col>
    <v-col>
      <v-card class="overflow-hidden">
        <v-tabs icons-and-text :grow="mobile" :vertical="!mobile">
          <v-tab>
            {{ $t("dashboard.editProfile") }}
            <v-icon>mdi-account-edit</v-icon>
          </v-tab>
          <v-tab>
            {{ $t("form.changePassword") }}
            <v-icon>mdi-shield-edit</v-icon>
          </v-tab>

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
        </v-tabs>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import EditProfile from "../../components/dashboard/EditProfile";
  import ChangePassword from "../../components/dashboard/ChangePassword";

  export default {
    components: { ChangePassword, EditProfile },
    layout: "dashboard",
    computed: {
      mobile() {
        return this.$vuetify.breakpoint.xsOnly;
      }
    }
  };
</script>

<style scoped>

</style>
