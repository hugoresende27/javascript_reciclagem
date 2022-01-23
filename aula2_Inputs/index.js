/* EASY WAY
var myName = window.prompt("Nome?")
console.log("Olá ",myName)
*/

document.getElementById('myBtn').onclick = function(){

    var myName = document.getElementById('ex1').value
    console.log("Olá ", myName)
}