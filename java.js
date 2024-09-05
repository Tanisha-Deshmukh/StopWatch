// script.js
let startTime, updatedTime, difference, tInterval, running = false;
let minutes = 0, seconds = 0, milliseconds = 0;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

function startTimer() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = true;
    }
}

function stopTimer() {
    if (running) {
        running = false;
        clearInterval(tInterval);
        startButton.disabled = false;
        stopButton.disabled = true;
        resetButton.disabled = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    millisecondsDisplay.textContent = '00';
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    milliseconds = Math.floor((difference % 1000) / 10);
    seconds = Math.floor((difference / 1000) % 60);
    minutes = Math.floor((difference / (1000 * 60)) % 60);

    millisecondsDisplay.textContent = (milliseconds < 10 ? '0' : '') + milliseconds;
    secondsDisplay.textContent = (seconds < 10 ? '0' : '') + seconds;
    minutesDisplay.textContent = (minutes < 10 ? '0' : '') + minutes;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
