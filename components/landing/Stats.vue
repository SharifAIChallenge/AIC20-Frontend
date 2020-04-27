<template>
  <v-container class="pb-12">
<!--    <v-divider class="mb-12"/>-->
    <v-row class="mt-12">
      <v-col>
        <div class="d-flex flex-column align-center">
          <div>
            <glow>
              <span class="display-3 text-stroke-width-2 text-stroke-primary font-weight-black transparent--text">{{ registers }}</span>
            </glow>
          </div>
          <v-chip color="white" light pill class="my-5">
            <v-avatar left color="primary">
              <v-icon color="white">mdi-account</v-icon>
            </v-avatar>
            شرکت کننده
          </v-chip>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column align-center">
          <div>
            <glow>
              <span class="display-3 text-stroke-width-2 text-stroke-primary font-weight-black transparent--text">{{ teams }}</span>
            </glow>
          </div>
          <v-chip color="white" light pill class="my-5">
            <v-avatar left color="primary">
              <v-icon color="white">mdi-account-group</v-icon>
            </v-avatar>
            تیم
          </v-chip>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column align-center">
          <div>
            <glow>
              <span class="display-3 text-stroke-width-2 text-stroke-primary font-weight-black transparent--text">{{ submissions }}</span>
            </glow>
          </div>
          <v-chip color="white" light pill class="my-5">
            <v-avatar left color="primary">
              <v-icon color="white">mdi-upload</v-icon>
            </v-avatar>
            ارسال کد
          </v-chip>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column align-center">
          <div>
            <glow>
              <span class="display-3 text-stroke-width-2 text-stroke-primary font-weight-black transparent--text">{{ games }}</span>
            </glow>
          </div>
          <v-chip color="white" light pill class="my-5">
            <v-avatar left color="primary">
              <v-icon color="white">mdi-gamepad-variant</v-icon>
            </v-avatar>
            بازی
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Glow from "../Glow";

  export default {
    props: ["teams", "games", "registers", "submissions"],
    components: { Glow }
  };
</script>

<style scoped>

</style>
