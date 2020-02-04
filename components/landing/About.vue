<template>
  <v-container class="py-12">
    <v-row align="center">
      <v-col cols="12" md="5">
        <glow class="d-inline-block pe-3">
            <h2 class="text-stroke-primary text-stroke-width-2 display-4 transparent--text font-weight-black">
            درباره
          </h2>
        </glow>
        <glow class="d-inline-block">
            <span class="white--text display-2 font-weight-black">
            نبرد
          </span>
        </glow>
        <glow class="py-3">
            <span class="white--text display-2 font-weight-black">
            هوش مصنوعی
          </span>
        </glow>
        <glow>
            <span class="white--text display-2 font-weight-black">
            شریف
          </span>
        </glow>
      </v-col>
      <v-col>
        <div class="pt-8">
          <p>
            نبرد هوش مصنوعی شریف یک مسابقه تیمی است که در آن تیم‌ها استراتژی‌های خود را برای پیروزی در یک نبرد استراتژیک
            طراحی و در قالب کد پیاده‌سازی می‌کنند.
          </p>
          <p>
            هر تیم با استفاده از ایده‌های خلاقانه و استراتژی‌های متفاوت سعی می‌کند یک هوش مصنوعی قدرتمند طراحی کند که تا
            جای ممکن بر تیم‌های حریف چیره شود و به مرحلهٔ حضوری مسابقات راه پیدا کند.
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Glow from "../Glow";

  export default {
    components: { Glow }
  };
</script>

<style scoped>

</style>
