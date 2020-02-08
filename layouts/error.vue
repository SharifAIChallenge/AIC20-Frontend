<template>
  <v-app dark>
    <v-container class="fill-height">
      <v-row no-gutters class="align-center justify-center">
        <v-col class="text-center">
          <v-row class="justify-center">
            <h1>
              <glow :key="error.statusCode">
              <span class="display-4 text-stroke-width-2 text-stroke-primary transparent--text font-family-chopsic">
                {{ error.statusCode }}
              </span>
              </glow>
            </h1>
          </v-row>
          <v-btn v-bind="primaryButtonProps" to="/" nuxt class="mt-6">
            {{ $t("home.home") }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import Glow from "../components/Glow";
  import { primaryButtonProps } from "../mixins/buttonProps";

  export default {
    layout: "empty",
    mixins: [primaryButtonProps],
    components: { Glow },
    props: {
      error: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        pageNotFound: "404 Not Found",
        otherError: "An error occurred"
      };
    },
    head() {
      const title =
        this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
      return {
        title
      };
    }
  };
</script>

<style scoped>
  h1 {
    font-size: 20px;
  }
</style>
