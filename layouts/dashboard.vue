<template>
  <v-app>
    <v-app-bar flat clipped-right absolute height="80" color="bg">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="me-2 hidden-md-and-up"/>
      <v-row class="justify-end">
        <account-menu :mobile="$vuetify.breakpoint.xsOnly" class="me-5"/>
      </v-row>
    </v-app-bar>
    <v-app-bar
      app flat clipped-right collapse
      :min-width="mobile ? 220 : 256"
      :hide-on-scroll="mobile"
      style="left: unset;"
      height="80"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="ms-1 hidden-md-and-up"/>
      <v-row class="justify-center">
        <nuxt-link to="/" class="white--text">
          <logo/>
          <!--        <logo-mark />-->
        </nuxt-link>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      mobile-break-point="960"
      floating app right clipped bottom
      class="dashboard-nav mt-6"
      color="primary"
    >
      <v-list shaped>
        <v-list-item active-class="font-weight-bold" v-for="item in items" :key="item.title" :to="item.link" exact nuxt>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container class="dashboard px-md-6" fluid>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Logo from "../components/Logo";
  import AccountMenu from "../components/AccountMenu";

  export default {
    components: { AccountMenu, Logo },
    data() {
      return {
        drawer: null,
        items: [
          { title: "dashboard.home", icon: "mdi-home-variant-outline", "link": "/dashboard" }
        ]
      };
    },
    computed: {
      mobile() {
        return this.$vuetify.breakpoint.smAndDown;
      }
    }
  };
</script>

<style scoped>
  .dashboard-nav {
    border-top-left-radius: 24px;
  }
</style>
