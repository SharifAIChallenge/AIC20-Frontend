<template>
  <div>
    <poster/>
    <countdown/>
    <timeline/>
    <div class="bg-dotted">
      <trophies/>
    </div>
    <organizers/>
  </div>
</template>

<script>
  import Poster from "./Poster";
  import Timeline from "./Timeline";
  import Countdown from "./Countdown";
  import Organizers from "./Organizers";
  import Trophies from "./Trophies";

  export default {
    auth: false,
    name: "LandingPage",
    components: { Trophies, Organizers, Countdown, Timeline, Poster }
  };
</script>

<style scoped>

</style>
