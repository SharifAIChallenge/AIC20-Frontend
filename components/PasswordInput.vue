<template>
  <v-text-field
    :value="value"
    :label="$t(label)"
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    :type="show ? 'text' : 'password'"
    :rules="requiredRules"
    @input="val => $emit('input', val)"
    @click:append="toggle"
    required
    :autofocus="autofocus"
    v-bind="filedProps"
    dir="ltr"
  />
</template>

<script>
  import { fieldProps } from "../mixins/fieldProps";
  import { requiredRules } from "../mixins/formValidations";

  export default {
    mixins: [fieldProps, requiredRules],
    props: {
      value: {
        type: String
      },
      autofocus: {
        type: Boolean
      },
      label: {
        type: String,
        default: "form.password"
      }
    },
    data() {
      return {
        password: "",
        show: false
      };
    },
    methods: {
      toggle() {
        this.show = !this.show;
        this.$emit("vis-change", this.show);
      }
    }
  };
</script>

<style scoped>

</style>
