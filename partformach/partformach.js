let icon = document.querySelector(".fa-sharp")

icon.addEventListener("mouseover",()=>{
    icon.classList.add("fa-spin")
})

icon.addEventListener("mouseleave",()=>{
    icon.classList.remove("fa-spin")
})