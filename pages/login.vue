<template>
  <div>
    <v-row justify="end" align="center" style="height: 100px" class="mt-n3 px-3 px-sm-5">
      <v-btn rounded large to="/signup">
        <v-icon left color="primary">mdi-shield-plus</v-icon>
        {{ $t("form.signUp") }}
      </v-btn>
    </v-row>
    <v-row justify="center" align="center" class="my-3">
      <v-col cols="12" sm="7" md="5" lg="3">
        <v-row justify="center" align="baseline" class="text-uppercase">
          <glow>
          <span class="text-stroke-primary text-stroke-width-2 display-4 transparent--text font-weight-black">
            {{ $t("form.signIn") }}
          </span>
          </glow>
          <glow class="align-self-baseline d-flex">
          <span class="secondary--text display-2 mx-1">
            {{ $t("form.to") }}
          </span>
          </glow>
        </v-row>
        <v-row justify="center" class="mb-5 mt-1">
          <glow>
            <span class="text-stroke-width-1 transparent--text text-stroke-white display-1 font-family-chopsic">
              AI Challenge
            </span>
          </glow>
        </v-row>
        <v-form ref="form" v-model="valid" @submit="login" onSubmit="return false;">
          <v-alert icon="mdi-shield-alert" text outlined class="mb-6">
            اگر تا کنون رمز عبور خود را تغییر نداده‌اید لازم است قبل از ورود از طریق فرم فراموشی رمز این کار را انجام دهید.
          </v-alert>
          <v-text-field
            v-model="email"
            :label="$t('form.email')"
            type="email"
            :rules="requiredRules"
            required
            v-bind="filedProps"
            dir="ltr"
            autofocus
            validate-on-blur
          />

          <password-input v-model="password"/>

          <div class="mb-5">
            <nuxt-link to="/forgot_password">{{ $t("form.forgotPassword") }}</nuxt-link>
          </div>

          <v-btn :disabled="!valid" :loading="loading" type="submit" v-bind="primaryButtonProps">
            <v-icon left>mdi-shield-star-outline</v-icon>
            {{ $t("form.signIn") }}
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
  import PasswordInput from "../components/PasswordInput";

  export default {
    layout: "form",
    mixins: [requiredRules, emailRules, primaryButtonProps, fieldProps],
    components: { PasswordInput, Glow },
    data() {
      return {
        valid: false,
        email: "",
        password: "",
        loading: false
      };
    },
    methods: {
      login() {
        this.loading = true;
        this.$auth.loginWith("local", {
          data: {
            username: this.email,
            password: this.password
          }
        }).then(() => this.loading = false)
          .catch(() => {
          this.loading = false;
          if (!this.$auth.loggedIn) {
            this.$toast.error("ایمیل وجود ندارد یا رمز عبور اشتباه است.");
          } else {
            this.$toast.success("با موفقیت وارد شدید!");
          }
        });
      }
    }
  };
</script>
