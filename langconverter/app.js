const inputTxt = document.querySelector("textarea[name = 'inputtxt']");
const btn = document.querySelector("#btn-translate").addEventListener('click',clickhandler);
const output = document.querySelector(".output");

let serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function URLRequest(text){
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
   console.log("Error occured",error)
   alert("something went wrong with server! try again after sometimes.")
}



function clickhandler(){
let input = inputTxt.value;//input

//processing 
fetch(URLRequest(input))
.then(response => response.json())
.then(json =>{
    let translationText = json.contents.translated;
    output.innerText = translationText //output
})
.catch(errorHandler)
}