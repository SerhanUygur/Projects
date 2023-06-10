const inputDOM = document.querySelector("#input");
const textDOM = document.querySelector("#textwrite");

function myFunction() {
  const INPUTV = Array.from(inputDOM.value);
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < INPUTV.length; i++) {
    const lowercase = INPUTV[i].toLowerCase();
    if (vowels.includes(lowercase)) {
      INPUTV[i] = lowercase.toUpperCase();
    }
  }

  const reversedString = INPUTV.reverse().join("");
  textDOM.innerHTML = reversedString;
  inputDOM.value = "";
  datastore();
}

function datastore() {
  localStorage.setItem("items", textDOM.innerHTML);
}

function datashow() {
  textDOM.innerHTML = localStorage.getItem("items");
}

datashow();


