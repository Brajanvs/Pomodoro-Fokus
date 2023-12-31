const timerElement = document.getElementById("timer");
const timerButton = document.getElementById("timerButton");
const resetButton = document.getElementById("resetButton");
const audioPlayer = document.getElementById("audioPlayer");
const progresses = document.querySelectorAll(".select");
const timeSeconds = 1500;
const shortBreakSeconds = 300;
const longBreakSeconds = 900;
let timer = timeSeconds;
let intervalId;

audioPlayer.volume = 0.2;

timerButton.addEventListener("click", () => {
    if (intervalId) {
        stop();
    } else {
        startTimer();        
    }
})


progresses.forEach(element => {
    element.addEventListener('click', function() {
      selectProgress(this); 
    });
  });




function selectProgress(element) {    
    let selectClass = "button";
    let selectedProgress = document.querySelector(`.${selectClass}`);    
    selectedProgress.classList.remove(selectClass);
    element.classList.add(selectClass);
    resetTimerByElement(element);    
}


function showTime()  {
    let minutes = Math.floor(timer/60);
    let seconds = timer % 60;    
    timerElement.innerHTML = `${pad(minutes)}:${pad(seconds)}`;       
}

showTime();

function pad(num) {
    return num < 10 ? "0" + num : " " + num;
}

// reset

function startTimer() {    
    timerButton.textContent = "Pausar";
    intervalId = setInterval(() => {        
        if (timer === 0) {  
            let current = document.querySelector(".select");
            resetTimerByElement(current);          
            return;
        }
        timer--;
        showTime();
    }, 1000);

    audioPlayer.play();
}


function stop() {
    clearInterval(intervalId);
    intervalId = null;
    timerButton.innerHTML = "Iniciar"
    audioPlayer.pause();
}


function resetTimer() {
    stop();
    let selectedElement = document.querySelector(".button");
    resetTimerByElement(selectedElement);
}


function resetTimerBySeconds(seconds) {    
    stop();
    timer = seconds;
    showTime();
}

function resetTimerByElement(element) {
    if (element.id === "focus") {
        resetTimerBySeconds(timeSeconds);        
    } else if (element.id === "short-break") {
        resetTimerBySeconds(shortBreakSeconds); 
    } else {
        resetTimerBySeconds(longBreakSeconds);       
    }
}

resetButton.addEventListener("click", resetTimer);

