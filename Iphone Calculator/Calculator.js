let btnOpt = document.querySelectorAll(".btn-orange")
let screens = document.querySelector(".create")
let numbers = document.querySelectorAll(".numbers")
let clear = document.querySelector(".clear")
let plusMinus = document.querySelector(".plusMinus")
let persent = document.querySelector(".procent")
let comma = document.querySelector(".comma")

let final = 0;
let operation = false;
let opt ="";
console.log(screens.innerHTML)


numbers.forEach(number => {
    if(screens.textContent[screens.textContent.length-1] !=="."){}
    number.addEventListener("click",showNumber)

 
    function showNumber(){
        if(screens.innerHTML==="0" || operation){
            screens.innerHTML=""
            if(this.textContent ==="."){
                screens.innerHTML="0"
                
            }
        }

        

        screens.textContent += this.textContent 
        operation=false;  
        

        function hasDuplicateValue(arr,value){
            let count =0;
            for(let i = 0;i<arr.length;i++){
                if(arr[i]===value){
                    count ++
                    if(count==2){
                        return true
                    }
                }
            }
            return false;
        }

        if(hasDuplicateValue(screens.textContent.split(""),".")){
            
            screens.textContent=screens.textContent.slice(0,screens.textContent.length-1)
        }
    }
})



btnOpt.forEach(element =>{
    element.addEventListener("click",calc)
    
    function calc( ){
        operation=true;
        let newOpt = this.textContent
        switch(opt){
            case "+":
                screens.textContent = final + Number(screens.textContent)
            break;
            case "-":
                screens.textContent = final - Number(screens.textContent)
            break;
            case "*":
                screens.textContent = final * Number(screens.textContent)
            break;
            case "/":
                screens.textContent = final / Number(screens.textContent)
            break;
        }
        final = Number(screens.innerHTML);
        opt = newOpt;
    }
})


clear.addEventListener("click",()=>{
    screens.innerHTML="0"
    operation=false;
})

plusMinus.addEventListener("click",()=>{
    if(Math.sign(screens.innerHTML == "-1")){
        screens.innerHTML = Math.abs(screens.innerHTML)
    }else{
        screens.innerHTML = -screens.innerHTML
    }
})

persent.addEventListener("click",()=>{
    screens.innerHTML = screens.innerHTML/100
})


