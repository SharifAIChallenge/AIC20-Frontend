<template>
  <v-col>
    <v-card class="mb-6">
      <v-card-title>
        {{ $t("dashboard.gameDocument") }}
      </v-card-title>
      <v-divider/>
      <v-card-text>
        مستند بازی به همراه فایل‌های نقشه و سرور بازی در مخزن زیر قابل دسترسی هستند.
      </v-card-text>
      <v-card-actions>
        <v-btn rounded light color="white" href="https://aichallenge.sharif.edu/go/GameRepo" target="_blank" class="pe-4">
          <v-icon left>mdi-github-circle</v-icon>
          مشاهده و دریافت
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mb-6">
      <v-card-title>
        {{ $t("dashboard.gameVisualizer") }}
      </v-card-title>
      <v-divider/>
      <v-card-text>
        برای مشاهده گرافیکی بازی نمایشگر مربوط به سیستم عامل خود را دریافت کنید.
      </v-card-text>
      <v-card-actions>
        <div>
          <v-btn rounded light color="white" href="https://aichallenge.sharif.edu/go/GraphicLinux" target="_blank" class="pe-4 ma-1">
            <v-icon left>mdi-linux</v-icon>
            نسخه لینوکس
          </v-btn>
          <v-btn rounded light color="white" href="https://aichallenge.sharif.edu/go/GraphicWin" target="_blank" class="pe-4 ma-1">
            <v-icon left>mdi-windows</v-icon>
            نسخه ویندوز
          </v-btn>
          <v-btn rounded light color="white" href="https://aichallenge.sharif.edu/go/GraphicMac" target="_blank" class="pe-4 ma-1">
            <v-icon left>mdi-apple</v-icon>
            نسخه مک
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
    <v-card class="mb-6">
      <v-card-title>
        {{ $t("dashboard.serverAndClients") }}
      </v-card-title>
      <v-divider/>
      <v-card-text>
        هموراه می‌توانید نسخه آخر سرور و کلاینت‌ها را از مخازن زیر دریافت کنید.
      </v-card-text>
      <v-card-actions>
        <div>
          <v-btn rounded light color="white" href="https://aichallenge.sharif.edu/go/GameServer" target="_blank"
                 class="pe-4 ma-1">
            <v-icon left>mdi-server</v-icon>
            سرور
          </v-btn>
          <v-btn rounded light color="white" href="https://aichallenge.sharif.edu/go/JavaClient" target="_blank"
                 class="pe-4 ma-1">
            <v-icon left>mdi-language-java</v-icon>
            کلاینت Java
          </v-btn>
          <v-btn rounded light color="white" href="https://aichallenge.sharif.edu/go/PythonClient" target="_blank"
                 class="pe-4 ma-1">
            <v-icon left>mdi-language-python</v-icon>
            کلاینت Python
          </v-btn>
          <v-btn rounded light color="white" href="https://aichallenge.sharif.edu/go/CppClient" target="_blank"
                 class="pe-4 ma-1">
            <v-icon left>mdi-language-cpp</v-icon>
            کلاینت
            <span dir="ltr" class="ps-1">c++</span>
          </v-btn>
          <v-btn rounded light color="white" href="https://aichallenge.sharif.edu/go/GoClient" target="_blank"
                 class="pe-4 ma-1">
            <v-icon left>mdi-language-go</v-icon>
            کلاینت Go
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
  import dashboardPageValidate from "../../mixins/dashboardPageValidate";

  export default {
    layout: "dashboard",
    mixins: [dashboardPageValidate("resources")]
  };
</script>

<style scoped>

</style>
