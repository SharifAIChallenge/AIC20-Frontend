<template>
  <div>
    <v-row justify="end" align="center" style="height: 100px" class="mt-n3 px-3 px-sm-5">
      <v-btn rounded text large to="/login" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-row>
    <v-row justify="center" align="center" class="my-3">
      <v-col cols="12" sm="7" md="5" lg="3">
        <v-row justify="center" align="baseline" class="mb-5 text-uppercase">
          <glow>
          <span class="display-2 white--text font-weight-black">
            {{ $t("form.forgotPasswordH1") }}
          </span>
          </glow>
          <glow>
          <span class="secondary--text display-2 mx-1">
            {{ $t("form.forgotPasswordH2") }}
          </span>
          </glow>
        </v-row>

        <v-form ref="form" v-model="valid"  @submit="login" onSubmit="return false;">
          <v-text-field
            v-model="email"
            :label="$t('form.email')"
            type="email"
            :rules="emailRules"
            required
            v-bind="filedProps"
            dir="ltr"
            autofocus
            validate-on-blur
          />

          <v-btn :disabled="!valid" v-bind="primaryButtonProps">
            {{ $t("form.sendResetInstructions") }}
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { emailRules, requiredRules } from "../mixins/formValidations";
  import { primaryButtonProps } from "../mixins/buttonProps";
  import { fieldProps } from "../mixins/fieldProps";
  import Glow from "../components/Glow";

  export default {
    auth: false,
    layout: "form",
    mixins: [requiredRules, emailRules, primaryButtonProps, fieldProps],
    components: { Glow },
    data() {
      return {
        valid: false,
        email: ""
      };
    }
  };
</script>

<style scoped>

</style>
