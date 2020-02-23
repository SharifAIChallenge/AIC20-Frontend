<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      disable-resize-watcher
      floating
    >
      <v-list rounded nav>
        <v-list-item to="/dashboard" nuxt class="d-sm-none">
          <v-list-item-content>
            <v-list-item-title v-text="$t('dashboard.dashboard')"/>
          </v-list-item-content>
        </v-list-item>
        <template v-if="$route.path === '/'">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            link
          >
            <v-list-item-content>
              <v-list-item-title v-text="$t(item.title)" @click="scrollAndClose(item.scroll)"/>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/staffs" nuxt>
            <v-list-item-content>
              <v-list-item-title v-text="$t('home.ourTeam')"/>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list-item v-else to="/" nuxt>
          <v-list-item-content>
            <v-list-item-title v-text="$t('home.home')"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app fixed hide-on-scroll flat height="100" class="px-sm-3">
      <h1 class="d-none">Sharif AI Challenge نبرد هوش مصنوعی شریف</h1>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="me-2 hidden-md-and-up"/>
      <nuxt-link to="/" class="white--text">
        <logo class="hidden-xs-only"/>
        <logo-mark class="hidden-sm-and-up"/>
      </nuxt-link>
      <v-spacer/>
      <v-row v-if="$route.path === '/'" class="justify-end align-center mx-2 hidden-sm-and-down">
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          rounded
          large
          text
          class="mx-2"
          @click="$vuetify.goTo(item.scroll)">
          {{ $t(item.title) }}
        </v-btn>
        <v-btn
          rounded
          large
          text
          class="mx-2"
          to="/staffs"
          nuxt
        >
          {{ $t("home.ourTeam") }}
        </v-btn>
      </v-row>
      <v-btn v-if="$auth.loggedIn" rounded outlined depressed light large color="white" to="/dashboard"
             class="hidden-xs-only">
        <v-icon left color="primary">mdi-view-dashboard</v-icon>
        {{ $t("dashboard.dashboard") }}
      </v-btn>
      <v-btn v-else rounded outlined depressed light large color="white" to="/login">
        <v-icon left color="primary">mdi-shield-star</v-icon>
        {{ $t("form.signIn") }}
      </v-btn>
      <account-menu v-if="$auth.loggedIn" mobile class="ms-3 me-0"/>
    </v-app-bar>
    <v-content>
      <nuxt/>
    </v-content>
    <my-footer/>
  </v-app>
</template>

<script>
  import Logo from "../components/Logo";
  import LogoMark from "../components/LogoMark";
  import MyFooter from "../components/MyFooter";
  import AccountMenu from "../components/AccountMenu";

  export default {
    components: { AccountMenu, MyFooter, Logo, LogoMark },
    data() {
      return {
        drawer: false,
        items: [
          {
            title: "home.about",
            scroll: "#about"
          },
          {
            title: "home.timeline",
            scroll: "#timeline"
          },
          {
            title: "home.trophies",
            scroll: "#trophies"
          },
          {
            title: "home.whyUs",
            scroll: "#whyai"
          },
          {
            title: "home.organizer",
            scroll: "#organizer"
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: "AI Challenge"
      };
    },
    methods: {
      scrollAndClose(target) {
        if (this.$route.path !== "/") {
          this.$router.push("/");
          return;
        }
        this.$vuetify.goTo(target);
        if (this.drawer)
          this.drawer = false;
      }
    }
  };
</script>
