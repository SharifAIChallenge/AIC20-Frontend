<template>
  <div>
    <v-alert text icon="mdi-information" class="mb-6">
      {{ $t("dashboard.friendlyMatchMessage") }}
    </v-alert>
    <v-switch color="info" v-model="allowMultiFriendly" inset :loading="loading.toggle"
              :label="$t('dashboard.acceptFriendlyMatches')"/>
    <v-form ref="editProfile" v-model="valid" @submit="requestFriendlyMatch" onSubmit="return false;">
      <v-expand-transition>
        <v-row v-if="allowMultiFriendly">
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="teamName"
              :label="$t('form.teamName')"
              v-bind="filedProps"
              clearable
            />
          </v-col>
          <v-col>
            <v-select
              v-model="multiType"
              v-bind="filedProps"
              :items="multiTypeOptions"
              :label="$t('form.inviteAs')"
              :disabled="!teamName"
              dir="ltr"
            />
          </v-col>
        </v-row>
      </v-expand-transition>
      <v-btn type="submit" :disabled="!valid" :loading="loading.request" v-bind="primaryButtonProps">
        <v-icon left>mdi-gamepad-variant</v-icon>
        {{ $t("dashboard.requestFriendlyMatch") }}
      </v-btn>
    </v-form>
    <match-lobby v-for="(lobby, i) in lobbies" :lobby="lobby" :key="i"/>
  </div>
</template>

<script>
  import { REQUEST_FRIENDLY_MATCH, TOGGLE_MULTI_FRIENDLY, VIEW_LOBBY } from "../../../api";
  import MatchLobby from "./MatchLobby";
  import { primaryButtonProps } from "../../../mixins/buttonProps";
  import { mapState } from "vuex";
  import { fieldProps } from "../../../mixins/fieldProps";

  export default {
    mixins: [primaryButtonProps, fieldProps],
    components: { MatchLobby },
    data() {
      return {
        valid: false,
        teamName: "",
        multiType: "friend",
        multiTypeOptions: [
          { text: "دوست", value: "friend" },
          { text: "رقیب", value: "enemy" }
        ],
        lobbies: [],
        loading: {
          request: false,
          lobby: false,
          toggle: false
        }
      };
    },
    computed: {
      ...mapState({
        allowMultiFriendly: state => state.team.team ? state.team.team.allow_multi_friendly : false
      }),
      allowMultiFriendly: {
        set() {
          this.toggleFriendly();
        },
        get() {
          return this.$store.state.team.team ? this.$store.state.team.team.allow_multi_friendly : false;
        }
      }
    },
    methods: {
      async requestFriendlyMatch() {
        const payload = this.teamName ? {
          type: "multi",
          team_name: this.teamName,
          multi_type: this.multiType
        } : {
          type: "single"
        };
        const config = {
          url: REQUEST_FRIENDLY_MATCH.url,
          method: REQUEST_FRIENDLY_MATCH.method,
          [REQUEST_FRIENDLY_MATCH.payload]: payload
        };
        this.loading.request = true;
        let { data } = await this.$axios(config);
        this.loading.request = false;
        if (data.status_code === 200) this.$toast.success("درخواست شما ثبت شد.");
        else this.$toast.error("درخواست رد شد.");
        this.getLobby();
      },
      async getLobby() {
        let { lobbies, status_code } = await this.$axios.$get(VIEW_LOBBY.url);
        if (status_code === 200) this.lobbies = lobbies;
      },
      async toggleFriendly() {
        this.loading.toggle = true;
        await this.$axios.$post(TOGGLE_MULTI_FRIENDLY.url);
        this.$store.dispatch("team/getTeam");
        this.loading.toggle = false;
      }
    },
    mounted() {
      this.getLobby();
    }
  };
</script>

<style scoped>

</style>
