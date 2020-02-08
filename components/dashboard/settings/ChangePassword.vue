<template>
  <v-form ref="form" v-model="valid" @submit="resetPasswordConfirm" onSubmit="return false;">

    <password-input v-model="password" label="form.currentPassword"/>

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

    <v-alert :type="result.type" v-model="result.value" text outlined dismissible>
      {{ result.message }}
    </v-alert>

    <v-btn :disabled="!valid || new_password1 !== new_password2" :loading="loading" type="submit"
           v-bind="primaryButtonProps">
      <v-icon left>mdi-shield-edit-outline</v-icon>
      {{ $t("form.changePassword") }}
    </v-btn>
  </v-form>
</template>

<script>
  import { requiredRules } from "../../../mixins/formValidations";
  import { primaryButtonProps } from "../../../mixins/buttonProps";
  import { fieldProps } from "../../../mixins/fieldProps";
  import PasswordInput from "../../PasswordInput";
  import { CHANGE_PASSWORD } from "../../../api";

  export default {
    auth: "guest",
    mixins: [requiredRules, primaryButtonProps, fieldProps],
    components: { PasswordInput },
    data() {
      return {
        valid: false,
        password: "",
        new_password1: "",
        new_password2: "",
        show: false,
        result: {
          value: false,
          type: "success",
          message: ""
        },
        loading: false
      };
    },
    methods: {
      async resetPasswordConfirm() {
        const config = {
          url: CHANGE_PASSWORD.url,
          method: CHANGE_PASSWORD.method,
          [CHANGE_PASSWORD.payload]: {
            new_password1: this.new_password1,
            new_password2: this.new_password2,
            old_password: this.password
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
            this.$refs.form.reset();
          } else {
            this.result.message = "رمز عبور اشتباه است.";
            this.result.type = "error";
            this.result.value = true;
          }
        }
      }
    }
  };
</script>
