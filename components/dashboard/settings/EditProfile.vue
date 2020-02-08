<template>
  <v-form ref="editProfile" v-model="valid" @submit="signUp" onSubmit="return false;">
    <v-row>
      <v-col class="py-0" cols="12" sm="6">
        <v-text-field
          v-if="$i18n.locale === 'fa'"
          v-model="nameInPersian"
          :label="$t('form.nameInPersian')"
          required
          :rules="requiredRules"
          v-bind="filedProps"
          :error="result.errors.firstname_fa"
          @focus="clearError('firstname_fa')"
        />
      </v-col>
      <v-col class="py-0" cols="12" sm="6">
        <v-text-field
          v-if="$i18n.locale === 'fa'"
          v-model="lastNameInPersian"
          :label="$t('form.lastNameInPersian')"
          required
          :rules="requiredRules"
          v-bind="filedProps"
          :error="result.errors.lastname_fa"
          @focus="clearError('lastname_fa')"
        />
      </v-col>
    </v-row>


    <v-row>
      <v-col class="py-0" cols="12" sm="6">
        <v-text-field
          v-model="nameInEnglish"
          :label="$t('form.nameInEnglish')"
          required
          :rules="requiredRules"
          v-bind="filedProps"
          dir="ltr"
          :error="result.errors.firstname_en"
          @focus="clearError('firstname_en')"
        />
      </v-col>
      <v-col class="py-0" cols="12" sm="6">
        <v-text-field
          v-model="lastNameInEnglish"
          :label="$t('form.lastNameInEnglish')"
          required
          :rules="requiredRules"
          v-bind="filedProps"
          dir="ltr"
          :error="result.errors.lastname_en"
          @focus="clearError('lastname_en')"
        />
      </v-col>
    </v-row>

    <v-dialog
      ref="dialog"
      v-model="menu"
      :return-value.sync="birthday"
      width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="birthday"
          v-bind="filedProps"
          required
          :rules="requiredRules"
          :label="$t('form.birthday')"
          readonly
          v-on="on"
          @focus="menu=true"
          dir="ltr"
          :error="result.errors.birth_date"
          @change="clearError('birth_date')"
        />
      </template>
      <v-date-picker
        v-model="birthday"
        :max="new Date().toISOString().substr(0, 10)"
        min="1950-01-01"
        ref="picker"
        scrollable
        @change="save"/>
    </v-dialog>

    <v-text-field
      v-model="university"
      :label="$t('form.educationPlace')"
      required
      :rules="requiredRules"
      v-bind="filedProps"
      :error="result.errors.university"
      @focus="clearError('university')"
    />

    <v-alert :type="result.type" v-model="result.value" text outlined dismissible>
      {{ result.message }}
    </v-alert>

    <v-btn :disabled="!valid || !edited" :loading="loading" type="submit" v-bind="primaryButtonProps">
      <v-icon left>mdi-account-edit-outline</v-icon>
      {{ $t("dashboard.editProfile") }}
    </v-btn>

  </v-form>
</template>

<script>
  import { emailRules, requiredRules } from "../../../mixins/formValidations";
  import { primaryButtonProps } from "../../../mixins/buttonProps";
  import { fieldProps } from "../../../mixins/fieldProps";
  import { EDIT_PROFILE } from "../../../api";

  export default {
    auth: "guest",
    mixins: [requiredRules, emailRules, primaryButtonProps, fieldProps],
    data() {
      return {
        valid: false,
        nameInPersian: "",
        lastNameInPersian: "",
        nameInEnglish: "",
        lastNameInEnglish: "",
        birthday: "",
        university: "",
        menu: false,
        result: {
          value: false,
          type: "success",
          message: "",
          errors: {}
        },
        loading: false
      };
    },
    computed: {
      edited() {
        const profile = this.$auth.user.profile;
        return this.nameInPersian !== profile.firstname_fa ||
          this.nameInEnglish !== profile.firstname_en ||
          this.lastNameInPersian !== profile.lastname_fa ||
          this.lastNameInEnglish !== profile.lastname_en ||
          this.birthday !== profile.birth_date ||
          this.university !== profile.university;
      }
    },
    methods: {
      save(date) {
        this.$refs.dialog.save(date);
        this.menu = false;
      },
      async signUp() {
        const config = {
          url: EDIT_PROFILE.url,
          method: EDIT_PROFILE.method,
          [EDIT_PROFILE.payload]: {
            firstname_fa: this.nameInPersian,
            firstname_en: this.nameInEnglish,
            lastname_fa: this.lastNameInPersian,
            lastname_en: this.lastNameInEnglish,
            birth_date: this.birthday,
            university: this.university
          }
        };
        this.loading = true;
        let { data } = await this.$axios(config);
        this.loading = false;
        if (data.profile) {
          this.$auth.fetchUser().then(() => {
            this.resetForm();
            this.result.message = "پروفایل با موفقیت ویرایش شد.";
            this.result.type = "success";
            this.result.value = true;
          });
        } else {
          this.errors = {};
          this.errors = Object.keys(data.detail).forEach(x => {
            if (x === "profile") {
              Object.keys(data.detail.profile).forEach(y => this.$set(this.result.errors, y, true));
            } else {
              this.$set(this.result.errors, x, true);
            }
          });
          this.result.message = "ویرایش با خطا مواجه شد.";
          this.result.type = "error";
          this.result.value = true;
        }
      },
      clearError(field) {
        if (this.result.errors[field]) {
          this.result.errors[field] = false;
        }
      },
      resetForm() {
        const profile = this.$auth.user.profile;
        this.nameInPersian = profile.firstname_fa;
        this.nameInEnglish = profile.firstname_en;
        this.lastNameInPersian = profile.lastname_fa;
        this.lastNameInEnglish = profile.lastname_en;
        this.birthday = profile.birth_date;
        this.university = profile.university;
      }
    },
    watch: {
      menu(val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
      }
    },
    mounted() {
      this.resetForm();
    }
  };
</script>

<style scoped></style>
