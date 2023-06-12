    let addDOM = document.querySelector("#addBtn");
    let activityDOM = document.querySelector("#activity");
    let listDOM = document.querySelector("#list");
    let clearDOM = document.querySelector("#clearBtn")

    clearDOM.addEventListener("click",function(event){
        event.preventDefault()
        listDOM.innerHTML=""
        dataStore()
    })

    addDOM.addEventListener("click", function(event) {
    event.preventDefault();

    if (activityDOM.value) {
        let listitem = document.createElement("li");
        listitem.classList.add("item");
        listitem.innerHTML = `${activityDOM.value}<button id="Xbtn" class ="remove" onclick="removeFunc(this)">X</button>`;
        listDOM.append(listitem);
        activityDOM.value = "";
    } else if (!activityDOM.value) {
        alert("Boş ekleme yapamazsınız");
    }
    dataStore();
    });

    function dataStore() {
    localStorage.setItem("items", listDOM.innerHTML);
    }

    function dataShow() {
    listDOM.innerHTML = localStorage.getItem("items");
    }
    dataShow();

    function removeFunc(element) {
    let thatitem = element.parentElement;
    thatitem.remove();
    dataStore();
    }

    function myClickFunction(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("list22")
        }
        dataStore()
    }

listDOM.addEventListener("mouseover", myFunction);
listDOM.addEventListener("mouseout", myFunction);
listDOM.addEventListener("click",myClickFunction)


function myFunction(e) {
  if (e.target.tagName === "BUTTON") {
    e.target.classList.toggle("remove2");
  }if(e.target.tagName === "LI"){
    e.target.classList.toggle("list2")
  }
  dataStore()
}
