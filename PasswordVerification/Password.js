let input = document.querySelector(".input")
let cond = document.querySelectorAll(".conditions")
let con1 = document.querySelector(".con1")
let con2 = document.querySelector(".con2")
let con3 = document.querySelector(".con3")
let con4 = document.querySelector(".con4")
let con5 = document.querySelector(".con5")
let StaDom =document.querySelector(".Status")


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
    if(INPUTV.length <=8 && INPUTV.length >= 1 || !INPUTV){
    con1.style.color="red"
    con1.classList.remove("listclass")
    }else if(INPUTV.length >8){
    con1.style.color="green"
    con1.classList.add("listclass")
    }
    // Second Criteria
    let nums = (INPUTarray.some((x)=>Number(x))||INPUTarray.some((x)=>x=="0"))
    if(nums){
        con2.style.color="Green"
        con2.classList.add("listclass")
    }else{
        con2.style.color="Red"
        con2.classList.remove("listclass")
    }
    let Symbol = ["?","/","%",">","<","#","+","-",":","^","&","(",")","[","]","_","|","½","@","!","=",";","$","{","}"]  
    // Third Criteria
    let filteredArray = INPUTarray.filter(x => /^[a-zA-Z]+$/.test(x))
    if(filteredArray.some((x)=>x===x.toLowerCase())){
        con3.style.color ="Green"
        con3.classList.add("listclass")
    }else{
        con3.style.color = "red"
        con3.classList.remove("listclass")
    }
    // Fourth Criteria
     if(INPUTarray.some((x)=>Symbol.includes(x))){
            con4.style.color ="Green"
            con4.classList.add("listclass")
     }else{
            con4.style.color = "Red"
            con4.classList.remove("listclass")
     }
    
    //fifth Criteria
    if(filteredArray.some((x)=>x===x.toUpperCase())){
        con5.style.color ="Green"
        con5.classList.add("listclass")
    }else{
        con5.style.color = "red"
        con5.classList.remove("listclass")
    }
    //After delete default everything
    if(!input.value){
        con1.style.color="black"
        con2.style.color="black"
        con3.style.color="black"
        con4.style.color="black"
        con5.style.color="black"
    }
    INPUTV.length >8 && nums && filteredArray.some((x)=>x===x.toLowerCase()) &&INPUTarray.some((x)=>Symbol.includes(x))&&filteredArray.some((x)=>x===x.toUpperCase())
    if(INPUTV.length >=1|| nums){
        StaDom.classList.add("StatusWeak")
        StaDom.classList.remove("Status")
        StaDom.classList.remove("StatusMedium")
        StaDom.classList.remove("StatusStrong")
        StaDom.innerHTML="Weak"
    }if (INPUTV.length >8 && nums && filteredArray.some((x)=>x===x.toLowerCase())){
        StaDom.classList.add("StatusMedium")
        // StaDom.classList.remove("Status")
        StaDom.classList.remove("StatusWeak")
        StaDom.classList.remove("StatusStrong")
        StaDom.innerHTML="Medium"
    }if(INPUTV.length >8 && nums && filteredArray.some((x)=>x===x.toLowerCase()) &&INPUTarray.some((x)=>Symbol.includes(x))&&filteredArray.some((x)=>x===x.toUpperCase())){
        StaDom.classList.add("StatusStrong")
        // StaDom.classList.remove("Status")
        StaDom.classList.remove("StatusWeak")
        StaDom.classList.remove("StatusMedium")
        StaDom.innerHTML ="Strong"
    }
    if(!input.value){
        StaDom.classList.add("Status")
        StaDom.classList.remove("StatusWeak")
        StaDom.classList.remove("StatusMedium")
        StaDom.classList.remove("StatusStrong")
        StaDom.innerHTML ="Password Status:Weak-Medium-Strong"
    }
    }
    
// let me = ["s","a","1","A"]


// let filtered =me.filter((x)=>x >= 0)

// let final = me-filtered
// console.log(filtered)
// console.log(final)