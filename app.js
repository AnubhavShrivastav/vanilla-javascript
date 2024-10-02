//alert("hello world")

//ex-2
//input
//let userName = prompt("Enter your userName")

//processing
//let welcome = "welcome " + userName;

//output
//alert(welcome)

//const password = Number(prompt("enter your password"));
//alert(password)

//ex-3

const button = document.querySelector('.btn').addEventListener('click',clickhandler)


//ex-4
const textarea = document.querySelector('textarea[name = "translator"]')

function clickhandler(){
    // console.log('clicked')
    // console.log("input:",textarea.value)
    outputText.innerText = "dev " + textarea.value
}


//ex-5

const outputText = document.querySelector('#output')











