<template>
  <v-app class="bg-decorated">
    <v-app-bar absolute hide-on-scroll flat collapse height="100" min-width="140">
      <nuxt-link to="/" class="white--text">
        <logo/>
<!--        <logo-mark />-->
      </nuxt-link>
      <v-spacer/>
      <nuxt name="nav"/>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Logo from "../components/Logo";
  import LogoMark from "../components/LogoMark";

  export default {
    components: { Logo, LogoMark }
  };
</script>

<style scoped>

</style>
