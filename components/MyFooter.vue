<template>
  <v-footer
    dark
    padless
  >
      <v-card-text class="justify-center d-flex">
        <v-btn
          v-for="social in socials"
          :key="social.icon"
          :href="social.url"
          class="mx-4 white--text"
          target="_blank"
          icon
          large
        >
          <v-icon size="24px">{{ social.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text align-center justify-space-between d-flex mx-sm-3">
        <logo-mark/>
        <div>
        {{ new Date().getFullYear() }} — <strong>AI Challenge @ SCC</strong>
        </div>
      </v-card-text>
  </v-footer>
</template>

<script>
  import LogoMark from "../components/LogoMark";

  export default {
    components: { LogoMark },
    data() {
      return {
        socials: [
          {
            icon: "mdi-telegram",
            url: "https://t.me/aichallenge"
          },
          {
            icon: "mdi-twitter",
            url: "http://www.twitter.com/AiChallenge"
          },
          {
            icon: "mdi-instagram",
            url: "http://www.instagram.com/AiChallenge"
          },
        ]
      }
    }
  };
</script>

<style scoped>

</style>
