const txtInput = document.querySelector("textarea[name = 'txt-input']")
const button = document.querySelector('.btn-translate').addEventListener('click',clickhandler)
const outputText = document.querySelector('#output')

let serverURL = "https://api.funtranslations.com/translate/minion.json";


function translationURL(text){
    return serverURL + "?" + "text=" + text 
}

function clickhandler(){
    // console.log('clicked')
    // console.log("input:",textarea.value)
    outputText.innerText = "hi! " + txtInput.value;
}













