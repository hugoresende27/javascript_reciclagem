//podem ser Explicit vs Implicit

var myVar = Number("3.14")
var myVar2 = String(3.14)
var myVar3 = Boolean(NaN)
var myVar4 = Boolean(undefined)
var myVar5 = Boolean(0)
var myVar6 = Boolean(56)

console.log(myVar,myVar2,myVar3,myVar4,myVar5,myVar6)

//funções////////
function toCelsius(f){
    return (f-32) * (5/9)
}
function toFare(c){
    return (c*9/5) + 32
}

console.log(toCelsius(90))
console.log(toFare(37.5))