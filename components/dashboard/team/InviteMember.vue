<template>
    <v-form ref="inviteMember" v-model="valid" @submit="inviteMember" onSubmit="return false;">

        <v-text-field
                v-model="email"
                type="email"
                :label="$t('form.email')"
                :rules="emailRules"
                required
                v-bind="filedProps"
                dir="ltr"
        />

        <v-btn :disabled="!valid" :loading="loading" type="submit" v-bind="primaryButtonProps">
            <v-icon left>mdi-email-send-outline</v-icon>
            {{ $t("dashboard.sendInvitation") }}
        </v-btn>
    </v-form>
</template>

<script>
  import { emailRules } from "../../../mixins/formValidations";
  import { primaryButtonProps } from "../../../mixins/buttonProps";
  import { fieldProps } from "../../../mixins/fieldProps";
  import { INVITE } from "../../../api";

  export default {
    mixins: [emailRules, primaryButtonProps, fieldProps],
    data() {
      return {
        valid: false,
        email: "",
        loading: false
      };
    },
    methods: {
      async inviteMember() {
        const config = {
          url: INVITE.url,
          method: INVITE.method,
          [INVITE.payload]: {
            user_email: this.email
          }
        };
        this.loading = true;
        let { data } = await this.$axios(config);
        this.loading = false;
        if (data.status_code) {
          if (data.status_code === 200) {
            this.$toast.success("دعوت نامه ارسال شد.");
            this.$refs.inviteMember.reset();
            this.$store.dispatch("team/getSentInvitations");
          } else if (data.status_code === 406) {
            if (data.errors[0] === "Invited before")
              this.$toast.error("قبلا دعوت شده است.");
            else
              this.$toast.error("ظرفیت تیم تکمیل است.");
          } else {
            this.$toast.error("کاربر مورد نظر یافت نشد یا عضو تیم دیگری‌ست.");
          }
        }
      }
    }
  };
</script>
