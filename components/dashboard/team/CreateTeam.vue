<template>
  <v-form ref="createTeam" v-model="valid" @submit="createTeam" onSubmit="return false;">

    <v-text-field
      v-model="name"
      :label="$t('form.teamName')"
      :rules="requiredRules"
      required
      v-bind="filedProps"
    />

    <v-file-input
      v-model="image"
      accept="image/png, image/jpeg"
      v-bind="filedProps"
      :label="$t('form.avatar')"
      :rules="imageRules"
      :hint="imageHint"
      show-size
    />
    <v-alert :type="result.type" v-model="result.value" text outlined dismissible>
      {{ result.message }}
    </v-alert>

    <v-btn :disabled="!valid" :loading="loading" type="submit" v-bind="primaryButtonProps">
      <v-icon left>mdi-plus-circle-outline</v-icon>
      {{ $t("form.create") }}
    </v-btn>
  </v-form>
</template>

<script>
  import { requiredRules } from "../../../mixins/formValidations";
  import { primaryButtonProps } from "../../../mixins/buttonProps";
  import { fieldProps } from "../../../mixins/fieldProps";
  import { CREATE_TEAM } from "../../../api";

  export default {
    mixins: [requiredRules, primaryButtonProps, fieldProps],
    data() {
      return {
        valid: false,
        name: "",
        image: null,
        imageFile: null,
        imageRules: [
          value => !value || !value.size || value.size < 200000 || "سایز عکس باید کمتر از ۲۰۰ کیلوبایت باشد."
        ],
        imageHint: "عکس مربع با حجم حداکثر ۲۰۰ کیلوبایت",
        result: {
          value: false,
          type: "success",
          message: ""
        },
        loading: false
      };
    },
    methods: {
      async createTeam() {
        const formData = new FormData();
        formData.append("image", this.image);
        formData.append("name", this.name);
        const config = {
          url: CREATE_TEAM.url,
          method: CREATE_TEAM.method,
          [CREATE_TEAM.payload]: formData
        };
        this.loading = true;
        let { data } = await this.$axios(config);
        this.loading = false;
        if (data.status_code) {
          if (data.status_code === 200) {
            this.result.message = "تیم با موفقیت ساخته شد.";
            this.result.type = "success";
            this.result.value = true;
            this.$refs.createTeam.reset();
          } else {
            this.result.message = "خطایی در ساخت تیم رخ داد.";
            this.result.type = "error";
            this.result.value = true;
          }
        }

      }
    }
  };
</script>
