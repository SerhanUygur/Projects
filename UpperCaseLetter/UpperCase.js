let sonucDOM = document.querySelector("#write")
function myFunction(){
    let strDOM = document.querySelector("#fill")
    let inputValue = strDOM.value
    let array = inputValue.split(" ") 
    const check = array.some(function(x){
        return x==""
    })
    if(check==true){
        array.pop()
        array.shift()
    }
    console.log(array)
    strDOM.value=" "
    let result = ""
for(let i=0;i<=array.length-1;i++){
    let firstLetter = array[i][0].toUpperCase()
    let restOfTheLetter=array[i].slice(1,array[i].length)
    result +=` ${firstLetter}${restOfTheLetter}`  
    
}
function dataSave(){
    localStorage.setItem("items",result)
}
dataSave()
sonucDOM.innerHTML=localStorage.getItem("items")
}

function datashow(){   
    sonucDOM.innerHTML=localStorage.getItem("items")
}
datashow()
