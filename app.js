const txtInput = document.querySelector("textarea[name = 'txt-input']")
const button = document.querySelector('.btn-translate').addEventListener('click',clickhandler)
const outputText = document.querySelector('#output')

let serverURL = "https://api.funtranslations.com/translate/minion.json";


function translationURL(text){
    return serverURL + "?" + "text=" + text 
}

function errorHandler(error){
    console.log("error occured" , error);
    alert("someting went wrong with server! try again after some time")
}

function clickhandler(){

    let inputText = txtInput.value; //taking input

    //calling  server for processing
    fetch(translationURL(inputText))
    .then(response => response.json())
    .then(json => {
        let translationText = json.contents.translated;
        outputText.innerText = translationText; //output
    })
    .catch(errorHandler)

}













