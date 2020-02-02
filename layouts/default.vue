<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app fixed hide-on-scroll flat height="100" class="px-sm-3">
      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>-->
      <nuxt-link to="/" class="white--text">
        <logo class="hidden-xs-only"/>
        <logo-mark class="hidden-sm-and-up"/>
      </nuxt-link>
      <v-spacer/>
      <v-btn rounded outlined depressed light large color="white" to="/login">
        <v-icon left color="primary">mdi-shield-star</v-icon>
        {{ $t("form.signIn") }}
      </v-btn>
    </v-app-bar>
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
  import Logo from "../components/Logo";
  import LogoMark from "../components/LogoMark";

  export default {
    components: { Logo, LogoMark },
    data() {
      return {
        drawer: false,
        items: [
          {
            icon: "mdi-apps",
            title: "Welcome",
            to: "/"
          },
          {
            icon: "mdi-chart-bubble",
            title: "Inspire",
            to: "/inspire"
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: "AI Challenge"
      };
    }
  };
</script>
