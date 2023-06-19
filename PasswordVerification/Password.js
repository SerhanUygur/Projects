let input = document.querySelector(".input")
let cond = document.querySelectorAll(".conditions")
let con1 = document.querySelector(".con1")
let con2 = document.querySelector(".con2")
let con3 = document.querySelector(".con3")
let con4 = document.querySelector(".con4")
let con5 = document.querySelector(".con5")

let INPUTV = input.value


input.addEventListener("input",myFunction)

function myFunction(){
    let INPUTV = input.value
    let INPUTarray = INPUTV.split("")
    // No gap Criteria
    if(INPUTarray[INPUTarray.length-1] ===" "){
         INPUTarray.pop()
        
        input.value=INPUTarray.join("")
    }
    // First Criteria
    if(INPUTV.length <=8 && INPUTV.length >= 1){
    con1.style.color="red"
    }else if(INPUTV.length >8){
    con1.style.color="green"
    }
    // Second Criteria
    if(INPUTarray.some((x)=>Number(x))||INPUTarray.some((x)=>x=="0")){
        con2.style.color="Green"
    }else{
        con2.style.color="Red"
    }
    let Symbol = ["?","/","%",">","<","#","+","-",":","^","&","(",")","[","]","_","|","½","@","!","=",";","$","{","}"]  
    // Third Criteria
    if(INPUTarray.some((x)=>x===x.toLowerCase())&& INPUTarray.some((x)=>Symbol.includes(x) == false)){
        con3.style.color ="Green"
    }else{
        con3.style.color = "red"
    }
    // Fourth Criteria
     if(INPUTarray.some((x)=>Symbol.includes(x))){
            con4.style.color ="Green"
     }else{
         con4.style.color = "Red"
     }
    
    //fifth Criteria
    if(INPUTarray.some((x)=>x===x.toUpperCase()) && INPUTarray.some((x)=>Symbol.includes(x) == false) ){
        con5.style.color ="Green"
    }else {
        con5.style.color = "red"
    }
    //After delete default everything
    if(!input.value){
        con1.style.color="black"
        con2.style.color="black"
        con3.style.color="black"
        con4.style.color="black"
        con5.style.color="black"
    }
    }
    
