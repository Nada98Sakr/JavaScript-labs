let alarmBtn = document.getElementById("alarmBtn");
let closeBtn = document.querySelector(".close");
let alarmAudio = new Audio("./mixkit-alarm-digital-clock-beep-989.wav");

alarmBtn.addEventListener("click", () => {
  document.querySelector("#alarmSec").style.display = "block";
  document.querySelector(".clockSec").style.opacity = 0.5;
});

closeBtn.addEventListener("click", () => {
  document.querySelector("#alarmSec").style.display = "none";
  document.querySelector(".clockSec").style.opacity = 1;
});

function DateNow() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let day = date.getDay();

  if (hr == 0) {
    hr = 12;
  }

  if (hr > 12) {
    hr = hr - 12;
    session = "PM";
  }

  return { hours: hr, minutes: min, seconds: sec, dayNow: day };
}

function showTime() {
  let session = "AM";
  let date = DateNow();

  let hr = date.hours < 10 ? "0" + date.hours : date.hours;
  let min = date.minutes < 10 ? "0" + date.minutes : date.minutes;
  let sec = date.seconds < 10 ? "0" + date.seconds : date.seconds;

  document.querySelector(".time").innerHTML = `${hr} : ${min} : ${sec}`;
  document.querySelector(".session").innerHTML = session;
  let AllP = document.querySelectorAll(".days > p");

  AllP.forEach((p) => {
    p.classList.remove("active");
  });
  AllP.forEach((p) => {
    if (p.classList.contains(date.dayNow)) {
      p.classList.add("active");
    }
  });
}

function setAlarm() {
  let alarmForm = document.querySelector(".Alarm");
  let AlarmInterval = 0;
  alarmForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.submitter.classList.contains("SetBtn")) {
      let alarmTime = CalcAlarm();

      AlarmInterval = setInterval(() => {
        let dateNow = DateNow();
        if (
          dateNow.hours >= alarmTime.hr &&
          dateNow.minutes >= alarmTime.min &&
          dateNow.seconds >= alarmTime.sec
        ) {
          alarmAudio.play();
          clearInterval(AlarmInterval);
        }
      }, 1000);
      ResetBtnVal();
    } else if (e.submitter.classList.contains("clrBtn")) {
      ResetBtnVal();
      clearInterval(AlarmInterval);
    }
  });
}

function CalcAlarm() {
  let hours = Number(document.querySelector(".hrInp").value);
  let mins = Number(document.querySelector(".minInp").value);
  let secs = Number(document.querySelector(".secInp").value);

  document.querySelector(".hrInp").disable = true;
  document.querySelector(".minInp").disable = true;
  document.querySelector(".secInp").disable = true;

  let dateNow = DateNow();
  let alarmTime = {
    hr: dateNow.hours + hours,
    min: dateNow.minutes + mins,
    sec: dateNow.seconds + secs,
  };
  return alarmTime;
}

function ResetBtnVal() {
  document.querySelector(".hrInp").value = "";
  document.querySelector(".minInp").value = "";
  document.querySelector(".secInp").value = "";

  document.querySelector(".hrInp").disable = false;
  document.querySelector(".minInp").disable = false;
  document.querySelector(".secInp").disable = false;
}

function showTimeLeft() {
  document.querySelector(".hrInp").disable = false;
  document.querySelector(".minInp").disable = false;
  document.querySelector(".secInp").disable = false;

  document.getElementById("hrInp").value = hours;
  document.getElementById("minInp").value = mins;
  document.getElementById("secInp").value = secs;
}

setAlarm();
setInterval(showTime, 1000);
