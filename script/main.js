let vvue = new Vue({
  el: "#container",
  data: {
    workFor: "",
    restFor: 0,
    countDownSec: "00",
    countDownMin: "00",
    countDownHour: "00",
  },
  methods: {
    inputing(e) {
      //   console.log(e);

      if (this.workFor >= 120) {
        this.workFor = 120;
      }

      this.restFor = Math.round((this.workFor / 4) * 10) / 10;
    },
    startCountDown() {
      if (this.workFor === 0 || this.workFor === "") {
        alert("沒有努力專心的寶貝是不能成為番茄寶貝的!");
      } else {
        // input Minute
        // let inputMin = 1;

        // to sec
        let inputSec = this.workFor * 60;

        let counter = function (sec) {
          let hours;
          let mins;
          let secs;
          let countDown = setInterval(() => {
            hours = ~~(sec / 3600);
            // console.log(hours);
            this.countDownHour = hours.toString;
            mins = ~~((sec % 3600) / 60);
            // console.log(mins);
            this.countDownMin = mins.toString;
            secs = ~~(sec % 60);
            // console.log(secs);
            this.countDownSec = secs.toString;
            sec -= 1;
            if (sec < 0) {
              clearInterval(countDown);
            }
          }, 1000);
        };

        counter(inputSec);
      }
    },
  },
});
