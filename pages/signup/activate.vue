<template>
  <div>
    <v-row v-if="activated" justify="center" align="center" style="height: 100vh" class="ma-n3 flex-column">
      <glow>
        <div class="text-center">
          <v-icon size="200" color="success">mdi-account-check-outline</v-icon>
        </div>
      </glow>
      <div class="text-center">
        حساب کاربری شما فعال شد!
      </div>
      <v-btn rounded outlined depressed light large color="white" class="px-10 my-10" to="/login">
        <v-icon left color="primary">mdi-shield-star</v-icon>
        {{ $t("form.signIn") }}
      </v-btn>
    </v-row>
    <v-row v-else justify="center" align="center" style="height: 100vh" class="ma-n3 flex-column">
      <glow>
        <div class="text-center">
          <v-icon size="200" color="error">mdi-account-search-outline</v-icon>
        </div>
      </glow>
      <div class="text-center">
        خطایی رخ داده است!
      </div>
      <v-btn rounded outlined depressed light large color="white" class="px-10 my-10" to="/">
        <v-icon left color="primary">mdi-home</v-icon>
        {{ $t("home.home") }}
      </v-btn>
    </v-row>
  </div>
</template>

<script>
  import Glow from "../../components/Glow";

  export default {
    auth: false,
    layout: "form",
    components: { Glow },
    data() {
      return {
        status_code: false
      }
    },
    validate({ query }) {
      return query.eid && query.token
    },
    async asyncData({ query, $axios }) {
      return await $axios.$get(`/accounts/activate/${query.eid}/${query.token}`);
    },
    computed: {
      activated() {
        return this.status_code ? this.status_code === 200 : false
      }
    }
  };
</script>

<style scoped>

</style>
