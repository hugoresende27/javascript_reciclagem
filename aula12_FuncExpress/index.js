
sayHello()

function sayHello(){
    console.log("Ola")
}

////////////////////////////// guardar numa var

let hello = function(){console.log("hey")}
hello()

///////////////////////////// guardar numa var e passar como agr para outra função

let hello2 = function(){document.getElementById('caixa1').innerHTML = "Olá"}

output(hello2)

function output(func){
    func()
}

////////////////////////////////////////////////////
let greeting = "Hello"

outputConsole(greeting)
outputSite(greeting)

function outputConsole(x){
    console.log(x)
}

function outputSite (x){
    document.getElementById('caixa2').innerHTML = x
}

///////////////////////////NESTED FUNCTIONS /////////////////////////////
function login(){
    let user = "Bro"
    let inbox = 55;

    function displayUser(){
        console.log("Olá ",user)
    }

    function displayInbox(){
        console.log ("Tem ",inbox, " novas mensagens")
    }

    displayUser()   
    displayInbox()
}

login() //ao fazer login vai correr as 2 funções contidas dentro


