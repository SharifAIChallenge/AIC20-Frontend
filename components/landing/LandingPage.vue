<template>
  <div>
    <poster/>
<!--    <countdown/>-->
    <stats :teams="teams" :registers="registers" :games="games" :submissions="submissions"/>
    <div class="bg-dotted">
      <about :text="intro"/>
    </div>
    <timeline :timeline="timeline"/>
    <div class="bg-dotted">
      <trophies/>
    </div>
    <why-ai :why="why"/>
    <div class="bg-dotted">
      <organizers :staffs="staffs"/>
    </div>
    <quotes :quotes="quotes"/>
  </div>
</template>

<script>
  import Poster from "./Poster";
  import Timeline from "./Timeline";
  import Countdown from "./Countdown";
  import Organizers from "./Organizers";
  import Trophies from "./Trophies";
  import About from "./About";
  import WhyAi from "./WhyAi";
  import Quotes from "./Quotes";
  import Stats from "./Stats";

  export default {
    auth: false,
    name: "LandingPage",
    components: { Stats, WhyAi, About, Trophies, Organizers, Countdown, Timeline, Poster, Quotes },
    data() {
      return {
        intro: "",
        why: "",
        quotes: "",
        teams: 0,
        registers: 0,
        submissions: 0,
        games: 0,
        staffs: []
      };
    },
    async asyncData({ $axios }) {
      let data = await $axios.$get("/", { headers: { Authorization: false } });
      return {
        intro: data.intro.text_fa,
        why: data.why,
        quotes: data.quotes,
        teams: data.teams,
        registers: data.registers,
        timeline: data.timeline,
        staffs: data.staffs,
        submissions: data.submissions,
        games: data.games
      };
    }
  };
</script>

<style scoped>

</style>
