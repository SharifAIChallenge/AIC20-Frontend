<template>
  <div>
    <poster/>
    <countdown/>
    <div class="bg-dotted">
      <about :text="intro"/>
    </div>
    <timeline/>
    <div class="bg-dotted">
      <trophies/>
    </div>
    <why-ai :why="why"/>
    <organizers/>
  </div>
</template>

<script>
  import Poster from "./Poster";
  import Timeline from "./Timeline";
  import Countdown from "./Countdown";
  import Organizers from "./Organizers";
  import Trophies from "./Trophies";
  import About from "./About";
  // import Faq from "./Faq";
  import WhyAi from "./WhyAi";

  export default {
    auth: false,
    name: "LandingPage",
    components: { WhyAi, About, Trophies, Organizers, Countdown, Timeline, Poster },
    data() {
      return {
        intro: "",
        why: ""
      }
    },
    async asyncData({ $axios }) {
      let data = await $axios.$get("/", {headers: {Authorization: false}});
      return {
        intro: data.intro.text_fa,
        why: data.why
      }
    }
  };
</script>

<style scoped>

</style>
