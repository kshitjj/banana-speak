let btnTranslate = document.querySelector(".btn-translate");
let inputTranslate = document.querySelector(".input-translate");
let output = document.querySelector(".output");
let url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";

function getInputURL() {
    let inputText = inputTranslate.value;
    return (url + inputText)
}

function doFetch() {
    fetch(getInputURL())
        .then(response => response.json())
        .then(json=> ((output.textContent = (json.contents.text)))); 

}


btnTranslate.addEventListener("click",doFetch);