<template>
  <div>
    <client-only>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        transition="scale-transition"
        close-on-content-click
      >
        <template v-slot:activator="{ on }">
          <v-btn x-large rounded class="pa-0" :icon="mobile" v-on="on">
            <div class="align-center d-flex justify-center" style="width: 100%">
        <span v-if="!mobile" class="px-5 pt-1">
          {{ user.firstname_fa }}
        </span>
              <v-avatar :color="color" class="pt-1">
                {{ user.firstname_en[0] + user.lastname_en[0] }}
              </v-avatar>
            </div>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar :color="color" class="pt-1 text-uppercase justify-center">
                {{ user.firstname_en[0] + user.lastname_en[0] }}
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ user.firstname_fa + " " + user.lastname_fa }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list rounded>
            <v-list-item to="/dashboard/settings" nuxt>
              <v-list-item-icon>
                <v-icon color="primary">mdi-settings-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t("dashboard.settings") }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item @click="$auth.logout()" link>
              <v-list-item-icon>
                <v-icon color="primary">mdi-shield-remove-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ $t("form.signOut") }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </client-only>
  </div>
</template>

<script>
  const COLORS = ["red", "pink", "blue", "cyan", "teal", "green", "light-green", "lime", "amber", "orange"];
  export default {
    props: {
      mobile: {
        default: false,
        type: Boolean
      }
    },
    data() {
      return {
        menu: false
      };
    },
    computed: {
      user() {
        let user = {
          firstname_fa: " ",
          lastname_fa: " ",
          firstname_en: " ",
          lastname_en: " ",
          email: this.$auth.user ? this.$auth.user.email : " "
        };
        const profile = this.$auth.user ? this.$auth.user.profile : {};
        if (profile) {
          user = Object.assign(user, profile);
        }
        return user;
      },
      color() {
        return COLORS[Object.values(this.user).join().length % COLORS.length];
      }
    }
  };
</script>

<style scoped>

</style>
