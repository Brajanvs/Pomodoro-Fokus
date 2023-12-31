const timerElement = document.getElementById("timer");
const timerButton = document.getElementById("timerButton");
const progresses = document.querySelectorAll(".select");
const timeSeconds = 1500;
const shortBreakSeconds = 300;
const longBreakSeconds = 900;
let timer = timeSeconds;
let intervalId;


//ojo

timerButton.addEventListener("click", () => {
    if (intervalId) {
        stop();
    } else {
        startTimer();        
    }
})

// Ojo aqui

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


// ojo

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
            let current = document.querySelector(".button");
            resetTimerByElement(current);          
            return;
        }
        timer--;
        showTime();
    }, 1000);
}


function stop() {
    clearInterval(intervalId);
    intervalId = null;
    timerButton.innerHTML = "Iniciar"
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