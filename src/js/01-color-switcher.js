
const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");
 
let timerId = null;
let isActive = false;

btnStart.addEventListener("click", clickOnStart);
btnStop.addEventListener("click", clickOnStop);

function clickOnStart() {
    if (isActive = true) {
      btnStart.setAttribute("disabled", "");
      btnStop.removeAttribute("disabled");
    }
    timerId = setInterval(getColorBody, 1000);
    console.log("start change color");
}

function clickOnStop() {
    if (isActive) {
        btnStart.removeAttribute("disabled");
    }
    btnStop.setAttribute("disabled", "");
    clearInterval(timerId);
    console.log("stop change color");
}

function getColorBody() {
    document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}