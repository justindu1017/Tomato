// input Minute
let inputMin = 1;

// to sec
let inputSec = inputMin * 60;
console.log(inputSec, " sec");

let counter = function (sec) {
  let hours;
  let mins;
  let secs;
  let countDown = setInterval(() => {
    hours = ~~(sec / 3600);
    console.log(hours);
    mins = ~~((sec % 3600) / 60);
    console.log(mins);
    secs = ~~(sec % 60);
    console.log(secs);
    sec -= 1;
    // console.log(countDown);
    if (sec < 0) {
      clearInterval(countDown);
    }
  }, 1000);
};

counter(inputSec);
