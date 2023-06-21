const wrapper = document.querySelector(".wrapper")
const qrInput = document.querySelector(".form input")
const generateBtn = wrapper.querySelector(".form button")
const qrImg = wrapper.querySelector(".qr-code img")

generateBtn.addEventListener("click",()=>{
    let qrValue = qrInput.value
    if(!qrValue) return;
    generateBtn.innerHTML = "Generating QR code...."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue} `
    wrapper.classList.add("active")
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active")
        generateBtn.innerHTML = "Generate a QR code"
    })
})

qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active")
    }
})