<template>
  <v-form ref="changePassword" v-model="valid" @submit="resetPasswordConfirm" onSubmit="return false;">

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
    mixins: [requiredRules, primaryButtonProps, fieldProps],
    components: { PasswordInput },
    data() {
      return {
        valid: false,
        password: "",
        new_password1: "",
        new_password2: "",
        show: false,
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
            this.$toast.success("رمز عبور با موفقیت تغییر یافت.");
            this.$refs.changePassword.reset();
          } else {
            this.$toast.error("رمز عبور اشتباه است.");
          }
        }
      }
    }
  };
</script>
