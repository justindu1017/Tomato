let vvue = new Vue({
  el: "#container",
  data: {
    workFor: "",
    restFor: 0,
    countDownSec: "00",
    countDownMin: "00",
    countDownHour: "00",
    countDown: "",
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
        $("#cancelBtn").attr("disabled", false);

        let inputSec = this.workFor * 60;

        let counter = (sec) => {
          let hours;
          let mins;
          let secs;
          this.countDown = setInterval(() => {
            // this is window object!!!!
            // console.log("this is ", this);
            // clearInterval(countDown);

            hours = ~~(sec / 3600);
            // .toString().padStart(2, "0");

            this.countDownHour = hours.toString().padStart(2, "0");
            mins = ~~((sec % 3600) / 60);
            this.countDownMin = mins.toString().padStart(2, "0");

            secs = ~~(sec % 60);
            this.countDownSec = secs.toString().padStart(2, "0");

            // not working???
            // this.countDownSec = ~~(sec % 60).toString().padStart(2, "0");
            // this.countDownSec = secs;

            sec -= 1;
            if (sec < 0) {
              this.workFor = "";
              this.restFor = 0;
              this.countDownSec = "00";
              this.countDownMin = "00";
              this.countDownHour = "00";
              alert(
                "恭喜寶貝成為變成番茄寶貝了~~~\n休息個" +
                  this.restFor +
                  "分鐘吧~"
              );
              clearInterval(this.countDown);
            }
          }, 1000);
        };

        counter(inputSec);
      }
    },
    cancelTiming() {
      $("#cancelBtn").attr("disabled", true);
      clearInterval(this.countDown);
      this.workFor = "";
      this.restFor = 0;
      this.countDownSec = "00";
      this.countDownMin = "00";
      this.countDownHour = "00";
    },
  },
});
