// JavaScript source code

var timerFace = document.querySelector("#timerFace");

let timer;
let milisecond = 10;

function timerStart() {
    clearInterval(timer);
    timer = setInterval(() => {
        milisecond += 10;
        let dateTimer = new Date(milisecond);
        timerFace.innerHTML =
            ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
    }, 10);
}

function timerPause() {
    clearInterval(timer);
}

function timerReset() {
    setInterval(timer)
    milisecond = 0;
    timerFace.innerHTML = "00:00:00:00";
}

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.id === "timerStart") timerStart();
    if (el.id === "timerPause") timerPause();
    if (el.id === "timerReset") timerReset();
})