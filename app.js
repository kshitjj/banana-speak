let btnTranslate = document.querySelector(".submit-btn");
let inputTranslate = document.querySelector(".inputArea .textarea");
let output = document.querySelector(".output");
let url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";

function getInputURL() {
    let inputText = inputTranslate.value;
    return (url + inputText)
}

function errorHandler(error){
    console.log("error occured " + error)
    alert("There has been a problem with the server!");

}

function doFetch() {
    fetch(getInputURL())
        .then(response => response.json())
        .then(json=> ((output.textContent = (json.contents.text))))
        .catch(errorHandler)
}


btnTranslate.addEventListener("click",doFetch);