const StartBTN = document.querySelector(".StartBtn")
const StopBTN = document.querySelector(".StopBtn")
const ResetBTN = document.querySelector(".ResetBtn")
let TimeDisplay = document.querySelector("#timeDisplay")
const LapBTN = document.querySelector(".LapBtn")
let Laps = document.querySelector(".Laps")
let resetLaps = document.querySelector("#resetLapBtn")

let seconds=0;
let interval=null;
let hrs = 0;
let mins = 0;
let secs = 0;
let milisec = 0;
let pause = true


function timeCount(){
    milisec +=1
    if(milisec==100){
    seconds += 1
     milisec = 0
    }
    if(milisec.toString().length==1){
        return "0"+ milisec
    }

    hrs = Math.floor(seconds/3600)
    mins = Math.floor((seconds-(hrs*60*60))/60)
    secs = Math.floor(seconds % 60)

    function pad(nun){
        if(nun>9){
            return nun
        }else if(nun<10){
            return "0"+nun
        }
    }
    secs = pad(secs)
    mins = pad(mins)
    hrs = pad(hrs)
   

    TimeDisplay.innerHTML=`${hrs}:${mins}:${secs},${milisec}`
}

StartBTN.addEventListener("click",()=>{
    if(pause){
    pause=false;
    interval=setInterval(timeCount,(10))
    }
})

StopBTN.addEventListener("click",()=>{
    if(!pause){
        pause=true
    clearInterval(interval)
}
})

ResetBTN.addEventListener("click",()=>{
    pause=true
    hrs = 0
    mins= 0
    secs= 0
    seconds=0
    milisec=0
    TimeDisplay.innerHTML =`${"0"+hrs}:${"0"+mins}:${"0"+secs},${"0"+milisec}`
    clearInterval(interval)
})

LapBTN.addEventListener("click",()=>{
    if(!pause){
        let listItem = document.createElement("li")
        listItem.innerHTML = TimeDisplay.innerHTML    
        Laps.append(listItem)   
    }
})

resetLaps.addEventListener("click",()=>{
    Laps.innerHTML=""
})


