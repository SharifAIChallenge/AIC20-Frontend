<template>
  <v-form ref="createTeam" v-model="valid" @submit="editAvatar('edit')" onSubmit="return false;">
    <v-file-input
      v-model="image"
      accept="image/png, image/jpeg"
      v-bind="filedProps"
      :label="$t('form.avatar')"
      :rules="imageRules"
      :hint="imageHint"
      show-size
      persistent-hint
      class="mb-3"
      dir="ltr"
    />
    <div class="d-flex">
      <v-col>
        <v-btn block rounded color="primary" :disabled="!valid" :loading="loading.edit" type="submit">
          <v-icon left>mdi-image-edit</v-icon>
          {{ $t("form.change") }}
        </v-btn>
      </v-col>
      <v-col v-if="deletable">
        <v-btn block rounded outlined :loading="loading.delete" @click="editAvatar('delete')">
          <v-icon left color="error">mdi-trash-can</v-icon>
          {{ $t("dashboard.deleteAvatar") }}
        </v-btn>
      </v-col>
    </div>
  </v-form>
</template>

<script>
  import { primaryButtonProps } from "../../../mixins/buttonProps";
  import { fieldProps } from "../../../mixins/fieldProps";
  import { EDIT_TEAM } from "../../../api";

  export default {
    mixins: [primaryButtonProps, fieldProps],
    props: {
      deletable: {
        type: Boolean
      }
    },
    data() {
      return {
        valid: false,
        loading: {
          edit: false,
          delete: false
        },
        image: null,
        imageRules: [
          value => !value || !value.size || value.size < 200000 || "سایز عکس باید کمتر از ۲۰۰ کیلوبایت باشد.",
          value => !!value || ""
        ],
        imageHint: "عکس مربع با حجم حداکثر ۲۰۰ کیلوبایت"
      };
    },
    methods: {
      async editAvatar(mode) {
        const formData = new FormData();
        if (mode === "edit") formData.append("image", this.image);
        const config = {
          url: EDIT_TEAM.url,
          method: EDIT_TEAM.method,
          [EDIT_TEAM.payload]: formData
        };
        this.loading[mode] = true;
        let { data } = await this.$axios(config);
        this.loading[mode] = false;
        this.$emit("close");
        this.$store.dispatch("team/getTeam");
        if (data.status_code) {
          if (data.status_code === 200) {
            this.$toast.success("تصویر تیم با موفقیت ویرایش شد.");
          } else {
            this.$toast.error("خطایی در ویرایش تصویر رخ داد.");
          }
        }
      }
    }
  };
</script>

<style scoped>

</style>
