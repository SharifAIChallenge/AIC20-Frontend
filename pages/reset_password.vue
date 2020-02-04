<template>
  <div>
    <v-row justify="end" align="center" style="height: 100px" class="mt-n3 px-3 px-sm-5">
      <v-btn rounded text large to="/forgot_password" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-row>
    <v-row justify="center" align="center" class="my-3">
      <v-col cols="12" sm="7" md="5" lg="3">
        <v-row justify="center" align="baseline" class="text-uppercase">
          <glow>
          <span class="display-2 white--text">
            {{ $t("form.change") }}
          </span>
          </glow>
        </v-row>
        <v-row justify="center" class="mb-5 mt-1">
          <glow>
          <span class="display-3 secondary--text font-weight-black mx-1">
            {{ $t("form.password") }}
          </span>
          </glow>
        </v-row>
        <v-form ref="form" v-model="valid"  @submit="resetPasswordConfirm" onSubmit="return false;">

          <password-input v-model="new_password1" label="form.newPassword" @vis-change="val => show = val"/>

          <v-text-field
            v-model="new_password2"
            :label="$t('form.confirmNewPassword')"
            :type="show ? 'text' : 'password'"
            :rules="requiredRules"
            required
            v-bind="filedProps"
            dir="ltr"
          />

          <v-alert :type="result.type" :value="result.value" text outlined>
            <v-row align="center">
              <v-col class="grow">{{ result.message }}</v-col>
              <v-col v-if="result.action" class="shrink">
                <v-btn color="success" small rounded depressed to="/login">{{ $t("form.signIn") }}</v-btn>
              </v-col>
            </v-row>
          </v-alert>

          <v-btn :disabled="!valid" :loading="loading" type="submit" v-bind="primaryButtonProps">
            <v-icon left>mdi-shield-refresh-outline</v-icon>
            {{ $t("form.changePassword") }}
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { requiredRules } from "../mixins/formValidations";
  import { primaryButtonProps } from "../mixins/buttonProps";
  import { fieldProps } from "../mixins/fieldProps";
  import Glow from "../components/Glow";
  import PasswordInput from "../components/PasswordInput";
  import { RESET_PASSWORD, RESET_PASSWORD_CONFIRM } from "../api";

  export default {
    auth: "guest",
    layout: "form",
    mixins: [requiredRules, primaryButtonProps, fieldProps],
    components: { PasswordInput, Glow },
    validate({ query }) {
      return query.uid && query.token
    },
    data() {
      return {
        valid: false,
        new_password1: "",
        new_password2: "",
        show: false,
        result: {
          value: false,
          type: "success",
          message: "",
          action: false
        },
        loading: false
      };
    },
    methods: {
      async resetPasswordConfirm() {
        const config = {
          url: RESET_PASSWORD_CONFIRM.url,
          method: RESET_PASSWORD_CONFIRM.method,
          headers: {
            Authorization: false
          },
          [RESET_PASSWORD_CONFIRM.payload]: {
            new_password1: this.new_password1,
            new_password2: this.new_password2,
            uid: this.$route.query.uid,
            token: this.$route.query.token
          }
        };
        this.loading = true;
        let { data } = await this.$axios(config);
        this.loading = false;
        if (data.status_code) {
          if (data.status_code === 200) {
            this.result.message = "رمز عبور با موفقیت تغییر یافت.";
            this.result.type = "success";
            this.result.value = true;
            this.result.action = true;
            this.$refs.form.reset();
          } else {
            this.result.message = "خطا";
            this.result.type = "error";
            this.result.value = true;
          }
        }
      }
    }
  };
</script>

<style scoped></style>
