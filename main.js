let timerElement = document.getElementById("timer");
let timerButton = document.getElementById("timerButton");
let timeSeconds = 1500;
let intervalId = null;
// let changeButton = document.getElementById("timer");

function timeBack() {

    if (timeSeconds <= 0) {
        stop();
        alert("Tiempo Finalizado");
        return;
    }
    console.log(timeSeconds)
    timeSeconds -= 1;
    showTime()
}

timerButton.addEventListener("click", starStop);

function starStop() {
    if (intervalId) {
         stop();
         return;
    }
    intervalId = setInterval (timeBack, 1000);
    timerButton.innerHTML = "Pausar"
}

function stop() {
    clearInterval(intervalId);
    intervalId = null;
    timerButton.innerHTML = "Iniciar"
}

function pad(num) {
    return num < 10 ? "0" + num : " " + num;
}

function showTime() {
    let minutes = Math.floor(timeSeconds/60)
    let seconds = timeSeconds % 60;
    timerElement.innerHTML = `${pad(minutes)} : ${pad(seconds)}`;
}

showTime();