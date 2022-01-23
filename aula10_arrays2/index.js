//foreach

let arr1 = [9,8,7,5,6,2,5,6,9,5]
let total = 0

function soma(e){
    total += e
}

arr1.forEach(soma)
console.log("TOTAL:: "+total)

function toEuros(v){
    v*=0.85
    return v
}

/////////////MAP METODO//////////////////////
//função map vai aramazenar num novo array valores retornados pela função
let storeEUR = arr1.map(toEuros)
console.log(arr1)
console.log(storeEUR)

function soma2(e){
    return e+2
}

let xxx = arr1.map(soma2)
console.log(xxx)

/////////////FILTER METODO//////////////////////
let estudantes = [16,17,18,19,20]

function checkAge(age){
    if (age>= 18){
        return age
    }
}

let adultos = estudantes.filter(checkAge)
console.log(adultos)//[18, 19, 20]

let adultos2 = estudantes.map(checkAge)
console.log(adultos2)// [undefined, undefined, 18, 19, 20]

/////////////REDUCE METODO//////////////////////
//reduz array para um valor único

let letras = ['a','b','c','d','e']

function combineLetras(total, nextLetra, index, array){
    return total + nextLetra
}

let word = letras.reduce(combineLetras)
console.log(word)
let word2 = letras.reduceRight(combineLetras)   //inverte a ordem
console.log(word2)