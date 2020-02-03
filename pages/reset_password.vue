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
        <v-form ref="form" v-model="valid"  @submit="login" onSubmit="return false;">

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

          <v-btn :disabled="!valid" @click="" v-bind="primaryButtonProps">
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

  export default {
    auth: false,
    layout: "form",
    mixins: [requiredRules, primaryButtonProps, fieldProps],
    components: { PasswordInput, Glow },
    data() {
      return {
        valid: false,
        new_password1: "",
        new_password2: "",
        show: false
      };
    },
    methods: {}
  };
</script>

<style scoped></style>
