<template>
    <div>
      {{
      dateObj.getHours()
      + ":" + dateObj.getMinutes()
      + " - " + new Intl.DateTimeFormat($i18n.locale).format(dateObj)
      }}
    </div>
</template>

<script>
  export default {
    props: ["date"],
    computed: {
      dateObj() {
        return new Date(this.date)
      }
    }
  };
</script>

<style scoped>

</style>
