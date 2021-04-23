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
        let inputSec = this.workFor * 60;

        // let countDownHour = this.countDownHour;
        // let countDownMin = this.countDownMin;
        // let countDownSec = this.countDownSec;

        let counter = (sec) => {
          let hours;
          let mins;
          let secs;
          let countDown = setInterval(() => {
            // this is window object!!!!
            // console.log("this is ", this);
            // clearInterval(countDown);
            console.log("it is ", this);

            hours = ~~(sec / 3600);
            this.countDownHour = hours;
            // console.log(countDownHour);
            mins = ~~((sec % 3600) / 60);
            this.countDownMin = mins;
            // console.log(countDownMin);
            secs = ~~(sec % 60);
            this.countDownSec = secs;
            // console.log(countDownSec);
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
