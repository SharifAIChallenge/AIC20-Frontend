<template>
  <div>
    <v-row justify="end" align="center" style="height: 100px" class="mt-n3 px-3 px-sm-5">
      <v-btn rounded large to="/login">
        <v-icon left color="primary">mdi-shield-star</v-icon>
        {{ $t("form.signIn") }}
      </v-btn>
    </v-row>
    <v-row justify="center" align="center" class="my-3">
      <v-col cols="12" sm="9" md="7" lg="5">
        <v-row justify="center" align="baseline" class="text-uppercase">
          <glow>
          <span class="secondary--text display-3 font-weight-black">
            {{ $t("form.signUp") }}
          </span>
          </glow>
          <glow>
          <span class="text-stroke-primary text-stroke-width-2 transparent--text display-1 font-weight-black">
            {{ $t("form.for") }}
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
        <v-form ref="form" v-model="valid" @submit="signUp" onSubmit="return false;">
          <v-row>
            <v-col class="py-0" cols="12" sm="6">
              <v-text-field
                v-if="$i18n.locale === 'fa'"
                v-model="nameInPersian"
                :label="$t('form.nameInPersian')"
                required
                :rules="requiredRules"
                v-bind="filedProps"
                autofocus
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
              />
            </v-col>
          </v-row>

          <v-row no-gutters justify="center">
            <v-col>
              <v-dialog
                ref="dialog"
                v-model="menu"
                :return-value.sync="birthday"
                persistent
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
                    dir="ltr"
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
              />

              <v-text-field
                v-model="email"
                :label="$t('form.email')"
                type="email"
                :rules="emailRules"
                required
                v-bind="filedProps"
                dir="ltr"
                validate-on-blur
              />

              <password-input v-model="password"/>

              <v-alert :type="result.type" :value="result.value" text outlined>
                {{ result.message }}
              </v-alert>

              <v-btn :disabled="!valid" type="submit" v-bind="primaryButtonProps">
                <v-icon left>mdi-shield-plus-outline</v-icon>
                {{ $t("form.signUp") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { emailRules, requiredRules } from "../../mixins/formValidations";
  import { primaryButtonProps } from "../../mixins/buttonProps";
  import { fieldProps } from "../../mixins/fieldProps";
  import Glow from "../../components/Glow";
  import PasswordInput from "../../components/PasswordInput";
  import { SIGN_UP } from "../../api";

  export default {
    layout: "form",
    mixins: [requiredRules, emailRules, primaryButtonProps, fieldProps],
    components: { PasswordInput, Glow },
    auth: false,
    data() {
      return {
        valid: false,
        nameInPersian: "",
        lastNameInPersian: "",
        nameInEnglish: "",
        lastNameInEnglish: "",
        birthday: "",
        university: "",
        email: "",
        password: "",
        menu: false,
        result: {
          value: false,
          type: "success",
          message: ""
        }
      };
    },
    watch: {
      menu(val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
      }
    },
    methods: {
      save(date) {
        this.$refs.dialog.save(date);
        this.menu = false;
      },
      async signUp() {
        const config = {
          url: SIGN_UP.url,
          method: SIGN_UP.method,
          [SIGN_UP.payload]: {
            email: this.email,
            password_1: this.password,
            password_2: this.password,
            profile: {
              firstname_fa: this.nameInPersian,
              firstname_en: this.nameInEnglish,
              lastname_fa: this.lastNameInPersian,
              lastname_en: this.lastNameInEnglish,
              birth_date: this.birthday,
              university: this.university
            }
          }
        };
        let { data } = await this.$axios(config);
        console.log(data);
        if (data.status_code) {
          if (data.status_code === 200) {
            this.result.message = "ثبت‌نام با موفقیت انجام شد، برای ادامه ایمیل خود را چک کنید.";
            this.result.type = "success";
            this.result.value = true;
            this.$refs.form.reset();
          } else {
            this.result.message = "ثبت‌نام با خطا مواجه شد.";
            this.result.type = "error";
            this.result.value = true;
          }
        }
      }
    }
  };
</script>

<style scoped></style>
