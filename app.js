let btnTranslate = document.querySelector(".btn-translate");
let inputTranslate = document.querySelector(".input-translate");
let output = document.querySelector(".output");

function callBack(){
    output.innerHTML = "dfklsdjf" + inputTranslate.value;

}
btnTranslate.addEventListener("click", callBack);

