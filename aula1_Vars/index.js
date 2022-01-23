
//alert ('Estou de volta!')
console.log("i'm back !")

var x = 420;

console.log("são ",x)
console.log("são "+x)

var FirstName = "Hugo"
var LastName
console.log("Olá ",FirstName," "+LastName)
 LastName = null
console.log(LastName)
 LastName = false
console.log(LastName)
 LastName++
console.log(LastName)
var tudo = FirstName+LastName
console.log(tudo)

//let usado para scope limitado
//const para constantes

var friends = 27
console.log(friends **2)
console.log(friends % 2)
console.log(friends % 4)
//friends /=5;
friends %=2;
console.log(friends)

//////////////////////////hoisting//////////////
f = "zecas"
console.log(f)

var n1 ="Bro"
console.log(f,n1)
var f = "To"

//////////////////VAR VS LET////////////////////
// let é de 2015 é usado num scope {} let mais usado nos ciclos for
// var é usado na função, var pode fazer override a alguma var para trás 

for (let i=1; i<= 3 ; i++){
    console.log(i)
}

console.log(i)//index.js:49 Uncaught ReferenceError: i is not defined

for (var i=1; i<= 3 ; i++){
    console.log(i)
}

console.log(i)

function DoSome(){
    for (var i=1; i<= 3 ; i++){
        console.log(i)
    }
    
}

DoSome()