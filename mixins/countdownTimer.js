export default {
  props: {
    deadline: {
      type: Number
    }
  },
  data() {
    return {
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      statusType: ""
    };
  },
  mounted() {
    this.end = new Date(this.deadline).getTime();
    // Update the count down every 1 second
    this.timerCount(this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.end);
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    timerCount(end) {
      let now = new Date().getTime();
      let dist = end - now;

      if (dist < 0) {
        this.statusType = "expired";
        clearInterval(this.interval);
      } else {
        this.calcTime(dist);
        this.statusType = "running";
      }
    },
    calcTime(dist) {
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }
  }
};
