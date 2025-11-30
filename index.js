const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

// Add keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.code === "KeyS") {
    start();
    isRunning = true;
  } else if (e.code === "Space") {
    e.preventDefault();
    stop();
    isRunning = false;
  } else if (e.code === "KeyR") {
    reset();
  }
});

// toggle theme
const themeToggleButton = document.getElementById("theme-toggle");
const wrapper = document.querySelector(".toggle-theme-wrapper");
const themeSwitch = document.querySelector("#toggle-switch");

// elements
const bodyElement = document.querySelector(".bg-violet-100");
const containerElement = document.querySelector(".container");
const stopwatchHeading = document.querySelector("#text-heading");
const themeLabel = document.querySelector(".theme-label");
const keyboardShortcuts = document.querySelector(".shortcuts");

themeToggleButton.addEventListener("click", () => {
  wrapper.classList.toggle("bg-blue-500");
  wrapper.classList.toggle("bg-slate-400");
  themeSwitch.classList.toggle("translate-x-5");
  bodyElement.classList.toggle("bg-slate-800");
  bodyElement.classList.toggle("bg-violet-100");
  containerElement.classList.toggle("bg-slate-600");
  containerElement.classList.toggle("bg-white");
  stopwatchHeading.classList.toggle("text-slate-400");
  stopwatchHeading.classList.toggle("text-slate-500");
  display.classList.toggle("text-slate-200");
  display.classList.toggle("text-slate-800");
  themeLabel.classList.toggle("text-slate-300");
  keyboardShortcuts.classList.toggle("text-slate-300");
  keyboardShortcuts.classList.toggle("text-slate-600");
});
