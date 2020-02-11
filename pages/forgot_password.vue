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

        <v-form ref="form" v-model="valid"  @submit="resetPassword" onSubmit="return false;">
          <v-text-field
            v-model="email"
            :label="$t('form.email')"
            type="email"
            :rules="emailRules"
            required
            v-bind="filedProps"
            dir="ltr"
            autofocus
          />

          <v-btn :disabled="!valid" :loading="loading" type="submit" v-bind="primaryButtonProps">
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
  import { RESET_PASSWORD, SIGN_UP } from "../api";

  export default {
    auth: "guest",
    layout: "form",
    mixins: [requiredRules, emailRules, primaryButtonProps, fieldProps],
    components: { Glow },
    data() {
      return {
        valid: false,
        email: "",
        loading: false
      };
    },
    methods: {
      async resetPassword() {
        const config = {
          url: RESET_PASSWORD.url,
          method: RESET_PASSWORD.method,
          headers: {
            Authorization: false
          },
          [RESET_PASSWORD.payload]: {
            email: this.email
          }
        };
        this.loading = true;
        let { data } = await this.$axios(config);
        this.loading = false;
        if (data.status_code) {
          if (data.status_code === 200) {
            this.$toast.success("لینک تغییر رمز عبور به ایمیل شما ارسال شد.");
            this.$refs.form.reset();
          } else {
            this.$toast.error("ایمیل پیدا نشد.");
          }
        }
      },
    }
  };
</script>
