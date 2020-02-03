<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      disable-resize-watcher
    >
      <v-list rounded nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          link
        >
          <v-list-item-content>
            <v-list-item-title v-text="$t(item.title)" @click="scrollAndClose(item.scroll)"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app fixed hide-on-scroll flat height="100" class="px-sm-3">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="me-2 hidden-md-and-up"/>
      <nuxt-link to="/" class="white--text">
        <logo class="hidden-xs-only"/>
        <logo-mark class="hidden-sm-and-up"/>
      </nuxt-link>
      <v-spacer/>
      <v-row class="justify-end align-center mx-2 hidden-sm-and-down">
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
      </v-row>
      <v-btn v-if="$auth.loggedIn" rounded outlined depressed light large color="white" @click="$auth.logout()">
        <v-icon left color="primary">mdi-shield-remove</v-icon>
        {{ $t("form.signOut") }}
      </v-btn>
      <v-btn v-else rounded outlined depressed light large color="white" to="/login">
        <v-icon left color="primary">mdi-shield-star</v-icon>
        {{ $t("form.signIn") }}
      </v-btn>
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

  export default {
    components: { MyFooter, Logo, LogoMark },
    data() {
      return {
        drawer: false,
        items: [
          {
            title: "home.timeline",
            scroll: "#timeline"
          },
          {
            title: "home.trophies",
            scroll: "#trophies"
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
        this.$vuetify.goTo(target);
        this.drawer = false;
      }
    }
  };
</script>
