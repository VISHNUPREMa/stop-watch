let startTime =0;
let pauseTime = 0;
let interval;
let running = false;
 let mins = 0;
 let secs = 0;
 let hrs = 0;

 const display = document.getElementById('timeDisplay');
 const startButton = document.getElementById('startBtn');
 const pauseButton = document.getElementById('pauseBtn');
 const resetButton = document.getElementById('resetBtn');

 startButton.addEventListener('click',startTimer);
 pauseButton.addEventListener('click',pauseTimer);
 resetButton.addEventListener('click',resetTimer);

 function startTimer(){
    if(!running){
        running = true;
        startTime = Date.now() - pauseTime;
        interval = setInterval(updateDisplay,1000);
    }
 }

 function pauseTimer(){
    if(running){
        running = false;
        pauseTime = Date.now() - startTime;
        clearInterval(interval);
    }
 }

 function updateDisplay(){
    const currentTime = Date.now();
    const endTime  = currentTime - startTime;
    display.textContent = timeFormat(endTime);
 }

 function timeFormat(milliseconds){
    secs = Math.floor((milliseconds/1000)%60);
    mins = Math.floor((milliseconds/(1000*60))%60);
    hrs = Math.floor((milliseconds/(1000*60*60))%24);

    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`
    
    
 }

 function pad(value){
    return value > 9 ? value : `0${value}`
 }

 function resetTimer(){
    running = 0;
    pauseTime =0;
    display.textContent = `00:00:00`
 }
