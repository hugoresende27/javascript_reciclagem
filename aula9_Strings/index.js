// metodos  e propriedades strings

var x = "Bro The Code"
var y = "  Bro Code  "

console.log(x.length)
console.log(x.charAt(4))
console.log(x.indexOf(" "))
console.log(x.lastIndexOf("d"))
console.log(x.lastIndexOf("d"))
console.log(y.trim())
console.log(x.toUpperCase())
console.log(x.toLowerCase())
console.log(x.slice(0,5))
console.log(x.slice(0,x.indexOf(" ")))  //primeiro nome, vai até ao espaço
console.log(x.slice(4))//corta os ultimos 4
console.log(x.slice(x.lastIndexOf(" ") +1)) //ultimo nome, vai do espaço para a frente +1 para cortar o espaço

var myStreet = "123 Fake Str"
var myCity = "Nowhere XY 23133"

var myAdress = myStreet.concat(" -- ", myCity)
console.log(myAdress)

var tel = "91-965-733-8"
var tel2 = tel.replaceAll("-","|")
console.log(tel2)

let user = "hugo resende"
//colocar apenas a primeira letra em Maiusculo, chaining methods
let firstLetter = user.charAt(0).toUpperCase() + user.slice(1)

console.log(firstLetter)

////////////////////////////////////////////////////////
//breaks e continues
for (let i=0; i<= 20; i++){
    if (i==13){
        //continue  //salta o 12 e segue
        break       //pára no 12
    }
    console.log(i)
}