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
    <div class="bg-dotted">
      <organizers/>
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
  // import Faq from "./Faq";
  import WhyAi from "./WhyAi";
  import Quotes from "./Quotes";

  export default {
    auth: false,
    name: "LandingPage",
    components: { WhyAi, About, Trophies, Organizers, Countdown, Timeline, Poster, Quotes },
    data() {
      return {
        intro: "",
        why: "",
        quotes: ""
      };
    },
    async asyncData({ $axios }) {
      let data = await $axios.$get("/", { headers: { Authorization: false } });
      return {
        intro: data.intro.text_fa,
        why: data.why,
        quotes: data.quotes
      };
    }
  };
</script>

<style scoped>

</style>
