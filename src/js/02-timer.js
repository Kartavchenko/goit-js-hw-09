// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  btnStart: document.querySelector("[data-start]"),
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
}

const disabledBtn = refs.btnStart.setAttribute("disabled", "");   

const currentTime = Date.now();

const timerCalendar = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose,
});

function onClose(selectedDates) {
  if (currentTime > selectedDates[0]) {
    return alert("Please choose a date in the future");
  };
  refs.btnStart.removeAttribute("disabled");
  console.log("you can");

  const countdown = {
  interval: null,

  start() {
    refs.btnStart.setAttribute("disabled", ""); 

    this.interval = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = selectedDates[0] - currentTime;
    const time = convertMs(deltaTime);
      changeClockFace(time);
      if (deltaTime < 0) {
        clearInterval(this.interval);
        const time = convertMs(0);
        changeClockFace(time);
      }
      }, 1000);
  },
};
  refs.btnStart.addEventListener("click", countdown.start);
  console.log(selectedDates[0]);
};

function changeClockFace({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}