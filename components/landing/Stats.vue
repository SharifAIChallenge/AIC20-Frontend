<template>
  <v-container class="py-12">
    <v-row>
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
    </v-row>
  </v-container>
</template>

<script>
  import Glow from "../Glow";

  export default {
    props: {
      teams: {
        default: 0
      },
      registers: {
        default: 0
      }
    },
    components: { Glow }
  };
</script>

<style scoped>

</style>
