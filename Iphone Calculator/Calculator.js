var btnOpt = document.querySelectorAll(".btn-orange")
var screens = document.querySelector(".create")
var numbers = document.querySelectorAll(".numbers")
var clear = document.querySelector(".clear")
var procent =document.querySelector(".procent")
var plusMinus = document.querySelector(".plusMinus")

var optState = false;
var opt = '';
var final = 0;

numbers.forEach(number => {
    number.addEventListener("click",showNumber);
    
    function showNumber(){
        
    if(screens.textContent === "0" || optState){
        screens.textContent="";
    }
        screens.textContent += this.textContent;
        optState=false;
    }

})  

btnOpt.forEach(operator => {
    operator.addEventListener("click",calculator);

    function calculator(){
        optState = true ;
        var newOpt = this.textContent;

        switch(opt){
            case "+":
                screens.textContent = final+Number(screens.textContent);
                break;
            case "-":
                screens.textContent = final-Number(screens.textContent);
                break;
            case "X":
                screens.textContent = final*Number(screens.textContent);
                break;
            case "/":
                screens.textContent = final/Number(screens.textContent);
                break;
        }

        final = Number(screens.textContent);
        opt = newOpt;
    }
})

clear.addEventListener("click",()=>{
    screens.textContent = "0"
})


procent.addEventListener("click",()=>{
    screens.textContent = screens.textContent/100;
})

plusMinus.addEventListener("click",()=>{
    if(Math.sign(screens.textContent)== "-1"){
        screens.textContent = Math.abs(screens.textContent);
    }else {
        screens.textContent = -screens.textContent
    }
})