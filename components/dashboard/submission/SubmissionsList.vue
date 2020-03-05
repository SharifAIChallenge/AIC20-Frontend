<template>
  <div>
    <v-data-table
      :value="selected"
      :headers="headers"
      :items="submissions"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      @page-count="pageCount = $event"
      item-key="id"
      locale="fa"
      sort-by="submit_time"
      sort-desc
    >
      <template v-slot:item.is_final="{ item }">
        <v-btn @click="changeFinal(item)" icon :disabled="!canChangeSubmission">
          <v-icon>{{ item.is_final ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline" }}</v-icon>
        </v-btn>
      </template>
      <template v-slot:item.status="{ item }">
        <submission-status :status="item.status"/>
      </template>
      <template v-slot:item.language="{ item }">
        <language-icon :language="item.language"/>
      </template>
      <template v-slot:item.user="{ item }">
        {{ item.user.profile.firstname_fa + " " + item.user.profile.lastname_fa }}
      </template>
      <template v-slot:item.submit_time="{ item }">
        <date-time-formatter :date="item.submit_time"/>
      </template>
      <template v-slot:item.file="{ item }">
        <v-btn icon :href="item.file">
          <v-icon>mdi-download</v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <v-pagination v-model="page" :length="pageCount" :total-visible="5" circle class="my-3"/>
  </div>
</template>

<script>
  import SubmissionStatus from "./SubmissionStatus";
  import LanguageIcon from "./LanguageIcon";
  import { CHANGE_FINAL_SUBMISSION } from "../../../api";
  import { mapState } from "vuex";
  import DateTimeFormatter from "../../DateTimeFormatter";

  export default {
    components: { DateTimeFormatter, LanguageIcon, SubmissionStatus },
    props: {
      submissions: {
        type: Array
      }
    },
    computed: {
      ...mapState({
        selected: state => state.team.finalSubmission,
        canChangeSubmission: state => state.games.challenge.can_change_submission
      }),
      headers() {
        return [
          { text: this.$t("dashboard.changeFinalSubmission"), sortable: false, value: "is_final", align: "right" },
          { text: this.$t("dashboard.user"), sortable: false, value: "user" },
          { text: this.$t("dashboard.submitTime"), sortable: true, value: "submit_time" },
          { text: this.$t("form.language"), sortable: false, value: "language", align: "center" },
          { text: this.$t("dashboard.status"), sortable: false, value: "status", align: "center" },
          { text: this.$t("form.file"), sortable: false, value: "file", align: "center", width: 70 }
        ];
      }
    },
    data() {
      return {
        page: 1,
        pageCount: 0,
        itemsPerPage: 5
      };
    },
    methods: {
      async changeFinal(item) {
        if (item.is_final) return;
        let data = await this.$axios.$put(`${CHANGE_FINAL_SUBMISSION.url}/${item.id}`);
        if (data.status_code === 200) {
          this.$store.dispatch("team/getSubmissions");
          this.$toast.success("ارسال نهایی با موفقیت تغییر کرد.");
        } else if (data.status_code === 406) {
          this.$toast.error("کد هنوز کامپال نشده است.");
        }
      }
    }
  };
</script>

<style scoped>

</style>
