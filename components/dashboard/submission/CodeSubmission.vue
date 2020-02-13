<template>
  <v-form ref="createTeam" v-model="valid" @submit="uploadCode" onSubmit="return false;">
    <v-alert text icon="mdi-information" class="mb-6">
      {{ $t("dashboard.codeSubmissionMessage") }}
    </v-alert>
    <v-row>
      <v-col cols="12" sm="8">
        <v-file-input
          v-model="file"
          v-bind="filedProps"
          :label="$t('form.file')"
          :rules="fileRules"
          :hint="fileHint"
          accept=".zip"
          show-size
          persistent-hint
          dir="ltr"
        />
      </v-col>
      <v-col>
        <v-select
          v-model="language"
          v-bind="filedProps"
          :items="languageOptions"
          :label="$t('form.language')"
          :rules="requiredRules"
          required
          dir="ltr"
        />
      </v-col>
    </v-row>

    <v-btn :disabled="!valid" :loading="loading" type="submit" v-bind="primaryButtonProps">
      <v-icon left>mdi-upload</v-icon>
      {{ $t("form.upload") }}
    </v-btn>
  </v-form>
</template>

<script>
  import { requiredRules } from "../../../mixins/formValidations";
  import { primaryButtonProps } from "../../../mixins/buttonProps";
  import { fieldProps } from "../../../mixins/fieldProps";
  import { CREATE_TEAM, SUBMIT_CODE } from "../../../api";

  export default {
    mixins: [requiredRules, primaryButtonProps, fieldProps],
    data() {
      return {
        valid: false,
        file: null,
        language: "java",
        languageOptions: [
          { text: "Java", value: "java" },
          { text: "Python 3", value: "py3" },
          { text: "Cpp", value: "cpp" },
          { text: "Go", value: "go" }
        ],
        fileHint: "",
        fileRules: [v => !!v || ""],
        loading: false
      };
    },
    methods: {
      async uploadCode() {
        const formData = new FormData();
        formData.append("file", this.file);
        formData.append("language", this.language);
        const config = {
          url: SUBMIT_CODE.url,
          method: SUBMIT_CODE.method,
          [SUBMIT_CODE.payload]: formData
        };
        this.loading = true;
        let { data } = await this.$axios(config);
        this.loading = false;
        this.$store.dispatch("team/getSubmissions");
        if (data.status_code) {
          if (data.status_code === 200) {
            this.$toast.success("فایل با موفقیت آپلود شد.");
          } else if (data.detail.non_field_errors) {
            if (data.detail.non_field_errors[0].includes("wait"))
              this.$toast.error("باید بین هر ارسال حداقل یک دقیقه صبر کنید.");
          } else {
            this.$toast.error("خطایی در آپلود فایل رخ داد.");
          }
        }
      }
    }
  };
</script>
