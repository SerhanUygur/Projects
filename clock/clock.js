const Clock = document.querySelector(".time")
const DATE = new Date()
const hours = DATE.getHours()
const mins = DATE.getMinutes()
const secs = DATE.getSeconds()
const times = `${hours}:${mins}:${secs}`
Clock.innerHTML=times

let interval ; 

let seconds = 0;

function timecount(){
    const DATE = new Date()
    const hours = DATE.getHours()
    const mins = DATE.getMinutes()
    const secs = DATE.getSeconds()
    
    function pad(nun){
        if(nun>9){
            return nun
        }if(nun<10){
            return "0"+nun
        }
    }
    let newsecs = pad(secs)
    let newmins = pad(mins)
    let newhours = pad(hours)

    if(newhours>=12){
    const times = `${newhours}:${newmins}:${newsecs} PM`
    Clock.innerHTML=times
    }
    if(newhours<12){
        const times = `${newhours}:${newmins}:${newsecs} AM`
        Clock.innerHTML=times
        }

    
}

setInterval(timecount,1000)