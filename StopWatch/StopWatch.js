const timeDisplay = document.querySelector("#timeDisplay")
const startBtn = document.querySelector(".StartBtn")
const stopBtn = document.querySelector(".StopBtn")
const resetBtn = document.querySelector(".ResetBtn")



let startTime = 0;
let elapsedTime = 0;
// let currentTime = 0; 
let paused = true;
let IntervalId;
let hrs = 0;
let min = 0;
let secs = 0; 
let milisec = 0;

startBtn.addEventListener("click",()=>{
    if(paused){
        paused=false;
        startTime=Date.now()-elapsedTime
        IntervalId = setInterval(updateTime,100)  
    }

})

stopBtn.addEventListener("click", ()=>{
        if(!paused){
            paused=true
            elapsedTime = Date.now()-startTime
            clearInterval(IntervalId)
        }
})

resetBtn.addEventListener("click",()=>{
    paused=true
    clearInterval(IntervalId)
     startTime = 0;
     elapsedTime = 0;
     currentTime = 0;
     hrs = 0;
     min = 0;
     secs = 0;
     milisec=0;
     timeDisplay.innerHTML="00:00:00:00" 
        
})

function updateTime(){
        elapsedTime=Date.now()-startTime      
        secs = Math.floor((elapsedTime/1000) % 60)
        min = Math.floor((elapsedTime/(1000 * 60)) %60)
        hrs = Math.floor((elapsedTime/(1000 * 60 * 60)) %60)
        milisec = Math.floor((elapsedTime/(100)) %60)
    
        secs = pad(secs)
        min = pad(min)
        hrs = pad(hrs)
        milisec=pad(milisec)

        timeDisplay.innerHTML=`${hrs}:${min}:${secs}:${milisec}`
        
        function pad(unit){
            return (("0") + unit).length > 2 ? unit : "0" + unit
        }
}
