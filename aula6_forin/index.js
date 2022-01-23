//for normal

let letras = ['A', 'B', 'C', 'D']

for (let i=0; i<letras.length; i++){
    console.log(letras[i])
}

//for in

for(let i in letras){
    console.log("For in- "+letras[i])
}

//for in num objeto
var Car = {
    make : "Fiat",
    model : "Punto",
    year : 2000,
    color : "blue",

}

for (let p in Car){
    console.log(Car[p])
}


//Nested loops
var simb = window.prompt("Simbolo::")
var lin = window.prompt("Linhas::")
var col = window.prompt("Colunas::")

for (let i=0; i<col; i++){
    for(let j=0; j<lin; j++){
        console.log(simb)
        document.getElementById('myRet').innerHTML += simb
    }
    document.getElementById('myRet').innerHTML += "<br>"  
}

