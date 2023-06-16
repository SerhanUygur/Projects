let AC = document.querySelector("#AC")
let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let four = document.querySelector("#four")
let five = document.querySelector("#five")
let six = document.querySelector("#six")
let seven = document.querySelector("#seven")
let eight = document.querySelector("#eight")
let nine = document.querySelector("#nine")
let zero = document.querySelector("#zero")

let write = document.querySelector(".input")

AC.addEventListener("click",()=>{
    write.innerHTML="0"
})
one.addEventListener("click",()=>{
    if(write.innerHTML=="0"){
    write.innerHTML =""
    write.innerHTML += 1}else{
        write.innerHTML += 1 
    }
})
two.addEventListener("click",()=>{
    if(write.innerHTML=="0"){
        write.innerHTML =""
        write.innerHTML += 2}else{
            write.innerHTML += 2 
        }
})
three.addEventListener("click",()=>{
    if(write.innerHTML=="0"){
        write.innerHTML =""
        write.innerHTML += 3}else{
            write.innerHTML += 3 
        }
})
four.addEventListener("click",()=>{
    if(write.innerHTML=="0"){
        write.innerHTML =""
        write.innerHTML += 4}else{
            write.innerHTML += 4 
        }
})
five.addEventListener("click",()=>{
    if(write.innerHTML=="0"){
        write.innerHTML =""
        write.innerHTML += 5}else{
            write.innerHTML += 5 
        }
})
six.addEventListener("click",()=>{
    if(write.innerHTML=="0"){
        write.innerHTML =""
        write.innerHTML += 6}else{
            write.innerHTML += 6 
        }
})
seven.addEventListener("click",()=>{
    if(write.innerHTML=="0"){
        write.innerHTML =""
        write.innerHTML += 7}else{
            write.innerHTML += 7 
        }
})
eight.addEventListener("click",()=>{
    if(write.innerHTML=="0"){
        write.innerHTML =""
        write.innerHTML += 8}else{
            write.innerHTML += 8 
        }
})
nine.addEventListener("click",()=>{
    if(write.innerHTML=="0"){
        write.innerHTML =""
        write.innerHTML += 9}else{
            write.innerHTML += 9 
        }
    console.log(typeof(write.innerHTML))
})
zero.addEventListener("click",()=>{
    if(!write.innerHTML){
    write.innerHTML = ""
    }else if(write.innerHTML !== "0"){
        write.innerHTML +=0
    }
})  



