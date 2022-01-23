//callback "I will call back later!"
//A callback is a function passed as an argument to another function
//This technique allows a function to call another function
//A callback function can run after another function has finished 
// nested functions

let msg 

function  displayConsole(params) {
    console.log(params)
}

function displayDOM(output) {
    document.getElementById("caixa1").innerHTML = output
}

function setMsg(txt,callBack){
    msg = txt
    //return msg
    //displayConsole(msg)
    callBack(msg)
}

/*
displayConsole (setMsg("Ola bros!"))
displayDOM (setMsg("Ola bros!"))
*/
setMsg("Heyyy",displayConsole)
setMsg("Heyyy",displayDOM)
