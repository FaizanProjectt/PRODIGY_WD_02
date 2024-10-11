let startTime;
let updatedTime;
let difference;
let timeInterval;
let running = false;

const timeDisplay = document.getElementById("time");

document.getElementById("start").onclick = function () {
  if (!running) {
    startTime = new Date().getTime();
    timeInterval = setInterval(updateTime, 10);
    running = true;
  }
};

document.getElementById("stop").onclick = function () {
  clearInterval(timeInterval);
  running = false;
};

document.getElementById("reset").onclick = function () {
  clearInterval(timeInterval);
  running = false;
  timeDisplay.innerHTML = "00.00.00";
  difference = 0;
};

document.getElementById("lap").onclick = function () {
  if (timeDisplay.innerHTML !== "00:00:00") {
    const lapTime = timeDisplay.innerHTML;
    const lapsDiv = document.getElementById("laps");
    const lapsElement = document.createElement("div");
    lapsElement.textContent = lapTime;
    lapsDiv.appendChild(lapsElement);
  }
};

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  timeDisplay.innerHTML =
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;
}
