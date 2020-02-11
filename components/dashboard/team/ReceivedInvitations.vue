<template>
  <div>
    <v-list v-if="invitations.length" class="py-0">
      <v-list-item v-for="item in invitations" :key="item.id">
        <v-list-item-content>
          <div>
            {{ `${item.source.profile.firstname_fa + " " + item.source.profile.lastname_fa}، شما را به تیم ` }}
            <v-btn text small rounded color="primary" @click="openDialog(item)" class="text-nocaps d-inline-block">
              {{ item.team_name }}
            </v-btn>
            دعوت کرده است!
          </div>
        </v-list-item-content>
        <v-list-item-action v-if="item.status === 'not_answered'">
          <div class="d-flex">
            <v-btn @click="answer(item, 'accept')" :loading="loading.accept[item.id]" rounded small depressed class="me-3"
                   color="success">
              <v-icon left>mdi-check</v-icon>
              {{ $t("form.accept") }}
            </v-btn>
            <v-btn @click="answer(item, 'reject')" :loading="loading.reject[item.id]" rounded small depressed color="error">
              <v-icon left>mdi-close</v-icon>
              {{ $t("form.reject") }}
            </v-btn>
          </div>
        </v-list-item-action>
        <v-list-item-icon v-else>
          <status-icon :status="item.status"/>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
    <div v-else class="text-center">
      <p>
        <v-icon size="48">mdi-emoticon-sad-outline</v-icon>
      </p>
      <p>{{ $t("dashboard.noInvitationsYet") }}</p>
    </div>
    <v-dialog v-model="dialog" width="300">
      <v-card>
        <v-card-text class="pa-3">
          <team-loader v-if="dialog" :name="teamName"/>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { ANSWER_INVITATION } from "../../../api";
  import { mapState } from "vuex";
  import TeamLoader from "./TeamLoader";
  import StatusIcon from "../StatusIcon";

  export default {
    components: { StatusIcon, TeamLoader },
    data() {
      return {
        dialog: false,
        teamName: "",
        team: {},
        loading: {
          accept: {},
          reject: {},
          menu: false
        }
      };
    },
    computed: {
      ...mapState({
        invitations: state => state.team.receivedInvitations
      })
    },
    methods: {
      async answer(invitation, answer) {
        const config = {
          url: `${ANSWER_INVITATION.url}/${invitation.id}`,
          method: ANSWER_INVITATION.method,
          [ANSWER_INVITATION.payload]: {
            answer: answer
          }
        };
        this.$set(this.loading[answer], invitation.id, true);
        let { data } = await this.$axios(config);
        this.$set(this.loading[answer], invitation.id, false);
        this.$store.dispatch("team/getReceivedInvitations");
        if (data.status_code) {
          if (data.status_code === 200) {
            if (answer === "accept") {
              this.$toast.success(`با موفقیت به تیم ${invitation.team_name} پیوستید!`);
              this.$store.dispatch("team/getTeam");
            } else
              this.$toast.success(`درخواست تیم ${invitation.team_name} رد شد.`);
          } else if (data.status_code === 406) {
            this.$toast.error("ظرفیت تیم تکمیل است.");
          } else {
            this.$toast.error("خطایی در پاسخ به دعوت نامه رخ داد.");
          }
        }
      },
      openDialog(item) {
        this.teamName = item.team_name;
        this.dialog = true;
      }
    }
  };
</script>

<style scoped>

</style>
